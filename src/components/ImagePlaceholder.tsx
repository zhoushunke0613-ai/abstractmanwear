interface Props {
  /** Short label like "FACTORY PHOTO" */
  label: string;
  /** Description of what image to provide */
  description: string;
  /** Additional Tailwind classes — use for aspect ratio, sizing, etc. */
  className?: string;
  /** Dark mode for dark section backgrounds */
  dark?: boolean;
}

export default function ImagePlaceholder({
  label,
  description,
  className = "",
  dark = false,
}: Props) {
  return (
    <div
      className={`rounded-xl border-2 border-dashed flex flex-col items-center justify-center p-6 text-center select-none ${
        dark
          ? "border-neutral-600 bg-neutral-800/50"
          : "border-neutral-300 bg-neutral-100"
      } ${className}`}
    >
      {/* Image icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className={dark ? "text-neutral-600" : "text-neutral-400"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
      <p
        className={`mt-3 text-[10px] uppercase tracking-[0.2em] font-semibold ${
          dark ? "text-neutral-500" : "text-neutral-400"
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-1.5 text-[11px] leading-relaxed max-w-[240px] ${
          dark ? "text-neutral-500" : "text-neutral-500"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
