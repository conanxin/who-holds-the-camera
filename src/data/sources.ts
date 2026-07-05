export type SourceKind =
  | "Archive / Museum / Library"
  | "Photographer / Estate / Gallery"
  | "Secondary visual trail"
  | "Further reading";

export interface ExhibitionSource {
  id: string;
  name: string;
  kind: SourceKind;
  url: string;
  note: string;
}

export const sources: ExhibitionSource[] = [
  {
    id: "wellcome",
    name: "Wellcome Collection",
    kind: "Archive / Museum / Library",
    url: "https://wellcomecollection.org/works?query=John%20Thomson%20China",
    note: "John Thomson China works, including wet-collodion glass negatives and albumen print records."
  },
  {
    id: "hpc-bristol",
    name: "University of Bristol / Historical Photographs of China",
    kind: "Archive / Museum / Library",
    url: "https://hpcbristol.net/",
    note: "Chinese photography collections including the Fu Bingchang photographs and Republican-era albums."
  },
  {
    id: "loc",
    name: "Library of Congress",
    kind: "Archive / Museum / Library",
    url: "https://www.loc.gov/",
    note: "Genthe Collection, Toni Frissell photographs, and public catalogue records for China and overseas Chinese images."
  },
  {
    id: "met",
    name: "The Metropolitan Museum of Art",
    kind: "Archive / Museum / Library",
    url: "https://www.metmuseum.org/art/collection/search?q=Ten+Bamboo+Studio+Manual",
    note: "Public-domain leaves from the Ten Bamboo Studio Manual of Painting and Calligraphy."
  },
  {
    id: "blue-lotus",
    name: "Blue Lotus Gallery / Fan Ho Estate",
    kind: "Photographer / Estate / Gallery",
    url: "https://bluelotus-gallery.com/artists/31-fan-ho/",
    note: "Estate and gallery reference for Fan Ho's Hong Kong street photographs. Linked only unless rights are cleared."
  },
  {
    id: "mplus",
    name: "M+ Collection",
    kind: "Archive / Museum / Library",
    url: "https://www.mplus.org.hk/en/collection/objects/approaching-shadow-2015446/",
    note: "Museum collection record for Fan Ho's Approaching Shadow. The record verifies the object while copyright remains with Fan Ho."
  },
  {
    id: "greg-girard",
    name: "Greg Girard",
    kind: "Photographer / Estate / Gallery",
    url: "https://www.greggirard.com/",
    note: "Artist project pages for Hong Kong, Kowloon Walled City, neon, ports, and Asian night city work."
  },
  {
    id: "city-darkness",
    name: "City of Darkness",
    kind: "Photographer / Estate / Gallery",
    url: "https://cityofdarkness.co.uk/",
    note: "Project and publication site for Greg Girard and Ian Lambot's Kowloon Walled City work."
  },
  {
    id: "nowicki",
    name: "Simon Nowicki / China 1982",
    kind: "Photographer / Estate / Gallery",
    url: "https://simonnowicki.blogspot.com/p/china-1982.html",
    note: "Photographer-hosted China 1982 trail, paired with Flickr records where available. Linked only; no images copied."
  },
  {
    id: "flashbak",
    name: "Flashbak",
    kind: "Secondary visual trail",
    url: "https://flashbak.com/a-westerners-photographs-of-china-1982-423867/",
    note: "Used as a secondary visual trail and topic prompt, not as the final archive authority."
  },
  {
    id: "pdr",
    name: "Public Domain Review",
    kind: "Further reading",
    url: "https://publicdomainreview.org/",
    note: "Contextual public-domain research trail for printed books, visual culture, and image reproduction history."
  }
];
