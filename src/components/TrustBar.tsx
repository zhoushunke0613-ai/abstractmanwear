import { useTranslations } from "next-intl";

export default function TrustBar() {
  const t = useTranslations("TrustBar");

  const facts = [
    { value: t("bsci"), label: t("bsciLabel") },
    { value: t("capacity"), label: t("capacityLabel") },
    { value: t("facility"), label: t("facilityLabel") },
    { value: t("countries"), label: t("countriesLabel") },
    { value: t("staff"), label: t("staffLabel") },
  ];

  return (
    <section className="border-b border-neutral-200 bg-[#fcfaf6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <dl className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide border-y border-neutral-300 lg:grid lg:grid-cols-5 lg:overflow-visible lg:snap-none">
          {facts.map((f, index) => (
            <div
              key={f.value}
              className="min-w-[155px] flex-shrink-0 snap-start border-r border-neutral-300 px-5 py-6 last:border-r-0 lg:min-w-0 lg:flex-shrink lg:px-6 lg:py-8"
            >
              <span className="text-[9px] tracking-[0.2em] text-brand-yellow">0{index + 1}</span>
              <dt className="font-display mt-3 text-2xl lg:text-3xl tracking-[-0.035em] text-neutral-900 whitespace-nowrap">
                {f.value}
              </dt>
              <dd className="mt-1 lg:mt-2 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                {f.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
