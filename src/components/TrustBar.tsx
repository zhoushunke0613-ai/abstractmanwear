const facts = [
  { value: "BSCI & SLCP", label: "Certified" },
  { value: "500,000 pcs", label: "/ month" },
  { value: "3,000 m\u00B2", label: "Facility" },
  { value: "25+ Countries", label: "Served" },
  { value: "100+", label: "Skilled staff" },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-yellow">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-14">
        {/* Horizontal scroll on mobile, grid with dividers on desktop */}
        <dl className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide lg:grid lg:grid-cols-5 lg:divide-x lg:divide-neutral-900/15 lg:overflow-visible lg:snap-none lg:gap-0">
          {facts.map((f) => (
            <div
              key={f.value}
              className="min-w-[140px] flex-shrink-0 snap-start lg:min-w-0 lg:flex-shrink lg:px-6 lg:py-2 lg:first:pl-0 lg:last:pr-0"
            >
              <dt className="text-lg lg:text-2xl font-semibold tracking-tight text-neutral-900 whitespace-nowrap">
                {f.value}
              </dt>
              <dd className="mt-1 lg:mt-2 text-[11px] uppercase tracking-[0.18em] text-neutral-900/60">
                {f.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
