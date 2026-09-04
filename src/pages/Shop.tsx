import { useEffect, useMemo, useState } from "react";
import { navigate, useRoute } from "../lib/router";
import { CATEGORIES, PRODUCTS, categoryCount } from "../data/products";
import ProductCard from "../components/ProductCard";
import { IconChevronDown, IconClose, IconFilter, IconSearch } from "../components/Icons";
import { Reveal } from "../components/ui";

const PRICE_RANGES = [
  { id: "", label: "Any price", min: 0, max: Infinity },
  { id: "0-5000", label: "Under ₦5,000", min: 0, max: 5000 },
  { id: "5000-10000", label: "₦5,000 – ₦10,000", min: 5000, max: 10000 },
  { id: "10000-20000", label: "₦10,000 – ₦20,000", min: 10000, max: 20000 },
  { id: "20000-0", label: "₦20,000 & above", min: 20000, max: Infinity },
];

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "newest", label: "Newest" },
];

function Filters({
  q, cat, price, onQ, onCat, onPrice, onClear, activeCount,
}: {
  q: string; cat: string; price: string;
  onQ: (v: string) => void; onCat: (v: string) => void; onPrice: (v: string) => void;
  onClear: () => void; activeCount: number;
}) {
  return (
    <div className="space-y-7">
      <div>
        <label className="mb-2 block text-[11px] font-bold tracking-[0.3em] text-electric">SEARCH</label>
        <div className="relative">
          <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neon" />
          <input value={q} onChange={(e) => onQ(e.target.value)} placeholder="Search gear…" className="field pl-10" aria-label="Search products" />
          {q && (
            <button type="button" onClick={() => onQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-frost/40 hover:text-neon" aria-label="Clear search">
              <IconClose className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div>
        <p className="mb-2 text-[11px] font-bold tracking-[0.3em] text-electric">CATEGORIES</p>
        <ul className="max-h-72 space-y-1 overflow-y-auto pr-1">
          <li>
            <button
              type="button"
              onClick={() => onCat("")}
              className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold tracking-wide transition ${
                cat === "" ? "clip-tag bg-royal/50 text-gold" : "text-frost/60 hover:bg-navy/60 hover:text-neon"
              }`}
            >
              All Gear <span className="text-xs text-frost/35">{PRODUCTS.length}</span>
            </button>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => onCat(c.id === cat ? "" : c.id)}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold tracking-wide transition ${
                  cat === c.id ? "clip-tag bg-royal/50 text-gold" : "text-frost/60 hover:bg-navy/60 hover:text-neon"
                }`}
              >
                {c.name} <span className="text-xs text-frost/35">{categoryCount(c.id)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-[11px] font-bold tracking-[0.3em] text-electric">PRICE RANGE</p>
        <div className="space-y-1.5">
          {PRICE_RANGES.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => onPrice(r.id === price ? "" : r.id)}
              className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm font-semibold tracking-wide transition ${
                price === r.id ? "clip-tag bg-royal/50 text-gold" : "text-frost/60 hover:bg-navy/60 hover:text-neon"
              }`}
            >
              <span className={`inline-block h-2.5 w-2.5 border transition ${price === r.id ? "border-gold bg-gold" : "border-electric/70"}`} />
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="clip-btn flex w-full items-center justify-center gap-2 border border-gold/60 py-2.5 font-display text-base tracking-[0.2em] text-gold transition hover:bg-gold hover:text-ink"
        >
          <IconClose className="h-4 w-4" /> CLEAR ALL FILTERS ({activeCount})
        </button>
      )}
    </div>
  );
}

export default function Shop() {
  const { params } = useRoute();
  const q = params.get("q") ?? "";
  const cat = params.get("cat") ?? "";
  const price = params.get("price") ?? "";
  const sort = params.get("sort") ?? "featured";
  const [filtersOpen, setFiltersOpen] = useState(false);

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    navigate(`/shop${qs ? `?${qs}` : ""}`);
  };

  const clearAll = () => navigate("/shop");

  const results = useMemo(() => {
    let list = [...PRODUCTS];
    if (q.trim()) {
      const needle = q.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(needle) ||
          p.short.toLowerCase().includes(needle) ||
          p.categories.some((c) => c.replace(/-/g, " ").includes(needle))
      );
    }
    if (cat) list = list.filter((p) => p.categories.includes(cat));
    const range = PRICE_RANGES.find((r) => r.id === price);
    if (range) list = list.filter((p) => p.price >= range.min && p.price < range.max);
    switch (sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "newest": list.sort((a, b) => b.addedAt - a.addedAt); break;
      default: list.sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false) || b.reviews - a.reviews);
    }
    return list;
  }, [q, cat, price, sort]);

  const activeCount = (q ? 1 : 0) + (cat ? 1 : 0) + (price ? 1 : 0);
  const activeCat = CATEGORIES.find((c) => c.id === cat);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [q, cat, price, sort]);

  return (
    <div className="relative min-h-screen bg-ink pt-24 lg:pt-32">
      <div className="bg-grid absolute inset-x-0 top-0 h-72 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-royal/25 blur-[110px]" aria-hidden="true" />

      {/* header */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.4em] text-neon">HOME / <span className="text-gold">SHOP</span></p>
          <h1 className="font-display mt-2 text-6xl leading-[0.9] text-frost sm:text-7xl">
            THE <span className="text-neon">ARMORY</span>{activeCat && <> — <span className="text-gold">{activeCat.name.toUpperCase()}</span></>}
          </h1>
          <p className="mt-3 max-w-xl text-base font-medium text-frost/50">
            {results.length} {results.length === 1 ? "item" : "items"} battle-ready and in stock. {activeCat ? activeCat.blurb : "Every item tested by the Duke squad before listing."}
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl px-4 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              className="clip-btn mb-4 flex w-full items-center justify-between border border-royal/70 bg-navy/50 px-4 py-3 font-display text-lg tracking-[0.18em] text-frost transition hover:border-neon lg:hidden"
            >
              <span className="flex items-center gap-2"><IconFilter className="h-5 w-5 text-neon" /> FILTERS {activeCount > 0 && <span className="text-gold">({activeCount})</span>}</span>
              <IconChevronDown className={`h-5 w-5 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`clip-card border border-royal/60 bg-navy/30 p-5 transition-all duration-300 lg:block ${filtersOpen ? "block" : "hidden"}`}>
              <Filters
                q={q} cat={cat} price={price}
                onQ={(v) => setParam("q", v)}
                onCat={(v) => setParam("cat", v)}
                onPrice={(v) => setParam("price", v)}
                onClear={clearAll}
                activeCount={activeCount}
              />
            </div>
          </aside>

          {/* results */}
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-royal/40 pb-4">
              <p className="text-sm font-bold tracking-[0.2em] text-frost/50">
                SHOWING <span className="text-neon">{results.length}</span> / {PRODUCTS.length}
              </p>
              <label className="flex items-center gap-3">
                <span className="text-[11px] font-bold tracking-[0.3em] text-electric">SORT</span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setParam("sort", e.target.value === "featured" ? "" : e.target.value)}
                    className="field clip-tag w-52 appearance-none pr-9"
                    aria-label="Sort products"
                  >
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id}>{s.label}</option>
                    ))}
                  </select>
                  <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neon" />
                </div>
              </label>
            </div>

            {results.length === 0 ? (
              <div className="clip-card relative flex flex-col items-center border border-royal/60 bg-navy/30 px-6 py-20 text-center">
                <IconSearch className="h-12 w-12 text-electric/50" />
                <p className="font-display mt-4 text-3xl tracking-[0.1em] text-frost">NO LOOT FOUND</p>
                <p className="mt-2 max-w-sm text-sm font-medium text-frost/50">
                  Nothing matches your current loadout filters. Clear them and try a different search.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="clip-btn mt-6 bg-gold px-7 py-3 font-display text-lg tracking-[0.16em] text-ink transition hover:brightness-110"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((p, i) => (
                  <Reveal key={p.id} delay={(i % 3) * 80}>
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
