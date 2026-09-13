import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PRODUCTS } from "@/lib/products";

export default function ProductSpecialization() {
  const t = useTranslations("ProductSpecialization");
  const tp = useTranslations("ProductsPage");

  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            {t("headline")}
          </h2>
          <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
            {t("description")}
          </p>
        </div>

        <ul className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 lg:overflow-visible lg:snap-none">
          {PRODUCTS.map((p) => (
            <li key={p.slug} className="group w-[65vw] max-w-[260px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink">
              <Link href={`/products#${p.slug}`} className="block">
                <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden border border-neutral-200 bg-[#fafaf5]">
                  <Image
                    src={`/images/product-${p.slug}.svg`}
                    alt={`${t(p.key)} blueprint`}
                    width={400}
                    height={400}
                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.18em] text-neutral-500 bg-white/70 backdrop-blur-sm px-2 py-1">
                    {p.style}
                  </span>
                </div>
              </Link>
              <div className="mt-4 lg:mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
                  <Link
                    href={`/products#${p.slug}`}
                    className="underline-offset-4 decoration-neutral-300 hover:underline"
                  >
                    {t(p.key)}
                  </Link>
                </h3>
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-900 transition-colors whitespace-nowrap"
                >
                  {t("inquire")} &rarr;
                </Link>
              </div>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {t(`${p.key}Tag`)}
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                {tp("moq")}: {tp("moqShort")} · {tp("leadTime")}:{" "}
                {tp("leadTimeValue", { days: p.leadDays })}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 lg:mt-14 border-t border-neutral-200 pt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-brand-yellow"
          >
            {t("viewAll")} <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
