# Who Holds the Camera? 西方镜头中的中国

Live Demo: https://camera.conanxin.com/ (fallback: https://who-holds-the-camera.pages.dev/)
GitHub Repo: https://github.com/conanxin/who-holds-the-camera  
Status: V1.9 Custom Domain Activation  
Tech: Astro / TypeScript / Static Site / Cloudflare Pages

## Project Overview

Online exhibition platform exploring how Western-facing image archives represent China from the 1870s to the 1980s.

This is not a Flashbak clone. Flashbak is used as a visual lead, while the exhibition keeps tracing objects back to archives, museums, photographer estates/projects, university archives, and public-domain repositories.

## Exhibition Concept

Exhibition question:

**Who holds the camera, and who controls the explanatory frame?**

The project builds a viewing workflow where object labels, source trail, rights status, archive table, and source map are part of interpretation.

## Screenshots

- [hero-desktop.png](docs/screenshots/hero-desktop.png)
- [routes-desktop.png](docs/screenshots/routes-desktop.png)
- [gallery-preview-v16.png](docs/screenshots/gallery-preview-v16.png)
- [gallery-page-v16.png](docs/screenshots/gallery-page-v16.png)
- [lightbox-v16.png](docs/screenshots/lightbox-v16.png)
- [source-index-v16.png](docs/screenshots/source-index-v16.png)
- [mobile-hero.png](docs/screenshots/mobile-hero.png)

## What This Project Demonstrates

- AI-assisted curation
- visual archive research
- source transparency design
- digital exhibition UI
- static site deployment

## Exhibition Structure

- 7 Gallery overview rooms
- 7 dedicated gallery pages
- 44 objects
- 5 exhibition routes
- Source Map: `/source-map/`
- Archive Table
- Source Index
- Lightbox close-view mode

## Source Status

- verified archive source
- secondary source only
- rights unclear
- placeholder pending replacement

## SEO, Sitemap, and Shareability

- Title and description per page via shared layout.
- Canonical links for home, gallery pages, and source map.
- Open Graph / Twitter card metadata.
- Structured data on homepage (CreativeWork + WebSite).
- SEO metadata preserved while using existing warm-paper visual style.
- `@astrojs/sitemap` enabled in `astro.config.mjs`.
- `public/robots.txt` is provided and points to sitemap output.
- Domain polish documentation added in `docs/deploy/CLOUDFLARE_CUSTOM_DOMAIN.md`.

### SEO Files

- `public/robots.txt`
- `public/og-image.svg`
- `dist/sitemap-index.xml` (or `dist/sitemap.xml` depending on adapter output)
- `_headers` (basic security headers)

## Tech Stack

- Astro
- TypeScript
- CSS
- Cloudflare Pages

## Local Development

```powershell
npm.cmd install
npm.cmd run dev -- --port 4321
npm.cmd run build
npm.cmd run preview -- --port 4323
```

## Launch Materials

- [Launch Kit](LAUNCH.md)
- [X Thread ZH](docs/launch/x-thread-zh.md)
- [Portfolio Entry](docs/launch/portfolio-entry.md)
- [Case Study](CASE_STUDY.md)

## Roadmap

- V1.6 completed: image backfill, 44 objects, dedicated gallery pages, and Lightbox viewing mode.
- V1.6.1 completed: docs sync for public release and launch materials.
- V1.7 completed: Source Map page and Archive Graph.
- V1.8 completed: SEO hardening, sitemap, robots, structured data, and custom domain preparation.
- V1.9 completed: production migration to camera.conanxin.com with domain-level SEO and fallback parity.
