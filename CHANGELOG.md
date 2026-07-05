# Changelog

## V2.0.1 — Post-Expansion Docs + Screenshots Sync

- Synced public documentation, screenshots, and launch materials with the V2.0 expansion.
- Updated README, Case Study, Launch Kit, and screenshot index to describe 90 objects, 9 galleries, 9 gallery pages, Archive Drawer, and enhanced Lightbox behavior.
- Regenerated V2.0 screenshot set for the homepage, gallery overview, gallery page, Lightbox, Source Map, Archive Table, and mobile hero.
- This release does not add exhibition objects or change the gallery data model.

## V2.0 — Exhibition Content Expansion + Immersive Viewing

- Expanded the exhibition from 44 to 90 objects.
- Added Gallery 07: Shanghai Lens.
- Added Gallery 08: Propaganda Futures.
- Increased gallery overview sections and dedicated gallery pages from 7 to 9.
- Each dedicated gallery page now presents 9-13 visual objects through featured work, focus pair, study wall, and archive drawer sections.
- Added V2 object data layer in `src/data/v20Objects.ts`.
- Deepened gallery pages with Archive Drawer sections while preserving the home page as an overview exhibition.
- Enhanced Lightbox with gallery context, object number, source status, source links, and previous / next navigation.
- Updated Archive Table with gallery filtering and 90 rendered rows.
- Synced Source Map statistics through the shared object/source data model.
- Confirmed all 90 objects have media previews and the generated site has 0 blank media areas.
- Verified 60 unique image preview URLs returning 200 in the generated site.
- Current status counts: 50 verified archive source, 38 rights unclear, 2 secondary source only, 0 placeholder pending replacement.

## V1.8 — SEO + Sitemap + Domain Polish

- Added `@astrojs/sitemap` integration and configured `site` in `astro.config.mjs`.
- Added `public/robots.txt` with sitemap reference.
- Completed canonical/OG/Twitter meta baseline in shared layout.
- Added homepage JSON-LD (`CreativeWork` + `WebSite`) with exhibition identity and inLanguage.
- Added `/source-map/` canonical/OG alignment.
- Added page-specific canonical URLs on home, gallery pages, and Source Map.
- Added `public/_headers` basic security headers.
- Added Cloudflare custom-domain preparation documentation at `docs/deploy/CLOUDFLARE_CUSTOM_DOMAIN.md`.

## V1.7 — Source Map + Archive Graph

- Added `/source-map/` as a dedicated source map page.
- Added a lightweight `ArchiveGraph` research diagram without heavy chart libraries.
- Added Gallery Source Flows and Source Node Cards.
- Added Source Legend.
- Added Source Map entry on the home page.
- Kept the exhibition object count at 44 and preserved source status counts.

## V1.6.1 — Post-Expansion Docs Sync

- Synced public-facing documentation with the V1.6 object expansion and route architecture.
- Updated source-status counts and launch materials.
- Added V1.6 screenshot references and launch checklist consistency.

## V1.6 — Image Backfill + Gallery Deepening

- Expanded exhibition from 24 to 44 objects.
- Added 7 dedicated Gallery pages.
- Changed home page into an overview exhibition layout.
- Added `FeaturedWork`, `GalleryPreview`, `StudyWall`, `Lightbox`, and `ObjectGrid` components.
- Backfilled missing gallery image previews and retained visible source-status badges.

## V1.5.1 — Launch Execution Checklist

- Added launch execution checklist for GitHub, X, social, and portfolio publishing.
- Documented repo metadata and topic recommendations.

## V1.5 — Public Launch Kit

- Added `LAUNCH.md`, channel-specific launch drafts, and portfolio entry documentation.

## V1.4 — Portfolio Package

- Reworked `README.md` for portfolio exposure.
- Added `docs/screenshots/` and supporting case-study documentation.
- Added launch footer links and version markers for exhibition release.

## V1.3 — Exhibition Routes + Source Notes

- Added exhibition routes and Open Graph sharing metadata.
- Added `public/og-image.svg`.
- Extended source index fields and reliability notes.

## V1.2.1 — Public Preview URL

- Published Cloudflare Pages preview link and aligned repository visibility.

## V1.2 — Public Deploy Polish

- Added repository and Pages deployment settings guidance.
- Verified visible metadata, homepage rendering, and mobile readability.

## V1.1 — Exhibition Polish + Source Hardening

- Added source status badges and rights-notes workflow.
- Improved Gallery structure and source trail components.
- Added Source Map preparation, Archive Table and Source Index stability checks.

## V1.0 — Scaffold

- Built the initial Astro static digital exhibition.
- Added exhibition components and core content model.
