import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Briefs",
    slug: "briefs",
    meta: "Style 001",
    description:
      "Classic high-cut. Smooth knit, seamless waistband, minimal profile under trousers.",
  },
  {
    name: "Boxer Briefs",
    slug: "boxer-briefs",
    meta: "Style 002",
    description:
      "Mid-thigh length. Most-requested category — compression, modal, and pima cotton fits.",
  },
  {
    name: "Trunks",
    slug: "trunks",
    meta: "Style 003",
    description:
      "Short cut, snug fit. Contemporary silhouette for athletic and fashion-led lines.",
  },
  {
    name: "Seamless Series",
    slug: "seamless",
    meta: "Style 004",
    description:
      "Circular-knit seamless construction. Zero side seams, antibacterial yarns, and compression-capable fits.",
  },
  {
    name: "Modal Series",
    slug: "modal",
    meta: "Style 005",
    description:
      "MicroModal™ and TENCEL™ blends. Premium hand-feel and color-fast dye for DTC-grade positioning.",
  },
  {
    name: "Performance Series",
    slug: "performance",
    meta: "Style 006",
    description:
      "Moisture-wicking nylon/spandex, mesh panels, and reinforced stitching. Built for active and sportswear labels.",
  },
];

export default function ProductSpecialization() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Product Specialization
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            Six core categories, engineered in-house.
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            Three foundational silhouettes and three specialized fabric lines.
            Each category carries its own pattern library, approved fabric
            partners, and tolerance spec.
          </p>
        </div>

        {/* Product grid */}
        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((p) => (
            <li key={p.slug} className="group">
              {/* Blueprint card */}
              <div className="relative aspect-square overflow-hidden border border-neutral-200 bg-[#fafaf5]">
                <Image
                  src={`/images/product-${p.slug}.svg`}
                  alt={`${p.name} blueprint`}
                  width={400}
                  height={400}
                  className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                {/* corner meta badge */}
                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.18em] text-neutral-500 bg-white/70 backdrop-blur-sm px-2 py-1">
                  {p.meta}
                </span>
              </div>

              {/* Card meta */}
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                  {p.name}
                </h3>
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  Inquire &rarr;
                </Link>
              </div>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {p.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
