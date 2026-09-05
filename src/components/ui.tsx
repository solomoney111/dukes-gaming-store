import { useEffect, useRef, useState } from "react";
import { Link } from "../lib/router";
import { useStore } from "../lib/store";
import { IconStar, IconCheck, IconCart } from "./Icons";
import { ProductArt } from "./ProductArt";
import { categoryName, type Product } from "../data/products";

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
  index,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
  index?: string;
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className={`flex items-center gap-3 text-[11px] font-bold tracking-[0.42em] text-neon uppercase ${align === "center" ? "justify-center" : ""}`}>
        <span className="inline-block h-px w-8 bg-neon/70" />
        {index && <span className="font-display text-sm tracking-[0.3em] text-gold">{index}</span>}
        {eyebrow}
        {align === "center" && <span className="inline-block h-px w-8 bg-neon/70" />}
      </p>
      <h2 className="font-display mt-3 text-5xl leading-[0.92] tracking-wide text-frost sm:text-6xl lg:text-7xl">{title}</h2>
      {sub && <p className={`mt-4 max-w-xl text-base font-medium leading-relaxed text-frost/55 ${align === "center" ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
}

/* ---------- page header for inner pages ---------- */
export function PageHeader({
  crumb,
  title,
  sub,
  image,
  children,
}: {
  crumb: string;
  title: React.ReactNode;
  sub?: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-40">
      <div className="bg-blueprint absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-25 [mask-image:linear-gradient(to_bottom,black_20%,transparent_92%)]"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
        </div>
      )}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-royal/30 blur-[130px]" aria-hidden="true" />
      <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-neon/10 blur-[110px]" aria-hidden="true" />
      <span className="light-streak" style={{ top: "34%" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 lg:px-8 lg:pb-14">
        <Reveal>
          <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.4em] text-neon">
            <Link to="/" className="transition hover:text-frost">HOME</Link>
            <span className="text-electric">/</span>
            <span className="text-gold">{crumb}</span>
          </p>
          <h1 className="font-display mt-3 text-[clamp(3.2rem,9vw,6.5rem)] leading-[0.88] text-frost">{title}</h1>
          {sub && <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-frost/55 sm:text-lg">{sub}</p>}
        </Reveal>
        {children && <Reveal delay={140}>{children}</Reveal>}
        <div className="beam-divider mt-8 lg:mt-10" aria-hidden="true" />
      </div>
    </section>
  );
}

/* ---------- countdown ---------- */
export function Countdown({ hours = 72, className = "" }: { hours?: number; className?: string }) {
  const target = useRef<number>(Date.now() + hours * 3600_000);
  const [left, setLeft] = useState(hours * 3600_000);
  useEffect(() => {
    const t = window.setInterval(() => setLeft(Math.max(0, target.current - Date.now())), 1000);
    return () => window.clearInterval(t);
  }, []);
  const s = Math.floor(left / 1000);
  const cells = [
    { v: Math.floor(s / 86400), l: "DAYS" },
    { v: Math.floor((s % 86400) / 3600), l: "HRS" },
    { v: Math.floor((s % 3600) / 60), l: "MIN" },
    { v: s % 60, l: "SEC" },
  ];
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`} role="timer" aria-label="Drop countdown">
      {cells.map((c, i) => (
        <div key={c.l} className="flex items-center gap-2 sm:gap-3">
          <div className="clip-tag relative border border-neon/40 bg-abyss/80 px-3 py-2 text-center backdrop-blur-sm sm:px-4">
            <span className="font-display block text-3xl leading-none text-frost tabular-nums sm:text-4xl">
              {String(c.v).padStart(2, "0")}
            </span>
            <span className="mt-1 block text-[9px] font-bold tracking-[0.3em] text-electric">{c.l}</span>
            <span className="absolute inset-x-0 top-0 h-px bg-neon/50" aria-hidden="true" />
          </div>
          {i < cells.length - 1 && <span className="font-display text-2xl text-gold">:</span>}
        </div>
      ))}
    </div>
  );
}

/* ---------- star rating ---------- */
export function Stars({ rating, className = "w-3.5 h-3.5" }: { rating: number; className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= Math.round(rating) ? "text-gold drop-shadow-[0_0_6px_rgba(230,196,37,0.5)]" : "text-frost/15"}>
          <IconStar className={className} />
        </span>
      ))}
    </span>
  );
}

/* ---------- product visual (photo with holographic fallback) ---------- */
export function ProductVisual({
  product,
  className = "",
  imgClass = "",
}: {
  product: Product;
  className?: string;
  imgClass?: string;
}) {
  const [broken, setBroken] = useState(false);
  if (product.image && !broken) {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={() => setBroken(true)}
          className={`h-full w-full object-contain transition-transform duration-700 ${imgClass}`}
          draggable={false}
        />
      </div>
    );
  }
  if (product.art) {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden bg-grid-fine ${className}`}>
        <div className="h-full w-full p-[8%]">
          <ProductArt art={product.art} className="h-full w-full" />
        </div>
        <span className="absolute bottom-2 right-3 font-display text-[10px] tracking-[0.3em] text-neon/50">HOLO-RENDER</span>
      </div>
    );
  }
  return (
    <div className={`relative flex flex-col items-center justify-center overflow-hidden bg-grid-fine text-center ${className}`}>
      <span className="text-ghost font-display select-none text-5xl leading-none tracking-[0.1em]">DUKES</span>
      <span className="mt-1 text-[10px] font-bold tracking-[0.3em] text-neon/60">{categoryName(product.categories[0]).toUpperCase()}</span>
      <span className="absolute bottom-2 right-3 font-display text-[10px] tracking-[0.3em] text-neon/50">SYNCING…</span>
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
  const btn = `flex items-center justify-center border border-royal bg-navy/60 text-frost transition hover:border-neon hover:text-neon hover:shadow-neon ${
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
      className={`btn btn-royal text-lg ${className}`}
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
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn ${solid ? "btn-wa" : "border border-wa/60 text-wa hover:bg-wa/10 hover:shadow-[0_0_22px_rgba(37,211,102,0.25)]"} ${className}`}>
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
