import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

const certs = [
  {
    badge: "BSCI",
    title: "BSCI Audit \u00B7 Passed",
    description:
      "Third-party verified working conditions, wages, and working hours across all production lines. Reports available on request.",
    image: null as string | null,
    imageAlt: "",
    placeholder: {
      label: "BSCI Certificate",
      description: "BSCI audit certificate scan or official BSCI badge image",
    },
  },
  {
    badge: "SLCP",
    title: "SLCP Verified",
    description:
      "Converged Assessment Framework recognized by major global retailers. Saves you from duplicate audits.",
    image: null as string | null,
    imageAlt: "",
    placeholder: {
      label: "SLCP Certificate",
      description:
        "SLCP verification certificate scan or official SLCP badge image",
    },
  },
  {
    badge: "AQL",
    title: "AQL 2.5 Inspection + Full Export Docs",
    description:
      "Every shipment inspected before dispatch. Commercial invoice, packing list, certificate of origin, and BL / AWB ready for customs.",
    image: "/images/qc-inspection.png",
    imageAlt:
      "QC inspector examining underwear under magnifying lamp at inspection station",
    placeholder: null,
  },
];

export default function Certifications() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Certifications
          </p>
          <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            Audited, documented, and export-ready.
          </h2>
          <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
            Compliance documentation is part of how we operate &mdash; not a
            bolt-on. International buyers can onboard us without running a
            separate vetting cycle.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none">
          {certs.map((c) => (
            <div
              key={c.badge}
              className="group min-w-[280px] flex-shrink-0 snap-start lg:min-w-0 lg:flex-shrink border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow hover:-translate-y-0.5 hover:shadow-md"
            >
              {c.image ? (
                <div className="relative aspect-[5/3]">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 768px) 75vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ) : c.placeholder ? (
                <ImagePlaceholder
                  label={c.placeholder.label}
                  description={c.placeholder.description}
                  className="aspect-[5/3] rounded-none border-0 border-b-2"
                />
              ) : null}
              <div className="p-5 lg:p-8">
                <div className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-brand-yellow text-sm font-semibold tracking-tight text-neutral-900">
                  {c.badge}
                </div>
                <p className="mt-4 lg:mt-6 text-base font-semibold tracking-tight text-neutral-900">
                  {c.title}
                </p>
                <p className="mt-2 lg:mt-3 text-sm text-neutral-600 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
