import type { ExhibitionObject } from "./objects";

type V20Seed = {
  id: string;
  galleryId: string;
  number: string;
  title: string;
  titleEn: string;
  year: string;
  creator: string;
  place: string;
  medium: string;
  sourceId: string;
  sourceUrl?: string;
  originalArchiveUrl?: string;
  credit?: string;
  rightsNote?: string;
  captionZh: string;
  captionEn: string;
  curatorialNote: string;
  tags: string[];
  status: ExhibitionObject["status"];
  imagePolicy?: ExhibitionObject["imagePolicy"];
  image: string;
  imageAlt: string;
};

const sourceDefaults: Record<string, Pick<ExhibitionObject, "credit" | "sourceUrl" | "originalArchiveUrl" | "rightsNote">> = {
  met: {
    credit: "The Metropolitan Museum of Art",
    sourceUrl: "https://www.metmuseum.org/art/collection/search?q=Ten+Bamboo+Studio+Manual",
    originalArchiveUrl: "https://www.metmuseum.org/art/collection/search?q=Ten+Bamboo+Studio+Manual",
    rightsNote: "Public domain image record from The Metropolitan Museum of Art."
  },
  wellcome: {
    credit: "Wellcome Collection",
    sourceUrl: "https://wellcomecollection.org/works?query=John%20Thomson%20China",
    originalArchiveUrl: "https://wellcomecollection.org/works?query=John%20Thomson%20China",
    rightsNote: "Public Domain Mark or collection-level record from Wellcome Collection; object pages remain the source of record."
  },
  "mit-thomson": {
    credit: "MIT Visualizing Cultures / John Thomson",
    sourceUrl: "https://visualizingcultures.mit.edu/john_thomson_china_01/ct_essay01.html",
    originalArchiveUrl: "https://visualizingcultures.mit.edu/john_thomson_china_01/ct_essay01.html",
    rightsNote: "Scholarly source trail used for visual context; image rights follow the cited institutional records."
  },
  loc: {
    credit: "Library of Congress",
    sourceUrl: "https://www.loc.gov/collections/genthe/",
    originalArchiveUrl: "https://www.loc.gov/collections/genthe/",
    rightsNote: "Library of Congress collection record used; many Genthe records state no known restrictions."
  },
  "hpc-bristol": {
    credit: "University of Bristol / Historical Photographs of China",
    sourceUrl: "https://www.hpcbristol.net/",
    originalArchiveUrl: "https://www.hpcbristol.net/",
    rightsNote: "Historical Photographs of China collection record used; reuse should follow project guidance."
  },
  "fan-ho-estate": {
    credit: "Fan Ho Estate",
    sourceUrl: "https://fanho-forgetmenot.com/",
    originalArchiveUrl: "https://fanho-forgetmenot.com/",
    rightsNote: "Estate or project-page preview used as a linked source trail; not treated as public-domain material."
  },
  "blue-lotus": {
    credit: "Blue Lotus Gallery / Fan Ho Estate",
    sourceUrl: "https://bluelotus-gallery.com/artists/31-fan-ho/",
    originalArchiveUrl: "https://bluelotus-gallery.com/artists/31-fan-ho/",
    rightsNote: "Gallery preview used as linked source only; reproduction rights are not granted here."
  },
  "greg-girard": {
    credit: "Greg Girard",
    sourceUrl: "https://www.greggirard.com/hkpm-1",
    originalArchiveUrl: "https://www.greggirard.com/hkpm-1",
    rightsNote: "Photographer project page verified; image shown as linked preview only."
  },
  "city-darkness": {
    credit: "City of Darkness / Greg Girard and Ian Lambot",
    sourceUrl: "https://cityofdarkness.co.uk/",
    originalArchiveUrl: "https://cityofdarkness.co.uk/",
    rightsNote: "Project page verified; images are not treated as freely reusable."
  },
  nowicki: {
    credit: "Simon Nowicki",
    sourceUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    originalArchiveUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    rightsNote: "Photographer-hosted China 1982 trail identified; linked preview only."
  },
  "virtual-shanghai": {
    credit: "Virtual Shanghai",
    sourceUrl: "https://www.virtualshanghai.net/Photos/Presentation",
    originalArchiveUrl: "https://www.virtualshanghai.net/photos/images",
    rightsNote: "Virtual Shanghai image record used as source trail; copyright and reuse are evaluated per item."
  },
  "chinese-posters": {
    credit: "Chinese Posters / IISH collection",
    sourceUrl: "https://chineseposters.net/iish-collection",
    originalArchiveUrl: "https://chineseposters.net/iish-collection",
    rightsNote: "Poster catalog preview used as linked source trail; not treated as public-domain material."
  },
  "whitworth-posters": {
    credit: "Whitworth Chinese Art Posters",
    sourceUrl: "https://digitalcommons.whitworth.edu/chinese_art_posters/",
    originalArchiveUrl: "https://digitalcommons.whitworth.edu/chinese_art_posters/",
    rightsNote: "Repository preview used under visible rights statement; linked source only."
  },
  flashbak: {
    credit: "Flashbak",
    sourceUrl: "https://flashbak.com/1962-1985-taikonaut-tykes-chinese-space-babies-posters-2292/",
    originalArchiveUrl: "https://flashbak.com/1962-1985-taikonaut-tykes-chinese-space-babies-posters-2292/",
    rightsNote: "Secondary source only; original archive not yet verified."
  }
};

const metImages = [
  "https://images.metmuseum.org/CRDImages/as/web-large/LC-CP56_001.jpg",
  "https://images.metmuseum.org/CRDImages/as/web-large/DP-26860-001.jpg",
  "https://images.metmuseum.org/CRDImages/as/web-large/LC-CP68_001.jpg",
  "https://images.metmuseum.org/CRDImages/as/web-large/LC-CP54_001.jpg",
  "https://images.metmuseum.org/CRDImages/as/web-large/DP-26869-001.jpg"
];

const wellcomeImages = [
  "https://iiif.wellcomecollection.org/image/L0056490/full/900,/0/default.jpg",
  "https://iiif.wellcomecollection.org/image/L0056112/full/900,/0/default.jpg",
  "https://iiif.wellcomecollection.org/image/L0056168/full/900,/0/default.jpg",
  "https://iiif.wellcomecollection.org/image/L0055693/full/900,/0/default.jpg",
  "https://iiif.wellcomecollection.org/image/L0056174/full/900,/0/default.jpg",
  "https://iiif.wellcomecollection.org/image/L0056400/full/900,/0/default.jpg"
];

const locImages = [
  "https://tile.loc.gov/storage-services/service/pnp/agc/7a55000/7a55000/7a55089v.jpg",
  "https://tile.loc.gov/storage-services/service/pnp/agc/7a09000/7a09000/7a09070r.jpg",
  "https://tile.loc.gov/storage-services/service/pnp/agc/7a08000/7a08800/7a08819r.jpg",
  "https://tile.loc.gov/storage-services/service/pnp/agc/7a55000/7a55000/7a55010r.jpg"
];

const hpcImages = [
  "https://hpcbristol.net/image-library/large/fu02-019.jpg",
  "https://hpcbristol.net/image-library/large/fu-n174.jpg",
  "https://hpcbristol.net/image-library/large/fu-n258.jpg",
  "https://hpcbristol.net/image-library/large/fu-n296.jpg",
  "https://hpcbristol.net/image-library/large/fu01-025.jpg",
  "https://hpcbristol.net/image-library/large/fu02-051.jpg"
];

const fanHoImages = [
  "https://images.squarespace-cdn.com/content/v1/57c921f6893fc02a0ad26bfc/b02b13b9-f206-4afb-8d29-ccffcda97f50/Cleaning%2C+1950-PL.jpg",
  "https://images.squarespace-cdn.com/content/v1/57c921f6893fc02a0ad26bfc/1683346946657-T66MGV7SIBFF3LE8NNX0/Rowing+On%2C+1954-PL.jpg",
  "https://images.squarespace-cdn.com/content/v1/57c921f6893fc02a0ad26bfc/1683346946789-ARSHBTRAFSURZNI3NR4B/Back+Alley%2C+1956-PL.jpg"
];

const girardImages = [
  "https://www.greggirard.com/wp-content/uploads/2022/08/90385_HK_1974.jpg",
  "https://www.greggirard.com/wp-content/uploads/2022/08/90165-HK-1985.jpg",
  "https://www.greggirard.com/wp-content/uploads/2022/08/HK_83_029.jpg",
  "https://images.squarespace-cdn.com/content/v1/54e9ba8ae4b0165bdcf59868/037eff14-9a4a-4df2-b0eb-d9e70a4fbb63/Greg+Girard+%27Children+playing+on+Walled+City+rooftop%27%2C+Hong+Kong+1989%2C+Courtesy+of+Blue+Lotus+Gallery.jpg"
];

const nowickiImages = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnNIkfbZY2ZSc2yhK6KSmp6Q24eiDk4uc0zOhxJ7rXnEuzy2_LFenUEGI59h3wgRa7W2_bcE2fYgVyI9he94ZnJbtKYSZwyZOf69RrTqIoEiCR6sqvB2ISZThB11F4JRMR2PNTMAnHHsc/s640/China008+copy.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhct6FmgXJBa_oaikSeoVTA8dyRK9NH9EEAx0hBe31ocS2AeOJuePbCvPAd9ulQzjrSPNJPtOPbiiqN2M43pDdPsou7Ps8MJtYakeoNiVM6bM0ZMDG9pxnW8YDsudvN06ari2OoHLWAfwM/s640/China052+copy.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAgXd5tLfklLTThMPy9anFohNNBXNMQoLr4nX1XcAH9VMRcxw-t3phgNEo4AxGUX1Jbx7XYYfzBq1OdgRC3lzzlES0aGhbbsAMVZtyi702bhKg5c6kdTwN1uce-B0QxatpBqCoq9KSo7U/s640/China011+copy.jpg"
];

const shanghaiImages = [
  "https://www.virtualshanghai.net/Asset/Preview/dbImage_ID-20361_No-1.jpeg",
  "https://www.virtualshanghai.net/Asset/Preview/dbImage_ID-15089_No-1.jpeg",
  "https://www.virtualshanghai.net/Asset/Preview/dbImage_ID-24818_No-1.jpeg",
  "https://www.virtualshanghai.net/Asset/Preview/dbImage_ID-14912_No-1.jpeg",
  "https://www.virtualshanghai.net/Asset/Preview/dbImage_ID-17614_No-1.jpeg",
  "https://www.virtualshanghai.net/Asset/Preview/dbImage_ID-17136_No-1.jpeg",
  "https://www.virtualshanghai.net/Asset/Preview/dbImage_ID-34170_No-01.jpeg",
  "https://www.virtualshanghai.net/Asset/Preview/dbImage_ID-18614_No-1.jpeg",
  "https://www.virtualshanghai.net/Asset/Preview/dbImage_ID-18616_No-1.jpeg",
  "https://iiif.wellcomecollection.org/image/L0055693/full/900,/0/default.jpg"
];

const posterImages = [
  "https://chineseposters.net/sites/default/files/images/d91-104.jpg",
  "https://chineseposters.net/sites/default/files/images/e16-848.jpg",
  "https://chineseposters.net/sites/default/files/images/e16-854.jpg",
  "https://digitalcommons.whitworth.edu/chinese_art_posters/1052/preview.jpg",
  "https://digitalcommons.whitworth.edu/chinese_art_posters/1045/preview.jpg",
  "https://flashbak.com/wp-content/uploads/2020/02/China033-1280x1280.jpg"
];

const seeds: V20Seed[] = [
  ["g00-v20-06", "gallery-00", "00.06", "套色页的观看顺序", "Color-Block Sequence", "1633", "Hu Zhengyan and collaborators", "Nanjing", "Woodblock-printed book leaf", "met", "verified archive source", metImages[0], "A Ten Bamboo Studio printed leaf.", "图像复制在这里不是背景技术，而是观看被组织起来的方式。", "Printing here is not background technology; it is a system for arranging looking.", "This object keeps Gallery 00 focused on reproduction as a visual method rather than a preface to photography.", ["printing", "Ten Bamboo", "sequence", "book"] ],
  ["g00-v20-07", "gallery-00", "00.07", "花鸟页与可携带知识", "Flower-and-Bird as Portable Knowledge", "1633", "Hu Zhengyan and collaborators", "Nanjing", "Woodblock-printed book leaf", "met", "verified archive source", metImages[1], "Flower-and-bird leaf from the Ten Bamboo Studio Manual.", "一页花鸟不是风景纪念，而是可携带、可复现的知识单元。", "A flower-and-bird page turns image into portable knowledge.", "The page lets the exhibition ask how a motif becomes a unit of storage, circulation, and instruction.", ["printing", "flower-bird", "manual", "circulation"] ],
  ["g00-v20-08", "gallery-00", "00.08", "山水页与边框", "Landscape Leaf and Frame", "1633", "Hu Zhengyan and collaborators", "Nanjing", "Woodblock-printed book leaf", "met", "verified archive source", metImages[2], "Landscape leaf from the Ten Bamboo Studio Manual.", "边框让风景成为可被翻阅的对象，也让观看有了先后。", "The frame makes landscape into something that can be paged through.", "This object bridges the printed page and later camera framing by placing the border at the center of interpretation.", ["printing", "landscape", "frame", "visual technology"] ],
  ["g01-v20-07", "gallery-01", "01.07", "广州街头的分类目光", "Canton Street and the Classifying Gaze", "1869-1871", "John Thomson", "Canton / Guangzhou", "Wet-collodion glass negative", "wellcome", "verified archive source", wellcomeImages[0], "John Thomson China photograph from Wellcome.", "街头被拍成秩序，行人被读成类型。", "The street is turned into order; passersby are read as types.", "The image records not only a street but the photographer's position within a system of travel, publication, and curiosity.", ["John Thomson", "Canton", "street", "classification"] ],
  ["g01-v20-08", "gallery-01", "01.08", "官员肖像的制度面孔", "Official Portrait as Institutional Face", "1869-1871", "John Thomson", "Qing China", "Wet-collodion glass negative", "wellcome", "verified archive source", wellcomeImages[1], "John Thomson portrait of a Qing official.", "官服、姿态与背景共同把一个人组织成制度的面孔。", "Dress, posture, and setting turn a person into an institutional face.", "The portrait helps the gallery show how identity, rank, and European readership meet inside one image.", ["John Thomson", "official", "portrait", "Qing"] ],
  ["g01-v20-09", "gallery-01", "01.09", "儿童凝视", "Child Looking Back", "1869-1871", "John Thomson", "Canton / Guangzhou", "Wet-collodion glass negative", "wellcome", "verified archive source", wellcomeImages[2], "John Thomson portrait of a child.", "儿童回看镜头，让分类目光短暂停顿。", "A child looking back interrupts the classificatory gaze.", "The object keeps the photographed subject from becoming only an ethnographic category.", ["John Thomson", "child", "portrait", "gaze"] ],
  ["g01-v20-10", "gallery-01", "01.10", "上海外滩作为入口", "The Bund as an Entry Point", "1871", "John Thomson", "Shanghai", "Wet-collodion glass negative", "wellcome", "verified archive source", wellcomeImages[3], "John Thomson photograph of the Shanghai Bund.", "外滩不是中立街景，而是贸易、租界和观看位置的交汇。", "The Bund is not neutral scenery; it is trade, concession space, and viewpoint.", "This work also prepares the later Shanghai gallery by showing how the city first enters an external visual archive.", ["John Thomson", "Shanghai", "Bund", "port"] ],
  ["g01-v20-11", "gallery-01", "01.11", "家庭空间的外部读法", "Domestic Space Read From Outside", "1870s", "John Thomson", "South China", "Wet-collodion glass negative", "mit-thomson", "verified archive source", wellcomeImages[4], "Domestic scene from John Thomson source trail.", "家庭空间在镜头中变成了可被解释的社会样本。", "Domestic space becomes a social sample through the lens.", "The object is used as a research note on how intimacy can be turned into public knowledge.", ["John Thomson", "domestic", "Qing", "visual knowledge"] ],
  ["g01-v20-12", "gallery-01", "01.12", "庙宇入口与对称", "Temple Entrance and Symmetry", "1870s", "John Thomson", "Qing China", "Wet-collodion glass negative", "mit-thomson", "verified archive source", wellcomeImages[5], "Temple architecture in a Thomson source trail.", "建筑的正面性让宗教空间变成了易读的构图。", "Frontal architecture turns sacred space into a readable composition.", "This object adds architectural framing to a gallery otherwise dominated by people and streets.", ["John Thomson", "temple", "architecture", "composition"] ],
  ["g02-v20-07", "gallery-02", "02.07", "唐人街门口", "Chinatown Doorway", "1896-1906", "Arnold Genthe", "San Francisco Chinatown", "Photographic negative", "loc", "verified archive source", locImages[0], "Arnold Genthe Chinatown photograph.", "门口把私人生活与街头观看压缩在同一个边界上。", "Doorways compress private life and public looking into one threshold.", "This object strengthens Gallery 02's reading of the doorway as both access and control.", ["Genthe", "Chinatown", "doorway", "diaspora"] ],
  ["g02-v20-08", "gallery-02", "02.08", "父子与街道", "Father, Children, Street", "1896-1906", "Arnold Genthe", "San Francisco Chinatown", "Photographic negative", "loc", "verified archive source", locImages[1], "Arnold Genthe family street photograph.", "亲属关系被看见，却仍被档案标题压缩为类型。", "Family relation is visible while the archive title compresses it into a type.", "The object keeps the gallery's question about names and relationships active.", ["Genthe", "family", "Chinatown", "archive title"] ],
  ["g02-v20-09", "gallery-02", "02.09", "行走中的社区", "Community in Motion", "1896-1906", "Arnold Genthe", "San Francisco Chinatown", "Photographic negative", "loc", "verified archive source", locImages[2], "Arnold Genthe street photograph with pedestrians.", "街道行动常被外部镜头固定成异国城市的证据。", "Street movement is often fixed as evidence of the exotic city.", "This work clarifies how motion can be captured and simplified at the same time.", ["Genthe", "street", "migration", "movement"] ],
  ["g02-v20-10", "gallery-02", "02.10", "Limehouse 的外部想象", "Limehouse and External Imagination", "1900s", "Arnold Genthe", "London Limehouse", "Photographic negative", "loc", "verified archive source", locImages[3], "Limehouse street source trail image.", "同样的观看语法跨过旧金山，进入伦敦港口区。", "The same visual grammar travels beyond San Francisco into London port districts.", "Placed here as a warning that Chinatown images were part of a broader yellow-peril visual economy.", ["Limehouse", "yellow peril", "street", "diaspora"] ],
  ["g03-v20-07", "gallery-03", "03.07", "相机旁的现代身份", "Modern Identity Beside the Camera", "1930s", "Fu Bingchang collection", "Republican China", "Album photograph", "hpc-bristol", "verified archive source", hpcImages[0], "Fu Bingchang collection photograph.", "相机进入相册，不只是工具，也成为身份姿态。", "The camera in the album becomes a social posture, not only a tool.", "This object expands the gallery's line about Chinese subjects holding and directing photographic modernity.", ["Fu Bingchang", "album", "camera", "Republican"] ],
  ["g03-v20-08", "gallery-03", "03.08", "合影中的外交秩序", "Diplomatic Order in a Group Portrait", "1930s", "Fu Bingchang collection", "Republican China", "Album photograph", "hpc-bristol", "verified archive source", hpcImages[4], "Diplomatic group source trail from Historical Photographs of China.", "队列、服装和站位共同把关系变成了秩序。", "Rows, dress, and position turn relations into visible order.", "The object asks whether a group portrait records people or the rules by which they must appear.", ["Fu Bingchang", "diplomacy", "group portrait", "order"] ],
  ["g03-v20-09", "gallery-03", "03.09", "女性与相册网络", "Women and Album Networks", "1930s", "Fu Bingchang collection", "Republican China", "Album photograph", "hpc-bristol", "verified archive source", hpcImages[3], "Woman in Republican-era album source trail.", "女性形象在相册里既是社交线索，也是现代身份的表演。", "Women in albums are social clues and performances of modern identity.", "This object helps keep Gallery 03 from becoming only a diplomatic gallery.", ["Fu Bingchang", "women", "album", "social network"] ],
  ["g03-v20-10", "gallery-03", "03.10", "温泉、旅行与休闲", "Hot Springs, Travel, and Leisure", "1930s", "Fu Bingchang collection", "Republican China", "Album photograph", "hpc-bristol", "verified archive source", hpcImages[5], "Leisure scene from Historical Photographs of China.", "休闲影像提醒我们，现代性也通过身体、旅行和相册被组织。", "Leisure images show modernity organized through bodies, travel, and albums.", "This object widens the gallery's social field beyond official appearances.", ["Fu Bingchang", "leisure", "travel", "album"] ],
  ["g04-v20-08", "gallery-04", "04.08", "清扫者的光线", "The Cleaner in Light", "1950s", "Fan Ho", "Hong Kong", "Photographic project preview", "fan-ho-estate", "rights unclear", fanHoImages[0], "Fan Ho street cleaner preview.", "光线并不只制造美感，它也决定谁成为城市里的可见者。", "Light does not only make beauty; it decides who becomes visible.", "This linked-source object foregrounds labor inside the gallery's poetic surface.", ["Fan Ho", "Hong Kong", "labor", "light"] ],
  ["g04-v20-09", "gallery-04", "04.09", "水面与划船者", "Rowing on the Water", "1954", "Fan Ho", "Hong Kong", "Photographic project preview", "fan-ho-estate", "rights unclear", fanHoImages[1], "Fan Ho rowing scene preview.", "水面把城市拆成倒影、运动和短暂停留。", "Water breaks the city into reflection, motion, and pause.", "The object deepens Gallery 04's focus on how Hong Kong appears through light rather than explanation.", ["Fan Ho", "water", "Hong Kong", "reflection"] ],
  ["g04-v20-10", "gallery-04", "04.10", "背巷的边缘", "Back Alley Edge", "1956", "Fan Ho", "Hong Kong", "Photographic project preview", "blue-lotus", "rights unclear", fanHoImages[2], "Fan Ho back alley preview.", "背巷不是背景，它是城市如何隐藏自身的一部分。", "The back alley is not background; it is part of how the city hides itself.", "This work keeps the gallery's aesthetic language accountable to social space.", ["Fan Ho", "back alley", "shadow", "Hong Kong"] ],
  ["g05-v20-09", "gallery-05", "05.09", "夜间街道作为系统", "Night Street as System", "1974", "Greg Girard", "Hong Kong", "Color photograph / project preview", "greg-girard", "rights unclear", girardImages[0], "Greg Girard night street preview.", "夜色不是装饰，而是城市经济运行的表面。", "Night is not decoration; it is the surface of an urban economy.", "The object helps the gallery move from neon as sign to neon as evidence of systems.", ["Greg Girard", "night", "Hong Kong", "urban system"] ],
  ["g05-v20-10", "gallery-05", "05.10", "霓虹下的通道", "Passage Under Neon", "1985", "Greg Girard", "Hong Kong", "Color photograph / project preview", "greg-girard", "rights unclear", girardImages[1], "Greg Girard neon street preview.", "通道、标牌与湿润路面共同塑造夜间城市的阅读方式。", "Passage, signage, and wet pavement build the grammar of the night city.", "This object strengthens the gallery's corridor motif and the relation between looking and passing through.", ["Greg Girard", "neon", "street", "Hong Kong"] ],
  ["g05-v20-11", "gallery-05", "05.11", "招牌与密度", "Signs and Density", "1983", "Greg Girard", "Hong Kong", "Color photograph / project preview", "greg-girard", "rights unclear", girardImages[2], "Greg Girard street signage preview.", "招牌让城市成为可阅读的表面，也遮挡了更多看不见的劳动。", "Signs make the city readable while hiding other forms of labor.", "Placed as a study-wall object to balance spectacle with the hidden infrastructure behind it.", ["Greg Girard", "signage", "density", "labor"] ],
  ["g05-v20-12", "gallery-05", "05.12", "屋顶上的日常", "Rooftop Daily Life", "1989", "Greg Girard / Ian Lambot", "Kowloon Walled City", "Project preview", "city-darkness", "rights unclear", girardImages[3], "Kowloon Walled City rooftop children preview.", "密度在屋顶、儿童和临时空间里变成日常经验。", "Density becomes everyday experience on rooftops, around children, and in temporary spaces.", "The object keeps Kowloon Walled City from becoming only an urban myth.", ["Kowloon Walled City", "density", "rooftop", "daily life"] ],
  ["g06-v20-07", "gallery-06", "06.07", "1982 街头停顿", "Street Pause, 1982", "1982", "Simon Nowicki", "China", "Color photograph / photographer web trail", "nowicki", "rights unclear", nowickiImages[0], "Simon Nowicki China 1982 street preview.", "停顿的街头让旅行路线成为画面之外的条件。", "A paused street view points back to the travel route outside the frame.", "The object extends Gallery 06's argument that visibility is organized by permission and movement.", ["1982", "travel", "street", "permission"] ],
  ["g06-v20-08", "gallery-06", "06.08", "自行车与路线", "Bicycle and Route", "1982", "Simon Nowicki", "China", "Color photograph / photographer web trail", "nowicki", "rights unclear", nowickiImages[1], "Simon Nowicki China 1982 mobility preview.", "自行车既是日常交通，也是外来观看理解城市节奏的入口。", "The bicycle is everyday transport and an entry point for outside interpretation.", "This object supports the gallery's mobile viewing structure.", ["1982", "bicycle", "mobility", "travel"] ],
  ["g06-v20-09", "gallery-06", "06.09", "商店立面与好奇心", "Shopfront and Curiosity", "1982", "Simon Nowicki", "China", "Color photograph / photographer web trail", "nowicki", "rights unclear", nowickiImages[2], "Simon Nowicki China 1982 shopfront preview.", "商店立面让日常消费成为外来镜头的时代证据。", "The shopfront turns everyday consumption into evidence of a historical moment.", "Used as the drawer object that ties daily life to the exhibition's source-status transparency.", ["1982", "shopfront", "daily life", "travel"] ],
  ["g07-v20-01", "gallery-07", "07.01", "1869 年的上海外滩", "Shanghai Bund in 1869", "1869", "John Thomson / Virtual Shanghai record", "Shanghai", "Black-and-white photograph / database preview", "virtual-shanghai", "verified archive source", shanghaiImages[0], "Virtual Shanghai preview of the Bund in 1869.", "外滩被拍成入口，也被整理成可搜索的城市档案。", "The Bund is photographed as an entry point and later organized as a searchable urban record.", "This hero work opens Gallery 07 by making source circulation visible inside the image itself.", ["Shanghai", "Bund", "Virtual Shanghai", "port"] ],
  ["g07-v20-02", "gallery-07", "07.02", "1928 年的外滩全景", "View of the Bund, 1928", "1928", "Virtual Shanghai record", "Shanghai", "Photograph / database preview", "virtual-shanghai", "verified archive source", shanghaiImages[1], "Virtual Shanghai preview of the Bund in 1928.", "全景把城市变成可占有的视野，也让街面细节退到远处。", "The panorama makes the city possessable as a view while pushing street detail away.", "Placed as a diptych partner for street-level Shanghai scenes.", ["Shanghai", "Bund", "panorama", "viewpoint"] ],
  ["g07-v20-03", "gallery-07", "07.03", "1860 年的外滩图像", "View of the Bund in 1860", "1860", "Virtual Shanghai record", "Shanghai", "Painting / database preview", "virtual-shanghai", "verified archive source", shanghaiImages[2], "Virtual Shanghai preview of a Bund painting.", "绘画、摄影和数据库共同参与制造“可观看上海”。", "Painting, photography, and databases all help manufacture a viewable Shanghai.", "This object links Gallery 07 back to Gallery 00's pre-photographic reproduction question.", ["Shanghai", "Bund", "painting", "visual history"] ],
  ["g07-v20-04", "gallery-07", "07.04", "1849 年的外滩", "Shanghai Bund in 1849", "1849", "Virtual Shanghai record", "Shanghai", "Pictorial record / database preview", "virtual-shanghai", "verified archive source", shanghaiImages[3], "Virtual Shanghai preview of the Bund in 1849.", "早期图像把租界边缘和河岸秩序置于同一观看线上。", "Early images place concession edges and riverfront order on the same line of sight.", "The object gives the Shanghai gallery a longer visual timeline than photography alone.", ["Shanghai", "Bund", "riverfront", "concession"] ],
  ["g07-v20-05", "gallery-07", "07.05", "外滩绘画的重复视角", "Repeated View of the Bund", "1854", "Virtual Shanghai record", "Shanghai", "Painting / database preview", "virtual-shanghai", "verified archive source", shanghaiImages[4], "Virtual Shanghai preview of a Bund painting.", "重复视角说明现代上海并不是被一次性发现，而是被反复观看。", "Repeated viewpoints show Shanghai was not discovered once; it was repeatedly framed.", "This object helps the gallery read repetition as a source of visual authority.", ["Shanghai", "painting", "Bund", "repetition"] ],
  ["g07-v20-06", "gallery-07", "07.06", "1879 年的河岸", "Bund Riverfront, 1879", "1879", "Virtual Shanghai record", "Shanghai", "Painting / database preview", "virtual-shanghai", "verified archive source", shanghaiImages[5], "Virtual Shanghai preview of the Bund riverfront.", "河岸的商业与船只让城市以流通为第一印象。", "Riverfront commerce and boats make circulation the city's first impression.", "This object extends the port-city reading across painted and photographic records.", ["Shanghai", "riverfront", "commerce", "boats"] ],
  ["g07-v20-07", "gallery-07", "07.07", "1882 年的外滩全景图册", "Shanghai Bund Panorama Album", "1882", "Kung Tai Studio / Virtual Shanghai record", "Shanghai", "Albumen print panorama / database preview", "virtual-shanghai", "rights unclear", shanghaiImages[6], "Virtual Shanghai preview of an 1882 Bund panorama.", "全景图册把城市拆成连续观看，也把所有细节压入长卷。", "The panorama album turns the city into a sequence while compressing detail into a long view.", "Marked rights unclear because the item page gives a specific image credit and copyright note.", ["Shanghai", "panorama", "albumen print", "rights unclear"] ],
  ["g07-v20-08", "gallery-07", "07.08", "当代外滩的档案回声", "Contemporary Bund as Archive Echo", "2006", "Virtual Shanghai / Google Earth", "Shanghai", "Digital photograph / database preview", "virtual-shanghai", "rights unclear", shanghaiImages[7], "Virtual Shanghai preview of contemporary Bund view.", "当代视图被放进同一数据库后，历史时间变成可比较的界面。", "When contemporary views enter the same database, historical time becomes a comparable interface.", "This object is not nostalgic; it shows how databases stage comparison.", ["Shanghai", "database", "comparison", "contemporary"] ],
  ["g07-v20-09", "gallery-07", "07.09", "外滩西望", "Bund View West", "2006", "Virtual Shanghai / Google Earth", "Shanghai", "Digital photograph / database preview", "virtual-shanghai", "rights unclear", shanghaiImages[8], "Virtual Shanghai preview of a westward Bund view.", "方向标签提醒我们，城市不是自然呈现，而是被坐标化。", "Directional labels remind us that the city is coordinated, not naturally presented.", "This object lets the gallery connect photographic framing to mapped urban knowledge.", ["Shanghai", "map", "viewpoint", "database"] ],
  ["g07-v20-10", "gallery-07", "07.10", "上海作为可参照图像", "Shanghai as Reference Image", "1871", "John Thomson", "Shanghai", "Wet-collodion glass negative", "wellcome", "verified archive source", shanghaiImages[9], "John Thomson Shanghai Bund from Wellcome.", "这张图像把上海从现场经验转译为可引用的视觉证据。", "The image translates Shanghai from lived city into reusable visual evidence.", "The closing Shanghai object links the gallery back to John Thomson and the broader exhibition route.", ["Shanghai", "John Thomson", "Bund", "source trail"] ],
  ["g08-v20-01", "gallery-08", "08.01", "机器耒耕地", "Machines Plow the Land", "ca. 1950", "Yu Yunjie and Pan Jieci", "China", "Poster / linked preview", "chinese-posters", "rights unclear", posterImages[0], "Chinese Posters preview of agricultural mechanization poster.", "机器与土地共同把未来画成可动员的生产图像。", "Machine and field turn the future into a mobilizing production image.", "This hero object opens Gallery 08 by linking poster optimism to labor discipline.", ["poster", "agriculture", "machine", "future"] ],
  ["g08-v20-02", "gallery-08", "08.02", "学好技术，贡献给祖国", "Study Technology Well", "1951", "Zhang Fanfu", "China", "Poster / linked preview", "chinese-posters", "rights unclear", posterImages[1], "Chinese Posters preview of technology study poster.", "技术学习被画成国家贡献，而不是个人选择。", "Technical study is pictured as contribution to the nation, not personal choice.", "Placed as a focus-pair object to contrast machinery with instruction.", ["poster", "technology", "education", "labor"] ],
  ["g08-v20-03", "gallery-08", "08.03", "广州市第二届人民体育运动大会", "Second Guangzhou People's Sports Meeting", "1951", "Designer unknown", "Guangzhou", "Poster / linked preview", "chinese-posters", "rights unclear", posterImages[2], "Chinese Posters preview of sports meeting poster.", "体育身体在海报中成为生产、国防和纪律的交汇。", "The athletic body becomes a junction of production, defense, and discipline.", "This object makes the body a key theme in the poster gallery.", ["poster", "sports", "body", "campaign"] ],
  ["g08-v20-04", "gallery-08", "08.04", "雨中的孩子", "Children in the Rain", "c. 1980s", "Creator unknown", "China", "Poster / repository preview", "whitworth-posters", "rights unclear", posterImages[3], "Whitworth preview of Children in the Rain.", "儿童形象把未来变成亲近、可爱、可被照料的对象。", "Children turn the future into something intimate, lovable, and governable.", "This work gives the gallery a quieter counterpoint to technological triumphalism.", ["poster", "children", "future", "care"] ],
  ["g08-v20-05", "gallery-08", "08.05", "擦窗劳动者", "Woman Cleaning Windows", "c. 1970s", "Creator unknown", "China", "Poster / repository preview", "whitworth-posters", "rights unclear", posterImages[4], "Whitworth preview of Chinese Woman Cleaning Windows.", "劳动者微笑与玻璃反光共同制造了可观看的秩序。", "Smile and window reflection produce a visible order of labor.", "Placed here to ask what types of work are made cheerful in poster language.", ["poster", "women", "labor", "window"] ],
  ["g08-v20-06", "gallery-08", "08.06", "航天儿童的二级线索", "Space Children as Secondary Trail", "1962-1985", "Poster artists unknown", "China", "Poster / secondary visual trail", "flashbak", "secondary source only", posterImages[5], "Flashbak secondary preview of space-baby poster imagery.", "航天儿童不是单纯可爱图像，而是未来被儿童化的视觉机制。", "Space children are not only cute; they are a mechanism for childing the future.", "Kept explicitly as secondary source only until a closer poster archive record is matched.", ["poster", "space", "children", "secondary trail"] ],
  ["g08-v20-07", "gallery-08", "08.07", "生产与教育的同一画面", "Production and Education in One Frame", "1950s", "Chinese Posters / IISH collection", "China", "Poster / linked preview", "chinese-posters", "rights unclear", posterImages[1], "Chinese Posters preview used for education and production theme.", "教室、工厂和国家目标在海报里常被安排为同一个未来。", "Classroom, factory, and state goal are often arranged as the same future.", "This object is a study-wall repetition used to show poster grammar rather than a single-masterpiece reading.", ["poster", "education", "production", "future"] ],
  ["g08-v20-08", "gallery-08", "08.08", "农业机械化的承诺", "Promise of Agricultural Mechanization", "1950s", "Chinese Posters / IISH collection", "China", "Poster / linked preview", "chinese-posters", "rights unclear", posterImages[0], "Chinese Posters agricultural poster preview.", "农业机械化海报把身体劳动和国家速度压缩在同一个符号里。", "Agricultural mechanization posters compress bodily labor and national speed into one sign.", "Added to support the archive drawer as a field of repeated visual promises.", ["poster", "agriculture", "mechanization", "promise"] ],
  ["g08-v20-09", "gallery-08", "08.09", "体育、生产与国防", "Sport, Production, and Defense", "1951", "Chinese Posters / IISH collection", "Guangzhou", "Poster / linked preview", "chinese-posters", "rights unclear", posterImages[2], "Chinese Posters sports meeting preview.", "体育不只是身体训练，也是政治时间表中的未来图像。", "Sport is not only training; it is a future image inside political time.", "This closing drawer item keeps Gallery 08 focused on how future viewers are invited to identify themselves.", ["poster", "sports", "defense", "future"] ]
].map((entry) => {
  const [
    id,
    galleryId,
    number,
    title,
    titleEn,
    year,
    creator,
    place,
    medium,
    sourceId,
    status,
    image,
    imageAlt,
    captionZh,
    captionEn,
    curatorialNote,
    tags
  ] = entry;

  return {
    id,
    galleryId,
    number,
    title,
    titleEn,
    year,
    creator,
    place,
    medium,
    sourceId,
    status,
    image,
    imageAlt,
    captionZh,
    captionEn,
    curatorialNote,
    tags
  } as V20Seed;
});

export const v20Objects: ExhibitionObject[] = seeds.map((seed) => {
  const source = sourceDefaults[seed.sourceId];
  const imagePolicy = seed.imagePolicy ?? (seed.status === "verified archive source" ? "embed" : "link-only");
  const mediaRole = imagePolicy === "embed" ? "primary" : "linkedPreview";

  return {
    id: seed.id,
    galleryId: seed.galleryId,
    displayNumber: seed.number,
    title: seed.title,
    titleEn: seed.titleEn,
    year: seed.year,
    creator: seed.creator,
    place: seed.place,
    medium: seed.medium,
    credit: seed.credit ?? source.credit,
    sourceUrl: seed.sourceUrl ?? source.sourceUrl,
    originalArchiveUrl: seed.originalArchiveUrl ?? source.originalArchiveUrl,
    rightsNote: seed.rightsNote ?? source.rightsNote,
    captionZh: seed.captionZh,
    captionEn: seed.captionEn,
    curatorialNote: seed.curatorialNote,
    tags: seed.tags,
    status: seed.status,
    sourceId: seed.sourceId,
    imagePolicy,
    imageUrl: imagePolicy === "embed" ? seed.image : undefined,
    imageAlt: seed.imageAlt,
    media: [
      {
        type: "image",
        src: seed.image,
        alt: seed.imageAlt,
        caption: seed.captionEn,
        credit: seed.credit ?? source.credit,
        role: mediaRole
      }
    ]
  };
});
