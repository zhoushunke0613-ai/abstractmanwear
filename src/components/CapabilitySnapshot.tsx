import Link from "next/link";

const stats = [
  { value: "20+ Years", label: "Industry experience" },
  { value: "3,000 m²", label: "Facility" },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
              Capability Snapshot
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              A Zhongshan-based facility built for men&apos;s underwear manufacturing.
            </h2>
            <p className="mt-5 text-neutral-400 leading-relaxed">
              Located in Guangdong&apos;s knit-manufacturing cluster, our
              vertically integrated facility covers seamless knitting,
              cut-and-sew, printing, and full packout — all under one roof.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-neutral-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>

            <Link
              href="/capability"
              className="mt-10 inline-flex items-center gap-2 text-sm text-brand-yellow hover:text-brand-yellow-light transition-colors"
            >
              Tour the facility
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
              {stats.map((s) => (
                <div key={s.label} className="bg-neutral-900 p-8 lg:p-12">
                  <p className="text-3xl lg:text-5xl font-semibold tracking-tight text-white">
                    {s.value}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
