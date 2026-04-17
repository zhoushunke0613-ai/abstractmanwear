import Link from "next/link";

const steps = [
  {
    no: "01",
    title: "Inquiry",
    description: "Share product type, fabric, quantity, and custom details.",
    deliverable: "Requirement sheet",
  },
  {
    no: "02",
    title: "Quotation",
    description:
      "Unit price, lead time, sample cost, setup fees, and shipping \u2014 all itemized within 24 hours.",
    deliverable: "Written quote",
  },
  {
    no: "03",
    title: "Sampling",
    description:
      "Mockup \u2192 sample production \u2192 your evaluation \u2192 final approval. Revisions supported.",
    deliverable: "Approved PP sample",
  },
  {
    no: "04",
    title: "Order & Production",
    description:
      "30\u201350% deposit. Fabric sourcing \u2192 cutting \u2192 printing / embroidery \u2192 sewing \u2192 in-line QC.",
    deliverable: "Signed PO + production schedule",
  },
  {
    no: "05",
    title: "Inspection & Packaging",
    description:
      "Full pre-shipment inspection + OPP bags / gift boxes / cartons + photo confirmation before dispatch.",
    deliverable: "Inspection report + photo pack",
  },
  {
    no: "06",
    title: "Balance & Shipping",
    description:
      "Balance payment, then shipment via your preferred logistics method with full export documents.",
    deliverable: "BL / AWB, CI, PL, COO",
  },
  {
    no: "07",
    title: "Delivery & After-Sales",
    description:
      "Arrival inspection + resolution for any issues. Order closed on your confirmation.",
    deliverable: "Project sign-off",
  },
];

export default function OrderProcess() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            From inquiry to shipment &mdash; a 7-step process, fully tracked.
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            Every order follows the same documented workflow &mdash; no surprises
            on price, timeline, or quality.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Desktop connector rail */}
          <div
            className="hidden lg:block absolute top-[18px] left-0 right-0 h-px bg-neutral-200"
            aria-hidden
          />

          <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-5">
            {steps.map((s) => (
              <li key={s.no} className="relative">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-xs font-semibold text-neutral-900 ring-4 ring-white">
                  {s.no}
                </span>
                <h3 className="mt-6 text-sm font-semibold tracking-tight text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  {s.description}
                </p>
                <p className="mt-3 text-[11px] text-neutral-500">
                  &rarr; {s.deliverable}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Inline CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-neutral-200 pt-10">
          <p className="text-lg font-semibold tracking-tight text-neutral-900">
            Ready to start your custom underwear project?
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-brand-yellow border border-brand-yellow-light text-neutral-900 font-medium text-sm px-6 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-brand-yellow-light hover:shadow-md hover:-translate-y-0.5"
          >
            Get a quote within 24 hours &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
