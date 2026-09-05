import { useEffect, useMemo, useState } from "react";
import { Link, navigate } from "../lib/router";
import { buildOrderMessage, formatNaira, useStore, waLink } from "../lib/store";
import { categoryName, getProduct, relatedProducts } from "../data/products";
import { IconCart, IconCheck, IconHeart, IconPin, IconTruck, IconWhatsApp } from "../components/Icons";
import ProductCard from "../components/ProductCard";
import { Corners, ProductVisual, QtyStepper, Reveal, Stars, WhatsAppButton } from "../components/ui";

export default function ProductDetails({ id }: { id: string }) {
  const product = getProduct(id);
  const { addToCart, wishlist, toggleWishlist, showToast } = useStore();
  const [qty, setQty] = useState(1);
  const [view, setView] = useState(0);

  useEffect(() => {
    setQty(1);
    setView(0);
  }, [id]);

  const related = useMemo(() => (product ? relatedProducts(product) : []), [product]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-4 pt-24 text-center">
        <p className="font-display text-6xl text-frost">PRODUCT NOT FOUND</p>
        <p className="mt-3 text-frost/50">This item may have been de-listed from the armory.</p>
        <Link to="/shop" className="clip-btn mt-8 bg-gold px-8 py-3 font-display text-lg tracking-[0.16em] text-ink">BACK TO SHOP</Link>
      </div>
    );
  }

  const wished = wishlist.includes(product.id);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const waSingle = waLink(buildOrderMessage([{ product, qty }], product.price * qty));

  const buyNow = () => {
    addToCart(product.id, qty, true);
    navigate("/checkout");
  };

  return (
    <div className="relative min-h-screen bg-ink pt-28 lg:pt-36">
      <div className="bg-blueprint absolute inset-x-0 top-0 h-96 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-royal/25 blur-[120px]" aria-hidden="true" />
      <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-neon/10 blur-[110px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <Reveal>
          <p className="flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[0.4em] text-neon">
            <Link to="/" className="transition hover:text-frost">HOME</Link>
            <span className="text-electric">/</span>
            <Link to="/shop" className="transition hover:text-frost">SHOP</Link>
            <span className="text-electric">/</span>
            <span className="text-gold">{product.name.toUpperCase()}</span>
          </p>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* gallery */}
          <div>
            <Reveal>
              <div className="clip-card scanlines group relative overflow-hidden border border-royal/70 bg-gradient-to-b from-navy/60 to-ink">
                <Corners className="m-3" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,61,128,0.5),transparent_70%)]" aria-hidden="true" />
                <ProductVisual
                  product={product}
                  className={`h-[320px] sm:h-[420px] lg:h-[480px] ${view === 1 ? "[&>div]:scale-125" : view === 2 ? "[&>div]:scale-150 [&_img]:scale-150" : ""}`}
                  imgClass={view === 1 ? "scale-125" : view === 2 ? "scale-150 object-cover" : ""}
                />
                <span className="absolute left-4 top-4 flex flex-col items-start gap-1.5">
                  {product.badge && <span className="clip-tag bg-gold px-3 py-1 font-display text-sm tracking-[0.14em] text-ink">{product.badge}</span>}
                  {discount > 0 && <span className="clip-tag border border-neon/60 bg-ink/85 px-2.5 py-0.5 font-display text-sm tracking-[0.14em] text-neon">SAVE {discount}%</span>}
                </span>
                <span className="font-display absolute bottom-3 right-4 text-[11px] tracking-[0.3em] text-neon/50">VIEW 0{view + 1} / 03</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["FULL UNIT", "DETAIL", "CLOSE-UP"].map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setView(i)}
                    className={`clip-tag relative h-24 overflow-hidden border transition-all duration-300 sm:h-28 ${
                      view === i ? "border-gold shadow-gold" : "border-royal/60 opacity-60 hover:opacity-100 hover:border-neon"
                    }`}
                    aria-label={`Gallery view: ${label}`}
                  >
                    <ProductVisual product={product} className="absolute inset-0" imgClass={i === 1 ? "scale-125" : i === 2 ? "scale-150" : ""} />
                    <span className="absolute inset-x-0 bottom-0 bg-abyss/80 py-1 text-center text-[9px] font-bold tracking-[0.24em] text-frost/60">{label}</span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* info */}
          <div>
            <Reveal delay={80}>
              <p className="text-[11px] font-bold tracking-[0.36em] text-electric uppercase">
                {product.categories.map((c) => categoryName(c)).join(" • ")}
              </p>
              <h1 className="font-display mt-2 text-5xl leading-[0.92] text-frost sm:text-6xl">{product.name.toUpperCase()}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Stars rating={product.rating} className="h-5 w-5" />
                <span className="text-sm font-bold text-frost/50">{product.rating} • {product.reviews} verified reviews</span>
                <span className="clip-tag border border-wa/50 px-2 py-0.5 text-[10px] font-bold tracking-[0.22em] text-wa">IN STOCK</span>
              </div>

              <div className="mt-6 flex items-end gap-4">
                <p className="font-display text-6xl leading-none text-gold sm:text-7xl">{formatNaira(product.price)}</p>
                {product.oldPrice && (
                  <p className="pb-1.5 text-xl font-semibold text-frost/35 line-through">{formatNaira(product.oldPrice)}</p>
                )}
              </div>

              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-frost/60 sm:text-lg">{product.description}</p>
            </Reveal>

            <Reveal delay={160}>
              <ul className="mt-6 space-y-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] font-semibold text-frost/75">
                    <span className="mt-0.5 text-neon"><IconCheck className="h-5 w-5" /></span> {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <QtyStepper qty={qty} onChange={(q) => setQty(Math.max(1, q))} />
                <button
                  type="button"
                  onClick={() => addToCart(product.id, qty)}
                  className="btn btn-royal flex-1 px-6 py-3 text-xl sm:flex-none"
                >
                  <IconCart className="h-5 w-5" /> ADD TO CART
                </button>
                <button
                  type="button"
                  onClick={buyNow}
                  className="clip-btn inline-flex items-center justify-center gap-2 bg-gold px-8 py-3 font-display text-xl tracking-[0.14em] text-ink shadow-gold transition-all hover:brightness-110 active:scale-[0.97]"
                >
                  BUY NOW
                </button>
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className={`clip-tag flex h-12 w-12 items-center justify-center border transition-all ${
                    wished ? "border-gold/70 bg-gold/15 text-gold shadow-gold" : "border-royal/70 text-frost/60 hover:border-neon hover:text-neon"
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <IconHeart className="h-5 w-5" filled={wished} />
                </button>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-6">
                <WhatsAppButton href={waSingle} className="w-full py-3.5 sm:w-auto sm:px-10">
                  <IconWhatsApp className="h-5 w-5" /> ORDER VIA WHATSAPP
                </WhatsAppButton>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="clip-card mt-8 grid gap-4 border border-royal/60 bg-navy/30 p-5 sm:grid-cols-2">
                <p className="flex items-center gap-3 text-sm font-semibold text-frost/60">
                  <IconTruck className="h-5 w-5 shrink-0 text-neon" /> Same-day dispatch in Lagos • 2–4 days nationwide
                </p>
                <p className="flex items-center gap-3 text-sm font-semibold text-frost/60">
                  <IconPin className="h-5 w-5 shrink-0 text-neon" /> Pickup available — Ikotun, Lagos
                </p>
                <p className="flex items-center gap-3 text-sm font-semibold text-frost/60">
                  <IconCheck className="h-5 w-5 shrink-0 text-gold" /> 7-day replacement guarantee
                </p>
                <p className="flex items-center gap-3 text-sm font-semibold text-frost/60">
                  <IconCheck className="h-5 w-5 shrink-0 text-gold" /> Pay on delivery within Lagos
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <button
                type="button"
                onClick={() => { addToCart(product.id, qty); showToast("Added — opening WhatsApp with your order…", "gold"); window.open(waSingle, "_blank"); }}
                className="mt-5 text-sm font-bold tracking-[0.18em] text-electric underline-offset-4 transition hover:text-neon hover:underline"
              >
                SKIP THE CART — SEND THIS ORDER STRAIGHT TO WHATSAPP →
              </button>
            </Reveal>
          </div>
        </div>

        {/* related */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4 border-b border-royal/50 pb-4">
              <h2 className="font-display text-4xl text-frost sm:text-5xl">COMPLETE THE <span className="text-neon">LOADOUT</span></h2>
              <Link to="/shop" className="font-display hidden text-lg tracking-[0.2em] text-gold transition hover:text-frost sm:block">VIEW ALL →</Link>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
