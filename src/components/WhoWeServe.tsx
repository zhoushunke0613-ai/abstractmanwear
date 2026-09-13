import { useTranslations } from "next-intl";

export default function WhoWeServe() {
  const t = useTranslations("WhoWeServe");

  const clients = [
    { type: t("c1"), description: t("c1Desc") },
    { type: t("c2"), description: t("c2Desc") },
    { type: t("c3"), description: t("c3Desc") },
    { type: t("c4"), description: t("c4Desc") },
    { type: t("c5"), description: t("c5Desc") },
  ];

  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">
            {t("eyebrow")}
          </p>
          <h2 className="section-title text-neutral-900">
            {t("headline")}
          </h2>
        </div>

        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-hide border-y border-neutral-300 lg:grid lg:grid-cols-5 lg:overflow-visible lg:snap-none">
          {clients.map((c, index) => (
            <div
              key={c.type}
              className="w-[68vw] max-w-[250px] flex-shrink-0 snap-start border-r border-neutral-300 p-5 last:border-r-0 lg:w-auto lg:max-w-none lg:flex-shrink lg:p-7"
            >
              <span className="text-[10px] tracking-[0.2em] text-brand-yellow">0{index + 1}</span>
              <h3 className="font-display mt-5 text-xl tracking-[-0.025em] text-neutral-900">
                {c.type}
              </h3>
              <p className="mt-2 lg:mt-3 text-sm text-neutral-600 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
