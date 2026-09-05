import { Link } from "../lib/router";
import { formatNaira, useStore } from "../lib/store";
import { categoryName, type Product } from "../data/products";
import { IconEye, IconHeart } from "./Icons";
import { AddToCartButton, ProductVisual, Stars } from "./ui";

export default function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const { wishlist, toggleWishlist } = useStore();
  const wished = wishlist.includes(product.id);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <article
      className="clip-card card-shell sheen group relative flex h-full flex-col transition-transform duration-300 hover:-translate-y-2"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* gold charge line on top */}
      <span className="absolute left-0 top-0 z-10 h-[3px] w-0 bg-gradient-to-r from-gold to-neon transition-all duration-500 group-hover:w-full" aria-hidden="true" />

      {/* image area */}
      <Link to={`/product/${product.id}`} className="relative block h-52 overflow-hidden sm:h-56" ariaLabel={`View ${product.name}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(16,61,128,0.55),rgba(4,10,20,0.4)_72%)]" />
        <ProductVisual
          product={product}
          className="absolute inset-0"
          imgClass="group-hover:scale-[1.08] group-hover:-translate-y-1 drop-shadow-[0_0_28px_rgba(0,168,255,0.25)]"
        />
        {/* scan sweep on hover */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-transparent via-neon/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:animate-[scan-sweep_1.4s_linear_infinite] group-hover:opacity-100" />
        {/* bottom fade into info panel */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#030811] to-transparent" aria-hidden="true" />

        {/* badges */}
        <span className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {product.badge && (
            <span className="clip-tag bg-gradient-to-br from-[#f3d445] to-[#cfa914] px-2.5 py-1 font-display text-[13px] tracking-[0.14em] text-ink shadow-gold">{product.badge}</span>
          )}
          {discount > 0 && (
            <span className="clip-tag border border-neon/60 bg-ink/85 px-2 py-0.5 font-display text-[12px] tracking-[0.14em] text-neon">-{discount}%</span>
          )}
        </span>

        {/* wishlist */}
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          className={`clip-tag absolute right-3 top-3 flex h-9 w-9 items-center justify-center border transition-all duration-200 ${
            wished
              ? "border-gold/70 bg-gold/15 text-gold shadow-gold"
              : "border-royal/70 bg-ink/70 text-frost/60 hover:border-neon hover:text-neon hover:shadow-neon"
          }`}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        >
          <IconHeart className={`h-5 w-5 ${wished ? "fill-current" : ""}`} filled={wished} />
        </button>

        {/* quick view */}
        <span className="clip-btn pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-2 border border-neon/40 bg-abyss/95 px-4 py-2 font-display text-sm tracking-[0.22em] text-neon opacity-0 shadow-neon transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <IconEye className="h-4 w-4" /> QUICK VIEW
        </span>
      </Link>

      {/* info */}
      <div className="relative flex flex-1 flex-col gap-2 border-t border-royal/40 bg-[#050d1c]/60 p-4">
        <p className="text-[10px] font-bold tracking-[0.32em] text-electric uppercase">
          {categoryName(product.categories[0])}
        </p>
        <Link to={`/product/${product.id}`} className="transition-colors hover:text-neon">
          <h3 className="text-lg font-bold leading-tight tracking-wide text-frost">{product.name}</h3>
        </Link>
        <p className="line-clamp-2 text-sm font-medium leading-snug text-frost/50">{product.short}</p>
        <div className="flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs font-semibold text-frost/40">{product.rating} ({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="leading-none">
            {product.oldPrice && (
              <span className="block text-xs font-semibold text-frost/35 line-through">{formatNaira(product.oldPrice)}</span>
            )}
            <span className="font-display text-[26px] tracking-wide text-gold transition-all group-hover:glow-gold">{formatNaira(product.price)}</span>
          </div>
        </div>

        <AddToCartButton product={product} className="mt-2 w-full py-2.5" />
      </div>
    </article>
  );
}
