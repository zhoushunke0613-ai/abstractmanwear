import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function FinalCTA() {
  const t = useTranslations("FinalCTA");

  return (
    <section className="border-b border-neutral-200 bg-brand-yellow">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-900/70">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-2xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
            {t("headline")}
          </h2>
          <p className="mt-4 text-sm lg:text-lg text-neutral-900/80 leading-relaxed">
            {t("description")}
          </p>
        </div>

        <Link
          href="/contact"
          className="group mt-8 lg:mt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6 rounded-2xl bg-neutral-900 text-white p-6 lg:p-10 shadow-xl transition-all duration-500 ease-out hover:bg-neutral-800 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div>
            <p className="text-2xl lg:text-3xl font-semibold tracking-tight">
              {t("cardTitle")}
            </p>
            <p className="mt-2 text-sm lg:text-base text-neutral-400 max-w-xl leading-relaxed">
              {t("cardDesc")}
            </p>
          </div>
          <span
            aria-hidden
            className="flex-none self-start lg:self-auto inline-flex items-center gap-3 rounded-full bg-brand-yellow text-neutral-900 px-5 py-2.5 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1"
          >
            {t("cardButton")}
            <span>&rarr;</span>
          </span>
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900/70 transition-colors hover:text-neutral-900"
          >
            <span className="text-xs">&rarr;</span> {t("downloadCatalog")}
          </Link>
          <Link
            href="/contact?type=quote"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900/70 transition-colors hover:text-neutral-900"
          >
            <span className="text-xs">&rarr;</span> {t("requestQuote")}
          </Link>
        </div>
      </div>
    </section>
  );
}
