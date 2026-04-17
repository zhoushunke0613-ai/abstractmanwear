const advantages = [
  {
    title: "Specialized in Men\u2019s Underwear",
    description:
      "20 years on a single category. Every pattern, machine, and operator is tuned to men\u2019s underwear \u2014 not a general apparel factory running underwear on the side.",
  },
  {
    title: "Seamless & Cut-and-Sew Expertise",
    description:
      "Both construction methods under one roof. Most factories pick one \u2014 we run parallel lines for either, and can combine both in a single SKU.",
  },
  {
    title: "Flexible OEM / ODM Support",
    description:
      "Bring your tech pack, or start from our design library. Switch modes between SKUs in the same PO.",
  },
  {
    title: "Strict Quality Control",
    description:
      "AQL 2.5 inspection on every shipment, metal detection on every piece, and final measurement checks before packing.",
  },
  {
    title: "Scalable from 500 to 50,000 pcs",
    description:
      "Same line, same QC standard \u2014 whether you\u2019re testing a capsule or scaling a bestseller. No downgrade on small runs.",
  },
  {
    title: "End-to-End Service",
    description:
      "Tech pack \u2192 sourcing \u2192 production \u2192 packaging \u2192 export docs. One point of contact from inquiry to shipment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            Built for brands who can&apos;t afford to compromise.
          </h2>
          <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
            A vertically integrated men&apos;s underwear manufacturer, not a
            trading agent. Every step of the chain is owned and accountable to
            the same team.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:snap-none">
          {advantages.map((a, i) => (
            <div
              key={a.title}
              className="group min-w-[260px] flex-shrink-0 snap-start lg:min-w-0 lg:flex-shrink rounded-xl border border-neutral-200 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-yellow/60 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-xs font-semibold text-neutral-900 transition-transform duration-300 group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 lg:mt-6 text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
                {a.title}
              </h3>
              <p className="mt-2 lg:mt-3 text-sm text-neutral-600 leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
