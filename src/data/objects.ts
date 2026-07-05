export type SourceStatus =
  | "verified archive source"
  | "secondary source only"
  | "rights unclear"
  | "placeholder pending replacement";

export type ImagePolicy = "embed" | "link-only";

export type MediaRole = "primary" | "detail" | "context" | "linkedPreview";

export interface ExhibitionMedia {
  type: "image";
  src: string;
  alt: string;
  caption: string;
  credit: string;
  role: MediaRole;
}

export interface ExhibitionObject {
  id: string;
  galleryId: string;
  displayNumber: string;
  title: string;
  titleEn: string;
  year: string;
  creator: string;
  place: string;
  medium: string;
  credit: string;
  sourceUrl: string;
  originalArchiveUrl: string;
  rightsNote: string;
  captionZh: string;
  captionEn: string;
  curatorialNote: string;
  tags: string[];
  status: SourceStatus;
  sourceId: string;
  imagePolicy: ImagePolicy;
  imageUrl?: string;
  imageAlt?: string;
  media?: ExhibitionMedia[];
}

const baseObjects: ExhibitionObject[] = [
  {
    id: "g00-ten-bamboo-leaf-01",
    galleryId: "gallery-00",
    displayNumber: "展品 00.01",
    title: "《十竹斋书画谱》之一页",
    titleEn: "Page from the Ten Bamboo Studio Manual of Painting and Calligraphy",
    year: "1633 first edition",
    creator: "胡正言等 / Hu Zhengyan and others",
    place: "南京 / Nanjing",
    medium: "Woodblock-printed book leaf; ink and color on paper",
    credit: "The Metropolitan Museum of Art, Rogers Fund, 1924",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/63375",
    originalArchiveUrl: "https://www.metmuseum.org/art/collection/search/63375",
    rightsNote: "Public domain image record from The Metropolitan Museum of Art.",
    captionZh: "图像在摄影之前已经被复制、流通和观看。",
    captionEn: "Images were copied, circulated, and viewed before photography.",
    curatorialNote: "这件作品把展览的时间线推回摄影之前。木版套色并不是照相机，但它同样组织了观看、版面和可复制性。",
    tags: ["printing", "book", "pre-photography", "visual technology"],
    status: "verified archive source",
    sourceId: "met",
    imagePolicy: "embed",
    imageUrl: "https://images.metmuseum.org/CRDImages/as/web-large/LC-CP56_001.jpg",
    imageAlt: "A colored printed leaf from the Ten Bamboo Studio Manual."
  },
  {
    id: "g00-ten-bamboo-leaf-02",
    galleryId: "gallery-00",
    displayNumber: "展品 00.02",
    title: "花鸟册页",
    titleEn: "Flower-and-Bird Leaf from the Ten Bamboo Studio Manual",
    year: "1633 first edition",
    creator: "胡正言等 / Hu Zhengyan and others",
    place: "南京 / Nanjing",
    medium: "Woodblock-printed book leaf; ink and color on paper",
    credit: "The Metropolitan Museum of Art, Rogers Fund, 1924",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/63404",
    originalArchiveUrl: "https://www.metmuseum.org/art/collection/search/63404",
    rightsNote: "Public domain image record from The Metropolitan Museum of Art.",
    captionZh: "复制技术让图像成为可携带的知识。",
    captionEn: "Reproduction turns image into portable knowledge.",
    curatorialNote: "这页花鸟不是旅行照片，却已具备展览关心的问题：谁选择图像，谁规定观看顺序，谁把一个地方变成图册。",
    tags: ["printing", "design", "book", "circulation"],
    status: "verified archive source",
    sourceId: "met",
    imagePolicy: "embed",
    imageUrl: "https://images.metmuseum.org/CRDImages/as/web-large/DP-26860-001.jpg",
    imageAlt: "A flower and bird printed leaf from the Ten Bamboo Studio Manual."
  },
  {
    id: "g00-ten-bamboo-leaf-03",
    galleryId: "gallery-00",
    displayNumber: "展品 00.03",
    title: "山水册页",
    titleEn: "Landscape Leaf from the Ten Bamboo Studio Manual",
    year: "1633 first edition",
    creator: "胡正言等 / Hu Zhengyan and others",
    place: "南京 / Nanjing",
    medium: "Woodblock-printed book leaf; ink and color on paper",
    credit: "The Metropolitan Museum of Art, Rogers Fund, 1924",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/63394",
    originalArchiveUrl: "https://www.metmuseum.org/art/collection/search/63394",
    rightsNote: "Public domain image record from The Metropolitan Museum of Art.",
    captionZh: "印刷的中国，先于摄影的中国被带向远方。",
    captionEn: "Printed China travelled before photographed China.",
    curatorialNote: "在这间展厅里，摄影不是起点。起点是图像如何被制成对象，如何离开原处，如何在另一种观看制度中重新命名。",
    tags: ["printing", "landscape", "visual technology", "archive"],
    status: "verified archive source",
    sourceId: "met",
    imagePolicy: "embed",
    imageUrl: "https://images.metmuseum.org/CRDImages/as/web-large/LC-CP68_001.jpg",
    imageAlt: "A landscape printed leaf from the Ten Bamboo Studio Manual."
  },
  {
    id: "g01-thomson-manchu-woman",
    galleryId: "gallery-01",
    displayNumber: "展品 01.01",
    title: "满族女性肖像",
    titleEn: "Manchu Woman",
    year: "1869",
    creator: "John Thomson",
    place: "China",
    medium: "Wet-collodion glass photonegative",
    credit: "Wellcome Collection",
    sourceUrl: "https://wellcomecollection.org/works/snjukcb8",
    originalArchiveUrl: "https://wellcomecollection.org/works/snjukcb8",
    rightsNote: "Public Domain Mark thumbnail served by Wellcome Collection.",
    captionZh: "这张肖像同时记录服饰、姿势和摄影师的分类目光。",
    captionEn: "The portrait records dress, pose, and a classificatory gaze.",
    curatorialNote: "这不是一张普通肖像。它把一位女性放进欧洲读者能够辨认的民族志框架，也留下了她面对镜头时短暂而具体的存在。",
    tags: ["John Thomson", "Qing", "portrait", "ethnographic gaze"],
    status: "verified archive source",
    sourceId: "wellcome",
    imagePolicy: "embed",
    imageUrl: "https://iiif.wellcomecollection.org/image/L0056490/full/700,/0/default.jpg",
    imageAlt: "John Thomson portrait of a Manchu woman."
  },
  {
    id: "g01-thomson-mandarin",
    galleryId: "gallery-01",
    displayNumber: "展品 01.02",
    title: "清末官员",
    titleEn: "A Mandarin Official",
    year: "1869",
    creator: "John Thomson",
    place: "Late Qing China",
    medium: "Wet-collodion glass photonegative",
    credit: "Wellcome Collection",
    sourceUrl: "https://wellcomecollection.org/works/jys6mj8d",
    originalArchiveUrl: "https://wellcomecollection.org/works/jys6mj8d",
    rightsNote: "Public Domain Mark thumbnail served by Wellcome Collection.",
    captionZh: "官服、窗框和正面姿势共同制造权威感。",
    captionEn: "Dress, window, and frontal pose manufacture authority.",
    curatorialNote: "照片看似在识别一位官员，实则也在给一个制度找面孔。镜头把等级、服制和欧洲想象中的帝国秩序压缩在一张玻璃底片里。",
    tags: ["John Thomson", "Qing", "official", "portrait"],
    status: "verified archive source",
    sourceId: "wellcome",
    imagePolicy: "embed",
    imageUrl: "https://iiif.wellcomecollection.org/image/L0056112/full/700,/0/default.jpg",
    imageAlt: "John Thomson portrait of a Mandarin official."
  },
  {
    id: "g01-thomson-girl",
    galleryId: "gallery-01",
    displayNumber: "展品 01.03",
    title: "广州女孩",
    titleEn: "A Girl, Canton",
    year: "1869",
    creator: "John Thomson",
    place: "Canton / Guangzhou",
    medium: "Wet-collodion glass photonegative",
    credit: "Wellcome Collection",
    sourceUrl: "https://wellcomecollection.org/works/vuytx8as",
    originalArchiveUrl: "https://wellcomecollection.org/works/vuytx8as",
    rightsNote: "Public Domain Mark thumbnail served by Wellcome Collection.",
    captionZh: "孩子看向镜头，镜头也把她放进异域童年的叙事。",
    captionEn: "A child looks back while the camera frames exotic childhood.",
    curatorialNote: "被拍摄者是否知道自己将被带到另一个阅读世界？这张照片的力量，来自凝视的回返，也来自标题无法说出的名字。",
    tags: ["John Thomson", "Canton", "child", "portrait"],
    status: "verified archive source",
    sourceId: "wellcome",
    imagePolicy: "embed",
    imageUrl: "https://iiif.wellcomecollection.org/image/L0056168/full/700,/0/default.jpg",
    imageAlt: "John Thomson portrait of a girl in Canton."
  },
  {
    id: "g01-thomson-shanghai-bund",
    galleryId: "gallery-01",
    displayNumber: "展品 01.04",
    title: "上海外滩",
    titleEn: "Bund, Shanghai",
    year: "1871",
    creator: "John Thomson",
    place: "Shanghai",
    medium: "Wet-collodion glass photonegative",
    credit: "Wellcome Collection",
    sourceUrl: "https://wellcomecollection.org/works/bu2bvq3b",
    originalArchiveUrl: "https://wellcomecollection.org/works/bu2bvq3b",
    rightsNote: "Wellcome Collection thumbnail indicates CC BY 4.0 on the catalogue record.",
    captionZh: "租界建筑让城市被读成贸易、纪念碑与通道。",
    captionEn: "Concession architecture turns the city into trade, monument, passage.",
    curatorialNote: "这张城市照片没有中立地记录街景。它把上海放在商业、战争纪念和殖民基础设施的同一条视线上。",
    tags: ["John Thomson", "Shanghai", "Bund", "urban image"],
    status: "verified archive source",
    sourceId: "wellcome",
    imagePolicy: "embed",
    imageUrl: "https://iiif.wellcomecollection.org/image/L0055693/full/900,/0/default.jpg",
    imageAlt: "John Thomson photograph of the Bund in Shanghai."
  },
  {
    id: "g02-genthe-no-likee",
    galleryId: "gallery-02",
    displayNumber: "展品 02.01",
    title: "“不喜欢”",
    titleEn: "No Likee, Chinatown, San Francisco",
    year: "1896-1906",
    creator: "Arnold Genthe",
    place: "San Francisco Chinatown",
    medium: "Film transparency",
    credit: "Genthe photograph collection, Library of Congress, Prints and Photographs Division",
    sourceUrl: "https://www.loc.gov/item/2018704984/",
    originalArchiveUrl: "https://www.loc.gov/resource/agc.7a55089/",
    rightsNote: "Library of Congress: No known restrictions on publication.",
    captionZh: "标题先替街上的人说话，也替观看者安排了情绪。",
    captionEn: "The title speaks before the people in the street can.",
    curatorialNote: "唐人街在照片中显得拥挤、神秘、陌生。但这种陌生，往往是报纸、小说、电影和城市治理共同制造出来的。",
    tags: ["Genthe", "Chinatown", "migration", "yellow peril"],
    status: "verified archive source",
    sourceId: "loc",
    imagePolicy: "embed",
    imageUrl: "https://tile.loc.gov/storage-services/service/pnp/agc/7a55000/7a55000/7a55089v.jpg",
    imageAlt: "Arnold Genthe photograph No Likee, Chinatown, San Francisco."
  },
  {
    id: "g02-genthe-father-children",
    galleryId: "gallery-02",
    displayNumber: "展品 02.02",
    title: "父亲与孩子",
    titleEn: "Father and Children, Chinatown",
    year: "1896-1906",
    creator: "Arnold Genthe",
    place: "San Francisco Chinatown",
    medium: "Nitrate transparency",
    credit: "Genthe photograph collection, Library of Congress, Prints and Photographs Division",
    sourceUrl: "https://www.loc.gov/item/2018704907/",
    originalArchiveUrl: "https://www.loc.gov/resource/agc.7a09070/",
    rightsNote: "Library of Congress: No known restrictions on publication.",
    captionZh: "家庭关系被街头快照截住，也被收藏标题重新命名。",
    captionEn: "Family relation is caught and renamed by the archive title.",
    curatorialNote: "这张照片中，人物有关系，却未必有姓名。档案标题给出父亲和孩子，却让他们仍停留在类型与场景之间。",
    tags: ["Genthe", "Chinatown", "family", "street"],
    status: "verified archive source",
    sourceId: "loc",
    imagePolicy: "embed",
    imageUrl: "https://tile.loc.gov/storage-services/service/pnp/agc/7a09000/7a09000/7a09070r.jpg",
    imageAlt: "Arnold Genthe photograph of father and children in Chinatown."
  },
  {
    id: "g02-genthe-man-boys",
    galleryId: "gallery-02",
    displayNumber: "展品 02.03",
    title: "街上的男子与男孩",
    titleEn: "Man and Two Boys Walking Along a Street",
    year: "1896-1906",
    creator: "Arnold Genthe",
    place: "San Francisco Chinatown",
    medium: "Safety negative",
    credit: "Genthe photograph collection, Library of Congress, Prints and Photographs Division",
    sourceUrl: "https://www.loc.gov/item/2018704958/",
    originalArchiveUrl: "https://www.loc.gov/resource/agc.7a08819/",
    rightsNote: "Library of Congress: No known restrictions on publication.",
    captionZh: "街道被拍成舞台，行人成为异国城市的证据。",
    captionEn: "The street becomes a stage; passersby become evidence.",
    curatorialNote: "Genthe 的唐人街并不只是社区影像，也是旧金山如何观看、消费并管理华人社区的一部分。",
    tags: ["Genthe", "Chinatown", "street", "diaspora"],
    status: "verified archive source",
    sourceId: "loc",
    imagePolicy: "embed",
    imageUrl: "https://tile.loc.gov/storage-services/service/pnp/agc/7a08000/7a08800/7a08819r.jpg",
    imageAlt: "Arnold Genthe photograph of a man and two boys in Chinatown."
  },
  {
    id: "g03-fu-wu-tiecheng",
    galleryId: "gallery-03",
    displayNumber: "展品 03.01",
    title: "吴铁城与傅秉常，上海",
    titleEn: "Wu Tiecheng and Fu Bingchang, in Shanghai",
    year: "1930s",
    creator: "Fu Bingchang collection photographer not fully identified",
    place: "Shanghai",
    medium: "Photographic print / album record",
    credit: "University of Bristol, Historical Photographs of China, Fu Bingchang collection",
    sourceUrl: "https://hpcbristol.net/visual/Fu02-019",
    originalArchiveUrl: "https://hpcbristol.net/visual/Fu02-019",
    rightsNote: "Verified archive record. Image reuse should follow Historical Photographs of China re-use guidance.",
    captionZh: "外交网络进入相册，身份也进入可交换的影像系统。",
    captionEn: "Diplomatic networks enter albums and become exchangeable images.",
    curatorialNote: "民国相册并非私人回忆的简单容器。它把外交官、城市、宴会和旅行组织成一种可被展示的社交资本。",
    tags: ["Fu Bingchang", "Republican China", "Shanghai", "diplomacy"],
    status: "verified archive source",
    sourceId: "hpc-bristol",
    imagePolicy: "link-only"
  },
  {
    id: "g03-fu-camera",
    galleryId: "gallery-03",
    displayNumber: "展品 03.02",
    title: "傅秉常与他的相机",
    titleEn: "Fu Bingchang and His Camera",
    year: "c. 1930s",
    creator: "Fu Bingchang collection photographer not fully identified",
    place: "China",
    medium: "Photographic print / album record",
    credit: "University of Bristol, Historical Photographs of China, Fu Bingchang collection",
    sourceUrl: "https://hpcbristol.net/visual/Fu-n174",
    originalArchiveUrl: "https://hpcbristol.net/visual/Fu-n174",
    rightsNote: "Verified archive record. Image reuse should follow Historical Photographs of China re-use guidance.",
    captionZh: "相机从工具变成身份的一部分。",
    captionEn: "The camera becomes part of the sitter's social identity.",
    curatorialNote: "当相机出现在相册内部，观看关系发生翻转：被看见的人也可能是拍摄者，精英网络同时掌握姿势和机器。",
    tags: ["camera", "Fu Bingchang", "self-fashioning", "elite network"],
    status: "verified archive source",
    sourceId: "hpc-bristol",
    imagePolicy: "link-only"
  },
  {
    id: "g03-min-chin-camera",
    galleryId: "gallery-03",
    displayNumber: "展品 03.03",
    title: "闵钦持相机，北温泉",
    titleEn: "Min Chin with a Camera, Northern Hot Springs",
    year: "1940",
    creator: "Fu Bingchang collection photographer not fully identified",
    place: "Northern Hot Springs, Chongqing region",
    medium: "Photographic print / album record",
    credit: "University of Bristol, Historical Photographs of China, Fu Bingchang collection",
    sourceUrl: "https://hpcbristol.net/visual/Fu-n258",
    originalArchiveUrl: "https://hpcbristol.net/visual/Fu-n258",
    rightsNote: "Verified archive record. Image reuse should follow Historical Photographs of China re-use guidance.",
    captionZh: "女性、相机和休闲空间同时进入画面。",
    captionEn: "Woman, camera, and leisure space enter the same frame.",
    curatorialNote: "这件展品让“谁拿着相机”变成具体问题。相机不只属于西方旅行者，也出现在中国现代女性的身体姿态中。",
    tags: ["women", "camera", "Republican China", "leisure"],
    status: "verified archive source",
    sourceId: "hpc-bristol",
    imagePolicy: "link-only"
  },
  {
    id: "g03-jiang-fangling-camera",
    galleryId: "gallery-03",
    displayNumber: "展品 03.04",
    title: "蒋方良持相机，北温泉",
    titleEn: "Jiang Fangling with a Camera, Northern Hot Springs",
    year: "1940",
    creator: "Fu Bingchang collection photographer not fully identified",
    place: "Northern Hot Springs, Chongqing region",
    medium: "Photographic print / album record",
    credit: "University of Bristol, Historical Photographs of China, Fu Bingchang collection",
    sourceUrl: "https://hpcbristol.net/visual/Fu-n296",
    originalArchiveUrl: "https://hpcbristol.net/visual/Fu-n296",
    rightsNote: "Verified archive record. Image reuse should follow Historical Photographs of China re-use guidance.",
    captionZh: "镜头里的相机提示我们，观看并不只有一个方向。",
    captionEn: "A camera inside the frame unsettles one-way looking.",
    curatorialNote: "这张照片把外部观看的叙事打开了一道缝。现代中国的图像网络也由本地拍摄者、女性和移动中的相册共同构成。",
    tags: ["women", "camera", "Republican China", "album"],
    status: "verified archive source",
    sourceId: "hpc-bristol",
    imagePolicy: "link-only"
  },
  {
    id: "g04-fan-ho-approaching-shadow",
    galleryId: "gallery-04",
    displayNumber: "展品 04.01",
    title: "《阴影逼近》",
    titleEn: "Approaching Shadow",
    year: "1954",
    creator: "Fan Ho",
    place: "Hong Kong",
    medium: "Gelatin silver print / later estate print",
    credit: "M+ Collection; copyright Fan Ho",
    sourceUrl: "https://www.mplus.org.hk/en/collection/objects/approaching-shadow-2015446/",
    originalArchiveUrl: "https://www.mplus.org.hk/en/collection/objects/approaching-shadow-2015446/",
    rightsNote: "Museum collection record verified. Copyright remains with Fan Ho; linked only, image not copied. 本展仅将其作为摄影师项目或馆藏页面的外链线索展示，未默认视为公共领域素材；当前页面以来源说明和研究索引为主，不将其处理为可自由复用图片。",
    captionZh: "光把墙面变成时间，人物像一枚即将被吞没的标点。",
    captionEn: "Light turns a wall into time; the figure becomes punctuation.",
    curatorialNote: "何藩的香港没有解释自己。它只是让光落在楼梯、儿童和墙面上，然后让城市显影。这里使用 M+ 馆藏页作为近源记录，作品本身目前仅作外链线索展示。",
    tags: ["Fan Ho", "Hong Kong", "street photography", "light"],
    status: "rights unclear",
    sourceId: "mplus",
    imagePolicy: "link-only"
  },
  {
    id: "g04-fan-ho-hong-kong-venice",
    galleryId: "gallery-04",
    displayNumber: "展品 04.02",
    title: "香港威尼斯",
    titleEn: "Hong Kong Venice",
    year: "1962",
    creator: "Fan Ho",
    place: "Hong Kong",
    medium: "Gelatin silver print / estate reference",
    credit: "Blue Lotus Gallery / Fan Ho Estate",
    sourceUrl: "https://bluelotus-gallery.com/artists/31-fan-ho/",
    originalArchiveUrl: "https://ocula.com/art-galleries/blue-lotus-gallery/artworks/fan-ho/hong-kong-venice-hong-kong/",
    rightsNote: "Gallery/estate trail identified via Blue Lotus and Ocula. Direct reproduction rights are not granted here; linked only, image not copied. 本展仅将其作为摄影师项目或馆藏页面的外链线索展示，未默认视为公共领域素材；当前页面以来源说明和研究索引为主，不将其处理为可自由复用图片。",
    captionZh: "水面不是风景，而是城市劳动的另一面。",
    captionEn: "Water is not scenery; it is another surface of urban labor.",
    curatorialNote: "这类影像让香港从殖民港口变成可被诗化、也可被误读的日常空间。美感并不取消社会关系；授权未清时，展览只保留作品路径和观看问题。",
    tags: ["Fan Ho", "Hong Kong", "harbor", "street photography"],
    status: "rights unclear",
    sourceId: "blue-lotus",
    imagePolicy: "link-only"
  },
  {
    id: "g04-loc-hong-kong-extras",
    galleryId: "gallery-04",
    displayNumber: "展品 04.03",
    title: "香港街景参考图",
    titleEn: "Hong Kong - Extras",
    year: "1959",
    creator: "Toni Frissell",
    place: "Hong Kong",
    medium: "Color transparency, 35 mm slide format",
    credit: "Toni Frissell photograph collection, Library of Congress",
    sourceUrl: "https://www.loc.gov/item/2021716496/",
    originalArchiveUrl: "https://www.loc.gov/item/2021716496/",
    rightsNote: "Library of Congress: No known restrictions on publication.",
    captionZh: "同一座城市，也在新闻、旅行和杂志影像中被重新取景。",
    captionEn: "The same city is reframed through magazine and travel images.",
    curatorialNote: "它不是何藩作品，却为展厅提供同年代的外部影像参照：香港如何在西方图库中成为港口、街道和现代性的组合。",
    tags: ["Hong Kong", "1950s", "reference image", "Library of Congress"],
    status: "verified archive source",
    sourceId: "loc",
    imagePolicy: "embed",
    imageUrl: "https://tile.loc.gov/storage-services/service/pnp/tofr/14100/14129v.jpg",
    imageAlt: "Toni Frissell Hong Kong color transparency."
  },
  {
    id: "g05-girard-hkpm",
    galleryId: "gallery-05",
    displayNumber: "展品 05.01",
    title: "《香港：下午至凌晨》项目",
    titleEn: "HK:PM, Hong Kong 1974-1989",
    year: "1974-1989",
    creator: "Greg Girard",
    place: "Hong Kong",
    medium: "Color photographs / artist project",
    credit: "Greg Girard",
    sourceUrl: "https://www.greggirard.com/hkpm-1",
    originalArchiveUrl: "https://www.greggirard.com/hkpm-1",
    rightsNote: "Artist project page verified. Direct reproduction rights are not granted here; linked only, image not copied. 本展仅将其作为摄影师项目或馆藏页面的外链线索展示，未默认视为公共领域素材；当前页面以来源说明和研究索引为主，不将其处理为可自由复用图片。",
    captionZh: "霓虹把夜晚变成城市的另一种档案。",
    captionEn: "Neon turns night into another urban archive.",
    curatorialNote: "Greg Girard 的香港不是白天的殖民明信片，而是港口城市在夜里运转的证据：招牌、潮气、路面反光和等待。此处以摄影师项目页为近源记录，作品目前仅作为外链线索展示。",
    tags: ["Greg Girard", "Hong Kong", "neon", "night"],
    status: "rights unclear",
    sourceId: "greg-girard",
    imagePolicy: "link-only"
  },
  {
    id: "g05-girard-city-of-darkness",
    galleryId: "gallery-05",
    displayNumber: "展品 05.02",
    title: "九龙城寨项目",
    titleEn: "City of Darkness / Kowloon Walled City",
    year: "1980s",
    creator: "Greg Girard and Ian Lambot",
    place: "Kowloon Walled City, Hong Kong",
    medium: "Photographic project / book archive",
    credit: "Greg Girard and Ian Lambot / City of Darkness",
    sourceUrl: "https://cityofdarkness.co.uk/",
    originalArchiveUrl: "https://cityofdarkness.co.uk/",
    rightsNote: "Project/publication site verified. Direct reproduction rights are not granted here; linked only, image not copied. 本展仅将其作为摄影师项目或馆藏页面的外链线索展示，未默认视为公共领域素材；当前页面以来源说明和研究索引为主，不将其处理为可自由复用图片。",
    captionZh: "城寨既是建筑密度，也是外部想象的密度。",
    captionEn: "The Walled City is density of architecture and imagination.",
    curatorialNote: "城寨图像常被当作奇观。展览把它放回摄影伦理的问题里：密度、贫困、自治和外部好奇心如何同时进入画面。照片中的沉默部分，和可见部分同样重要。",
    tags: ["Greg Girard", "Kowloon Walled City", "urban density", "Hong Kong"],
    status: "rights unclear",
    sourceId: "city-darkness",
    imagePolicy: "link-only"
  },
  {
    id: "g05-loc-hk-bungalows",
    galleryId: "gallery-05",
    displayNumber: "展品 05.03",
    title: "香港住宅参考图",
    titleEn: "Hong Kong Bungalows",
    year: "1980",
    creator: "Paul Rudolph archive photographer not fully identified",
    place: "Hong Kong",
    medium: "Color transparency",
    credit: "Paul Marvin Rudolph archive, Library of Congress",
    sourceUrl: "https://www.loc.gov/item/2023677218/",
    originalArchiveUrl: "https://www.loc.gov/item/2023677218/",
    rightsNote: "Library of Congress: No known restrictions on publication, with Paul Rudolph rights advisory.",
    captionZh: "建筑资料也能成为城市影像的一部分。",
    captionEn: "Architectural documentation becomes part of urban imagery.",
    curatorialNote: "这件作品为城寨与霓虹之外的香港提供另一种档案路径：城市并不只在街头照片中显影，也在建筑师的幻灯片里被整理。",
    tags: ["Hong Kong", "architecture", "1980", "Library of Congress"],
    status: "verified archive source",
    sourceId: "loc",
    imagePolicy: "embed",
    imageUrl: "https://tile.loc.gov/storage-services/service/pnp/pmru/06500/06542v.jpg",
    imageAlt: "Hong Kong bungalows color transparency from the Paul Rudolph archive."
  },
  {
    id: "g05-loc-hong-kong-selects",
    galleryId: "gallery-05",
    displayNumber: "展品 05.04",
    title: "香港城市参考图",
    titleEn: "Hong Kong - Selects and Layouts",
    year: "1959",
    creator: "Toni Frissell",
    place: "Hong Kong",
    medium: "Color transparency",
    credit: "Toni Frissell photograph collection, Library of Congress",
    sourceUrl: "https://www.loc.gov/item/2021717468/",
    originalArchiveUrl: "https://www.loc.gov/item/2021717468/",
    rightsNote: "Library of Congress: No known restrictions on publication.",
    captionZh: "图库中的香港，常被压成可消费的城市片段。",
    captionEn: "In picture libraries, Hong Kong becomes consumable fragments.",
    curatorialNote: "这一张参考图提醒我们：摄影项目、杂志委托和建筑资料共同塑造了西方观看香港的视觉词汇。",
    tags: ["Hong Kong", "magazine", "color transparency", "archive"],
    status: "verified archive source",
    sourceId: "loc",
    imagePolicy: "embed",
    imageUrl: "https://tile.loc.gov/storage-services/service/pnp/tofr/15100/15101v.jpg",
    imageAlt: "Toni Frissell Hong Kong selects and layouts color transparency."
  },
  {
    id: "g06-nowicki-flickr-1982",
    galleryId: "gallery-06",
    displayNumber: "展品 06.01",
    title: "中国，1982：摄影师自存图像线索",
    titleEn: "China, 1982: Photographer-Owned Visual Trail",
    year: "1982",
    creator: "Simon Nowicki",
    place: "China",
    medium: "Color photographs / Flickr record",
    credit: "Simon Nowicki",
    sourceUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    originalArchiveUrl: "https://www.flickr.com/photos/simonnowicki/7350741202/",
    rightsNote: "Photographer-hosted China 1982 trail and Flickr record identified. Flickr indicates all rights reserved; linked only, image not copied. 本展仅将其作为摄影师项目或馆藏页面的外链线索展示，未默认视为公共领域素材；当前页面以来源说明和研究索引为主，不将其处理为可自由复用图片。",
    captionZh: "开放初期的中国成为可参观、可拍摄、可带走的经验。",
    captionEn: "Early reform-era China becomes visitable, photographable, portable.",
    curatorialNote: "1982 的旅行照片不是纯粹的私人记忆。它们同时显示了开放初期的路线、许可、好奇心和外来观看的舒适距离。作品目前仅作为线索展示，不复制原图。",
    tags: ["1982", "travel", "opening", "Simon Nowicki"],
    status: "rights unclear",
    sourceId: "nowicki",
    imagePolicy: "link-only"
  },
  {
    id: "g06-nowicki-collection",
    galleryId: "gallery-06",
    displayNumber: "展品 06.02",
    title: "中国，1982：网络再发现",
    titleEn: "China, 1982: Rediscovered Online",
    year: "1982",
    creator: "Simon Nowicki",
    place: "China",
    medium: "Color photographs / secondary online selection",
    credit: "Flashbak, after Simon Nowicki",
    sourceUrl: "https://flashbak.com/a-westerners-photographs-of-china-1982-423867/",
    originalArchiveUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    rightsNote: "Secondary source only; photographer-hosted China 1982 trail identified, but exact original mapping for every Flashbak image is not yet verified.",
    captionZh: "二次传播能激活图像，也会切断图像与原始语境。",
    captionEn: "Secondary circulation revives images while thinning context.",
    curatorialNote: "这件展品保留 Flashbak 的位置，但不把它当作终点。它目前仅作为线索展示：二次传播可以提示选题，却不能替代摄影师、档案或馆藏记录。",
    tags: ["Flashbak", "1982", "secondary source", "research trail"],
    status: "secondary source only",
    sourceId: "flashbak",
    imagePolicy: "link-only"
  },
  {
    id: "g06-nowicki-visit-frame",
    galleryId: "gallery-06",
    displayNumber: "展品 06.03",
    title: "可参观的中国",
    titleEn: "The Visit-able China",
    year: "1982",
    creator: "Simon Nowicki",
    place: "China",
    medium: "Color photographs / photographer web trail",
    credit: "Simon Nowicki",
    sourceUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    originalArchiveUrl: "https://www.flickr.com/photos/simonnowicki/",
    rightsNote: "Photographer-hosted China 1982 trail identified, with Flickr as image record path. Direct reproduction rights are not granted here; linked only, image not copied. 本展仅将其作为摄影师项目或馆藏页面的外链线索展示，未默认视为公共领域素材；当前页面以来源说明和研究索引为主，不将其处理为可自由复用图片。",
    captionZh: "旅行路线决定看见什么，也决定什么被留在画外。",
    captionEn: "A travel route decides what is seen and what remains outside.",
    curatorialNote: "开放初期的照片常被读成“真实中国”。本展更关心的是：哪些地点被允许进入镜头，哪些关系被安排在镜头之外。它记录的不是全部现实，而是一次观看的条件。",
    tags: ["1982", "travel route", "reform era", "photographic access"],
    status: "rights unclear",
    sourceId: "nowicki",
    imagePolicy: "link-only"
  }
];

const mediaBackfills: Record<string, ExhibitionMedia[]> = {
  "g03-fu-wu-tiecheng": [
    {
      type: "image",
      src: "https://hpcbristol.net/image-library/large/fu02-019.jpg",
      alt: "Wu Tiecheng and Fu Bingchang in Shanghai, from the Fu Bingchang collection.",
      caption: "HPC Bristol source-page preview for the Fu Bingchang album record.",
      credit: "University of Bristol / Historical Photographs of China",
      role: "linkedPreview"
    }
  ],
  "g03-fu-camera": [
    {
      type: "image",
      src: "https://hpcbristol.net/image-library/large/fu-n174.jpg",
      alt: "Fu Bingchang with a camera, from the Fu Bingchang collection.",
      caption: "HPC Bristol source-page preview for the Fu Bingchang album record.",
      credit: "University of Bristol / Historical Photographs of China",
      role: "linkedPreview"
    }
  ],
  "g03-min-chin-camera": [
    {
      type: "image",
      src: "https://hpcbristol.net/image-library/large/fu-n258.jpg",
      alt: "Min Chin holding a camera at the Northern Hot Springs.",
      caption: "HPC Bristol source-page preview for the Fu Bingchang album record.",
      credit: "University of Bristol / Historical Photographs of China",
      role: "linkedPreview"
    }
  ],
  "g03-jiang-fangling-camera": [
    {
      type: "image",
      src: "https://hpcbristol.net/image-library/large/fu-n296.jpg",
      alt: "Jiang Fangling holding a camera at the Northern Hot Springs.",
      caption: "HPC Bristol source-page preview for the Fu Bingchang album record.",
      credit: "University of Bristol / Historical Photographs of China",
      role: "linkedPreview"
    }
  ],
  "g04-fan-ho-approaching-shadow": [
    {
      type: "image",
      src: "https://res.cloudinary.com/mplustms/image/upload/w_781/v1627829162/v2/prod/small/001501_002000/001588_001.jpg",
      alt: "Fan Ho, Approaching Shadow, M+ collection preview.",
      caption: "M+ collection preview. Linked source only; copyright remains with Fan Ho.",
      credit: "M+ Collection",
      role: "linkedPreview"
    }
  ],
  "g04-fan-ho-hong-kong-venice": [
    {
      type: "image",
      src: "https://assets3.cbsnewsstatic.com/hub/i/r/2014/11/10/dab8eeb7-3ca5-4920-a1b1-7b700769a38e/thumbnail/620x970/ecba96757481d70b62013bab9ac48ffb/hong-kong-venice.jpg",
      alt: "Fan Ho, Hong Kong Venice, online preview.",
      caption: "Online preview of the work; linked source remains Blue Lotus / Ocula.",
      credit: "Fan Ho / Blue Lotus Gallery trail",
      role: "linkedPreview"
    }
  ],
  "g05-girard-hkpm": [
    {
      type: "image",
      src: "https://www.greggirard.com/wp-content/uploads/2022/08/90385_HK_1974.jpg",
      alt: "Greg Girard HK:PM Hong Kong night city preview.",
      caption: "Artist project-page preview. Linked source only.",
      credit: "Greg Girard",
      role: "linkedPreview"
    }
  ],
  "g05-girard-city-of-darkness": [
    {
      type: "image",
      src: "https://images.squarespace-cdn.com/content/v1/54e9ba8ae4b0165bdcf59868/037eff14-9a4a-4df2-b0eb-d9e70a4fbb63/Greg+Girard+%27Children+playing+on+Walled+City+rooftop%27%2C+Hong+Kong+1989%2C+Courtesy+of+Blue+Lotus+Gallery.jpg",
      alt: "Kowloon Walled City rooftop scene, Greg Girard project preview.",
      caption: "Project-page preview. Linked source only.",
      credit: "Greg Girard / Blue Lotus Gallery",
      role: "linkedPreview"
    }
  ],
  "g06-nowicki-flickr-1982": [
    {
      type: "image",
      src: "https://live.staticflickr.com/7076/7350741202_c62930da04_b.jpg",
      alt: "Simon Nowicki China 1982 Flickr preview.",
      caption: "Flickr source-page preview. Linked source only; all rights reserved.",
      credit: "Simon Nowicki",
      role: "linkedPreview"
    }
  ],
  "g06-nowicki-collection": [
    {
      type: "image",
      src: "https://flashbak.com/wp-content/uploads/2020/02/China033-1280x1280.jpg",
      alt: "Flashbak China 1982 secondary visual trail preview.",
      caption: "Secondary visual trail preview; exact original mapping remains under review.",
      credit: "Flashbak, after Simon Nowicki",
      role: "linkedPreview"
    }
  ],
  "g06-nowicki-visit-frame": [
    {
      type: "image",
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnNIkfbZY2ZSc2yhK6KSmp6Q24eiDk4uc0zOhxJ7rXnEuzy2_LFenUEGI59h3wgRa7W2_bcE2fYgVyI9he94ZnJbtKYSZwyZOf69RrTqIoEiCR6sqvB2ISZThB11F4JRMR2PNTMAnHHsc/s640/China008+copy.jpg",
      alt: "Simon Nowicki China 1982 photographer-hosted preview.",
      caption: "Photographer-hosted page preview. Linked source only.",
      credit: "Simon Nowicki",
      role: "linkedPreview"
    }
  ]
};

const expandedObjects: ExhibitionObject[] = [
  {
    id: "g00-ten-bamboo-leaf-04",
    galleryId: "gallery-00",
    displayNumber: "展品 00.04",
    title: "《十竹斋书画谱》叶片",
    titleEn: "Leaf from the Ten Bamboo Studio Manual",
    year: "1633 first edition",
    creator: "胡正言等 / Hu Zhengyan and others",
    place: "南京 / Nanjing",
    medium: "Woodblock-printed book leaf; ink and color on paper",
    credit: "The Metropolitan Museum of Art, Rogers Fund, 1924",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/63372",
    originalArchiveUrl: "https://www.metmuseum.org/art/collection/search/63372",
    rightsNote: "Public domain image record from The Metropolitan Museum of Art.",
    captionZh: "同一套图谱中的另一页，显示复制技术如何制造观看秩序。",
    captionEn: "Another leaf from the manual shows how reproduction orders viewing.",
    curatorialNote: "这件展品补足了摄影之前的图像复制层：图像不是自然流通的，它被版式、色彩和收藏制度共同带向远方。",
    tags: ["printing", "book", "visual technology", "Met"],
    status: "verified archive source",
    sourceId: "met",
    imagePolicy: "embed",
    media: [
      {
        type: "image",
        src: "https://images.metmuseum.org/CRDImages/as/web-large/LC-CP54_001.jpg",
        alt: "Ten Bamboo Studio Manual leaf from The Met.",
        caption: "Public-domain Met collection image.",
        credit: "The Metropolitan Museum of Art",
        role: "primary"
      }
    ]
  },
  {
    id: "g00-ten-bamboo-leaf-05",
    galleryId: "gallery-00",
    displayNumber: "展品 00.05",
    title: "《十竹斋书画谱》册页",
    titleEn: "Album Leaf from the Ten Bamboo Studio Manual",
    year: "1633 first edition",
    creator: "胡正言等 / Hu Zhengyan and others",
    place: "南京 / Nanjing",
    medium: "Woodblock-printed book leaf; ink and color on paper",
    credit: "The Metropolitan Museum of Art, Rogers Fund, 1924",
    sourceUrl: "https://www.metmuseum.org/art/collection/search/63433",
    originalArchiveUrl: "https://www.metmuseum.org/art/collection/search/63433",
    rightsNote: "Public domain image record from The Metropolitan Museum of Art.",
    captionZh: "图像被制成可携带、可翻阅、可再观看的对象。",
    captionEn: "The image becomes portable, browsable, and available for return.",
    curatorialNote: "摄影史并不从照相机突然开始。它之前已有一套关于复制、选择和观看的技术传统。",
    tags: ["printing", "album", "circulation", "Met"],
    status: "verified archive source",
    sourceId: "met",
    imagePolicy: "embed",
    media: [
      {
        type: "image",
        src: "https://images.metmuseum.org/CRDImages/as/web-large/DP-26869-001.jpg",
        alt: "Ten Bamboo Studio Manual album leaf from The Met.",
        caption: "Public-domain Met collection image.",
        credit: "The Metropolitan Museum of Art",
        role: "primary"
      }
    ]
  },
  {
    id: "g01-thomson-peking",
    galleryId: "gallery-01",
    displayNumber: "展品 01.05",
    title: "北京街景",
    titleEn: "Peking, Pechili Province",
    year: "1869",
    creator: "John Thomson",
    place: "Peking / Beijing",
    medium: "Wet-collodion glass photonegative",
    credit: "Wellcome Collection",
    sourceUrl: "https://wellcomecollection.org/works/qcdqyknd",
    originalArchiveUrl: "https://wellcomecollection.org/works/qcdqyknd",
    rightsNote: "Public Domain Mark thumbnail served by Wellcome Collection.",
    captionZh: "街道不是背景，而是摄影师与城市相遇的条件。",
    captionEn: "The street is not background; it is the condition of encounter.",
    curatorialNote: "城市图像让观看者以为自己正在进入现场，但镜头位置、取景范围和出版语境已经先行安排了进入方式。",
    tags: ["John Thomson", "Peking", "street", "Qing"],
    status: "verified archive source",
    sourceId: "wellcome",
    imagePolicy: "embed",
    media: [
      {
        type: "image",
        src: "https://iiif.wellcomecollection.org/image/L0056174/full/800,/0/default.jpg",
        alt: "John Thomson photograph of Peking.",
        caption: "Wellcome Collection IIIF preview.",
        credit: "Wellcome Collection",
        role: "primary"
      }
    ]
  },
  {
    id: "g01-thomson-amoy-women",
    galleryId: "gallery-01",
    displayNumber: "展品 01.06",
    title: "厦门女性交谈",
    titleEn: "Two Amoy Women in Conversation",
    year: "1870/1871",
    creator: "John Thomson",
    place: "Amoy / Xiamen",
    medium: "Wet-collodion glass photonegative",
    credit: "Wellcome Collection",
    sourceUrl: "https://wellcomecollection.org/works/vzwupsjs",
    originalArchiveUrl: "https://wellcomecollection.org/works/vzwupsjs",
    rightsNote: "Public Domain Mark thumbnail served by Wellcome Collection.",
    captionZh: "交谈的姿态进入档案，也进入外部观看的分类系统。",
    captionEn: "A conversational pose enters both archive and classification.",
    curatorialNote: "这张图像提醒我们，人物姿态和日常关系常被档案标题压缩成可检索的类别。",
    tags: ["John Thomson", "Amoy", "women", "Qing"],
    status: "verified archive source",
    sourceId: "wellcome",
    imagePolicy: "embed",
    media: [
      {
        type: "image",
        src: "https://iiif.wellcomecollection.org/image/L0056400/full/800,/0/default.jpg",
        alt: "John Thomson photograph of two Amoy women in conversation.",
        caption: "Wellcome Collection IIIF preview.",
        credit: "Wellcome Collection",
        role: "primary"
      }
    ]
  },
  {
    id: "g02-genthe-merchant",
    galleryId: "gallery-02",
    displayNumber: "展品 02.04",
    title: "商人，唐人街",
    titleEn: "Merchant, Chinatown",
    year: "1896-1906",
    creator: "Arnold Genthe",
    place: "San Francisco Chinatown",
    medium: "Photographic print / negative record",
    credit: "Genthe photograph collection, Library of Congress",
    sourceUrl: "https://www.loc.gov/resource/agc.7a55010/",
    originalArchiveUrl: "https://www.loc.gov/resource/agc.7a55010/",
    rightsNote: "Library of Congress: No known restrictions on publication.",
    captionZh: "橱窗、货物和人像共同构成可被消费的社区形象。",
    captionEn: "Shopfront, goods, and portrait make the community consumable.",
    curatorialNote: "唐人街的商业空间常被拍成异国陈列。照片记录街面，也记录观看者期待看到什么。",
    tags: ["Genthe", "Chinatown", "merchant", "diaspora"],
    status: "verified archive source",
    sourceId: "loc",
    imagePolicy: "embed",
    media: [
      {
        type: "image",
        src: "https://tile.loc.gov/storage-services/service/pnp/agc/7a55000/7a55000/7a55010r.jpg",
        alt: "Arnold Genthe Chinatown merchant photograph.",
        caption: "Library of Congress preview.",
        credit: "Library of Congress",
        role: "primary"
      }
    ]
  },
  {
    id: "g02-genthe-woman-child",
    galleryId: "gallery-02",
    displayNumber: "展品 02.05",
    title: "抱着孩子的女性",
    titleEn: "Woman Carrying a Child, Chinatown",
    year: "1896-1906",
    creator: "Arnold Genthe",
    place: "San Francisco Chinatown",
    medium: "Photographic print / negative record",
    credit: "Genthe photograph collection, Library of Congress",
    sourceUrl: "https://www.loc.gov/resource/agc.7a09109/",
    originalArchiveUrl: "https://www.loc.gov/resource/agc.7a09109/",
    rightsNote: "Library of Congress: No known restrictions on publication.",
    captionZh: "家庭动作被拍成街头类型，也被档案重新命名。",
    captionEn: "A family gesture becomes street type and archive caption.",
    curatorialNote: "这张照片中最重要的也许不是“唐人街”，而是被标题掩盖的亲密关系。",
    tags: ["Genthe", "Chinatown", "women", "child"],
    status: "verified archive source",
    sourceId: "loc",
    imagePolicy: "embed",
    media: [
      {
        type: "image",
        src: "https://tile.loc.gov/storage-services/service/pnp/agc/7a09000/7a09100/7a09109r.jpg",
        alt: "Arnold Genthe photograph of a woman carrying a child in Chinatown.",
        caption: "Library of Congress preview.",
        credit: "Library of Congress",
        role: "primary"
      }
    ]
  },
  {
    id: "g02-genthe-street-door",
    galleryId: "gallery-02",
    displayNumber: "展品 02.06",
    title: "门前人物",
    titleEn: "Figures at a Chinatown Doorway",
    year: "1896-1906",
    creator: "Arnold Genthe",
    place: "San Francisco Chinatown",
    medium: "Photographic print / negative record",
    credit: "Genthe photograph collection, Library of Congress",
    sourceUrl: "https://www.loc.gov/resource/agc.7a09022/",
    originalArchiveUrl: "https://www.loc.gov/resource/agc.7a09022/",
    rightsNote: "Library of Congress: No known restrictions on publication.",
    captionZh: "门口成为界面：社区内部与外部观看在这里相遇。",
    captionEn: "The doorway becomes an interface between community and gaze.",
    curatorialNote: "Genthe 的街景并非透明记录。它让城市治理、异域想象和街头偶遇叠在同一个门框里。",
    tags: ["Genthe", "Chinatown", "doorway", "street"],
    status: "verified archive source",
    sourceId: "loc",
    imagePolicy: "embed",
    media: [
      {
        type: "image",
        src: "https://tile.loc.gov/storage-services/service/pnp/agc/7a09000/7a09000/7a09022r.jpg",
        alt: "Arnold Genthe Chinatown doorway photograph.",
        caption: "Library of Congress preview.",
        credit: "Library of Congress",
        role: "primary"
      }
    ]
  },
  {
    id: "g03-fu-album-hot-springs",
    galleryId: "gallery-03",
    displayNumber: "展品 03.05",
    title: "北温泉相册页",
    titleEn: "Northern Hot Springs Album Study",
    year: "1940",
    creator: "Fu Bingchang collection photographer not fully identified",
    place: "Northern Hot Springs, Chongqing region",
    medium: "Photographic print / album record",
    credit: "University of Bristol, Historical Photographs of China, Fu Bingchang collection",
    sourceUrl: "https://hpcbristol.net/visual/Fu01-025",
    originalArchiveUrl: "https://hpcbristol.net/visual/Fu01-025",
    rightsNote: "Verified archive record. Image reuse should follow Historical Photographs of China re-use guidance.",
    captionZh: "相册把旅行、社交和观看姿态组织进同一套秩序。",
    captionEn: "The album orders travel, sociability, and poses of looking.",
    curatorialNote: "傅秉常收藏中的北温泉照片不是单张纪念照，而是一个社交网络如何把自己放进图像系统的证据。",
    tags: ["Fu Bingchang", "album", "Northern Hot Springs", "Republican China"],
    status: "verified archive source",
    sourceId: "hpc-bristol",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://hpcbristol.net/image-library/large/fu01-025.jpg",
        alt: "Fu Bingchang collection Northern Hot Springs album image.",
        caption: "HPC Bristol source-page preview.",
        credit: "University of Bristol / Historical Photographs of China",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g03-fu-social-network",
    galleryId: "gallery-03",
    displayNumber: "展品 03.06",
    title: "民国社交相册",
    titleEn: "Republican Social Album Record",
    year: "1930s-1940s",
    creator: "Fu Bingchang collection photographer not fully identified",
    place: "China",
    medium: "Photographic print / album record",
    credit: "University of Bristol, Historical Photographs of China, Fu Bingchang collection",
    sourceUrl: "https://hpcbristol.net/visual/Fu02-051",
    originalArchiveUrl: "https://hpcbristol.net/visual/Fu02-051",
    rightsNote: "Verified archive record. Image reuse should follow Historical Photographs of China re-use guidance.",
    captionZh: "相册让人物关系成为可移动、可保存的视觉网络。",
    captionEn: "The album turns relationships into portable visual networks.",
    curatorialNote: "这一类图像让展览从“被西方观看”转向更复杂的图像循环：本地精英也在制造、交换和保存自己的可见性。",
    tags: ["Fu Bingchang", "elite network", "album", "Republican China"],
    status: "verified archive source",
    sourceId: "hpc-bristol",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://hpcbristol.net/image-library/large/fu02-051.jpg",
        alt: "Fu Bingchang collection social album record.",
        caption: "HPC Bristol source-page preview.",
        credit: "University of Bristol / Historical Photographs of China",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g04-fan-ho-cleaning",
    galleryId: "gallery-04",
    displayNumber: "展品 04.04",
    title: "清扫",
    titleEn: "Cleaning",
    year: "1950",
    creator: "Fan Ho",
    place: "Hong Kong",
    medium: "Gelatin silver print / estate project preview",
    credit: "Fan Ho Estate / fanho-forgetmenot.com",
    sourceUrl: "https://fanho-forgetmenot.com/",
    originalArchiveUrl: "https://fanho-forgetmenot.com/",
    rightsNote: "Estate/project preview identified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "劳动动作在光影里显影，也被美学距离重新组织。",
    captionEn: "Labor appears through light, and through aesthetic distance.",
    curatorialNote: "何藩的城市诗学不等于脱离社会生活。光影越强，越需要追问画面中的劳动、阶层和街道空间。",
    tags: ["Fan Ho", "Hong Kong", "labor", "street photography"],
    status: "rights unclear",
    sourceId: "fan-ho-estate",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://images.squarespace-cdn.com/content/v1/57c921f6893fc02a0ad26bfc/b02b13b9-f206-4afb-8d29-ccffcda97f50/Cleaning%2C+1950-PL.jpg",
        alt: "Fan Ho Cleaning, 1950, estate project preview.",
        caption: "Estate/project preview. Linked source only.",
        credit: "Fan Ho Estate",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g04-fan-ho-rowing-on",
    galleryId: "gallery-04",
    displayNumber: "展品 04.05",
    title: "划行",
    titleEn: "Rowing On",
    year: "1954",
    creator: "Fan Ho",
    place: "Hong Kong",
    medium: "Gelatin silver print / estate project preview",
    credit: "Fan Ho Estate / fanho-forgetmenot.com",
    sourceUrl: "https://fanho-forgetmenot.com/",
    originalArchiveUrl: "https://fanho-forgetmenot.com/",
    rightsNote: "Estate/project preview identified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "水面把城市劳动、交通和观看距离折叠在一起。",
    captionEn: "Water folds labor, movement, and distance into one frame.",
    curatorialNote: "这件补充展品与《香港威尼斯》形成对读：水面不是风景化的空白，而是港口城市的生活表面。",
    tags: ["Fan Ho", "Hong Kong", "water", "labor"],
    status: "rights unclear",
    sourceId: "fan-ho-estate",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://images.squarespace-cdn.com/content/v1/57c921f6893fc02a0ad26bfc/1683346946657-T66MGV7SIBFF3LE8NNX0/Rowing+On%2C+1954-PL.jpg",
        alt: "Fan Ho Rowing On, 1954, estate project preview.",
        caption: "Estate/project preview. Linked source only.",
        credit: "Fan Ho Estate",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g04-fan-ho-back-alley",
    galleryId: "gallery-04",
    displayNumber: "展品 04.06",
    title: "后巷",
    titleEn: "Back Alley",
    year: "1956",
    creator: "Fan Ho",
    place: "Hong Kong",
    medium: "Gelatin silver print / estate project preview",
    credit: "Fan Ho Estate / fanho-forgetmenot.com",
    sourceUrl: "https://fanho-forgetmenot.com/",
    originalArchiveUrl: "https://fanho-forgetmenot.com/",
    rightsNote: "Estate/project preview identified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "后巷不是城市的边角，而是观看位置的证据。",
    captionEn: "The alley is not margin; it is evidence of position.",
    curatorialNote: "当城市被拍得安静，安静本身也值得分析：谁在画面中行走，谁在画面外命名。",
    tags: ["Fan Ho", "Hong Kong", "alley", "street photography"],
    status: "rights unclear",
    sourceId: "fan-ho-estate",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://images.squarespace-cdn.com/content/v1/57c921f6893fc02a0ad26bfc/1683346946789-ARSHBTRAFSURZNI3NR4B/Back+Alley%2C+1956-PL.jpg",
        alt: "Fan Ho Back Alley, 1956, estate project preview.",
        caption: "Estate/project preview. Linked source only.",
        credit: "Fan Ho Estate",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g04-fan-ho-4pm",
    galleryId: "gallery-04",
    displayNumber: "展品 04.07",
    title: "下午四点",
    titleEn: "4pm",
    year: "1963",
    creator: "Fan Ho",
    place: "Hong Kong",
    medium: "Gelatin silver print / estate project preview",
    credit: "Fan Ho Estate / fanho-forgetmenot.com",
    sourceUrl: "https://fanho-forgetmenot.com/",
    originalArchiveUrl: "https://fanho-forgetmenot.com/",
    rightsNote: "Estate/project preview identified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "时间通过影子进入画面，城市通过身体显影。",
    captionEn: "Time enters through shadow; the city appears through bodies.",
    curatorialNote: "何藩作品中的“诗意”不是离开现实，而是把现实压缩成光、线、墙面和行人的短暂关系。",
    tags: ["Fan Ho", "Hong Kong", "light", "street photography"],
    status: "rights unclear",
    sourceId: "fan-ho-estate",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://images.squarespace-cdn.com/content/v1/57c921f6893fc02a0ad26bfc/1683346948339-LT9VREM8NGH5YU271P0W/4pm%2C+1963-PL.jpg",
        alt: "Fan Ho 4pm, 1963, estate project preview.",
        caption: "Estate/project preview. Linked source only.",
        credit: "Fan Ho Estate",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g05-girard-hong-kong-1974",
    galleryId: "gallery-05",
    displayNumber: "展品 05.05",
    title: "香港夜色，1974",
    titleEn: "Hong Kong Night, 1974",
    year: "1974",
    creator: "Greg Girard",
    place: "Hong Kong",
    medium: "Color photograph / artist project preview",
    credit: "Greg Girard",
    sourceUrl: "https://www.greggirard.com/hkpm-1",
    originalArchiveUrl: "https://www.greggirard.com/hkpm-1",
    rightsNote: "Artist project page verified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "夜色让城市从地标转向运行中的生活系统。",
    captionEn: "Night turns the city from landmark into operating system.",
    curatorialNote: "Girard 的香港不是观光地标，而是灯箱、路面反光和等待中的城市节奏。",
    tags: ["Greg Girard", "Hong Kong", "night", "1970s"],
    status: "rights unclear",
    sourceId: "greg-girard",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://www.greggirard.com/wp-content/uploads/2022/08/90385_HK_1974.jpg",
        alt: "Greg Girard Hong Kong 1974 project preview.",
        caption: "Artist project-page preview. Linked source only.",
        credit: "Greg Girard",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g05-girard-hong-kong-1985",
    galleryId: "gallery-05",
    displayNumber: "展品 05.06",
    title: "香港夜街，1985",
    titleEn: "Hong Kong Street at Night, 1985",
    year: "1985",
    creator: "Greg Girard",
    place: "Hong Kong",
    medium: "Color photograph / artist project preview",
    credit: "Greg Girard",
    sourceUrl: "https://www.greggirard.com/hkpm-1",
    originalArchiveUrl: "https://www.greggirard.com/hkpm-1",
    rightsNote: "Artist project page verified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "霓虹不是装饰，它是城市经济和夜间秩序的表面。",
    captionEn: "Neon is not decoration; it is the surface of night economy.",
    curatorialNote: "这类影像让香港从白天的港口图像转向夜晚的消费、劳动和通行。",
    tags: ["Greg Girard", "Hong Kong", "neon", "1980s"],
    status: "rights unclear",
    sourceId: "greg-girard",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://www.greggirard.com/wp-content/uploads/2022/08/90165-HK-1985.jpg",
        alt: "Greg Girard Hong Kong 1985 project preview.",
        caption: "Artist project-page preview. Linked source only.",
        credit: "Greg Girard",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g05-girard-hong-kong-1983",
    galleryId: "gallery-05",
    displayNumber: "展品 05.07",
    title: "香港街头，1983",
    titleEn: "Hong Kong Street, 1983",
    year: "1983",
    creator: "Greg Girard",
    place: "Hong Kong",
    medium: "Color photograph / artist project preview",
    credit: "Greg Girard",
    sourceUrl: "https://www.greggirard.com/hkpm-1",
    originalArchiveUrl: "https://www.greggirard.com/hkpm-1",
    rightsNote: "Artist project page verified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "潮湿、灯光和招牌让街道成为可读的城市文本。",
    captionEn: "Humidity, light, and signage make the street legible.",
    curatorialNote: "这不是城市奇观的孤立画面，而是全球城市如何通过夜间影像被识别的线索。",
    tags: ["Greg Girard", "Hong Kong", "street", "night"],
    status: "rights unclear",
    sourceId: "greg-girard",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://www.greggirard.com/wp-content/uploads/2022/08/HK_83_029.jpg",
        alt: "Greg Girard Hong Kong 1983 project preview.",
        caption: "Artist project-page preview. Linked source only.",
        credit: "Greg Girard",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g05-walled-city-rooftop",
    galleryId: "gallery-05",
    displayNumber: "展品 05.08",
    title: "九龙城寨屋顶",
    titleEn: "Children Playing on Walled City Rooftop",
    year: "1989",
    creator: "Greg Girard",
    place: "Kowloon Walled City, Hong Kong",
    medium: "Photographic project / gallery preview",
    credit: "Greg Girard / Blue Lotus Gallery",
    sourceUrl: "https://bluelotus-gallery.com/kowloon-walled-city",
    originalArchiveUrl: "https://bluelotus-gallery.com/kowloon-walled-city",
    rightsNote: "Gallery project page verified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "密度不是抽象数字，它落实在屋顶、儿童和日常活动里。",
    captionEn: "Density is not abstract; it appears in rooftops and play.",
    curatorialNote: "城寨影像容易被消费成奇观。屋顶上的日常活动提醒我们，奇观叙事之外还有生活系统。",
    tags: ["Greg Girard", "Kowloon Walled City", "rooftop", "Hong Kong"],
    status: "rights unclear",
    sourceId: "city-darkness",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://images.squarespace-cdn.com/content/v1/54e9ba8ae4b0165bdcf59868/037eff14-9a4a-4df2-b0eb-d9e70a4fbb63/Greg+Girard+%27Children+playing+on+Walled+City+rooftop%27%2C+Hong+Kong+1989%2C+Courtesy+of+Blue+Lotus+Gallery.jpg",
        alt: "Children playing on Kowloon Walled City rooftop.",
        caption: "Gallery project-page preview. Linked source only.",
        credit: "Greg Girard / Blue Lotus Gallery",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g06-nowicki-street-1982",
    galleryId: "gallery-06",
    displayNumber: "展品 06.04",
    title: "中国街景，1982",
    titleEn: "China Street Scene, 1982",
    year: "1982",
    creator: "Simon Nowicki",
    place: "China",
    medium: "Color photograph / photographer web trail",
    credit: "Simon Nowicki",
    sourceUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    originalArchiveUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    rightsNote: "Photographer-hosted China 1982 trail identified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "街道被看见，也被旅行路线和许可条件限定。",
    captionEn: "The street is visible within routes and permissions.",
    curatorialNote: "这类照片记录的不是全部现实，而是一组可参观、可停留、可拍摄的位置。",
    tags: ["1982", "travel", "street", "Simon Nowicki"],
    status: "rights unclear",
    sourceId: "nowicki",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnNIkfbZY2ZSc2yhK6KSmp6Q24eiDk4uc0zOhxJ7rXnEuzy2_LFenUEGI59h3wgRa7W2_bcE2fYgVyI9he94ZnJbtKYSZwyZOf69RrTqIoEiCR6sqvB2ISZThB11F4JRMR2PNTMAnHHsc/s640/China008+copy.jpg",
        alt: "Simon Nowicki China 1982 street preview.",
        caption: "Photographer-hosted page preview. Linked source only.",
        credit: "Simon Nowicki",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g06-nowicki-cycling-1982",
    galleryId: "gallery-06",
    displayNumber: "展品 06.05",
    title: "开放初期的移动",
    titleEn: "Movement in Early Opening China",
    year: "1982",
    creator: "Simon Nowicki",
    place: "China",
    medium: "Color photograph / photographer web trail",
    credit: "Simon Nowicki",
    sourceUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    originalArchiveUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    rightsNote: "Photographer-hosted China 1982 trail identified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "移动方式成为外来镜头理解城市节奏的入口。",
    captionEn: "Mobility becomes a way to read urban rhythm.",
    curatorialNote: "自行车、道路和人群常被重新包装成“刚刚开放”的视觉证据；展览保留这种观看条件。",
    tags: ["1982", "mobility", "travel", "Simon Nowicki"],
    status: "rights unclear",
    sourceId: "nowicki",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhct6FmgXJBa_oaikSeoVTA8dyRK9NH9EEAx0hBe31ocS2AeOJuePbCvPAd9ulQzjrSPNJPtOPbiiqN2M43pDdPsou7Ps8MJtYakeoNiVM6bM0ZMDG9pxnW8YDsudvN06ari2OoHLWAfwM/s640/China052+copy.jpg",
        alt: "Simon Nowicki China 1982 movement preview.",
        caption: "Photographer-hosted page preview. Linked source only.",
        credit: "Simon Nowicki",
        role: "linkedPreview"
      }
    ]
  },
  {
    id: "g06-nowicki-shopfront-1982",
    galleryId: "gallery-06",
    displayNumber: "展品 06.06",
    title: "商店与街道，1982",
    titleEn: "Shopfront and Street, 1982",
    year: "1982",
    creator: "Simon Nowicki",
    place: "China",
    medium: "Color photograph / photographer web trail",
    credit: "Simon Nowicki",
    sourceUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    originalArchiveUrl: "https://simonnowicki.blogspot.com/p/china-1982.html",
    rightsNote: "Photographer-hosted China 1982 trail identified. Direct reproduction rights are not granted here; linked only.",
    captionZh: "商店立面把日常消费和外来好奇心放在同一个画面里。",
    captionEn: "The shopfront joins everyday commerce and outside curiosity.",
    curatorialNote: "二十世纪八十年代初的旅行照片常把新旧并置读成时代特征；它同时也是一次可观看路线的记录。",
    tags: ["1982", "shopfront", "street", "Simon Nowicki"],
    status: "rights unclear",
    sourceId: "nowicki",
    imagePolicy: "link-only",
    media: [
      {
        type: "image",
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAgXd5tLfklLTThMPy9anFohNNBXNMQoLr4nX1XcAH9VMRcxw-t3phgNEo4AxGUX1Jbx7XYYfzBq1OdgRC3lzzlES0aGhbbsAMVZtyi702bhKg5c6kdTwN1uce-B0QxatpBqCoq9KSo7U/s640/China011+copy.jpg",
        alt: "Simon Nowicki China 1982 shopfront preview.",
        caption: "Photographer-hosted page preview. Linked source only.",
        credit: "Simon Nowicki",
        role: "linkedPreview"
      }
    ]
  }
];

function withDefaultMedia(object: ExhibitionObject): ExhibitionObject {
  if (object.media?.length) {
    return object;
  }

  if (object.imageUrl) {
    return {
      ...object,
      media: [
        {
          type: "image",
          src: object.imageUrl,
          alt: object.imageAlt ?? object.titleEn,
          caption: object.captionEn,
          credit: object.credit,
          role: "primary"
        }
      ]
    };
  }

  if (mediaBackfills[object.id]) {
    return {
      ...object,
      media: mediaBackfills[object.id]
    };
  }

  return object;
}

export function getObjectMedia(object: ExhibitionObject) {
  return object.media ?? [];
}

export function getObjectPrimaryMedia(object: ExhibitionObject) {
  const media = getObjectMedia(object);
  return media.find((item) => item.role === "primary") ?? media[0];
}

export const objects: ExhibitionObject[] = [...baseObjects, ...expandedObjects].map(withDefaultMedia);
