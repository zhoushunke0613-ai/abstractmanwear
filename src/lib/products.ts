/** Fabrics the factory has run in bulk for brand programs; copy lives under ProductsPage.fabric_<key>. */
export type FabricKey =
  | "coolmax"
  | "silkModal"
  | "modal50s"
  | "modal92"
  | "modalRib"
  | "modalMesh"
  | "cotton"
  | "cottonModal"
  | "nylon";

type Product = {
  slug: string;
  /** Name and tagline live in the ProductSpecialization translations under `key` and `${key}Tag`. */
  key: string;
  leadDays: string;
  fabrics: readonly FabricKey[];
};

/**
 * The six men's categories, in the order buyers see them in the nav,
 * footer, homepage, and products page.
 */
export const PRODUCTS: readonly Product[] = [
  { slug: "boxer-briefs", key: "boxerBriefs", leadDays: "25–30", fabrics: ["modal92", "modalMesh", "cottonModal"] },
  { slug: "trunks", key: "trunks", leadDays: "25–30", fabrics: [] },
  { slug: "briefs", key: "briefs", leadDays: "25–30", fabrics: ["coolmax"] },
  { slug: "seamless", key: "seamless", leadDays: "30–35", fabrics: [] },
  { slug: "modal", key: "modal", leadDays: "25–30", fabrics: ["modalMesh", "silkModal", "modal50s"] },
  { slug: "performance", key: "performance", leadDays: "30–35", fabrics: ["coolmax", "nylon"] },
];

/** The four fabric families most export orders use, with the specs produced in each. */
export const FABRIC_GROUPS: readonly { id: string; specs: readonly FabricKey[] }[] = [
  { id: "modalGroup", specs: ["modal92", "modalRib", "modalMesh", "silkModal"] },
  { id: "cottonGroup", specs: ["cotton", "cottonModal"] },
  { id: "bambooGroup", specs: [] },
  { id: "nylonGroup", specs: ["nylon"] },
];

/** Anchors on /products after the six categories, shared by the header and footer menus. */
export const PRODUCT_EXTRAS = [
  { slug: "womens-kids", labelKey: "womensKids" },
  { slug: "fabrics", labelKey: "fabrics" },
  { slug: "cases", labelKey: "cases" },
] as const;
