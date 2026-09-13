import Image from "next/image";

interface Props {
  /** Path under /public, e.g. "/images/brand/team.jpg" */
  src: string;
  alt: string;
  /** Tailwind classes for the frame — aspect ratio, rounding, borders */
  className?: string;
  sizes?: string;
  /** CSS object-position, for portraits cropped into landscape frames */
  position?: string;
}

/** A real photograph filling a fixed-ratio frame; the counterpart of ImagePlaceholder. */
export default function Photo({
  src,
  alt,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 45vw",
  position = "center",
}: Props) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-neutral-200 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
