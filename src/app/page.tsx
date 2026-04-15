import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

const capabilities = [
  { n: "01", title: "Product Development", body: "From reference sample or technical pack. Fit patterns, trims, and fabric sourcing matched to brief." },
  { n: "02", title: "OEM Manufacturing", body: "Brand-specified production on calibrated lines. Output held to the standard of the tech pack." },
  { n: "03", title: "ODM Development", body: "Original development from concept to production — our patterns, your brand." },
  { n: "04", title: "Private Label", body: "Market-ready programs with waistband, label, and packaging branded to your identity." },
  { n: "05", title: "Custom Packaging", body: "From basic poly bags to retail-ready hangsell and brand-experience boxing." },
];

const categories = [
  { n: "01", name: "Boxer Briefs", note: "Modal, cotton, bamboo", plate: "/images/plate-boxer-brief.svg" },
  { n: "02", name: "Trunks", note: "Short inseam, tailored fit", plate: "/images/plate-trunk.svg" },
  { n: "03", name: "Briefs", note: "Classical — combed cotton", plate: "/images/plate-brief.svg" },
  { n: "04", name: "Seamless", note: "3D knit, no-shadow", plate: "/images/plate-seamless.svg" },
  { n: "05", name: "Modal Series", note: "Micro-modal, luxe hand", plate: "/images/plate-modal.svg" },
  { n: "06", name: "Functional", note: "Moisture-wicking, sport", plate: "/images/plate-functional.svg" },
];

const process = [
  { n: "01", title: "Inquiry", body: "Brief, volume, timing." },
  { n: "02", title: "Review", body: "Requirements confirmed." },
  { n: "03", title: "Sampling", body: "Fit and construction." },
  { n: "04", title: "Approval", body: "Sign-off on sealed sample." },
  { n: "05", title: "Production", body: "Calibrated lines, in-line QC." },
  { n: "06", title: "Inspection & Ship", body: "Final AQL, needle detection, packing." },
];

const differentiators = [
  "Specialised exclusively in men's underwear.",
  "Stable supply of modal, cotton, and bamboo fabrics.",
  "OEM, ODM, and private-label programs supported.",
  "Multi-stage quality control to international norms.",
  "Sampling room for rapid development iterations.",
  "Flexible MOQs — from startup brands to wholesalers.",
];

export default function Home() {
  return (
    <>
      {/* ———————————————————————————————————————————————— */}
      {/* 0. TRUST BAR — dark stats ribbon (hoisted to top)    */}
      {/* ———————————————————————————————————————————————— */}
      <section className="bg-[var(--color-ink)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
            {[
              { k: "ISO · BSCI", label: "Certifications" },
              { k: "5 M", label: "Monthly capacity (pcs)" },
              { k: "12,000 m²", label: "Facility area" },
              { k: "480+", label: "Staff" },
              { k: "OEM · ODM", label: "Cooperation modes" },
            ].map((it, i) => (
              <div key={it.label} className={`py-8 lg:py-10 ${i === 0 ? "pr-6 lg:pr-10" : "px-6 lg:px-10"}`}>
                <p className="font-display text-2xl lg:text-4xl text-[var(--color-yellow)] leading-none">
                  {it.k}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 mt-3">
                  {it.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yellow ticker strip — announcement-style accent band */}
      <section className="bg-[var(--color-yellow)] py-4 overflow-hidden border-y border-[var(--color-ink)]/15">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink)]">
            <span>★ Specialised in men&apos;s underwear since 2010</span>
            <span className="hidden md:inline">★ Zhongshan · Guangdong</span>
            <span className="hidden md:inline">★ ISO 9001 · BSCI · OEKO-TEX®</span>
            <span className="hidden lg:inline">★ Worldwide shipping</span>
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* I. HERO                                              */}
      {/* ———————————————————————————————————————————————— */}
      <section className="relative pt-10 lg:pt-14 pb-16 lg:pb-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Headline + body — tight 7/5 grid */}
          <div className="grid grid-cols-12 gap-8 items-start rise-in" style={{ animationDelay: "50ms" }}>
            <div className="col-span-12 lg:col-span-7">
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-[-0.01em] text-[var(--color-ink)]">
                <span className="inline-block bg-[var(--color-yellow)] text-[var(--color-ink)] px-3 py-0.5 mr-2">Abstractman</span>
                <br className="lg:hidden" />
                <span className="text-[var(--color-graphite)]">Professional Underwear</span>
                <br />
                <span>OEM/ODM Manufacturer.</span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
              <p className="text-base lg:text-lg text-[var(--color-ink-soft)] leading-[1.6] max-w-[44ch]">
                Specialist manufacturer of men&apos;s underwear for international brands, wholesalers, and retailers. Everything developed, sampled, and inspected under one roof in Zhongshan.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[var(--color-ink)] text-[var(--color-paper)] px-8 py-4 text-sm hover:bg-[var(--color-yellow)] hover:text-[var(--color-ink)] transition-colors duration-500"
                >
                  <span>Request a quote</span>
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
                <Link href="/products" className="text-sm text-[var(--color-ink)] link-rule">
                  View products
                </Link>
              </div>
            </div>
          </div>

          {/* Fabric library strip — decorative, after CTA */}
          <div className="mt-12 lg:mt-16 rise-in" aria-hidden style={{ animationDelay: "200ms" }}>
            <img
              src="/images/hero-lineup.svg"
              alt=""
              className="w-full h-auto opacity-85"
            />
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* II. PRODUCT INDEX — moved up for B2B scanability     */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-16 lg:py-24 border-t border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8 mb-10 lg:mb-12 items-end">
            <div className="col-span-12 lg:col-span-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-3">
                Products
              </p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-[var(--color-ink)]">
                Our product range.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="text-[var(--color-ink-soft)] text-sm lg:text-base leading-[1.55] max-w-[40ch]">
                Six primary categories. Extensible by fabric, construction, and finish — for wholesale programs and private-label lines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {categories.map((c) => (
              <Link
                key={c.name}
                href="/products"
                className="group relative aspect-[3/4] overflow-hidden bg-[var(--color-paper)] transition-all duration-500"
              >
                <img
                  src={c.plate}
                  alt={`${c.name} — editorial plate`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-paper)]/95" />
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-graphite)] mb-2 opacity-80">
                    {c.n} · Category
                  </p>
                  <h3 className="font-display text-lg lg:text-xl text-[var(--color-ink)] leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-taupe)]">
                    {c.note}
                  </p>
                  <span className="mt-3 inline-block text-xs text-[var(--color-ink-soft)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-right">
            <Link href="/products" className="text-sm text-[var(--color-ink)] link-rule">
              See all products&nbsp;→
            </Link>
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* III. CAPABILITIES — services list                    */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8 mb-10 lg:mb-12 pb-6 border-b border-[var(--color-rule)]">
            <div className="col-span-12 lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                Services
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-[var(--color-ink)]">
                What we offer.
              </h2>
            </div>
          </div>

          <ol className="divide-y divide-[var(--color-rule)]">
            {capabilities.map((cap) => (
              <li key={cap.n} className="group grid grid-cols-12 gap-8 py-6 lg:py-8 items-center hover:bg-[var(--color-paper-warm)]/60 transition-colors duration-500 -mx-4 px-4">
                <div className="col-span-2 lg:col-span-1">
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-[var(--color-yellow)] font-mono text-xs text-[var(--color-ink)] font-medium group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-yellow)] transition-colors duration-500">
                    {cap.n}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="font-display text-xl lg:text-2xl text-[var(--color-ink)] leading-tight">
                    {cap.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                  <p className="text-sm text-[var(--color-ink-soft)] leading-[1.55] max-w-[55ch]">
                    {cap.body}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-1 lg:col-start-12 text-right">
                  <span className="inline-block text-[var(--color-taupe)] group-hover:text-[var(--color-yellow)] group-hover:translate-x-1 transition-all duration-500">
                    →
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* V. DIFFERENTIATORS — quiet text composition          */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-20 lg:py-28 bg-[var(--color-yellow)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink)]/65 mb-4">
                Why choose us
              </p>
              <p className="font-display text-2xl lg:text-3xl leading-tight text-[var(--color-ink)]">
                Why Abstract.
              </p>
            </div>

            <ul className="col-span-12 lg:col-span-9 lg:col-start-4 divide-y divide-[var(--color-ink)]/15">
              {differentiators.map((line, i) => (
                <li key={line} className="py-4 lg:py-5 flex items-baseline gap-8">
                  <span className="font-mono text-[10px] text-[var(--color-ink)]/55 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg lg:text-2xl leading-snug text-[var(--color-ink)] max-w-[40ch]">
                    {line}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* VI. PROCESS — roman numerals as design              */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8 mb-10 lg:mb-12">
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center lg:text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-3">
                Our process
              </p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-[var(--color-ink)]">
                From brief to shipment.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {process.map((p, i) => {
              const tones = [
                { bg: "bg-[var(--color-paper)]", numeral: "text-[var(--color-yellow)]", title: "text-[var(--color-ink)]", body: "text-[var(--color-ink-soft)]" },
                { bg: "bg-[var(--color-yellow)]", numeral: "text-[var(--color-ink)]", title: "text-[var(--color-ink)]", body: "text-[var(--color-ink)]/75" },
                { bg: "bg-[var(--color-ink)]", numeral: "text-[var(--color-yellow)]", title: "text-[var(--color-paper)]", body: "text-white/65" },
              ];
              const t = tones[i % 3];
              return (
                <div key={p.n} className={`${t.bg} p-6 lg:p-8 min-h-[180px] flex flex-col justify-between`}>
                  <p className={`font-display text-4xl lg:text-5xl ${t.numeral} leading-none`}>
                    {p.n}
                  </p>
                  <div>
                    <h3 className={`font-display text-lg lg:text-xl ${t.title}`}>
                      {p.title}
                    </h3>
                    <p className={`mt-1.5 text-xs lg:text-sm ${t.body} leading-[1.45]`}>
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* VII. CLOSING — CTA                                   */}
      {/* ———————————————————————————————————————————————— */}
      <CTASection
        tone="dark"
        eyebrow="Contact"
        title={"Start your project."}
        lede="Send us a brief, a sample, or a tech pack. We reply within one business day — in English, Mandarin, or Japanese."
        ctas={[
          { label: "Request a quote", href: "/contact", variant: "primary" },
          { label: "Send a sample or tech pack", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
