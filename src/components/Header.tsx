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
          <Link href="/" className="group flex items-center gap-3">
            <svg
              viewBox="0 0 56 76"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
              className="h-8 lg:h-9 w-auto text-[var(--color-ink)] group-hover:text-[var(--color-yellow)] transition-colors duration-300"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <path
                d="M 18 4 L 32 4 L 40 10 L 42 20 L 48 26 L 48 30 L 43 32 L 44 38 L 42 44 L 36 48 L 38 54 L 32 58 L 20 58 L 14 54 L 12 42 L 12 26 L 10 20 L 14 12 Z"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path d="M 30 24 L 36 28 L 30 32" stroke="currentColor" strokeWidth="2.5" />
              <path
                d="M 18 58 L 34 58 L 42 68 L 46 76 L 8 76 L 12 68 Z"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                d="M 18 66 L 28 72 M 28 66 L 18 72"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="font-display text-2xl lg:text-3xl tracking-tight text-[var(--color-ink)]">
              Abstract
            </span>
            <span className="hidden md:inline font-mono text-[10px] text-[var(--color-taupe)] uppercase tracking-[0.2em]">
              Manwear&nbsp;·&nbsp;Est.&nbsp;2010
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
                        ? "text-[var(--color-ink)] font-medium text-sm"
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
              className="hidden lg:inline-flex items-center gap-2 bg-[var(--color-yellow)] text-[var(--color-ink)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--color-ink)] hover:text-[var(--color-yellow)] transition-colors duration-300"
            >
              <span>Get a Quote</span>
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
