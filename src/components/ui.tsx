import { useEffect, useRef, useState } from "react";
import { useStore } from "../lib/store";
import { IconStar, IconCheck, IconCart } from "./Icons";
import { ProductArt } from "./ProductArt";
import type { Product } from "../data/products";

/* ---------- scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as never} className={`reveal ${inView ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/* ---------- HUD corner brackets ---------- */
export function Corners({ className = "", tone = "neon" }: { className?: string; tone?: "neon" | "gold" }) {
  const c = tone === "gold" ? "border-gold/70" : "border-neon/60";
  return (
    <span className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <i className={`absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 ${c}`} />
      <i className={`absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 ${c}`} />
      <i className={`absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 ${c}`} />
      <i className={`absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 ${c}`} />
    </span>
  );
}

/* ---------- section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  tone,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
  tone?: string;
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className={`flex items-center gap-3 text-[11px] font-bold tracking-[0.42em] text-neon uppercase ${align === "center" ? "justify-center" : ""}`}>
        <span className="inline-block h-px w-8 bg-neon/70" />
        {eyebrow}
        {align === "center" && <span className="inline-block h-px w-8 bg-neon/70" />}
      </p>
      <h2 className={`font-display mt-3 text-4xl leading-[0.95] tracking-wide text-frost sm:text-5xl lg:text-6xl ${tone ?? ""}`}>{title}</h2>
      {sub && <p className={`mt-4 max-w-xl text-base font-medium leading-relaxed text-frost/55 ${align === "center" ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
}

/* ---------- star rating ---------- */
export function Stars({ rating, className = "w-3.5 h-3.5" }: { rating: number; className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= Math.round(rating) ? "text-gold" : "text-frost/15"}>
          <IconStar className={className} />
        </span>
      ))}
    </span>
  );
}

/* ---------- product visual (photo or holographic art) ---------- */
export function ProductVisual({
  product,
  className = "",
  imgClass = "",
}: {
  product: Product;
  className?: string;
  imgClass?: string;
}) {
  if (product.image) {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-contain transition-transform duration-700 ${imgClass}`}
          draggable={false}
        />
      </div>
    );
  }
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-grid-fine ${className}`}>
      <div className="h-full w-full p-[8%]">
        <ProductArt art={product.art ?? "cable"} className="h-full w-full" />
      </div>
      <span className="absolute bottom-2 right-3 font-display text-[10px] tracking-[0.3em] text-neon/50">HOLO-RENDER</span>
    </div>
  );
}

/* ---------- toast host ---------- */
export function ToastHost() {
  const { toasts } = useStore();
  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-[90] flex flex-col items-end gap-2 sm:bottom-6">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`anim-toast clip-tag flex items-center gap-3 border bg-navy/95 px-4 py-3 shadow-neon backdrop-blur-sm ${
            t.tone === "gold" ? "border-gold/60" : "border-neon/50"
          }`}
        >
          <span className={t.tone === "gold" ? "text-gold" : "text-neon"}>
            {t.tone === "gold" ? <IconStar className="h-4 w-4" /> : <IconCheck className="h-4 w-4" />}
          </span>
          <p className="max-w-[240px] text-sm font-bold tracking-wide text-frost">{t.msg}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- quantity stepper ---------- */
export function QtyStepper({
  qty,
  onChange,
  small,
}: {
  qty: number;
  onChange: (q: number) => void;
  small?: boolean;
}) {
  const btn = `flex items-center justify-center border border-royal bg-navy/60 text-frost transition hover:border-neon hover:text-neon ${
    small ? "h-8 w-8 text-sm" : "h-11 w-11 text-lg"
  }`;
  return (
    <div className="inline-flex items-stretch">
      <button type="button" className={btn} onClick={() => onChange(qty - 1)} aria-label="Decrease quantity">−</button>
      <span className={`flex items-center justify-center border-y border-royal bg-ink/60 font-bold text-frost ${small ? "w-10 text-sm" : "w-14"}`}>
        {qty}
      </span>
      <button type="button" className={btn} onClick={() => onChange(qty + 1)} aria-label="Increase quantity">+</button>
    </div>
  );
}

/* ---------- add-to-cart button ---------- */
export function AddToCartButton({
  product,
  qty = 1,
  className = "",
  children,
}: {
  product: Product;
  qty?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const { addToCart } = useStore();
  return (
    <button
      type="button"
      onClick={() => addToCart(product.id, qty)}
      className={`clip-btn group/btn inline-flex items-center justify-center gap-2 bg-royal font-display text-lg tracking-[0.14em] text-frost transition-all duration-300 hover:bg-electric hover:shadow-neon active:scale-[0.97] ${className}`}
    >
      <IconCart className="h-5 w-5 transition-transform group-hover/btn:-translate-y-0.5" />
      {children ?? "ADD TO CART"}
    </button>
  );
}

/* ---------- whatsapp order button ---------- */
export function WhatsAppButton({
  href,
  className = "",
  children,
  solid,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  solid?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`clip-btn inline-flex items-center justify-center gap-2 font-display text-lg tracking-[0.14em] transition-all duration-300 active:scale-[0.97] ${
        solid
          ? "bg-wa text-ink hover:brightness-110 hover:shadow-[0_0_28px_rgba(37,211,102,0.4)]"
          : "border border-wa/60 text-wa hover:bg-wa/10 hover:shadow-[0_0_22px_rgba(37,211,102,0.25)]"
      } ${className}`}
    >
      {children}
    </a>
  );
}

/* ---------- count-up stat ---------- */
export function CountUp({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          setVal(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref} className={className}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------- ambient particles ---------- */
export function Particles({ count = 16, goldEvery = 5 }: { count?: number; goldEvery?: number }) {
  const items = useRef(
    Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      size: 2 + Math.random() * 3.5,
      dur: 9 + Math.random() * 14,
      delay: Math.random() * 14,
      opacity: 0.25 + Math.random() * 0.55,
      px: (Math.random() - 0.5) * 90,
      gold: i % goldEvery === 0,
    }))
  ).current;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          className={`particle ${p.gold ? "gold" : ""}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            ["--po" as string]: p.opacity,
            ["--px" as string]: `${p.px}px`,
          }}
        />
      ))}
    </div>
  );
}
