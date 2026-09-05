import { Link } from "../lib/router";
import { buildOrderMessage, formatNaira, useStore, waLink, FREE_DELIVERY_THRESHOLD } from "../lib/store";
import { IconArrowRight, IconTrash, IconWhatsApp, IconBolt } from "../components/Icons";
import { PageHeader, ProductVisual, QtyStepper, Reveal, WhatsAppButton } from "../components/ui";
import { SCENE_IMAGES } from "../data/products";

export default function Cart() {
  const { lines, setQty, removeFromCart, subtotal, delivery, total, cartCount, clearCart } = useStore();

  if (lines.length === 0) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-ink px-4 pt-24 text-center">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_70%)]" aria-hidden="true" />
        <div className="relative">
          <span className="clip-tag mx-auto flex h-20 w-20 items-center justify-center border border-royal/70 bg-navy/50 text-electric">
            <IconBolt className="h-10 w-10" />
          </span>
          <h1 className="font-display mt-6 text-6xl text-frost sm:text-7xl">CART <span className="text-stroke">EMPTY</span></h1>
          <p className="mx-auto mt-3 max-w-sm text-frost/50">Your loadout is empty, soldier. The armory is fully stocked and waiting.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/shop" className="clip-btn inline-flex items-center gap-3 bg-gold px-8 py-3.5 font-display text-xl tracking-[0.16em] text-ink shadow-gold transition hover:brightness-110 active:scale-[0.97]">
              BROWSE THE ARMORY <IconArrowRight className="h-5 w-5" />
            </Link>
            <WhatsAppButton href={waLink("Hello DUKES GAMING GADGET! Help me pick some gaming gear.")} className="px-8 py-3.5">
              <IconWhatsApp className="h-5 w-5" /> ASK FOR ADVICE
            </WhatsAppButton>
          </div>
        </div>
      </div>
    );
  }

  const waHref = waLink(buildOrderMessage(lines, total));
  const remaining = FREE_DELIVERY_THRESHOLD - subtotal;

  return (
    <div className="relative min-h-screen bg-ink">
      <PageHeader
        crumb="CART"
        image={SCENE_IMAGES.promo}
        title={<>YOUR <span className="glow-neon text-neon">LOADOUT</span> <span className="text-3xl text-frost/40 sm:text-4xl">({cartCount})</span></>}
      >
        <button type="button" onClick={clearCart} className="clip-tag border border-royal/70 px-4 py-2 text-xs font-bold tracking-[0.24em] text-frost/50 transition hover:border-gold hover:text-gold hover:shadow-gold">
          CLEAR CART
        </button>
      </PageHeader>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 lg:px-8">

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* lines */}
          <div className="space-y-4">
            {lines.map((l, i) => (
              <Reveal key={l.product.id} delay={i * 70}>
                <div className="clip-card group flex gap-4 border border-royal/60 bg-navy/35 p-4 transition-all duration-300 hover:border-neon/50 sm:gap-5 sm:p-5">
                  <Link to={`/product/${l.product.id}`} className="clip-tag relative block h-24 w-24 shrink-0 overflow-hidden border border-royal/60 bg-ink sm:h-28 sm:w-28">
                    <ProductVisual product={l.product} className="absolute inset-0" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.28em] text-electric uppercase">{l.product.categories[0].replace(/-/g, " ")}</p>
                        <Link to={`/product/${l.product.id}`} className="text-lg font-bold tracking-wide text-frost transition hover:text-neon">
                          {l.product.name}
                        </Link>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(l.product.id)}
                        className="clip-tag flex h-9 w-9 shrink-0 items-center justify-center border border-royal/60 text-frost/40 transition hover:border-gold hover:text-gold"
                        aria-label={`Remove ${l.product.name}`}
                      >
                        <IconTrash className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-3">
                      <QtyStepper small qty={l.qty} onChange={(q) => setQty(l.product.id, q)} />
                      <div className="text-right leading-none">
                        <span className="block text-[11px] font-semibold text-frost/40">{formatNaira(l.product.price)} × {l.qty}</span>
                        <span className="font-display mt-1 block text-3xl text-gold">{formatNaira(l.product.price * l.qty)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-electric transition hover:text-neon">
              ← CONTINUE SHOPPING
            </Link>
          </div>

          {/* summary */}
          <Reveal delay={150}>
            <div className="clip-card relative border border-royal/70 bg-navy/40 p-6 lg:sticky lg:top-32">
              <h2 className="font-display text-3xl tracking-[0.1em] text-frost">ORDER <span className="text-gold">SUMMARY</span></h2>
              <dl className="mt-5 space-y-3 text-[15px] font-semibold">
                <div className="flex justify-between text-frost/60">
                  <dt>Subtotal</dt><dd className="text-frost">{formatNaira(subtotal)}</dd>
                </div>
                <div className="flex justify-between text-frost/60">
                  <dt>Delivery</dt>
                  <dd className={delivery === 0 ? "text-gold" : "text-frost"}>{delivery === 0 ? "FREE" : formatNaira(delivery)}</dd>
                </div>
                {remaining > 0 && (
                  <div className="clip-tag border border-gold/40 bg-gold/5 px-3 py-2 text-xs font-bold tracking-wide text-gold">
                    ADD {formatNaira(remaining)} MORE FOR FREE DELIVERY
                  </div>
                )}
                <div className="flex items-end justify-between border-t border-royal/50 pt-4">
                  <dt className="font-display text-xl tracking-[0.14em] text-frost">TOTAL</dt>
                  <dd className="font-display text-4xl text-gold">{formatNaira(total)}</dd>
                </div>
              </dl>
              <div className="mt-6 space-y-3">
                <Link to="/checkout" className="clip-btn group flex w-full items-center justify-center gap-2 bg-gold py-3.5 font-display text-xl tracking-[0.16em] text-ink shadow-gold transition-all hover:brightness-110 active:scale-[0.98]">
                  PROCEED TO CHECKOUT <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <WhatsAppButton href={waHref} className="w-full py-3.5">
                  <IconWhatsApp className="h-5 w-5" /> ORDER VIA WHATSAPP
                </WhatsAppButton>
              </div>
              <p className="mt-4 text-center text-xs font-semibold tracking-wide text-frost/40">
                Pay on delivery available in Lagos • Bank transfer nationwide
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
