import { Link } from "../lib/router";
import { CATEGORIES, categoryArt, categoryCount, categoryImage } from "../data/products";
import { CATEGORY_ICONS, IconArrowRight } from "../components/Icons";
import { ProductArt } from "../components/ProductArt";
import { Reveal } from "../components/ui";

export default function Categories() {
  return (
    <div className="relative min-h-screen bg-ink pt-24 lg:pt-32">
      <div className="bg-grid absolute inset-x-0 top-0 h-80 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-royal/25 blur-[110px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.4em] text-neon">HOME / <span className="text-gold">CATEGORIES</span></p>
          <h1 className="font-display mt-2 text-6xl leading-[0.9] text-frost sm:text-8xl">
            FULL <span className="text-neon">ARSENAL</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base font-medium text-frost/50 sm:text-lg">
            Seventeen categories of battle-tested gear. Whether you're building a mobile claw setup or a full PC battlestation — the armory has you covered.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => {
            const img = categoryImage(c);
            const art = categoryArt(c);
            const Icon = CATEGORY_ICONS[c.icon];
            const count = categoryCount(c.id);
            return (
              <Reveal key={c.id} delay={(i % 3) * 90}>
                <Link
                  to={`/shop?cat=${c.id}`}
                  className="clip-card group relative block h-64 overflow-hidden border border-royal/60 bg-gradient-to-b from-navy/60 to-ink transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/70 hover:shadow-[0_18px_50px_rgba(0,168,255,0.2)]"
                >
                  {img ? (
                    <img
                      src={img}
                      alt={c.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
                      draggable={false}
                    />
                  ) : art ? (
                    <div className="absolute inset-0 p-8 opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90">
                      <ProductArt art={art} className="h-full w-full" />
                    </div>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden="true" />

                  <span className="clip-tag absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-neon/40 bg-abyss/80 text-neon transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:shadow-gold">
                    {Icon && <Icon className="h-6 w-6" />}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-electric">{String(i + 1).padStart(2, "0")} / 17 • {count} {count === 1 ? "PRODUCT" : "PRODUCTS"}</p>
                    <h2 className="font-display mt-1.5 text-3xl leading-tight tracking-[0.04em] text-frost transition-colors group-hover:text-neon">
                      {c.name.toUpperCase()}
                    </h2>
                    <p className="mt-1.5 line-clamp-2 max-w-xs text-sm font-medium text-frost/50">{c.blurb}</p>
                    <span className="clip-btn mt-3 inline-flex items-center gap-2 border border-gold/60 px-4 py-2 font-display text-sm tracking-[0.22em] text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-ink">
                      VIEW PRODUCTS <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  <span className="absolute left-0 top-0 h-1 w-0 bg-neon transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
