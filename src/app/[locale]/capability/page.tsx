import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import ImagePlaceholder from "@/components/ImagePlaceholder";
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

  // `photo` is set where a real photograph exists; the rest keep a placeholder.
  const productionLines = [
    {
      title: t("line1Title"),
      description: t("line1Desc"),
      specs: [t("line1Spec1"), t("line1Spec2"), t("line1Spec3")],
      image: { label: t("line1ImgLabel"), description: t("line1ImgDesc") },
      photo: null as string | null,
    },
    {
      title: t("line2Title"),
      description: t("line2Desc"),
      specs: [t("line2Spec1"), t("line2Spec2"), t("line2Spec3")],
      image: { label: t("line2ImgLabel"), description: t("line2ImgDesc") },
      photo: "/images/photos/founder-sewing-floor.jpg" as string | null,
    },
  ];

  const departments = [
    { title: t("dept1Title"), description: t("dept1Desc"), image: { label: t("dept1ImgLabel"), description: t("dept1ImgDesc") }, photo: "/images/photos/design-colorways.jpg" as string | null },
    { title: t("dept2Title"), description: t("dept2Desc"), image: { label: t("dept2ImgLabel"), description: t("dept2ImgDesc") }, photo: null as string | null },
    { title: t("dept3Title"), description: t("dept3Desc"), image: { label: t("dept3ImgLabel"), description: t("dept3ImgDesc") }, photo: null as string | null },
    { title: t("dept4Title"), description: t("dept4Desc"), image: { label: t("dept4ImgLabel"), description: t("dept4ImgDesc") }, photo: "/images/photos/fabric-review.jpg" as string | null },
    { title: t("dept5Title"), description: t("dept5Desc"), image: { label: t("dept5ImgLabel"), description: t("dept5ImgDesc") }, photo: "/images/photos/packing-floor-wide.jpg" as string | null },
    { title: t("dept6Title"), description: t("dept6Desc"), image: { label: t("dept6ImgLabel"), description: t("dept6ImgDesc") }, photo: "/images/photos/sample-review-showroom.jpg" as string | null },
  ];

  const equipmentList = [
    { category: t("equipCat1"), items: [t("equipCat1Item1"), t("equipCat1Item2")] },
    { category: t("equipCat2"), items: [t("equipCat2Item1"), t("equipCat2Item2"), t("equipCat2Item3"), t("equipCat2Item4")] },
    { category: t("equipCat3"), items: [t("equipCat3Item1"), t("equipCat3Item2"), t("equipCat3Item3")] },
    { category: t("equipCat4"), items: [t("equipCat4Item1"), t("equipCat4Item2"), t("equipCat4Item3")] },
  ];

  // Factory tour — real photographs; gallery labels describe each one.
  const gallery = [
    { src: "/images/photos/packing-floor.jpg", label: t("gallery1Label") },
    { src: "/images/photos/packing-floor-wide.jpg", label: t("gallery2Label") },
    { src: "/images/photos/founder-sewing-floor.jpg", label: t("gallery3Label") },
    { src: "/images/photos/quality-inspection.jpg", label: t("gallery4Label") },
    { src: "/images/photos/design-studio.jpg", label: t("gallery5Label") },
    { src: "/images/photos/office.jpg", label: t("gallery6Label") },
    { src: "/images/photos/reception.jpg", label: t("gallery7Label") },
    { src: "/images/photos/team.jpg", label: t("gallery8Label") },
  ];

  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
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
                  {t("scheduleTour")}
                </Link>
                <Link
                  href="/catalog"
                  className="rounded-full bg-white/70 backdrop-blur-md border border-neutral-300 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
                >
                  {t("downloadCatalog")}
                </Link>
              </div>
            </div>

            {/* Company entrance */}
            <div className="lg:col-span-5 lg:col-start-8">
              <Photo
                src="/images/photos/founder-brand-wall.jpg"
                alt={t("factoryImgDesc")}
                className="aspect-[4/3] lg:aspect-[3/4]"
                position="center 30%"
                sizes="(max-width: 1024px) 100vw, 40vw"
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
                <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-semibold">
                  {t("productionLineLabel")}
                </p>
                <h2 className="mt-3 text-xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
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
                    alt={line.image.description}
                    className="aspect-[4/3]"
                    position="center 25%"
                  />
                ) : (
                  <ImagePlaceholder
                    label={line.image.label}
                    description={line.image.description}
                    className="aspect-[4/3]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Factory departments -- card grid */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t("deptEyebrow")}
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              {t("deptHeadline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              {t("deptDesc")}
            </p>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:snap-none">
            {departments.map((dept) => (
              <div
                key={dept.title}
                className="w-[72vw] max-w-[280px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow/60 hover:-translate-y-0.5 hover:shadow-md"
              >
                {dept.photo ? (
                  <Photo
                    src={dept.photo}
                    alt={dept.image.description}
                    className="aspect-[5/3] rounded-none"
                    sizes="(max-width: 1024px) 72vw, 33vw"
                  />
                ) : (
                  <ImagePlaceholder
                    label={dept.image.label}
                    description={dept.image.description}
                    className="aspect-[5/3] rounded-none border-0 border-b"
                  />
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
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-semibold">
                {t("qualityEyebrow")}
              </p>
              <h2 className="mt-3 text-xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
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
                src="/images/photos/quality-inspection.jpg"
                alt={t("qualityImgDesc")}
                className="aspect-[4/3] lg:aspect-[4/5]"
                position="center 30%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications — the one place compliance documents are shown */}
      <Certifications id="certifications" />

      {/* Equipment list */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t("equipEyebrow")}
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              {t("equipHeadline")}
            </h2>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {equipmentList.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-neutral-200 bg-white p-6"
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
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t("galleryEyebrow")}
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
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
                {t("ctaVisit")}
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
