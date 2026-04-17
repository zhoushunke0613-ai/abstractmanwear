const steps = [
  {
    no: "01",
    title: "Inquiry",
    description: "Share your product idea, quantity, and requirements.",
  },
  {
    no: "02",
    title: "Requirement Review",
    description: "We confirm materials, fit, branding, and production needs.",
  },
  {
    no: "03",
    title: "Sampling",
    description: "15-day turnaround with photos, fit notes, and lab dips.",
  },
  {
    no: "04",
    title: "Approval",
    description: "Refine and lock specs before production starts.",
  },
  {
    no: "05",
    title: "Mass Production",
    description: "Weekly progress updates and photo check-ins.",
  },
  {
    no: "06",
    title: "Inspection & Shipment",
    description: "Final AQL inspection and forwarder booking.",
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
            From inquiry to shipment — six tracked steps.
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            A transparent OEM/ODM workflow. You always know which stage your
            order is in, who owns it, and when the next milestone lands.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Desktop connector rail */}
          <div
            className="hidden lg:block absolute top-[18px] left-0 right-0 h-px bg-neutral-200"
            aria-hidden
          />

          <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
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
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
