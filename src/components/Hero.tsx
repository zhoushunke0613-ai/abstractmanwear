import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  const proofPoints = [
    { label: t("moqLabel"), value: t("moqValue") },
    { label: t("sampleLabel"), value: t("sampleValue") },
    { label: t("leadTimeLabel"), value: t("leadTimeValue") },
  ];

  return (
    <section className="overflow-hidden bg-[#151310] text-white">
      <div className="mx-auto max-w-[110rem]">
        <div className="relative isolate h-[calc(100svh-4.5rem)] min-h-[43rem] max-h-[58rem] lg:h-[calc(100svh-5rem)]">
          <Image
            src="/images/brand/atelier-hero.png"
            alt={t("heroImageAlt")}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center] lg:object-center"
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-[#151310] via-[#151310]/72 to-[#151310]/10 sm:via-[#151310]/62 lg:via-[#151310]/28 lg:to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#151310] via-[#151310]/40 to-transparent lg:h-[34%]"
            aria-hidden
          />

          <div className="pointer-events-none absolute inset-0 grid grid-cols-4 px-5 sm:px-8 lg:grid-cols-12 lg:px-12 xl:px-20" aria-hidden>
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className={`${index > 3 ? "hidden lg:block" : "block"} border-l border-white/[0.08] last:border-r`}
              />
            ))}
          </div>

          <div className="relative z-10 flex h-full flex-col px-5 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex items-center justify-between border-b border-white/25 py-5 text-[9px] uppercase tracking-[0.24em] text-white/65 sm:text-[10px]">
              <span>Abstract Man / 01</span>
              <span className="hidden sm:inline">{t("studioLabel")}</span>
              <span>2006 — Zhongshan</span>
            </div>

            <div className="grid flex-1 grid-cols-12 items-center pb-36 pt-6 sm:pb-32 lg:pb-36">
              <div className="col-span-12 sm:col-span-10 lg:col-span-8 xl:col-span-7">
                <p className="hero-animate hero-delay-1 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75 sm:text-[11px]">
                  <span className="h-2 w-2 bg-[#efc400]" aria-hidden />
                  {t("eyebrow")}
                </p>
                <h1 className="hero-animate hero-delay-2 mt-6 whitespace-pre-line text-[clamp(3.35rem,7vw,7.5rem)] leading-[0.84] tracking-[-0.055em] text-[#f7f3ec]">
                  {t("headline")}
                </h1>
                <div className="hero-animate hero-delay-3 mt-7 max-w-xl border-l border-[#efc400] pl-5 sm:mt-8 sm:pl-6">
                  <p className="max-w-[38rem] text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                    {t("lede")}
                  </p>
                </div>
                <div className="hero-animate hero-delay-4 mt-7 flex flex-wrap items-center gap-5 sm:mt-8">
                  <Link href="/contact" className="btn-primary btn-primary-inverse">
                    {t("startProject")}
                  </Link>
                  <Link href="/catalog" className="text-link text-link-inverse border-white/50 hover:text-[#efc400]">
                    {t("downloadCatalog")} <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 border-y border-white/20 bg-[#151310]/95">
            <div className="grid min-h-28 grid-cols-3 px-5 sm:px-8 lg:grid-cols-[1.25fr_repeat(3,1fr)] lg:px-12 xl:px-20">
              <div className="hidden items-center border-r border-white/15 pr-8 lg:flex">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-[#efc400]">{t("proofEyebrow")}</p>
                  <p className="mt-2 text-sm text-white/70">{t("proofLine")}</p>
                </div>
              </div>
              {proofPoints.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex flex-col justify-center px-3 py-5 sm:px-5 lg:px-8 ${index < proofPoints.length - 1 ? "border-r border-white/15" : ""}`}
                >
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/45 sm:text-[9px]">{item.label}</span>
                  <strong className="mt-2 font-display text-[clamp(1.15rem,2vw,1.75rem)] font-medium leading-none text-white">
                    {item.value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
