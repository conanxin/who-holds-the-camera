export interface TrailEssaySection {
  title: string;
  body: string;
  objectIds: string[];
}

export interface ThematicTrail {
  id: string;
  slug: string;
  titleZh: string;
  titleEn: string;
  subtitle: string;
  duration: string;
  thesis: string;
  openingQuestion: string;
  relatedGalleryIds: string[];
  objectIds: string[];
  essaySections: TrailEssaySection[];
  closingQuestion: string;
  sourceNote: string;
}

export const trails: ThematicTrail[] = [
  {
    id: "trail-urban-modernity",
    slug: "urban-modernity",
    titleZh: "城市现代性路线",
    titleEn: "Urban Modernity Trail",
    subtitle: "Shanghai, Hong Kong, neon, density, streets, and the visible city",
    duration: "28 min",
    openingQuestion: "当一座城市被称为“现代”，哪些空间被放大，哪些人被排除？",
    thesis:
      "这条路线不试图说明上海或香港是什么，而是追问它们在图像中如何被组织成“现代城市”。港口、外滩、霓虹、街道和城寨并非自然地代表城市，它们被镜头、数据库、画廊和旅行路线反复挑选，才成为可观看的现代性。",
    relatedGalleryIds: ["gallery-04", "gallery-05", "gallery-07", "gallery-08"],
    objectIds: [
      "g07-v20-01",
      "g07-v20-02",
      "g07-v20-07",
      "g04-fan-ho-back-alley",
      "g04-v20-08",
      "g05-girard-hkpm",
      "g05-v20-09",
      "g05-v20-10",
      "g05-v20-12",
      "g08-v20-01"
    ],
    essaySections: [
      {
        title: "外滩不是城市本身",
        body:
          "外滩在许多图像里像入口，也像证明。它把上海组织成港口、租界、商业和远景的组合，但这种组合并不等于城市全部。全景图让建筑和河岸显得有秩序，却把劳动、拥挤、噪声和街道边缘推到画面之外。",
        objectIds: ["g07-v20-01", "g07-v20-02", "g07-v20-07"]
      },
      {
        title: "香港的光线不是解释",
        body:
          "何藩的香港没有解释自己。它让光落在楼梯、后巷、清扫者和水面上，使城市变成影子、身体和短暂停留的关系。美感在这里不是结论，而是一个问题：当图像足够迷人时，我们是否更容易忘记画面里的劳动和阶层？",
        objectIds: ["g04-fan-ho-back-alley", "g04-v20-08"]
      },
      {
        title: "夜晚城市的可读性",
        body:
          "Greg Girard 的夜晚香港把霓虹、通道、招牌和潮湿路面变成城市文本。霓虹不是装饰，而是夜间经济和通行秩序的表面。九龙城寨的屋顶图像则提醒我们，所谓密度并不只是奇观，它也包含儿童、临时空间和日常活动。",
        objectIds: ["g05-girard-hkpm", "g05-v20-09", "g05-v20-10", "g05-v20-12"]
      }
    ],
    closingQuestion: "如果现代性总是通过某些地标被看见，那么城市里哪些人只以背景、阴影或噪声出现？",
    sourceNote:
      "这条路线依赖 Virtual Shanghai、Fan Ho Estate、Greg Girard 项目页、Blue Lotus Gallery 和部分馆藏记录。部分图像为 linked source only，不默认视为可自由复用素材。"
  },
  {
    id: "trail-overseas-chinese",
    slug: "overseas-chinese",
    titleZh: "海外华人路线",
    titleEn: "Overseas Chinese Trail",
    subtitle: "Chinatown, Limehouse, hidden cameras, media panic, and distance",
    duration: "22 min",
    openingQuestion: "唐人街图像记录的是移民生活，还是外部社会的恐惧？",
    thesis:
      "唐人街不是天然神秘。神秘感往往来自镜头、报纸、小说和城市治理共同制造的距离。这条路线围绕旧金山唐人街、Limehouse 和黄祸想象，追问移民社区如何同时成为生活空间、城市景观和被外部社会消费的陌生区域。",
    relatedGalleryIds: ["gallery-02"],
    objectIds: [
      "g02-genthe-no-likee",
      "g02-genthe-father-children",
      "g02-genthe-man-boys",
      "g02-genthe-merchant",
      "g02-genthe-woman-child",
      "g02-genthe-street-door",
      "g02-v20-07",
      "g02-v20-08",
      "g02-v20-09",
      "g02-v20-10"
    ],
    essaySections: [
      {
        title: "谁先开口",
        body:
          "Genthe 的一些标题在人物之前说话。街上的人可能没有名字，却先被安排进“唐人街”“父亲”“孩子”“不喜欢”这样的标题结构。照片看似捕捉街头瞬间，但标题、馆藏和观看者的期待会把瞬间改写成类型。",
        objectIds: ["g02-genthe-no-likee", "g02-genthe-father-children", "g02-genthe-man-boys"]
      },
      {
        title: "社区与被凝视的边界",
        body:
          "门口、街道、孩子和商人构成社区生活，也构成外部观看的边界。摄影并不只是把移民生活带入档案，它也把观看者的位置固定在街道另一侧。被看见的人在场，但他们如何命名自己，常常不在同一个记录系统里。",
        objectIds: ["g02-genthe-merchant", "g02-genthe-woman-child", "g02-genthe-street-door", "g02-v20-07"]
      },
      {
        title: "恐慌如何跨城流动",
        body:
          "Limehouse 的加入说明，唐人街图像并不只属于旧金山。类似的视觉语法在不同港口城市之间流动，并与小说、报刊和治安叙事互相支撑。所谓“神秘东方”往往不是社区内部的属性，而是外部社会用来解释自身焦虑的装置。",
        objectIds: ["g02-v20-08", "g02-v20-09", "g02-v20-10"]
      }
    ],
    closingQuestion: "当一个社区被拍成“陌生”，陌生感来自社区本身，还是来自观看者被安排好的距离？",
    sourceNote:
      "这条路线主要依赖 Library of Congress 的 Arnold Genthe collection，并保留 Limehouse 与黄祸想象作为跨城市视觉语法的研究线索。"
  },
  {
    id: "trail-image-technology",
    slug: "image-technology",
    titleZh: "图像技术路线",
    titleEn: "Image Technology Trail",
    subtitle: "Woodblock printing, wet collodion, glass negatives, archives, and circulation",
    duration: "26 min",
    openingQuestion: "图像技术如何决定一种文化能被怎样保存和观看？",
    thesis:
      "技术不是图像之外的背景。木版套印、湿版摄影、玻璃底片、数据库预览和数字再流通，都在决定图像如何离开原处，如何被保存，如何被再次观看。这条路线把“谁拿着相机”向前推到“谁安排复制方式”。",
    relatedGalleryIds: ["gallery-00", "gallery-01", "gallery-07"],
    objectIds: [
      "g00-ten-bamboo-leaf-01",
      "g00-ten-bamboo-leaf-02",
      "g00-v20-06",
      "g00-v20-08",
      "g01-thomson-manchu-woman",
      "g01-thomson-shanghai-bund",
      "g01-v20-10",
      "g01-v20-12",
      "g07-v20-03",
      "g07-v20-08"
    ],
    essaySections: [
      {
        title: "摄影之前的复制",
        body:
          "《十竹斋书画谱》提醒我们，图像在摄影之前已经能够被复制、携带和收藏。木版套印不是相机的前史注脚，而是一种观看秩序：页码、边框、色彩和装订共同决定图像如何成为可移动的知识对象。",
        objectIds: ["g00-ten-bamboo-leaf-01", "g00-ten-bamboo-leaf-02", "g00-v20-06", "g00-v20-08"]
      },
      {
        title: "湿版摄影的条件",
        body:
          "John Thomson 的湿版摄影常被读作早期记录，但湿版并不透明。器材、曝光时间、旅行路线和出版市场共同决定什么能被拍，谁必须停住，哪些姿态更容易被欧洲读者理解。技术在这里同时是保存方式和分类方式。",
        objectIds: ["g01-thomson-manchu-woman", "g01-thomson-shanghai-bund", "g01-v20-10", "g01-v20-12"]
      },
      {
        title: "数据库也是观看装置",
        body:
          "当图像进入 Virtual Shanghai、Wellcome 或馆藏页面，它们并没有停止流动。标题、缩略图、元数据和检索路径重新安排观看顺序。数字化不是单纯开放档案，它也把图像放进新的界面和新的解释关系。",
        objectIds: ["g07-v20-03", "g07-v20-08"]
      }
    ],
    closingQuestion: "如果技术决定了图像如何流通，那么档案中的“原始记录”是否也一直在被新的界面重写？",
    sourceNote:
      "这条路线连接 The Met、Wellcome Collection、MIT Visualizing Cultures 和 Virtual Shanghai，用来观察图像从印刷、底片到数据库的技术路径。"
  },
  {
    id: "trail-propaganda-futures",
    slug: "propaganda-futures",
    titleZh: "政治未来路线",
    titleEn: "Propaganda Futures Trail",
    subtitle: "Posters, children, rockets, workers, bodies, and the imagined future",
    duration: "24 min",
    openingQuestion: "当未来被画成一张海报，谁被邀请进入未来？",
    thesis:
      "宣传画不是简单的政治口号。它把儿童、劳动、科技、农业、体育和身体组织成一种可观看的国家未来。这个未来很明亮，但并不中性。它选择了火箭、机器、笑脸和劳动姿态，也压低了犹疑、失败和普通日常。",
    relatedGalleryIds: ["gallery-08"],
    objectIds: [
      "g08-v20-01",
      "g08-v20-02",
      "g08-v20-03",
      "g08-v20-04",
      "g08-v20-05",
      "g08-v20-06",
      "g08-v20-07",
      "g08-v20-08",
      "g08-v20-09"
    ],
    essaySections: [
      {
        title: "机器和土地",
        body:
          "农业机械化海报把机器、土地和劳动者组织成同一个前进方向。图像中的未来不是自然到来的，它需要被耕作、被动员、被画成可理解的速度。机器因此不只是工具，也成为国家时间的符号。",
        objectIds: ["g08-v20-01", "g08-v20-08"]
      },
      {
        title: "学习技术，进入未来",
        body:
          "技术学习在海报中常被画成贡献，而不是私人兴趣。课堂、工厂、青年身体和国家目标被放进同一条视觉路线。这样的图像把知识变成义务，也把未来变成可以被训练、被考核、被展示的姿态。",
        objectIds: ["g08-v20-02", "g08-v20-07"]
      },
      {
        title: "儿童、身体和明亮表面",
        body:
          "儿童和运动身体使未来显得亲近、健康、可爱。航天儿童尤其把技术雄心转译成童年形象，让宏大的未来看起来柔软而无害。明亮的表面并不取消权力，它只是把权力画成一种可以被拥抱的情绪。",
        objectIds: ["g08-v20-03", "g08-v20-04", "g08-v20-06", "g08-v20-09"]
      }
    ],
    closingQuestion: "如果未来总是明亮、健康、向前的，哪些经验无法进入这张海报？",
    sourceNote:
      "这条路线依赖 Chinese Posters、Whitworth Chinese Art Posters 和 Flashbak secondary visual trail。许多 poster 图像仍为 rights unclear 或 secondary source only，只作为研究线索展示。"
  },
  {
    id: "trail-source-flow",
    slug: "source-flow",
    titleZh: "来源流动路线",
    titleEn: "Source Flow Trail",
    subtitle: "How images move from archives, museums, photographer projects, and visual trails",
    duration: "30 min",
    openingQuestion: "一张图像从档案到网页，中间经过了哪些再命名、再解释和再传播？",
    thesis:
      "这条路线把图像当作流动中的对象。它们从 Wellcome、Library of Congress、Historical Photographs of China、Virtual Shanghai、Chinese Posters、摄影师项目和 Flashbak 等不同节点进入本展。来源不是脚注，而是观看条件。",
    relatedGalleryIds: ["gallery-00", "gallery-01", "gallery-02", "gallery-03", "gallery-05", "gallery-06", "gallery-07", "gallery-08"],
    objectIds: [
      "g00-ten-bamboo-leaf-01",
      "g01-thomson-manchu-woman",
      "g02-genthe-no-likee",
      "g03-fu-camera",
      "g05-girard-hkpm",
      "g06-nowicki-collection",
      "g07-v20-01",
      "g08-v20-01",
      "g08-v20-06",
      "g03-fu-social-network"
    ],
    essaySections: [
      {
        title: "从馆藏页到展品标签",
        body:
          "馆藏页看似只是来源，但它决定了展品能被怎样引用。标题、年份、媒介、credit 和 rights note 都不是装饰字段，而是图像进入公共页面时必须携带的条件。展品标签的任务，是让这些条件不被图片本身的吸引力遮住。",
        objectIds: ["g00-ten-bamboo-leaf-01", "g01-thomson-manchu-woman", "g02-genthe-no-likee"]
      },
      {
        title: "大学项目和摄影师项目",
        body:
          "Historical Photographs of China、Greg Girard 项目页和 Simon Nowicki 的个人页面代表了不同的来源结构。它们不是同一种权威，却都能提供图像线索。路线保留这种差异，让 verified archive source 和 rights unclear 同时可见。",
        objectIds: ["g03-fu-camera", "g05-girard-hkpm", "g06-nowicki-collection", "g03-fu-social-network"]
      },
      {
        title: "二级线索不是终点",
        body:
          "Flashbak 在本项目中不是唯一来源，而是 visual trail。它能提示选题，也可能扩大传播，但不能替代原始馆藏或项目记录。当原始来源尚未完全核对时，页面必须把 secondary source only 明确写出来，而不是让不确定性消失。",
        objectIds: ["g07-v20-01", "g08-v20-01", "g08-v20-06"]
      }
    ],
    closingQuestion: "如果每次再传播都会改写图像，那么我们应该把“来源”看作终点，还是看作一条仍在移动的路线？",
    sourceNote:
      "这条路线直接连接 Source Map 页面，强调 verified archive source、rights unclear 和 secondary source only 的边界。"
  }
];
