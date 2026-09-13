import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { FABRIC_GROUPS, PRODUCTS, type FabricKey } from "@/lib/products";
import Photo from "@/components/Photo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.products" });
  return { title: t("title"), description: t("description") };
}

// Beyond the men's range: lines already produced for brand programs.
const MORE_LINES: { id: string; fabric: FabricKey }[] = [
  { id: "women", fabric: "silkModal" },
  { id: "kids", fabric: "modal50s" },
];

const FUNCTIONAL = ["functional1", "functional2", "functional3", "functional4"];

// Client names are withheld under confidentiality; each case is described
// by the kind of brand and the programs produced for it.
const CASES = [
  { client: "case1Client", programs: ["case1P1", "case1P4", "case1P2", "case1P3"] },
  { client: "case3Client", programs: ["case3P1", "case3P2"] },
  { client: "case2Client", programs: ["case2P1"] },
];

const BRAND_ORIGINS = ["origin1", "origin2", "origin3", "origin4", "origin5", "origin6", "origin7"];

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const tn = useTranslations("ProductSpecialization");

  const index = [
    ...PRODUCTS.map((p) => ({ href: `#${p.slug}`, label: tn(p.key) })),
    { href: "#womens-kids", label: t("moreEyebrow") },
    { href: "#fabrics", label: t("fabricsEyebrow") },
    { href: "#cases", label: t("casesEyebrow") },
  ];

  const bullet = (
    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" aria-hidden />
  );

  return (
    <>
      {/* Header */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
            </div>
            <figure>
              <Photo
                src="/images/brand/retail-display.webp"
                alt={t("displayAlt")}
                className="aspect-[3/2]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption className="mt-3 text-xs text-neutral-500">
                {t("displayCaption")}
              </figcaption>
            </figure>
          </div>

          {/* Page index */}
          <ul className="mt-10 grid grid-cols-2 border-y border-neutral-300 sm:grid-cols-3">
            {index.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-12 items-center border-b border-r border-neutral-300 px-3 py-2 text-xs text-neutral-600 transition-colors hover:bg-neutral-900 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* One section per men's category — alternating layout */}
      {PRODUCTS.map((p, i) => {
        const facts = [
          { label: t("moq"), value: t("moqValue") },
          { label: t("sampling"), value: t("samplingValue") },
          { label: t("leadTime"), value: t("leadTimeValue", { days: p.leadDays }) },
        ];

        return (
          <section
            key={p.slug}
            id={p.slug}
            className={`scroll-mt-20 border-b border-neutral-200 ${
              i % 2 === 0 ? "bg-white" : "bg-neutral-50"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                {/* Blueprint */}
                <div
                  className={`lg:col-span-5 ${
                    i % 2 !== 0 ? "lg:order-2 lg:col-start-8" : ""
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden border border-neutral-200 bg-[#fafaf5]">
                    <Image
                      src={`/images/product-${p.slug}.svg`}
                      alt={`${tn(p.key)} blueprint`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain"
                    />
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.18em] text-neutral-500 bg-white/70 backdrop-blur-sm px-2 py-1">
                      {p.style}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`lg:col-span-6 ${
                    i % 2 !== 0 ? "lg:order-1" : "lg:col-start-7"
                  }`}
                >
                  <p className="eyebrow">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-3xl leading-tight text-neutral-900 lg:text-5xl">
                    {tn(p.key)}
                  </h2>
                  <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                    {tn(`${p.key}Tag`)}
                  </p>

                  <dl className="mt-6 border-t border-neutral-200">
                    {facts.map((f) => (
                      <div
                        key={f.label}
                        className="flex items-baseline justify-between gap-6 border-b border-neutral-200 py-3"
                      >
                        <dt className="text-sm text-neutral-500">{f.label}</dt>
                        <dd className="text-sm font-medium text-neutral-900 text-right">
                          {f.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {p.fabrics.length > 0 ? (
                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {t("fabricLabel")}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {p.fabrics.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-neutral-700">
                            {bullet}
                            {t(`fabric_${f}`)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="btn-primary"
                    >
                      {t("inquire")}
                    </Link>
                    <Link
                      href="/catalog"
                      className="btn-secondary"
                    >
                      {t("catalog")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Women's and kids' lines */}
      <section
        id="womens-kids"
        className="scroll-mt-20 border-b border-neutral-200 bg-neutral-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("moreEyebrow")}
            </p>
            <h2 className="section-title text-neutral-900">
              {t("moreHeadline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              {t("moreDesc")}
            </p>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {MORE_LINES.map((line) => (
              <div
                key={line.id}
                className="border-t border-neutral-300 py-6 lg:py-8"
              >
                <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-neutral-900">
                  {t(`${line.id}Title`)}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {t(`${line.id}Desc`)}
                </p>
                <dl className="mt-6 border-t border-neutral-200">
                  {[
                    { label: t("producedLabel"), value: t(`${line.id}Produced`) },
                    { label: t("fabricLabel"), value: t(`fabric_${line.fabric}`) },
                    { label: t("moq"), value: t("moqValue") },
                    { label: t("sampling"), value: t("samplingValue") },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-neutral-200 py-3"
                    >
                      <dt className="text-sm text-neutral-500">{f.label}</dt>
                      <dd className="text-sm text-neutral-900">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics */}
      <section id="fabrics" className="scroll-mt-20 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="grid items-end gap-8 border-b border-neutral-300 pb-8 lg:grid-cols-12 lg:gap-16 lg:pb-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">{t("fabricsEyebrow")}</p>
              <h2 className="section-title max-w-3xl text-neutral-900">
                {t("fabricsHeadline")}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="flex items-end gap-5 border-l border-neutral-300 pl-5 lg:pl-7">
                <span className="font-display text-6xl leading-none text-brand-yellow lg:text-7xl">
                  {String(FABRIC_GROUPS.length).padStart(2, "0")}
                </span>
                <p className="pb-1 text-base leading-relaxed text-neutral-600">
                  {t("fabricsDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Four everyday fabric families, grouped for comparison */}
          <div className="mt-6 grid grid-cols-1 gap-4 lg:mt-8 lg:grid-cols-12">
            {FABRIC_GROUPS.map((group, i) => (
              <article
                key={group.id}
                className={`flex min-h-full flex-col border border-neutral-300 bg-neutral-50 ${
                  i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div className="grid grid-cols-[auto_1fr] gap-5 p-6 lg:gap-7 lg:p-8">
                  <span className="font-display text-5xl leading-none text-brand-yellow/35 lg:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 lg:text-3xl">
                      {t(`${group.id}Name`)}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-neutral-600">
                      {t(`${group.id}Desc`)}
                    </p>
                  </div>
                </div>

                <div className="mt-auto border-t border-neutral-300 bg-white p-6 lg:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                      {t("fabricLabel")}
                    </p>
                    <p className="text-xs tabular-nums text-neutral-400">
                      {String(group.specs.length).padStart(2, "0")}
                    </p>
                  </div>
                  {group.specs.length > 0 ? (
                    <ol className="mt-4 border-t border-neutral-200">
                      {group.specs.map((f) => (
                        <li
                          key={f}
                          className="grid grid-cols-[1.75rem_1fr] gap-3 border-b border-neutral-200 py-3 text-sm leading-relaxed text-neutral-700 last:border-b-0"
                        >
                          <span className="text-xs tabular-nums text-brand-yellow">
                            {String(group.specs.indexOf(f) + 1).padStart(2, "0")}
                          </span>
                          <span>{t(`fabric_${f}`)}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="mt-4 border-t border-neutral-200 pt-4 text-sm leading-relaxed text-neutral-600">
                      {t("fabricCustom")}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Functional fabrics and loungewear */}
          <div className="mt-4 grid grid-cols-1 gap-px bg-neutral-700 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-neutral-900 p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
                {t("functionalLabel")}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-px border border-neutral-700 bg-neutral-700 sm:grid-cols-4">
                {FUNCTIONAL.map((f, i) => (
                  <li
                    key={f}
                    className="bg-neutral-900 p-4 text-base font-medium text-white"
                  >
                    <span className="mb-3 block text-xs tabular-nums text-neutral-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{t(f)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400">
                {t("functionalDesc")}
              </p>
            </div>

            <div className="flex flex-col justify-between bg-[#eee7dd] p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
                {t("loungeLabel")}
              </p>
              <p className="mt-12 max-w-sm text-2xl font-semibold tracking-tight text-neutral-900 lg:text-3xl">
                {t("loungeTitle")}
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                {t("loungeDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anonymized case studies */}
      <section id="cases" className="scroll-mt-20 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="grid items-end gap-8 border-b border-neutral-300 pb-8 lg:grid-cols-12 lg:gap-16 lg:pb-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">{t("casesEyebrow")}</p>
              <h2 className="section-title max-w-3xl text-neutral-900">
                {t("casesHeadline")}
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="flex items-end gap-5 border-l border-neutral-300 pl-5 lg:pl-7">
                <span className="font-display text-6xl leading-none text-brand-yellow lg:text-7xl">
                  {String(CASES.length).padStart(2, "0")}
                </span>
                <p className="pb-1 text-base leading-relaxed text-neutral-600">
                  {t("casesDesc")}
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-6 space-y-4 lg:mt-8">
            {CASES.map((c, i) => (
              <li
                key={c.client}
                className="grid overflow-hidden border border-neutral-300 bg-white lg:grid-cols-12"
              >
                <div className="flex min-h-52 flex-col justify-between bg-neutral-900 p-6 text-white lg:col-span-4 lg:min-h-full lg:p-8">
                  <p className="font-display text-6xl leading-none text-brand-yellow/80 lg:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                      {t("caseClientLabel")}
                    </p>
                    <h3 className="max-w-sm text-xl font-semibold leading-snug tracking-tight text-white lg:text-2xl">
                      {t(c.client)}
                    </h3>
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-neutral-400">
                      {t("caseProgramsCount", { count: c.programs.length })}
                    </p>
                  </div>
                </div>

                <ol
                  className={`grid gap-px bg-neutral-200 lg:col-span-8 ${
                    c.programs.length > 1 ? "md:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {c.programs.map((program, programIndex) => (
                    <li key={program} className="bg-white p-6 lg:p-8">
                      <p className="text-xs font-semibold tracking-[0.16em] text-brand-yellow tabular-nums">
                        {String(i + 1).padStart(2, "0")} — {String(programIndex + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-5 text-base font-semibold leading-snug text-neutral-900 lg:text-lg">
                        {t(`${program}Title`)}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        {t(`${program}Spec`)}
                      </p>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>

          <div className="mt-4 grid gap-px border border-neutral-300 bg-neutral-300 lg:grid-cols-[16rem_1fr]">
            <div className="bg-[#eee7dd] p-6 lg:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
                {t("originsLabel")}
              </p>
              <p className="mt-6 font-display text-5xl leading-none text-neutral-900">
                {String(BRAND_ORIGINS.length).padStart(2, "0")}
              </p>
            </div>
            <ol className="grid gap-px bg-neutral-300 sm:grid-cols-2 lg:grid-cols-3">
              {BRAND_ORIGINS.map((o, i) => (
                <li key={o} className="flex gap-3 bg-white p-4 text-sm leading-relaxed text-neutral-700 last:sm:col-span-2 lg:p-5">
                  <span className="text-xs tabular-nums text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{t(o)}</span>
                </li>
              ))}
            </ol>
          </div>
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
                {t("ctaQuote")}
              </Link>
              <Link
                href="/services#odm"
                className="btn-secondary btn-secondary-inverse"
              >
                {t("ctaOdm")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
