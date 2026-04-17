const facts = [
  { value: "BSCI & SLCP", label: "Certified" },
  { value: "500,000 pcs", label: "/ month" },
  { value: "3,000 m²", label: "Facility" },
  { value: "25+ Countries", label: "Served" },
  { value: "100+", label: "Skilled staff" },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-yellow">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-neutral-900/15">
          {facts.map((f) => (
            <div
              key={f.value}
              className="px-4 py-4 lg:px-6 lg:py-2 lg:first:pl-0 lg:last:pr-0"
            >
              <dt className="text-xl lg:text-2xl font-semibold tracking-tight text-neutral-900">
                {f.value}
              </dt>
              <dd className="mt-2 text-[11px] uppercase tracking-[0.18em] text-neutral-900/60">
                {f.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
