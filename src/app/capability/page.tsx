import Link from "next/link";
import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Capability — Abstract Man",
  description:
    "3,000 m\u00B2 vertically integrated facility in Zhongshan, China. Seamless knitting, cut-and-sew, printing, QC, and packout \u2014 500,000 pcs/month capacity.",
};

const factoryStats = [
  { value: "3,000 m\u00B2", label: "Facility area" },
  { value: "500,000", label: "Pcs / month capacity" },
  { value: "100+", label: "Skilled staff" },
  { value: "20+", label: "Years of experience" },
];

const productionLines = [
  {
    title: "Seamless Knitting",
    description:
      "Circular knitting machines produce one-piece body construction \u2014 no side seams, reduced stitching, smoother hand-feel. Ideal for premium and performance lines.",
    specs: [
      "Santoni and equivalent circular knitting machines",
      "Full-body and partial seamless construction",
      "Bonded and ultrasonic-cut finishing",
      "Capacity: 150,000+ pcs / month",
    ],
    image: {
      label: "Seamless Knitting Line",
      description:
        "Row of circular seamless knitting machines producing underwear body tubes",
    },
  },
  {
    title: "Cut-and-Sew Production",
    description:
      "Traditional construction with flatlock, overlock, and coverstitch machines. Full pattern grading from S to 3XL with multi-panel and gusseted constructions.",
    specs: [
      "Flatlock, overlock, and coverstitch machines",
      "Multi-needle chain stitch for waistbands",
      "S\u20133XL pattern grading",
      "Capacity: 350,000+ pcs / month",
    ],
    image: {
      label: "Cut-and-Sew Line",
      description:
        "Sewing operators at workstations stitching cut fabric panels into finished underwear",
    },
  },
];

const departments = [
  {
    title: "Design & Development",
    description:
      "In-house pattern making, tech pack creation, and sample development. CAD-based grading with fit validation across size ranges.",
    image: {
      label: "Design Room",
      description:
        "Design workstation with CAD screens, pattern templates, and fabric swatches",
    },
  },
  {
    title: "Printing & Embroidery",
    description:
      "Screen printing, sublimation, heat transfer, and multi-head embroidery. Custom waistband jacquard weaving done in partnership with local mills.",
    image: {
      label: "Printing Department",
      description:
        "Printing station with screen printing equipment and printed fabric panels drying",
    },
  },
  {
    title: "Cutting Room",
    description:
      "Automated spreading and cutting tables for consistent panel accuracy. Marker efficiency optimized to minimize fabric waste.",
    image: {
      label: "Cutting Room",
      description:
        "Automated fabric spreading and cutting table with stacked fabric layers",
    },
  },
  {
    title: "Quality Control",
    description:
      "In-line inspection at every workstation. Final AQL 2.5 pre-shipment check with measurement audits, appearance grading, and metal detection on 100% of pieces.",
    image: {
      label: "QC Department",
      description:
        "QC inspector examining finished underwear at lighted inspection station with measurement tools",
    },
  },
  {
    title: "Packaging & Warehouse",
    description:
      "OPP bags, printed boxes, gift packaging, and carton packing. Bar code labeling, assortment packing, and container loading supervised on-site.",
    image: {
      label: "Packaging Area",
      description:
        "Packaging station with folded underwear being packed into branded boxes and poly bags",
    },
  },
  {
    title: "Sampling Room",
    description:
      "Dedicated sample line separate from bulk production. Proto, fit, and PP samples with full measurement reports and photo packs.",
    image: {
      label: "Sampling Room",
      description:
        "Sampling room with sample sewing machines, finished prototypes, and measurement tools",
    },
  },
];

const equipmentList = [
  {
    category: "Knitting",
    items: [
      "Santoni circular seamless knitting machines",
      "Single and double jersey circular looms",
    ],
  },
  {
    category: "Sewing",
    items: [
      "Juki flatlock and overlock machines",
      "Pegasus coverstitch machines",
      "Multi-needle chain stitch for waistbands",
      "Ultrasonic bonding machines",
    ],
  },
  {
    category: "Printing",
    items: [
      "Rotary screen printing machines",
      "Sublimation heat presses",
      "Heat transfer presses",
    ],
  },
  {
    category: "Quality",
    items: [
      "Metal detection units (100% inline)",
      "AQL sampling inspection stations",
      "Fabric GSM and stretch testers",
    ],
  },
];

export default function CapabilityPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Capability
              </p>
              <h1 className="mt-3 text-2xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                A vertically integrated facility built for underwear.
              </h1>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                3,000 m&sup2; in Zhongshan, Guangdong &mdash; covering seamless
                knitting, cut-and-sew, printing, sampling, QC, and full packout.
                Every step under one roof, managed by one team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
                >
                  Schedule a factory tour
                </Link>
                <Link
                  href="/catalog"
                  className="rounded-full bg-white/70 backdrop-blur-md border border-neutral-300 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
                >
                  Download catalog
                </Link>
              </div>
            </div>

            {/* Factory exterior photo */}
            <div className="lg:col-span-5 lg:col-start-8">
              <ImagePlaceholder
                label="Factory Exterior"
                description="Abstract Man factory building exterior — front entrance with signage, Zhongshan industrial district"
                className="aspect-[4/3] lg:aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-neutral-800 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="-mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-px scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none bg-neutral-800">
            {factoryStats.map((s) => (
              <div
                key={s.label}
                className="min-w-[160px] flex-shrink-0 snap-start lg:min-w-0 lg:flex-shrink bg-neutral-900 py-8 px-5 lg:py-10 lg:px-8"
              >
                <p className="text-2xl lg:text-4xl font-semibold tracking-tight text-white whitespace-nowrap">
                  {s.value}
                </p>
                <p className="mt-1 lg:mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production lines */}
      {productionLines.map((line, i) => (
        <section
          key={line.title}
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
              <div
                className={`lg:col-span-6 ${
                  i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-semibold">
                  Production Line
                </p>
                <h2 className="mt-3 text-xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
                  {line.title}
                </h2>
                <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                  {line.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {line.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-3 text-sm text-neutral-700"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none"
                        aria-hidden
                      />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`lg:col-span-5 ${
                  i % 2 === 0 ? "lg:col-start-8" : "lg:[direction:ltr]"
                }`}
              >
                <ImagePlaceholder
                  label={line.image.label}
                  description={line.image.description}
                  className="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Factory departments — card grid */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Factory Departments
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Six departments, one integrated workflow.
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              Every department operates under the same roof with direct
              handoffs &mdash; no outsourcing, no delays between stages.
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:snap-none">
            {departments.map((dept) => (
              <div
                key={dept.title}
                className="w-[72vw] max-w-[280px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow/60 hover:-translate-y-0.5 hover:shadow-md"
              >
                <ImagePlaceholder
                  label={dept.image.label}
                  description={dept.image.description}
                  className="aspect-[5/3] rounded-none border-0 border-b"
                />
                <div className="p-5 lg:p-6">
                  <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                    {dept.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment list */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Equipment & Technology
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Purpose-built for men&apos;s underwear production.
            </h2>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {equipmentList.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <div className="h-1 w-8 bg-brand-yellow" />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-neutral-900">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-neutral-600"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 rounded-full bg-neutral-400 flex-none"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory floor gallery placeholder */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Factory Tour
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              See the facility.
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              A look inside our Zhongshan production base &mdash; from knitting
              lines to the finished-goods warehouse.
            </p>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              {
                label: "Factory Floor Overview",
                desc: "Wide-angle view of the main production floor with workers at stations",
              },
              {
                label: "Knitting Machines",
                desc: "Close-up of circular knitting machines producing seamless tubes",
              },
              {
                label: "Sewing Line",
                desc: "Row of sewing operators at workstations with overhead lighting",
              },
              {
                label: "QC Station",
                desc: "Quality inspector at lighted table with measurement tools",
              },
              {
                label: "Fabric Warehouse",
                desc: "Organized fabric rolls stored on metal shelving racks",
              },
              {
                label: "Printing Area",
                desc: "Screen printing station with freshly printed fabric panels",
              },
              {
                label: "Packaging Line",
                desc: "Workers folding and packing underwear into branded packaging",
              },
              {
                label: "Finished Goods",
                desc: "Palletized cartons in warehouse ready for container loading",
              },
            ].map((photo) => (
              <ImagePlaceholder
                key={photo.label}
                label={photo.label}
                description={photo.desc}
                className="aspect-square"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              Want to visit the factory?
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-900/70 leading-relaxed">
              We welcome on-site visits by appointment. Pickup from Guangzhou or
              Shenzhen airports available.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                Schedule a visit &rarr;
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
