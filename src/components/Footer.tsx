import { useState } from "react";
import { Link } from "../lib/router";
import { PHONE_DISPLAY, useStore, waLink } from "../lib/store";
import { CATEGORIES } from "../data/products";
import { BrandMark, IconFacebook, IconInstagram, IconPhone, IconPin, IconTikTok, IconWhatsApp, IconClock } from "./Icons";

const SUPPORT_LINKS = ["Shipping", "Returns", "FAQs", "Track Order", "Warranty"];

export default function Footer() {
  const { showToast } = useStore();
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("Welcome to the Duke squad! Check your inbox.", "gold");
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-royal/50 bg-abyss">
      {/* watermark */}
      <p aria-hidden="true" className="font-display pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[26vw] leading-none tracking-[0.06em] text-frost/[0.025] lg:text-[19rem]">
        DUKES
      </p>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <BrandMark className="h-12 w-12" />
              <span className="leading-none">
                <span className="font-display block text-3xl tracking-[0.08em] text-frost">DUKES</span>
                <span className="block text-[10px] font-bold tracking-[0.42em] text-electric">GAMING GADGET</span>
              </span>
            </Link>
            <p className="font-display mt-4 text-xl tracking-[0.14em] text-neon">GAME BETTER. WIN MORE!</p>
            <p className="mt-3 max-w-xs text-sm font-medium leading-relaxed text-frost/50">
              Premium gaming gadgets and accessories for CODM, mobile, console and PC gamers. Gear up. Stay ahead. Be a Duke.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {[
                { icon: IconInstagram, label: "Instagram", href: "https://instagram.com" },
                { icon: IconTikTok, label: "TikTok", href: "https://tiktok.com" },
                { icon: IconFacebook, label: "Facebook", href: "https://facebook.com" },
                { icon: IconWhatsApp, label: "WhatsApp", href: waLink("Hello DUKES GAMING GADGET!") },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="clip-tag flex h-10 w-10 items-center justify-center border border-royal/70 text-frost/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-neon hover:text-neon hover:shadow-neon"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="font-display text-lg tracking-[0.28em] text-gold">NAVIGATION</h4>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold tracking-wide text-frost/60">
              {[
                { to: "/", label: "Home" },
                { to: "/shop", label: "Shop" },
                { to: "/categories", label: "Categories" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { to: "/cart", label: "Cart" },
              ].map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 transition hover:text-neon">
                    <span className="h-px w-3 bg-electric/50 transition-all group-hover:w-5 group-hover:bg-neon" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* shop + support */}
          <div>
            <h4 className="font-display text-lg tracking-[0.28em] text-gold">SHOP</h4>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold tracking-wide text-frost/60">
              {CATEGORIES.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <Link to={`/shop?cat=${c.id}`} className="group inline-flex items-center gap-2 transition hover:text-neon">
                    <span className="h-px w-3 bg-electric/50 transition-all group-hover:w-5 group-hover:bg-neon" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display mt-6 text-lg tracking-[0.28em] text-gold">SUPPORT</h4>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold tracking-wide text-frost/60">
              {SUPPORT_LINKS.map((l) => (
                <li key={l}>
                  <Link to="/contact" className="group inline-flex items-center gap-2 transition hover:text-neon">
                    <span className="h-px w-3 bg-electric/50 transition-all group-hover:w-5 group-hover:bg-neon" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact + newsletter */}
          <div>
            <h4 className="font-display text-lg tracking-[0.28em] text-gold">CONTACT</h4>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-frost/60">
              <li>
                <a href={`tel:${PHONE_DISPLAY}`} className="flex items-center gap-3 transition hover:text-neon">
                  <IconPhone className="h-4 w-4 shrink-0 text-neon" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3"><IconPin className="h-4 w-4 shrink-0 text-neon" /> Ikotun, Lagos, Nigeria</li>
              <li className="flex items-center gap-3"><IconClock className="h-4 w-4 shrink-0 text-neon" /> Mon – Sat, 9AM – 8PM</li>
            </ul>
            <form onSubmit={subscribe} className="mt-5">
              <label className="text-[11px] font-bold tracking-[0.3em] text-frost/45">JOIN THE SQUAD — DROP ALERTS</label>
              <div className="mt-2 flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="field clip-tag flex-1 border-r-0"
                  aria-label="Email address"
                />
                <button type="submit" className="clip-btn bg-gold px-4 font-display text-base tracking-[0.18em] text-ink transition hover:brightness-110">
                  JOIN
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-royal/40 pt-6 text-xs font-semibold tracking-[0.16em] text-frost/35 sm:flex-row">
          <p>© {new Date().getFullYear()} DUKES GAMING GADGET. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse bg-gold" />
            GEAR UP. STAY AHEAD. <span className="text-gold">BE A DUKE!</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
