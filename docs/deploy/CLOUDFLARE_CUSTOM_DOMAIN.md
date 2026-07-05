# Cloudflare Pages Custom Domain

本项目当前线上域名：`https://who-holds-the-camera.pages.dev/`。未设置自定义域名时请继续用该域名。

## 1) 绑定路径（Cloudflare Pages）

1. 打开 Cloudflare Dashboard。
2. 进入 `Workers & Pages`。
3. 打开项目 `who-holds-the-camera`。
4. 进入 `Custom domains`。
5. 点击 `Set up a custom domain`。
6. 按向导添加目标域名并完成 DNS 验证。

## 2) 推荐域名方案

- `who-holds-the-camera.conanxin.com`
- `camera.conanxin.com`
- `exhibition.conanxin.com`
- `archive.conanxin.com/who-holds-the-camera`（若将来承载多展览集合）

## 3) 绑定后需同步的项目设置

绑定自定义域名后建议同步更新：

- `astro.config.mjs` 的 `site` 配置（与最终域名一致）
- `public/robots.txt` 中的 `Sitemap` 地址
- 全站 `canonical` 与 `og:url`
- 首页/页面 Meta 与 JSON-LD 中的页面 URL
- `README.md` 的 Live Demo 链接与状态说明

## 4) pages.dev 是否保留

- 可以保留 `pages.dev` 地址作为历史/备用入口。
- 也可以设置重定向到自定义域名（由 Cloudflare Pages 或 DNS 页面规则处理）。

## 5) 推荐落地步骤（先验收后生效）

1. 先在 Cloudflare 绑定域名并确认网站可达。
2. 更新 `site / canonical / og:url / robots.txt`。
3. 重新 build 与发布。
4. 运行一次 `/robots.txt` 与关键页面加载验证。
