import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ProductSpecialization() {
  const t = useTranslations("ProductSpecialization");

  const products = [
    { name: t("briefs"), slug: "briefs", meta: "Style 001", tagline: t("briefsTag"), moq: "300 pcs", leadTime: "25\u201330 days" },
    { name: t("boxerBriefs"), slug: "boxer-briefs", meta: "Style 002", tagline: t("boxerBriefsTag"), moq: "300 pcs", leadTime: "25\u201330 days" },
    { name: t("trunks"), slug: "trunks", meta: "Style 003", tagline: t("trunksTag"), moq: "300 pcs", leadTime: "25\u201330 days" },
    { name: t("seamless"), slug: "seamless", meta: "Style 004", tagline: t("seamlessTag"), moq: "500 pcs", leadTime: "30\u201335 days" },
    { name: t("modal"), slug: "modal", meta: "Style 005", tagline: t("modalTag"), moq: "300 pcs", leadTime: "25\u201330 days" },
    { name: t("performance"), slug: "performance", meta: "Style 006", tagline: t("performanceTag"), moq: "500 pcs", leadTime: "30\u201335 days" },
  ];

  return (
    <section className="border-b border-neutral-200 bg-white">
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

        <ul className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 lg:overflow-visible lg:snap-none">
          {products.map((p) => (
            <li key={p.slug} className="group w-[65vw] max-w-[260px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink">
              <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden border border-neutral-200 bg-[#fafaf5]">
                <Image
                  src={`/images/product-${p.slug}.svg`}
                  alt={`${p.name} blueprint`}
                  width={400}
                  height={400}
                  className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.18em] text-neutral-500 bg-white/70 backdrop-blur-sm px-2 py-1">
                  {p.meta}
                </span>
              </div>
              <div className="mt-4 lg:mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
                  {p.name}
                </h3>
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-900 transition-colors whitespace-nowrap"
                >
                  {t("inquire")} &rarr;
                </Link>
              </div>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {p.tagline}
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                {t("moq")}: {p.moq} · {t("leadTime")}: {p.leadTime}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
