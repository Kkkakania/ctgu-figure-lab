export type DeepSeekModel = 'deepseek-v4-flash' | 'deepseek-v4-pro'

export type DeepSeekUsage = {
  model: DeepSeekModel
  cacheHitInputTokens: number
  cacheMissInputTokens: number
  outputTokens: number
  serviceMultiplier?: number
}

export type DeepSeekPrice = {
  cacheHitInputCnyPerMillion: number
  cacheMissInputCnyPerMillion: number
  outputCnyPerMillion: number
}

export type ChargeEstimate = {
  providerCostCny: number
  multiplier: number
  chargeCents: number
}

export const PRICE_TABLE: Record<DeepSeekModel, DeepSeekPrice> = {
  'deepseek-v4-flash': {
    cacheHitInputCnyPerMillion: 0.02,
    cacheMissInputCnyPerMillion: 1,
    outputCnyPerMillion: 2,
  },
  'deepseek-v4-pro': {
    cacheHitInputCnyPerMillion: 0.025,
    cacheMissInputCnyPerMillion: 3,
    outputCnyPerMillion: 6,
  },
}

export const DEFAULT_SERVICE_MULTIPLIER = 1

const MILLION = 1_000_000

export function estimateDeepSeekChargeCents(
  usage: DeepSeekUsage,
): ChargeEstimate {
  const price = PRICE_TABLE[usage.model]
  const providerCostCny =
    (usage.cacheHitInputTokens / MILLION) * price.cacheHitInputCnyPerMillion +
    (usage.cacheMissInputTokens / MILLION) *
      price.cacheMissInputCnyPerMillion +
    (usage.outputTokens / MILLION) * price.outputCnyPerMillion

  const tokenCount =
    usage.cacheHitInputTokens + usage.cacheMissInputTokens + usage.outputTokens
  const multiplier = usage.serviceMultiplier ?? DEFAULT_SERVICE_MULTIPLIER
  const rawChargeCents = Math.ceil(providerCostCny * multiplier * 100 - 1e-9)
  const chargeCents = tokenCount > 0 ? Math.max(1, rawChargeCents) : 0

  return {
    providerCostCny,
    multiplier,
    chargeCents,
  }
}
