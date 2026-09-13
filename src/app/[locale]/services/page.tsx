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
      no: "01",
      title: t("s1Title"),
      description: t("s1Desc"),
      details: [t("s1D1"), t("s1D2"), t("s1D3"), t("s1D4")],
      photo: "/images/brand/packing-floor.jpg",
      alt: t("s1ImgDesc"),
    },
    {
      id: "odm",
      no: "02",
      title: t("s2Title"),
      description: t("s2Desc"),
      details: [t("s2D1"), t("s2D2"), t("s2D3"), t("s2D4")],
      photo: "/images/brand/design-studio.jpg",
      alt: t("s2ImgDesc"),
    },
    {
      id: "fabric",
      no: "03",
      title: t("s3Title"),
      description: t("s3Desc"),
      details: [t("s3D1"), t("s3D2"), t("s3D3"), t("s3D4")],
      photo: "/images/brand/fabric-review.jpg",
      alt: t("s3ImgDesc"),
    },
    {
      id: "sampling",
      no: "04",
      title: t("s4Title"),
      description: t("s4Desc"),
      details: [t("s4D1"), t("s4D2"), t("s4D3"), t("s4D4")],
      photo: "/images/brand/sample-review-showroom.jpg",
      alt: t("s4ImgDesc"),
    },
    {
      id: "private-label",
      no: "05",
      title: t("s5Title"),
      description: t("s5Desc"),
      details: [t("s5D1"), t("s5D2"), t("s5D3"), t("s5D4")],
      photo: "/images/brand/design-colorways.jpg",
      alt: t("s5ImgDesc"),
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t("eyebrow")}
            </p>
            <h1 className="mt-3 text-2xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              {t("headline")}
            </h1>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              {t("description")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                {t("startProject")}
              </Link>
              <Link
                href="/catalog"
                className="rounded-full bg-white/70 backdrop-blur-md border border-neutral-300 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
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
          key={s.no}
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
                <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-semibold">
                  {s.no}
                </p>
                <h2 className="mt-3 text-xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
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
                <Photo src={s.photo} alt={s.alt} className="aspect-[4/3] lg:aspect-[3/2]" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* The one full process — the homepage links here instead of repeating it */}
      <OrderProcess id="process" showCta={false} />

      {/* CTA */}
      <section className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              {t("ctaHeadline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-900/70 leading-relaxed">
              {t("ctaDesc")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                {t("ctaQuote")}
              </Link>
              <Link
                href="/catalog"
                className="rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
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
