import { getTemplate } from './templates'

export type FigureRow = Record<string, string | number | null | undefined>

export type RenderRequest = {
  templateId: string
  title: string
  xLabel?: string
  yLabel?: string
  rows: FigureRow[]
}

const WIDTH = 960
const HEIGHT = 600
const PADDING = 76

export function renderSvgFigure(request: RenderRequest): string {
  const template = getTemplate(request.templateId)
  if (!template) {
    throw new Error('不支持的图表模板')
  }

  if (template.family === 'flow') {
    return renderFlowSvg(request)
  }

  if (template.family === 'comparison') {
    return renderBarSvg(request)
  }

  if (template.family === 'matrix') {
    return renderHeatmapSvg(request)
  }

  if (template.family === 'relation') {
    return renderScatterSvg(request)
  }

  return renderLineSvg(request)
}

function renderLineSvg(request: RenderRequest): string {
  const points = normalizePoints(request.rows)
  const path = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ')

  return svgShell(
    request,
    `<path d="${path}" fill="none" stroke="#1b6f8f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
${points
  .map(
    (point) =>
      `<circle cx="${point.x}" cy="${point.y}" r="5" fill="#f2a541" stroke="#ffffff" stroke-width="2" />`,
  )
  .join('\n')}`,
  )
}

function renderScatterSvg(request: RenderRequest): string {
  const points = normalizePoints(request.rows)
  return svgShell(
    request,
    points
      .map(
        (point, index) =>
          `<circle cx="${point.x}" cy="${point.y}" r="${index % 3 === 0 ? 7 : 5}" fill="#2e8b57" opacity="0.78" />`,
      )
      .join('\n'),
  )
}

function renderBarSvg(request: RenderRequest): string {
  const values = numericValues(request.rows, 'value')
  const max = Math.max(...values, 1)
  const barWidth = Math.max(18, (WIDTH - PADDING * 2) / Math.max(values.length, 1) - 12)
  const bars = values
    .map((value, index) => {
      const x = PADDING + index * (barWidth + 12)
      const height = ((HEIGHT - PADDING * 2) * value) / max
      const y = HEIGHT - PADDING - height
      return `<rect x="${x}" y="${y}" width="${barWidth}" height="${height}" rx="4" fill="#1b6f8f" />
<text x="${x + barWidth / 2}" y="${HEIGHT - PADDING + 24}" text-anchor="middle" font-size="13" fill="#52606d">${index + 1}</text>`
    })
    .join('\n')

  return svgShell(request, bars)
}

function renderHeatmapSvg(request: RenderRequest): string {
  const values = numericValues(request.rows, 'value')
  const size = Math.ceil(Math.sqrt(Math.max(values.length, 1)))
  const cell = Math.min(72, (HEIGHT - PADDING * 2) / size)
  const max = Math.max(...values, 1)
  const min = Math.min(...values, 0)
  const cells = values
    .map((value, index) => {
      const row = Math.floor(index / size)
      const col = index % size
      const intensity = (value - min) / Math.max(max - min, 1)
      const color = interpolateColor(intensity)
      return `<rect x="${PADDING + col * cell}" y="${PADDING + row * cell}" width="${cell - 3}" height="${cell - 3}" rx="3" fill="${color}" />`
    })
    .join('\n')

  return svgShell(request, cells)
}

function renderFlowSvg(request: RenderRequest): string {
  const labels =
    request.rows.length > 0
      ? request.rows.map((row, index) => String(row.label ?? row.step ?? `步骤 ${index + 1}`))
      : ['上传数据', '选择图表', '生成图片', '导出结果']
  const gap = (WIDTH - PADDING * 2) / Math.max(labels.length, 1)
  const nodes = labels
    .map((label, index) => {
      const x = PADDING + index * gap + 8
      const y = HEIGHT / 2 - 42
      const arrow =
        index < labels.length - 1
          ? `<path d="M ${x + 150} ${HEIGHT / 2} L ${x + gap - 12} ${HEIGHT / 2}" stroke="#8a9bab" stroke-width="3" marker-end="url(#arrow)" />`
          : ''
      return `<rect x="${x}" y="${y}" width="142" height="84" rx="12" fill="#eef7fb" stroke="#1b6f8f" stroke-width="2" />
<text x="${x + 71}" y="${HEIGHT / 2 + 5}" text-anchor="middle" font-size="18" font-weight="700" fill="#17324d">${escapeXml(label)}</text>
${arrow}`
    })
    .join('\n')

  return svgShell(
    request,
    `<defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#8a9bab" /></marker></defs>${nodes}`,
  )
}

function svgShell(request: RenderRequest, body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img" aria-label="${escapeXml(request.title)}">
<rect width="100%" height="100%" fill="#ffffff" />
<text x="${PADDING}" y="48" font-size="28" font-weight="800" fill="#17324d">${escapeXml(request.title)}</text>
<line x1="${PADDING}" y1="${HEIGHT - PADDING}" x2="${WIDTH - PADDING}" y2="${HEIGHT - PADDING}" stroke="#c8d3dc" stroke-width="2" />
<line x1="${PADDING}" y1="${PADDING}" x2="${PADDING}" y2="${HEIGHT - PADDING}" stroke="#c8d3dc" stroke-width="2" />
${body}
<text x="${WIDTH / 2}" y="${HEIGHT - 18}" text-anchor="middle" font-size="16" fill="#52606d">${escapeXml(request.xLabel ?? '')}</text>
<text transform="translate(22 ${HEIGHT / 2}) rotate(-90)" text-anchor="middle" font-size="16" fill="#52606d">${escapeXml(request.yLabel ?? '')}</text>
</svg>`
}

function normalizePoints(rows: FigureRow[]): { x: number; y: number }[] {
  const xValues = rows.map((row, index) => Number(row.x ?? index))
  const yValues = rows.map((row) => Number(row.y ?? row.value ?? 0))
  const xMin = Math.min(...xValues, 0)
  const xMax = Math.max(...xValues, 1)
  const yMin = Math.min(...yValues, 0)
  const yMax = Math.max(...yValues, 1)

  return xValues.map((xValue, index) => ({
    x: scale(xValue, xMin, xMax, PADDING, WIDTH - PADDING),
    y: scale(yValues[index] ?? 0, yMin, yMax, HEIGHT - PADDING, PADDING),
  }))
}

function numericValues(rows: FigureRow[], key: string): number[] {
  const values = rows.map((row) => Number(row[key] ?? row.y ?? 0))
  return values.length > 0 ? values : [1, 2, 3, 2, 4]
}

function scale(
  value: number,
  min: number,
  max: number,
  outputMin: number,
  outputMax: number,
): number {
  if (max === min) return (outputMin + outputMax) / 2
  return outputMin + ((value - min) / (max - min)) * (outputMax - outputMin)
}

function interpolateColor(value: number): string {
  const clamped = Math.max(0, Math.min(1, value))
  const r = Math.round(235 - clamped * 190)
  const g = Math.round(246 - clamped * 92)
  const b = Math.round(250 - clamped * 74)
  return `rgb(${r}, ${g}, ${b})`
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
