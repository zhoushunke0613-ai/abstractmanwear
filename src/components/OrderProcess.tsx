import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface Props {
  /** Anchor target, e.g. "process" for /services#process */
  id?: string;
  /** Hide the inline CTA when the host page already ends with its own */
  showCta?: boolean;
}

export default function OrderProcess({ id, showCta = true }: Props) {
  const t = useTranslations("OrderProcess");

  const steps = [
    { no: "01", title: t("s1Title"), description: t("s1Desc"), deliverable: t("s1Del") },
    { no: "02", title: t("s2Title"), description: t("s2Desc"), deliverable: t("s2Del") },
    { no: "03", title: t("s3Title"), description: t("s3Desc"), deliverable: t("s3Del") },
    { no: "04", title: t("s4Title"), description: t("s4Desc"), deliverable: t("s4Del") },
    { no: "05", title: t("s5Title"), description: t("s5Desc"), deliverable: t("s5Del") },
    { no: "06", title: t("s6Title"), description: t("s6Desc"), deliverable: t("s6Del") },
    { no: "07", title: t("s7Title"), description: t("s7Desc"), deliverable: t("s7Del") },
  ];

  return (
    <section id={id} className="scroll-mt-20 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            {t("headline")}
          </h2>
          <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
            {t("description")}
          </p>
        </div>

        <ol className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:snap-none">
          {steps.map((s) => (
            <li
              key={s.no}
              className="group w-[65vw] max-w-[260px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 lg:p-6 transition-all duration-300 hover:border-brand-yellow/60 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-xs font-semibold text-neutral-900 transition-transform duration-300 group-hover:scale-110">
                {s.no}
              </span>
              <h3 className="mt-3 lg:mt-4 text-base font-semibold tracking-tight text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {s.description}
              </p>
              <p className="mt-2 lg:mt-3 text-xs text-neutral-400">
                &rarr; {s.deliverable}
              </p>
            </li>
          ))}
        </ol>

        {showCta ? (
          <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 lg:gap-6 border-t border-neutral-200 pt-8 lg:pt-10">
            <p className="text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
              {t("ctaText")}
            </p>
            <Link
              href="/contact"
              className="rounded-full bg-neutral-900 text-white font-medium text-sm px-7 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
            >
              {t("ctaButton")} &rarr;
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
