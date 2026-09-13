import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Photo from "@/components/Photo";
import OrderProcess from "@/components/OrderProcess";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.services" });
  return { title: t("title"), description: t("description") };
}

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  // Quality control lives under Factory (/capability#quality); the ids here
  // are the anchors the header's Custom Services menu points at.
  const services = [
    {
      id: "oem",
      title: t("s1Title"),
      description: t("s1Desc"),
      details: [t("s1D1"), t("s1D2"), t("s1D3"), t("s1D4")],
      photo: "/images/brand/packing-floor.jpg",
      alt: t("s1ImgDesc"),
    },
    {
      id: "odm",
      title: t("s2Title"),
      description: t("s2Desc"),
      details: [t("s2D1"), t("s2D2"), t("s2D3"), t("s2D4")],
      photo: "/images/brand/design-studio.jpg",
      alt: t("s2ImgDesc"),
    },
    {
      id: "fabric",
      title: t("s3Title"),
      description: t("s3Desc"),
      details: [t("s3D1"), t("s3D2"), t("s3D3"), t("s3D4")],
      photo: "/images/brand/fabric-review.jpg",
      alt: t("s3ImgDesc"),
    },
    {
      id: "sampling",
      title: t("s4Title"),
      description: t("s4Desc"),
      details: [t("s4D1"), t("s4D2"), t("s4D3"), t("s4D4")],
      photo: "/images/brand/sample-review-showroom.jpg",
      alt: t("s4ImgDesc"),
    },
    {
      id: "private-label",
      title: t("s5Title"),
      description: t("s5Desc"),
      details: [t("s5D1"), t("s5D2"), t("s5D3"), t("s5D4")],
      photo: "/images/brand/packing-station.webp",
      alt: t("s5ImgDesc"),
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("eyebrow")}
            </p>
            <h1 className="page-title text-neutral-900">
              {t("headline")}
            </h1>
            <p className="body-copy mt-6">
              {t("description")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary"
              >
                {t("startProject")}
              </Link>
              <Link
                href="/catalog"
                className="btn-secondary"
              >
                {t("downloadCatalog")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service detail sections — alternating layout */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-20 border-b border-neutral-200 ${
            i % 2 === 0 ? "bg-white" : "bg-neutral-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                i % 2 !== 0 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Text */}
              <div
                className={`lg:col-span-6 ${
                  i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <h2 className="text-3xl leading-tight text-neutral-900 lg:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm text-neutral-700"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none"
                        aria-hidden
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo */}
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 0 ? "lg:col-start-8" : "lg:[direction:ltr]"
                }`}
              >
                <Photo
                  src={s.photo}
                  alt={s.alt}
                  className="aspect-[4/3] lg:aspect-[3/2]"
                  priority={i === 0}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* The one full process — the homepage links here instead of repeating it */}
      <OrderProcess id="process" showCta={false} />

      {/* CTA */}
      <section className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl leading-tight text-white lg:text-6xl">
              {t("ctaHeadline")}
            </h2>
            <p className="mt-5 max-w-2xl text-sm lg:text-base text-neutral-400 leading-relaxed">
              {t("ctaDesc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary btn-primary-inverse"
              >
                {t("ctaQuote")}
              </Link>
              <Link
                href="/catalog"
                className="btn-secondary btn-secondary-inverse"
              >
                {t("ctaCatalog")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
