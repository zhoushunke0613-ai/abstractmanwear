import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Photo from "@/components/Photo";
import Certifications from "@/components/Certifications";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.capability" });
  return { title: t("title"), description: t("description") };
}

export default function CapabilityPage() {
  const t = useTranslations("CapabilityPage");

  const factoryStats = [
    { value: t("stat1"), label: t("stat1Label") },
    { value: t("stat2"), label: t("stat2Label") },
    { value: t("stat3"), label: t("stat3Label") },
    { value: t("stat4"), label: t("stat4Label") },
  ];

  // Where no real photograph exists, the slot carries process information
  // instead of a stand-in image.
  const productionLines = [
    {
      title: t("line1Title"),
      description: t("line1Desc"),
      specs: [t("line1Spec1"), t("line1Spec2"), t("line1Spec3")],
      alt: t("line1ImgDesc"),
      photo: null as string | null,
      flowEyebrow: t("line1FlowEyebrow"),
      flow: [t("line1Flow1"), t("line1Flow2"), t("line1Flow3"), t("line1Flow4")],
    },
    {
      title: t("line2Title"),
      description: t("line2Desc"),
      specs: [t("line2Spec1"), t("line2Spec2"), t("line2Spec3")],
      alt: t("line2ImgDesc"),
      photo: "/images/brand/founder-sewing-floor.jpg" as string | null,
      flowEyebrow: "",
      flow: [] as string[],
    },
  ];

  const departments = [
    { title: t("dept1Title"), description: t("dept1Desc"), alt: t("dept1ImgDesc"), photo: "/images/brand/design-colorways.jpg" as string | null, tags: "" },
    { title: t("dept2Title"), description: t("dept2Desc"), alt: t("dept2ImgDesc"), photo: "/images/brand/retail-display.webp" as string | null, tags: t("dept2Tags") },
    { title: t("dept3Title"), description: t("dept3Desc"), alt: t("dept3ImgDesc"), photo: "/images/service-odm.png" as string | null, tags: t("dept3Tags") },
    { title: t("dept4Title"), description: t("dept4Desc"), alt: t("dept4ImgDesc"), photo: "/images/brand/qc-station.webp" as string | null, tags: "" },
    { title: t("dept5Title"), description: t("dept5Desc"), alt: t("dept5ImgDesc"), photo: "/images/brand/packing-station.webp" as string | null, tags: "" },
    { title: t("dept6Title"), description: t("dept6Desc"), alt: t("dept6ImgDesc"), photo: "/images/brand/sample-review-showroom.jpg" as string | null, tags: "" },
  ];

  const equipmentList = [
    { category: t("equipCat1"), items: [t("equipCat1Item1"), t("equipCat1Item2")] },
    { category: t("equipCat2"), items: [t("equipCat2Item1"), t("equipCat2Item2"), t("equipCat2Item3"), t("equipCat2Item4")] },
    { category: t("equipCat3"), items: [t("equipCat3Item1"), t("equipCat3Item2"), t("equipCat3Item3")] },
    { category: t("equipCat4"), items: [t("equipCat4Item1"), t("equipCat4Item2"), t("equipCat4Item3")] },
  ];

  // Factory tour — real photographs; gallery labels describe each one.
  const gallery = [
    { src: "/images/brand/packing-floor.jpg", label: t("gallery1Label") },
    { src: "/images/brand/packing-floor-wide.jpg", label: t("gallery2Label") },
    { src: "/images/brand/founder-sewing-floor.jpg", label: t("gallery3Label") },
    { src: "/images/brand/quality-inspection.jpg", label: t("gallery4Label") },
    { src: "/images/brand/design-studio.jpg", label: t("gallery5Label") },
    { src: "/images/brand/office.jpg", label: t("gallery6Label") },
    { src: "/images/brand/reception.jpg", label: t("gallery7Label") },
    { src: "/images/brand/team.jpg", label: t("gallery8Label") },
  ];

  return (
    <>
      {/* Header */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
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
                  {t("scheduleTour")}
                </Link>
                <Link
                  href="/catalog"
                  className="btn-secondary"
                >
                  {t("downloadCatalog")}
                </Link>
              </div>
            </div>

            {/* Company entrance */}
            <div className="lg:col-span-5 lg:col-start-8">
              <Photo
                src="/images/brand/founder-brand-wall.jpg"
                alt={t("factoryImgDesc")}
                className="aspect-[4/3] lg:aspect-[3/4]"
                position="center 30%"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-neutral-800 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="-mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-px scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none bg-neutral-800">
            {factoryStats.map((s) => (
              <div
                key={s.label}
                className="min-w-[160px] flex-shrink-0 snap-start lg:min-w-0 lg:flex-shrink bg-neutral-900 py-8 px-5 lg:py-10 lg:px-8"
              >
                <p className="text-2xl lg:text-4xl font-semibold tracking-tight text-white whitespace-nowrap">
                  {s.value}
                </p>
                <p className="mt-1 lg:mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production lines */}
      {productionLines.map((line, i) => (
        <section
          key={line.title}
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
              <div
                className={`lg:col-span-6 ${
                  i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <p className="eyebrow">
                  {t("productionLineLabel")}
                </p>
                <h2 className="mt-4 text-3xl leading-tight text-neutral-900 lg:text-5xl">
                  {line.title}
                </h2>
                <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                  {line.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {line.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-3 text-sm text-neutral-700"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none"
                        aria-hidden
                      />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`lg:col-span-5 ${
                  i % 2 === 0 ? "lg:col-start-8" : "lg:[direction:ltr]"
                }`}
              >
                {line.photo ? (
                  <Photo
                    src={line.photo}
                    alt={line.alt}
                    className="aspect-[4/3]"
                    position="center 25%"
                  />
                ) : (
                  /* Process panel in place of a photo */
              <div className="aspect-[4/3] bg-neutral-900 p-6 lg:p-10 flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
                      {line.flowEyebrow}
                    </p>
                    <ol className="mt-5 lg:mt-6">
                      {line.flow.map((step, n) => (
                        <li
                          key={step}
                          className="flex items-baseline gap-4 border-t border-neutral-700 py-3 first:border-t-0"
                        >
                          <span className="text-sm font-semibold text-brand-yellow tabular-nums">
                            {String(n + 1).padStart(2, "0")}
                          </span>
                          <span className="text-base lg:text-lg text-white">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Factory departments -- card grid */}
      <section id="departments" className="scroll-mt-20 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("deptEyebrow")}
            </p>
            <h2 className="section-title text-neutral-900">
              {t("deptHeadline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              {t("deptDesc")}
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-hide border-y border-neutral-300 lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none">
            {departments.map((dept, idx) => (
              <div
                key={dept.title}
                className="w-[75vw] max-w-[300px] flex-shrink-0 snap-start border-r border-neutral-300 last:border-r-0 lg:w-auto lg:max-w-none lg:flex-shrink overflow-hidden"
              >
                {dept.photo ? (
                  <Photo
                    src={dept.photo}
                    alt={dept.alt}
                    className="aspect-[5/3] rounded-none"
                    sizes="(max-width: 1024px) 72vw, 33vw"
                  />
                ) : (
                  /* Department number and techniques in place of a photo */
                  <div className="aspect-[5/3] flex flex-col justify-between bg-neutral-900 p-5 lg:p-6">
                    <span className="text-4xl lg:text-5xl font-semibold tracking-tight text-brand-yellow tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs uppercase tracking-[0.15em] text-neutral-300 leading-relaxed">
                      {dept.tags}
                    </p>
                  </div>
                )}
                <div className="p-5 lg:p-6">
                  <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                    {dept.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality control */}
      <section
        id="quality"
        className="scroll-mt-20 border-b border-neutral-200 bg-neutral-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
                <p className="eyebrow">
                {t("qualityEyebrow")}
              </p>
                <h2 className="mt-4 text-3xl leading-tight text-neutral-900 lg:text-5xl">
                {t("qualityTitle")}
              </h2>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                {t("qualityDesc")}
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  t("qualityD1"),
                  t("qualityD2"),
                  t("qualityD3"),
                  t("qualityD4"),
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-neutral-700"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Photo
                src="/images/brand/qc-station.webp"
                alt={t("qualityImgDesc")}
                className="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials and finished goods, shown in their actual storage areas */}
      <section id="packing-storage" className="scroll-mt-20 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <p className="eyebrow">
                {t("storageEyebrow")}
              </p>
              <h2 className="section-title text-neutral-900">
                {t("storageHeadline")}
              </h2>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                {t("storageDesc")}
              </p>
              <figure className="mt-8">
                <Photo
                  src="/images/brand/storage-shelves.webp"
                  alt={t("storageShelvesAlt")}
                  className="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption className="mt-3 text-sm text-neutral-600">
                  {t("storageShelvesCaption")}
                </figcaption>
              </figure>
            </div>
            <figure>
              <Photo
                src="/images/brand/finished-goods-aisle.webp"
                alt={t("warehouseAlt")}
                className="aspect-[3/4]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption className="mt-3 text-sm text-neutral-600">
                {t("warehouseCaption")}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Certifications — the one place compliance documents are shown */}
      <Certifications id="certifications" />

      {/* Equipment list */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("equipEyebrow")}
            </p>
            <h2 className="section-title text-neutral-900">
              {t("equipHeadline")}
            </h2>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {equipmentList.map((group) => (
              <div
                key={group.category}
                className="border-t border-neutral-300 bg-transparent py-6"
              >
                <div className="h-1 w-8 bg-brand-yellow" />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-neutral-900">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-neutral-600"
                    >
                      <span
                        className="mt-1.5 h-1 w-1 rounded-full bg-neutral-400 flex-none"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory tour gallery */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("galleryEyebrow")}
            </p>
            <h2 className="section-title text-neutral-900">
              {t("galleryHeadline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              {t("galleryDesc")}
            </p>
          </div>

          <ul className="mt-10 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {gallery.map((photo) => (
              <li key={photo.src}>
                <Photo
                  src={photo.src}
                  alt={photo.label}
                  className="aspect-square"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <p className="mt-2 text-xs text-neutral-500">{photo.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
                {t("ctaVisit")}
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
