import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.services" });
  return { title: t("title"), description: t("description") };
}

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  const services = [
    {
      no: "01",
      title: t("s1Title"),
      description: t("s1Desc"),
      details: [t("s1D1"), t("s1D2"), t("s1D3"), t("s1D4")],
      image: {
        label: t("s1ImgLabel"),
        description: t("s1ImgDesc"),
      },
    },
    {
      no: "02",
      title: t("s2Title"),
      description: t("s2Desc"),
      details: [t("s2D1"), t("s2D2"), t("s2D3"), t("s2D4")],
      image: {
        label: t("s2ImgLabel"),
        description: t("s2ImgDesc"),
      },
    },
    {
      no: "03",
      title: t("s3Title"),
      description: t("s3Desc"),
      details: [t("s3D1"), t("s3D2"), t("s3D3"), t("s3D4")],
      image: {
        label: t("s3ImgLabel"),
        description: t("s3ImgDesc"),
      },
    },
    {
      no: "04",
      title: t("s4Title"),
      description: t("s4Desc"),
      details: [t("s4D1"), t("s4D2"), t("s4D3"), t("s4D4")],
      image: {
        label: t("s4ImgLabel"),
        description: t("s4ImgDesc"),
      },
    },
    {
      no: "05",
      title: t("s5Title"),
      description: t("s5Desc"),
      details: [t("s5D1"), t("s5D2"), t("s5D3"), t("s5D4")],
      image: {
        label: t("s5ImgLabel"),
        description: t("s5ImgDesc"),
      },
    },
    {
      no: "06",
      title: t("s6Title"),
      description: t("s6Desc"),
      details: [t("s6D1"), t("s6D2"), t("s6D3"), t("s6D4")],
      image: {
        label: t("s6ImgLabel"),
        description: t("s6ImgDesc"),
      },
    },
  ];

  const processSteps = [
    { no: "01", title: t("p1Title"), description: t("p1Desc") },
    { no: "02", title: t("p2Title"), description: t("p2Desc") },
    { no: "03", title: t("p3Title"), description: t("p3Desc") },
    { no: "04", title: t("p4Title"), description: t("p4Desc") },
    { no: "05", title: t("p5Title"), description: t("p5Desc") },
    { no: "06", title: t("p6Title"), description: t("p6Desc") },
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
          className={`border-b border-neutral-200 ${
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

              {/* Image placeholder */}
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 0 ? "lg:col-start-8" : "lg:[direction:ltr]"
                }`}
              >
                <ImagePlaceholder
                  label={s.image.label}
                  description={s.image.description}
                  className="aspect-[4/3] lg:aspect-[3/2]"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process overview */}
      <section className="border-b border-neutral-200 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
              {t("processEyebrow")}
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-white">
              {t("processHeadline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-400 leading-relaxed">
              {t("processDesc")}
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <ol className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:snap-none">
            {processSteps.map((step) => (
              <li
                key={step.no}
                className="w-[65vw] max-w-[260px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink rounded-xl border border-neutral-700 bg-neutral-800/50 p-5 lg:p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-yellow text-xs font-semibold text-neutral-900">
                  {step.no}
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

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
