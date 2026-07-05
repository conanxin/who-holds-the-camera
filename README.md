# China Through Other Lenses

《西方镜头中的中国：1870s—1980s》是一个 Astro 静态线上展览项目，形式定位为 Digital Exhibition / Online Archive Exhibition。

本项目不是 Flashbak 中文版，也不是素材搬运站。Flashbak、图库文章和网络再传播只作为视觉线索入口；展览继续追溯到档案馆、博物馆、摄影师项目、画廊/estate、大学项目和公共资料库，并在每件展品中保留 source trail 与 rights note。

## 展览概念

展览围绕一个问题展开：

> 当镜头看向中国，它看见的是中国，还是观看者自己？

页面把图像分成两层阅读：画面本身，以及图像如何被拍摄、命名、收藏、授权和再次传播。展览文案采用“展览墙文 + 图像研究笔记”的语气，不把照片当作透明的历史窗口。

## 页面结构

- Exhibition Entrance / 展览入口
- Curator’s Statement / 策展人导言
- Gallery Navigation / 展厅地图
- Gallery 00 / 印刷中国：摄影之前的图像复制
- Gallery 01 / 清末中国：湿版摄影与外部观看
- Gallery 02 / 唐人街：移民社区与黄祸想象
- Gallery 03 / 民国相册：外交官、女性与精英网络
- Gallery 04 / 光影香港：何藩的城市诗学
- Gallery 05 / 霓虹、城寨与全球城市
- Gallery 06 / 1982：开放初期的可参观中国
- Reflection Room / 谁拿着相机？
- Archive Table / 展品索引
- Source Index / 来源索引

## 技术栈

- Astro 7
- TypeScript 静态数据
- 原生 Astro components
- CSS design tokens
- 无后端、无登录、无权限系统

## 本地启动

```powershell
npm.cmd install
npm.cmd run dev -- --port 4321
```

## 生产构建

```powershell
npm.cmd run build
```

构建输出目录为 `dist`。

## 本地预览

```powershell
npm.cmd run preview -- --port 4323
```

## 部署方式

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 使用 Cloudflare 默认 LTS 即可

### Vercel

- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages

GitHub Pages 可作为可选部署方式。本轮未配置 Astro `base`；如果部署到非根路径仓库页，需要再按仓库名配置 `base`。

## 来源状态说明

每件展品都有 source trail：

- `verified archive source`: 已追溯到馆藏、档案、大学项目或较稳定的项目页。
- `rights unclear`: 找到近源记录或摄影师/画廊线索，但页面未授予直接复制或嵌入原图的权利；展览只做外链展示。
- `secondary source only`: 目前仍以二次传播页面作为主要视觉线索，原始图像映射尚未完全核实。
- `placeholder pending replacement`: 预留状态，用于后续替换为更稳定来源。

Source Index 分为：

- Archive / Museum / Library
- Photographer / Estate / Gallery
- Secondary visual trail
- Further reading

## 后续计划

- 继续为 Fan Ho、Greg Girard、Simon Nowicki 条目寻找更精确的单件作品页或授权说明。
- 为每个外链型展品补充“为什么不复制图片”的读者提示。
- 增加按 Gallery、地点、年代和状态的组合筛选。
- 准备 Cloudflare Pages 公开预览链接。
- 在后续版本中补充英文完整展签。
