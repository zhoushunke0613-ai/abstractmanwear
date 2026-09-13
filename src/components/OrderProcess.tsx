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
    { title: t("s1Title"), description: t("s1Desc"), deliverable: t("s1Del"), phase: t("phaseScope") },
    { title: t("s2Title"), description: t("s2Desc"), deliverable: t("s2Del") },
    { title: t("s3Title"), description: t("s3Desc"), deliverable: t("s3Del"), phase: t("phaseSample") },
    { title: t("s4Title"), description: t("s4Desc"), deliverable: t("s4Del"), phase: t("phaseProduction") },
    { title: t("s5Title"), description: t("s5Desc"), deliverable: t("s5Del"), phase: t("phaseDelivery") },
    { title: t("s6Title"), description: t("s6Desc"), deliverable: t("s6Del") },
    { title: t("s7Title"), description: t("s7Desc"), deliverable: t("s7Del") },
  ];

  return (
    <section id={id} className="scroll-mt-20 border-b border-neutral-800 bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-24">
        <div className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-brand-yellow-light">
              {t("eyebrow")}
            </p>
            <h1 className="section-title max-w-[14ch] text-white">
              {t("headline")}
            </h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-neutral-300 lg:col-span-4 lg:col-start-9 lg:text-lg">
              {t("description")}
            </p>
        </div>

        <div className="mt-10 border-y border-neutral-700 py-2 lg:mt-14 lg:py-5">
          <div className="hidden grid-cols-7 border-b border-neutral-700 pb-4 xl:grid">
            <p className="col-span-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
              {t("phaseScope")}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
              {t("phaseSample")}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
              {t("phaseProduction")}
            </p>
            <p className="col-span-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
              {t("phaseDelivery")}
            </p>
          </div>

          <ol className="grid grid-cols-1 xl:grid-cols-7">
          {steps.map((s, index) => (
            <li
              key={s.title}
              className="relative grid grid-cols-[2.75rem_1fr] gap-4 border-b border-neutral-800 py-6 last:border-b-0 xl:block xl:border-b-0 xl:py-7 xl:pr-5"
            >
              {index < steps.length - 1 ? (
                <>
                  <span className="absolute bottom-[-1.5rem] left-[1.22rem] top-[3.75rem] w-px bg-neutral-700 xl:hidden" aria-hidden />
                  <span className="absolute left-10 right-0 top-[2.65rem] hidden h-px bg-neutral-600 xl:block" aria-hidden>
                    <span className="absolute -right-px -top-[3px] h-2 w-2 rotate-45 border-r border-t border-neutral-500" />
                  </span>
                </>
              ) : null}

              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-yellow-light bg-neutral-900 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div className="min-w-0 xl:mt-7">
                {s.phase ? (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow-light xl:hidden">
                    {s.phase}
                  </p>
                ) : null}
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {s.description}
                </p>
                <p className="mt-4 border-t border-neutral-700 pt-3 text-xs leading-relaxed text-neutral-400">
                  <span className="mr-2 font-semibold uppercase tracking-[0.12em] text-neutral-500">
                    {t("outputLabel")}
                  </span>
                  {s.deliverable}
                </p>
              </div>
            </li>
          ))}
          </ol>
        </div>

        {showCta ? (
          <div className="mt-10 flex flex-col items-start justify-between gap-4 lg:mt-12 lg:flex-row lg:items-center lg:gap-6">
            <p className="text-base font-semibold tracking-tight text-white lg:text-lg">
              {t("ctaText")}
            </p>
            <Link
              href="/contact"
              className="btn-primary btn-primary-inverse"
            >
              {t("ctaButton")} &rarr;
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
