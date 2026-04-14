import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-rule)] mt-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-20 pb-12">
        {/* Top block — oversized colophon */}
        <div className="grid grid-cols-12 gap-8 pb-20 border-b border-[var(--color-rule)]">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-6">
              Abstract Manwear
            </p>
            <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-[var(--color-ink)]">
              Men&apos;s underwear manufacturing.
              <span className="text-[var(--color-graphite)]"> Zhongshan, since 2010.</span>
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-6 text-sm">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-3">
                Contact
              </p>
              <Link href="mailto:info@abstractmanwear.com" className="link-rule text-[var(--color-ink)]">
                info@abstractmanwear.com
              </Link>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-3">
                Address
              </p>
              <p className="text-[var(--color-ink-soft)]">Zhongshan, Guangdong</p>
              <p className="text-[var(--color-ink-soft)]">China</p>
            </div>
          </div>
        </div>

        {/* Navigation grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 text-sm">
          <FooterColumn
            label="Sitemap"
            items={[
              { label: "Products", href: "/products", num: "01" },
              { label: "Services", href: "/services", num: "02" },
              { label: "Capability", href: "/capability", num: "03" },
              { label: "About", href: "/about", num: "04" },
            ]}
          />
          <FooterColumn
            label="Services"
            items={[
              { label: "OEM", href: "/services" },
              { label: "ODM", href: "/services" },
              { label: "Private Label", href: "/services" },
              { label: "Sampling", href: "/services" },
            ]}
          />
          <FooterColumn
            label="Support"
            items={[
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
              { label: "Get a Quote", href: "/contact" },
            ]}
          />
          <FooterColumn
            label="Connect"
            items={[
              { label: "WhatsApp", href: "#" },
              { label: "WeChat", href: "#" },
              { label: "LinkedIn", href: "#" },
            ]}
          />
        </div>

        {/* Bottom rule */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pt-10 border-t border-[var(--color-rule)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
            ©&nbsp;{year}&nbsp;Abstract&nbsp;Manwear — All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
            ISO 9001 · BSCI · OEKO-TEX®
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  items,
}: {
  label: string;
  items: Array<{ label: string; href: string; num?: string }>;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-6">
        {label}
      </p>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-baseline gap-3">
            {item.num && (
              <span className="font-mono text-[10px] text-[var(--color-taupe)]">
                {item.num}
              </span>
            )}
            <Link
              href={item.href}
              className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
