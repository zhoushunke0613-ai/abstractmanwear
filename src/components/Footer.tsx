import { Locale, t } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="bg-[var(--foreground)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-light tracking-[0.2em] uppercase mb-4">
              Abstract
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {t(locale, "footer.tagline")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/30 mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-sm text-white/60 hover:text-white transition-colors">
                {t(locale, "nav.home")}
              </a>
              <a href="#products" className="text-sm text-white/60 hover:text-white transition-colors">
                {t(locale, "nav.products")}
              </a>
              <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">
                {t(locale, "nav.about")}
              </a>
              <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">
                {t(locale, "nav.contact")}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/30 mb-6">
              {t(locale, "contact.info")}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <p>info@abstractmanwear.com</p>
              <p>{t(locale, "contact.location")}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Abstract Manwear. {t(locale, "footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
