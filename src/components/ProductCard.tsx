import { Product } from "@/data/products";
import { Locale, t } from "@/lib/i18n";

interface ProductCardProps {
  product: Product;
  locale: Locale;
}

export default function ProductCard({ product, locale }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="aspect-[3/4] img-placeholder relative overflow-hidden mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[var(--muted)] text-sm tracking-wider">
            {product.name[locale] || product.name.en}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>

      {/* Info */}
      <div>
        <h3 className="text-sm font-medium tracking-wide mb-1">
          {product.name[locale] || product.name.en}
        </h3>
        <p className="text-xs text-[var(--muted)] mb-2">{product.material}</p>
        <div className="flex gap-2">
          {product.colors.slice(0, 3).map((color) => (
            <span key={color} className="text-[10px] text-[var(--muted)] tracking-wide">
              {color}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
