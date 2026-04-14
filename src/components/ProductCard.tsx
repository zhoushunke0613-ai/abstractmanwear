import { Product } from "@/data/products";
import { Locale } from "@/lib/i18n";

interface ProductCardProps {
  product: Product;
  locale: Locale;
}

export default function ProductCard({ product, locale }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] img-placeholder relative overflow-hidden mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/30 text-sm tracking-wider">
            {product.name[locale] || product.name.en}
          </span>
        </div>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
      </div>

      <div>
        <h3 className="text-sm font-medium tracking-wide mb-1 text-white">
          {product.name[locale] || product.name.en}
        </h3>
        <p className="text-xs text-white/40 mb-2">{product.material}</p>
        <div className="flex gap-2">
          {product.colors.slice(0, 3).map((color) => (
            <span key={color} className="text-[10px] text-white/30 tracking-wide">
              {color}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
