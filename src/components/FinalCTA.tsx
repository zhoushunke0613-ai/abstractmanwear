import Link from "next/link";

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
            options, pricing, and a realistic production timeline &mdash; within
            one working day.
          </p>
        </div>

        {/* Primary CTA card */}
        <Link
          href="/contact"
          className="group mt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 rounded-2xl bg-neutral-900 text-white p-8 lg:p-10 shadow-xl transition-all duration-500 ease-out hover:bg-neutral-800 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div>
            <p className="text-2xl lg:text-3xl font-semibold tracking-tight">
              Start Your Project
            </p>
            <p className="mt-2 text-sm lg:text-base text-neutral-400 max-w-xl leading-relaxed">
              Share your concept, tech pack, or existing samples. We&apos;ll
              scope fabric, pricing, and timelines over one call.
            </p>
          </div>
          <span
            aria-hidden
            className="flex-none self-start lg:self-auto inline-flex items-center gap-3 rounded-full bg-brand-yellow text-neutral-900 px-5 py-2.5 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1"
          >
            Get in touch
            <span>&rarr;</span>
          </span>
        </Link>

        {/* Secondary links */}
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900/70 transition-colors hover:text-neutral-900"
          >
            <span className="text-xs">&rarr;</span> Download Catalog (PDF)
          </Link>
          <Link
            href="/contact?type=quote"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900/70 transition-colors hover:text-neutral-900"
          >
            <span className="text-xs">&rarr;</span> Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
