import Link from "next/link";

const secondaryCtas = [
  {
    href: "/contact?type=quote",
    label: "Request a Quote",
    description: "Pricing and lead times within 24 hours.",
  },
  {
    href: "/catalog",
    label: "Download Catalog",
    description: "Full product library with fabrics and fits.",
  },
  {
    href: "/contact?type=tech-pack",
    label: "Send Your Tech Pack",
    description: "Upload files — we reply next business day.",
  },
];

export default function FinalCTA() {
  return (
    <section className="border-b border-neutral-200 bg-brand-yellow">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-900/70">
            Let&apos;s Build Together
          </p>
          <h2 className="mt-4 text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
            Ready to bring your underwear line to market?
          </h2>
          <p className="mt-5 text-neutral-900/80 leading-relaxed text-base lg:text-lg">
            Tell us what you&apos;re building. We&apos;ll come back with fabric
            options, pricing, and a realistic production timeline — usually
            within one working day.
          </p>
        </div>

        {/* Primary CTA — full-width, visually dominant */}
        <Link
          href="/contact"
          className="group mt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 rounded-2xl bg-neutral-900 text-white p-8 lg:p-10 shadow-xl transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
              Primary
            </p>
            <p className="mt-3 text-2xl lg:text-3xl font-semibold tracking-tight">
              Start Your Project
            </p>
            <p className="mt-2 text-sm lg:text-base text-neutral-400 max-w-xl leading-relaxed">
              Share your concept, tech pack, or existing samples. We&apos;ll
              scope fabric, pricing, and timeline end-to-end.
            </p>
          </div>
          <span
            aria-hidden
            className="flex-none self-start lg:self-auto inline-flex items-center gap-3 rounded-full bg-brand-yellow text-neutral-900 px-5 py-2.5 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1"
          >
            Get in touch
            <span>→</span>
          </span>
        </Link>

        {/* Secondary CTAs — smaller frosted cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {secondaryCtas.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 p-6 text-neutral-900 transition-all duration-300 ease-out hover:bg-white/90 hover:border-white hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-base font-semibold tracking-tight">
                  {c.label}
                </span>
                <span
                  aria-hidden
                  className="text-neutral-900 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
              <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
