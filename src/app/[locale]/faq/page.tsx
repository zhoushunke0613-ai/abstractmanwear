import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.faq" });
  return { title: t("title"), description: t("description") };
}

export default function FAQPage() {
  const t = useTranslations("FAQPage");

  const groups = [
    {
      id: "orders",
      heading: t("g1Heading"),
      items: [
        { q: t("g1Q1"), a: t("g1A1") },
        { q: t("g1Q2"), a: t("g1A2") },
        { q: t("g1Q3"), a: t("g1A3") },
      ],
    },
    {
      id: "sampling",
      heading: t("g2Heading"),
      items: [
        { q: t("g2Q1"), a: t("g2A1") },
        { q: t("g2Q2"), a: t("g2A2") },
        { q: t("g2Q3"), a: t("g2A3") },
      ],
    },
    {
      id: "materials",
      heading: t("g3Heading"),
      items: [
        { q: t("g3Q1"), a: t("g3A1") },
        { q: t("g3Q2"), a: t("g3A2") },
      ],
    },
    {
      id: "shipping",
      heading: t("g4Heading"),
      items: [
        { q: t("g4Q1"), a: t("g4A1") },
        { q: t("g4Q2"), a: t("g4A2") },
        { q: t("g4Q3"), a: t("g4A3") },
      ],
    },
    {
      id: "compliance",
      heading: t("g5Heading"),
      items: [
        { q: t("g5Q1"), a: t("g5A1") },
        { q: t("g5Q2"), a: t("g5A2") },
        { q: t("g5Q3"), a: t("g5A3") },
      ],
    },
  ];

  return (
    <>
      {/* Compact header */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("eyebrow")}
            </p>
            <h1 className="page-title text-neutral-900">
              {t("headline")}
            </h1>
          </div>
        </div>
      </section>

      {/* Two-column: sticky sidebar + FAQ content */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <nav className="lg:sticky lg:top-24 space-y-8">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {t("sidebarText")}{" "}
                  <a
                    href="mailto:lei@abstractmanwear.com"
                    className="text-neutral-900 underline underline-offset-4 hover:text-brand-yellow transition-colors"
                  >
                    {t("emailUs")}
                  </a>{" "}
                  {t("sidebarSuffix")}
                </p>

                {/* Desktop sidebar nav */}
                <div className="hidden lg:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
                    {t("jumpTo")}
                  </p>
                  <ul className="mt-3 -mx-3 space-y-0.5">
                    {groups.map((g) => (
                      <li key={g.id}>
                        <a
                          href={`#${g.id}`}
                      className="block border-b border-neutral-200 py-2 text-sm text-neutral-500 transition-colors hover:text-brand-yellow"
                        >
                          {g.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </aside>

            {/* Mobile-only pills */}
            <div className="flex flex-wrap gap-2 lg:hidden">
              {groups.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                    className="border-b border-neutral-300 py-1 text-xs font-medium text-neutral-600 transition-colors hover:border-brand-yellow hover:text-neutral-900"
                >
                  {g.heading}
                </a>
              ))}
            </div>

            {/* FAQ content */}
            <div className="lg:col-span-8 lg:col-start-5">
              <div className="space-y-10">
                {groups.map((group) => (
                  <div key={group.id} id={group.id} className="scroll-mt-24">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-semibold">
                      {group.heading}
                    </p>

                    <div className="mt-4 divide-y divide-neutral-100 border-y border-neutral-100">
                      {group.items.map((item) => (
                        <details
                          key={item.q}
                          className="group [&_summary::-webkit-details-marker]:hidden"
                        >
                    <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none focus-visible:outline-1 focus-visible:outline-brand-yellow focus-visible:outline-offset-2">
                            <span className="text-[15px] font-medium text-neutral-900 leading-snug">
                              {item.q}
                            </span>
                            <span
                              aria-hidden
                              className="flex-none w-5 h-5 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-400 text-xs transition-all duration-300 group-open:rotate-45 group-open:border-brand-yellow group-open:text-brand-yellow"
                            >
                              +
                            </span>
                          </summary>
                          <p className="pb-4 text-sm text-neutral-500 leading-relaxed pr-10">
                            {item.a}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact CTA */}
      <section className="border-b border-neutral-800 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <h2 className="text-3xl text-white lg:text-4xl">
              {t("ctaHeadline")}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary btn-primary-inverse"
              >
                {t("ctaContact")}
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
