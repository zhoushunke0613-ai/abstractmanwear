const certs = [
  {
    badge: "BSCI",
    title: "BSCI Audit \u00B7 Passed",
    description:
      "Third-party verified working conditions, wages, and working hours across all production lines. Reports available on request.",
  },
  {
    badge: "SLCP",
    title: "SLCP Verified",
    description:
      "Converged Assessment Framework recognized by major global retailers. Saves you from duplicate audits.",
  },
  {
    badge: "AQL",
    title: "AQL 2.5 Inspection + Full Export Docs",
    description:
      "Every shipment inspected before dispatch. Commercial invoice, packing list, certificate of origin, and BL / AWB ready for customs.",
  },
];

export default function Certifications() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Certifications
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            Audited, documented, and export-ready.
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            Compliance documentation is part of how we operate &mdash; not a
            bolt-on. International buyers can onboard us without running a
            separate vetting cycle.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {certs.map((c) => (
            <div
              key={c.badge}
              className="border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:border-brand-yellow transition-colors"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow text-sm font-semibold tracking-tight text-neutral-900">
                {c.badge}
              </div>
              <p className="mt-6 text-base font-semibold tracking-tight text-neutral-900">
                {c.title}
              </p>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
