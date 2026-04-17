const clients = [
  {
    type: "Global Brands",
    description:
      "Multi-season programs with dedicated development teams.",
  },
  {
    type: "Private Label Businesses",
    description:
      "Full white-label with custom packaging and inner-waistband branding.",
  },
  {
    type: "Wholesalers",
    description:
      "Stock-ready essentials with fast turnaround.",
  },
  {
    type: "Distributors",
    description:
      "Mixed-SKU orders with consolidated shipping.",
  },
  {
    type: "Cross-Border Sellers",
    description:
      "DTC-ready packaging and small-batch flexibility.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Who We Serve
          </p>
          <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            Designed for the way you go to market.
          </h2>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:snap-none">
          {clients.map((c) => (
            <div
              key={c.type}
              className="group min-w-[200px] flex-shrink-0 snap-start lg:min-w-0 lg:flex-shrink bg-white border border-neutral-200 rounded-2xl p-5 lg:p-6 transition-all duration-300 hover:border-brand-yellow hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="h-1 w-8 bg-brand-yellow" />
              <h3 className="mt-4 lg:mt-5 text-base font-semibold tracking-tight text-neutral-900">
                {c.type}
              </h3>
              <p className="mt-2 lg:mt-3 text-sm text-neutral-600 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
