import { describe, expect, it } from 'vitest'
import { createApp } from './app'

const app = createApp()

async function jsonResponse(path: string, init?: RequestInit) {
  const response = await app.request(path, init)
  return {
    response,
    body: (await response.json()) as Record<string, unknown>,
  }
}

describe('worker api', () => {
  it('returns the stable template registry', async () => {
    const { response, body } = await jsonResponse('/api/templates')

    expect(response.status).toBe(200)
    expect(Array.isArray(body.templates)).toBe(true)
    expect((body.templates as unknown[]).length).toBeGreaterThanOrEqual(20)
  })

  it('estimates 5x DeepSeek usage charge', async () => {
    const { response, body } = await jsonResponse('/api/pricing/estimate', {
      method: 'POST',
      body: JSON.stringify({
        model: 'deepseek-v4-pro',
        cacheHitInputTokens: 0,
        cacheMissInputTokens: 10_000,
        outputTokens: 10_000,
      }),
    })

    expect(response.status).toBe(200)
    expect(body.chargeCents).toBe(45)
  })

  it('renders svg figures through the API', async () => {
    const { response, body } = await jsonResponse('/api/figure/render', {
      method: 'POST',
      body: JSON.stringify({
        templateId: 'bar_basic',
        title: '样例柱状图',
        rows: [
          { category: 'A', value: 3 },
          { category: 'B', value: 5 },
        ],
      }),
    })

    expect(response.status).toBe(200)
    expect(body.format).toBe('svg')
    expect(String(body.svg)).toContain('<svg')
  })

  it('previews first topup bonus rules', async () => {
    const { body } = await jsonResponse('/api/billing/bonus-preview', {
      method: 'POST',
      body: JSON.stringify({
        amountCents: 50_000,
        hasBoundEmail: true,
        hasBoundPhone: true,
        isFirstTopup: true,
      }),
    })

    expect(body.bonusCents).toBe(5_000)
  })

  it('does not create real WeChat orders without merchant config', async () => {
    const { response, body } = await jsonResponse('/api/billing/wechat/create', {
      method: 'POST',
      body: JSON.stringify({ amountCents: 10_000 }),
    })

    expect(response.status).toBe(503)
    expect(body.error).toBe('wechat_pay_not_configured')
  })

  it('does not pretend to send verification codes without provider config', async () => {
    const { response, body } = await jsonResponse('/api/auth/email-code', {
      method: 'POST',
      body: JSON.stringify({ email: 'student@example.com' }),
    })

    expect(response.status).toBe(503)
    expect(body.error).toBe('email_not_configured')
  })
})
