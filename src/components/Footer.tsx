import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  const footerNav = [
    {
      heading: t("col1Heading"),
      items: [
        { href: "/products/boxer-briefs", label: t("col1_boxerBriefs") },
        { href: "/products/trunks", label: t("col1_trunks") },
        { href: "/products/briefs", label: t("col1_briefs") },
        { href: "/products/seamless", label: t("col1_seamless") },
        { href: "/products/modal", label: t("col1_modal") },
        { href: "/products/performance", label: t("col1_performance") },
        { href: "/contact?type=custom", label: t("col1_custom") },
      ],
    },
    {
      heading: t("col2Heading"),
      items: [
        { href: "/capability", label: t("col2_production") },
        { href: "/capability/quality", label: t("col2_quality") },
        { href: "/capability/certifications", label: t("col2_certs") },
        { href: "/services", label: t("col2_services") },
      ],
    },
    {
      heading: t("col3Heading"),
      items: [
        { href: "/about", label: t("col3_about") },
        { href: "/contact", label: t("col3_contact") },
        { href: "/catalog", label: t("col3_catalog") },
        { href: "/contact", label: t("col3_start") },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-6">
            <div className="flex items-baseline gap-2.5">
              <span className="font-semibold tracking-tight text-white text-lg">
                ABSTRACT MAN
              </span>
              <span className="text-neutral-600" aria-hidden>
                ·
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Est. 2006
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm text-neutral-400 leading-relaxed">
              {t("description")}
            </p>

            <div className="mt-8 space-y-2 text-sm">
              <p className="text-neutral-400">{t("location")}</p>
              <a
                href="mailto:hello@abstractman.com"
                className="inline-block text-neutral-200 hover:text-brand-yellow transition-colors"
              >
                hello@abstractman.com
              </a>
            </div>
          </div>

          {/* Nav columns — 3-col on mobile, spread on desktop */}
          <div className="grid grid-cols-3 gap-6 lg:contents">
            {footerNav.map((col) => (
              <div key={col.heading} className="lg:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
                  {col.heading}
                </p>
                <ul className="mt-3 lg:mt-4 space-y-2 lg:space-y-2.5">
                  {col.items.map((item) => (
                    <li key={`${col.heading}-${item.label}`}>
                      <Link
                        href={item.href}
                        className="text-xs lg:text-sm text-neutral-300 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-10 lg:mt-16 pt-6 lg:pt-8 border-t border-neutral-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">{t("copyright")}</p>
          <p className="text-xs text-neutral-500 uppercase tracking-[0.18em]">
            {t("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
