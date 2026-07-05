import type { ExhibitionObject } from "./objects";

export const statusLabel: Record<ExhibitionObject["status"], string> = {
  "verified archive source": "Verified archive source",
  "secondary source only": "Secondary source only",
  "rights unclear": "Rights unclear",
  "placeholder pending replacement": "Placeholder pending replacement"
};

const projectSourceIds = new Set(["blue-lotus", "greg-girard", "city-darkness", "nowicki", "fan-ho-estate"]);

export function getStatusClass(status: ExhibitionObject["status"]) {
  return status.replace(/\s+/g, "-");
}

export function getObjectHref(object: Pick<ExhibitionObject, "id">) {
  return `/objects/${object.id}/`;
}

export function getSourceHref(object: ExhibitionObject) {
  return object.originalArchiveUrl || object.sourceUrl;
}

export function getSourceLabel(object: ExhibitionObject) {
  return projectSourceIds.has(object.sourceId) ? "查看项目页" : "查看来源";
}

export function getArchiveLabel(object: ExhibitionObject) {
  return object.originalArchiveUrl === object.sourceUrl ? "查看原始记录" : "查看馆藏";
}

export function getObjectRecordDescription(object: ExhibitionObject, galleryTitle: string) {
  return `本展展品记录：${object.title}。所属 Gallery：${galleryTitle}。来源状态：${statusLabel[object.status]}。`;
}
