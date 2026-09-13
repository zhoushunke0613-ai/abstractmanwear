import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PRODUCTS } from "@/lib/products";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.products" });
  return { title: t("title"), description: t("description") };
}

export default function ProductsPage() {
  const t = useTranslations("ProductsPage");
  const tn = useTranslations("ProductSpecialization");

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

          {/* Category index */}
          <ul className="mt-8 flex flex-wrap gap-2">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <a
                  href={`#${p.slug}`}
                  className="inline-flex rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
                >
                  {tn(p.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* One section per category — alternating layout */}
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
