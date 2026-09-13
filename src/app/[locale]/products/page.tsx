import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PRODUCTS, type FabricKey } from "@/lib/products";

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

// Client names are withheld under confidentiality; each case is described
// by the kind of brand and the programs produced for it.
const CASES = [
  { client: "case1Client", programs: ["case1P1", "case1P2", "case1P3"] },
  { client: "case2Client", programs: ["case2P1"] },
];

const BRAND_ORIGINS = ["origin1", "origin2", "origin3", "origin4", "origin5", "origin6", "origin7"];

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const tn = useTranslations("ProductSpecialization");

  const index = [
    ...PRODUCTS.map((p) => ({ href: `#${p.slug}`, label: tn(p.key) })),
    { href: "#womens-kids", label: t("moreEyebrow") },
    { href: "#cases", label: t("casesEyebrow") },
  ];

  const bullet = (
    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow flex-none" aria-hidden />
  );

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
          </div>

          {/* Page index */}
          <ul className="mt-8 flex flex-wrap gap-2">
            {index.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
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
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
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
                      className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
                    >
                      {t("inquire")}
                    </Link>
                    <Link
                      href="/catalog"
                      className="rounded-full bg-white/70 backdrop-blur-md border border-neutral-300 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
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
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t("moreEyebrow")}
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
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
                className="rounded-2xl border border-neutral-200 bg-white p-6 lg:p-8"
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

      {/* Anonymized case studies */}
      <section id="cases" className="scroll-mt-20 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t("casesEyebrow")}
            </p>
            <h2 className="mt-3 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
              {t("casesHeadline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              {t("casesDesc")}
            </p>
          </div>

          <ol className="mt-10 lg:mt-14 border-t border-neutral-200">
            {CASES.map((c, i) => (
              <li
                key={c.client}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 border-b border-neutral-200 py-8 lg:py-10"
              >
                <div className="lg:col-span-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg lg:text-xl font-semibold tracking-tight text-neutral-900">
                    {t(c.client)}
                  </h3>
                </div>
                <ul className="lg:col-span-8 space-y-5">
                  {c.programs.map((program) => (
                    <li key={program} className="flex items-start gap-3">
                      {bullet}
                      <div>
                        <p className="text-sm lg:text-base font-medium text-neutral-900">
                          {t(`${program}Title`)}
                        </p>
                        <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                          {t(`${program}Spec`)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-10 lg:mt-12">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t("originsLabel")}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {BRAND_ORIGINS.map((o) => (
                <li
                  key={o}
                  className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-neutral-700"
                >
                  {t(o)}
                </li>
              ))}
            </ul>
          </div>
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
                href="/services#odm"
                className="rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-neutral-900 text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
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
