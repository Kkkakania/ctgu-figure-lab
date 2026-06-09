# 三峡科研绘图 Figure Lab

一个面向三峡大学学生的小规模 AI 科研绘图平台原型。核心目标是把“上传数据、说明想表达什么、生成可复现图表”做扎实，不做数学建模解题、论文代写、排版设计或 PPT 服务。

## 当前能力

- 中文浅色优先工作台，支持暗色模式。
- v1 clean-room 图表 registry：20+ 个稳定图表类型。
- 无 MATLAB 依赖的 SVG 预览渲染器。
- 面向用户的绘图额度消耗预估。
- 现金余额 / 赠送余额分离的账本逻辑。
- 首充赠送规则：绑定手机号和邮箱后，100-499.99 元赠送 5%，500-1000 元赠送 10%，封顶 100 元。
- Cloudflare Worker API：模板列表、价格估算、图表分析、SVG 渲染、充值赠送预览、微信支付/验证码安全配置检查。
- 只读审计本地 `科研绘图_函数库` 的脚本，不修改 `17 akun`。

## 本地运行

```bash
npm install
npm test
npm run build
npm run dev
```

审计本地绘图库：

```bash
npm run audit:plot-library
```

## Cloudflare

项目使用 Cloudflare Workers + D1 + R2：

- Worker 入口：`src/worker/index.ts`
- Wrangler 配置：`wrangler.jsonc`
- D1 migration：`migrations/0001_initial.sql`

真实部署前需要创建 D1 数据库，并把 `wrangler.jsonc` 中的 `database_id` 替换为真实值。R2 文件存储已预留在架构中，但当前 Cloudflare 账号还未启用 R2，v1 先不绑定 R2，避免部署被阻塞。

## 必需密钥

所有密钥必须走 Cloudflare Secrets，不要写入源码或提交到 GitHub。

```bash
wrangler secret put DEEPSEEK_API_KEY
wrangler secret put WECHAT_MCH_ID
wrangler secret put WECHAT_APP_ID
wrangler secret put WECHAT_API_V3_KEY
wrangler secret put WECHAT_PRIVATE_KEY
wrangler secret put WECHAT_CERT_SERIAL_NO
wrangler secret put WECHAT_NOTIFY_URL
wrangler secret put SMS_SECRET
wrangler secret put EMAIL_SECRET
wrangler secret put SERVICE_PRICE_MULTIPLIER
```

## 版权和来源边界

本项目不会复制、去署名、清洗或商业调用 `17 akun` 原始代码。`/Users/wi/Documents/Study/17 akun` 只能作为只读参考和图表需求清单来源。正式服务代码必须 clean-room 重写，并通过隐私、来源和二进制文件审计。

当前建议：

- `科研绘图_函数库` 的 manifest 80 个模板可作为 stable 参考。
- Claude 新增的额外 Python/MATLAB 模板先作为 candidate，不直接上线。
- `.pyc`、`.DS_Store`、`.mat`、`.fig`、`.p` 等不得进入公开仓库或生产服务。

## 下一步

1. 配置 Cloudflare D1；启用 R2 后再接文件存储。
2. 接入微信支付 API v3 签名、下单、回调验签。
3. 接入邮箱和短信验证码服务。
4. 把前端按钮接到真实 `/api/*`。
5. 对 80 stable 图表做逐个渲染验收。
6. 将 +40 candidate 扩展模板通过审计后再逐步开放。
