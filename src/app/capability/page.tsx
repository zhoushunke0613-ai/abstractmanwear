import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";
import CTASection from "@/components/sections/CTASection";

const stats = [
  { value: "12,000", unit: "m²", label: "Facility area" },
  { value: "480", unit: "+", label: "Staff on floor" },
  { value: "24", unit: "lines", label: "Sewing capacity" },
  { value: "5 M", unit: "pcs", label: "Monthly output" },
  { value: "15", unit: "yrs", label: "In operation" },
];

const production = [
  { title: "Cutting", body: "Automatic spreaders & CAD-linked cutters. 5,000 pcs/day bulk capacity." },
  { title: "Sewing", body: "24 calibrated lines. Flatlock, cover-stitch, overlock, double-needle." },
  { title: "Finishing", body: "Labelling, trimming, steam-press, turning. Discrete QC pass." },
  { title: "Packing", body: "Poly bags, hangsell, retail boxing. Carton specs to your buyer portal." },
];

const development = [
  { title: "Pattern room", body: "Four master pattern makers. Asia/EU/US block libraries." },
  { title: "Sampling", body: "First proto inside 10 working days. Three free revisions." },
  { title: "Fabric sourcing", body: "80+ mills, vetted annually. Fabric card maintained monthly." },
  { title: "Fit lab", body: "Live fit sessions with house fit model. Video archive available." },
];

const qc = [
  { code: "QC·01", title: "Incoming material", body: "Weight, shrinkage, colourfastness, seam strength." },
  { code: "QC·02", title: "Inline patrol", body: "Hourly rounds. Defective pieces pulled and logged." },
  { code: "QC·03", title: "End-of-line AQL", body: "AQL 2.5 per ANSI/ASQ Z1.4. Major/minor split tracked." },
  { code: "QC·04", title: "Needle detection", body: "Every carton passed through metal-detect gate at 1.2 mm." },
  { code: "QC·05", title: "Final audit", body: "Third-party audit available on request (SGS · Intertek · BV)." },
];

const supplyChain = [
  { title: "Material reserve", body: "Rolling 60-day inventory of core yardage — cotton, modal, bamboo." },
  { title: "Trim depot", body: "Waistbands, labels, packaging co-stocked with long-lead items." },
  { title: "Scheduling", body: "Weekly production plan shared with client portal. MRP on Odoo." },
  { title: "Dispatch", body: "FOB Nansha · Shekou. CIF available. Typical 28–42 days bulk." },
];

const certifications = [
  { code: "ISO 9001", title: "Quality management", note: "Certified 2017 · re-audited biennially" },
  { code: "BSCI", title: "Social compliance", note: "Grade A · last audit Feb 2026" },
  { code: "OEKO-TEX®", title: "Standard 100 · product class I", note: "Skin-contact certified, full library" },
];

export default function CapabilityPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capability"
        title={"Manufacturing capability."}
        lede="A 12,000 m² factory with 24 sewing lines under one roof. Calibrated production, stocked fabric reserves, and a five-stage inspection process — audited by BSCI and ISO 9001."
      />

      {/* I — NUMBERS */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-paper-warm)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[var(--color-rule)]">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-12 lg:py-16 ${i === 0 ? "pr-6 lg:pr-10" : "px-6 lg:px-10"}`}
              >
                <p className="font-display text-3xl lg:text-5xl text-[var(--color-ink)] leading-none">
                  {s.value}
                  <span className="ml-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-taupe)] align-middle">
                    {s.unit}
                  </span>
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mt-3">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* II — FACILITY PLAN */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
            <div className="col-span-12 lg:col-span-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-6">
                Facility
              </p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-[var(--color-ink)]">
                One roof,
                <br />
                <span className="text-[var(--color-graphite)]">seven departments.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="text-[var(--color-ink-soft)] text-base leading-[1.6]">
                Shaxi district, Zhongshan. Cutting, sewing, sampling, finishing, packing, and dispatch all in-house — nothing outsourced, nothing untraceable.
              </p>
            </div>
          </div>

          <figure className="relative aspect-[16/9] overflow-hidden border border-[var(--color-rule)]">
            <img
              src="/images/facility.svg"
              alt="Facility plan — Shaxi, Zhongshan"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* III — PRODUCTION */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Production"
            title={"Calibrated production lines."}
            lede="Every line is maintained to a published specification. Needles changed on schedule, tension tested daily, operator grade posted at each station."
          />

          <ol className="divide-y divide-[var(--color-rule)]">
            {production.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-12 gap-8 py-10 lg:py-12 items-baseline"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-xs text-[var(--color-taupe)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="font-display text-2xl lg:text-3xl text-[var(--color-ink)] leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-7">
                  <p className="text-base text-[var(--color-ink-soft)] leading-[1.6] max-w-[55ch]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* IV — DEVELOPMENT */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Development"
            title={"Our development team."}
            lede="Four functions, each led by a dedicated master — not rotated, not pooled."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {development.map((d, i) => (
              <article
                key={d.title}
                className="bg-[var(--color-paper)] p-8 lg:p-10 min-h-[240px] flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl lg:text-2xl text-[var(--color-ink)] leading-tight">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-[1.55]">
                    {d.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* V — QC */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Quality control"
            title={"Five-stage inspection."}
            lede="Five inspection stages from raw fabric to sealed carton. Every defect logged against the operator and the machine."
          />

          <ol className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
            {qc.map((q) => (
              <li
                key={q.code}
                className="grid grid-cols-12 gap-8 py-8 lg:py-10 items-baseline"
              >
                <div className="col-span-12 lg:col-span-2">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-terracotta)]">
                    {q.code}
                  </span>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <h4 className="font-display text-xl lg:text-2xl text-[var(--color-ink)] leading-tight">
                    {q.title}
                  </h4>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <p className="text-sm lg:text-base text-[var(--color-ink-soft)] leading-[1.55] max-w-[55ch]">
                    {q.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VI — SUPPLY CHAIN */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Supply chain"
            title={"Stocked, scheduled, shipped."}
            lede="Core fabrics held in rolling reserve. Production slotted weeks ahead. Dispatch coordinated with your freight forwarder."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {supplyChain.map((item, i) => (
              <article
                key={item.title}
                className="bg-[var(--color-paper)] p-8 lg:p-10 min-h-[240px] flex flex-col justify-between"
              >
                <p className="font-display text-4xl text-[var(--color-terracotta)] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-xl lg:text-2xl text-[var(--color-ink)] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-[1.55]">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VII — CERTIFICATIONS */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Certifications"
            title={"Annually audited."}
            lede="Three active certifications. Audit reports available under NDA."
          />

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {certifications.map((c) => (
              <li
                key={c.code}
                className="bg-[var(--color-paper)] p-10 lg:p-14 min-h-[280px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-28 h-28 rounded-full border border-[var(--color-terracotta)] flex items-center justify-center mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-terracotta)] text-center leading-tight px-2">
                    {c.code}
                  </span>
                </div>
                <h3 className="font-display text-xl lg:text-2xl text-[var(--color-ink)]">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-[1.55] max-w-[32ch]">
                  {c.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Visit us"
        title={"Visit our factory, or send a brief."}
        lede="We host buyer visits Monday–Friday. For those who can't come in person, a detailed factory profile is available on request."
        ctas={[
          { label: "Request factory profile", href: "/contact", variant: "primary" },
          { label: "Book a visit", href: "/contact", variant: "secondary" },
          { label: "Start a program", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
