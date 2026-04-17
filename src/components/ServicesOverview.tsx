const services = [
  {
    no: "01",
    title: "OEM Manufacturing",
    description:
      "Bring your tech pack or finished design. We handle fabric sourcing, pattern grading, and bulk production to your exact spec.",
  },
  {
    no: "02",
    title: "ODM Development",
    description:
      "Full development from concept to sample — fit, fabric, waistband, and finishing guided by our in-house team.",
  },
  {
    no: "03",
    title: "Fabric & Fit Customization",
    description:
      "Fabric, waistband, sizing, fit, and color all adjustable. Cotton, modal, seamless, and performance blends in stock.",
  },
  {
    no: "04",
    title: "Sampling & Private Label",
    description:
      "15-day sampling, woven labels, hang tags, poly bags, and printed boxes — launch-ready packaging built around your brand.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            What We Do
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            More than a factory — a development partner.
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            OEM production, ODM development, fabric sourcing, pattern-making,
            and full private-label support. Every step handled in-house at our
            Zhongshan facility.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-y-0">
          {services.map((s) => (
            <div key={s.no} className="lg:border-l lg:border-neutral-200 lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-medium">
                {s.no}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
