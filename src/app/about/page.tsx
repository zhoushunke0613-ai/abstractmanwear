import Link from "next/link";
import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About — Abstract Man",
  description:
    "Abstract Man: 20 years of men's underwear manufacturing in Zhongshan, China. BSCI & SLCP certified, serving global brands across 25+ countries.",
};

const milestones = [
  { year: "2006", event: "Founded in Zhongshan, Guangdong, China" },
  {
    year: "2010",
    event: "Expanded to 1,500 m\u00B2 with cut-and-sew lines",
  },
  {
    year: "2014",
    event: "Added seamless knitting production capability",
  },
  {
    year: "2017",
    event: "Moved to current 3,000 m\u00B2 facility, 100+ staff",
  },
  { year: "2019", event: "BSCI audit passed, SLCP verified" },
  {
    year: "2022",
    event: "Serving 25+ countries, 500,000 pcs/month capacity",
  },
  {
    year: "2024",
    event: "ODM design library expanded to 100+ validated styles",
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "AQL 2.5 on every shipment. Metal detection on every piece. No shortcuts on materials, stitching, or inspection \u2014 regardless of order size.",
  },
  {
    title: "Transparency",
    description:
      "Itemized quotes within 24 hours. Production schedules shared in advance. Photo packs and inspection reports before dispatch. No hidden costs.",
  },
  {
    title: "Flexibility",
    description:
      "500 pieces or 50,000 \u2014 same line, same QC standard. OEM and ODM in the same PO. We adapt to how you work, not the other way around.",
  },
  {
    title: "Reliability",
    description:
      "20 years of on-time delivery. Documented workflows at every stage. When we commit to a date, we deliver on that date.",
  },
  {
    title: "Partnership",
    description:
      "We don\u2019t just fill orders \u2014 we develop products. Fabric recommendations, fit improvements, cost engineering. Your success is our repeat business.",
  },
  {
    title: "Compliance",
    description:
      "BSCI and SLCP verified. Fair wages, safe conditions, documented hours. International buyers can onboard us without running a separate audit cycle.",
  },
];

const markets = [
  {
    region: "North America",
    countries: "United States, Canada",
    note: "Private label and DTC brands",
  },
  {
    region: "Europe",
    countries: "UK, Germany, France, Netherlands, Nordics",
    note: "Multi-season programs for established brands",
  },
  {
    region: "Asia-Pacific",
    countries: "Japan, Australia, South Korea",
    note: "Premium positioning with local fit adaptation",
  },
  {
    region: "Middle East & Africa",
    countries: "UAE, Saudi Arabia, South Africa",
    note: "Wholesale and distribution partnerships",
  },
  {
    region: "Latin America",
    countries: "Brazil, Mexico, Chile",
    note: "Growing DTC and marketplace channels",
  },
];

const teamRoles = [
  {
    role: "Sales & Account Management",
    description:
      "Your single point of contact from inquiry to shipment. Fluent in English and Mandarin.",
    image: {
      label: "Sales Team",
      description:
        "Sales and account management team at desks with samples and laptops",
    },
  },
  {
    role: "Design & Development",
    description:
      "Pattern makers, graders, and sample sewers. CAD-based design with physical prototype validation.",
    image: {
      label: "Design Team",
      description:
        "Designers working on patterns and tech packs at workstations with fabric samples",
    },
  },
  {
    role: "Production & QC",
    description:
      "Line supervisors, machine operators, and QC inspectors. Every piece passes through trained hands.",
    image: {
      label: "Production Team",
      description:
        "Production floor workers and line supervisors coordinating at sewing stations",
    },
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                About Us
              </p>
              <h1 className="mt-3 text-2xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                20 years making one thing well.
              </h1>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                Abstract Man is a men&apos;s underwear manufacturer based in
                Zhongshan, Guangdong, China. We design, develop, and produce
                men&apos;s underwear &mdash; and only men&apos;s underwear
                &mdash; for brands, retailers, and distributors worldwide.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
                >
                  Work with us
                </Link>
                <Link
                  href="/capability"
                  className="rounded-full bg-white/70 backdrop-blur-md border border-neutral-300 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
                >
                  Tour the facility
                </Link>
              </div>
            </div>

            {/* Team / factory photo */}
            <div className="lg:col-span-5 lg:col-start-8">
              <ImagePlaceholder
                label="Team Photo"
                description="Abstract Man team photo — founders and key staff standing in front of the factory entrance"
                className="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our story + timeline */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Our Story
              </p>
              <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
                From a small workshop to a full-scale facility.
              </h2>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                We started in 2006 with a small cut-and-sew operation and a
                clear focus: men&apos;s underwear only. That focus has never
                changed. Over 20 years we&apos;ve invested in seamless knitting
                lines, expanded to a 3,000 m&sup2; integrated facility, built a
                team of 100+ specialists, and earned BSCI and SLCP
                certifications.
              </p>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                Today we serve brands across 25+ countries &mdash; from
                first-time DTC startups testing 500-piece capsules to global
                retailers running multi-season programs at 50,000 pieces per
                order.
              </p>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative border-l-2 border-neutral-200 pl-6 lg:pl-8 space-y-6 lg:space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[calc(1.5rem+5px)] lg:-left-[calc(2rem+5px)] top-1 h-2 w-2 rounded-full bg-brand-yellow" />
                    <p className="text-xs uppercase tracking-[0.15em] text-brand-yellow font-semibold">
                      {m.year}
                    </p>
                    <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Our Values
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              What we stand behind on every order.
            </h2>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:snap-none">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="w-[72vw] max-w-[280px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink rounded-xl border border-neutral-200 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-yellow/60 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-xs font-semibold text-neutral-900">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Our Team
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              100+ people, one product focus.
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              From sales to sewing, every team member is trained on men&apos;s
              underwear construction. No rotating factory lines, no shared
              capacity with unrelated products.
            </p>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {teamRoles.map((t) => (
              <div
                key={t.role}
                className="border border-neutral-200 rounded-2xl overflow-hidden"
              >
                <ImagePlaceholder
                  label={t.image.label}
                  description={t.image.description}
                  className="aspect-[5/3] rounded-none border-0 border-b"
                />
                <div className="p-6 lg:p-8">
                  <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                    {t.role}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets we serve */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Global Reach
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Shipping to 25+ countries across five regions.
            </h2>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:snap-none">
            {markets.map((m) => (
              <div
                key={m.region}
                className="w-[60vw] max-w-[220px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink bg-white border border-neutral-200 rounded-2xl p-5 lg:p-6 transition-all duration-300 hover:border-brand-yellow hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="h-1 w-8 bg-brand-yellow" />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-neutral-900">
                  {m.region}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {m.countries}
                </p>
                <p className="mt-2 text-xs text-neutral-400">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Certifications
              </p>
              <h2 className="mt-3 text-xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
                Audited, documented, and ready to onboard.
              </h2>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                BSCI and SLCP verified. Our social compliance documentation
                meets the requirements of major global retailers and
                import/sourcing platforms &mdash; saving you from running a
                separate vendor audit.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "BSCI audit passed \u2014 third-party verified",
                  "SLCP Converged Assessment Framework verified",
                  "AQL 2.5 pre-shipment inspection standard",
                  "Metal detection on 100% of production",
                  "Full export documentation (CI, PL, COO, BL/AWB)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 space-y-4">
              <ImagePlaceholder
                label="BSCI Certificate"
                description="Scanned BSCI audit certificate or official BSCI badge"
                className="aspect-[3/2]"
              />
              <ImagePlaceholder
                label="SLCP Certificate"
                description="Scanned SLCP verification certificate or official SLCP badge"
                className="aspect-[3/2]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Let&apos;s build something together.
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-900/70 leading-relaxed">
              Whether you&apos;re launching your first line or scaling an
              existing bestseller &mdash; we&apos;re ready to be your production
              partner.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                Start your project &rarr;
              </Link>
              <Link
                href="/catalog"
                className="rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
              >
                Download catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
