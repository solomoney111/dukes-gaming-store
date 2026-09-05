import { Link } from "../lib/router";
import { CATEGORIES, SCENE_IMAGES, categoryArt, categoryCount, categoryImage } from "../data/products";
import { CATEGORY_ICONS, IconArrowRight } from "../components/Icons";
import { ProductArt } from "../components/ProductArt";
import { PageHeader, Reveal } from "../components/ui";

export default function Categories() {
  return (
    <div className="relative min-h-screen bg-ink">
      <PageHeader
        crumb="CATEGORIES"
        image={SCENE_IMAGES.stage}
        title={<>FULL <span className="glow-neon text-neon">ARSENAL</span></>}
        sub="Seventeen categories of battle-tested gear. Whether you're building a mobile claw setup or a full PC battlestation — the armory has you covered."
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
