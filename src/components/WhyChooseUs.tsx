import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const advantages = [
    { title: t("a1Title"), description: t("a1Desc") },
    { title: t("a2Title"), description: t("a2Desc") },
    { title: t("a3Title"), description: t("a3Desc") },
    { title: t("a4Title"), description: t("a4Desc") },
    { title: t("a5Title"), description: t("a5Desc") },
    { title: t("a6Title"), description: t("a6Desc") },
  ];

  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
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

        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:snap-none">
          {advantages.map((a, i) => (
            <div
              key={a.title}
              className="group w-[72vw] max-w-[280px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink rounded-xl border border-neutral-200 bg-white p-6 lg:p-8 transition-all duration-300 hover:border-brand-yellow/60 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-xs font-semibold text-neutral-900 transition-transform duration-300 group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 lg:mt-6 text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
                {a.title}
              </h3>
              <p className="mt-2 lg:mt-3 text-sm text-neutral-600 leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
