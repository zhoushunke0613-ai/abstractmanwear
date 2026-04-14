interface PageIntroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  subtitle?: string;
}

export default function PageIntro({ eyebrow, title, lede, subtitle }: PageIntroProps) {
  const body = lede ?? subtitle;
  return (
    <section className="pt-48 lg:pt-56 pb-24 lg:pb-32 border-b border-[var(--color-rule)]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
              Chapter
            </p>
            <p className="font-display text-5xl text-[var(--color-ink)] mt-1">
              {eyebrow}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[1] text-[var(--color-ink)] tracking-tight">
              {title}
            </h1>
          </div>
        </div>
        {body && (
          <div className="grid grid-cols-12 gap-8 mt-16">
            <div className="col-span-12 lg:col-span-6 lg:col-start-3">
              <p className="text-[var(--color-ink-soft)] text-lg lg:text-xl font-light leading-[1.5] max-w-[55ch]">
                {body}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
