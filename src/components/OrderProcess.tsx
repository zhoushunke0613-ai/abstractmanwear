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
    { title: t("s1Title"), description: t("s1Desc"), deliverable: t("s1Del") },
    { title: t("s2Title"), description: t("s2Desc"), deliverable: t("s2Del") },
    { title: t("s3Title"), description: t("s3Desc"), deliverable: t("s3Del") },
    { title: t("s4Title"), description: t("s4Desc"), deliverable: t("s4Del") },
    { title: t("s5Title"), description: t("s5Desc"), deliverable: t("s5Del") },
    { title: t("s6Title"), description: t("s6Desc"), deliverable: t("s6Del") },
    { title: t("s7Title"), description: t("s7Desc"), deliverable: t("s7Del") },
  ];

  return (
    <section id={id} className="scroll-mt-20 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">
            {t("eyebrow")}
          </p>
          <h2 className="section-title text-neutral-900">
            {t("headline")}
          </h2>
          <p className="body-copy mt-5">
            {t("description")}
          </p>
        </div>

        <ol className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-hide border-y border-neutral-300 lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none">
          {steps.map((s, index) => (
            <li
              key={s.title}
              className="group w-[70vw] max-w-[280px] flex-shrink-0 snap-start border-r border-neutral-300 p-5 last:border-r-0 lg:w-auto lg:max-w-none lg:flex-shrink lg:p-7"
            >
              <span className="text-xs font-semibold text-brand-yellow">
                {index + 1}
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-neutral-900">
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
              className="btn-primary"
            >
              {t("ctaButton")} &rarr;
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
