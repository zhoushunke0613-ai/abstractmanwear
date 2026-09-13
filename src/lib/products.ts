/**
 * The six product categories, in the order buyers see them in the nav,
 * footer, homepage, and products page. Names and taglines live in the
 * ProductSpecialization translations under `key` and `${key}Tag`.
 */
export const PRODUCTS = [
  { slug: "boxer-briefs", key: "boxerBriefs", style: "Style 002", leadDays: "25–30" },
  { slug: "trunks", key: "trunks", style: "Style 003", leadDays: "25–30" },
  { slug: "briefs", key: "briefs", style: "Style 001", leadDays: "25–30" },
  { slug: "seamless", key: "seamless", style: "Style 004", leadDays: "30–35" },
  { slug: "modal", key: "modal", style: "Style 005", leadDays: "25–30" },
  { slug: "performance", key: "performance", style: "Style 006", leadDays: "30–35" },
] as const;
