interface SectionHeaderProps {
  num?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  num,
  eyebrow,
  title,
  lede,
  subtitle,
  align,
}: SectionHeaderProps) {
  const body = lede ?? subtitle;
  void align;
  return (
    <div className="grid grid-cols-12 gap-8 mb-16 lg:mb-24 pb-8 border-b border-[var(--color-rule)]">
      <div className="col-span-12 lg:col-span-2 flex items-baseline gap-4">
        {num && (
          <span className="font-mono text-xs text-[var(--color-taupe)] tracking-widest">
            {num}
          </span>
        )}
        {eyebrow && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
            {eyebrow}
          </span>
        )}
      </div>
      <div className="col-span-12 lg:col-span-7">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-[var(--color-ink)] tracking-tight">
          {title}
        </h2>
      </div>
      {body && (
        <div className="col-span-12 lg:col-span-3 flex items-end">
          <p className="text-sm lg:text-base text-[var(--color-ink-soft)] leading-[1.6] max-w-[40ch]">
            {body}
          </p>
        </div>
      )}
    </div>
  );
}
