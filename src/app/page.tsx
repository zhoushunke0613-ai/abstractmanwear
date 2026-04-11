"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Locale, t } from "@/lib/i18n";
import { products, categories } from "@/data/products";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");

  const featuredProducts = products.filter((p) => p.featured);

  return (
    <>
      <Header locale={locale} onLocaleChange={setLocale} />

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-white pt-20"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Text */}
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-6">
                  Abstract Manwear
                </p>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extralight leading-tight mb-8 tracking-tight">
                  {t(locale, "hero.tagline")}
                </h1>
                <p className="text-[var(--muted)] text-base lg:text-lg leading-relaxed max-w-md mb-10">
                  {t(locale, "hero.subtitle")}
                </p>
                <a
                  href="#products"
                  className="inline-block bg-[var(--foreground)] text-white text-sm tracking-wider px-8 py-4 hover:bg-[var(--foreground)]/90 transition-colors duration-300"
                >
                  {t(locale, "hero.cta")}
                </a>
              </div>

              {/* Hero Image Placeholder */}
              <div className="aspect-[4/5] img-placeholder flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border border-[var(--border)] rounded-full flex items-center justify-center">
                    <span className="text-3xl font-extralight text-[var(--muted)]">A</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] tracking-wider">Hero Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16 lg:mb-24">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-4">
                Collection
              </p>
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-4">
                {t(locale, "section.featured")}
              </h2>
              <p className="text-[var(--muted)] text-sm">
                {t(locale, "section.featuredSub")}
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {categories.map((cat) => (
                <span
                  key={cat.id}
                  className="text-xs tracking-wider text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer pb-1 border-b border-transparent hover:border-[var(--foreground)]"
                >
                  {cat.name[locale] || cat.name.en}
                </span>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  locale={locale}
                />
              ))}
            </div>

            {/* Inquiry CTA */}
            <div className="text-center mt-16">
              <a
                href="#contact"
                className="inline-block border border-[var(--foreground)] text-sm tracking-wider px-8 py-4 hover:bg-[var(--foreground)] hover:text-white transition-all duration-300"
              >
                {t(locale, "products.inquiry")}
              </a>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-24 lg:py-32 bg-[var(--subtle-bg)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 lg:mb-24">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-4">
                Difference
              </p>
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-4">
                {t(locale, "section.whyUs")}
              </h2>
              <p className="text-[var(--muted)] text-sm">
                {t(locale, "section.whyUsSub")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-[var(--border)] rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium tracking-wide mb-3">
                  {t(locale, "why.fabric")}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed max-w-xs mx-auto">
                  {t(locale, "why.fabricText")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-[var(--border)] rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3C7 8 7 16 12 21C17 16 17 8 12 3Z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium tracking-wide mb-3">
                  {t(locale, "why.fit")}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed max-w-xs mx-auto">
                  {t(locale, "why.fitText")}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border border-[var(--border)] rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium tracking-wide mb-3">
                  {t(locale, "why.quality")}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed max-w-xs mx-auto">
                  {t(locale, "why.qualityText")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="aspect-[4/3] img-placeholder flex items-center justify-center order-2 lg:order-1">
                <p className="text-xs text-[var(--muted)] tracking-wider">About Image</p>
              </div>

              <div className="order-1 lg:order-2">
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-4">Story</p>
                <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-8">
                  {t(locale, "about.subtitle")}
                </h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-8">
                  {t(locale, "about.story")}
                </p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {t(locale, "about.missionText")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section id="size-guide" className="py-24 lg:py-32 bg-[var(--subtle-bg)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-4">Fit</p>
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-4">
                {t(locale, "sizeGuide.title")}
              </h2>
              <p className="text-[var(--muted)] text-sm">{t(locale, "sizeGuide.subtitle")}</p>
            </div>

            <div className="bg-white overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left px-6 py-4 font-medium tracking-wide text-xs uppercase">Size</th>
                    <th className="text-left px-6 py-4 font-medium tracking-wide text-xs uppercase">{t(locale, "sizeGuide.waist")}</th>
                    <th className="text-left px-6 py-4 font-medium tracking-wide text-xs uppercase">{t(locale, "sizeGuide.hips")}</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  {[
                    { size: "S", waist: "68-74", hips: "86-92" },
                    { size: "M", waist: "74-82", hips: "92-98" },
                    { size: "L", waist: "82-90", hips: "98-106" },
                    { size: "XL", waist: "90-98", hips: "106-114" },
                    { size: "2XL", waist: "98-108", hips: "114-122" },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-[var(--border)] last:border-0">
                      <td className="px-6 py-4 font-medium text-[var(--foreground)]">{row.size}</td>
                      <td className="px-6 py-4">{row.waist}</td>
                      <td className="px-6 py-4">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-sm font-medium tracking-wide mb-3">{t(locale, "sizeGuide.howTo")}</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed max-w-md mx-auto">{t(locale, "sizeGuide.howToText")}</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-4">Inquiry</p>
                <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-4">
                  {t(locale, "contact.title")}
                </h2>
                <p className="text-[var(--muted)] text-sm mb-12">{t(locale, "contact.subtitle")}</p>

                <form className="flex flex-col gap-6">
                  <div>
                    <label className="text-xs tracking-wider text-[var(--muted)] mb-2 block">{t(locale, "contact.name")}</label>
                    <input type="text" className="w-full border-b border-[var(--border)] py-3 text-sm bg-transparent focus:outline-none focus:border-[var(--foreground)] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs tracking-wider text-[var(--muted)] mb-2 block">{t(locale, "contact.email")}</label>
                    <input type="email" className="w-full border-b border-[var(--border)] py-3 text-sm bg-transparent focus:outline-none focus:border-[var(--foreground)] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs tracking-wider text-[var(--muted)] mb-2 block">{t(locale, "contact.company")}</label>
                    <input type="text" className="w-full border-b border-[var(--border)] py-3 text-sm bg-transparent focus:outline-none focus:border-[var(--foreground)] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs tracking-wider text-[var(--muted)] mb-2 block">{t(locale, "contact.message")}</label>
                    <textarea rows={4} className="w-full border-b border-[var(--border)] py-3 text-sm bg-transparent focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="self-start bg-[var(--foreground)] text-white text-sm tracking-wider px-8 py-4 hover:bg-[var(--foreground)]/90 transition-colors duration-300 mt-4">
                    {t(locale, "contact.send")}
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-[var(--subtle-bg)] p-12 lg:p-16">
                  <h3 className="text-sm font-medium tracking-wide mb-8">{t(locale, "contact.info")}</h3>
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-xs tracking-wider text-[var(--muted)] mb-1">{t(locale, "contact.emailLabel")}</p>
                      <p className="text-sm">info@abstractmanwear.com</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-wider text-[var(--muted)] mb-1">{t(locale, "contact.locationLabel")}</p>
                      <p className="text-sm">{t(locale, "contact.location")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
