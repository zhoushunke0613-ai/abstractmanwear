import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Catalog — Abstract Man",
  description:
    "Download the Abstract Man product catalog. Full men's underwear OEM/ODM portfolio with fabrics, silhouettes, and MOQs.",
};

const sections = [
  {
    no: "01",
    title: "Silhouette Library",
    description:
      "Boxer briefs, trunks, briefs, seamless series, modal series, and performance constructions \u2014 with fit notes and reference directions.",
  },
  {
    no: "02",
    title: "Fabric & Material Options",
    description:
      "Cotton, modal, bamboo, and performance blends. Weight, stretch, composition specs, and minimum yardage notes.",
  },
  {
    no: "03",
    title: "Trim & Packaging Options",
    description:
      "Waistband jacquards, woven labels, hang tags, poly bags, and printed box options \u2014 with cost tiers.",
  },
  {
    no: "04",
    title: "Production Capability",
    description:
      "Machine list, monthly capacity, lead time breakdowns, and quality inspection flow.",
  },
  {
    no: "05",
    title: "Certifications & Compliance",
    description:
      "BSCI and SLCP assessment summaries. Social and labor compliance documentation.",
  },
  {
    no: "06",
    title: "Project References",
    description:
      "Past OEM/ODM projects across the US, EU, and APAC \u2014 product types, volumes, and timelines.",
  },
];

const stats = [
  { value: "60+", label: "Pages" },
  { value: "100+", label: "SKU references" },
  { value: "20+", label: "Fabric options" },
];

const productInterests = [
  "Boxer Briefs",
  "Trunks",
  "Briefs",
  "Seamless Series",
  "Modal Series",
  "Performance Series",
  "Private Label Packaging",
  "Not Sure Yet",
];

export default function CatalogPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Download Catalog
              </p>
              <h1 className="mt-3 text-2xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                The full product library, in one PDF.
              </h1>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                Silhouettes, fabric options, trim details, production
                capabilities, and key sourcing information &mdash; everything
                your team needs to evaluate a project with us.
              </p>

              {/* Inline stats */}
              <div className="mt-8 flex items-center gap-6">
                {stats.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-6">
                    <div>
                      <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                        {s.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                        {s.label}
                      </p>
                    </div>
                    {i < stats.length - 1 && (
                      <div className="w-px h-8 bg-neutral-200" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="#download"
                  className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
                >
                  Request the PDF
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-white/70 backdrop-blur-md border border-neutral-300 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
                >
                  Talk to our team
                </Link>
              </div>
            </div>

            {/* Catalog cover */}
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/catalog-cover.png"
                  alt="Abstract Man product catalog cover — underwear samples with fabric rolls and tools"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the catalog — cards with borders */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Inside the Catalog
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Six reference sections, structured for sourcing teams.
            </h2>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 lg:mt-12 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:snap-none">
            {sections.map((s) => (
              <div
                key={s.no}
                className="w-[70vw] max-w-[260px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 lg:p-6 transition-colors hover:border-brand-yellow/60"
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-brand-yellow font-semibold">
                  {s.no}
                </p>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email gate / download */}
      <section
        id="download"
        className="border-b border-neutral-200 bg-brand-yellow scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-900/60">
                Request the Catalog
              </p>
              <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-[1.15]">
                Tell us where to send the catalog.
              </h2>
              <p className="mt-4 text-neutral-900/70 leading-relaxed text-sm">
                We&apos;ll send the catalog directly to your inbox. No
                newsletters or automated marketing sequences.
              </p>
            </div>

            <form
              className="lg:col-span-6 lg:col-start-7 bg-white rounded-2xl p-8 lg:p-10 shadow-lg"
              method="post"
              action="/api/catalog"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="catalog-name"
                    className="block text-xs text-neutral-500"
                  >
                    Your name *
                  </label>
                  <input
                    id="catalog-name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="catalog-company"
                    className="block text-xs text-neutral-500"
                  >
                    Company / Brand
                  </label>
                  <input
                    id="catalog-company"
                    name="company"
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 transition-colors"
                    placeholder="Your brand"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="catalog-email"
                    className="block text-xs text-neutral-500"
                  >
                    Business email *
                  </label>
                  <input
                    id="catalog-email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="catalog-interest"
                    className="block text-xs text-neutral-500"
                  >
                    What are you looking to develop?
                  </label>
                  <select
                    id="catalog-interest"
                    name="interest"
                    defaultValue=""
                    className="mt-2 block w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 transition-colors"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {productInterests.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                Email me the catalog
              </button>
              <p className="mt-3 text-xs text-neutral-400 text-center">
                We typically reply within one working day with the PDF attached.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
