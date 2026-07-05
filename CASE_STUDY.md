# Case Study: Who Holds the Camera? 西方镜头中的中国

## 1. Background

This project started as a static image-collection site and was redesigned as a curated digital exhibition. The goal was to keep the project understandable to wider audiences while exposing source chains and rights context as part of exhibition reading.

## 2. Problem

Many historical image pages prioritize nostalgia and aesthetic display while omitting:

- source chain transparency
- uncertainty in reuse permissions
- the viewer's positionality in visual production

The exhibition format became the answer: not just a gallery of cards, but a space with interpretation points and research traces.

## 3. Approach

The project starts from secondary visual leads (such as Flashbak) and tracks backward toward original or best-available sources: archives, museums, libraries, photographer estates/projects, and public repositories.

After V1.6, the home page uses an overview-first rhythm (intro, featured works, gallery entrances), while each gallery has a dedicated page with hero, focus work, study wall, looking question, related sources, and Lightbox close view.

V1.7 added Source Map and Archive Graph so source relationships become explicit.

V1.8 focuses on discoverability without changing the exhibition structure: SEO metadata completeness, canonical links, sitemap generation, robots hints, JSON-LD, and domain-preparation documentation.

V1.9 switches production references to the custom domain `https://camera.conanxin.com` while keeping `https://who-holds-the-camera.pages.dev/` as a fallback endpoint and maintaining the same exhibition architecture.

V2.0 expands the exhibition from 44 to 90 objects without turning the home page into a waterfall grid. More material now lives inside dedicated gallery pages through Featured Work, Focus Pair, Study Wall, Archive Drawer, and enhanced Lightbox viewing.

V2.1 reorganizes the existing 90 objects into cross-gallery thematic trails. Instead of adding more material, it adds curated essays, object sequences, and cross-gallery maps that let viewers re-enter the exhibition through urban modernity, overseas Chinese communities, image technology, propaganda futures, and source flow.

## 4. Design System

- Warm paper-like palette
- Museum-like card hierarchy
- Large headings with restrained detail text
- Thin lines and compact labels
- Source status badges and source trail components

## 5. Content Model

- `Gallery`: room title, period, wall text, timeline, question
- `Object`: metadata + captions + source trail + rights + media
- `Source`: source type, use, reliability, reliability note
- `SourceMap`: source nodes, edges, gallery flow, status counts
- `Route`: visit path and anchors
- `Trail`: cross-gallery question, essay sections, object sequence, source note
- `Looking Question`: interpretive prompts for each section

## 6. Result

- 9 Gallery rooms
- 9 dedicated Gallery pages
- 90 Objects
- 5 Exhibition routes
- 5 Thematic Trails with curated essays
- Source Map page with Archive Graph, gallery source flows, and node cards
- Archive Table with 90 rows
- Enhanced Lightbox close-view mode with gallery, object number, source status, source/archive links, and previous / next navigation
- Archive Drawer on gallery pages
- 50 verified archive source
- 38 rights unclear
- 2 secondary source only
- 0 placeholder pending replacement
- Cloudflare Pages public deployment available

## 7. What I Learned

AI helps speed content scaffolding and consistency, but source credibility and rights framing still require explicit design decisions.

A stronger exhibition structure is not only about adding more images. It is built through rhythm: featured work, paired works, study wall, looking question, and source map path.

For V1.8, the key lesson was that discoverability is part of exhibition quality. Canonical tags, sitemap, OG data, and structured metadata make the work easier to find without changing curation intent.

For V1.9, the lesson is that domain-level consistency is also a curatorial infrastructure task: stable URLs and metadata keep source evidence, links, and reference points reliable across sharing and indexing contexts.

For V2.0, the lesson is that scale only works when rhythm is preserved. More objects need drawers, pairings, and close-looking paths, not a longer flat page. The key to content expansion is not quantity by itself, but viewing rhythm: overview, entering a gallery, close looking, and tracing sources.

For V2.1, the lesson is that a digital exhibition can deepen without growing larger. The same objects can become new arguments when they are sequenced through a question, a source note, and a cross-gallery path.
