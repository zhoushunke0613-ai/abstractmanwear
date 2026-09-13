import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ServicesOverview() {
  const t = useTranslations("ServicesOverview");

  const services = [
    {
      title: t("s1Title"),
      description: t("s1Desc"),
      image: "/images/brand/packing-floor.jpg",
      imageAlt: "Finished garments sorted into crates on the Abstract Man production floor",
    },
    {
      title: t("s2Title"),
      description: t("s2Desc"),
      image: "/images/brand/design-studio.jpg",
      imageAlt: "Designer developing underwear colorways and prints on screen",
    },
    {
      title: t("s3Title"),
      description: t("s3Desc"),
      image: "/images/brand/fabric-review.jpg",
      imageAlt: "Reviewing fabric and finished samples with the development team",
    },
    {
      title: t("s4Title"),
      description: t("s4Desc"),
      image: "/images/brand/sample-review-showroom.jpg",
      imageAlt: "Sample review at the showroom table in front of finished underwear styles",
    },
  ];

  const linkClass = "text-link";

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
          <p className="body-copy mt-5">
            {t("description")}
          </p>
        </div>

        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none">
          {services.map((s) => (
            <div key={s.title} className="group w-[70vw] max-w-[280px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink">
              <div className="relative aspect-[4/3] overflow-hidden mb-5 lg:mb-7">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover img-hover-zoom"
                />
              </div>
              <h3 className="font-display border-t border-neutral-300 pt-5 text-xl lg:text-2xl tracking-[-0.025em] text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-2 lg:mt-3 text-sm text-neutral-600 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 lg:mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-300 pt-8">
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
