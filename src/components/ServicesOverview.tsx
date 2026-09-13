import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ServicesOverview() {
  const t = useTranslations("ServicesOverview");

  const services = [
    {
      no: "01",
      title: t("s1Title"),
      description: t("s1Desc"),
      image: "/images/service-oem.png",
      imageAlt: "Sewing line operators working on bulk underwear production",
    },
    {
      no: "02",
      title: t("s2Title"),
      description: t("s2Desc"),
      image: "/images/service-odm.png",
      imageAlt: "Design table with fabric swatches, tech packs, and sample garments",
    },
    {
      no: "03",
      title: t("s3Title"),
      description: t("s3Desc"),
      image: "/images/service-fabric.png",
      imageAlt: "Stacked fabric swatches — organic cotton, premium modal, bamboo performance blend",
    },
    {
      no: "04",
      title: t("s4Title"),
      description: t("s4Desc"),
      image: "/images/service-sampling.png",
      imageAlt: "Finished underwear samples with hang tags, woven labels, and branded packaging",
    },
  ];

  const linkClass =
    "inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-brand-yellow";

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

        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none">
          {services.map((s) => (
            <div key={s.no} className="group w-[70vw] max-w-[280px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 lg:mb-6">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover img-hover-zoom"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-medium">
                {s.no}
              </p>
              <h3 className="mt-3 lg:mt-4 text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-2 lg:mt-3 text-sm text-neutral-600 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 lg:mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-200 pt-8">
          <Link href="/services" className={linkClass}>
            {t("viewServices")} <span aria-hidden>&rarr;</span>
          </Link>
          <Link href="/services#process" className={linkClass}>
            {t("processLink")} <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
