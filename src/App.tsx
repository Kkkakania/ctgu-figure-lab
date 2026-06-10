import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'
import {
  Activity,
  Bot,
  ChevronRight,
  Code2,
  Database,
  Download,
  GalleryVerticalEnd,
  Moon,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sun,
} from 'lucide-react'
import './App.css'
import { estimateDeepSeekChargeCents } from './core/pricing'
import { renderSvgFigure } from './core/render'
import { CORE_TEMPLATES, recommendTemplates } from './core/templates'
import { applyTopupBonus } from './core/wallet'
import {
  GALLERY_CATEGORIES,
  GALLERY_GROUPS,
  GALLERY_TEMPLATES,
  type GalleryTemplate,
} from './data/galleryCatalog'

type ArtifactTab = 'preview' | 'code' | 'settings' | 'billing'

const sampleRows = [
  { category: 'A', x: 0, y: 2.4, value: 24 },
  { category: 'B', x: 1, y: 3.1, value: 31 },
  { category: 'C', x: 2, y: 4.8, value: 48 },
  { category: 'D', x: 3, y: 3.9, value: 39 },
  { category: 'E', x: 4, y: 6.2, value: 62 },
]

const usageData = [
  { day: '一', cost: 18 },
  { day: '二', cost: 32 },
  { day: '三', cost: 24 },
  { day: '四', cost: 46 },
  { day: '五', cost: 38 },
  { day: '六', cost: 61 },
  { day: '日', cost: 55 },
]

const groupNotes: Record<string, string> = {
  通用科研图表: '论文、课程报告、实验数据分析最常用的基础图形。',
  工程与电气能源: '面向电气、电力、信号、控制和能源场景。',
  'AI 与高维分析': '用于机器学习、优化、高维特征和模型诊断。',
  专题表达: '更适合汇报、流程解释和特殊统计表达。',
}

const codeSnippet = (template: GalleryTemplate) => `figure('Color','w');
% template: ${template.id}
% task: ${template.description}
plot(x, y, '-o', 'LineWidth', 1.6, 'MarkerSize', 4);
grid on; box off;
xlabel('样本序号');
ylabel('指标值');
title('${template.description}');
exportgraphics(gcf, '${template.id}.svg', 'ContentType', 'vector');`

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [query, setQuery] = useState('')
  const [activeGroup, setActiveGroup] = useState('通用科研图表')
  const [activeCategory, setActiveCategory] = useState('')
  const [selectedId, setSelectedId] = useState('line_basic')
  const [artifactTab, setArtifactTab] = useState<ArtifactTab>('preview')
  const [intent, setIntent] = useState(
    '我有两列实验数据，想展示指标随时间变化，并导出论文可用的白底 SVG。',
  )
  const [topupYuan, setTopupYuan] = useState(100)

  const selectedTemplate =
    GALLERY_TEMPLATES.find((template) => template.id === selectedId) ?? GALLERY_TEMPLATES[0]
  const visibleCategories = GALLERY_CATEGORIES.filter((category) => category.group === activeGroup)
  const visibleTemplates = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return GALLERY_TEMPLATES.filter((template) => {
      const text = [
        template.id,
        template.category,
        template.categoryLabel,
        template.group,
        template.description,
        ...template.tags,
      ]
        .join(' ')
        .toLowerCase()

      return (
        template.group === activeGroup &&
        (!activeCategory || template.category === activeCategory) &&
        (!normalized || text.includes(normalized))
      )
    })
  }, [activeCategory, activeGroup, query])
  const recommended = useMemo(() => recommendTemplates(intent), [intent])
  const previewTemplateId = useMemo(() => resolvePreviewTemplate(selectedTemplate), [selectedTemplate])
  const previewSvg = renderSvgFigure({
    templateId: previewTemplateId,
    title: selectedTemplate.description,
    xLabel: '样本序号',
    yLabel: '指标值',
    rows: sampleRows,
  })
  const charge = estimateDeepSeekChargeCents({
    model: 'deepseek-v4-flash',
    cacheHitInputTokens: 8_000,
    cacheMissInputTokens: 42_000,
    outputTokens: 8_000,
  })
  const bonusCents = applyTopupBonus({
    amountCents: topupYuan * 100,
    hasBoundEmail: true,
    hasBoundPhone: true,
    isFirstTopup: true,
  })

  const chooseTemplate = (template: GalleryTemplate) => {
    setSelectedId(template.id)
    setArtifactTab('preview')
  }

  return (
    <main className={darkMode ? 'lab-shell theme-dark' : 'lab-shell'}>
      <aside className="library-rail" aria-label="模板分类">
        <div className="brand-panel">
          <div className="brand-mark">绘</div>
          <div>
            <strong>三峡科研绘图</strong>
            <span>Figure Lab · Template Studio</span>
          </div>
        </div>

        <div className="rail-stat">
          <span>图库规模</span>
          <strong>{GALLERY_TEMPLATES.length}</strong>
          <small>模板候选，来自本地函数库索引</small>
        </div>

        <nav className="group-nav">
          {GALLERY_GROUPS.map((group) => (
            <button
              className={activeGroup === group ? 'active' : ''}
              key={group}
              type="button"
              onClick={() => {
                setActiveGroup(group)
                setActiveCategory('')
              }}
            >
              <span>{group}</span>
              <small>{countByGroup(group)}</small>
            </button>
          ))}
        </nav>

        <section className="wallet-mini">
          <span>可用绘图余额</span>
          <strong>¥126.40</strong>
          <button type="button" onClick={() => setArtifactTab('billing')}>
            余额与充值 <ChevronRight size={15} />
          </button>
        </section>
      </aside>

      <section className="gallery-workbench">
        <header className="studio-topbar">
          <div>
            <span>CTGU · AI Figure Workspace</span>
            <strong>模板图库驱动的科研绘图工作台</strong>
          </div>
          <div className="topbar-actions">
            <button type="button" onClick={() => setArtifactTab('settings')}>
              <Settings size={16} /> 设置
            </button>
            <button type="button" onClick={() => setDarkMode((value) => !value)}>
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </header>

        <div className="studio-layout">
          <section className="catalog-pane">
            <div className="catalog-hero">
              <div>
                <span>Template Gallery</span>
                <h1>先选图，再让 AI 生成可复现代码。</h1>
                <p>{groupNotes[activeGroup]}</p>
              </div>
              <div className="hero-meter">
                <strong>{visibleTemplates.length}</strong>
                <span>当前匹配</span>
              </div>
            </div>

            <div className="catalog-controls">
              <label className="search-box">
                <Search size={17} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="搜索名称、描述、标签，例如 voltage / heatmap / 回归"
                />
              </label>
              <select
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
                aria-label="选择二级分类"
              >
                <option value="">全部二级分类</option>
                {visibleCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="category-strip">
              <button
                className={activeCategory === '' ? 'active' : ''}
                type="button"
                onClick={() => setActiveCategory('')}
              >
                全部
              </button>
              {visibleCategories.map((category) => (
                <button
                  className={activeCategory === category.id ? 'active' : ''}
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="template-grid" aria-live="polite">
              {visibleTemplates.map((template) => (
                <button
                  className={selectedTemplate.id === template.id ? 'template-card active' : 'template-card'}
                  key={template.id}
                  type="button"
                  onClick={() => chooseTemplate(template)}
                >
                  <div className="thumb-sim" data-kind={template.category}>
                    <MiniPlot template={template} />
                  </div>
                  <div className="template-meta">
                    <span>{template.categoryLabel}</span>
                    <strong>{template.id}</strong>
                    <p>{template.description}</p>
                    <div>
                      {template.tags.slice(0, 3).map((tag) => (
                        <em key={tag}>{tag}</em>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <aside className="studio-panel" aria-label="图表生成面板">
            <div className="panel-head">
              <div>
                <span>{selectedTemplate.categoryLabel}</span>
                <strong>{selectedTemplate.id}</strong>
              </div>
              <button type="button" onClick={() => setArtifactTab('code')}>
                <Code2 size={16} /> 代码
              </button>
            </div>

            <div className="artifact-tabs" role="tablist" aria-label="输出视图">
              <TabButton id="preview" active={artifactTab} onClick={setArtifactTab}>
                预览
              </TabButton>
              <TabButton id="code" active={artifactTab} onClick={setArtifactTab}>
                代码
              </TabButton>
              <TabButton id="settings" active={artifactTab} onClick={setArtifactTab}>
                设置
              </TabButton>
              <TabButton id="billing" active={artifactTab} onClick={setArtifactTab}>
                余额
              </TabButton>
            </div>

            <div className="panel-body">
              {artifactTab === 'preview' && (
                <div className="preview-lab">
                  <div className="preview-toolbar">
                    <span>{selectedTemplate.description}</span>
                    <small>clean-room preview · {previewTemplateId}</small>
                  </div>
                  <div className="preview-canvas" dangerouslySetInnerHTML={{ __html: previewSvg }} />
                </div>
              )}

              {artifactTab === 'code' && (
                <div className="code-lab">
                  <div className="code-title">
                    <Code2 size={17} />
                    <span>MATLAB 可复现代码草案</span>
                  </div>
                  <pre>{codeSnippet(selectedTemplate)}</pre>
                  <button type="button">
                    <Download size={16} /> 下载代码草案
                  </button>
                </div>
              )}

              {artifactTab === 'settings' && (
                <div className="settings-lab">
                  <InfoLine label="导出格式" value="SVG / PNG" />
                  <InfoLine label="默认背景" value="论文白底" />
                  <InfoLine label="模板状态" value="候选模板，生成前需确认字段" />
                  <InfoLine label="公开边界" value="不发布原始 Akun 源文件" />
                </div>
              )}

              {artifactTab === 'billing' && (
                <div className="billing-lab">
                  <span>可用余额</span>
                  <strong>¥126.40</strong>
                  <p>本次预估消耗 ¥{(charge.chargeCents / 100).toFixed(2)}</p>
                  <label>
                    充值金额
                    <input
                      min={10}
                      max={1000}
                      type="number"
                      value={topupYuan}
                      onChange={(event) => setTopupYuan(Number(event.target.value))}
                    />
                  </label>
                  <p>绑定手机号和邮箱后，首充预计赠送 ¥{(bonusCents / 100).toFixed(2)}。</p>
                </div>
              )}
            </div>

            <div className="prompt-dock">
              <div className="prompt-head">
                <Bot size={17} />
                <strong>让 AI 按这个模板生成图</strong>
              </div>
              <textarea value={intent} onChange={(event) => setIntent(event.target.value)} />
              <div className="recommend-row">
                {recommended.slice(0, 3).map((template) => (
                  <span key={template.id}>{template.label}</span>
                ))}
              </div>
              <button type="button">
                <Send size={17} /> 生成方案
              </button>
            </div>

            <div className="panel-metrics">
              <Metric icon={<GalleryVerticalEnd size={16} />} label="图库模板" value={`${GALLERY_TEMPLATES.length} 个`} />
              <Metric icon={<Database size={16} />} label="二级分类" value={`${GALLERY_CATEGORIES.length} 个`} />
              <Metric icon={<ShieldCheck size={16} />} label="边界检查" value="启用" />
              <Metric icon={<Activity size={16} />} label="本次预估" value={`¥${(charge.chargeCents / 100).toFixed(2)}`} />
            </div>

            <div className="usage-bars">
              {usageData.map((item) => (
                <span key={item.day} style={{ height: `${18 + item.cost}px` }}>
                  <i>{item.day}</i>
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function resolvePreviewTemplate(template: GalleryTemplate): string {
  if (CORE_TEMPLATES.some((core) => core.id === template.id)) return template.id
  if (['categorical', 'ranking'].includes(template.category)) return 'bar_basic'
  if (['matrix', 'statistical'].includes(template.category)) return 'heatmap_basic'
  if (['relation', 'distribution', 'ml', 'multivar'].includes(template.category)) {
    return 'scatter_basic'
  }
  if (['flow', 'specialty'].includes(template.category)) return 'flowchart_basic'
  return 'line_basic'
}

function countByGroup(group: string): number {
  return GALLERY_TEMPLATES.filter((template) => template.group === group).length
}

function TabButton({
  id,
  active,
  children,
  onClick,
}: {
  id: ArtifactTab
  active: ArtifactTab
  children: string
  onClick: (tab: ArtifactTab) => void
}) {
  return (
    <button className={active === id ? 'active' : ''} type="button" onClick={() => onClick(id)}>
      {children}
    </button>
  )
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="info-line">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="metric">
      {icon}
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function MiniPlot({ template }: { template: GalleryTemplate }) {
  const kind = resolvePreviewTemplate(template)
  if (kind.includes('bar')) {
    return (
      <svg viewBox="0 0 220 130" aria-hidden="true">
        <rect x="20" y="88" width="22" height="24" rx="4" />
        <rect x="58" y="64" width="22" height="48" rx="4" />
        <rect x="96" y="38" width="22" height="74" rx="4" />
        <rect x="134" y="72" width="22" height="40" rx="4" />
        <rect x="172" y="30" width="22" height="82" rx="4" />
      </svg>
    )
  }
  if (kind.includes('heatmap')) {
    return (
      <svg viewBox="0 0 220 130" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, index) => (
          <rect
            fillOpacity={0.22 + (index % 5) * 0.15}
            height="18"
            key={index}
            rx="3"
            width="28"
            x={28 + (index % 5) * 32}
            y={24 + Math.floor(index / 5) * 22}
          />
        ))}
      </svg>
    )
  }
  if (kind.includes('scatter')) {
    return (
      <svg viewBox="0 0 220 130" aria-hidden="true">
        {[28, 52, 74, 92, 116, 148, 174, 190].map((x, index) => (
          <circle cx={x} cy={92 - index * 7 + (index % 2) * 18} key={x} r={6 + (index % 3)} />
        ))}
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 220 130" aria-hidden="true">
      <path d="M24 92 C54 88 62 58 88 62 S124 104 154 62 184 34 200 28" />
      <circle cx="24" cy="92" r="5" />
      <circle cx="88" cy="62" r="5" />
      <circle cx="154" cy="62" r="5" />
      <circle cx="200" cy="28" r="5" />
    </svg>
  )
}

export default App
