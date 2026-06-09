import { describe, expect, it } from 'vitest'
import { CORE_TEMPLATES, recommendTemplates } from './templates'

describe('figure template registry', () => {
  it('starts with a compact stable v1 set', () => {
    expect(CORE_TEMPLATES.length).toBeGreaterThanOrEqual(20)
    expect(CORE_TEMPLATES.length).toBeLessThanOrEqual(30)
    expect(CORE_TEMPLATES.every((template) => template.status === 'stable')).toBe(
      true,
    )
  })

  it('recommends relation charts for correlation intent', () => {
    const result = recommendTemplates('两个变量之间的相关性和回归关系')

    expect(result.map((template) => template.id)).toContain('scatter_regression')
  })

  it('recommends flowchart for process intent', () => {
    const result = recommendTemplates('实验流程和算法步骤图')

    expect(result[0]?.id).toBe('flowchart_basic')
  })
})
