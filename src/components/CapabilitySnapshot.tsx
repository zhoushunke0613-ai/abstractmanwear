import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CapabilitySnapshot() {
  const t = useTranslations("CapabilitySnapshot");

  const stats = [
    { value: t("stat1"), label: t("stat1Label") },
    { value: t("stat2"), label: t("stat2Label") },
    { value: t("stat3"), label: t("stat3Label") },
    { value: t("stat4"), label: t("stat4Label") },
  ];

  const highlights = [t("h1"), t("h2"), t("h3"), t("h4")];

  return (
    <section className="border-b border-neutral-800 bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-white">
              {t("headline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-400 leading-relaxed">
              {t("description")}
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
              {t("tourCta")}
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          <div className="group relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[360px] rounded-xl overflow-hidden">
            <Image
              src="/images/factory-floor.png"
              alt="Abstract Man factory floor"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover img-hover-zoom"
            />
          </div>
        </div>

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
