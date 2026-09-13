import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PRODUCTS, PRODUCT_EXTRAS } from "@/lib/products";

export default function Footer() {
  const t = useTranslations("Footer");
  const tp = useTranslations("ProductSpecialization");

  // Mirrors the header groups so every destination has one address.
  const footerNav = [
    {
      heading: t("col1Heading"),
      items: [
        ...PRODUCTS.map((p) => ({ href: `/products#${p.slug}`, label: tp(p.key) })),
        ...PRODUCT_EXTRAS.map((x) => ({ href: `/products#${x.slug}`, label: t(`col1_${x.labelKey}`) })),
        { href: "/services#odm", label: t("col1_custom") },
      ],
    },
    {
      heading: t("col2Heading"),
      items: [
        { href: "/services", label: t("col2_services") },
        { href: "/services#process", label: t("col2_process") },
        { href: "/capability", label: t("col2_production") },
        { href: "/capability#quality", label: t("col2_quality") },
        { href: "/capability#certifications", label: t("col2_certs") },
      ],
    },
    {
      heading: t("col3Heading"),
      items: [
        { href: "/about", label: t("col3_about") },
        { href: "/faq", label: t("col3_faq") },
        { href: "/catalog", label: t("col3_catalog") },
        { href: "/contact", label: t("col3_contact") },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="border-t border-neutral-700 pt-8 lg:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-6">
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-3xl lg:text-4xl tracking-[-0.04em] text-white">
                ABSTRACT MAN
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Est. 2006
              </span>
            </div>
            <p className="mt-7 max-w-md text-sm text-neutral-400 leading-7">
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
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:contents">
            {footerNav.map((col) => (
              <div key={col.heading} className="lg:col-span-2">
                <p className="border-b border-neutral-700 pb-3 text-[10px] uppercase tracking-[0.22em] text-brand-yellow">
                  {col.heading}
                </p>
                <ul className="mt-3 lg:mt-4 space-y-2 lg:space-y-2.5">
                  {col.items.map((item) => (
                    <li key={`${col.heading}-${item.href}`}>
                      <Link
                        href={item.href}
                        className="text-xs lg:text-sm text-neutral-400 hover:text-white transition-colors"
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
        <div className="mt-12 lg:mt-20 pt-6 lg:pt-8 border-t border-neutral-700 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">{t("copyright")}</p>
          <p className="text-xs text-neutral-500 uppercase tracking-[0.18em]">
            {t("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
