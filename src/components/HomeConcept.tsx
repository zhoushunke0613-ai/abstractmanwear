import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const HOME_CONCEPTS = ["editorial", "process", "dossier"] as const;

export type HomeConceptName = (typeof HOME_CONCEPTS)[number];

const arrowIcon = (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
    <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

function ConceptSwitcher({ active }: { active: HomeConceptName }) {
  const locale = useLocale();
  const labels =
    locale === "zh"
      ? { editorial: "编辑部", process: "制造叙事", dossier: "产品档案" }
      : { editorial: "Editorial", process: "Production story", dossier: "Product dossier" };

  return (
    <nav aria-label={locale === "zh" ? "首页方案" : "Homepage concepts"} className="border-b border-neutral-300 bg-[#f3eee6]">
      <div className="mx-auto flex min-h-12 max-w-7xl items-center gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
        <span className="mr-3 shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
          {locale === "zh" ? "首页方案" : "Concepts"}
        </span>
        {HOME_CONCEPTS.map((concept) => (
          <Link
            key={concept}
            href={`/concepts/${concept}`}
            aria-current={concept === active ? "page" : undefined}
            className={`shrink-0 border-b px-3 py-3 text-xs font-semibold tracking-[0.06em] transition-colors ${
              concept === active
                ? "border-neutral-900 text-neutral-900"
                : "border-transparent text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {labels[concept]}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function HeroActions({ inverse = false }: { inverse?: boolean }) {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-wrap items-center gap-5">
      <Link href="/contact" className={inverse ? "btn-primary btn-primary-inverse" : "btn-primary"}>
        {t("startProject")}
      </Link>
      <Link
        href="/catalog"
        className={`text-link ${inverse ? "text-link-inverse border-white/50" : ""}`}
      >
        {t("downloadCatalog")}
        {arrowIcon}
      </Link>
    </div>
  );
}

function EditorialHero() {
  const t = useTranslations("Hero");

  return (
    <section className="overflow-hidden bg-[#fcfaf6]">
      <div className="mx-auto max-w-[110rem] px-4 pb-10 pt-5 sm:px-6 lg:px-10 lg:pb-14">
        <div className="flex items-center justify-between border-y border-neutral-300 py-3 text-[10px] uppercase tracking-[0.22em] text-neutral-500">
          <span>Abstract Man</span>
          <span className="hidden sm:inline">{t("studioLabel")}</span>
          <span>Since 2006 · Zhongshan</span>
        </div>

        <div className="relative mt-5 min-h-[42rem] lg:min-h-[46rem]">
          <div className="absolute inset-x-0 top-0 h-[31rem] overflow-hidden lg:left-[6%] lg:h-[38rem]">
            <Image
              src="/images/brand/design-studio.jpg"
              alt={t("heroImageAlt")}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 88vw, 100vw"
              className="object-cover object-[63%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/5" aria-hidden="true" />
            <span className="absolute right-4 top-4 border border-white/55 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              Design room · Zhongshan
            </span>
          </div>

          <div className="absolute bottom-0 left-0 z-10 w-[94%] max-w-5xl border-t-[3px] border-[#a34f38] bg-[#fcfaf6] px-5 py-7 sm:px-8 lg:w-[72%] lg:px-12 lg:py-9">
            <div className="flex items-center justify-between gap-6">
              <p className="eyebrow">{t("eyebrow")}</p>
              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-neutral-400 sm:block">AM / 2006</span>
            </div>
            <h1 className="mt-5 whitespace-pre-line text-[clamp(3rem,6.1vw,6.8rem)] leading-[0.86] tracking-[-0.055em] text-neutral-900">
              {t("headline")}
            </h1>
            <div className="mt-7 grid gap-7 border-t border-neutral-300 pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">{t("lede")}</p>
              <HeroActions />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessHero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const stages =
    locale === "zh"
      ? [
          { title: "产品开发", note: "版型 · 面料 · 工艺", image: "/images/brand/design-colorways.jpg" },
          { title: "质量检验", note: "尺寸 · 外观 · 包装", image: "/images/brand/qc-station.webp" },
          { title: "包装出货", note: "装箱 · 单据 · 物流", image: "/images/brand/packing-station.webp" },
        ]
      : [
          { title: "Product development", note: "Fit · fabric · construction", image: "/images/brand/design-colorways.jpg" },
          { title: "Quality inspection", note: "Measurement · finish · packing", image: "/images/brand/qc-station.webp" },
          { title: "Packing and shipment", note: "Cartons · documents · logistics", image: "/images/brand/packing-station.webp" },
        ];

  return (
    <section className="bg-[#191714] text-white">
      <div className="mx-auto max-w-[110rem] px-4 py-6 sm:px-6 lg:px-10 lg:py-9">
        <div className="grid gap-8 border-b border-white/20 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d37a60]">{t("eyebrow")}</p>
            <h1 className="mt-5 max-w-[13ch] whitespace-pre-line text-[clamp(3.1rem,6vw,6.5rem)] leading-[0.87] tracking-[-0.05em] text-[#f7f3ec]">
              {t("headline")}
            </h1>
          </div>
          <div className="max-w-xl lg:pb-2">
            <p className="border-l border-[#d37a60] pl-5 text-sm leading-7 text-white/70 sm:text-base">{t("lede")}</p>
            <div className="mt-6"><HeroActions inverse /></div>
          </div>
        </div>

        <div className="grid min-h-[29rem] grid-cols-1 border-b border-white/20 md:grid-cols-3">
          {stages.map((stage, index) => (
            <figure key={stage.title} className="group relative min-h-[24rem] overflow-hidden border-white/20 md:border-r md:last:border-r-0">
              <Image
                src={stage.image}
                alt={stage.title}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale-[18%] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/5" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-display text-3xl leading-none text-white">{stage.title}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white/60">{stage.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="flex items-center justify-between py-4 text-[9px] uppercase tracking-[0.22em] text-white/45">
          <span>{t("proofLine")}</span>
          <span className="hidden sm:inline">Design · development · production</span>
        </div>
      </div>
    </section>
  );
}

function DossierHero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const proofPoints = [
    { label: t("moqLabel"), value: t("moqValue") },
    { label: t("sampleLabel"), value: t("sampleValue") },
    { label: t("leadTimeLabel"), value: t("leadTimeValue") },
  ];
  const productLabels = locale === "zh" ? ["平角内裤", "短款内裤", "三角内裤"] : ["Boxer briefs", "Trunks", "Briefs"];
  const productImages = ["/images/product-boxer-briefs.svg", "/images/product-trunks.svg", "/images/product-briefs.svg"];

  return (
    <section className="overflow-hidden bg-[#eee8df] text-neutral-900">
      <div className="mx-auto max-w-[110rem] px-4 py-6 sm:px-6 lg:px-10 lg:py-9">
        <div className="grid min-h-[44rem] border border-neutral-300 bg-[#fcfaf6] lg:grid-cols-12">
          <div className="relative flex flex-col justify-between border-b border-neutral-300 p-6 sm:p-9 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-12">
            <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              <span>Product development dossier</span>
              <span>Abstract Man · 2006</span>
            </div>
            <div className="py-14 lg:py-8">
              <p className="eyebrow">{t("eyebrow")}</p>
              <h1 className="mt-5 max-w-[12ch] whitespace-pre-line text-[clamp(3.1rem,6.1vw,6.8rem)] leading-[0.87] tracking-[-0.052em]">
                {t("headline")}
              </h1>
              <p className="mt-7 max-w-2xl border-l border-[#a34f38] pl-5 text-sm leading-7 text-neutral-600 sm:text-base">{t("lede")}</p>
              <div className="mt-8"><HeroActions /></div>
            </div>
            <dl className="grid grid-cols-3 border-t border-neutral-300">
              {proofPoints.map((item) => (
                <div key={item.label} className="border-r border-neutral-300 py-5 pr-3 last:border-r-0 last:pl-4 sm:px-4 sm:first:pl-0">
                  <dt className="text-[9px] uppercase tracking-[0.16em] text-neutral-500">{item.label}</dt>
                  <dd className="mt-2 font-display text-lg leading-tight sm:text-2xl">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid min-h-[36rem] grid-rows-[1.45fr_1fr] lg:col-span-5">
            <div className="relative overflow-hidden border-b border-neutral-300">
              <Image
                src="/images/brand/fabric-review.jpg"
                alt={t("heroImageAlt")}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#fcfaf6] px-4 py-3 text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                Fabric review · Zhongshan
              </div>
            </div>
            <div className="grid grid-cols-3 bg-[#f7f3ec]">
              {productImages.map((image, index) => (
                <figure key={image} className="flex min-h-48 flex-col justify-between border-r border-neutral-300 p-4 last:border-r-0 sm:p-5">
                  <div className="relative flex-1">
                    <Image src={image} alt="" fill sizes="14vw" className="object-contain" />
                  </div>
                  <figcaption className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-600">
                    {productLabels[index]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomeConcept({ concept }: { concept: HomeConceptName }) {
  return (
    <>
      <ConceptSwitcher active={concept} />
      {concept === "editorial" ? <EditorialHero /> : concept === "process" ? <ProcessHero /> : <DossierHero />}
    </>
  );
}
