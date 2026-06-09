import { describe, expect, it } from 'vitest'
import { estimateDeepSeekChargeCents, PRICE_TABLE } from './pricing'

describe('DeepSeek price estimates', () => {
  it('uses the configured service multiplier and rounds up to cents', () => {
    const result = estimateDeepSeekChargeCents({
      model: 'deepseek-v4-flash',
      cacheHitInputTokens: 100_000,
      cacheMissInputTokens: 200_000,
      outputTokens: 50_000,
      serviceMultiplier: 3,
    })

    expect(result.providerCostCny).toBeCloseTo(0.302, 6)
    expect(result.multiplier).toBe(3)
    expect(result.chargeCents).toBe(91)
  })

  it('uses a one-cent minimum for non-empty usage', () => {
    const result = estimateDeepSeekChargeCents({
      model: 'deepseek-v4-flash',
      cacheHitInputTokens: 100,
      cacheMissInputTokens: 0,
      outputTokens: 0,
    })

    expect(result.chargeCents).toBe(1)
  })

  it('keeps official model prices in one table', () => {
    expect(PRICE_TABLE['deepseek-v4-flash'].outputCnyPerMillion).toBe(2)
    expect(PRICE_TABLE['deepseek-v4-pro'].cacheMissInputCnyPerMillion).toBe(3)
  })
})
