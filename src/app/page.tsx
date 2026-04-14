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
  { n: "01", name: "Boxer Briefs", note: "Modal, cotton, bamboo" },
  { n: "02", name: "Trunks", note: "Short inseam, tailored fit" },
  { n: "03", name: "Briefs", note: "Classical — combed cotton" },
  { n: "04", name: "Seamless", note: "3D knit, no-shadow" },
  { n: "05", name: "Modal Series", note: "Micro-modal, luxe hand" },
  { n: "06", name: "Functional", note: "Moisture-wicking, sport" },
];

const process = [
  { n: "I", title: "Inquiry", body: "Brief, volume, timing." },
  { n: "II", title: "Review", body: "Requirements confirmed." },
  { n: "III", title: "Sampling", body: "Fit and construction." },
  { n: "IV", title: "Approval", body: "Sign-off on sealed sample." },
  { n: "V", title: "Production", body: "Calibrated lines, in-line QC." },
  { n: "VI", title: "Inspection & Ship", body: "Final AQL, needle detection, packing." },
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
      {/* I. HERO                                              */}
      {/* ———————————————————————————————————————————————— */}
      <section className="relative pt-40 lg:pt-56 pb-24 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Running head */}
          <div className="flex items-baseline justify-between pb-8 border-b border-[var(--color-rule)] mb-16 lg:mb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
              Vol. I — The Manufactory
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] hidden md:block">
              Shenzhen&nbsp;·&nbsp;Guangdong
            </p>
          </div>

          {/* Headline composition — asymmetric */}
          <div className="grid grid-cols-12 gap-8 items-end rise-in" style={{ animationDelay: "50ms" }}>
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display text-[clamp(3.5rem,12vw,12rem)] leading-[0.92] tracking-[-0.02em] text-[var(--color-ink)]">
                Considered
                <br />
                essentials,
                <br />
                <span className="italic text-[var(--color-graphite)]">made to measure.</span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:pb-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                § Introducing
              </p>
              <p className="text-base lg:text-lg text-[var(--color-ink-soft)] leading-[1.55] max-w-[38ch]">
                Abstract is a specialist manufactory producing men&apos;s underwear for international brands, wholesalers, and private-label partners — developed, sampled, and inspected under one roof.
              </p>
              <div className="flex gap-8 items-center mt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[var(--color-ink)] text-[var(--color-paper)] px-8 py-4 text-sm"
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

          {/* Hero figure — archival card instead of generic image */}
          <div className="grid grid-cols-12 gap-8 mt-20 lg:mt-28 rise-in" style={{ animationDelay: "250ms" }}>
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <figure className="placeholder-plate aspect-[16/9] flex items-center justify-center">
                <figcaption className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] z-10">
                  Plate&nbsp;I — Atelier
                </figcaption>
                <div className="relative z-10 text-center px-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-4">
                    Image placeholder
                  </p>
                  <p className="font-display text-2xl lg:text-3xl text-[var(--color-ink-soft)] italic leading-tight max-w-[40ch] mx-auto">
                    Wide shot of workroom — operators at the line, natural light, soft focus.
                  </p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-graphite)]">
                    Suggested ratio 16:9&nbsp;·&nbsp;≥ 2400 × 1350 px
                  </p>
                </div>
                <p className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] z-10">
                  1.1
                </p>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* II. TRUST BAR                                        */}
      {/* ———————————————————————————————————————————————— */}
      <section className="border-y border-[var(--color-rule)] bg-[var(--color-paper-warm)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[var(--color-rule)]">
            {[
              { k: "ISO · BSCI", label: "Certifications" },
              { k: "5 M", label: "Monthly capacity (pcs)" },
              { k: "12,000 m²", label: "Facility area" },
              { k: "480+", label: "Staff" },
              { k: "OEM · ODM", label: "Cooperation modes" },
            ].map((it, i) => (
              <div key={it.label} className={`py-10 lg:py-14 ${i === 0 ? "pr-6 lg:pr-10" : "px-6 lg:px-10"}`}>
                <p className="font-display text-2xl lg:text-4xl text-[var(--color-ink)] leading-none">
                  {it.k}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mt-3">
                  {it.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* III. CAPABILITIES — editorial list                   */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8 mb-20 pb-6 border-b border-[var(--color-rule)]">
            <div className="col-span-12 lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                § II — Works
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-[var(--color-ink)]">
                Five disciplines,
                <br />
                <span className="italic text-[var(--color-graphite)]">one manufactory.</span>
              </h2>
            </div>
          </div>

          <ol className="divide-y divide-[var(--color-rule)]">
            {capabilities.map((cap) => (
              <li key={cap.n} className="group grid grid-cols-12 gap-8 py-10 lg:py-12 items-baseline hover:bg-[var(--color-paper-warm)]/60 transition-colors duration-500 -mx-4 px-4">
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-xs text-[var(--color-taupe)]">
                    {cap.n}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="font-display text-2xl lg:text-4xl text-[var(--color-ink)] leading-tight">
                    {cap.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                  <p className="text-sm lg:text-base text-[var(--color-ink-soft)] leading-[1.6] max-w-[55ch]">
                    {cap.body}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-1 lg:col-start-12 text-right">
                  <span className="inline-block text-[var(--color-taupe)] group-hover:text-[var(--color-terracotta)] group-hover:translate-x-1 transition-all duration-500">
                    →
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* IV. PRODUCT INDEX                                    */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-32 lg:py-48 border-t border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8 mb-20 items-end">
            <div className="col-span-12 lg:col-span-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-6">
                § III — Catalogue
              </p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tight text-[var(--color-ink)]">
                The essential index.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="text-[var(--color-ink-soft)] text-base leading-[1.6] max-w-[40ch]">
                Six primary categories, extensible by fabric, construction, and finish. Developed for wholesale programs and premium private-label lines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {categories.map((c) => (
              <Link
                key={c.name}
                href="/products"
                className="group relative placeholder-plate aspect-[3/4] flex flex-col justify-between p-6 lg:p-8 transition-all duration-500 hover:bg-[var(--color-paper-warm)]/80"
              >
                <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                  {c.n}
                </span>
                <div className="relative z-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-graphite)] mb-3 opacity-70">
                    Product plate
                  </p>
                  <h3 className="font-display text-xl lg:text-2xl text-[var(--color-ink)] leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-taupe)]">
                    {c.note}
                  </p>
                  <span className="mt-4 inline-block text-xs text-[var(--color-ink-soft)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-right">
            <Link href="/products" className="text-sm text-[var(--color-ink)] link-rule">
              Complete index&nbsp;→
            </Link>
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* V. DIFFERENTIATORS — quiet text composition          */}
      {/* ———————————————————————————————————————————————— */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-6">
                § IV — Notes on craft
              </p>
              <p className="font-display text-3xl lg:text-4xl leading-tight text-[var(--color-ink)]">
                Why Abstract.
              </p>
            </div>

            <ul className="col-span-12 lg:col-span-9 lg:col-start-4 divide-y divide-[var(--color-rule)]">
              {differentiators.map((line, i) => (
                <li key={line} className="py-6 lg:py-8 flex items-baseline gap-8">
                  <span className="font-mono text-[10px] text-[var(--color-taupe)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-2xl lg:text-[2.25rem] leading-tight text-[var(--color-ink)] max-w-[32ch]">
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
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8 mb-24">
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center lg:text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-4">
                § V — The passage from brief to ship
              </p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-[var(--color-ink)]">
                <span className="italic text-[var(--color-graphite)]">Six</span> stages,
                <br />
                deliberately set.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {process.map((p) => (
              <div key={p.n} className="bg-[var(--color-paper)] p-10 lg:p-12 min-h-[260px] flex flex-col justify-between">
                <p className="font-display text-5xl lg:text-7xl text-[var(--color-terracotta)] leading-none">
                  {p.n}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-[1.5]">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ———————————————————————————————————————————————— */}
      {/* VII. CLOSING — CTA                                   */}
      {/* ———————————————————————————————————————————————— */}
      <CTASection
        eyebrow="§ VI — Correspondence"
        title={"Begin the conversation."}
        lede="Send a brief, a sample, or a tech pack. We reply within one business day, in the language of your choosing."
        ctas={[
          { label: "Request a quote", href: "/contact", variant: "primary" },
          { label: "Send a sample or tech pack", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
