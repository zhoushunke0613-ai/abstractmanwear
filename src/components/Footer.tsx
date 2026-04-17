import Link from "next/link";

const footerNav = [
  {
    heading: "Products",
    items: [
      { href: "/products/boxer-briefs", label: "Boxer Briefs" },
      { href: "/products/trunks", label: "Trunks" },
      { href: "/products/briefs", label: "Briefs" },
      { href: "/products/seamless", label: "Seamless Series" },
      { href: "/products/modal", label: "Modal Series" },
      { href: "/products/performance", label: "Performance Series" },
      { href: "/contact?type=custom", label: "Custom Development" },
    ],
  },
  {
    heading: "Capability",
    items: [
      { href: "/capability", label: "Production Capability" },
      { href: "/capability/quality", label: "Quality Control" },
      { href: "/capability/certifications", label: "Certifications" },
      { href: "/services", label: "OEM / ODM Services" },
    ],
  },
  {
    heading: "Company",
    items: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/catalog", label: "Download Catalog" },
      { href: "/contact", label: "Start Your Project" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
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
              Men&apos;s underwear OEM &amp; ODM manufacturer serving global
              brands, wholesalers, and private label businesses. From sourcing
              and development to production and shipment, every step is managed
              in-house at our Zhongshan facility.
            </p>

            <div className="mt-8 space-y-2 text-sm">
              <p className="text-neutral-400">
                Zhongshan, Guangdong, China
              </p>
              <a
                href="mailto:hello@abstractman.com"
                className="inline-block text-neutral-200 hover:text-brand-yellow transition-colors"
              >
                hello@abstractman.com
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={`${col.heading}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © 2026 Abstract Man Wear Co., Ltd. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 uppercase tracking-[0.18em]">
            Men&apos;s Underwear OEM &amp; ODM
          </p>
        </div>
      </div>
    </footer>
  );
}
