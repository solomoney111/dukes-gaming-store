import { useEffect, useRef, useState } from "react";
import { Link, navigate, useRoute } from "../lib/router";
import { useStore, PHONE_DISPLAY, waLink } from "../lib/store";
import { BrandMark, IconCart, IconClose, IconMenu, IconPhone, IconPin, IconSearch, IconWhatsApp, IconArrowRight } from "./Icons";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/shop", label: "SHOP" },
  { to: "/categories", label: "CATEGORIES" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const { cartCount } = useStore();
  const { path } = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (searchOpen) window.setTimeout(() => searchRef.current?.focus(), 60);
  }, [searchOpen]);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/shop${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* top strip */}
      <div
        className={`hidden border-b border-royal/50 bg-abyss/95 text-[12px] font-semibold tracking-[0.14em] text-frost/60 transition-all duration-300 md:block ${
          scrolled ? "h-0 overflow-hidden border-b-0 opacity-0" : "h-9 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 lg:px-8">
          <span className="flex items-center gap-2">
            <span className="ping-dot inline-block h-1.5 w-1.5 rounded-full bg-gold text-gold" />
            <IconPin className="h-3.5 w-3.5 text-neon" /> IKOTUN, LAGOS — NATIONWIDE DELIVERY
          </span>
          <span className="flex items-center gap-5">
            <a href={`tel:${PHONE_DISPLAY}`} className="flex items-center gap-2 transition hover:text-neon">
              <IconPhone className="h-3.5 w-3.5 text-neon" /> {PHONE_DISPLAY}
            </a>
            <a
              href={waLink("Hello DUKES GAMING GADGET! I want to place an order.")}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold transition hover:text-frost"
            >
              <IconWhatsApp className="h-3.5 w-3.5" /> ORDER VIA WHATSAPP
            </a>
          </span>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`relative border-b transition-all duration-300 ${
          scrolled
            ? "border-neon/25 bg-ink/92 shadow-[0_14px_44px_rgba(0,0,0,0.55),0_10px_40px_rgba(0,168,255,0.10)] backdrop-blur-md"
            : "border-royal/40 bg-ink/55 backdrop-blur-sm"
        }`}
      >
        {/* gold energy line under the bar when scrolled */}
        <span
          className={`gold-hairline absolute inset-x-0 bottom-[-1px] transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        />
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:h-[76px] lg:px-8">
          {/* brand */}
          <Link to="/" className="group flex items-center gap-3">
            <span className="relative">
              <span className="absolute inset-0 rounded-full bg-neon/20 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <BrandMark className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-105 lg:h-11 lg:w-11" />
            </span>
            <span className="leading-none">
              <span className="font-display block text-2xl tracking-[0.08em] text-frost transition-colors duration-300 group-hover:text-neon group-hover:glow-neon">DUKES</span>
              <span className="mt-0.5 block text-[10px] font-bold tracking-[0.42em] text-electric">GAMING GADGET</span>
            </span>
          </Link>

          {/* center nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((n) => {
              const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`clip-tag relative px-4 py-2 font-display text-lg tracking-[0.18em] transition-all duration-200 ${
                    active
                      ? "bg-royal/40 text-gold"
                      : "text-frost/75 hover:bg-navy/60 hover:text-neon hover:shadow-[0_0_18px_rgba(0,168,255,0.25)]"
                  }`}
                >
                  {n.label}
                  <span
                    className={`absolute inset-x-3 bottom-0.5 h-px bg-gold shadow-gold transition-all duration-300 ${active ? "opacity-100" : "opacity-0 scale-x-0"}`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="clip-tag flex h-10 w-10 items-center justify-center border border-royal/70 text-frost/80 transition hover:border-neon hover:text-neon hover:shadow-neon"
              aria-label="Search products"
            >
              {searchOpen ? <IconClose className="h-5 w-5" /> : <IconSearch className="h-5 w-5" />}
            </button>
            <Link
              to="/cart"
              className="clip-tag relative flex h-10 w-10 items-center justify-center border border-royal/70 text-frost/80 transition hover:border-neon hover:text-neon hover:shadow-neon"
              ariaLabel={`Cart, ${cartCount} items`}
            >
              <IconCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span key={cartCount} className="anim-pop absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center bg-gold px-1 font-display text-[13px] leading-none tracking-normal text-ink shadow-gold">
                  {cartCount}
                </span>
              )}
            </Link>
            <a
              href={waLink("Hello DUKES GAMING GADGET! I need gaming gear.")}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-wa hidden px-4 py-2.5 text-base sm:inline-flex"
            >
              <IconWhatsApp className="h-5 w-5" /> WHATSAPP
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className={`clip-tag flex h-10 w-10 items-center justify-center border transition lg:hidden ${
                menuOpen ? "border-gold text-gold" : "border-royal/70 text-frost/80 hover:border-neon hover:text-neon"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* search overlay */}
        <div className={`overflow-hidden transition-all duration-300 ${searchOpen ? "max-h-24 border-t border-royal/50" : "max-h-0"}`}>
          <form onSubmit={submitSearch} className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:px-8">
            <IconSearch className="h-5 w-5 shrink-0 text-neon" />
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search controllers, sleeves, coolers…"
              className="field border-0 bg-transparent px-0 text-lg tracking-wide focus:shadow-none"
              aria-label="Search products"
            />
            <button type="submit" className="btn btn-gold px-5 py-2 text-base">
              SEARCH
            </button>
          </form>
        </div>
      </div>

      {/* mobile menu — full overlay */}
      <div
        className={`fixed inset-0 top-16 z-[-1] lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-abyss/80 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`relative flex h-full flex-col overflow-y-auto border-t border-royal/50 bg-ink/98 px-6 pb-10 pt-6 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          aria-label="Mobile"
        >
          <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />
          <p className="relative text-[10px] font-bold tracking-[0.42em] text-electric">// NAVIGATION</p>
          <div className="relative mt-3 flex flex-col">
            {NAV.map((n, i) => {
              const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`group flex items-center justify-between border-b border-royal/30 py-4 transition-all duration-300 ${
                    menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  } ${active ? "text-gold" : "text-frost/90 hover:text-neon"}`}
                  style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : "0ms" }}
                >
                  <span className="font-display text-4xl tracking-[0.14em]">{n.label}</span>
                  <span className="flex items-center gap-3">
                    <span className="font-display text-sm tracking-[0.3em] text-neon/50">0{i + 1}</span>
                    <IconArrowRight className={`h-5 w-5 transition-all ${active ? "text-gold" : "text-neon/40 group-hover:translate-x-1 group-hover:text-neon"}`} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="relative mt-auto space-y-3 pt-8">
            <a
              href={waLink("Hello DUKES GAMING GADGET! I need gaming gear.")}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-wa w-full px-4 py-3.5 text-lg"
            >
              <IconWhatsApp className="h-5 w-5" /> CHAT ON WHATSAPP
            </a>
            <a href={`tel:${PHONE_DISPLAY}`} className="btn btn-neon w-full px-4 py-3.5 text-lg">
              <IconPhone className="h-5 w-5" /> CALL {PHONE_DISPLAY}
            </a>
            <p className="pt-2 text-center text-[11px] font-bold tracking-[0.3em] text-frost/35">
              IKOTUN, LAGOS • GAME BETTER. <span className="text-gold">WIN MORE!</span>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
