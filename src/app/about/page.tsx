import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";
import CTASection from "@/components/sections/CTASection";

const pillars = [
  {
    title: "Specialists, not generalists.",
    body: "A single category, treated with the care it deserves. Men's underwear — nothing else. Every pattern, every supplier, every operator on the line is tuned to this one garment.",
  },
  {
    title: "A focused service range.",
    body: "Product development, OEM, ODM, private label, packaging. No side contracts, no off-topic work. The turnaround stays short and the quality standard stays consistent across the floor.",
  },
  {
    title: "Everything under one roof.",
    body: "Development, pattern room, calibrated production lines, inspection, dispatch — all at one facility in Zhongshan. Nothing is subcontracted, so nothing is untraceable.",
  },
];

const philosophy = [
  {
    n: "01",
    title: "Pattern before price.",
    body: "Fit is solved in development before a quote is honored. A garment that rolls at the waistband or binds at the thigh is not a win — whatever the unit cost looks like.",
  },
  {
    n: "02",
    title: "Material over marketing.",
    body: "We buy from mills we've worked with for a decade. No white-label fabric stories, no mystery blends. Every yardage is traceable to a certificate.",
  },
  {
    n: "03",
    title: "The approved sample is the contract.",
    body: "Once signed off, the sealed sample governs every subsequent shipment. Deviations are investigated, not excused.",
  },
];

const teams = [
  { role: "Development", note: "Patterns, fit blocks, trim sourcing, sample room." },
  { role: "Production", note: "Cutting, sewing, finishing — calibrated lines." },
  { role: "Quality", note: "Inline AQL, needle detection, final sign-off." },
  { role: "Client Service", note: "English, Mandarin, Japanese correspondence." },
];

const markets = [
  { n: "01", label: "International brands", note: "EU · UK · US · AU" },
  { n: "02", label: "Wholesale & distribution", note: "Multi-brand programmes" },
  { n: "03", label: "Private-label operators", note: "Retail & e-commerce" },
  { n: "04", label: "Hospitality & uniforms", note: "Standard-issue volumes" },
];

const milestones = [
  { year: "2010", title: "Founded", note: "Zhongshan atelier — three sewing lines, men's briefs only." },
  { year: "2014", title: "Pattern room expanded", note: "In-house fit-block development added for international briefs." },
  { year: "2017", title: "BSCI · ISO 9001", note: "Social-compliance and quality-system audits passed." },
  { year: "2020", title: "12,000 m² facility", note: "Consolidated production under one roof in Shaxi district." },
  { year: "2023", title: "OEKO-TEX® Standard 100", note: "Full fabric library certified for skin-contact use." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="About Abstract."
        lede="Abstract is a specialist men's underwear manufacturer — one category, one facility, one standard. We develop, sample, produce, and inspect in-house, in Shaxi, Zhongshan."
      />

      {/* I — PILLARS */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Our position"
            title={"Three premises."}
            lede="What we choose to do, and what we choose not to."
          />

          <ol className="divide-y divide-[var(--color-rule)]">
            {pillars.map((p, i) => (
              <li
                key={p.title}
                className="grid grid-cols-12 gap-8 py-12 lg:py-16 items-baseline"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-xs text-[var(--color-taupe)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-5">
                  <h3 className="font-display text-2xl lg:text-4xl text-[var(--color-ink)] leading-tight">
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <p className="text-base lg:text-lg text-[var(--color-ink-soft)] leading-[1.6] max-w-[55ch]">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* II — PROVENANCE (with atelier plate) */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-6">
                Our story
              </p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-[var(--color-ink)]">
                From one workshop
                <br />
                <span className="text-[var(--color-graphite)]">to a factory.</span>
              </h2>

              <figure className="mt-12 relative aspect-[4/5] overflow-hidden border border-[var(--color-rule)]">
                <img
                  src="/images/atelier.svg"
                  alt="Atelier — Zhongshan workroom, 2010"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </figure>
            </div>

            <ol className="col-span-12 lg:col-span-6 lg:col-start-7 divide-y divide-[var(--color-rule)]">
              {milestones.map((m) => (
                <li key={m.year} className="grid grid-cols-12 gap-6 py-8">
                  <div className="col-span-4 lg:col-span-3">
                    <p className="font-display text-3xl lg:text-4xl text-[var(--color-ink)] tabular-nums">
                      {m.year}
                    </p>
                  </div>
                  <div className="col-span-8 lg:col-span-9">
                    <h4 className="font-display text-xl text-[var(--color-ink)] leading-tight">
                      {m.title}
                    </h4>
                    <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-[1.55] max-w-[42ch]">
                      {m.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* III — PHILOSOPHY */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Principles"
            title={"Our principles."}
            lede="A short list. Non-negotiable."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {philosophy.map((p) => (
              <article
                key={p.title}
                className="bg-[var(--color-paper)] p-10 lg:p-12 min-h-[300px] flex flex-col justify-between"
              >
                <p className="font-display text-5xl lg:text-7xl text-[var(--color-terracotta)] leading-none">
                  {p.n}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-[var(--color-ink)] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-[1.55]">
                    {p.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IV — TEAMS */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-6">
                Our team
              </p>
              <p className="font-display text-3xl lg:text-4xl leading-tight text-[var(--color-ink)]">
                Four teams,
                <br />
                <span className="text-[var(--color-graphite)]">one standard.</span>
              </p>
            </div>

            <ul className="col-span-12 lg:col-span-9 lg:col-start-4 divide-y divide-[var(--color-rule)]">
              {teams.map((t, i) => (
                <li
                  key={t.role}
                  className="py-6 lg:py-8 grid grid-cols-12 gap-6 items-baseline"
                >
                  <span className="col-span-2 lg:col-span-1 font-mono text-[10px] text-[var(--color-taupe)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="col-span-10 md:col-span-4 font-display text-2xl text-[var(--color-ink)]">
                    {t.role}
                  </h4>
                  <p className="col-span-12 md:col-span-7 text-sm lg:text-base text-[var(--color-ink-soft)] leading-[1.55]">
                    {t.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* V — MARKETS */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Clients"
            title={"Who we work with."}
            lede="Partners across four continents. Contracts in English, Mandarin, and Japanese."
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {markets.map((m) => (
              <li
                key={m.label}
                className="bg-[var(--color-paper)] p-10 lg:p-12 min-h-[220px] flex flex-col justify-between"
              >
                <span className="font-display text-5xl text-[var(--color-terracotta)] leading-none">
                  {m.n}
                </span>
                <div>
                  <p className="font-display text-xl text-[var(--color-ink)] leading-tight">
                    {m.label}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                    {m.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Next"
        title={"Explore what we do."}
        ctas={[
          { label: "See our services", href: "/services", variant: "primary" },
          { label: "View capability", href: "/capability", variant: "secondary" },
          { label: "Contact us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
