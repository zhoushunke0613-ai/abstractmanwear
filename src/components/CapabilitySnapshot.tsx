import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "20+ Years", label: "Industry experience" },
  { value: "3,000 m\u00B2", label: "Facility" },
  { value: "500,000", label: "Pcs / month capacity" },
  { value: "100+", label: "Skilled staff" },
];

const highlights = [
  "Seamless knitting lines",
  "Cut-and-sew production",
  "In-house sampling room",
  "Full QC department",
];

export default function CapabilitySnapshot() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        {/* Two-column: text + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
              Capability Snapshot
            </p>
            <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-white">
              A Zhongshan-based facility built for men&apos;s underwear
              manufacturing.
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-400 leading-relaxed">
              Located in Guangdong&apos;s knit-manufacturing cluster, our
              vertically integrated facility covers seamless knitting,
              cut-and-sew, printing, and full packout &mdash; all under one
              roof.
            </p>

            <ul className="mt-6 lg:mt-8 grid grid-cols-2 gap-2 lg:grid-cols-1 lg:space-y-3 lg:gap-0">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2 lg:gap-3 text-sm text-neutral-300"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none"
                    aria-hidden
                  />
                  {h}
                </li>
              ))}
            </ul>

            <Link
              href="/capability"
              className="mt-8 lg:mt-10 inline-flex items-center gap-2 text-sm text-brand-yellow hover:text-brand-yellow-light transition-colors"
            >
              Tour the facility
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          {/* Factory photo */}
          <div className="group relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[360px] rounded-xl overflow-hidden">
            <Image
              src="/images/factory-floor.png"
              alt="Abstract Man factory floor — seamless knitting machines and production lines"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover img-hover-zoom"
            />
          </div>
        </div>

        {/* Full-width stats bar — horizontal scroll on mobile */}
        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-px lg:gap-px scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none bg-neutral-800 border border-neutral-800">
          {stats.map((s) => (
            <div key={s.label} className="min-w-[160px] flex-shrink-0 snap-start lg:min-w-0 lg:flex-shrink bg-neutral-900 p-5 lg:p-8">
              <p className="text-xl lg:text-4xl font-semibold tracking-tight text-white whitespace-nowrap">
                {s.value}
              </p>
              <p className="mt-1 lg:mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
