import { describe, expect, it } from 'vitest'
import { GALLERY_CATEGORIES, GALLERY_GROUPS, GALLERY_TEMPLATES } from './galleryCatalog'

describe('gallery catalog metadata', () => {
  it('imports the audited local gallery as a stable template catalog', () => {
    expect(GALLERY_TEMPLATES).toHaveLength(252)
    expect(GALLERY_GROUPS).toEqual([
      '通用科研图表',
      '工程与电气能源',
      'AI 与高维分析',
      '专题表达',
    ])
  })

  it('keeps template ids unique and preview paths repository-safe', () => {
    const ids = new Set(GALLERY_TEMPLATES.map((template) => template.id))

    expect(ids.size).toBe(GALLERY_TEMPLATES.length)
    expect(
      GALLERY_TEMPLATES.every((template) => !template.previewName.includes('/Users/')),
    ).toBe(true)
    expect(GALLERY_TEMPLATES.every((template) => !template.previewName.includes('\\Users\\'))).toBe(
      true,
    )
  })

  it('exposes non-empty categories for every group used by the UI', () => {
    for (const group of GALLERY_GROUPS) {
      expect(GALLERY_CATEGORIES.some((category) => category.group === group)).toBe(true)
    }
  })
})
