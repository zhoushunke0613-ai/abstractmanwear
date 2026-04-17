import Link from "next/link";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/capability", label: "Capability" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Frosted glass pill — shared base
const pillBase =
  "inline-flex items-center rounded-full px-4 py-1.5 text-sm border shadow-sm backdrop-blur-md transition-all duration-300 ease-out";

const pillLight =
  `${pillBase} bg-white/50 border-white/60 text-neutral-800 hover:bg-white/85 hover:border-white/90 hover:shadow-md hover:-translate-y-0.5`;

const pillYellow =
  `${pillBase} bg-brand-yellow/75 border-brand-yellow-light/70 text-neutral-900 font-medium hover:bg-brand-yellow/95 hover:border-brand-yellow-light/90 hover:shadow-md hover:-translate-y-0.5`;

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-baseline gap-2.5 transition-opacity duration-200 hover:opacity-70"
        >
          <span className="font-semibold tracking-tight">ABSTRACT MAN</span>
          <span className="text-neutral-300" aria-hidden>·</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Est. 2006
          </span>
        </Link>

        {/* Primary nav — frosted glass pills */}
        <nav>
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

        {/* Conversion CTAs — frosted glass pills */}
        <div className="flex items-center gap-2">
          <Link href="/catalog" className={pillLight}>
            Download Catalog
          </Link>
          <Link href="/contact" className={pillYellow}>
            Start Your Project
          </Link>
        </div>
      </div>
    </header>
  );
}
