import { useState } from "react";
import { Link } from "../lib/router";
import { buildOrderMessage, formatNaira, useStore, waLink, FREE_DELIVERY_THRESHOLD } from "../lib/store";
import { NIGERIAN_STATES } from "../data/products";
import { IconArrowRight, IconCheck, IconChevronDown, IconWhatsApp } from "../components/Icons";
import { Corners, ProductVisual, Reveal, WhatsAppButton } from "../components/ui";

interface FormState {
  name: string; phone: string; address: string; city: string; state: string; notes: string;
  payment: string;
}

const PAYMENTS = [
  { id: "pod", label: "Pay on Delivery", sub: "Lagos orders only" },
  { id: "transfer", label: "Bank Transfer", sub: "Account details sent via WhatsApp" },
  { id: "wa", label: "Pay via WhatsApp", sub: "Secure payment link in chat" },
];

export default function Checkout() {
  const { lines, subtotal, delivery, total, cartCount, clearCart } = useStore();
  const [form, setForm] = useState<FormState>({ name: "", phone: "", address: "", city: "", state: "Lagos", notes: "", payment: "pod" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [placed, setPlaced] = useState<string | null>(null);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: false }));
  };

  const validate = () => {
    const next: Record<string, boolean> = {};
    if (!form.name.trim()) next.name = true;
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) next.phone = true;
    if (!form.address.trim()) next.address = true;
    if (!form.city.trim()) next.city = true;
    if (!form.state) next.state = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const orderRef = () => "DKS-" + Math.random().toString(36).slice(2, 6).toUpperCase() + "-" + Math.floor(100 + Math.random() * 900);

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || lines.length === 0) return;
    const ref = orderRef();
    setPlaced(ref);
    clearCart();
    window.scrollTo({ top: 0 });
  };

  const waCheckout = () => {
    if (!validate() || lines.length === 0) return;
    window.open(
      waLink(buildOrderMessage(lines, total, { ...form, notes: `${form.notes ? form.notes + " | " : ""}Payment: ${PAYMENTS.find((p) => p.id === form.payment)?.label}` })),
      "_blank"
    );
  };

  /* ---------- success screen ---------- */
  if (placed) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-ink px-4 pt-24 text-center">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_70%)]" aria-hidden="true" />
        <div className="relative max-w-lg">
          <span className="clip-tag mx-auto flex h-20 w-20 items-center justify-center border border-gold/70 bg-gold/10 text-gold shadow-gold">
            <IconCheck className="h-10 w-10" />
          </span>
          <h1 className="font-display mt-6 text-6xl leading-[0.9] text-frost sm:text-7xl">ORDER <span className="text-gold">LOCKED IN!</span></h1>
          <p className="mt-4 text-base font-medium text-frost/55">
            Order reference <span className="font-display text-xl tracking-[0.14em] text-neon">{placed}</span> received.
            Our squad will confirm your order on WhatsApp/phone within minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink(`Hello DUKES! I just placed order *${placed}* on the website. Please confirm.`)}
              target="_blank" rel="noopener noreferrer"
              className="clip-btn inline-flex items-center gap-2 bg-wa px-7 py-3.5 font-display text-lg tracking-[0.14em] text-ink transition hover:brightness-110"
            >
              <IconWhatsApp className="h-5 w-5" /> CONFIRM ON WHATSAPP
            </a>
            <Link to="/shop" className="clip-btn inline-flex items-center gap-2 border border-neon/60 px-7 py-3.5 font-display text-lg tracking-[0.14em] text-neon transition hover:bg-neon/10">
              KEEP SHOPPING
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- empty guard ---------- */
  if (lines.length === 0) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-ink px-4 pt-24 text-center">
        <h1 className="font-display text-6xl text-frost">NOTHING TO <span className="text-stroke">CHECKOUT</span></h1>
        <p className="mt-3 max-w-sm text-frost/50">Your cart is empty. Load up first, then come back to lock in the order.</p>
        <Link to="/shop" className="clip-btn mt-8 inline-flex items-center gap-3 bg-gold px-8 py-3.5 font-display text-xl tracking-[0.16em] text-ink shadow-gold transition hover:brightness-110">
          BACK TO SHOP <IconArrowRight className="h-5 w-5" />
        </Link>
      </div>
    );
  }

  const waHref = waLink(buildOrderMessage(lines, total, form));

  return (
    <div className="relative min-h-screen bg-ink pt-24 lg:pt-32">
      <div className="bg-grid absolute inset-x-0 top-0 h-72 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.4em] text-neon">CART / <span className="text-gold">CHECKOUT</span></p>
          <h1 className="font-display mt-2 text-6xl leading-[0.9] text-frost sm:text-7xl">
            FINAL <span className="text-neon">DEPLOYMENT</span>
          </h1>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* form */}
          <Reveal>
            <form onSubmit={placeOrder} className="clip-card relative border border-royal/70 bg-navy/30 p-6 sm:p-8" noValidate>
              <Corners />
              <h2 className="font-display text-3xl tracking-[0.08em] text-frost">DELIVERY <span className="text-gold">INTEL</span></h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold tracking-[0.3em] text-electric">FULL NAME *</label>
                  <input value={form.name} onChange={set("name")} placeholder="e.g. Adewale Johnson" className={`field ${errors.name ? "invalid" : ""}`} />
                  {errors.name && <p className="mt-1 text-xs font-bold text-gold">Required — who's receiving the gear?</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold tracking-[0.3em] text-electric">PHONE NUMBER *</label>
                  <input value={form.phone} onChange={set("phone")} placeholder="e.g. 0811 123 5862" inputMode="tel" className={`field ${errors.phone ? "invalid" : ""}`} />
                  {errors.phone && <p className="mt-1 text-xs font-bold text-gold">Enter a valid phone number.</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[11px] font-bold tracking-[0.3em] text-electric">DELIVERY ADDRESS *</label>
                  <input value={form.address} onChange={set("address")} placeholder="Street, landmark, apartment…" className={`field ${errors.address ? "invalid" : ""}`} />
                  {errors.address && <p className="mt-1 text-xs font-bold text-gold">Required — where should the rider drop it?</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold tracking-[0.3em] text-electric">CITY *</label>
                  <input value={form.city} onChange={set("city")} placeholder="e.g. Ikotun" className={`field ${errors.city ? "invalid" : ""}`} />
                  {errors.city && <p className="mt-1 text-xs font-bold text-gold">Required.</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold tracking-[0.3em] text-electric">STATE *</label>
                  <div className="relative">
                    <select value={form.state} onChange={set("state")} className={`field appearance-none pr-10 ${errors.state ? "invalid" : ""}`}>
                      {NIGERIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neon" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[11px] font-bold tracking-[0.3em] text-electric">ORDER NOTES</label>
                  <textarea value={form.notes} onChange={set("notes")} rows={3} placeholder="Delivery instructions, preferred time, bundle requests…" className="field resize-none" />
                </div>
              </div>

              <h3 className="font-display mt-8 text-2xl tracking-[0.1em] text-frost">PAYMENT <span className="text-gold">METHOD</span></h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {PAYMENTS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, payment: p.id }))}
                    className={`clip-tag border px-4 py-3 text-left transition-all duration-200 ${
                      form.payment === p.id ? "border-gold bg-gold/10 shadow-gold" : "border-royal/70 bg-navy/40 hover:border-neon"
                    }`}
                    aria-pressed={form.payment === p.id}
                  >
                    <span className={`font-display block text-lg tracking-[0.08em] ${form.payment === p.id ? "text-gold" : "text-frost"}`}>{p.label.toUpperCase()}</span>
                    <span className="text-[11px] font-semibold text-frost/45">{p.sub}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="clip-btn group flex flex-1 items-center justify-center gap-3 bg-gold py-4 font-display text-xl tracking-[0.16em] text-ink shadow-gold transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(230,196,37,0.4)] active:scale-[0.98]">
                  PLACE ORDER <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <WhatsAppButton href={waHref} className="flex-1 py-4" solid={false}>
                  <IconWhatsApp className="h-5 w-5" /> ORDER VIA WHATSAPP
                </WhatsAppButton>
              </div>
              <p className="mt-4 text-center text-xs font-semibold text-frost/40">
                By placing this order you agree to be contacted on phone/WhatsApp for confirmation.
              </p>
            </form>
          </Reveal>

          {/* summary */}
          <Reveal delay={140}>
            <div className="space-y-4 lg:sticky lg:top-32">
              <div className="clip-card border border-royal/70 bg-navy/40 p-6">
                <h2 className="font-display text-2xl tracking-[0.1em] text-frost">ORDER <span className="text-gold">SUMMARY</span></h2>
                <ul className="mt-4 max-h-72 space-y-3 overflow-y-auto pr-1">
                  {lines.map((l) => (
                    <li key={l.product.id} className="flex items-center gap-3">
                      <span className="clip-tag relative block h-14 w-14 shrink-0 overflow-hidden border border-royal/60 bg-ink">
                        <ProductVisual product={l.product} className="absolute inset-0" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-bold leading-tight text-frost">{l.product.name}</span>
                        <span className="text-xs font-semibold text-frost/45">Qty {l.qty}</span>
                      </span>
                      <span className="font-display text-lg text-gold">{formatNaira(l.product.price * l.qty)}</span>
                    </li>
                  ))}
                </ul>
                <dl className="mt-5 space-y-2.5 border-t border-royal/50 pt-4 text-[15px] font-semibold">
                  <div className="flex justify-between text-frost/60"><dt>Items ({cartCount})</dt><dd className="text-frost">{formatNaira(subtotal)}</dd></div>
                  <div className="flex justify-between text-frost/60"><dt>Delivery</dt><dd className={delivery === 0 ? "text-gold" : "text-frost"}>{delivery === 0 ? "FREE" : formatNaira(delivery)}</dd></div>
                  {subtotal < FREE_DELIVERY_THRESHOLD && (
                    <p className="clip-tag border border-gold/40 bg-gold/5 px-3 py-1.5 text-[11px] font-bold text-gold">
                      {formatNaira(FREE_DELIVERY_THRESHOLD - subtotal)} AWAY FROM FREE DELIVERY
                    </p>
                  )}
                  <div className="flex items-end justify-between border-t border-royal/50 pt-3">
                    <dt className="font-display text-lg tracking-[0.14em] text-frost">TOTAL</dt>
                    <dd className="font-display text-4xl text-gold">{formatNaira(total)}</dd>
                  </div>
                </dl>
              </div>

              <div className="clip-card border border-wa/40 bg-wa/5 p-5">
                <p className="flex items-center gap-2 font-display text-xl tracking-[0.1em] text-wa">
                  <IconWhatsApp className="h-5 w-5" /> FASTER LANE
                </p>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-frost/55">
                  Skip the form — hit "Order via WhatsApp" and your full order lands in our chat pre-written. We confirm in minutes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
