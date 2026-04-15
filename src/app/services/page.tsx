import Link from "next/link";
import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";
import CTASection from "@/components/sections/CTASection";

const services = [
  {
    n: "01",
    tag: "OEM",
    title: "OEM Manufacturing",
    body: "Brand-specified production on calibrated lines. We hold the standard of your tech pack from first cut to final bag — bill-of-materials, trim, stitching class, and packaging governed by the sealed sample.",
    bullets: ["Tech-pack review and feasibility", "Sealed-sample production programs", "Inline AQL 2.5 · needle detection", "Export packing & documentation"],
    plate: "/images/plate-boxer-brief.svg",
  },
  {
    n: "02",
    tag: "ODM",
    title: "ODM Development",
    body: "Original design and development from concept to production. Our patterns, fabric library, and fit blocks — adapted to your palette and market, released under your brand.",
    bullets: ["Concept sketches and mood decks", "Pattern & fit-block development", "Fabric sourcing from vetted mills", "Range-planning by price tier"],
    plate: "/images/plate-trunk.svg",
  },
  {
    n: "03",
    tag: "PL",
    title: "Private Label",
    body: "Market-ready programs. Existing patterns, your label. Waistband, hangtag, and packaging branded to your identity — shipped in weeks, not quarters.",
    bullets: ["Stock-pattern library access", "Custom waistband jacquard", "Retail-ready hangsell options", "MOQ scaled to channel"],
    plate: "/images/plate-modal.svg",
  },
];

const samplingSteps = [
  { n: "01", title: "Brief received", body: "Tech pack, reference sample, or description. Fabric & trim shortlisted same day." },
  { n: "02", title: "First proto", body: "Pattern cut, fabric ordered, proto sewn within 10 working days." },
  { n: "03", title: "Fit & revise", body: "Your feedback applied. Up to three revisions at no cost." },
  { n: "04", title: "Sealed sample", body: "Approved, sealed, catalogued. Governs every subsequent bulk order." },
];

const scope = [
  "Waistband",
  "Fabric",
  "Colour",
  "Fit / Pattern",
  "Size Range",
  "Label & Tag",
  "Packaging",
];

const clients = [
  { label: "Startup brands", note: "MOQ 500 · 3 sizes" },
  { label: "Established brands", note: "MOQ 2,000 · full range" },
  { label: "Wholesalers", note: "Stock programs · repeat" },
  { label: "Distributors", note: "Regional exclusives" },
  { label: "Importers", note: "Container loads · FOB" },
  { label: "Cross-border sellers", note: "Fast-turn · e-commerce" },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Our services."
        lede="Three cooperation models — OEM, ODM, Private Label — supported by sampling, sourcing, and packaging. Every program is scoped to your MOQ, channel, and timeline."
      />

      {/* I, II, III — COOPERATION MODELS */}
      {services.map((s, i) => (
        <section
          key={s.tag}
          className={`py-32 lg:py-40 ${i % 2 === 0 ? "" : "bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]"}`}
        >
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <div className={`grid grid-cols-12 gap-8 lg:gap-16 items-start ${i % 2 === 1 ? "lg:[&>.plate]:order-2" : ""}`}>
              <figure className="plate col-span-12 lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-[var(--color-rule)]">
                <img
                  src={s.plate}
                  alt={`${s.title} — plate`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </figure>

              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-display text-4xl text-[var(--color-terracotta)]">
                    {s.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                    {s.tag}
                  </span>
                </div>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-[var(--color-ink)]">
                  {s.title}
                </h2>
                <p className="mt-8 text-base lg:text-lg text-[var(--color-ink-soft)] leading-[1.6] max-w-[55ch]">
                  {s.body}
                </p>

                <ul className="mt-10 divide-y divide-[var(--color-rule)] border-t border-[var(--color-rule)]">
                  {s.bullets.map((b, bi) => (
                    <li key={b} className="py-4 flex items-baseline gap-6">
                      <span className="font-mono text-[10px] text-[var(--color-taupe)] tabular-nums">
                        {String(bi + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm lg:text-base text-[var(--color-ink)]">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link href="/contact" className="text-sm text-[var(--color-ink)] link-rule">
                    Start a {s.tag} project&nbsp;→
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* IV — SAMPLING */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Sampling"
            title={"Four weeks to an approved sample."}
            lede="The workshop moves in fixed cycles. Most programs are signed off within four weeks of the first brief."
          />

          <ol className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {samplingSteps.map((step) => (
              <li
                key={step.n}
                className="bg-[var(--color-paper)] p-8 lg:p-10 min-h-[240px] flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-xl lg:text-2xl text-[var(--color-ink)] leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-[1.55]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* V — SCOPE */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Customization"
            title={"What you can customize."}
            lede="Seven areas. Any combination. Any brand. Any channel."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {scope.map((item, i) => (
              <div
                key={item}
                className="bg-[var(--color-paper)] aspect-square flex flex-col justify-between p-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base lg:text-lg text-[var(--color-ink)] leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VI — CLIENTS */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Clients"
            title={"Who we work with."}
            lede="Volumes scale from tens of pieces to full containers. Programs scale from single SKUs to full seasonal ranges."
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {clients.map((c, i) => (
              <li
                key={c.label}
                className="bg-[var(--color-paper)] p-8 lg:p-10 min-h-[180px] flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-xl lg:text-2xl text-[var(--color-ink)] leading-tight">
                    {c.label}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                    {c.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Contact"
        title={"Start a project."}
        lede="Send us a brief, a sample, or a tech pack. We reply within one business day — in English, Mandarin, or Japanese."
        ctas={[
          { label: "Start an OEM project", href: "/contact", variant: "primary" },
          { label: "Send a tech pack", href: "/contact", variant: "secondary" },
          { label: "Ask about private label", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
