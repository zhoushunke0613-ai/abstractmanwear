"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

// Frosted glass pill — shared base
const pillBase =
  "inline-flex items-center rounded-full px-4 py-1.5 text-sm border shadow-sm backdrop-blur-md transition-all duration-300 ease-out";

const pillLight =
  `${pillBase} bg-white/50 border-white/60 text-neutral-800 hover:bg-white/85 hover:border-white/90 hover:shadow-md hover:-translate-y-0.5`;

const pillYellow =
  `${pillBase} bg-brand-yellow/75 border-brand-yellow-light/70 text-neutral-900 font-medium hover:bg-brand-yellow/95 hover:border-brand-yellow-light/90 hover:shadow-md hover:-translate-y-0.5`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const t = useTranslations("Header");

  const currentLocale = (params.locale as string) || "en";

  const navItems = [
    { href: "/products" as const, label: t("products") },
    { href: "/services" as const, label: t("services") },
    { href: "/capability" as const, label: t("capability") },
    { href: "/about" as const, label: t("about") },
    { href: "/faq" as const, label: t("faq") },
    { href: "/contact" as const, label: t("contact") },
  ];

  const handleLocaleSwitch = () => {
    const newLocale = currentLocale === "en" ? "zh" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-baseline gap-2.5 transition-opacity duration-200 hover:opacity-70"
        >
          <span className="font-semibold tracking-tight">ABSTRACT MAN</span>
          <span className="text-neutral-300 hidden sm:inline" aria-hidden>·</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 hidden sm:inline">
            Est. 2006
          </span>
        </Link>

        {/* Primary nav — frosted glass pills (desktop only) */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={pillLight}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Conversion CTAs + language switch (desktop only) */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={handleLocaleSwitch}
            className={`${pillBase} bg-white/50 border-white/60 text-neutral-800 hover:bg-white/85 hover:border-white/90 hover:shadow-md hover:-translate-y-0.5 cursor-pointer`}
          >
            {t("switchLang")}
          </button>
          <Link href="/catalog" className={pillLight}>
            {t("downloadCatalog")}
          </Link>
          <Link href="/contact" className={pillYellow}>
            {t("startProject")}
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/50 border border-white/60 backdrop-blur-md shadow-sm"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-neutral-800 rounded-full transition-all duration-300 origin-center ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-neutral-800 rounded-full transition-all duration-300 ${
                open ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-neutral-800 rounded-full transition-all duration-300 origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[min(85vw,320px)] bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-20 px-6 pb-8 h-full overflow-y-auto">
            {/* Nav links */}
            <nav>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                        pathname === item.href
                          ? "bg-brand-yellow/15 text-neutral-900"
                          : "text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Divider */}
            <div className="my-6 border-t border-neutral-200" />

            {/* Language switch (mobile) */}
            <button
              onClick={() => {
                handleLocaleSwitch();
                setOpen(false);
              }}
              className="w-full flex items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100 cursor-pointer mb-3"
            >
              {t("switchLang")}
            </button>

            {/* CTAs */}
            <div className="space-y-3">
              <Link
                href="/catalog"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full rounded-full border border-neutral-200 bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-100"
              >
                {t("downloadCatalog")}
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full rounded-full bg-brand-yellow px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-brand-yellow-light"
              >
                {t("startProject")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
