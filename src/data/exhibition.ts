export interface Gallery {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  years: string;
  timeline: string;
  wallText: string;
  lookingQuestion: string;
}

export interface ExhibitionRoute {
  id: string;
  title: string;
  time: string;
  description: string;
  stops: Array<{
    label: string;
    href: string;
  }>;
  lookingQuestion: string;
}

export const exhibition = {
  title: "西方镜头中的中国：1870s-1980s",
  titleZh: "西方镜头中的中国：1870s—1980s",
  titleEn: "China Through Other Lenses",
  form: "Digital Exhibition / Online Archive Exhibition",
  question: "当镜头看向中国，它看见的是中国，还是观看者自己？",
  statement:
    "这不是 Flashbak 中文版，也不是一组怀旧照片。展览从二次传播的视觉线索出发，尽量回到机构档案、摄影师项目、馆藏记录和公共领域资料。我们关心的不只是图像拍到了什么，还关心图像从哪里来、被谁命名、如何被允许流通，以及被拍摄者在档案里是否仍然有名字。",
  timeline: ["1633", "1870s", "1900s", "1940s", "1960s", "1980s"]
};

export const galleries: Gallery[] = [
  {
    id: "gallery-00",
    number: "Gallery 00",
    title: "印刷中国：摄影之前的图像复制",
    titleEn: "Printed China Before Photography",
    years: "1633",
    timeline: "1633",
    wallText:
      "摄影之前，中国已经通过书籍、版画、地图和图谱被复制、携带和观看。《十竹斋书画谱》不是照相机的前史注脚，而是一种更早的图像技术：它让手工、版面、色彩和流通结合起来。这个展厅把“镜头”暂时放下，先追问图像如何成为可收藏、可转译、可远行的对象，也追问观看如何被预先编排。",
    lookingQuestion: "当图像还不是照片时，谁已经在安排观看顺序？"
  },
  {
    id: "gallery-01",
    number: "Gallery 01",
    title: "清末中国：湿版摄影与外部观看",
    titleEn: "Late Qing China: Wet Collodion and External Looking",
    years: "1869-1871",
    timeline: "1870s",
    wallText:
      "John Thomson 的中国影像常被当作早期摄影记录来观看。但湿版摄影并不只是技术，它也是旅行、出版、殖民知识和市场想象共同作用的结果。人物、服饰、城市和建筑被组织成可被欧洲读者理解的类别。本展不把这些照片当成透明窗口，而把它们当成观看关系留下的物证。",
    lookingQuestion: "这张照片中，谁有名字？谁只剩下类型？"
  },
  {
    id: "gallery-02",
    number: "Gallery 02",
    title: "唐人街：移民社区与黄祸想象",
    titleEn: "Chinatown: Migration, Community, and Yellow-Peril Imagination",
    years: "1896-1906",
    timeline: "1900s",
    wallText:
      "旧金山唐人街在 Arnold Genthe 的照片里像一座被凝视的剧场。街道、孩子、父亲、门面和背影都被收进“异国社区”的视觉语法。照片记录了移民生活，也参与制造了陌生感。所谓唐人街图像，常常同时是社区档案、城市消费品和排华时代的视觉证词。",
    lookingQuestion: "这组照片是社区记录，还是权力记录？"
  },
  {
    id: "gallery-03",
    number: "Gallery 03",
    title: "民国相册：外交官、女性与精英网络",
    titleEn: "Republican Albums: Diplomats, Women, and Elite Networks",
    years: "1920s-1940s",
    timeline: "1940s",
    wallText:
      "傅秉常收藏把镜头从“西方看中国”的单向叙事中移开。相册里的外交官、女性、相机和旅行地点，显示民国精英也在主动制造、交换和保存影像。这里的照片不只是被外部观看的中国，也是一套本地现代性如何摆姿势、如何持有相机、如何进入国际网络的证据。它们把观看者的位置变得不再单一。",
    lookingQuestion: "当被拍摄者也拿着相机，观看关系如何改变？"
  },
  {
    id: "gallery-04",
    number: "Gallery 04",
    title: "光影香港：何藩的城市诗学",
    titleEn: "Hong Kong in Light: Fan Ho's Urban Poetics",
    years: "1950s-1960s",
    timeline: "1960s",
    wallText:
      "何藩的香港常被赞为诗意，但“诗意”并不等于脱离历史。楼梯、巷口、孩童、墙面和水面，都在强烈光影中变成城市的观看装置。这个展厅以外链方式呈现授权未清的作品线索，并用同时期公共档案作旁证，提醒观众：美学也需要来源伦理。照片中的沉默部分，和可见部分同样重要。",
    lookingQuestion: "美感会不会让我们忘记照片中的劳动、阶层和城市压力？"
  },
  {
    id: "gallery-05",
    number: "Gallery 05",
    title: "霓虹、城寨与全球城市",
    titleEn: "Neon, Walled City, and the Global City",
    years: "1970s-1980s",
    timeline: "1980s",
    wallText:
      "1970s 到 1980s 的香港被越来越多地拍成夜色、霓虹、港口和高密度建筑。Greg Girard 的作品让城市从白天的旅游图像转向夜晚的生活系统。与此同时，九龙城寨成为全球视觉想象中的极端对象。展厅不把它们当作奇观，而把它们放进城市摄影的伦理问题。",
    lookingQuestion: "城市被拍成奇观时，谁被留下来解释日常生活？"
  },
  {
    id: "gallery-06",
    number: "Gallery 06",
    title: "1982：开放初期的可参观中国",
    titleEn: "1982: The Visit-able China of Early Opening",
    years: "1982",
    timeline: "1982",
    wallText:
      "1982 年的中国旅行照片常被今天的网络重新发现：自行车、街道、商店、笑脸和新旧并置，被包装成“罕见的真实瞬间”。但旅行摄影从来不只是发现。路线、许可、翻译、陪同和好奇心共同决定镜头能看见什么。这个展厅把二次传播保留下来，也标出它尚未完成的来源问题。",
    lookingQuestion: "开放初期的“可参观”，是谁为谁打开的？"
  }
];

export const exhibitionRoutes: ExhibitionRoute[] = [
  {
    id: "route-quick",
    title: "15 分钟快速参观",
    time: "15 min",
    description:
      "适合第一次打开页面的人：先看摄影之前的图像复制，再进入清末湿版摄影，随后跳到何藩的香港光影，最后在 Reflection Room 停下。",
    stops: [
      { label: "Gallery 00", href: "#gallery-00" },
      { label: "Gallery 01", href: "#gallery-01" },
      { label: "Gallery 04", href: "#gallery-04" },
      { label: "Reflection Room", href: "#reflection-room" }
    ],
    lookingQuestion: "如果只看四个房间，哪一个最能改变你对“观看中国”的理解？"
  },
  {
    id: "route-complete",
    title: "45 分钟完整参观",
    time: "45 min",
    description:
      "适合完整阅读：从《十竹斋书画谱》到 1982 年旅行影像，沿着图像技术、摄影权力、城市经验和来源路径逐步展开。",
    stops: [
      { label: "Gallery 00", href: "#gallery-00" },
      { label: "Gallery 01", href: "#gallery-01" },
      { label: "Gallery 02", href: "#gallery-02" },
      { label: "Gallery 03", href: "#gallery-03" },
      { label: "Gallery 04", href: "#gallery-04" },
      { label: "Gallery 05", href: "#gallery-05" },
      { label: "Gallery 06", href: "#gallery-06" }
    ],
    lookingQuestion: "当时间线走完，哪些图像仍在说话，哪些只留下了来源路径？"
  },
  {
    id: "route-hong-kong",
    title: "香港影像路线",
    time: "20 min",
    description:
      "聚焦何藩、Greg Girard 和九龙城寨：香港在这里既是光影诗学，也是霓虹、密度、港口和外部观看共同构成的城市档案。",
    stops: [
      { label: "Gallery 04", href: "#gallery-04" },
      { label: "Gallery 05", href: "#gallery-05" }
    ],
    lookingQuestion: "当城市被拍成美学或奇观时，日常生活被放在画面中的哪里？"
  },
  {
    id: "route-diaspora",
    title: "海外华人路线",
    time: "12 min",
    description:
      "从旧金山唐人街、Limehouse 和“黄祸”想象出发，观察移民社区如何被摄影、报刊、小说和城市治理共同组织成可消费的陌生感。",
    stops: [{ label: "Gallery 02", href: "#gallery-02" }],
    lookingQuestion: "这组图像让谁成为社区成员，又让谁成为被观看的类型？"
  },
  {
    id: "route-image-tech",
    title: "图像技术路线",
    time: "18 min",
    description:
      "从《十竹斋书画谱》到湿版摄影，观察复制、底片、印刷、馆藏和数字目录如何决定图像能否远行、被引用和被再次观看。",
    stops: [
      { label: "Gallery 00", href: "#gallery-00" },
      { label: "Gallery 01", href: "#gallery-01" }
    ],
    lookingQuestion: "技术是在保存图像，还是也在规定图像如何被理解？"
  }
];
