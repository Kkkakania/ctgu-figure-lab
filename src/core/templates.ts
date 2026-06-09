export type TemplateStatus = 'stable' | 'candidate'

export type FigureTemplate = {
  id: string
  label: string
  family:
    | 'trend'
    | 'relation'
    | 'comparison'
    | 'distribution'
    | 'matrix'
    | 'flow'
    | 'electrical'
  status: TemplateStatus
  description: string
  bestFor: string[]
  requiredFields: string[]
}

export const CORE_TEMPLATES: FigureTemplate[] = [
  {
    id: 'line_basic',
    label: '基础折线图',
    family: 'trend',
    status: 'stable',
    description: '展示连续变量随时间或序号变化的趋势。',
    bestFor: ['趋势', '时间序列', '变化'],
    requiredFields: ['x', 'y'],
  },
  {
    id: 'line_multi',
    label: '多系列折线图',
    family: 'trend',
    status: 'stable',
    description: '比较多组指标在同一横轴下的变化。',
    bestFor: ['多组对比', '时间序列', '趋势'],
    requiredFields: ['x', 'y', 'series'],
  },
  {
    id: 'confidence_band',
    label: '置信带折线图',
    family: 'trend',
    status: 'stable',
    description: '在均值曲线旁展示不确定性范围。',
    bestFor: ['置信区间', '误差带', '预测'],
    requiredFields: ['x', 'y', 'lower', 'upper'],
  },
  {
    id: 'scatter_basic',
    label: '基础散点图',
    family: 'relation',
    status: 'stable',
    description: '观察两个数值变量之间的关系。',
    bestFor: ['相关性', '分布', '异常值'],
    requiredFields: ['x', 'y'],
  },
  {
    id: 'scatter_regression',
    label: '散点回归图',
    family: 'relation',
    status: 'stable',
    description: '展示散点、拟合趋势和相关关系。',
    bestFor: ['相关性', '回归', '拟合'],
    requiredFields: ['x', 'y'],
  },
  {
    id: 'bubble_matrix',
    label: '气泡矩阵',
    family: 'relation',
    status: 'stable',
    description: '用气泡大小和颜色表达矩阵关系。',
    bestFor: ['矩阵', '相关性', '强弱对比'],
    requiredFields: ['x', 'y', 'value'],
  },
  {
    id: 'bar_basic',
    label: '基础柱状图',
    family: 'comparison',
    status: 'stable',
    description: '比较不同类别的单一指标。',
    bestFor: ['类别对比', '排名', '数量'],
    requiredFields: ['category', 'value'],
  },
  {
    id: 'bar_grouped',
    label: '分组柱状图',
    family: 'comparison',
    status: 'stable',
    description: '比较多个类别下的多组指标。',
    bestFor: ['分组对比', '实验组', '控制组'],
    requiredFields: ['category', 'series', 'value'],
  },
  {
    id: 'bar_stacked',
    label: '堆叠柱状图',
    family: 'comparison',
    status: 'stable',
    description: '展示总量及其组成部分。',
    bestFor: ['组成', '占比', '累计'],
    requiredFields: ['category', 'series', 'value'],
  },
  {
    id: 'bar_lollipop',
    label: '棒棒糖排序图',
    family: 'comparison',
    status: 'stable',
    description: '用更轻量的形式展示排序结果。',
    bestFor: ['排名', '重要性', '指标排序'],
    requiredFields: ['category', 'value'],
  },
  {
    id: 'histogram_basic',
    label: '直方图',
    family: 'distribution',
    status: 'stable',
    description: '展示单个数值变量的分布形态。',
    bestFor: ['分布', '频数', '集中趋势'],
    requiredFields: ['value'],
  },
  {
    id: 'box_jittered',
    label: '箱线 + 抖动散点',
    family: 'distribution',
    status: 'stable',
    description: '同时展示分布摘要和原始观测点。',
    bestFor: ['组间差异', '离散点', '分布'],
    requiredFields: ['group', 'value'],
  },
  {
    id: 'violin_basic',
    label: '小提琴图',
    family: 'distribution',
    status: 'stable',
    description: '展示多组数据的分布密度。',
    bestFor: ['密度', '分布', '组间比较'],
    requiredFields: ['group', 'value'],
  },
  {
    id: 'heatmap_basic',
    label: '基础热力图',
    family: 'matrix',
    status: 'stable',
    description: '用颜色表达二维矩阵数值。',
    bestFor: ['矩阵', '热力', '强弱'],
    requiredFields: ['x', 'y', 'value'],
  },
  {
    id: 'correlation_matrix',
    label: '相关矩阵',
    family: 'matrix',
    status: 'stable',
    description: '展示多个变量之间的相关程度。',
    bestFor: ['相关性', '变量筛选', '矩阵'],
    requiredFields: ['matrix'],
  },
  {
    id: 'confusion_matrix',
    label: '混淆矩阵',
    family: 'matrix',
    status: 'stable',
    description: '展示分类结果的预测与真实标签关系。',
    bestFor: ['分类', '模型评价', '矩阵'],
    requiredFields: ['actual', 'predicted', 'value'],
  },
  {
    id: 'flowchart_basic',
    label: '基础流程图',
    family: 'flow',
    status: 'stable',
    description: '展示实验、算法或数据处理步骤。',
    bestFor: ['流程', '步骤', '算法'],
    requiredFields: ['steps'],
  },
  {
    id: 'sankey_basic',
    label: '桑基流向图',
    family: 'flow',
    status: 'stable',
    description: '展示来源、去向与流量大小。',
    bestFor: ['流向', '能量流', '迁移'],
    requiredFields: ['source', 'target', 'value'],
  },
  {
    id: 'radar_chart',
    label: '雷达图',
    family: 'comparison',
    status: 'stable',
    description: '比较对象在多个维度上的表现。',
    bestFor: ['多指标', '综合比较', '能力画像'],
    requiredFields: ['axis', 'value'],
  },
  {
    id: 'timeseries_multi',
    label: '多指标时序图',
    family: 'trend',
    status: 'stable',
    description: '对齐展示多个时间序列。',
    bestFor: ['多指标', '时间序列', '对比'],
    requiredFields: ['time', 'value', 'series'],
  },
  {
    id: 'bode_diagram',
    label: 'Bode 图',
    family: 'electrical',
    status: 'stable',
    description: '展示频率响应的幅值和相位。',
    bestFor: ['电气', '控制', '频率响应'],
    requiredFields: ['frequency', 'magnitude', 'phase'],
  },
  {
    id: 'nyquist_diagram',
    label: 'Nyquist 图',
    family: 'electrical',
    status: 'stable',
    description: '展示复平面频率响应轨迹。',
    bestFor: ['电气', '控制', '稳定性'],
    requiredFields: ['real', 'imaginary'],
  },
  {
    id: 'fft_spectrum',
    label: 'FFT 频谱图',
    family: 'electrical',
    status: 'stable',
    description: '分析信号频域成分。',
    bestFor: ['信号', '频谱', '谐波'],
    requiredFields: ['frequency', 'amplitude'],
  },
  {
    id: 'three_phase_waveform',
    label: '三相波形图',
    family: 'electrical',
    status: 'stable',
    description: '展示三相电压或电流波形。',
    bestFor: ['电气', '三相', '波形'],
    requiredFields: ['time', 'phaseA', 'phaseB', 'phaseC'],
  },
]

export function recommendTemplates(intent: string): FigureTemplate[] {
  const normalized = intent.toLowerCase()
  const scored = CORE_TEMPLATES.map((template) => {
    const text = [
      template.id,
      template.label,
      template.description,
      template.family,
      ...template.bestFor,
    ]
      .join(' ')
      .toLowerCase()

    let score = 0
    for (const keyword of template.bestFor) {
      if (normalized.includes(keyword.toLowerCase())) score += 3
    }
    if (normalized.includes('相关') && template.family === 'relation') score += 4
    if (normalized.includes('回归') && template.id === 'scatter_regression') {
      score += 5
    }
    if (normalized.includes('流程') && template.family === 'flow') score += 5
    if (normalized.includes('电') && template.family === 'electrical') score += 4
    if (text.includes(normalized)) score += 1

    return { score, template }
  })

  return scored
    .sort((a, b) => b.score - a.score)
    .map((item) => item.template)
    .slice(0, 5)
}

export function getTemplate(templateId: string): FigureTemplate | undefined {
  return CORE_TEMPLATES.find((template) => template.id === templateId)
}
