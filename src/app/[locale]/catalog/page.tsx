import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.catalog" });
  return { title: t("title"), description: t("description") };
}

export default async function CatalogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ form?: string }>;
}) {
  const { locale } = await params;
  const { form } = await searchParams;
  const t = await getTranslations({ locale, namespace: "CatalogPage" });

  const sections = [
    { title: t("sec1Title"), description: t("sec1Desc") },
    { title: t("sec2Title"), description: t("sec2Desc") },
    { title: t("sec3Title"), description: t("sec3Desc") },
    { title: t("sec4Title"), description: t("sec4Desc") },
    { title: t("sec5Title"), description: t("sec5Desc") },
    { title: t("sec6Title"), description: t("sec6Desc") },
  ];

  const stats = [
    { value: t("stat1"), label: t("stat1Label") },
    { value: t("stat2"), label: t("stat2Label") },
    { value: t("stat3"), label: t("stat3Label") },
  ];

  const productInterests = [
    { value: "Boxer Briefs", label: t("interest1") },
    { value: "Trunks", label: t("interest2") },
    { value: "Briefs", label: t("interest3") },
    { value: "Seamless Series", label: t("interest4") },
    { value: "Modal Series", label: t("interest5") },
    { value: "Performance Series", label: t("interest6") },
    { value: "Private Label Packaging", label: t("interest7") },
    { value: "Not Sure Yet", label: t("interest8") },
  ];

  return (
    <>
      {/* Hero */}
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

              {/* Inline stats */}
              <div className="mt-8 flex items-center gap-6">
                {stats.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-6">
                    <div>
                      <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                        {s.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                        {s.label}
                      </p>
                    </div>
                    {i < stats.length - 1 && (
                      <div className="w-px h-8 bg-neutral-200" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="#download"
                  className="btn-primary"
                >
                  {t("requestPdf")}
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  {t("talkToTeam")}
                </Link>
              </div>
            </div>

            {/* Catalog cover */}
            <div className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[3/4] overflow-hidden border-y border-neutral-300">
                <Image
                  src="/images/catalog-cover.png"
                  alt="Abstract Man product catalog cover — underwear samples with fabric rolls and tools"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the catalog — cards with borders */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("insideEyebrow")}
            </p>
            <h2 className="section-title text-neutral-900">
              {t("insideHeadline")}
            </h2>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 lg:mt-12 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-hide border-y border-neutral-300 lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none">
            {sections.map((s) => (
              <div
                key={s.title}
                className="w-[72vw] max-w-[280px] flex-shrink-0 snap-start border-r border-neutral-300 p-5 last:border-r-0 lg:w-auto lg:max-w-none lg:flex-shrink lg:p-7"
              >
                <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email gate / download */}
      <section
        id="download"
        className="border-b border-neutral-200 bg-neutral-50 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-900/60">
                {t("formEyebrow")}
              </p>
              <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-[1.15]">
                {t("formHeadline")}
              </h2>
              <p className="mt-4 text-neutral-900/70 leading-relaxed text-sm">
                {t("formDesc")}
              </p>
            </div>

            <form
              className="lg:col-span-6 lg:col-start-7 border-t border-neutral-300 py-8 lg:p-10 lg:pt-8"
              method="post"
              action="/api/catalog"
            >
              <input type="hidden" name="locale" value={locale} />
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="catalog-website">Website</label>
                <input id="catalog-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              {form && (
                <p
                  role="status"
                  className={`mb-7 border px-4 py-3 text-sm leading-relaxed ${
                    form === "success"
                      ? "border-emerald-700/30 bg-emerald-50 text-emerald-900"
                      : "border-red-700/30 bg-red-50 text-red-900"
                  }`}
                >
                  {form === "success"
                    ? t("formSuccess")
                    : form === "invalid"
                      ? t("formInvalid")
                      : t("formError")}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="catalog-name"
                    className="block text-xs text-neutral-500"
                  >
                    {t("labelName")}
                  </label>
                  <input
                    id="catalog-name"
                    name="name"
                    type="text"
                    required
                    className="field-control"
                    placeholder={t("placeholderName")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="catalog-company"
                    className="block text-xs text-neutral-500"
                  >
                    {t("labelCompany")}
                  </label>
                  <input
                    id="catalog-company"
                    name="company"
                    type="text"
                    className="field-control"
                    placeholder={t("placeholderCompany")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="catalog-email"
                    className="block text-xs text-neutral-500"
                  >
                    {t("labelEmail")}
                  </label>
                  <input
                    id="catalog-email"
                    name="email"
                    type="email"
                    required
                    className="field-control"
                    placeholder={t("placeholderEmail")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="catalog-interest"
                    className="block text-xs text-neutral-500"
                  >
                    {t("labelInterest")}
                  </label>
                  <select
                    id="catalog-interest"
                    name="interest"
                    defaultValue=""
                    className="field-control"
                  >
                    <option value="" disabled>
                      {t("selectOne")}
                    </option>
                    {productInterests.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary mt-8 w-full"
              >
                {t("submitButton")}
              </button>
              <p className="mt-3 text-xs text-neutral-400 text-center">
                {t("formNote")}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
