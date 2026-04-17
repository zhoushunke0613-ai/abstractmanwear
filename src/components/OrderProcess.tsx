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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            How We Work
          </p>
          <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            From inquiry to shipment &mdash; a 7-step process, fully tracked.
          </h2>
          <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
            Every order follows the same documented workflow &mdash; no surprises
            on price, timeline, or quality.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <ol className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:snap-none">
          {steps.map((s) => (
            <li
              key={s.no}
              className="group min-w-[220px] flex-shrink-0 snap-start lg:min-w-0 lg:flex-shrink rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 lg:p-6 transition-all duration-300 hover:border-brand-yellow/60 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-xs font-semibold text-neutral-900 transition-transform duration-300 group-hover:scale-110">
                {s.no}
              </span>
              <h3 className="mt-3 lg:mt-4 text-base font-semibold tracking-tight text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {s.description}
              </p>
              <p className="mt-2 lg:mt-3 text-xs text-neutral-400">
                &rarr; {s.deliverable}
              </p>
            </li>
          ))}
        </ol>

        {/* Inline CTA */}
        <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 lg:gap-6 border-t border-neutral-200 pt-8 lg:pt-10">
          <p className="text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
            Ready to start your custom underwear project?
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-neutral-900 text-white font-medium text-sm px-7 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
          >
            Get a quote within 24 hours &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
