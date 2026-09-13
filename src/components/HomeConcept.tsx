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

function ConceptHeader({ concept }: { concept: HomeConceptName }) {
  const locale = useLocale();
  const t = useTranslations("Header");
  const dark = concept === "process";

  return (
    <header className={`relative z-40 border-b ${dark ? "border-white/20 bg-[#191714] text-white" : "border-neutral-300 bg-[#fcfaf6] text-neutral-900"}`}>
      <div className="mx-auto flex h-[4.5rem] max-w-[110rem] items-center justify-between gap-6 px-5 sm:px-8 lg:h-20 lg:px-10">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-display text-lg font-semibold tracking-[-0.04em] lg:text-2xl">ABSTRACT MAN</span>
          <span className={`hidden text-[9px] uppercase tracking-[0.22em] sm:inline ${dark ? "text-white/45" : "text-neutral-500"}`}>Est. 2006</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label={locale === "zh" ? "方案导航" : "Concept navigation"}>
          <a href="#range" className="text-[11px] font-semibold uppercase tracking-[0.13em]">{t("products")}</a>
          <a href="#services" className="text-[11px] font-semibold uppercase tracking-[0.13em]">{t("services")}</a>
          <a href="#factory" className="text-[11px] font-semibold uppercase tracking-[0.13em]">{t("factory")}</a>
          <a href="#process" className="text-[11px] font-semibold uppercase tracking-[0.13em]">{t("process")}</a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href={`/concepts/${concept}`}
            locale={locale === "zh" ? "en" : "zh"}
            className={`hidden border-b py-1 text-[10px] font-semibold uppercase tracking-[0.14em] sm:inline-flex ${dark ? "border-white/40" : "border-neutral-400"}`}
          >
            {t("switchLang")}
          </Link>
          <Link href="/contact" className={dark ? "btn-primary btn-primary-inverse" : "btn-primary"}>
            {t("startProject")}
          </Link>
        </div>
      </div>
    </header>
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
          {stages.map((stage) => (
            <figure key={stage.title} className="group relative min-h-[24rem] overflow-hidden border-white/20 md:border-r md:last:border-r-0">
              <Image
                src={stage.image}
                alt={stage.title}
                fill
                loading="eager"
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

type ConceptSectionProps = { variant: HomeConceptName };

function ProductRange({ variant }: ConceptSectionProps) {
  const t = useTranslations("ProductSpecialization");
  const products = [
    { title: t("boxerBriefs"), tag: t("boxerBriefsTag"), image: "/images/product-boxer-briefs.svg" },
    { title: t("trunks"), tag: t("trunksTag"), image: "/images/product-trunks.svg" },
    { title: t("briefs"), tag: t("briefsTag"), image: "/images/product-briefs.svg" },
    { title: t("seamless"), tag: t("seamlessTag"), image: "/images/product-seamless.svg" },
    { title: t("modal"), tag: t("modalTag"), image: "/images/product-modal.svg" },
    { title: t("performance"), tag: t("performanceTag"), image: "/images/product-performance.svg" },
  ];

  if (variant === "editorial") {
    return (
      <section id="range" className="scroll-mt-20 border-y border-neutral-300 bg-[#f7f3ec]">
        <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">{t("eyebrow")}</p>
              <h2 className="mt-5 max-w-[13ch] text-[clamp(3rem,5vw,6rem)] leading-[0.9]">{t("headline")}</h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="body-copy">{t("description")}</p>
              <Link href="/products" className="text-link mt-7">{t("viewAll")}{arrowIcon}</Link>
            </div>
          </div>
          <div className="mt-14 grid auto-rows-[17rem] grid-cols-2 gap-px bg-neutral-300 lg:grid-cols-4 lg:auto-rows-[21rem]">
            {products.map((product, index) => (
              <Link
                href="/products"
                key={product.title}
                className={`group relative overflow-hidden bg-[#fcfaf6] p-5 sm:p-7 ${index === 0 ? "col-span-2 row-span-2" : ""} ${index === 5 ? "col-span-2" : ""}`}
              >
                <div className="absolute inset-x-6 bottom-16 top-16">
                  <Image src={product.image} alt="" fill sizes={index === 0 ? "50vw" : "25vw"} className="object-contain transition duration-500 group-hover:scale-[1.025]" />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">Abstract Man / Product</span>
                  <div className="border-t border-neutral-300 pt-4">
                    <h3 className={`font-display ${index === 0 ? "text-3xl sm:text-5xl" : "text-xl sm:text-2xl"}`}>{product.title}</h3>
                    <p className="mt-2 max-w-sm text-xs leading-5 text-neutral-500 sm:text-sm sm:leading-6">{product.tag}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "process") {
    return (
      <section id="range" className="scroll-mt-20 bg-[#fcfaf6]">
        <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-6 border-b border-neutral-300 pb-8 lg:flex-row lg:items-end">
            <div><p className="eyebrow">{t("eyebrow")}</p><h2 className="section-title">{t("headline")}</h2></div>
            <Link href="/products" className="text-link">{t("viewAll")}{arrowIcon}</Link>
          </div>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-6 lg:gap-px lg:overflow-visible lg:bg-neutral-300 lg:px-0 lg:pb-0">
            {products.map((product) => (
              <article key={product.title} className="group w-[68vw] max-w-[18rem] shrink-0 snap-start bg-[#f7f3ec] p-5 lg:w-auto lg:max-w-none">
                <div className="relative aspect-[4/5]"><Image src={product.image} alt="" fill sizes="(max-width: 1024px) 68vw, 17vw" className="object-contain transition duration-500 group-hover:-translate-y-1" /></div>
                <h3 className="border-t border-neutral-300 pt-4 font-display text-2xl">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-500">{product.tag}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="range" className="scroll-mt-20 border-b border-neutral-300 bg-[#eee8df]">
      <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-7 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div><p className="eyebrow">{t("eyebrow")}</p><h2 className="section-title">{t("headline")}</h2></div>
          <p className="body-copy lg:justify-self-end">{t("description")}</p>
        </div>
        <div className="mt-12 border-t border-neutral-400">
          {products.map((product) => (
            <Link href="/products" key={product.title} className="group grid min-h-36 grid-cols-[1fr_7rem] items-center gap-5 border-b border-neutral-300 py-5 sm:grid-cols-[0.7fr_1.3fr_10rem] lg:min-h-44">
              <h3 className="font-display text-3xl sm:text-4xl">{product.title}</h3>
              <p className="hidden max-w-xl text-sm leading-7 text-neutral-600 sm:block">{product.tag}</p>
              <div className="relative h-28 lg:h-36"><Image src={product.image} alt="" fill sizes="10rem" className="object-contain transition duration-500 group-hover:translate-x-2" /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceStory({ variant }: ConceptSectionProps) {
  const t = useTranslations("ServicesOverview");
  const services = [
    { title: t("s1Title"), desc: t("s1Desc"), image: "/images/brand/packing-floor-wide.jpg" },
    { title: t("s2Title"), desc: t("s2Desc"), image: "/images/brand/design-studio.jpg" },
    { title: t("s3Title"), desc: t("s3Desc"), image: "/images/brand/fabric-review.jpg" },
    { title: t("s4Title"), desc: t("s4Desc"), image: "/images/brand/sample-review-showroom.jpg" },
  ];

  if (variant === "process") {
    return (
      <section id="services" className="scroll-mt-20 bg-[#eee8df]">
        <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl"><p className="eyebrow">{t("eyebrow")}</p><h2 className="mt-5 text-[clamp(3rem,5.2vw,6rem)] leading-[0.9]">{t("headline")}</h2></div>
          <div className="mt-14 grid gap-px bg-neutral-400 lg:grid-cols-2">
            {services.slice(0, 2).map((service) => (
              <article key={service.title} className="bg-[#fcfaf6]">
                <div className="relative aspect-[16/9]"><Image src={service.image} alt="" fill sizes="50vw" className="object-cover" /></div>
                <div className="p-7 sm:p-10"><h3 className="font-display text-3xl sm:text-4xl">{service.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">{service.desc}</p></div>
              </article>
            ))}
          </div>
          <div className="grid border-x border-b border-neutral-400 lg:grid-cols-2">
            {services.slice(2).map((service) => (
              <article key={service.title} className="border-b border-neutral-300 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 sm:p-10">
                <h3 className="font-display text-2xl sm:text-3xl">{service.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-neutral-600">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "dossier") {
    return (
      <section id="services" className="scroll-mt-20 border-b border-neutral-300 bg-[#fcfaf6]">
        <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4"><p className="eyebrow">{t("eyebrow")}</p><h2 className="section-title">{t("headline")}</h2><p className="body-copy mt-6">{t("description")}</p></div>
            <div className="border-t border-neutral-400 lg:col-span-7 lg:col-start-6">
              {services.map((service) => (
                <article key={service.title} className="grid gap-3 border-b border-neutral-300 py-7 sm:grid-cols-[0.75fr_1.25fr] sm:gap-8">
                  <h3 className="font-display text-2xl">{service.title}</h3><p className="text-sm leading-7 text-neutral-600">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="scroll-mt-20 bg-[#fcfaf6]">
      <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="eyebrow">{t("eyebrow")}</p><h2 className="section-title">{t("headline")}</h2></div>
          <p className="body-copy lg:justify-self-end">{t("description")}</p>
        </div>
        <div className="mt-14 space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <article key={service.title} className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
              <div className={`relative aspect-[16/9] overflow-hidden lg:col-span-7 ${index % 2 ? "lg:col-start-6" : ""}`}>
                <Image src={service.image} alt="" fill sizes="(min-width:1024px) 58vw,100vw" className="object-cover" />
              </div>
              <div className={`border-t border-neutral-300 pt-6 lg:col-span-4 ${index % 2 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"}`}>
                <h3 className="font-display text-3xl sm:text-4xl">{service.title}</h3><p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">{service.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStory({ variant }: ConceptSectionProps) {
  const t = useTranslations("OrderProcess");
  const steps = [
    { title: t("s1Title"), desc: t("s1Desc"), output: t("s1Del") },
    { title: t("s2Title"), desc: t("s2Desc"), output: t("s2Del") },
    { title: t("s3Title"), desc: t("s3Desc"), output: t("s3Del") },
    { title: t("s4Title"), desc: t("s4Desc"), output: t("s4Del") },
    { title: t("s5Title"), desc: t("s5Desc"), output: t("s5Del") },
    { title: t("s6Title"), desc: t("s6Desc"), output: t("s6Del") },
    { title: t("s7Title"), desc: t("s7Desc"), output: t("s7Del") },
  ];

  if (variant === "process") {
    return (
      <section id="process" className="scroll-mt-20 bg-[#191714] text-white">
        <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p className="eyebrow text-[#d37a60]">{t("eyebrow")}</p><h2 className="mt-5 max-w-[12ch] text-[clamp(3rem,5.2vw,6rem)] leading-[0.9] text-white">{t("headline")}</h2></div><p className="text-base leading-8 text-white/65 lg:col-span-4 lg:col-start-9">{t("description")}</p></div>
          <ol className="mt-14 border-t border-white/25">
            {steps.map((step) => (
              <li key={step.title} className="grid gap-4 border-b border-white/20 py-7 sm:grid-cols-[2rem_0.8fr_1.3fr_0.9fr] sm:items-start sm:gap-7 lg:py-9">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#d37a60]" aria-hidden="true" />
                <h3 className="font-display text-2xl sm:text-3xl">{step.title}</h3>
                <p className="text-sm leading-7 text-white/65">{step.desc}</p>
                <p className="text-xs leading-6 text-white/45"><span className="mb-1 block uppercase tracking-[0.15em] text-white/30">{t("outputLabel")}</span>{step.output}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  const selected = variant === "editorial" ? [steps[0], steps[2], steps[3], steps[5]] : steps;
  return (
    <section id="process" className={`scroll-mt-20 ${variant === "editorial" ? "bg-[#eee8df]" : "bg-[#f7f3ec]"}`}>
      <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-7 lg:grid-cols-[1fr_1.2fr] lg:items-end"><div><p className="eyebrow">{t("eyebrow")}</p><h2 className="section-title">{t("headline")}</h2></div><p className="body-copy lg:justify-self-end">{t("description")}</p></div>
        <ol className={`mt-12 ${variant === "editorial" ? "grid gap-px bg-neutral-300 md:grid-cols-4" : "border-t border-neutral-400"}`}>
          {selected.map((step) => (
            <li key={step.title} className={variant === "editorial" ? "bg-[#fcfaf6] p-6 sm:p-8" : "grid gap-3 border-b border-neutral-300 py-7 sm:grid-cols-[0.7fr_1.2fr_0.9fr] sm:gap-8"}>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600 sm:mt-0">{step.desc}</p>
              <p className={`text-xs leading-6 text-neutral-500 ${variant === "editorial" ? "mt-8 border-t border-neutral-300 pt-4" : ""}`}><span className="block uppercase tracking-[0.14em] text-neutral-400">{t("outputLabel")}</span>{step.output}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FactoryProof({ variant }: ConceptSectionProps) {
  const t = useTranslations("CapabilitySnapshot");
  const tc = useTranslations("Certifications");
  const tt = useTranslations("TrustBar");
  const metrics = [
    { value: tt("capacity"), label: tt("capacityLabel") },
    { value: tt("facility"), label: tt("facilityLabel") },
    { value: tt("countries"), label: tt("countriesLabel") },
    { value: tt("staff"), label: tt("staffLabel") },
  ];
  const capabilities = [t("h1"), t("h2"), t("h3"), t("h4")];
  const dark = variant !== "dossier";

  return (
    <section id="factory" className={`scroll-mt-20 border-y ${dark ? "border-white/15 bg-[#191714] text-white" : "border-neutral-300 bg-[#fcfaf6] text-neutral-900"}`}>
      <div className={`mx-auto grid max-w-[110rem] ${variant === "process" ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-2"}`}>
        <div className={`relative min-h-[28rem] lg:min-h-[48rem] ${variant === "dossier" ? "lg:order-2" : ""}`}>
          <Image src={variant === "process" ? "/images/brand/finished-goods-aisle.webp" : "/images/brand/packing-floor-wide.jpg"} alt="" fill sizes="(min-width:1024px) 55vw,100vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-14 xl:p-20">
          <div><p className="eyebrow">{t("eyebrow")}</p><h2 className={`section-title ${dark ? "text-white" : ""}`}>{t("headline")}</h2><p className={`mt-6 max-w-xl text-sm leading-7 sm:text-base ${dark ? "text-white/60" : "text-neutral-600"}`}>{t("description")}</p></div>
          <ul className={`mt-10 grid grid-cols-2 border-t ${dark ? "border-white/20" : "border-neutral-300"}`}>
            {capabilities.map((item) => <li key={item} className={`border-b py-4 pr-4 text-sm ${dark ? "border-white/15 text-white/75" : "border-neutral-300 text-neutral-700"}`}>{item}</li>)}
          </ul>
          <dl className={`mt-10 grid grid-cols-2 gap-px ${dark ? "bg-white/20" : "bg-neutral-300"}`}>
            {metrics.map((metric) => <div key={metric.label} className={`p-5 ${dark ? "bg-[#191714]" : "bg-[#f7f3ec]"}`}><dt className="font-display text-2xl sm:text-3xl">{metric.value}</dt><dd className={`mt-1 text-[9px] uppercase tracking-[0.16em] ${dark ? "text-white/45" : "text-neutral-500"}`}>{metric.label}</dd></div>)}
          </dl>
          <div className={`mt-10 border-t pt-6 ${dark ? "border-white/20" : "border-neutral-300"}`}><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c97258]">{tc("eyebrow")}</p><p className={`mt-3 text-sm leading-7 ${dark ? "text-white/65" : "text-neutral-600"}`}>{tc("bsciTitle")} · {tc("slcpTitle")} · {tc("higgTitle")}</p></div>
        </div>
      </div>
    </section>
  );
}

function CaseStories({ variant }: ConceptSectionProps) {
  const t = useTranslations("ProductsPage");
  const cases = [
    { client: t("case1Client"), title: t("case1P1Title"), spec: t("case1P1Spec"), image: "/images/brand/exhibition-booth.webp" },
    { client: t("case3Client"), title: t("case3P1Title"), spec: t("case3P1Spec"), image: "/images/brand/retail-display.webp" },
    { client: t("case2Client"), title: t("case2P1Title"), spec: t("case2P1Spec"), image: "/images/brand/exhibition-team.webp" },
  ];
  return (
    <section className={variant === "editorial" ? "bg-[#fcfaf6]" : "bg-[#eee8df]"}>
      <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-4xl"><p className="eyebrow">{t("casesEyebrow")}</p><h2 className="section-title">{t("casesHeadline")}</h2><p className="body-copy mt-6">{t("casesDesc")}</p></div>
        <div className="mt-12 grid gap-px bg-neutral-300 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.client} className="bg-[#fcfaf6]">
              <div className="relative aspect-[4/3]"><Image src={item.image} alt="" fill sizes="(min-width:1024px) 33vw,100vw" className="object-cover" /></div>
              <div className="p-6 sm:p-8"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a34f38]">{item.client}</p><h3 className="mt-4 font-display text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">{item.spec}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InquiryBand({ variant }: ConceptSectionProps) {
  const t = useTranslations("FinalCTA");
  const dark = variant === "process";
  return (
    <section className={dark ? "bg-[#a34f38] text-white" : "bg-[#211c18] text-white"}>
      <div className="mx-auto grid max-w-[110rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-10 lg:py-28">
        <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">{t("eyebrow")}</p><h2 className="mt-5 max-w-[13ch] text-[clamp(3rem,5vw,6rem)] leading-[0.9] text-white">{t("headline")}</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{t("description")}</p></div>
        <div className="flex flex-wrap gap-5 lg:justify-end"><Link href="/contact" className="btn-primary btn-primary-inverse">{t("cardButton")}</Link><Link href="/catalog" className="text-link text-link-inverse border-white/45">{t("downloadCatalog")}{arrowIcon}</Link></div>
      </div>
    </section>
  );
}

export default function HomeConcept({ concept }: { concept: HomeConceptName }) {
  return (
    <>
      <ConceptSwitcher active={concept} />
      <ConceptHeader concept={concept} />
      {concept === "editorial" ? <EditorialHero /> : concept === "process" ? <ProcessHero /> : <DossierHero />}
      {concept === "editorial" ? (
        <>
          <ProductRange variant={concept} />
          <CaseStories variant={concept} />
          <ServiceStory variant={concept} />
          <FactoryProof variant={concept} />
          <ProcessStory variant={concept} />
        </>
      ) : concept === "process" ? (
        <>
          <ServiceStory variant={concept} />
          <ProcessStory variant={concept} />
          <ProductRange variant={concept} />
          <FactoryProof variant={concept} />
          <CaseStories variant={concept} />
        </>
      ) : (
        <>
          <ProductRange variant={concept} />
          <ServiceStory variant={concept} />
          <FactoryProof variant={concept} />
          <ProcessStory variant={concept} />
          <CaseStories variant={concept} />
        </>
      )}
      <InquiryBand variant={concept} />
    </>
  );
}
