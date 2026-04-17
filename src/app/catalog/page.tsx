import Link from "next/link";
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
      "Boxer briefs, trunks, briefs, boxers, jockstraps, and long johns — with pattern codes and fit guides.",
  },
  {
    no: "02",
    title: "Fabric & Yarn Catalog",
    description:
      "Cotton, modal, bamboo, seamless yarns, and performance blends. Weight, stretch, and composition specs.",
  },
  {
    no: "03",
    title: "Trim & Packaging Options",
    description:
      "Waistband jacquards, woven labels, hang tags, poly bags, and printed box options — with cost tiers.",
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
    title: "Case Studies",
    description:
      "Past OEM/ODM projects across the US, EU, and APAC — what was built, at what volume, in what timeline.",
  },
];

const stats = [
  { value: "68", label: "Pages" },
  { value: "140+", label: "SKUs on file" },
  { value: "22", label: "Fabric options" },
  { value: "9", label: "Packaging tiers" },
];

export default function CatalogPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Download Catalog
              </p>
              <h1 className="mt-4 text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                The full product library, in one PDF.
              </h1>
              <p className="mt-5 text-neutral-600 leading-relaxed text-base lg:text-lg">
                Silhouettes, fabrics, trim options, production capability, and
                case studies — everything your team needs to plan an underwear
                line with us.
              </p>

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

            {/* Mock PDF preview card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] rounded-2xl bg-neutral-900 overflow-hidden shadow-xl">
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brand-yellow">
                      Catalog · 2026
                    </p>
                    <p className="mt-8 text-xl font-semibold tracking-tight leading-tight">
                      ABSTRACT MAN
                      <br />
                      Product &amp; Capability
                      <br />
                      Reference
                    </p>
                  </div>
                  <div>
                    <div className="h-px w-12 bg-brand-yellow" />
                    <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
                      Confidential for evaluation use.
                      <br />
                      Zhongshan · Guangdong · China
                    </p>
                  </div>
                </div>
                {/* decorative grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="catalog-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#catalog-grid)" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-2">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-white border border-neutral-200 p-3 text-center">
                    <p className="text-lg font-semibold tracking-tight text-neutral-900">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the catalog */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Inside the Catalog
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Six reference sections, structured for sourcing teams.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {sections.map((s) => (
              <div key={s.no}>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-medium">
                  {s.no}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-900/70">
                Request the Catalog
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-[1.15]">
                Tell us who you are — we&apos;ll email the PDF.
              </h2>
              <p className="mt-5 text-neutral-900/80 leading-relaxed">
                The catalog is confidential and sent individually. We use your
                email to share the file and nothing else — no newsletters, no
                marketing automation.
              </p>
            </div>

            <form
              className="lg:col-span-6 bg-white rounded-2xl p-8 lg:p-10 shadow-lg"
              method="post"
              action="/api/catalog"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="catalog-name"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Your name
                  </label>
                  <input
                    id="catalog-name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="catalog-company"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Company / Brand
                  </label>
                  <input
                    id="catalog-company"
                    name="company"
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                    placeholder="Your brand"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="catalog-email"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Business email
                  </label>
                  <input
                    id="catalog-email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="catalog-role"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    What are you working on?
                  </label>
                  <select
                    id="catalog-role"
                    name="role"
                    defaultValue=""
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Launching a new brand</option>
                    <option>Adding a category to an existing brand</option>
                    <option>Sourcing for a wholesaler / distributor</option>
                    <option>Private label / retailer</option>
                    <option>Evaluating suppliers</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3.5 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                Email me the catalog
              </button>
              <p className="mt-4 text-xs text-neutral-500 text-center">
                We reply within one working day with the PDF attached.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
