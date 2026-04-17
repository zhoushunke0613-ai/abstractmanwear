import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Briefs",
    slug: "briefs",
    meta: "Style 001",
    tagline: "Compact support for everyday comfort",
    moq: "300 pcs",
    leadTime: "25–30 days",
  },
  {
    name: "Boxer Briefs",
    slug: "boxer-briefs",
    meta: "Style 002",
    tagline:
      "Mid-thigh length with balanced coverage, the bestseller category",
    moq: "300 pcs",
    leadTime: "25–30 days",
  },
  {
    name: "Trunks",
    slug: "trunks",
    meta: "Style 003",
    tagline: "Shorter leg for contemporary lifestyle and fashion-forward lines",
    moq: "300 pcs",
    leadTime: "25–30 days",
  },
  {
    name: "Seamless Series",
    slug: "seamless",
    meta: "Style 004",
    tagline: "Bonded and ultrasonic-cut construction, zero visible lines",
    moq: "500 pcs",
    leadTime: "30–35 days",
  },
  {
    name: "Modal Series",
    slug: "modal",
    meta: "Style 005",
    tagline:
      "MicroModal and TENCEL\u2122 blends for premium hand-feel at outlet-friendly MOQs",
    moq: "300 pcs",
    leadTime: "25–30 days",
  },
  {
    name: "Performance Series",
    slug: "performance",
    meta: "Style 006",
    tagline:
      "Moisture-wicking compression, mesh panels, and reinforced stitching for athletic lines",
    moq: "500 pcs",
    leadTime: "30–35 days",
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
                {p.tagline}
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                MOQ: {p.moq} · Lead time: {p.leadTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
