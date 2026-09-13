import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="overflow-hidden border-b border-neutral-300 bg-neutral-50">
      <div className="mx-auto max-w-[96rem] px-5 py-7 sm:px-8 lg:px-12 lg:py-10 xl:px-20">
        <div className="flex items-center justify-between border-y border-neutral-300 py-3 text-[9px] uppercase tracking-[0.22em] text-neutral-500 sm:text-[10px]">
          <span>Abstract Man / 01</span>
          <span className="hidden sm:inline">Design · Development · Production</span>
          <span>Zhongshan · 2006</span>
        </div>

        <div className="mt-5 lg:hidden">
          <div className="relative aspect-[4/3] overflow-hidden border border-neutral-300">
            <Image
              src="/images/brand/reception.jpg"
              alt={t("heroImageAlt")}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 0px"
              className="object-cover object-center"
            />
            <div className="absolute right-0 top-0 bg-neutral-900 px-4 py-3 text-[9px] uppercase tracking-[0.2em] text-white">
              Atelier 01
            </div>
          </div>

          <div className="relative z-10 -mt-7 mx-4 border-t-4 border-brand-yellow bg-neutral-50 px-5 py-6">
            <p className="hero-animate hero-delay-1 eyebrow">{t("eyebrow")}</p>
            <h1 className="hero-animate hero-delay-2 mt-4 text-[clamp(2.75rem,12vw,4.5rem)] leading-[0.9] text-neutral-900">
              {t("headline")}
            </h1>
          </div>

          <div className="border-t border-neutral-300 px-4 pb-2 pt-6">
            <p className="hero-animate hero-delay-3 body-copy">{t("lede")}</p>
            <div className="hero-animate hero-delay-4 mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                {t("startProject")}
              </Link>
              <Link href="/catalog" className="btn-secondary">
                {t("downloadCatalog")}
              </Link>
            </div>
            <div className="mt-7 flex items-center gap-4 border-t border-neutral-300 pt-4 text-[9px] uppercase tracking-[0.2em] text-neutral-500">
              <span>OEM</span>
              <span className="h-px flex-1 bg-neutral-300" aria-hidden />
              <span>ODM</span>
              <span className="h-px flex-1 bg-neutral-300" aria-hidden />
              <span>Private Label</span>
            </div>
          </div>
        </div>

        <div className="mt-6 hidden lg:block">
          <div className="grid grid-cols-12">
            <div className="relative col-span-11 col-start-2 row-start-1 aspect-[2.4/1] overflow-hidden border border-neutral-300">
              <Image
                src="/images/brand/reception-hero.webp"
                alt={t("heroImageAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 92vw, 0px"
                className="object-cover object-center"
              />
              <div className="absolute right-0 top-0 bg-neutral-900 px-5 py-4 text-[9px] uppercase tracking-[0.22em] text-white">
                01 / Atelier
              </div>
              <div className="absolute bottom-0 right-0 border-l border-t border-neutral-300 bg-neutral-50 px-5 py-3 text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                Underwear · OEM · ODM
              </div>
            </div>

            <div className="hero-animate hero-delay-2 relative z-10 col-span-8 col-start-1 row-start-1 self-end border-t-4 border-brand-yellow bg-neutral-50 px-7 py-6 xl:px-10 xl:py-7">
              <div className="flex items-center justify-between gap-6">
                <p className="eyebrow">{t("eyebrow")}</p>
                <span className="text-[9px] uppercase tracking-[0.22em] text-neutral-400">AM / 2006</span>
              </div>
              <h1 className="mt-3 max-w-[18ch] text-[clamp(2.85rem,4.2vw,5rem)] leading-[0.9] text-neutral-900">
                {t("headline")}
              </h1>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 items-end border-y border-neutral-300 py-6">
            <div className="col-span-7 border-r border-neutral-300 pr-10">
              <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-brand-yellow">Manufacturing brief</p>
              <p className="body-copy max-w-2xl">{t("lede")}</p>
            </div>
            <div className="col-span-5 flex flex-wrap items-center justify-end gap-3 pl-10">
              <Link href="/contact" className="btn-primary">
                {t("startProject")}
              </Link>
              <Link href="/catalog" className="btn-secondary">
                {t("downloadCatalog")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
