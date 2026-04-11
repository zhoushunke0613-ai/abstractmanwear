"use client";

import Link from "next/link";
import { useState } from "react";
import { Locale, localeNames, locales, t } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function Header({ locale, onLocaleChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: t(locale, "nav.home") },
    { href: "#products", label: t(locale, "nav.products") },
    { href: "#about", label: t(locale, "nav.about") },
    { href: "#size-guide", label: t(locale, "nav.sizeGuide") },
    { href: "#contact", label: t(locale, "nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl lg:text-2xl font-light tracking-[0.2em] uppercase">
            Abstract
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-wider text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => onLocaleChange(l)}
                  className={`text-xs px-2 py-1 transition-colors duration-300 ${
                    locale === l
                      ? "text-[var(--foreground)] font-medium"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {localeNames[l]}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-[1px] bg-[var(--foreground)] transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[1px] bg-[var(--foreground)] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-[1px] bg-[var(--foreground)] transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-6 flex flex-col gap-4 bg-white">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-wider text-[var(--muted)] hover:text-[var(--foreground)] transition-colors py-2 border-b border-[var(--border)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
