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
  tone?: "light" | "dark";
}

export default function CTASection({
  eyebrow,
  title,
  lede,
  ctas,
  tone = "light",
}: CTASectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`py-20 lg:py-28 ${
        isDark
          ? "bg-[var(--color-ink)]"
          : "bg-[var(--color-paper)] border-t border-[var(--color-rule)]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-2">
            {eyebrow && (
              <p
                className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                  isDark
                    ? "text-[var(--color-yellow)]"
                    : "text-[var(--color-taupe)]"
                }`}
              >
                {eyebrow}
              </p>
            )}
          </div>

          <div className="col-span-12 lg:col-span-10">
            <h2
              className={`font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight ${
                isDark
                  ? "text-[var(--color-paper)]"
                  : "text-[var(--color-ink)]"
              }`}
            >
              {title}
            </h2>

            {lede && (
              <p
                className={`mt-6 lg:mt-8 max-w-[55ch] text-base lg:text-lg leading-[1.55] ${
                  isDark ? "text-white/70" : "text-[var(--color-ink-soft)]"
                }`}
              >
                {lede}
              </p>
            )}

            <div className="mt-10 lg:mt-12 flex flex-wrap gap-x-8 gap-y-4 items-center">
              {ctas.map((cta, i) =>
                cta.variant === "primary" || !cta.variant ? (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={`group inline-flex items-center gap-4 px-10 py-5 text-sm tracking-wide transition-colors duration-500 ${
                      isDark
                        ? "bg-[var(--color-yellow)] text-[var(--color-ink)] hover:bg-[var(--color-paper)]"
                        : "bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-yellow)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                      0{i + 1}
                    </span>
                    <span>{cta.label}</span>
                    <span
                      aria-hidden
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                ) : (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={`inline-flex items-center gap-2 text-sm link-rule ${
                      isDark
                        ? "text-[var(--color-paper)]"
                        : "text-[var(--color-ink)]"
                    }`}
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
