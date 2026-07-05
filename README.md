# Who Holds the Camera? 西方镜头中的中国

Live Demo: https://camera.conanxin.com/ (fallback: https://who-holds-the-camera.pages.dev/)  
GitHub Repo: https://github.com/conanxin/who-holds-the-camera  
Status: V2.1 Thematic Trails + Curated Essays  
Tech: Astro / TypeScript / Static Site / Cloudflare Pages

## Project Overview

Online exhibition platform exploring how Western-facing image archives represent China from the 1870s to the 1980s.

This is not a Flashbak clone. Flashbak is used as a visual lead, while the exhibition keeps tracing objects back to archives, museums, photographer estates/projects, university archives, and public-domain repositories.

## Exhibition Concept

Exhibition question:

**Who holds the camera, and who controls the explanatory frame?**

The project builds a viewing workflow where object labels, source trail, rights status, archive table, source map, and thematic trails are part of interpretation.

## Screenshots

Current screenshots document the V2.1 public exhibition UI: overview home, thematic trails, curated trail essays, expanded gallery pages, Source Map, Archive Table, and the enhanced Lightbox state.

- [hero-desktop.png](docs/screenshots/hero-desktop.png)
- [routes-desktop.png](docs/screenshots/routes-desktop.png)
- [gallery-overview-v20.png](docs/screenshots/gallery-overview-v20.png)
- [gallery-page-v20.png](docs/screenshots/gallery-page-v20.png)
- [lightbox-v20.png](docs/screenshots/lightbox-v20.png)
- [source-map-v20.png](docs/screenshots/source-map-v20.png)
- [archive-table-v20.png](docs/screenshots/archive-table-v20.png)
- [trails-index-v21.png](docs/screenshots/trails-index-v21.png)
- [trail-page-v21.png](docs/screenshots/trail-page-v21.png)
- [cross-gallery-map-v21.png](docs/screenshots/cross-gallery-map-v21.png)
- [mobile-hero.png](docs/screenshots/mobile-hero.png)

## What This Project Demonstrates

- AI-assisted curation
- visual archive research
- source transparency design
- digital exhibition UI
- static site deployment
- content expansion without flattening the homepage
- immersive gallery pages
- archive drawer
- expanded visual density with source transparency
- thematic trails across galleries
- curated essays that reorganize existing objects without increasing object count

## Exhibition Structure

- 9 Gallery overview rooms
- 9 dedicated gallery pages
- 90 objects
- 5 exhibition routes
- 5 thematic trails
- Trails page: `/trails/`
- Source Map: `/source-map/`
- Archive Table
- Source Index
- Lightbox close-view mode with gallery, status, source context, and previous / next navigation
- Archive Drawer on each gallery page
- Gallery 07: 上海镜头
- Gallery 08: 宣传画与未来想象

## Source Status

- verified archive source: 50
- rights unclear: 38
- secondary source only: 2
- placeholder pending replacement: 0

## SEO, Sitemap, and Shareability

- Title and description per page via shared layout.
- Canonical links for home, gallery pages, trail pages, and source map.
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
- V2.0 completed: expanded from 44 to 90 objects, added Gallery 07 Shanghai Lens and Gallery 08 Propaganda Futures, deepened gallery pages with Archive Drawer and enhanced Lightbox context.
- V2.0.1 completed: public docs, screenshots, launch materials, and QA notes synced to the 90-object exhibition.
- V2.1 completed: added thematic trails, Trail index/detail pages, curated essays, and cross-gallery maps without changing the 90-object collection.
- V2.2 possible next: source essays, bilingual labels, and route-level bibliography notes.
