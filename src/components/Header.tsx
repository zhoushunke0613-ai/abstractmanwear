import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/capability", label: "Capability" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Brand */}
        <Link href="/" className="font-semibold tracking-tight">
          ABSTRACT MAN
        </Link>

        {/* Primary nav */}
        <nav>
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Conversion CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/catalog"
            className="text-sm border border-neutral-300 px-3 py-1.5 hover:bg-neutral-50"
          >
            Download Catalog
          </Link>
          <Link
            href="/contact"
            className="text-sm bg-neutral-900 text-white px-3 py-1.5 hover:bg-neutral-700"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </header>
  );
}
