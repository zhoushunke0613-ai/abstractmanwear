const advantages = [
  {
    title: "Specialized in Men's Underwear",
    description:
      "20 years focused exclusively on men's underwear. We know the fabrics, the fits, and the tolerances that matter on body.",
  },
  {
    title: "Seamless & Cut-and-Sew Expertise",
    description:
      "Both seamless knitting and traditional cut-and-sew under one roof. Pick the construction that fits your brand position.",
  },
  {
    title: "Flexible OEM / ODM Support",
    description:
      "From your finished tech pack to our in-house pattern library — we adapt to however your product team likes to work.",
  },
  {
    title: "Strict Quality Control",
    description:
      "In-house QC at every stage — inbound fabric, sampling, inline, and final AQL inspection before carton closure.",
  },
  {
    title: "End-to-End Service",
    description:
      "Design input, fabric sourcing, sampling, bulk, trims, packaging, and export logistics — all handled by one team.",
  },
  {
    title: "Scalable Production Capacity",
    description:
      "From 300-pc sampling runs to 500,000-pc monthly bulk. Scheduling adapts to your volume without sacrificing lead time.",
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
            A vertically integrated men&apos;s underwear manufacturer, not a trading
            agent. Every step of the chain is owned and accountable to the same team.
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
