import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PRODUCTS } from "@/lib/products";

export default function ProductSpecialization() {
  const t = useTranslations("ProductSpecialization");
  const tp = useTranslations("ProductsPage");

  return (
    <section className="border-b border-neutral-200 bg-[#fcfaf6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">
            {t("eyebrow")}
          </p>
          <h2 className="section-title text-neutral-900">
            {t("headline")}
          </h2>
          <p className="body-copy mt-5">
            {t("description")}
          </p>
        </div>

        <ul className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 lg:overflow-visible lg:snap-none">
          {PRODUCTS.map((p) => (
            <li key={p.slug} className="group w-[65vw] max-w-[260px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink">
              <Link href={`/products#${p.slug}`} className="block">
                <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden border-y border-neutral-300 bg-neutral-50">
                  <Image
                    src={`/images/product-${p.slug}.svg`}
                    alt={`${t(p.key)} blueprint`}
                    width={400}
                    height={400}
                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <span className="absolute top-3 right-3 border-b border-neutral-400 bg-neutral-50 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    {p.style}
                  </span>
                </div>
              </Link>
              <div className="mt-4 lg:mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl lg:text-2xl tracking-[-0.025em] text-neutral-900">
                  <Link
                    href={`/products#${p.slug}`}
                    className="underline-offset-4 decoration-neutral-300 hover:underline"
                  >
                    {t(p.key)}
                  </Link>
                </h3>
                <Link
                  href="/contact"
                  className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 hover:text-brand-yellow transition-colors whitespace-nowrap"
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

        <div className="mt-10 lg:mt-14 border-t border-neutral-300 pt-8">
          <Link
            href="/products"
            className="text-link"
          >
            {t("viewAll")} <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
