import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative isolate overflow-hidden border-b border-neutral-900 bg-neutral-900 text-white md:min-h-[calc(100svh-4.5rem)] lg:min-h-[720px]">
      <div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:aspect-auto">
        <Image
          src="/images/brand/reception.jpg"
          alt={t("heroImageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(20,16,13,0.58)_0%,rgba(20,16,13,0.16)_45%,rgba(20,16,13,0)_78%)] md:block"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,16,13,0.98)_0%,rgba(20,16,13,0.9)_30%,rgba(20,16,13,0.12)_68%,rgba(20,16,13,0.04)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto -mt-16 max-w-[96rem] px-6 pb-7 pt-20 sm:px-8 md:mt-0 md:flex md:min-h-[calc(100svh-4.5rem)] md:flex-col md:justify-end md:pt-24 lg:min-h-[720px] lg:px-12 lg:pb-10 xl:px-20">
        <div>
          <p className="hero-animate hero-delay-1 text-[0.6875rem] font-semibold uppercase leading-[1.3] tracking-[0.22em] text-white/70">
            {t("eyebrow")}
          </p>
          <h1 className="hero-animate hero-delay-2 mt-4 max-w-[18ch] text-[clamp(3rem,5.2vw,6rem)] leading-[0.9] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
            {t("headline")}
          </h1>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="hero-animate hero-delay-3 max-w-2xl text-[clamp(0.9375rem,1.2vw,1.0625rem)] leading-8 text-white/75">
              {t("lede")}
            </p>
            <div className="hero-animate hero-delay-4 flex shrink-0 flex-wrap gap-3">
              <Link href="/contact" className="btn-primary btn-primary-inverse">
                {t("startProject")}
              </Link>
              <Link href="/catalog" className="btn-secondary btn-secondary-inverse">
                {t("downloadCatalog")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/30 pt-4 text-[9px] uppercase tracking-[0.22em] text-white/60 sm:text-[10px]">
          <span>Abstract Man</span>
          <span className="h-px w-8 bg-white/60" aria-hidden />
          <span>Est. 2006</span>
          <span className="sm:ml-auto">Underwear · OEM · ODM</span>
        </div>
      </div>
    </section>
  );
}
