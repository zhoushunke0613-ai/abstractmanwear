import Link from "next/link";

interface CTAItem {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  ctas: CTAItem[];
}

export default function CTASection({ eyebrow, title, lede, ctas }: CTASectionProps) {
  return (
    <section className="py-32 lg:py-48 border-t border-[var(--color-rule)]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-2">
            {eyebrow && (
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                {eyebrow}
              </p>
            )}
          </div>

          <div className="col-span-12 lg:col-span-10">
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-tight text-[var(--color-ink)]">
              {title}
            </h2>

            {lede && (
              <p className="mt-12 max-w-[55ch] text-lg text-[var(--color-ink-soft)] leading-[1.6]">
                {lede}
              </p>
            )}

            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 items-center">
              {ctas.map((cta, i) =>
                cta.variant === "primary" || !cta.variant ? (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className="group inline-flex items-center gap-4 bg-[var(--color-ink)] text-[var(--color-paper)] px-10 py-5 text-sm tracking-wide hover:bg-[var(--color-terracotta)] transition-colors duration-500"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                      0{i + 1}
                    </span>
                    <span>{cta.label}</span>
                    <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </Link>
                ) : (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-ink)] link-rule"
                  >
                    <span>{cta.label}</span>
                    <span aria-hidden>→</span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
