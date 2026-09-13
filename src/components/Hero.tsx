import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-[96rem] grid-cols-1 lg:min-h-[720px] lg:grid-cols-12">
        <div className="flex items-center px-6 py-20 lg:col-span-6 lg:px-12 xl:px-20">
          <div className="max-w-xl">
            <p className="eyebrow hero-animate hero-delay-1">{t("eyebrow")}</p>
            <h1 className="hero-animate hero-delay-2 mt-6 max-w-[13ch] text-[clamp(3rem,4.8vw,6.25rem)] leading-[0.95] text-neutral-900">
              {t("headline")}
            </h1>
            <p className="body-copy hero-animate hero-delay-3 mt-8 max-w-lg">
              {t("lede")}
            </p>
            <div className="hero-animate hero-delay-4 mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                {t("startProject")}
              </Link>
              <Link href="/catalog" className="btn-secondary">
                {t("downloadCatalog")}
              </Link>
            </div>
            <div className="mt-14 flex items-center gap-4 border-t border-neutral-300 pt-4 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <span>Abstract Man</span>
              <span className="h-px w-8 bg-brand-yellow" aria-hidden />
              <span>Est. 2006</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[52svh] border-t border-neutral-200 lg:col-span-6 lg:min-h-full lg:border-l lg:border-t-0">
          <Image
            src="/images/brand/reception.jpg"
            alt={t("heroImageAlt")}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-between bg-neutral-900/90 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-white/70">
            <span>Abstract Man</span>
            <span>2006 — Zhongshan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
