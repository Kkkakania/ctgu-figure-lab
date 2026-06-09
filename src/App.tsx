import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
  Activity,
  ArrowUpRight,
  Bot,
  ChevronRight,
  Code2,
  CreditCard,
  Database,
  Download,
  FolderOpen,
  LineChart,
  MessageCircle,
  Moon,
  Palette,
  Paperclip,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  Upload,
  Wallet,
} from 'lucide-react'
import './App.css'
import { estimateDeepSeekChargeCents } from './core/pricing'
import { renderSvgFigure } from './core/render'
import { CORE_TEMPLATES, recommendTemplates } from './core/templates'
import { applyTopupBonus } from './core/wallet'

const usageData = [
  { day: '周一', cost: 18 },
  { day: '周二', cost: 32 },
  { day: '周三', cost: 24 },
  { day: '周四', cost: 46 },
  { day: '周五', cost: 38 },
  { day: '周六', cost: 61 },
  { day: '周日', cost: 55 },
]

const sampleRows = [
  { category: 'A', x: 0, y: 2.4, value: 24 },
  { category: 'B', x: 1, y: 3.1, value: 31 },
  { category: 'C', x: 2, y: 4.8, value: 48 },
  { category: 'D', x: 3, y: 3.9, value: 39 },
  { category: 'E', x: 4, y: 6.2, value: 62 },
]

const recentJobs = [
  { name: '电压波形对比', type: 'SVG', state: '已导出' },
  { name: '回归关系图', type: 'PNG', state: '可复用' },
  { name: '流程图草案', type: 'Code', state: '待确认' },
]

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [intent, setIntent] = useState(
    '我有两列实验数据，想展示指标随时间变化，并导出论文可用的图片。',
  )
  const [selectedTemplate, setSelectedTemplate] = useState('line_basic')
  const [topupYuan, setTopupYuan] = useState(100)

  const recommendations = useMemo(() => recommendTemplates(intent), [intent])
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
  const previewSvg = renderSvgFigure({
    templateId: selectedTemplate,
    title: '实验指标趋势预览',
    xLabel: '样本序号',
    yLabel: '指标值',
    rows: sampleRows,
  })
  const codeSnippet = `figure; plot(x, y, '-o', 'LineWidth', 1.6);\ngrid on; box off;\nxlabel('样本序号'); ylabel('指标值');\nexportgraphics(gcf, 'figure.svg', 'ContentType', 'vector');`

  return (
    <main className={darkMode ? 'app codex-app app-dark' : 'app codex-app'}>
      <aside className="rail">
        <div className="window-dots" aria-hidden="true">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        <div className="brand">
          <div className="brand-mark">绘</div>
          <div>
            <strong>Matlab 绘图网站</strong>
            <span>CTGU Figure Lab</span>
          </div>
        </div>

        <nav className="rail-nav" aria-label="主导航">
          <a className="active" href="#workspace">
            <LineChart size={18} /> 工作台
          </a>
          <a href="#wallet">
            <Wallet size={18} /> 绘图余额
          </a>
          <a href="#quality">
            <ShieldCheck size={18} /> 质量检查
          </a>
          <a href="#support">
            <MessageCircle size={18} /> 侧边反馈
          </a>
        </nav>

        <section className="project-list">
          <div className="section-title">
            <FolderOpen size={15} /> 最近项目
          </div>
          {recentJobs.map((job) => (
            <button className="project-row" key={job.name} type="button">
              <span>{job.name}</span>
              <small>{job.type}</small>
            </button>
          ))}
        </section>

        <div className="rail-card">
          <span>本月额度</span>
          <strong>¥126.40</strong>
          <p>现金 ¥100.00 · 赠送 ¥26.40</p>
        </div>
      </aside>

      <section className="workspace" id="workspace">
        <header className="titlebar">
          <div className="crumb">
            <span>CTGU</span>
            <ChevronRight size={14} />
            <strong>科研绘图工作台</strong>
          </div>
          <div className="title-actions">
            <button className="balance-chip" type="button">
              <Wallet size={16} /> ¥126.40
            </button>
            <button className="tool-button" type="button">
              <Search size={16} /> 搜索任务
            </button>
            <button className="tool-button" type="button">
              <Settings size={16} /> 参数
            </button>
            <button className="icon-button" type="button" aria-label="切换明暗主题" onClick={() => setDarkMode((value) => !value)}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        <div className="work-grid">
          <section className="thread">
            <div className="thread-hero">
              <p>AI Figure Workspace</p>
              <h1>上传数据，生成可复现的科研图表</h1>
              <span>只做科研绘图和流程图，不做建模解题、论文代写或排版服务。</span>
            </div>

            <article className="message user-card">
              <div className="avatar">你</div>
              <div className="message-body">
                <div className="message-meta">
                  <strong>数据与需求</strong>
                  <small>当前任务</small>
                </div>
                <label className="upload-strip">
                  <Upload size={18} />
                  <span>拖入 CSV / XLSX 或点击上传</span>
                  <small>v1 限制 10MB，默认 7 天自动清理</small>
                  <input type="file" accept=".csv,.xlsx" />
                </label>
                <textarea value={intent} onChange={(event) => setIntent(event.target.value)} aria-label="图表需求" />
              </div>
            </article>

            <article className="message assistant-card">
              <div className="avatar bot">
                <Bot size={18} />
              </div>
              <div className="message-body">
                <div className="message-meta">
                  <strong>图表建议</strong>
                  <small>根据描述实时推荐</small>
                </div>
                <div className="template-list">
                  {recommendations.slice(0, 3).map((template, index) => (
                    <button
                      className={selectedTemplate === template.id ? 'template-card selected' : 'template-card'}
                      key={template.id}
                      type="button"
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <span>{index + 1}</span>
                      <div>
                        <strong>{template.label}</strong>
                        <small>{template.id}</small>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </article>

            <div className="composer">
              <button type="button" aria-label="上传附件">
                <Paperclip size={18} />
              </button>
              <span>继续描述图表要求，例如“需要白底、标注峰值、导出 SVG”</span>
              <button className="send-button" type="button" aria-label="发送">
                <Send size={18} />
              </button>
            </div>
          </section>

          <aside className="output-pane">
            <div className="output-head">
              <div>
                <p>输出</p>
                <h2>Figure Preview</h2>
              </div>
              <span>白底 · SVG</span>
            </div>

            <div className="preview-window">
              <div className="preview-toolbar">
                <div className="window-dots" aria-hidden="true">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="toolbar-tabs">
                  <button className="active" type="button">预览</button>
                  <button type="button">代码</button>
                  <button type="button">导出</button>
                </div>
              </div>
              <div className="figure-paper" dangerouslySetInnerHTML={{ __html: previewSvg }} />
            </div>

            <div className="output-actions">
              <button type="button">
                <Download size={16} /> SVG
              </button>
              <button type="button">
                <Palette size={16} /> 样式
              </button>
              <button type="button">
                <Code2 size={16} /> 代码
              </button>
            </div>

            <div className="right-grid">
              <div className="panel code-panel">
                <div className="section-title">
                  <Code2 size={15} /> 可复现代码
                </div>
                <pre>{codeSnippet}</pre>
              </div>

              <div id="wallet" className="panel wallet-panel">
                <div className="section-title">
                  <CreditCard size={15} /> 余额与充值
                </div>
                <strong>¥126.40</strong>
                <div className="topup-line">
                  <label>
                    充值金额
                    <input min={10} max={1000} type="number" value={topupYuan} onChange={(event) => setTopupYuan(Number(event.target.value))} />
                  </label>
                  <button type="button">
                    充值 <ChevronRight size={16} />
                  </button>
                </div>
                <p>绑定手机号和邮箱后，首充预计赠送 ¥{(bonusCents / 100).toFixed(2)}</p>
              </div>
            </div>

            <div className="side-section">
              <div className="section-title">
                <Sparkles size={15} /> 当前模板
              </div>
              <strong>{selectedTemplate}</strong>
              <p>适合表达趋势、变化和实验序列。导出默认无水印、无本地路径、无个人信息。</p>
            </div>

            <div className="metric-row">
              <MetricPill icon={<Activity size={17} />} label="本次预估" value={`¥${(charge.chargeCents / 100).toFixed(2)}`} />
              <MetricPill icon={<Database size={17} />} label="模板库" value={`${CORE_TEMPLATES.length} 个`} />
            </div>

            <div className="right-grid">
              <div className="panel usage-panel">
                <div className="section-title">
                  <Activity size={15} /> 用量走势
                </div>
                <div className="usage-chart">
                  {usageData.map((item) => (
                    <div className="usage-bar" key={item.day}>
                      <i style={{ height: `${item.cost * 1.15}px` }} />
                      <span>{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div id="quality" className="panel checklist-panel">
                <div className="section-title">
                  <ShieldCheck size={15} /> 发布前检查
                </div>
                <ul>
                  <li>不发布 Akun 原始文件或去署名版本</li>
                  <li>不把手机号、邮箱、密钥写入日志</li>
                  <li>失败任务不重复扣费</li>
                </ul>
                <button type="button">
                  查看规则 <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function MetricPill({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) {
  return (
    <article className="metric-pill">
      <div>{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  )
}

export default App
