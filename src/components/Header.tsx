"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/products", label: "Products", num: "01" },
    { href: "/services", label: "Services", num: "02" },
    { href: "/capability", label: "Capability", num: "03" },
    { href: "/about", label: "About", num: "04" },
    { href: "/faq", label: "FAQ", num: "05" },
    { href: "/contact", label: "Contact", num: "06" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "bg-[var(--color-paper)]/85 border-b border-[var(--color-rule)]/60 backdrop-blur-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Wordmark */}
          <Link href="/" className="group flex items-baseline gap-3">
            <span className="font-display text-2xl lg:text-3xl tracking-tight text-[var(--color-ink)]">
              Abstract
            </span>
            <span className="hidden md:inline font-mono text-[10px] text-[var(--color-taupe)] uppercase tracking-[0.2em]">
              Manwear&nbsp;·&nbsp;Est.&nbsp;MMXXIV
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline gap-2 text-[var(--color-ink-soft)]"
                >
                  <span className="font-mono text-[10px] text-[var(--color-taupe)]">
                    {item.num}
                  </span>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      active
                        ? "text-[var(--color-ink)] italic font-display text-base"
                        : "hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 text-sm text-[var(--color-ink)] link-rule"
            >
              <span>Request a quote</span>
              <span aria-hidden>→</span>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-px bg-[var(--color-ink)] transition-transform duration-500 ${
                  menuOpen ? "rotate-45 translate-y-[3px]" : ""
                }`}
              />
              <span
                className={`w-6 h-px bg-[var(--color-ink)] transition-transform duration-500 ${
                  menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-[var(--color-paper)] transition-[grid-template-rows] duration-500 grid ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="min-h-0 overflow-hidden">
          <div className="px-8 py-8 flex flex-col gap-4 border-t border-[var(--color-rule)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-4 py-3 border-b border-[var(--color-rule)]/60"
              >
                <span className="font-mono text-xs text-[var(--color-taupe)]">
                  {item.num}
                </span>
                <span className="font-display text-2xl text-[var(--color-ink)]">
                  {item.label}
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-ink)] link-rule self-start"
            >
              <span>Request a quote</span>
              <span>→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
