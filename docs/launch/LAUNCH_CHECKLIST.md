# Launch Execution Checklist

## 0. Metadata

Live Demo:
https://camera.conanxin.com/ (fallback: https://who-holds-the-camera.pages.dev/)

GitHub:
https://github.com/conanxin/who-holds-the-camera

Current release:
V2.1 Thematic Trails + Curated Essays

## 1. GitHub 发布

- [ ] Set repo description.
- [ ] Set website URL.
- [ ] Pin repo to GitHub Profile.
- [ ] Check that README first-screen screenshots render correctly.
- [ ] Confirm the Live Demo link in README opens the Cloudflare Pages site.

Recommended repo description:

> A Chinese digital exhibition about photography, power, archives, and the visual making of "China" through external lenses.

Recommended website:

> https://camera.conanxin.com/

Recommended topics:

- `astro`
- `digital-exhibition`
- `visual-archive`
- `china`
- `photography`
- `curation`
- `cloudflare-pages`

GitHub CLI command:

```powershell
gh repo edit conanxin/who-holds-the-camera --description "A Chinese digital exhibition about photography, power, archives, and the visual making of China through external lenses." --homepage "https://camera.conanxin.com/"
```

Manual path:

1. Open the GitHub repo.
2. Click the gear icon near About.
3. Add the description, website, and topics above.
4. Save changes.
5. Pin the repo from the GitHub Profile customization page.

## 2. X 发布

Use:

- `docs/launch/x-thread-zh.md`

Suggested screenshots:

- `docs/screenshots/hero-desktop.png`
- `docs/screenshots/routes-desktop.png`
- `docs/screenshots/gallery-overview-v20.png`
- `docs/screenshots/trails-index-v21.png`
- `docs/screenshots/source-map-v20.png`
- `docs/screenshots/archive-table-v20.png`

Before posting:

- [ ] Confirm thread count and numbering.
- [ ] Confirm Live Demo link works.
- [ ] Confirm GitHub link works.
- [ ] Attach screenshots in a sequence that starts with the exhibition entrance.

## 3. 小红书 / 即刻发布

Use:

- `docs/launch/xiaohongshu.md`

Suggested screenshots:

- `docs/screenshots/mobile-hero.png`
- `docs/screenshots/gallery-page-v20.png`
- `docs/screenshots/trail-page-v21.png`
- `docs/screenshots/lightbox-v20.png`
- `docs/screenshots/source-map-v20.png`

Before posting:

- [ ] Use a less technical title if posting to a general audience.
- [ ] Keep the source-status explanation visible.
- [ ] Include Live Demo and GitHub links where the platform allows.
- [ ] Add screenshots that show both the visual surface and the source method.

## 4. 作品集发布

Use:

- `docs/launch/portfolio-entry.md`

Suggested screenshots:

- `docs/screenshots/hero-desktop.png`
- `docs/screenshots/gallery-overview-v20.png`
- `docs/screenshots/gallery-page-v20.png`
- `docs/screenshots/cross-gallery-map-v21.png`
- `docs/screenshots/archive-table-v20.png`

Before publishing:

- [ ] Include Role, Tools, Problem, Solution, Impact, and Links.
- [ ] Link to `CASE_STUDY.md` for the longer process write-up.
- [ ] Include the Live Demo as the primary CTA.
- [ ] Mention that the project is an AI-assisted digital curation experiment.

## 5. 发布后检查

- [ ] Live Demo opens normally.
- [ ] GitHub README renders normally.
- [ ] X link preview renders normally.
- [ ] OG image appears in link previews.
- [ ] Mobile view opens normally.
- [ ] Source Index and Archive Table are still visible.
- [ ] Gallery single pages open normally.
- [ ] Lightbox opens from an object image.
- [ ] Rights status badges are still visible.
- [ ] Screenshot links in README are not broken.

