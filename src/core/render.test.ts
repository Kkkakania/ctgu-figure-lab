import { describe, expect, it } from 'vitest'
import { renderSvgFigure } from './render'

describe('svg figure renderer', () => {
  it('renders a standalone svg without local paths or private markers', () => {
    const svg = renderSvgFigure({
      templateId: 'line_basic',
      title: '测试折线图',
      xLabel: '时间',
      yLabel: '指标',
      rows: [
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 1.5 },
      ],
    })

    expect(svg).toContain('<svg')
    expect(svg).toContain('测试折线图')
    expect(svg).not.toContain('/Users/')
    expect(svg).not.toContain('Author')
    expect(svg).not.toContain('Copyright')
  })

  it('fails clearly for unknown templates', () => {
    expect(() =>
      renderSvgFigure({
        templateId: 'unknown',
        title: '未知',
        rows: [],
      }),
    ).toThrow('不支持的图表模板')
  })
})
