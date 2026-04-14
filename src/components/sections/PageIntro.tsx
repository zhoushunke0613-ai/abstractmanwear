interface PageIntroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  subtitle?: string;
}

export default function PageIntro({ eyebrow, title, lede, subtitle }: PageIntroProps) {
  const body = lede ?? subtitle;
  return (
    <section className="pt-8 lg:pt-12 pb-20 lg:pb-28 border-b border-[var(--color-rule)]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
              {eyebrow}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] text-[var(--color-ink)] tracking-[-0.01em]">
              {title}
            </h1>
          </div>
        </div>
        {body && (
          <div className="grid grid-cols-12 gap-8 mt-10 lg:mt-12">
            <div className="col-span-12 lg:col-span-6 lg:col-start-3">
              <p className="text-[var(--color-ink-soft)] text-base lg:text-lg font-light leading-[1.6] max-w-[60ch]">
                {body}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
