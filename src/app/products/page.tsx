import Link from "next/link";
import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import { products, categories } from "@/data/products";

const categoryNotes: Record<string, string> = {
  "boxer-briefs": "The everyday essential — modal, cotton, bamboo.",
  briefs: "Classical cut, combed cotton, reinforced band.",
  trunks: "Shorter inseam, tailored, no-roll waistband.",
  sport: "Engineered knits for high-output wear.",
};

const categoryPlates: Record<string, string> = {
  "boxer-briefs": "/images/plate-boxer-brief.svg",
  briefs: "/images/plate-brief.svg",
  trunks: "/images/plate-trunk.svg",
  sport: "/images/plate-sport.svg",
};

const productPlates: Record<string, string> = {
  "modal-boxer-brief": "/images/plate-boxer-brief.svg",
  "ice-silk-boxer": "/images/plate-seamless.svg",
  "cotton-brief": "/images/plate-brief.svg",
  "micro-modal-trunk": "/images/plate-trunk.svg",
  "sport-performance": "/images/plate-sport.svg",
  "bamboo-boxer": "/images/plate-functional.svg",
};

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

const materialGroups = [
  {
    title: "Fabric Library",
    items: [
      "Combed cotton",
      "Modal · Micro-modal",
      "Bamboo viscose",
      "Nylon · Polyamide",
      "Recycled polyester",
      "Ice-silk blends",
    ],
  },
  {
    title: "Functional Treatments",
    items: [
      "Moisture-wicking",
      "Antibacterial finish",
      "Cooling / thermoregulation",
      "Quick-dry",
      "Four-way stretch",
      "OEKO-TEX® compliant",
    ],
  },
  {
    title: "Performance Profile",
    items: [
      "Breathability",
      "Hand-feel",
      "Recovery & retention",
      "Seam durability",
      "Colour-fastness",
      "Waistband stability",
    ],
  },
];

const customizationItems = [
  { key: "Waistband", note: "Jacquard, print, tape, woven label" },
  { key: "Fabric", note: "From our library or sourced to brief" },
  { key: "Colour", note: "Pantone matched, lab-dip approved" },
  { key: "Fit & Pattern", note: "Adjusted or developed from scratch" },
  { key: "Size Range", note: "XS–3XL, plus Asia/EU/US sizing" },
  { key: "Label & Tag", note: "Woven, printed, heat-transfer" },
  { key: "Packaging", note: "Poly bag to retail hangsell" },
];

const developmentTracks = [
  {
    title: "From a Sample",
    body: "Send a reference garment. We reverse-pattern, match fabric, and return a first proto within 10 working days.",
  },
  {
    title: "From a Tech Pack",
    body: "Full measurement set and construction notes translated into sealed samples for brand approval.",
  },
  {
    title: "From a Brief",
    body: "Our patterns and fabric library as a starting point — adapted to your fit block, palette, and market.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Our Products."
        lede="Men's essentials in four primary cuts, extensible by fabric, construction, and finish. Every style is a development platform — ready for OEM, ODM, or private-label programs."
      />

      {/* ———————————————————————————————————————————————— */}
      {/* I. CATEGORY INDEX                                    */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Categories"
            title={"Four primary cuts."}
            lede="Each category is a platform — ready for your fabric, fit, and finishing choices."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {categories.map((cat, i) => {
              const count = products.filter((p) => p.category === cat.id).length;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="group relative aspect-[3/4] overflow-hidden bg-[var(--color-paper)] transition-all duration-500"
                >
                  <img
                    src={categoryPlates[cat.id] ?? "/images/plate-boxer-brief.svg"}
                    alt={`${cat.name.en} — category plate`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-paper)]/95" />
                  <div className="absolute top-0 left-0 right-0 p-6 lg:p-8 flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                      {count.toString().padStart(2, "0")}&nbsp;SKU
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-graphite)] mb-2 opacity-80">
                      Category plate
                    </p>
                    <h3 className="font-display text-2xl lg:text-3xl text-[var(--color-ink)] leading-tight">
                      {cat.name.en}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-[1.5] max-w-[28ch]">
                      {categoryNotes[cat.id] ?? ""}
                    </p>
                    <span className="mt-5 inline-block text-xs text-[var(--color-ink)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      See styles&nbsp;↓
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* II. STYLE INDEX — by category                        */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Product lineup"
            title={"Representative styles."}
            lede="Programs from the development floor. Each is available to license, re-spec, or use as a starting block for your own."
          />

          <div className="space-y-20 lg:space-y-28">
            {categories.map((cat) => {
              const styles = products.filter((p) => p.category === cat.id);
              if (styles.length === 0) return null;
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="scroll-mt-28 lg:scroll-mt-32"
                >
                  <div className="flex items-baseline justify-between pb-6 mb-10 lg:mb-12 border-b border-[var(--color-rule)]">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                        {cat.id.replace("-", " ")}
                      </span>
                      <h3 className="font-display text-3xl lg:text-5xl text-[var(--color-ink)]">
                        {cat.name.en}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] hidden md:block">
                      {styles.length.toString().padStart(2, "0")} styles
                    </span>
                  </div>

                  <ol className="divide-y divide-[var(--color-rule)]">
                    {styles.map((p, i) => (
                      <li
                        key={p.id}
                        className="group grid grid-cols-12 gap-6 lg:gap-8 py-10 lg:py-14 items-start"
                      >
                        <div className="col-span-12 lg:col-span-4">
                          <figure className="relative aspect-[4/5] overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper)]">
                            <img
                              src={productPlates[p.id] ?? categoryPlates[p.category] ?? "/images/plate-boxer-brief.svg"}
                              alt={`${p.name.en} — plate`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </figure>
                        </div>

                        <div className="col-span-12 lg:col-span-4">
                          <span className="font-mono text-[10px] text-[var(--color-taupe)]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h4 className="mt-3 font-display text-2xl lg:text-3xl text-[var(--color-ink)] leading-tight">
                            {p.name.en}
                          </h4>
                          {p.featured && (
                            <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-terracotta)] border border-[var(--color-terracotta)]/40 px-2 py-1">
                              House pick
                            </span>
                          )}
                          <p className="mt-5 text-sm lg:text-base text-[var(--color-ink-soft)] leading-[1.6] max-w-[42ch]">
                            {p.description.en}
                          </p>
                        </div>

                        <dl className="col-span-12 lg:col-span-4 divide-y divide-[var(--color-rule)] border-t lg:border-t-0 border-[var(--color-rule)]">
                          <div className="flex items-baseline gap-6 py-3 lg:py-4">
                            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] w-24 shrink-0">
                              Fabric
                            </dt>
                            <dd className="text-sm text-[var(--color-ink)] leading-[1.5]">
                              {p.material}
                            </dd>
                          </div>
                          <div className="flex items-baseline gap-6 py-3 lg:py-4">
                            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] w-24 shrink-0">
                              Sizes
                            </dt>
                            <dd className="text-sm text-[var(--color-ink)] tabular-nums">
                              {p.sizes.join(" · ")}
                            </dd>
                          </div>
                          <div className="flex items-baseline gap-6 py-3 lg:py-4">
                            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] w-24 shrink-0">
                              Colours
                            </dt>
                            <dd className="text-sm text-[var(--color-ink)] leading-[1.5]">
                              {p.colors.join(", ")}
                            </dd>
                          </div>
                          <div className="flex items-baseline gap-6 py-3 lg:py-4">
                            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] w-24 shrink-0">
                              Ref
                            </dt>
                            <dd className="font-mono text-xs text-[var(--color-graphite)] tabular-nums">
                              {p.id.toUpperCase()}
                            </dd>
                          </div>
                        </dl>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* III. MATERIALS                                       */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Materials"
            title={"Fabric & finishing options."}
            lede="Three pillars: what we weave from, what we treat it with, what the finished piece must do."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {materialGroups.map((group, gi) => (
              <div
                key={group.title}
                className="bg-[var(--color-paper)] p-10 lg:p-12"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-4">
                  {String(gi + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl text-[var(--color-ink)] leading-tight">
                  {group.title}
                </h3>
                <ul className="mt-8 divide-y divide-[var(--color-rule)]">
                  {group.items.map((item, i) => (
                    <li
                      key={item}
                      className="py-3 flex items-baseline gap-5 text-sm text-[var(--color-ink-soft)]"
                    >
                      <span className="font-mono text-[10px] text-[var(--color-taupe)] tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* IV. CUSTOMIZATION SCOPE                              */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Customization"
            title={"What you can customize."}
            lede="Seven areas. Any combination, scaled to your MOQ and timeline."
          />

          <ol className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
            {customizationItems.map((item, i) => (
              <li
                key={item.key}
                className="grid grid-cols-12 gap-8 py-8 lg:py-10 items-baseline"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-xs text-[var(--color-taupe)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <h4 className="font-display text-xl lg:text-2xl text-[var(--color-ink)]">
                    {item.key}
                  </h4>
                </div>
                <div className="col-span-12 lg:col-span-7">
                  <p className="text-sm lg:text-base text-[var(--color-ink-soft)] leading-[1.6] max-w-[55ch]">
                    {item.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* V. DEVELOPMENT ENTRY POINTS                          */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Development"
            title={"Three ways to begin."}
            lede="The first prototype leaves our workshop in 10–14 working days, whichever route you take."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {developmentTracks.map((track, i) => (
              <article
                key={track.title}
                className="bg-[var(--color-paper)] p-10 lg:p-12 min-h-[280px] flex flex-col justify-between"
              >
                <p className="font-display text-5xl lg:text-7xl text-[var(--color-terracotta)] leading-none">
                  {romanNumerals[i]}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-[var(--color-ink)]">
                    {track.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-[1.55] max-w-[36ch]">
                    {track.body}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-block text-xs text-[var(--color-ink)] link-rule"
                  >
                    Start this route&nbsp;→
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* VI. CTA                                              */}
      {/* ———————————————————————————————————————————————— */}
      <CTASection
        eyebrow="Contact"
        title={"Request our full catalog."}
        lede="A printed catalog of fabrics, fits, and finishes — with sealed samples on request. Sent by courier, fully trackable."
        ctas={[
          { label: "Request catalog", href: "/contact", variant: "primary" },
          { label: "Ask about a specific style", href: "/contact", variant: "secondary" },
          { label: "Send a tech pack", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
