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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            Built for brands who can&apos;t afford to compromise.
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            A vertically integrated men&apos;s underwear manufacturer, not a
            trading agent. Every step of the chain is owned and accountable to
            the same team.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {advantages.map((a, i) => (
            <div key={a.title} className="bg-neutral-50 p-8 lg:p-10">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-xs font-semibold text-neutral-900">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-900">
                {a.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
