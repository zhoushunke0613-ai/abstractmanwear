import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Services — Abstract Man",
  description:
    "OEM manufacturing, ODM development, fabric sourcing, sampling, and private-label packaging. Full-service men's underwear production from a single facility.",
};

const services = [
  {
    no: "01",
    title: "OEM Manufacturing",
    description:
      "Bring your tech pack, fabric spec, and branding assets. We handle pattern grading, fabric sourcing, cutting, sewing, QC, and packout — all in-house. Your design, our production line.",
    details: [
      "Pattern grading for S–3XL",
      "Fabric sourcing from vetted mills",
      "Bulk production with AQL 2.5 inspection",
      "Full export documentation",
    ],
    image: {
      label: "OEM Production Line",
      description:
        "Sewing operators working on bulk underwear production at workstations",
    },
  },
  {
    no: "02",
    title: "ODM Development",
    description:
      "Start from our in-house design library — fabric, fit, and waistband construction already validated. Choose a base style, customize details, and go to bulk in as few as 4 weeks.",
    details: [
      "100+ validated base styles",
      "Fabric and color customization",
      "Custom waistband jacquard design",
      "Tech pack provided if needed",
    ],
    image: {
      label: "ODM Design Table",
      description:
        "Design table with fabric swatches, tech packs, and underwear samples laid out",
    },
  },
  {
    no: "03",
    title: "Fabric & Material Sourcing",
    description:
      "Access our network of qualified fabric mills for cotton, modal, bamboo, and performance blends. We spec, test, and source — you approve swatches before production begins.",
    details: [
      "Organic cotton, combed cotton, BCI cotton",
      "MicroModal, TENCEL\u2122, bamboo viscose",
      "Moisture-wicking performance blends",
      "Custom weight and stretch specs",
    ],
    image: {
      label: "Fabric Swatches",
      description:
        "Organized fabric swatches showing cotton, modal, bamboo, and performance blends with spec labels",
    },
  },
  {
    no: "04",
    title: "Sampling & Prototyping",
    description:
      "Proto samples in 7 days. Fit samples with your size chart in 10\u201314 days. PP samples for final sign-off before bulk. Revisions supported at each stage until you're satisfied.",
    details: [
      "Proto sample: 5\u20137 days",
      "Fit sample: 10\u201314 days",
      "PP sample: 7\u201310 days after approval",
      "Unlimited revisions on fit and detail",
    ],
    image: {
      label: "Sample Room",
      description:
        "Sampling room with finished underwear prototypes, measurement tools, and pattern templates",
    },
  },
  {
    no: "05",
    title: "Private Label & Packaging",
    description:
      "Full white-label support. We design and produce custom waistband jacquards, woven labels, hang tags, poly bags, and retail-ready boxes — everything your brand needs to ship DTC or wholesale.",
    details: [
      "Custom jacquard waistband weaving",
      "Woven and printed labels",
      "Hang tags, poly bags, gift boxes",
      "Inner-waistband branding and heat transfers",
    ],
    image: {
      label: "Private Label Packaging",
      description:
        "Branded underwear packaging — hang tags, woven labels, printed boxes, and poly bags arranged on table",
    },
  },
  {
    no: "06",
    title: "Quality Control & Compliance",
    description:
      "AQL 2.5 pre-shipment inspection on every order. Metal detection on every piece. BSCI and SLCP audited facility. Full export documents — CI, PL, COO, BL/AWB — ready for your customs broker.",
    details: [
      "In-line and final QC inspection",
      "Metal detection on 100% of pieces",
      "BSCI + SLCP social compliance",
      "Photo pack and inspection report per shipment",
    ],
    image: {
      label: "QC Inspection",
      description:
        "Quality inspector examining finished underwear under magnifying lamp at inspection station",
    },
  },
];

const processSteps = [
  {
    no: "01",
    title: "Inquiry",
    description:
      "Share your product type, fabric preference, target quantity, and branding details.",
  },
  {
    no: "02",
    title: "Quotation",
    description:
      "Unit price, lead time, sample cost, and shipping — itemized within 24 hours.",
  },
  {
    no: "03",
    title: "Sampling",
    description:
      "Proto \u2192 fit \u2192 PP sample. Revisions supported at each stage until final sign-off.",
  },
  {
    no: "04",
    title: "Production",
    description:
      "Fabric sourcing \u2192 cutting \u2192 printing/embroidery \u2192 sewing \u2192 in-line QC.",
  },
  {
    no: "05",
    title: "Inspection",
    description:
      "AQL 2.5 pre-shipment check + photo pack before dispatch.",
  },
  {
    no: "06",
    title: "Shipping",
    description:
      "Balance payment, then FOB/CIF via your preferred logistics with full export docs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Our Services
            </p>
            <h1 className="mt-3 text-2xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              End-to-end underwear manufacturing, under one roof.
            </h1>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              From concept to cargo &mdash; OEM production, ODM development,
              material sourcing, sampling, private-label packaging, and
              export-ready quality control. One team, one facility, one point of
              contact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                Start a project
              </Link>
              <Link
                href="/catalog"
                className="rounded-full bg-white/70 backdrop-blur-md border border-neutral-300 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
              >
                Download catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service detail sections — alternating layout */}
      {services.map((s, i) => (
        <section
          key={s.no}
          className={`border-b border-neutral-200 ${
            i % 2 === 0 ? "bg-white" : "bg-neutral-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                i % 2 !== 0 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Text */}
              <div
                className={`lg:col-span-6 ${
                  i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-semibold">
                  {s.no}
                </p>
                <h2 className="mt-3 text-xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
                  {s.title}
                </h2>
                <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm text-neutral-700"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none"
                        aria-hidden
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image placeholder */}
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 0 ? "lg:col-start-8" : "lg:[direction:ltr]"
                }`}
              >
                <ImagePlaceholder
                  label={s.image.label}
                  description={s.image.description}
                  className="aspect-[4/3] lg:aspect-[3/2]"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process overview */}
      <section className="border-b border-neutral-200 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
              How It Works
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-white">
              Six steps from inquiry to delivery.
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-400 leading-relaxed">
              Every project follows the same documented workflow &mdash; so
              there are no surprises on price, timeline, or quality.
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <ol className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:snap-none">
            {processSteps.map((step) => (
              <li
                key={step.no}
                className="w-[65vw] max-w-[260px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink rounded-xl border border-neutral-700 bg-neutral-800/50 p-5 lg:p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-xs font-semibold text-neutral-900">
                  {step.no}
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Ready to start your project?
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-900/70 leading-relaxed">
              Share your concept, tech pack, or reference images. We&apos;ll
              scope your project and reply with pricing within one working day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                Get a quote &rarr;
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
