import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden border-b border-neutral-200 bg-neutral-100">
      {/* Full-bleed background image — extends up behind the sticky header */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content — kept within the image's empty left panel so it never overlaps the machinery */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-28">
        {/* Logo watermark — sits above the image but below the text.
            Scaled up so the lower half clearly overlaps the eyebrow + headline. */}
        <Image
          src="/images/logo.png"
          alt=""
          width={437}
          height={718}
          aria-hidden
          priority
          className="absolute top-4 left-6 lg:top-4 lg:left-8 w-52 lg:w-72 h-auto opacity-80 pointer-events-none select-none"
        />

        <div className="relative max-w-md">
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-700">
            Men&apos;s Underwear · OEM &amp; ODM
          </p>

          {/* Headline */}
          <h1 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-[1.15]">
            Men&apos;s Underwear OEM &amp; ODM for Global Brands
          </h1>

          {/* Lede */}
          <p className="mt-5 text-sm lg:text-base text-neutral-700 leading-relaxed">
            We work with global brands, wholesalers, and private label
            businesses to deliver reliable manufacturing — from sourcing and
            development to production and shipment.
          </p>

          {/* Conversion CTAs — frosted glass pills matching the header */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-brand-yellow/75 border border-brand-yellow-light/70 backdrop-blur-md text-neutral-900 font-medium text-sm px-6 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-brand-yellow/95 hover:border-brand-yellow-light/90 hover:shadow-md hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
            <Link
              href="/catalog"
              className="rounded-full bg-white/50 border border-white/60 backdrop-blur-md text-neutral-800 text-sm px-6 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-white/85 hover:border-white/90 hover:shadow-md hover:-translate-y-0.5"
            >
              Download Catalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
