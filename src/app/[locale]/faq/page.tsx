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
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t("eyebrow")}
            </p>
            <h1 className="mt-3 text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
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
                    href="mailto:hello@abstractman.com"
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
                          className="block py-2 px-3 text-sm text-neutral-500 rounded-lg transition-colors hover:bg-neutral-50 hover:text-neutral-900"
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
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-medium text-neutral-600 transition-all hover:border-brand-yellow hover:text-neutral-900"
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
                          <summary className="flex items-center justify-between gap-6 py-4 cursor-pointer list-none rounded focus-visible:outline-2 focus-visible:outline-brand-yellow focus-visible:outline-offset-2">
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
      <section className="border-b border-neutral-200 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
              {t("ctaHeadline")}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-900 text-white font-medium text-sm px-7 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                {t("ctaContact")}
              </Link>
              <Link
                href="/catalog"
                className="rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-neutral-900 text-sm px-7 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
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
