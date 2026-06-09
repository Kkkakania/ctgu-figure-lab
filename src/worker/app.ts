import { Hono } from 'hono'
import { z } from 'zod'
import { estimateDeepSeekChargeCents } from '../core/pricing'
import { renderSvgFigure } from '../core/render'
import { CORE_TEMPLATES, recommendTemplates } from '../core/templates'
import { applyTopupBonus } from '../core/wallet'

export type Env = {
  DEEPSEEK_API_KEY?: string
  WECHAT_MCH_ID?: string
  WECHAT_API_V3_KEY?: string
  WECHAT_PRIVATE_KEY?: string
  WECHAT_APP_ID?: string
  SMS_SECRET?: string
  EMAIL_SECRET?: string
  SERVICE_PRICE_MULTIPLIER?: string
  DB?: D1Database
  BUCKET?: R2Bucket
}

const pricingSchema = z.object({
  model: z.enum(['deepseek-v4-flash', 'deepseek-v4-pro']),
  cacheHitInputTokens: z.number().int().min(0),
  cacheMissInputTokens: z.number().int().min(0),
  outputTokens: z.number().int().min(0),
})

const renderSchema = z.object({
  templateId: z.string().min(1),
  title: z.string().min(1).max(80),
  xLabel: z.string().max(40).optional(),
  yLabel: z.string().max(40).optional(),
  rows: z.array(z.record(z.string(), z.union([z.string(), z.number(), z.null()]))).max(5_000),
})

const bonusSchema = z.object({
  amountCents: z.number().int().min(1).max(100_000),
  hasBoundPhone: z.boolean(),
  hasBoundEmail: z.boolean(),
  isFirstTopup: z.boolean(),
})

const wechatTopupSchema = z.object({
  amountCents: z.number().int().min(1_000).max(100_000),
})

const analyzeSchema = z.object({
  intent: z.string().min(1).max(1_000),
})

const emailCodeSchema = z.object({
  email: z.string().email(),
})

const phoneCodeSchema = z.object({
  phone: z.string().regex(/^1[3-9]\d{9}$/),
})

export function createApp() {
  const app = new Hono<{ Bindings: Env }>()

  app.get('/api/health', (c) =>
    c.json({
      ok: true,
      service: 'ctgu-figure-lab',
    }),
  )

  app.get('/api/templates', (c) =>
    c.json({
      templates: CORE_TEMPLATES,
    }),
  )

  app.post('/api/pricing/estimate', async (c) => {
    const input = pricingSchema.parse(await c.req.json())
    const estimate = estimateDeepSeekChargeCents({
      ...input,
      serviceMultiplier: parseServiceMultiplier(c.env?.SERVICE_PRICE_MULTIPLIER),
    })
    return c.json({
      estimatedChargeCents: estimate.chargeCents,
      currency: 'CNY',
      label: '预计消耗额度',
    })
  })

  app.post('/api/figure/analyze', async (c) => {
    const input = analyzeSchema.parse(await c.req.json())
    const recommendations = recommendTemplates(input.intent)

    return c.json({
      recommendations,
      source: c.env?.DEEPSEEK_API_KEY ? 'deepseek_ready' : 'local_rules',
      note: c.env?.DEEPSEEK_API_KEY
        ? 'DeepSeek key is configured; production implementation can route this request to the model.'
        : 'DeepSeek key is not configured in this environment, so local rules were used.',
    })
  })

  app.post('/api/figure/render', async (c) => {
    const input = renderSchema.parse(await c.req.json())
    const svg = renderSvgFigure(input)

    return c.json({
      format: 'svg',
      svg,
      byteLength: new TextEncoder().encode(svg).length,
    })
  })

  app.post('/api/billing/bonus-preview', async (c) => {
    const input = bonusSchema.parse(await c.req.json())
    const bonusCents = applyTopupBonus(input)

    return c.json({
      bonusCents,
      eligible: bonusCents > 0,
    })
  })

  app.post('/api/billing/wechat/create', async (c) => {
    const input = wechatTopupSchema.parse(await c.req.json())
    const missing = missingWechatConfig(c.env)

    if (missing.length > 0) {
      return c.json(
        {
          error: 'wechat_pay_not_configured',
          missing,
          message:
            '需要在 Cloudflare Secrets 中配置微信支付商户号、AppID、API v3 密钥和商户私钥后才能创建真实订单。',
        },
        503,
      )
    }

    return c.json(
      {
        error: 'wechat_pay_signing_not_enabled',
        amountCents: input.amountCents,
        message:
          '商户配置已存在，但真实 API v3 签名和回调验签需要在拿到证书后启用。',
      },
      501,
    )
  })

  app.post('/api/auth/email-code', async (c) => {
    emailCodeSchema.parse(await c.req.json())

    if (!c.env?.EMAIL_SECRET) {
      return c.json(
        {
          error: 'email_not_configured',
          message: '需要配置邮件服务密钥后才能发送邮箱验证码。',
        },
        503,
      )
    }

    return c.json(
      {
        error: 'email_sender_not_enabled',
        message: '邮件服务密钥已存在，但发送器尚未启用。',
      },
      501,
    )
  })

  app.post('/api/auth/phone-code', async (c) => {
    phoneCodeSchema.parse(await c.req.json())

    if (!c.env?.SMS_SECRET) {
      return c.json(
        {
          error: 'sms_not_configured',
          message: '需要配置短信服务密钥后才能发送手机验证码。',
        },
        503,
      )
    }

    return c.json(
      {
        error: 'sms_sender_not_enabled',
        message: '短信服务密钥已存在，但发送器尚未启用。',
      },
      501,
    )
  })

  app.notFound((c) =>
    c.json(
      {
        error: 'not_found',
      },
      404,
    ),
  )

  app.onError((error, c) => {
    if (error instanceof z.ZodError) {
      return c.json(
        {
          error: 'invalid_request',
          issues: error.issues.map((issue) => ({
            path: issue.path.join('.'),
            message: issue.message,
          })),
        },
        400,
      )
    }

    return c.json(
      {
        error: 'internal_error',
      },
      500,
    )
  })

  return app
}

function parseServiceMultiplier(raw?: string): number {
  const value = Number(raw)
  if (!Number.isFinite(value) || value <= 0 || value > 20) return 1
  return value
}

function missingWechatConfig(env?: Env): string[] {
  const required: Array<keyof Env> = [
    'WECHAT_MCH_ID',
    'WECHAT_API_V3_KEY',
    'WECHAT_PRIVATE_KEY',
    'WECHAT_APP_ID',
  ]

  return required.filter((key) => !env?.[key])
}
