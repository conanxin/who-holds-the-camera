# Case Study: Who Holds the Camera? 西方镜头中的中国

## 1. Background

This project began as an attempt to turn scattered historical image leads into a digital exhibition rather than another nostalgic photo page. The subject is not simply "old photographs of China"; it is the visual relationship between camera, archive, viewer, caption, and power.

The exhibition follows images from printed books and early photography to Chinatown imagery, Republican-era albums, Hong Kong street photography, Kowloon Walled City projects, and 1982 travel photographs.

## 2. Problem

Many historical image pages have three recurring problems:

- Sources are unclear or reduced to a single secondary web page.
- Images are treated as nostalgic evidence instead of produced visual objects.
- The viewer's position is rarely explained: who took the photograph, who named it, who preserved it, and who is missing from the caption.

The challenge was to make source uncertainty visible without making the page feel unfinished.

## 3. Approach

The project starts from secondary visual leads such as Flashbak, then continues tracing images toward archives, museums, photographer projects, estates, galleries, university projects, and public-domain repositories.

The page is designed as an online exhibition instead of a blog or article list. It uses an exhibition entrance, gallery map, curated routes, wall text, object labels, looking questions, an archive table, and a source index. Each object keeps its source trail visible.

After V1.6, the home page no longer lays every object into one long grid. It works as an overview exhibition: each gallery introduces a wall text, a featured work, a short preview set, and an entrance into a dedicated gallery page. The gallery pages then use a hero work, focus pair, study wall, looking question, source trail, and Lightbox viewing mode to create a slower rhythm of looking.

V1.7 extends source transparency from tables into a source map. Instead of asking visitors to infer relationships from links alone, the new `/source-map/` page shows how images travel from archives, museums, photographer projects, estate/gallery pages, secondary visual trails, and further reading into the exhibition object model.

## 4. Design System

The visual system is restrained and museum-like:

- Warm paper background
- Large serif typography
- Thin grid lines
- White exhibition cards
- Museum label structure
- Small source status badges
- Restrained red accent

The design avoids decorative excess so that the main tension stays with the objects and their source conditions.

## 5. Content Model

The project uses a static TypeScript content model:

- `Gallery`: room title, period, wall text, timeline marker, and looking question.
- `Object`: museum-label metadata, captions, curatorial note, source trail, rights note, tags, status, and media previews.
- `Source`: source type, description, use in the exhibition, reliability note, and URL.
- `SourceMap`: source nodes, source edges, gallery source flows, source status counts, and source-map legend data.
- `Route`: visit title, estimated time, description, gallery anchors, and looking question.
- `Looking Question`: a short prompt that asks the visitor to inspect the conditions of viewing.

This model keeps curatorial writing, source transparency, and UI display aligned.

## 6. Result

The public exhibition includes:

- 7 Gallery rooms
- 7 dedicated Gallery pages
- 44 Objects
- 5 Exhibition routes
- Lightbox close-looking mode
- Source Map page with Archive Graph, Gallery Source Flows, Source Node Cards, and Source Legend
- 26 verified archive source objects
- 17 rights unclear objects
- 1 secondary source only object
- 0 placeholder pending replacement objects
- A filterable Archive Table
- A grouped Source Index with reliability notes

The live site is deployed on Cloudflare Pages:

https://who-holds-the-camera.pages.dev/

## 7. What I Learned

AI can help quickly scaffold a curatorial structure, generate consistent labels, and organize a static content model. But source transparency and interpretive judgment have to be designed explicitly.

Uncertainty does not have to be hidden. In this project, uncertain rights and incomplete source trails become part of the interface, helping visitors understand that historical images are not neutral windows. They are records of viewing conditions.

The V1.6 expansion also made one design lesson clearer: an exhibition is not made deeper by piling more images onto the same page. It needs rhythm. Featured works, paired objects, study walls, and close-looking interactions give visitors a way to move between overview and attention.

V1.7 adds another lesson: source transparency is easier to understand when it has a spatial form. A table can preserve evidence, but a map helps visitors see the movement between visual trail, archive record, photographer project, and exhibition label.
