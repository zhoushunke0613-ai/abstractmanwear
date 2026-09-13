import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Photo from "@/components/Photo";

// One photo per team role, in the order of teamRoles below.
const TEAM_PHOTOS = [
  "/images/brand/office.jpg",
  "/images/brand/design-studio.jpg",
  "/images/brand/founder-sewing-floor.jpg",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.about" });
  return { title: t("title"), description: t("description") };
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const milestones = [
    { year: t("m1Year"), event: t("m1Event") },
    { year: t("m2Year"), event: t("m2Event") },
    { year: t("m3Year"), event: t("m3Event") },
    { year: t("m4Year"), event: t("m4Event") },
    { year: t("m5Year"), event: t("m5Event") },
    { year: t("m6Year"), event: t("m6Event") },
    { year: t("m7Year"), event: t("m7Event") },
  ];

  const values = [
    { title: t("v1Title"), description: t("v1Desc") },
    { title: t("v2Title"), description: t("v2Desc") },
    { title: t("v3Title"), description: t("v3Desc") },
    { title: t("v4Title"), description: t("v4Desc") },
    { title: t("v5Title"), description: t("v5Desc") },
    { title: t("v6Title"), description: t("v6Desc") },
  ];

  const markets = [
    {
      region: t("market1Region"),
      countries: t("market1Countries"),
      note: t("market1Note"),
    },
    {
      region: t("market2Region"),
      countries: t("market2Countries"),
      note: t("market2Note"),
    },
    {
      region: t("market3Region"),
      countries: t("market3Countries"),
      note: t("market3Note"),
    },
    {
      region: t("market4Region"),
      countries: t("market4Countries"),
      note: t("market4Note"),
    },
    {
      region: t("market5Region"),
      countries: t("market5Countries"),
      note: t("market5Note"),
    },
  ];

  const teamRoles = [
    {
      role: t("team1Role"),
      description: t("team1Desc"),
      image: {
        label: t("team1ImgLabel"),
        description: t("team1ImgDesc"),
      },
    },
    {
      role: t("team2Role"),
      description: t("team2Desc"),
      image: {
        label: t("team2ImgLabel"),
        description: t("team2ImgDesc"),
      },
    },
    {
      role: t("team3Role"),
      description: t("team3Desc"),
      image: {
        label: t("team3ImgLabel"),
        description: t("team3ImgDesc"),
      },
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow">
                {t("eyebrow")}
              </p>
              <h1 className="page-title text-neutral-900">
                {t("headline")}
              </h1>
              <p className="body-copy mt-6">
                {t("description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  {t("workWithUs")}
                </Link>
                <Link
                  href="/capability"
                  className="btn-secondary"
                >
                  {t("tourFacility")}
                </Link>
              </div>
            </div>

            {/* Team photo */}
            <div className="lg:col-span-5 lg:col-start-8">
              <Photo
                src="/images/brand/team.jpg"
                alt={t("teamImgDesc")}
                className="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our story + timeline */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">
                {t("storyEyebrow")}
              </p>
              <h2 className="section-title text-neutral-900">
                {t("storyHeadline")}
              </h2>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                {t("storyP1")}
              </p>
              <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
                {t("storyP2")}
              </p>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative border-l-2 border-neutral-200 pl-6 lg:pl-8 space-y-6 lg:space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[calc(1.5rem+5px)] lg:-left-[calc(2rem+5px)] top-1 h-2 w-2 rounded-full bg-brand-yellow" />
                    <p className="text-xs uppercase tracking-[0.15em] text-brand-yellow font-semibold">
                      {m.year}
                    </p>
                    <p className="mt-1 text-sm text-neutral-700 leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("valuesEyebrow")}
            </p>
            <h2 className="section-title text-neutral-900">
              {t("valuesHeadline")}
            </h2>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-hide border-y border-neutral-300 lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="w-[75vw] max-w-[300px] flex-shrink-0 snap-start border-r border-neutral-300 p-6 last:border-r-0 lg:w-auto lg:max-w-none lg:flex-shrink lg:p-8"
              >
                <div className="font-display text-3xl text-brand-yellow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("teamEyebrow")}
            </p>
            <h2 className="section-title text-neutral-900">
              {t("teamHeadline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              {t("teamDesc")}
            </p>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {teamRoles.map((t_role, idx) => (
              <div
                key={t_role.role}
                className="border-y border-neutral-300 overflow-hidden"
              >
                <Photo
                  src={TEAM_PHOTOS[idx]}
                  alt={t_role.image.description}
                  className="aspect-[5/3] rounded-none"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  position="center 30%"
                />
                <div className="p-6 lg:p-8">
                  <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                    {t_role.role}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {t_role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition photographs supplied by the team */}
      <section id="exhibitions" className="scroll-mt-20 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("exhibitionsEyebrow")}
            </p>
            <h2 className="section-title text-neutral-900">
              {t("exhibitionsHeadline")}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
              {t("exhibitionsDesc")}
            </p>
          </div>
          <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { src: "/images/brand/exhibition-booth.webp", key: "booth" },
              { src: "/images/brand/exhibition-team.webp", key: "exhibitionTeam" },
            ].map((photo) => (
              <figure key={photo.key}>
                <Photo
                  src={photo.src}
                  alt={t(`${photo.key}Alt`)}
                  className="aspect-[4/3]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <figcaption className="mt-3 border-t border-neutral-200 pt-3 text-sm text-neutral-600">
                  {t(`${photo.key}Caption`)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Markets we serve */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("marketsEyebrow")}
            </p>
            <h2 className="section-title text-neutral-900">
              {t("marketsHeadline")}
            </h2>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:snap-none">
            {markets.map((m) => (
              <div
                key={m.region}
                className="w-[68vw] max-w-[250px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink border-t border-neutral-300 py-6 lg:pr-5"
              >
                <div className="h-1 w-8 bg-brand-yellow" />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-neutral-900">
                  {m.region}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {m.countries}
                </p>
                <p className="mt-2 text-xs text-neutral-400">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl leading-tight text-white lg:text-6xl">
              {t("ctaHeadline")}
            </h2>
            <p className="mt-5 max-w-2xl text-sm lg:text-base text-neutral-400 leading-relaxed">
              {t("ctaDesc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary btn-primary-inverse"
              >
                {t("ctaStart")}
              </Link>
              <Link
                href="/catalog"
                className="btn-secondary btn-secondary-inverse"
              >
                {t("ctaCatalog")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
