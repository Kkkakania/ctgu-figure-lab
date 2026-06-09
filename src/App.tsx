import type { ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'
import {
  Activity,
  Bot,
  ChevronRight,
  Code2,
  Database,
  Download,
  FolderOpen,
  LineChart,
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

const sessionSteps = ['上传数据', '选择图表', '生成代码', '导出图像']

const qualitySignals = [
  { label: '隐私清理', value: '启用' },
  { label: '白底导出', value: 'SVG' },
  { label: '模板来源', value: 'clean-room' },
]

const recentJobs = [
  { name: '电压波形对比', type: 'SVG', status: '已导出' },
  { name: '回归关系图', type: 'PNG', status: '可复用' },
  { name: '流程图草案', type: 'Code', status: '待确认' },
]

const codeSnippet = `figure('Color','w');
plot(x, y, '-o', 'LineWidth', 1.6, 'MarkerSize', 4);
grid on; box off;
xlabel('样本序号');
ylabel('指标值');
title('实验指标趋势预览');
exportgraphics(gcf, 'figure.svg', 'ContentType', 'vector');`

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [artifactTab, setArtifactTab] = useState<ArtifactTab>('preview')
  const [intent, setIntent] = useState(
    '我有两列实验数据，想展示指标随时间变化，并导出论文可用的图片。',
  )
  const [selectedTemplate, setSelectedTemplate] = useState('line_basic')
  const [topupYuan, setTopupYuan] = useState(100)
  const [commandOpen, setCommandOpen] = useState(false)

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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandOpen((value) => !value)
      }
      if (event.key === 'Escape') {
        setCommandOpen(false)
      }
      if (commandOpen && !event.metaKey && !event.ctrlKey && !event.altKey) {
        const key = event.key.toLowerCase()
        if (key === 'p') {
          setArtifactTab('preview')
          setCommandOpen(false)
        }
        if (key === 'c') {
          setArtifactTab('code')
          setCommandOpen(false)
        }
        if (key === 's') {
          setArtifactTab('settings')
          setCommandOpen(false)
        }
        if (key === 'b') {
          setArtifactTab('billing')
          setCommandOpen(false)
        }
        if (key === 't') {
          setDarkMode((value) => !value)
          setCommandOpen(false)
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [commandOpen])

  const runCommand = (action: () => void) => {
    action()
    setCommandOpen(false)
  }

  return (
    <main className={darkMode ? 'app app-dark' : 'app'}>
      <aside className="sidebar">
        <div className="traffic" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="brand">
          <div className="brand-glyph">绘</div>
          <div>
            <strong>三峡科研绘图</strong>
            <span>Figure Lab</span>
          </div>
        </div>

        <nav className="primary-nav" aria-label="主导航">
          <a className="active" href="#workspace">
            <LineChart size={18} /> 对话工作台
          </a>
          <a href="#artifact" onClick={() => setArtifactTab('preview')}>
            <Sparkles size={18} /> 输出面板
          </a>
          <a href="#wallet" onClick={() => setArtifactTab('billing')}>
            <Wallet size={18} /> 余额充值
          </a>
          <a href="#quality" onClick={() => setArtifactTab('settings')}>
            <ShieldCheck size={18} /> 安全规则
          </a>
        </nav>

        <section className="sidebar-section">
          <div className="section-label">
            <FolderOpen size={15} /> 最近任务
          </div>
          {recentJobs.map((job) => (
            <button className="recent-line" key={job.name} type="button">
              <span>{job.name}</span>
              <small>{job.type}</small>
            </button>
          ))}
        </section>

        <section className="balance-block">
          <span>可用绘图余额</span>
          <strong>¥126.40</strong>
          <p>现金 ¥100.00 · 赠送 ¥26.40</p>
          <button type="button" onClick={() => setArtifactTab('billing')}>
            充值管理 <ChevronRight size={15} />
          </button>
        </section>
      </aside>

      <section className="stage" id="workspace">
        <header className="topbar">
          <div className="breadcrumb">
            <span>CTGU</span>
            <ChevronRight size={14} />
            <strong>AI Figure Workspace</strong>
          </div>
          <button
            className="command-bar"
            type="button"
            aria-expanded={commandOpen}
            aria-label="打开命令面板"
            onClick={() => setCommandOpen(true)}
          >
            <Search size={16} />
            <span>搜索任务、模板、代码或输入命令</span>
            <kbd>⌘K</kbd>
          </button>
          <div className="top-actions">
            <button className="balance-pill" type="button" onClick={() => setArtifactTab('billing')}>
              <Wallet size={16} /> ¥126.40
            </button>
            <button type="button" onClick={() => setArtifactTab('settings')}>
              <Settings size={16} /> 设置
            </button>
            <button aria-label="切换明暗主题" type="button" onClick={() => setDarkMode((value) => !value)}>
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </header>

        <div className="split">
          <section className="conversation" aria-label="绘图对话">
            <div className="conversation-scroll">
              <div className="thread-intro">
                <p>只做科研绘图与流程图</p>
                <h1>把数据变成可交付图表</h1>
                <span>左侧持续对话，右侧实时沉淀预览、代码、参数和余额。</span>
                <div className="session-strip" aria-label="当前绘图流程">
                  {sessionSteps.map((step, index) => (
                    <em className={index < 2 ? 'done' : ''} key={step}>
                      {index + 1}. {step}
                    </em>
                  ))}
                </div>
              </div>

              <article className="turn turn-user">
                <div className="avatar">你</div>
                <div className="turn-main">
                  <div className="turn-head">
                    <strong>数据与目标</strong>
                    <small>当前任务</small>
                  </div>
                  <label className="upload-row">
                    <Upload size={18} />
                    <span>拖入 CSV / XLSX 或点击上传</span>
                    <small>10MB 内，默认 7 天自动清理</small>
                    <input type="file" accept=".csv,.xlsx" />
                  </label>
                  <textarea value={intent} onChange={(event) => setIntent(event.target.value)} aria-label="图表需求" />
                </div>
              </article>

              <article className="turn turn-assistant">
                <div className="avatar avatar-ai">
                  <Bot size={17} />
                </div>
                <div className="turn-main">
                  <div className="turn-head">
                    <strong>推荐图表</strong>
                    <small>根据描述实时更新</small>
                  </div>
                  <div className="command-list">
                    {recommendations.slice(0, 3).map((template, index) => (
                      <button
                        className={selectedTemplate === template.id ? 'command active' : 'command'}
                        key={template.id}
                        type="button"
                        onClick={() => {
                          setSelectedTemplate(template.id)
                          setArtifactTab('preview')
                        }}
                      >
                        <span>{index + 1}</span>
                        <strong>{template.label}</strong>
                        <small>{template.id}</small>
                        <ChevronRight size={16} />
                      </button>
                    ))}
                  </div>
                </div>
              </article>

              <article className="turn turn-assistant compact">
                <div className="avatar avatar-ai">
                  <ShieldCheck size={17} />
                </div>
                <div className="turn-main">
                  <div className="turn-head">
                    <strong>上线边界</strong>
                    <small>自动检查</small>
                  </div>
                  <p>
                    输出默认无水印、无本地路径、无个人信息。不会发布 Akun 原始文件或去署名版本。
                  </p>
                </div>
              </article>

              <div className="quality-strip" aria-label="输出质量状态">
                {qualitySignals.map((signal) => (
                  <div key={signal.label}>
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="composer">
              <button type="button" aria-label="上传附件">
                <Paperclip size={18} />
              </button>
              <span>继续描述图表要求，例如“需要白底、标注峰值、导出 SVG”</span>
              <button type="button" aria-label="发送">
                <Send size={18} />
              </button>
            </div>
          </section>

          <aside className="artifact" id="artifact" aria-label="输出面板">
            <div className="artifact-head">
              <div>
                <span>输出</span>
                <strong>Figure artifact</strong>
              </div>
              <div className="artifact-status">
                <span />
                白底 · SVG
              </div>
            </div>

            <div className="artifact-tabs" role="tablist" aria-label="输出视图">
              <ArtifactTabButton id="preview" active={artifactTab} onClick={setArtifactTab}>
                预览
              </ArtifactTabButton>
              <ArtifactTabButton id="code" active={artifactTab} onClick={setArtifactTab}>
                代码
              </ArtifactTabButton>
              <ArtifactTabButton id="settings" active={artifactTab} onClick={setArtifactTab}>
                设置
              </ArtifactTabButton>
              <ArtifactTabButton id="billing" active={artifactTab} onClick={setArtifactTab}>
                余额
              </ArtifactTabButton>
            </div>

            <div className="artifact-body">
              {artifactTab === 'preview' && (
                <div className="preview-stage">
                  <div className="canvas-window">
                    <div className="canvas-toolbar">
                      <span>figure.svg</span>
                      <small>v1 · clean-room · 论文白底</small>
                    </div>
                    <div className="preview-surface" dangerouslySetInnerHTML={{ __html: previewSvg }} />
                  </div>
                  <div className="artifact-dock">
                    <div>
                      <Code2 size={16} />
                      <span>MATLAB 代码已同步</span>
                    </div>
                    <code>exportgraphics(gcf, 'figure.svg')</code>
                  </div>
                </div>
              )}

              {artifactTab === 'code' && (
                <div className="code-surface">
                  <div className="code-title">
                    <Code2 size={17} />
                    <span>可复现 MATLAB 代码</span>
                  </div>
                  <pre>{codeSnippet}</pre>
                  <button type="button">
                    <Download size={16} /> 复制并下载代码
                  </button>
                </div>
              )}

              {artifactTab === 'settings' && (
                <div className="settings-surface">
                  <SettingLine label="导出背景" value="白底" />
                  <SettingLine label="输出格式" value="SVG / PNG" />
                  <SettingLine label="隐私清理" value="路径、邮箱、手机号默认不写入" />
                  <SettingLine label="模板" value={`${selectedTemplate} · ${CORE_TEMPLATES.length} 个可用模板`} />
                </div>
              )}

              {artifactTab === 'billing' && (
                <div className="billing-surface" id="wallet">
                  <div>
                    <span>可用余额</span>
                    <strong>¥126.40</strong>
                    <p>本次预估消耗 ¥{(charge.chargeCents / 100).toFixed(2)}</p>
                  </div>
                  <label>
                    充值金额
                    <input min={10} max={1000} type="number" value={topupYuan} onChange={(event) => setTopupYuan(Number(event.target.value))} />
                  </label>
                  <p>绑定手机号和邮箱后，首充预计赠送 ¥{(bonusCents / 100).toFixed(2)}。同一手机号每天最多 3 次验证码。</p>
                  <button type="button">
                    生成充值订单 <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>

            <div className="artifact-footer">
              <button type="button" onClick={() => setArtifactTab('preview')}>
                <Download size={16} /> SVG
              </button>
              <button type="button" onClick={() => setArtifactTab('settings')}>
                <Palette size={16} /> 样式
              </button>
              <button type="button" onClick={() => setArtifactTab('code')}>
                <Code2 size={16} /> 代码
              </button>
            </div>

            <div className="artifact-meta" id="quality">
              <MetricRow icon={<Activity size={16} />} label="本次预估" value={`¥${(charge.chargeCents / 100).toFixed(2)}`} />
              <MetricRow icon={<Database size={16} />} label="模板库" value={`${CORE_TEMPLATES.length} 个`} />
              <MetricRow icon={<ShieldCheck size={16} />} label="风险检查" value="已启用" />
            </div>

            <div className="usage-line">
              {usageData.map((item) => (
                <span key={item.day} style={{ height: `${18 + item.cost}px` }}>
                  <i>{item.day}</i>
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {commandOpen && (
        <div className="command-overlay" role="dialog" aria-modal="true" aria-label="命令面板">
          <div className="command-modal">
            <div className="command-modal-head">
              <Search size={17} />
              <span>输入命令或快速跳转</span>
              <kbd>Esc</kbd>
            </div>
            <div className="command-groups">
              <button type="button" onClick={() => runCommand(() => setArtifactTab('preview'))}>
                <Sparkles size={17} />
                <span>
                  查看当前图表预览
                  <small>打开右侧 artifact 的预览视图</small>
                </span>
                <kbd>P</kbd>
              </button>
              <button type="button" onClick={() => runCommand(() => setArtifactTab('code'))}>
                <Code2 size={17} />
                <span>
                  打开可复现代码
                  <small>检查 MATLAB exportgraphics 输出</small>
                </span>
                <kbd>C</kbd>
              </button>
              <button type="button" onClick={() => runCommand(() => setArtifactTab('settings'))}>
                <Settings size={17} />
                <span>
                  调整导出设置
                  <small>背景、格式、隐私清理和模板状态</small>
                </span>
                <kbd>S</kbd>
              </button>
              <button type="button" onClick={() => runCommand(() => setArtifactTab('billing'))}>
                <Wallet size={17} />
                <span>
                  查看余额与充值
                  <small>充值、赠送规则和验证码限制</small>
                </span>
                <kbd>B</kbd>
              </button>
              <button type="button" onClick={() => runCommand(() => setDarkMode((value) => !value))}>
                {darkMode ? <Sun size={17} /> : <Moon size={17} />}
                <span>
                  切换明暗主题
                  <small>科研浅色与深色工作台</small>
                </span>
                <kbd>T</kbd>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function ArtifactTabButton({
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

function SettingLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="setting-line">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function MetricRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) {
  return (
    <div className="metric-row">
      {icon}
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export default App
