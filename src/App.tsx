import { useMemo, useState } from 'react'
import {
  Activity,
  BadgeCheck,
  BarChart3,
  CreditCard,
  Database,
  Download,
  FileSpreadsheet,
  LineChart,
  MessageCircle,
  Moon,
  Settings2,
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
  { day: '6-01', cost: 18 },
  { day: '6-02', cost: 32 },
  { day: '6-03', cost: 24 },
  { day: '6-04', cost: 46 },
  { day: '6-05', cost: 38 },
  { day: '6-06', cost: 61 },
  { day: '6-07', cost: 55 },
]

const sampleRows = [
  { category: 'A', x: 0, y: 2.4, value: 24 },
  { category: 'B', x: 1, y: 3.1, value: 31 },
  { category: 'C', x: 2, y: 4.8, value: 48 },
  { category: 'D', x: 3, y: 3.9, value: 39 },
  { category: 'E', x: 4, y: 6.2, value: 62 },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
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

  return (
    <main className={darkMode ? 'app app-dark' : 'app'}>
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">绘</div>
          <div>
            <strong>三峡科研绘图</strong>
            <span>Figure Lab</span>
          </div>
        </div>

        <nav className="nav-list" aria-label="主导航">
          <a className="active" href="#workspace">
            <LineChart size={18} /> 绘图工作台
          </a>
          <a href="#wallet">
            <Wallet size={18} /> API 余额
          </a>
          <a href="#quality">
            <ShieldCheck size={18} /> 质量检查
          </a>
          <a href="#support">
            <MessageCircle size={18} /> 问题反馈
          </a>
        </nav>

        <section className="side-note">
          <BadgeCheck size={18} />
          <p>只做科研绘图和流程图，不做建模解题、论文代写或排版服务。</p>
        </section>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">CTGU · AI Figure Workspace</p>
            <h1>上传数据，生成可复现的科研图表</h1>
          </div>
          <button
            className="icon-button"
            type="button"
            aria-label="切换明暗主题"
            onClick={() => setDarkMode((value) => !value)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <section className="status-grid" aria-label="平台状态">
          <MetricCard
            icon={<Wallet size={20} />}
            label="可用余额"
            value="¥126.40"
            helper="现金 ¥100.00 · 赠送 ¥26.40"
          />
          <MetricCard
            icon={<Activity size={20} />}
            label="本次预估"
            value={`¥${(charge.chargeCents / 100).toFixed(2)}`}
            helper="按 DeepSeek 官方成本 × 5"
          />
          <MetricCard
            icon={<Database size={20} />}
            label="模板库"
            value={`${CORE_TEMPLATES.length} 个`}
            helper="v1 stable clean-room 模板"
          />
        </section>

        <section id="workspace" className="workspace">
          <div className="panel input-panel">
            <div className="panel-heading">
              <FileSpreadsheet size={20} />
              <div>
                <h2>数据与需求</h2>
                <p>CSV/XLSX 优先，Word/PDF 后续作为资料解析增强。</p>
              </div>
            </div>

            <label className="upload-box">
              <Upload size={24} />
              <strong>拖入表格或点击上传</strong>
              <span>v1 限制 10MB 内，默认 7 天自动清理</span>
              <input type="file" accept=".csv,.xlsx" />
            </label>

            <label className="field-label" htmlFor="intent">
              你想让这张图说明什么？
            </label>
            <textarea
              id="intent"
              value={intent}
              onChange={(event) => setIntent(event.target.value)}
            />

            <div className="recommendations">
              {recommendations.slice(0, 3).map((template, index) => (
                <button
                  className={
                    selectedTemplate === template.id
                      ? 'template-pill selected'
                      : 'template-pill'
                  }
                  key={template.id}
                  type="button"
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <span>{index + 1}</span>
                  {template.label}
                </button>
              ))}
            </div>
          </div>

          <div className="panel preview-panel">
            <div className="panel-heading">
              <Sparkles size={20} />
              <div>
                <h2>图表预览</h2>
                <p>当前使用 {selectedTemplate}，导出默认白底。</p>
              </div>
            </div>

            <div
              className="figure-preview"
              dangerouslySetInnerHTML={{ __html: previewSvg }}
            />

            <div className="preview-actions">
              <button type="button">
                <Download size={17} /> 导出 SVG
              </button>
              <button type="button">
                <Download size={17} /> 导出 PNG
              </button>
              <button type="button">
                <Settings2 size={17} /> 调整参数
              </button>
            </div>
          </div>
        </section>

        <section className="lower-grid">
          <div id="wallet" className="panel wallet-panel">
            <div className="panel-heading">
              <CreditCard size={20} />
              <div>
                <h2>微信充值与赠送</h2>
                <p>真实入账只接受微信支付验签回调。</p>
              </div>
            </div>
            <div className="topup-row">
              <span>自定义充值</span>
              <input
                min={10}
                max={1000}
                type="number"
                value={topupYuan}
                onChange={(event) => setTopupYuan(Number(event.target.value))}
              />
              <span>元</span>
            </div>
            <p className="bonus-line">
              手机号和邮箱都绑定后，首充预计赠送{' '}
              <strong>¥{(bonusCents / 100).toFixed(2)}</strong>
            </p>
            <button className="primary-button" type="button">
              生成微信支付二维码
            </button>
          </div>

          <div className="panel usage-panel">
            <div className="panel-heading">
              <BarChart3 size={20} />
              <div>
                <h2>Usage 明细</h2>
                <p>用户能看到每次生成的 token、倍率和扣费。</p>
              </div>
            </div>
            <div className="usage-chart">
              {usageData.map((item) => (
                <div className="usage-bar" key={item.day}>
                  <span>{item.day}</span>
                  <div>
                    <i style={{ height: `${item.cost * 2.2}px` }} />
                  </div>
                  <strong>¥{item.cost}</strong>
                </div>
              ))}
            </div>
          </div>

          <div id="quality" className="panel quality-panel">
            <div className="panel-heading">
              <ShieldCheck size={20} />
              <div>
                <h2>上线前硬规则</h2>
                <p>防止版权、隐私和账单事故。</p>
              </div>
            </div>
            <ul className="check-list">
              <li>不发布 Akun 原始文件或去署名版本</li>
              <li>不输出手机号、邮箱、支付密钥到日志</li>
              <li>余额只由微信验签回调或后台审计操作改变</li>
              <li>单任务有最高扣费上限，失败不重复扣费</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  )
}

function MetricCard({
  icon,
  label,
  value,
  helper,
}: {
  icon: React.ReactNode
  label: string
  value: string
  helper: string
}) {
  return (
    <article className="metric-card">
      <div className="metric-icon">{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{helper}</p>
    </article>
  )
}

export default App
