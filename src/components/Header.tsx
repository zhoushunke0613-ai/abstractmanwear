"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { PRODUCTS, PRODUCT_EXTRAS } from "@/lib/products";

type NavGroup = {
  href: string;
  label: string;
  items: { href: string; label: string }[];
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const t = useTranslations("Header");
  const tp = useTranslations("ProductSpecialization");
  const currentLocale = (params.locale as string) || "en";

  const navGroups: NavGroup[] = [
    {
      href: "/products",
      label: t("products"),
      items: [
        ...PRODUCTS.map((p) => ({ href: `/products#${p.slug}`, label: tp(p.key) })),
        ...PRODUCT_EXTRAS.map((x) => ({ href: `/products#${x.slug}`, label: t(x.labelKey) })),
      ],
    },
    {
      href: "/services",
      label: t("services"),
      items: [
        { href: "/services#oem", label: t("oem") },
        { href: "/services#odm", label: t("odm") },
        { href: "/services#sampling", label: t("sampling") },
        { href: "/services#process", label: t("process") },
      ],
    },
    {
      href: "/capability",
      label: t("factory"),
      items: [
        { href: "/capability", label: t("production") },
        { href: "/capability#quality", label: t("quality") },
        { href: "/capability#certifications", label: t("certifications") },
      ],
    },
    {
      href: "/about",
      label: t("about"),
      items: [
        { href: "/about", label: t("company") },
        { href: "/faq", label: t("faq") },
      ],
    },
  ];

  const isActive = (group: NavGroup) =>
    pathname === group.href || group.items.some((item) => item.href === pathname);

  const handleLocaleSwitch = () => {
    router.replace(pathname, { locale: currentLocale === "en" ? "zh" : "en" });
  };

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-[#fcfaf6]/95">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-8 px-6 lg:h-20 lg:px-8">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-[1.05rem] font-semibold tracking-[-0.035em] text-neutral-900 lg:text-xl">
            ABSTRACT MAN
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-neutral-500 sm:inline">
            Est. 2006
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-8">
            {navGroups.map((group, index) => (
              <li key={group.href} className="group relative">
                <Link
                  href={group.href}
                  className={`flex items-center gap-2 border-b py-2 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                    isActive(group)
                      ? "border-neutral-900 text-neutral-900"
                      : "border-transparent text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  <span className="text-[9px] font-normal text-neutral-400">0{index + 1}</span>
                  {group.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-[230px] border border-neutral-200 bg-[#fcfaf6] px-5 py-4">
                    {group.items.map((item) => (
                      <li key={item.href} className="border-b border-neutral-200 last:border-b-0">
                        <Link
                          href={item.href}
                          onClick={(event) => event.currentTarget.blur()}
                          className="block py-2.5 text-sm text-neutral-600 transition-colors hover:text-brand-yellow"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            type="button"
            onClick={handleLocaleSwitch}
            className="border-b border-neutral-300 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            {t("switchLang")}
          </button>
          <Link href="/catalog" className="text-[11px] font-semibold uppercase tracking-[0.13em] text-neutral-700 hover:text-brand-yellow">
            {t("downloadCatalog")}
          </Link>
          <Link href="/contact" className="btn-primary">
            {t("startProject")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 flex h-10 w-10 items-center justify-center border border-neutral-300 bg-transparent lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="flex h-3.5 w-5 flex-col justify-between">
            <span className={`block h-px w-full bg-neutral-900 transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-full bg-neutral-900 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-full bg-neutral-900 transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <div className={`fixed inset-0 z-40 bg-[#f7f3ec] transition-opacity duration-200 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="h-full overflow-y-auto px-6 pb-10 pt-24">
          <nav aria-label="Mobile navigation">
            <ol className="border-t border-neutral-300">
              {navGroups.map((group, index) => (
                <li key={group.href} className="grid grid-cols-[2rem_1fr] border-b border-neutral-300 py-6">
                  <span className="pt-1 text-[10px] tracking-[0.18em] text-brand-yellow">0{index + 1}</span>
                  <div>
                    <Link href={group.href} onClick={() => setOpen(false)} className="font-display text-3xl leading-none text-neutral-900">
                      {group.label}
                    </Link>
                    <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} onClick={() => setOpen(false)} className="text-sm text-neutral-600">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => { handleLocaleSwitch(); setOpen(false); }} className="btn-secondary">
              {t("switchLang")}
            </button>
            <Link href="/catalog" onClick={() => setOpen(false)} className="btn-secondary">
              {t("downloadCatalog")}
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary col-span-2">
              {t("startProject")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
