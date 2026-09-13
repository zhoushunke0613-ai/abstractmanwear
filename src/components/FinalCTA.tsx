import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function FinalCTA() {
  const t = useTranslations("FinalCTA");

  return (
    <section className="border-b border-neutral-800 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-5 max-w-[14ch] text-4xl leading-[1.02] text-white lg:text-6xl">
              {t("headline")}
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 lg:text-base">
              {t("description")}
            </p>
          </div>

          <Link href="/contact" className="group border-t border-neutral-700 pt-6 lg:col-span-4 lg:self-end">
            <p className="font-display text-2xl tracking-[-0.025em] text-white lg:text-3xl">
              {t("cardTitle")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">{t("cardDesc")}</p>
            <span className="mt-7 inline-flex items-center gap-3 border-b border-brand-yellow pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-yellow">
              {t("cardButton")} <span aria-hidden>&rarr;</span>
            </span>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-neutral-700 pt-6">
          <Link href="/catalog" className="text-link text-link-inverse">
            {t("downloadCatalog")} <span aria-hidden>&rarr;</span>
          </Link>
          <Link href="/contact?type=quote" className="text-link text-link-inverse">
            {t("requestQuote")} <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
