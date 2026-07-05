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
