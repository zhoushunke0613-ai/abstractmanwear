import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-wide text-neutral-500">
          Men&apos;s Underwear · OEM &amp; ODM
        </p>

        {/* Headline */}
        <h1 className="mt-4 text-4xl lg:text-6xl font-semibold tracking-tight max-w-4xl">
          Custom men&apos;s underwear manufacturing
          for international brands.
        </h1>

        {/* Lede */}
        <p className="mt-6 text-base lg:text-lg text-neutral-600 max-w-2xl">
          Abstract Man partners with brands, wholesalers, and retailers worldwide.
          From fabric sourcing to final inspection — everything handled in-house
          at our Zhongshan factory.
        </p>

        {/* Conversion CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="bg-neutral-900 text-white px-6 py-3 hover:bg-neutral-700"
          >
            Start Your Project
          </Link>
          <Link
            href="/catalog"
            className="border border-neutral-300 px-6 py-3 hover:bg-neutral-50"
          >
            Download Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
