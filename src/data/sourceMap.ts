import { galleries } from "./exhibition";
import { objects, type SourceStatus } from "./objects";
import { sources, type ExhibitionSource, type SourceKind } from "./sources";

export interface SourceNode {
  id: string;
  label: string;
  sourceType: SourceKind;
  descriptionZh: string;
  url: string;
  relatedObjectIds: string[];
  group: SourceKind;
  usedFor: string;
  reliabilityNote: string;
}

export interface SourceEdge {
  from: string;
  to: string;
  relation: string;
  note: string;
}

export interface GallerySourceFlow {
  galleryId: string;
  galleryTitle: string;
  galleryTitleEn: string;
  galleryNumber: string;
  primarySources: string[];
  secondaryTrails: string[];
  objectIds: string[];
  statusCounts: Record<SourceStatus, number>;
  note: string;
}

export const sourceTypeOrder: SourceKind[] = [
  "Archive / Museum / Library",
  "Photographer / Estate / Gallery",
  "Secondary visual trail",
  "Further reading"
];

export const statusOrder: SourceStatus[] = [
  "verified archive source",
  "rights unclear",
  "secondary source only",
  "placeholder pending replacement"
];

export const sourceStatusLabels: Record<SourceStatus, string> = {
  "verified archive source": "Verified archive source",
  "rights unclear": "Rights unclear",
  "secondary source only": "Secondary source only",
  "placeholder pending replacement": "Placeholder pending replacement"
};

export const sourceStatusNotes: Record<SourceStatus, string> = {
  "verified archive source": "已回到档案馆、博物馆、图书馆、大学项目或稳定馆藏/项目记录。",
  "rights unclear": "有近源记录或摄影师/画廊线索，但不默认视为公共领域素材。",
  "secondary source only": "目前仍主要依赖二级视觉线索，需要继续回到原始记录。",
  "placeholder pending replacement": "保留给未来需要更强来源后再公开的展品。"
};

function countByStatus(items = objects) {
  return statusOrder.reduce<Record<SourceStatus, number>>((acc, status) => {
    acc[status] = items.filter((object) => object.status === status).length;
    return acc;
  }, {
    "verified archive source": 0,
    "rights unclear": 0,
    "secondary source only": 0,
    "placeholder pending replacement": 0
  });
}

function sourceObjectIds(sourceId: string) {
  return objects.filter((object) => object.sourceId === sourceId).map((object) => object.id);
}

function uniqueSourceIds(sourceList: ExhibitionSource[]) {
  return Array.from(new Set(sourceList.map((source) => source.id)));
}

export const sourceStats = {
  totalObjects: objects.length,
  sourceGroups: new Set(sources.map((source) => source.sourceType)).size,
  statusCounts: countByStatus()
};

export const sourceNodes: SourceNode[] = sources.map((source) => ({
  id: source.id,
  label: source.name,
  sourceType: source.sourceType,
  descriptionZh: source.descriptionZh,
  url: source.url,
  relatedObjectIds: sourceObjectIds(source.id),
  group: source.sourceType,
  usedFor: source.usedFor,
  reliabilityNote: source.reliabilityNote
}));

export const sourceEdges: SourceEdge[] = [
  {
    from: "Archive / Museum / Library",
    to: "Exhibition object",
    relation: "direct archive citation",
    note: "Wellcome Collection、Library of Congress、The Met、M+ 与 University of Bristol 等机构记录直接支撑多数 verified archive source 展品。"
  },
  {
    from: "Photographer / Estate / Gallery",
    to: "Exhibition object",
    relation: "near-source project trail",
    note: "摄影师官网、estate、画廊或项目页用于说明作品链条，但授权未清时只作为 linked source 展示。"
  },
  {
    from: "Secondary visual trail",
    to: "Photographer / Estate / Gallery",
    relation: "lead for further tracing",
    note: "Flashbak 等二级页面用于发现线索，之后继续回到摄影师、馆藏或项目页。"
  },
  {
    from: "Further reading",
    to: "Exhibition method",
    relation: "contextual reading",
    note: "Public Domain Review 等来源用于理解图像复制和公共领域语境，不替代具体展品的馆藏记录。"
  }
];

export const gallerySourceFlows: GallerySourceFlow[] = galleries.map((gallery) => {
  const galleryObjects = objects.filter((object) => object.galleryId === gallery.id);
  const gallerySources = sources.filter((source) => galleryObjects.some((object) => object.sourceId === source.id));
  const primarySources = uniqueSourceIds(
    gallerySources.filter((source) => source.sourceType !== "Secondary visual trail" && source.sourceType !== "Further reading")
  );
  const secondaryTrails = uniqueSourceIds(gallerySources.filter((source) => source.sourceType === "Secondary visual trail"));

  return {
    galleryId: gallery.id,
    galleryTitle: gallery.title,
    galleryTitleEn: gallery.titleEn,
    galleryNumber: gallery.number,
    primarySources,
    secondaryTrails,
    objectIds: galleryObjects.map((object) => object.id),
    statusCounts: countByStatus(galleryObjects),
    note:
      secondaryTrails.length > 0
        ? "本展厅同时保留二级视觉线索，并继续指向更接近摄影师或档案记录的路径。"
        : "本展厅主要通过机构馆藏、大学项目、摄影师项目或画廊/estate 路径进入展览。"
  };
});
