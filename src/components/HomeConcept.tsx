import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const HOME_CONCEPTS = ["editorial", "process", "dossier"] as const;

export type HomeConceptName = (typeof HOME_CONCEPTS)[number];

const arrowIcon = (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
    <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

function ConceptSwitcher({ active }: { active: HomeConceptName }) {
  const locale = useLocale();
  const labels = locale === "zh"
    ? { editorial: "商业工作室", process: "电影感工厂", dossier: "材料系统" }
    : { editorial: "Commercial studio", process: "Cinematic factory", dossier: "Material system" };

  return (
    <nav
      aria-label={locale === "zh" ? "首页设计方案" : "Homepage design concepts"}
      className="fixed bottom-4 left-1/2 z-[80] flex max-w-[calc(100vw-1.5rem)] -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/95 p-1.5 font-sans text-neutral-900"
      style={{ boxShadow: "0 12px 36px rgba(0,0,0,.18)", backdropFilter: "blur(16px)" }}
    >
      {HOME_CONCEPTS.map((concept) => (
        <Link
          key={concept}
          href={`/concepts/${concept}`}
          aria-current={concept === active ? "page" : undefined}
          className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[10px] font-bold tracking-[0.08em] transition-colors sm:px-5 sm:text-xs ${
            concept === active ? "bg-black text-white" : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
          }`}
        >
          {labels[concept]}
        </Link>
      ))}
    </nav>
  );
}

function CommercialConcept() {
  const locale = useLocale();
  const h = useTranslations("Header");
  const hero = useTranslations("Hero");
  const trust = useTranslations("TrustBar");
  const product = useTranslations("ProductSpecialization");
  const services = useTranslations("ServicesOverview");
  const capability = useTranslations("CapabilitySnapshot");
  const process = useTranslations("OrderProcess");
  const cases = useTranslations("ProductsPage");
  const cta = useTranslations("FinalCTA");
  const footer = useTranslations("Footer");

  const products = [
    { name: product("boxerBriefs"), note: product("boxerBriefsTag"), image: "/images/product-boxer-briefs.svg", tone: "bg-[#e2b714]" },
    { name: product("trunks"), note: product("trunksTag"), image: "/images/product-trunks.svg", tone: "bg-[#c86f54]" },
    { name: product("briefs"), note: product("briefsTag"), image: "/images/product-briefs.svg", tone: "bg-[#d9d5cc]" },
    { name: product("performance"), note: product("performanceTag"), image: "/images/product-performance.svg", tone: "bg-[#9aa48a]" },
  ];
  const serviceCards = [
    { title: services("s1Title"), desc: services("s1Desc"), image: "/images/brand/founder-sewing-floor.jpg" },
    { title: services("s2Title"), desc: services("s2Desc"), image: "/images/brand/design-colorways.jpg" },
    { title: services("s3Title"), desc: services("s3Desc"), image: "/images/brand/fabric-review.jpg" },
    { title: services("s4Title"), desc: services("s4Desc"), image: "/images/brand/packing-station.webp" },
  ];
  const metrics = [
    [trust("capacity"), trust("capacityLabel")],
    [trust("facility"), trust("facilityLabel")],
    [trust("countries"), trust("countriesLabel")],
    [trust("staff"), trust("staffLabel")],
  ];

  return (
    <div className="concept-commercial min-h-screen overflow-hidden bg-[#f2f0ea] font-sans text-[#151512]">
      <header className="relative z-40 px-4 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex h-16 max-w-[96rem] items-center justify-between rounded-full border border-black/10 bg-white px-5 sm:px-7">
          <Link href="/" className="text-sm font-black tracking-[-0.04em] sm:text-lg">ABSTRACT MAN</Link>
          <nav className="hidden items-center gap-7 text-xs font-bold lg:flex">
            <a href="#commercial-products">{h("products")}</a>
            <a href="#commercial-services">{h("services")}</a>
            <a href="#commercial-factory">{h("factory")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/concepts/editorial" locale={locale === "zh" ? "en" : "zh"} className="hidden px-3 py-2 text-[11px] font-bold sm:inline-flex">{h("switchLang")}</Link>
            <Link href="/contact" className="rounded-full bg-black px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:px-5 sm:text-xs">{h("startProject")}</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="px-4 pb-5 pt-4 sm:px-6 lg:px-10">
          <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-[96rem] overflow-hidden rounded-[2rem] bg-[#171717] text-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative z-20 flex flex-col justify-between p-7 sm:p-10 lg:p-14 xl:p-16">
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e2b714]" />{hero("eyebrow")}
              </p>
              <div className="py-14 lg:py-8">
                <h1 className="max-w-[13ch] whitespace-pre-line text-[clamp(3rem,4.8vw,6rem)] font-black leading-[0.86] tracking-[-0.07em]">
                  {hero("headline")}
                </h1>
                <p className="mt-8 max-w-xl text-sm font-medium leading-7 text-white/65 sm:text-base">{hero("lede")}</p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#e2b714] px-6 py-4 text-xs font-black uppercase tracking-[0.08em] text-black">{hero("startProject")}{arrowIcon}</Link>
                  <Link href="/catalog" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-white">{hero("downloadCatalog")}</Link>
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">Design · Development · Production</p>
            </div>

            <div className="relative min-h-[32rem] lg:min-h-full">
              <div className="absolute inset-4 overflow-hidden rounded-[1.5rem] sm:inset-6 lg:left-0">
                <Image src="/images/brand/design-studio.jpg" alt={hero("heroImageAlt")} fill loading="eager" sizes="(min-width:1024px) 55vw,100vw" className="object-cover object-center" />
              </div>
              <div className="absolute bottom-8 left-0 z-20 w-[42%] overflow-hidden rounded-3xl border-[6px] border-[#171717] bg-white sm:bottom-12 sm:w-[38%] lg:-left-10">
                <div className="relative aspect-[4/5]"><Image src="/images/brand/fabric-review.jpg" alt="" fill loading="eager" sizes="22vw" className="object-cover" /></div>
              </div>
              <div className="absolute right-7 top-8 z-20 rounded-full bg-[#e2b714] px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-black sm:right-10 sm:top-10">Since 2006</div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-10">
          <dl className="mx-auto grid max-w-[96rem] grid-cols-2 overflow-hidden rounded-[1.5rem] bg-[#e2b714] lg:grid-cols-4">
            {metrics.map(([value, label]) => (
              <div key={label} className="border-b border-black/15 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <dt className="text-[clamp(1.8rem,3vw,3.5rem)] font-black leading-none tracking-[-0.05em]">{value}</dt>
                <dd className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-black/60">{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="commercial-products" className="px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-[96rem]">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e24728]">{product("eyebrow")}</p><h2 className="mt-4 max-w-[13ch] text-[clamp(3rem,6vw,6.8rem)] font-black leading-[0.87] tracking-[-0.07em]">{product("headline")}</h2></div>
              <Link href="/products" className="inline-flex items-center gap-2 text-sm font-black underline underline-offset-8">{product("viewAll")}{arrowIcon}</Link>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((item, index) => (
                <Link href="/products" key={item.name} className={`${item.tone} group flex min-h-[27rem] flex-col justify-between overflow-hidden rounded-[1.35rem] p-6 sm:min-h-[32rem] sm:p-8 ${index === 0 ? "lg:translate-y-5" : index === 2 ? "lg:-translate-y-3" : ""}`}>
                  <div><h3 className="text-3xl font-black tracking-[-0.04em]">{item.name}</h3><p className="mt-3 text-sm font-medium leading-6 text-black/60">{item.note}</p></div>
                  <div className="relative -mx-6 h-64 transition-transform duration-500 group-hover:scale-105 sm:-mx-8"><Image src={item.image} alt="" fill sizes="(min-width:1024px) 25vw,50vw" className="object-contain" /></div>
                  <span className="inline-flex h-11 w-11 items-center justify-center self-end rounded-full bg-black text-white">{arrowIcon}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="commercial-services" className="bg-[#171717] px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-[96rem]">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <h2 className="max-w-[13ch] text-[clamp(3rem,5.5vw,6rem)] font-black leading-[0.88] tracking-[-0.065em]">{services("headline")}</h2>
              <p className="max-w-2xl text-base font-medium leading-8 text-white/55 lg:justify-self-end">{services("description")}</p>
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-2">
              {serviceCards.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#242421]">
                  <div className="relative aspect-[16/9]"><Image src={item.image} alt="" fill sizes="(min-width:768px) 50vw,100vw" className="object-cover" /></div>
                  <div className="p-7 sm:p-9"><h3 className="text-2xl font-black tracking-[-0.03em] sm:text-3xl">{item.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{item.desc}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="commercial-factory" className="bg-[#a64f38] px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div><p className="text-xs font-black uppercase tracking-[0.18em] text-white/65">{capability("eyebrow")}</p><h2 className="mt-5 text-[clamp(3rem,5.5vw,6.2rem)] font-black leading-[0.88] tracking-[-0.065em]">{capability("headline")}</h2><p className="mt-7 max-w-xl text-base font-medium leading-8 text-white/68">{capability("description")}</p><Link href="/capability" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f2f0ea] px-6 py-4 text-xs font-black uppercase tracking-[0.08em] text-black">{capability("tourCta")}{arrowIcon}</Link></div>
            <div className="relative min-h-[32rem] overflow-hidden rounded-[2.5rem] lg:min-h-[46rem]"><Image src="/images/brand/finished-goods-aisle.webp" alt="" fill sizes="(min-width:1024px) 60vw,100vw" className="object-cover" /></div>
          </div>
        </section>

        <section className="bg-[#f2f0ea] px-4 py-24 sm:px-6 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-[96rem]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e24728]">{process("eyebrow")}</p>
            <h2 className="mt-4 max-w-[14ch] text-[clamp(3rem,5.5vw,6rem)] font-black leading-[0.88] tracking-[-0.065em]">{process("headline")}</h2>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {["s1", "s3", "s4", "s6"].map((key) => (
                <article key={key} className="rounded-[1.35rem] border border-black/10 bg-[#faf9f5] p-7 sm:p-8"><span className="mb-14 block h-3 w-3 rounded-full bg-[#e2b714]" /><h3 className="text-2xl font-black tracking-[-0.03em]">{process(`${key}Title`)}</h3><p className="mt-4 text-sm leading-7 text-black/55">{process(`${key}Desc`)}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid min-h-[44rem] lg:grid-cols-2">
          <div className="relative"><Image src="/images/brand/retail-display.webp" alt="" fill sizes="(min-width:1024px) 50vw,100vw" className="object-cover" /></div>
          <div className="flex flex-col justify-center bg-[#c9bca8] p-8 sm:p-12 lg:p-20"><p className="text-xs font-black uppercase tracking-[0.18em] text-black/55">{cases("casesEyebrow")}</p><h2 className="mt-5 text-[clamp(3rem,5vw,5.8rem)] font-black leading-[0.9] tracking-[-0.06em]">{cases("casesHeadline")}</h2><p className="mt-7 max-w-xl text-base font-medium leading-8 text-black/60">{cases("casesDesc")}</p><p className="mt-10 max-w-xl border-t-2 border-black pt-7 text-xl font-black">{cases("case3Client")} · {cases("case3P1Title")}</p></div>
        </section>

        <section className="bg-[#e2b714] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
          <div className="mx-auto flex max-w-[96rem] flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.18em]">{cta("eyebrow")}</p><h2 className="mt-5 max-w-[13ch] text-[clamp(3.3rem,6vw,7rem)] font-black leading-[0.86] tracking-[-0.07em]">{cta("headline")}</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-black px-7 py-5 text-xs font-black uppercase tracking-[0.08em] text-white">{cta("cardButton")}{arrowIcon}</Link></div>
        </section>
      </main>

      <footer className="bg-[#171717] px-5 pb-28 pt-14 font-sans text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[96rem] flex-col justify-between gap-10 border-t border-white/15 pt-8 sm:flex-row"><div><p className="text-2xl font-black tracking-[-0.04em]">ABSTRACT MAN</p><p className="mt-3 max-w-md text-sm leading-7 text-white/45">{footer("description")}</p></div><div className="text-sm text-white/55"><p>{footer("location")}</p><a className="mt-2 block text-white" href="mailto:lei@abstractmanwear.com">lei@abstractmanwear.com</a></div></div></footer>
    </div>
  );
}

function CinematicConcept() {
  const locale = useLocale();
  const h = useTranslations("Header");
  const hero = useTranslations("Hero");
  const trust = useTranslations("TrustBar");
  const services = useTranslations("ServicesOverview");
  const product = useTranslations("ProductSpecialization");
  const process = useTranslations("OrderProcess");
  const capability = useTranslations("CapabilitySnapshot");
  const cases = useTranslations("ProductsPage");
  const cta = useTranslations("FinalCTA");
  const footer = useTranslations("Footer");

  const stages = [
    { title: services("s2Title"), desc: services("s2Desc"), image: "/images/brand/design-colorways.jpg" },
    { title: services("s3Title"), desc: services("s3Desc"), image: "/images/brand/fabric-review.jpg" },
    { title: services("s1Title"), desc: services("s1Desc"), image: "/images/brand/founder-sewing-floor.jpg" },
    { title: services("s4Title"), desc: services("s4Desc"), image: "/images/brand/qc-station.webp" },
  ];

  return (
    <div className="concept-cinematic min-h-screen overflow-hidden bg-[#eee9df] font-sans text-[#201d19]">
      <header className="absolute inset-x-0 top-0 z-40 text-white">
        <div className="mx-auto flex h-24 max-w-[104rem] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="text-base font-semibold tracking-[0.03em] sm:text-xl">ABSTRACT MAN</Link>
          <nav className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.16em] lg:flex"><a href="#cinematic-story">{h("services")}</a><a href="#cinematic-range">{h("products")}</a><a href="#cinematic-process">{h("process")}</a></nav>
          <div className="flex items-center gap-4"><Link href="/concepts/process" locale={locale === "zh" ? "en" : "zh"} className="text-[11px] uppercase tracking-[0.16em]">{h("switchLang")}</Link><Link href="/contact" className="border border-white/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em]">{h("startProject")}</Link></div>
        </div>
      </header>

      <main>
        <section className="relative min-h-[100svh] text-white">
          <Image src="/images/brand/packing-floor.jpg" alt="" fill loading="eager" sizes="100vw" className="scale-[1.12] object-cover object-[center_68%] saturate-[0.82] contrast-[1.04] lg:scale-105 lg:object-[center_70%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,20,18,.78)_0%,rgba(16,20,18,.12)_58%,rgba(16,20,18,.34)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="mx-auto max-w-[104rem] px-6 pb-12 lg:px-10 lg:pb-16">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/65">{hero("eyebrow")}</p>
              <h1 className="mt-6 max-w-[14ch] whitespace-pre-line text-[clamp(3.5rem,7.3vw,8.5rem)] font-light leading-[0.87] tracking-[-0.055em]">{hero("headline")}</h1>
              <div className="mt-10 flex flex-col justify-between gap-7 border-t border-white/35 pt-6 lg:flex-row lg:items-end"><p className="max-w-2xl text-sm leading-7 text-white/72 sm:text-base">{hero("lede")}</p><div className="flex items-center gap-5"><Link href="/contact" className="bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-black">{hero("startProject")}</Link><Link href="/catalog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">{hero("downloadCatalog")}{arrowIcon}</Link></div></div>
            </div>
          </div>
        </section>

        <section className="bg-[#101513] text-white">
          <div className="mx-auto grid max-w-[104rem] grid-cols-2 px-6 lg:grid-cols-4 lg:px-10">
            {[[trust("bsci"), trust("bsciLabel")],[trust("capacity"),trust("capacityLabel")],[trust("facility"),trust("facilityLabel")],[trust("countries"),trust("countriesLabel")]].map(([value,label]) => <div key={label} className="border-b border-white/15 py-9 pr-5 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"><p className="text-2xl font-light sm:text-3xl">{value}</p><p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/38">{label}</p></div>)}
          </div>
        </section>

        <section id="cinematic-story" className="py-28 lg:py-44">
          <div className="mx-auto max-w-[104rem] px-6 lg:px-10"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a45f43]">{services("eyebrow")}</p><h2 className="mt-6 max-w-[18ch] text-[clamp(3rem,5.3vw,6.5rem)] font-light leading-[0.96] tracking-[-0.045em]">{services("headline")}</h2></div>
          <div className="mt-24 space-y-28 lg:space-y-44">
            {stages.map((stage, index) => (
              <article key={stage.title} className={`mx-auto grid max-w-[104rem] items-center gap-10 px-6 lg:grid-cols-12 lg:px-10 ${index % 2 ? "" : ""}`}>
                <div className={`relative aspect-[4/3] overflow-hidden bg-[#d7d0c5] lg:col-span-7 ${index % 2 ? "lg:col-start-6" : ""}`}><Image src={stage.image} alt="" fill sizes="(min-width:1024px) 58vw,100vw" className="object-cover saturate-[0.84] contrast-[1.03]" /></div>
                <div className={`lg:col-span-4 ${index % 2 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"}`}><span className="mb-8 block h-px w-20 bg-[#a45f43]" /><h3 className="text-3xl font-light tracking-[-0.035em] sm:text-5xl">{stage.title}</h3><p className="mt-6 text-sm leading-8 text-black/58 sm:text-base">{stage.desc}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="cinematic-range" className="relative min-h-[52rem] bg-[#101513] py-24 text-white lg:py-36">
          <div className="absolute inset-y-0 right-0 w-full opacity-35 lg:w-[58%]"><Image src="/images/brand/retail-display.webp" alt="" fill sizes="(min-width:1024px) 58vw,100vw" className="object-cover" /></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#101513] via-[#101513]/90 to-[#101513]/20" />
          <div className="relative z-10 mx-auto max-w-[104rem] px-6 lg:px-10"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c78a68]">{product("eyebrow")}</p><h2 className="mt-6 max-w-[13ch] text-[clamp(3.2rem,5.5vw,6.5rem)] font-light leading-[0.94] tracking-[-0.045em]">{product("headline")}</h2><p className="mt-7 max-w-xl text-base leading-8 text-white/55">{product("description")}</p><div className="mt-12 grid max-w-3xl gap-px bg-white/20 sm:grid-cols-2">{[[product("boxerBriefs"),product("boxerBriefsTag")],[product("trunks"),product("trunksTag")],[product("briefs"),product("briefsTag")],[product("performance"),product("performanceTag")]].map(([name,note]) => <div key={name} className="bg-[#101513]/90 p-6"><h3 className="text-xl font-medium">{name}</h3><p className="mt-2 text-sm leading-6 text-white/45">{note}</p></div>)}</div><Link href="/products" className="mt-10 inline-flex items-center gap-3 border-b border-white/50 pb-2 text-xs font-semibold uppercase tracking-[0.14em]">{product("viewAll")}{arrowIcon}</Link></div>
        </section>

        <section id="cinematic-process" className="bg-[#cfc3b3] py-28 lg:py-44">
          <div className="mx-auto grid max-w-[104rem] gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
            <div className="lg:sticky lg:top-20 lg:self-start"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8c4f38]">{process("eyebrow")}</p><h2 className="mt-6 text-[clamp(3rem,5vw,5.8rem)] font-light leading-[0.95] tracking-[-0.045em]">{process("headline")}</h2><p className="mt-7 max-w-lg text-base leading-8 text-black/55">{process("description")}</p></div>
            <ol className="border-t border-black/25">{["s1","s2","s3","s4","s5","s6","s7"].map((key) => <li key={key} className="grid gap-4 border-b border-black/20 py-8 sm:grid-cols-[0.8fr_1.2fr]"><h3 className="text-2xl font-medium tracking-[-0.03em]">{process(`${key}Title`)}</h3><div><p className="text-sm leading-7 text-black/58">{process(`${key}Desc`)}</p><p className="mt-4 text-[10px] uppercase tracking-[0.17em] text-[#8c4f38]">{process("outputLabel")} · {process(`${key}Del`)}</p></div></li>)}</ol>
          </div>
        </section>

        <section className="grid min-h-[48rem] bg-[#18231f] text-white lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[32rem]"><Image src="/images/brand/exhibition-booth.webp" alt="" fill sizes="(min-width:1024px) 55vw,100vw" className="object-cover" /></div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-20"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c78a68]">{cases("casesEyebrow")}</p><h2 className="mt-6 text-[clamp(3rem,5vw,5.8rem)] font-light leading-[0.95] tracking-[-0.045em]">{cases("casesHeadline")}</h2><p className="mt-7 text-base leading-8 text-white/55">{cases("case1Client")} · {cases("case1P1Title")}</p><div className="mt-12 border-t border-white/20 pt-7"><p className="text-sm leading-7 text-white/50">{capability("description")}</p></div></div>
        </section>

        <section className="bg-[#eee9df] px-6 py-28 lg:px-10 lg:py-40"><div className="mx-auto max-w-[104rem] text-center"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8c4f38]">{cta("eyebrow")}</p><h2 className="mx-auto mt-7 max-w-[15ch] text-[clamp(3.2rem,6vw,7rem)] font-light leading-[0.92] tracking-[-0.05em]">{cta("headline")}</h2><p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-black/55">{cta("description")}</p><Link href="/contact" className="mt-10 inline-flex items-center gap-3 bg-[#18231f] px-8 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-white">{cta("cardButton")}{arrowIcon}</Link></div></section>
      </main>

      <footer className="bg-[#101513] px-6 pb-28 pt-16 text-white lg:px-10"><div className="mx-auto grid max-w-[104rem] gap-10 border-t border-white/15 pt-10 sm:grid-cols-2"><div><p className="text-xl font-medium tracking-[0.02em]">ABSTRACT MAN</p><p className="mt-4 max-w-xl text-sm leading-7 text-white/40">{footer("description")}</p></div><div className="sm:text-right"><p className="text-sm text-white/45">{footer("location")}</p><a href="mailto:lei@abstractmanwear.com" className="mt-2 inline-block text-sm text-white">lei@abstractmanwear.com</a></div></div></footer>
    </div>
  );
}

function MaterialConcept() {
  const locale = useLocale();
  const h = useTranslations("Header");
  const hero = useTranslations("Hero");
  const product = useTranslations("ProductSpecialization");
  const materials = useTranslations("ProductsPage");
  const trust = useTranslations("TrustBar");
  const services = useTranslations("ServicesOverview");
  const capability = useTranslations("CapabilitySnapshot");
  const process = useTranslations("OrderProcess");
  const cta = useTranslations("FinalCTA");
  const footer = useTranslations("Footer");

  const productBands = [
    { name: product("boxerBriefs"), note: product("boxerBriefsTag"), image: "/images/product-boxer-briefs.svg", bg: "bg-[#1748ff]", fg: "text-white" },
    { name: product("seamless"), note: product("seamlessTag"), image: "/images/product-seamless.svg", bg: "bg-[#dfff34]", fg: "text-black" },
    { name: product("modal"), note: product("modalTag"), image: "/images/product-modal.svg", bg: "bg-[#ff5c35]", fg: "text-black" },
  ];
  const fabricGroups = [
    [materials("modalGroupName"), materials("modalGroupDesc")],
    [materials("cottonGroupName"), materials("cottonGroupDesc")],
    [materials("bambooGroupName"), materials("bambooGroupDesc")],
    [materials("nylonGroupName"), materials("nylonGroupDesc")],
  ];

  return (
    <div className="concept-material min-h-screen overflow-hidden bg-white font-sans text-black">
      <header className="relative z-40 bg-black text-white">
        <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
          <Link href="/" className="text-lg font-black uppercase tracking-[-0.04em] sm:text-2xl">Abstract Man®</Link>
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.12em] lg:flex"><a href="#material-products">{h("products")}</a><a href="#material-fabrics">{h("fabrics")}</a><a href="#material-system">{h("factory")}</a></nav>
          <div className="flex items-center gap-4"><Link href="/concepts/dossier" locale={locale === "zh" ? "en" : "zh"} className="text-xs font-bold uppercase tracking-[0.12em]">{h("switchLang")}</Link><Link href="/contact" className="bg-[#dfff34] px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-black sm:text-xs">{h("startProject")}</Link></div>
        </div>
      </header>

      <main>
        <section className="relative min-h-[calc(100svh-5rem)] bg-black text-white lg:min-h-[calc(100svh-6rem)]">
          <div className="absolute inset-0"><Image src="/images/brand/sample-review-showroom.jpg" alt={hero("heroImageAlt")} fill loading="eager" sizes="100vw" className="object-cover object-center opacity-70" /></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.38)_1px,transparent_1px)] bg-[size:12.5%_100%]" />
          <div className="relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-between px-5 py-8 sm:px-8 lg:min-h-[calc(100svh-6rem)] lg:px-12 lg:py-12">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-white/55"><span>{hero("eyebrow")}</span><span>{hero("studioLabel")}</span></div>
            <div>
              <h1 className="max-w-[12ch] whitespace-pre-line text-[clamp(3.8rem,8.6vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">{hero("headline")}</h1>
              <div className="mt-10 grid gap-8 border-t-2 border-white pt-6 lg:grid-cols-[1fr_auto] lg:items-end"><p className="max-w-2xl text-sm font-medium leading-7 text-white/70 sm:text-base">{hero("lede")}</p><Link href="/contact" className="inline-flex items-center gap-3 bg-[#dfff34] px-7 py-5 text-xs font-black uppercase tracking-[0.12em] text-black">{hero("startProject")}{arrowIcon}</Link></div>
            </div>
          </div>
        </section>

        <section className="bg-[#dfff34] px-5 py-9 sm:px-8 lg:px-12"><div className="grid gap-7 lg:grid-cols-[1.2fr_repeat(3,.6fr)] lg:items-end"><p className="max-w-xl text-sm font-bold uppercase leading-6 tracking-[0.08em]">{hero("proofLine")}</p>{[[hero("moqValue"),hero("moqLabel")],[hero("sampleValue"),hero("sampleLabel")],[hero("leadTimeValue"),hero("leadTimeLabel")]].map(([value,label])=><div key={label}><p className="text-3xl font-black tracking-[-0.05em]">{value}</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-black/55">{label}</p></div>)}</div></section>

        <section id="material-products">
          <div className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#1748ff]">{product("eyebrow")}</p><h2 className="mt-5 max-w-[15ch] text-[clamp(3.4rem,7vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">{product("headline")}</h2></div>
          {productBands.map((item, index) => (
            <Link href="/products" key={item.name} className={`${item.bg} ${item.fg} group grid min-h-[38rem] overflow-hidden lg:min-h-[48rem] lg:grid-cols-2`}>
              <div className={`flex flex-col justify-between p-6 sm:p-10 lg:p-12 ${index % 2 ? "lg:order-2" : ""}`}><span className="text-[10px] font-black uppercase tracking-[0.2em]">Product family</span><div><h3 className="text-[clamp(3.4rem,7vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">{item.name}</h3><p className="mt-7 max-w-lg text-base font-semibold leading-7 opacity-60">{item.note}</p></div><span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-current transition-transform duration-300 group-hover:translate-x-2">{arrowIcon}</span></div>
              <div className={`relative min-h-[26rem] ${index % 2 ? "lg:order-1" : ""}`}><Image src={item.image} alt="" fill sizes="(min-width:1024px) 50vw,100vw" className="object-contain p-8 sm:p-14 lg:p-20" /></div>
            </Link>
          ))}
        </section>

        <section id="material-fabrics" className="grid bg-black text-white lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[36rem] lg:min-h-[58rem]"><Image src="/images/brand/fabric-review.jpg" alt="" fill sizes="(min-width:1024px) 55vw,100vw" className="object-cover" /></div>
          <div className="p-6 sm:p-10 lg:p-14"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#dfff34]">{materials("fabricsEyebrow")}</p><h2 className="mt-5 text-[clamp(3rem,5vw,5.8rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">{materials("fabricsHeadline")}</h2><p className="mt-7 max-w-xl text-sm leading-7 text-white/55">{materials("fabricsDesc")}</p><div className="mt-14 border-t border-white/25">{fabricGroups.map(([name,desc])=><article key={name} className="grid gap-3 border-b border-white/20 py-6 sm:grid-cols-[0.45fr_1fr]"><h3 className="text-xl font-black uppercase">{name}</h3><p className="text-sm leading-7 text-white/48">{desc}</p></article>)}</div></div>
        </section>

        <section id="material-system" className="bg-[#1748ff] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#dfff34]">{capability("eyebrow")}</p><h2 className="mt-5 text-[clamp(3.2rem,6vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">{capability("headline")}</h2></div><p className="max-w-2xl text-base font-semibold leading-8 text-white/62 lg:justify-self-end">{capability("description")}</p></div>
          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[[trust("capacity"),trust("capacityLabel")],[trust("facility"),trust("facilityLabel")],[trust("countries"),trust("countriesLabel")],[trust("staff"),trust("staffLabel")]].map(([value,label])=><div key={label} className="min-h-56 border-2 border-white p-6"><p className="text-[clamp(2.4rem,4vw,4.8rem)] font-black leading-none tracking-[-0.06em]">{value}</p><p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-white/55">{label}</p></div>)}</div>
          <div className="mt-12 relative min-h-[30rem] overflow-hidden lg:min-h-[48rem]"><Image src="/images/brand/storage-shelves.webp" alt="" fill sizes="100vw" className="object-cover" /></div>
        </section>

        <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5c35]">{services("eyebrow")}</p><h2 className="mt-5 max-w-[15ch] text-[clamp(3.2rem,6vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">{services("headline")}</h2><div className="mt-16 grid gap-px bg-black lg:grid-cols-2">{[[services("s1Title"),services("s1Desc")],[services("s2Title"),services("s2Desc")],[services("s3Title"),services("s3Desc")],[services("s4Title"),services("s4Desc")]].map(([title,desc])=><article key={title} className="bg-white p-7 sm:p-10"><h3 className="text-3xl font-black uppercase tracking-[-0.04em]">{title}</h3><p className="mt-5 max-w-xl text-sm leading-7 text-black/55">{desc}</p></article>)}</div></section>

        <section className="bg-[#ff5c35] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-black uppercase tracking-[0.18em]">{process("eyebrow")}</p><h2 className="mt-5 text-[clamp(3.2rem,6vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">{process("headline")}</h2></div><ol className="border-t-2 border-black">{["s1","s2","s3","s4","s5","s6","s7"].map(key=><li key={key} className="grid gap-4 border-b-2 border-black py-7 sm:grid-cols-[0.55fr_1fr]"><h3 className="text-2xl font-black uppercase">{process(`${key}Title`)}</h3><p className="text-sm font-medium leading-7 text-black/60">{process(`${key}Desc`)}</p></li>)}</ol></div></section>

        <section className="bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36"><div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#dfff34]">{cta("eyebrow")}</p><h2 className="mt-5 max-w-[14ch] text-[clamp(3.5rem,7vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">{cta("headline")}</h2></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-3 bg-[#dfff34] px-8 py-5 text-xs font-black uppercase tracking-[0.12em] text-black">{cta("cardButton")}{arrowIcon}</Link></div></section>
      </main>

      <footer className="bg-[#dfff34] px-5 pb-28 pt-14 sm:px-8 lg:px-12"><div className="grid gap-10 border-t-2 border-black pt-8 sm:grid-cols-2"><div><p className="text-3xl font-black uppercase tracking-[-0.05em]">Abstract Man®</p><p className="mt-4 max-w-xl text-sm font-medium leading-7 text-black/55">{footer("description")}</p></div><div className="sm:text-right"><p className="text-sm font-bold">{footer("location")}</p><a href="mailto:lei@abstractmanwear.com" className="mt-2 inline-block text-sm font-black underline underline-offset-4">lei@abstractmanwear.com</a></div></div></footer>
    </div>
  );
}

export default function HomeConcept({ concept }: { concept: HomeConceptName }) {
  return (
    <>
      <ConceptSwitcher active={concept} />
      {concept === "editorial" ? <CommercialConcept /> : concept === "process" ? <CinematicConcept /> : <MaterialConcept />}
    </>
  );
}
