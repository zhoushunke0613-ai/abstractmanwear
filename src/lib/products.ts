/** Fabrics the factory has run in bulk for brand programs; copy lives under ProductsPage.fabric_<key>. */
export type FabricKey = "coolmax" | "silkModal" | "modal50s";

type Product = {
  slug: string;
  /** Name and tagline live in the ProductSpecialization translations under `key` and `${key}Tag`. */
  key: string;
  style: string;
  leadDays: string;
  fabrics: readonly FabricKey[];
};

/**
 * The six men's categories, in the order buyers see them in the nav,
 * footer, homepage, and products page.
 */
export const PRODUCTS: readonly Product[] = [
  { slug: "boxer-briefs", key: "boxerBriefs", style: "Style 002", leadDays: "25–30", fabrics: [] },
  { slug: "trunks", key: "trunks", style: "Style 003", leadDays: "25–30", fabrics: [] },
  { slug: "briefs", key: "briefs", style: "Style 001", leadDays: "25–30", fabrics: ["coolmax"] },
  { slug: "seamless", key: "seamless", style: "Style 004", leadDays: "30–35", fabrics: [] },
  { slug: "modal", key: "modal", style: "Style 005", leadDays: "25–30", fabrics: ["silkModal", "modal50s"] },
  { slug: "performance", key: "performance", style: "Style 006", leadDays: "30–35", fabrics: ["coolmax"] },
];

/** Anchors on /products after the six categories, shared by the header and footer menus. */
export const PRODUCT_EXTRAS = [
  { slug: "womens-kids", labelKey: "womensKids" },
  { slug: "cases", labelKey: "cases" },
] as const;
