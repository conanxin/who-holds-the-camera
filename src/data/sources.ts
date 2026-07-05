export type SourceKind =
  | "Archive / Museum / Library"
  | "Photographer / Estate / Gallery"
  | "Secondary visual trail"
  | "Further reading";

export interface ExhibitionSource {
  id: string;
  name: string;
  kind: SourceKind;
  sourceType: SourceKind;
  url: string;
  note: string;
  descriptionZh: string;
  usedFor: string;
  reliabilityNote: string;
}

export const sources: ExhibitionSource[] = [
  {
    id: "wellcome",
    name: "Wellcome Collection",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://wellcomecollection.org/works?query=John%20Thomson%20China",
    note: "John Thomson China works, including wet-collodion glass negatives and albumen print records.",
    descriptionZh: "伦敦 Wellcome Collection 的公开馆藏目录，保存 John Thomson 中国摄影相关底片、照片和条目记录。",
    usedFor: "Gallery 01 中 John Thomson 清末中国湿版摄影展品的原始馆藏路径。",
    reliabilityNote: "机构目录稳定，部分条目提供 Public Domain Mark 或明确授权；仍需逐件阅读单页 rights 信息。"
  },
  {
    id: "hpc-bristol",
    name: "University of Bristol / Historical Photographs of China",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://hpcbristol.net/",
    note: "Chinese photography collections including the Fu Bingchang photographs and Republican-era albums.",
    descriptionZh: "布里斯托大学近代中国历史照片项目，整理多组中国近现代摄影收藏与相册资料。",
    usedFor: "Gallery 03 中傅秉常收藏、民国外交网络、女性与相机相关展品的来源路径。",
    reliabilityNote: "大学项目来源较稳定；图片再利用应遵循项目自己的 re-use guidance。"
  },
  {
    id: "loc",
    name: "Library of Congress",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://www.loc.gov/",
    note: "Genthe Collection, Toni Frissell photographs, and public catalogue records for China and overseas Chinese images.",
    descriptionZh: "美国国会图书馆的公开目录，包含 Arnold Genthe、Toni Frissell、Paul Rudolph 等摄影和档案条目。",
    usedFor: "Gallery 02 的旧金山唐人街影像，以及 Gallery 04-05 的香港参考图像。",
    reliabilityNote: "许多条目标注 no known restrictions，但仍保留具体馆藏页与权利提示，避免把目录说明简化为通用授权。"
  },
  {
    id: "met",
    name: "The Metropolitan Museum of Art",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://www.metmuseum.org/art/collection/search?q=Ten+Bamboo+Studio+Manual",
    note: "Public-domain leaves from the Ten Bamboo Studio Manual of Painting and Calligraphy.",
    descriptionZh: "大都会艺术博物馆公开馆藏目录，提供《十竹斋书画谱》相关叶片的馆藏记录与图像。",
    usedFor: "Gallery 00 中摄影之前的图像复制、书籍设计与版画技术展品。",
    reliabilityNote: "馆藏页和公共领域图像记录较清晰；仍以单件馆藏页为最终引用点。"
  },
  {
    id: "fan-ho-estate",
    name: "Fan Ho Estate / Fan Ho Trust",
    kind: "Photographer / Estate / Gallery",
    sourceType: "Photographer / Estate / Gallery",
    url: "https://fanho-forgetmenot.com/",
    note: "Estate project and public preview trail for Fan Ho works. Linked only unless rights are cleared.",
    descriptionZh: "何藩 Estate / Trust 相关项目页面，用于补充何藩香港街头摄影作品的近源视觉线索。",
    usedFor: "Gallery 04 中何藩补充展品的 estate / project-page preview 路径。",
    reliabilityNote: "接近艺术家 estate 链条，但并非公共领域声明；本展只作外链预览和来源说明。"
  },
  {
    id: "blue-lotus",
    name: "Blue Lotus Gallery / Fan Ho Estate",
    kind: "Photographer / Estate / Gallery",
    sourceType: "Photographer / Estate / Gallery",
    url: "https://bluelotus-gallery.com/artists/31-fan-ho/",
    note: "Estate and gallery reference for Fan Ho's Hong Kong street photographs. Linked only unless rights are cleared.",
    descriptionZh: "何藩 Estate 相关画廊路径，用于确认作品、系列和授权线索。",
    usedFor: "Gallery 04 中何藩香港街头摄影的摄影师/estate 线索。",
    reliabilityNote: "接近艺术家授权链条，但不是公共领域声明；本展只外链，不复制授权未清图像。"
  },
  {
    id: "mplus",
    name: "M+ Collection",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://www.mplus.org.hk/en/collection/objects/approaching-shadow-2015446/",
    note: "Museum collection record for Fan Ho's Approaching Shadow. The record verifies the object while copyright remains with Fan Ho.",
    descriptionZh: "M+ 公开馆藏页，提供何藩《阴影逼近》的作品级馆藏记录。",
    usedFor: "Gallery 04 中《阴影逼近》的近源机构记录。",
    reliabilityNote: "馆藏记录可验证作品信息；版权仍属 Fan Ho，不能默认自由复用。"
  },
  {
    id: "greg-girard",
    name: "Greg Girard",
    kind: "Photographer / Estate / Gallery",
    sourceType: "Photographer / Estate / Gallery",
    url: "https://www.greggirard.com/",
    note: "Artist project pages for Hong Kong, Kowloon Walled City, neon, ports, and Asian night city work.",
    descriptionZh: "摄影师 Greg Girard 官方项目网站，呈现香港、亚洲城市夜景、霓虹和港口城市摄影项目。",
    usedFor: "Gallery 05 中 HK:PM 与香港夜间城市影像的摄影师项目线索。",
    reliabilityNote: "摄影师官方来源可靠；未授予本展复制图像的权利，因此以外链和来源说明为主。"
  },
  {
    id: "city-darkness",
    name: "City of Darkness",
    kind: "Photographer / Estate / Gallery",
    sourceType: "Photographer / Estate / Gallery",
    url: "https://cityofdarkness.co.uk/",
    note: "Project and publication site for Greg Girard and Ian Lambot's Kowloon Walled City work.",
    descriptionZh: "Greg Girard 与 Ian Lambot 九龙城寨项目和出版物的项目站点。",
    usedFor: "Gallery 05 中九龙城寨项目的近源项目页。",
    reliabilityNote: "项目来源接近摄影师和出版链条；作品图像仍不视为公共领域素材。"
  },
  {
    id: "nowicki",
    name: "Simon Nowicki / China 1982",
    kind: "Photographer / Estate / Gallery",
    sourceType: "Photographer / Estate / Gallery",
    url: "https://simonnowicki.blogspot.com/p/china-1982.html",
    note: "Photographer-hosted China 1982 trail, paired with Flickr records where available. Linked only; no images copied.",
    descriptionZh: "Simon Nowicki 自建 China 1982 页面，并可与 Flickr 图像记录互相校对。",
    usedFor: "Gallery 06 中 1982 年中国旅行影像的摄影师自存线索。",
    reliabilityNote: "比二次传播更接近摄影师来源；Flickr 记录显示 all rights reserved 时，本展只做外链。"
  },
  {
    id: "virtual-shanghai",
    name: "Virtual Shanghai",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://www.virtualshanghai.net/",
    note: "Historical image and text resources on Shanghai modern urban culture, mapped through presentation pages and albums.",
    descriptionZh: "上海影像与历史素材索引，强调城市景观、街景、码头与日常生活图景的空间化叙事。",
    usedFor: "Gallery 07 上海镜头。补充上海街景与现代都市视角的外部来源。",
    reliabilityNote: "来源于城市研究与馆藏型平台，内容中部分页面为展示页面，图像级权属需按原站说明判定。"
  },
  {
    id: "mit-thomson",
    name: "MIT Visualizing Cultures / John Thomson",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://visualizingcultures.mit.edu/john_thomson_china_01/ct_essay01.html",
    note: "Scholarship and selected plate reproductions for John Thomson’s China project.",
    descriptionZh: "提供 John Thomson 影像语境与图像文本说明，支持对清末摄影影像结构的阅读。",
    usedFor: "Gallery 01 与 Gallery 00 的视觉关系说明；Gallery 07 的视觉史对照。",
    reliabilityNote: "学术型页面与图像说明可用于背景与结构说明，影像权限以原链接的嵌入与再用条款为准。"
  },
  {
    id: "chinese-posters",
    name: "Chinese Posters",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://chineseposters.net/",
    note: "Poster collections and catalog records related to Chinese visual production and social iconography.",
    descriptionZh: "聚焦宣传画、社会海报与视觉叙事的作品集与检索入口。",
    usedFor: "Gallery 08 宣传画与未来想象。用于图像线索与类型识别。",
    reliabilityNote: "部分内容为索引与展示页，版权与可再用范围需逐件核对。"
  },
  {
    id: "ucsd-posters",
    name: "UCSD Chinese Cultural Revolution Posters",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://library.ucsd.edu/dc/collection/bb67250839",
    note: "Library digital object list of Chinese Cultural Revolution posters.",
    descriptionZh: "北美大学馆藏的文化大革命宣传画线索集合，适合作为来源追索入口。",
    usedFor: "Gallery 08，补充 1950s-1980s 宣传图像语境。",
    reliabilityNote: "数字目录与索引级页面为主，个别对象页附带使用与版权限制说明。"
  },
  {
    id: "whitworth-posters",
    name: "Whitworth Chinese Art Posters",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://digitalcommons.whitworth.edu/chinese_art_posters/",
    note: "Repository for Chinese poster records and curated lists.",
    descriptionZh: "数字档案与研究论文集合，为宣传画主题提供跨机构索引。",
    usedFor: "Gallery 08 的可访问性核验与图像线索补充。",
    reliabilityNote: "仓储与论文集合，需按单件记录页判断展示权限与嵌入可用性。"
  },
  {
    id: "chinese-posters-met",
    name: "Met / Ten Bamboo references (extended)",
    kind: "Archive / Museum / Library",
    sourceType: "Archive / Museum / Library",
    url: "https://www.metmuseum.org/art/collection/search?q=Ten+Bamboo+Studio+Manual",
    note: "Extended search and print references for Ten Bamboo Studio related visual materials.",
    descriptionZh: "用于 Gallery 00 的附加图像索引与印刷图像补充。",
    usedFor: "Gallery 00，继续补充清代木版印刷图像样本。",
    reliabilityNote: "以大都会馆藏页面作为核验入口，图像权属按馆藏记录逐件判定。"
  },
  {
    id: "flashbak",
    name: "Flashbak",
    kind: "Secondary visual trail",
    sourceType: "Secondary visual trail",
    url: "https://flashbak.com/a-westerners-photographs-of-china-1982-423867/",
    note: "Used as a secondary visual trail and topic prompt, not as the final archive authority.",
    descriptionZh: "二次传播图文页面，用于发现视觉线索和选题方向。",
    usedFor: "Gallery 06 中 1982 年中国照片的网络再发现条目。",
    reliabilityNote: "只作为 secondary visual trail；必须继续回到摄影师、档案或馆藏页面核对。"
  },
  {
    id: "pdr",
    name: "Public Domain Review",
    kind: "Further reading",
    sourceType: "Further reading",
    url: "https://publicdomainreview.org/",
    note: "Contextual public-domain research trail for printed books, visual culture, and image reproduction history.",
    descriptionZh: "公共领域视觉文化研究入口，适合作为老书、图像技术史和视觉文化阅读线索。",
    usedFor: "为 Gallery 00 的图像复制、公共领域和视觉技术史提供进一步阅读方向。",
    reliabilityNote: "适合作为研究导读，不替代具体馆藏页、单件作品页或权利说明。"
  }
];
