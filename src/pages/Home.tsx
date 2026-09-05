import { useState } from "react";
import { Link } from "../lib/router";
import { formatNaira, waLink } from "../lib/store";
import {
  BENEFITS, CATEGORIES, HERO_IMAGES, PRODUCTS, SCENE_IMAGES, TESTIMONIALS, WHY_DUKES,
  categoryArt, categoryCount, categoryImage, getProduct,
} from "../data/products";
import {
  CATEGORY_ICONS, CONTENT_ICONS, IconArrowRight, IconBolt, IconChevronDown, IconCrown, IconWhatsApp,
} from "../components/Icons";
import ProductCard from "../components/ProductCard";
import { Corners, CountUp, Countdown, Particles, Reveal, SectionHeading, Stars } from "../components/ui";
import { ProductArt } from "../components/ProductArt";

const TICKER = ["GAME BETTER", "WIN MORE", "GEAR UP", "STAY AHEAD", "BE A DUKE", "CODM READY", "LAGOS → NATIONWIDE"];

/* Image that quietly unmounts if the CDN fails — the composition never breaks */
function Img({ src, alt = "", className = "", style }: { src: string; alt?: string; className?: string; style?: React.CSSProperties }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return <img src={src} alt={alt} className={className} style={style} onError={() => setOk(false)} draggable={false} />;
}

function GearChip({
  to, src, alt, label, className, style,
}: {
  to: string; src: string; alt: string; label: string; className?: string; style?: React.CSSProperties;
}) {
  const p = getProduct(to.split("/").pop() ?? "");
  return (
    <Link to={to} className={`group relative z-20 block ${className ?? ""}`} style={style}>
      <span className="absolute left-1/2 top-1/2 -z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/15 blur-2xl transition-all duration-500 group-hover:bg-neon/25" aria-hidden="true" />
      <Img
        src={src}
        alt={alt}
        className="blend-glow w-full drop-shadow-[0_0_38px_rgba(0,168,255,0.4)] transition-transform duration-500 group-hover:scale-[1.07]"
      />
      <span className="clip-tag absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap border border-gold/50 bg-abyss/92 px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] text-gold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {label}{p ? ` — ${formatNaira(p.price)}` : ""}
      </span>
    </Link>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 lg:pt-36">
      {/* layered atmosphere */}
      <div className="absolute inset-0" aria-hidden="true">
        <Img
          src={SCENE_IMAGES.stage}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55 [mask-image:radial-gradient(ellipse_85%_90%_at_68%_40%,black,transparent_80%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
        <div className="absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-royal/35 blur-[150px]" />
        <div className="absolute -right-24 bottom-8 h-[440px] w-[440px] rounded-full bg-neon/12 blur-[130px]" />
      </div>
      <div className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_38%_38%,black,transparent)]" aria-hidden="true" />
      <span className="light-streak" style={{ top: "20%" }} aria-hidden="true" />
      <span className="light-streak" style={{ top: "66%", animationDelay: "3.4s" }} aria-hidden="true" />
      <Particles count={18} />

      {/* HUD frame */}
      <div className="pointer-events-none absolute inset-x-6 bottom-6 top-24 hidden text-neon/40 md:block lg:inset-x-10" aria-hidden="true">
        <Corners />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-4 lg:grid-cols-12 lg:px-8">
        {/* left — copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="inline-flex items-center gap-3 border border-royal/70 bg-navy/50 px-4 py-2 text-[11px] font-bold tracking-[0.4em] text-neon backdrop-blur-sm">
              <span className="ping-dot inline-block h-1.5 w-1.5 rounded-full bg-gold text-gold" />
              PREMIUM GAMING GEAR — IKOTUN, LAGOS
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display mt-6 text-[clamp(3.8rem,13vw,8rem)] leading-[0.85] tracking-[0.01em] text-frost">
              GAME BETTER.
              <span className="block">
                <span className="text-stroke-neon anim-neon">WIN MORE</span>
                <span className="glow-gold text-gold">!</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="font-display mt-5 flex items-center gap-3 text-xl tracking-[0.2em] text-electric sm:text-2xl">
              <IconBolt className="h-5 w-5 text-gold drop-shadow-[0_0_10px_rgba(230,196,37,0.7)]" />
              PREMIUM GADGETS FOR CODM &amp; ALL GAMERS
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-frost/55 sm:text-lg">
              Level up your gaming experience with premium accessories built for
              <span className="font-bold text-frost"> speed</span>, <span className="font-bold text-frost">precision</span> and{" "}
              <span className="font-bold text-frost">performance</span> — tested in ranked, shipped nationwide.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/shop" className="btn btn-gold group px-9 py-4 text-xl sm:text-2xl">
                SHOP GAMING GEAR
                <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={waLink("Hello DUKES GAMING GADGET! I want to level up my setup.")}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-neon px-8 py-4 text-xl sm:text-2xl"
              >
                <IconWhatsApp className="h-5 w-5" />
                CHAT ON WHATSAPP
              </a>
            </div>
          </Reveal>
          <Reveal delay={460}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-royal/50 pt-6">
              {[
                { v: 17, s: "+", l: "CATEGORIES" },
                { v: 2500, s: "+", l: "GAMERS GEARED" },
                { v: 24, s: "/7", l: "SUPPORT" },
              ].map((x, i) => (
                <div key={x.l} className={i > 0 ? "border-l border-royal/40 pl-4" : ""}>
                  <dt className="sr-only">{x.l}</dt>
                  <dd className="font-display text-3xl text-frost sm:text-4xl">
                    <CountUp to={x.v} suffix={x.s} />
                  </dd>
                  <dd className="mt-1 text-[10px] font-bold tracking-[0.3em] text-electric">{x.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* mobile stage visual */}
          <Reveal delay={200} className="mt-10 lg:hidden">
            <div className="clip-frame relative h-72 overflow-hidden border border-neon/30 bg-abyss/50 sm:h-80">
              <Img src={SCENE_IMAGES.stage} alt="DUKES gaming gear stage" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/25" aria-hidden="true" />
              <div className="scanline-bar" aria-hidden="true" />
              <Corners tone="gold" className="m-2" />
              <span className="clip-tag absolute right-3 top-3 flex items-center gap-2 border border-gold/50 bg-abyss/90 px-3 py-1 text-[10px] font-bold tracking-[0.26em] text-gold">
                <span className="ping-dot inline-block h-1.5 w-1.5 rounded-full bg-gold text-gold" /> LIVE • IN STOCK
              </span>
              <Link
                to="/product/wireless-controller"
                className="clip-tag absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 border border-gold/50 bg-abyss/92 px-4 py-2 text-[11px] font-bold tracking-[0.2em] text-gold transition hover:bg-gold hover:text-ink"
              >
                PRO CONTROLLER — ₦18,500 <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* right — the stage */}
        <div className="relative hidden h-[660px] lg:col-span-6 lg:block">
          {/* clipped stage frame */}
          <div className="clip-frame absolute inset-y-4 left-6 right-0 overflow-hidden border border-neon/25 bg-abyss/40">
            <Img src={SCENE_IMAGES.stage} alt="Neon-lit wireless controller, headset and cooler" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/45 to-transparent" aria-hidden="true" />
            <div className="bg-grid-fine absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_50%_45%,black,transparent_75%)]" aria-hidden="true" />
            <div className="scanline-bar" aria-hidden="true" />
            <Corners tone="gold" className="m-3" />

            {/* readouts inside frame */}
            <p className="font-display absolute left-5 top-4 text-[11px] tracking-[0.34em] text-neon/70">DUKES // STAGE 01</p>
            <span className="clip-tag absolute right-5 top-4 flex items-center gap-2 border border-gold/50 bg-abyss/90 px-3 py-1 text-[10px] font-bold tracking-[0.26em] text-gold">
              <span className="ping-dot inline-block h-1.5 w-1.5 rounded-full bg-gold text-gold" /> LIVE • IN STOCK
            </span>
            <div className="absolute bottom-5 left-5 flex flex-col gap-2" aria-hidden="true">
              <span className="clip-tag w-max border border-neon/40 bg-abyss/90 px-3 py-1 text-[10px] font-bold tracking-[0.26em] text-neon">PING 12MS • FPS 90</span>
              <span className="clip-tag w-max border border-gold/50 bg-abyss/90 px-3 py-1 text-[10px] font-bold tracking-[0.26em] text-gold">TARGET: LEGENDARY</span>
            </div>
          </div>

          {/* rotating accent ring */}
          <div className="anim-ring absolute -right-4 -top-2 h-28 w-28 rounded-full border border-dashed border-neon/30" aria-hidden="true">
            <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold shadow-gold" />
          </div>

          {/* floating gear orbiting the stage */}
          <div className="anim-float-sm absolute -left-2 top-14 w-40 xl:w-48" style={{ animationDelay: "0.4s" }}>
            <GearChip to="/product/rgb-headset" src={HERO_IMAGES.headset} alt="RGB gaming headset" label="RGB HEADSET" />
          </div>
          <div className="anim-float-sm absolute -left-4 bottom-16 w-36 xl:w-44" style={{ animationDelay: "1.6s" }}>
            <GearChip to="/product/turbo-cooler" src={HERO_IMAGES.cooler} alt="Turbo phone cooler" label="TURBO COOLER" />
          </div>
          <div className="anim-float-sm absolute -right-2 bottom-40 w-40 xl:w-48" style={{ animationDelay: "2.4s" }}>
            <GearChip to="/product/mobile-triggers" src={HERO_IMAGES.triggers} alt="Mobile gaming triggers" label="CLAW TRIGGERS" />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-16 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex" aria-hidden="true">
        <span className="text-[9px] font-bold tracking-[0.44em] text-frost/40">SCROLL</span>
        <IconChevronDown className="anim-scroll-cue h-4 w-4 text-neon" />
      </div>

      {/* ticker */}
      <div className="relative mt-12 border-y border-royal/60 bg-abyss/85 py-3 backdrop-blur-sm">
        <span className="gold-hairline absolute inset-x-0 top-0" aria-hidden="true" />
        <div className="ticker-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {TICKER.map((t) => (
                <span key={`${dup}-${t}`} className="font-display flex items-center gap-6 pr-6 text-2xl tracking-[0.24em] text-frost/45">
                  {t}
                  <IconCrown className="h-4 w-4 text-gold/70 drop-shadow-[0_0_8px_rgba(230,196,37,0.5)]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= BENEFITS ================= */
function Benefits() {
  return (
    <section className="relative border-b border-royal/40 bg-gradient-to-b from-abyss to-ink py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {BENEFITS.map((b, i) => {
          const Icon = CONTENT_ICONS[b.icon];
          return (
            <Reveal key={b.title} delay={i * 100}>
              <div className="clip-card card-shell card-shell-gold sheen group relative h-full p-6 hover:-translate-y-1.5">
                <span className="font-display absolute right-4 top-3 text-4xl text-frost/[0.06] transition-colors duration-300 group-hover:text-gold/20">0{i + 1}</span>
                <span className="clip-tag flex h-14 w-14 items-center justify-center border border-electric/60 bg-royal/30 text-neon transition-all duration-300 group-hover:border-gold/70 group-hover:text-gold group-hover:shadow-gold">
                  {Icon && <Icon className="h-7 w-7" />}
                </span>
                <h3 className="font-display mt-4 text-2xl tracking-[0.1em] text-frost">{b.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-frost/50">{b.text}</p>
                <span className="mt-4 block h-0.5 w-8 bg-electric/50 transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ================= CATEGORIES ================= */
function CategoriesShowcase() {
  const featuredCats = CATEGORIES.slice(0, 8);
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-royal/20 blur-[120px]" aria-hidden="true" />
      <p aria-hidden="true" className="text-ghost font-display pointer-events-none absolute -right-6 top-6 select-none text-[11rem] leading-none lg:text-[15rem]">ARSENAL</p>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="01"
            eyebrow="Select your loadout"
            title={<>CHOOSE YOUR <span className="glow-neon text-neon">CATEGORY</span></>}
            sub="Seventeen battle-ready categories. Every piece of gear a ranked grinder needs — from sleeves to thrones."
          />
          <Reveal delay={150}>
            <Link
              to="/categories"
              className="clip-btn group inline-flex items-center gap-3 border border-frost/25 bg-navy/20 px-6 py-3 font-display text-lg tracking-[0.16em] text-frost/85 transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-gold"
            >
              ALL 17 CATEGORIES <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featuredCats.map((c, i) => {
            const img = categoryImage(c);
            const art = categoryArt(c);
            const Icon = CATEGORY_ICONS[c.icon];
            return (
              <Reveal key={c.id} delay={(i % 4) * 90}>
                <Link
                  to={`/shop?cat=${c.id}`}
                  className="clip-card sheen group relative block h-52 overflow-hidden border border-royal/60 bg-gradient-to-b from-navy/60 to-ink transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/70 hover:shadow-[0_18px_50px_rgba(0,168,255,0.22)] sm:h-60"
                >
                  {img ? (
                    <Img src={img} alt={c.name} className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-75" />
                  ) : art ? (
                    <div className="absolute inset-0 p-6 opacity-80 transition-transform duration-700 group-hover:scale-110">
                      <ProductArt art={art} className="h-full w-full" />
                    </div>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" aria-hidden="true" />

                  {Icon && (
                    <span className="clip-tag absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-neon/40 bg-abyss/85 text-neon transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:shadow-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-xl leading-tight tracking-[0.06em] text-frost transition-colors group-hover:text-neon sm:text-2xl">{c.name.toUpperCase()}</p>
                    <p className="mt-1.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-electric">
                      {categoryCount(c.id)} PRODUCTS
                      <span className="inline-flex translate-x-0 items-center gap-1 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        VIEW <IconArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </p>
                  </div>
                  <span className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-gold to-neon transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURED ================= */
function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
  return (
    <section className="relative border-y border-royal/40 bg-gradient-to-b from-ink via-abyss to-ink py-20 lg:py-28">
      <div className="bg-grid-fine absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" aria-hidden="true" />
      <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-royal/25 blur-[130px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="Top-tier loot"
            title={<>FEATURED <span className="glow-gold text-gold">GEAR</span></>}
            sub="The equipment our squad reaches for first — proven in ranked, vetted by Dukes."
          />
          <Reveal delay={150}>
            <Link to="/shop" className="btn btn-neon group px-6 py-3 text-lg">
              VIEW ALL PRODUCTS <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PROMO / DROP ================= */
function PromoBanner() {
  return (
    <section className="scanlines relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Img src={SCENE_IMAGES.promo} alt="" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_50%,rgba(16,61,128,0.5),transparent_62%)]" />
      </div>
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-neon/10 blur-[110px]" aria-hidden="true" />
      <Particles count={10} goldEvery={4} />
      <span className="light-streak" style={{ top: "28%" }} aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:py-28">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.42em] text-gold">
              <span className="hazard-stripes inline-block h-2.5 w-14" /> LIMITED-TIME DROP
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display mt-4 text-[clamp(3.4rem,9vw,7.5rem)] leading-[0.86] text-frost">
              LEVEL UP
              <span className="block">
                <span className="text-stroke-neon">YOUR</span> <span className="glow-gold text-gold">GAME!</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-frost/60 sm:text-lg">
              Free delivery on orders above <span className="font-bold text-gold">₦50,000</span> — anywhere in Nigeria.
              Same-day dispatch within Lagos. The drop ends in:
            </p>
          </Reveal>
          <Reveal delay={280}>
            <Countdown hours={72} className="mt-6" />
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/shop" className="btn btn-gold group px-10 py-4 text-2xl">
                SHOP THE DROP <IconArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1.5" />
              </Link>
              <Link to="/categories" className="btn btn-ghost px-7 py-4 text-xl">
                BROWSE ARSENAL
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative hidden lg:block">
          <div className="anim-ring absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/30" aria-hidden="true">
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-neon shadow-neon" />
          </div>
          <div className="anim-ring-rev absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/20" aria-hidden="true" />
          <div className="anim-float relative z-10 mx-auto w-[430px]">
            <Img
              src={HERO_IMAGES.controller}
              alt="Gaming controller with neon lighting"
              className="blend-glow w-full drop-shadow-[0_0_60px_rgba(0,168,255,0.45)]"
            />
          </div>
          <div className="anim-float-sm absolute -bottom-4 left-2 w-44" style={{ animationDelay: "1.2s" }}>
            <Img
              src={HERO_IMAGES.headset}
              alt="RGB gaming headset"
              className="blend-glow w-full drop-shadow-[0_0_35px_rgba(46,132,211,0.5)]"
            />
          </div>
          <span className="clip-tag absolute right-0 top-6 border border-gold/50 bg-abyss/90 px-3 py-1.5 text-[11px] font-bold tracking-[0.24em] text-gold">
            UP TO -25% OFF
          </span>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= WHY DUKES ================= */
function WhyDukes() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            index="03"
            eyebrow="Why gamers choose us"
            title={<>WHY CHOOSE <span className="glow-neon text-neon">DUKES</span>?</>}
            sub="We're gamers first, sellers second. Everything we stock has survived our own ranked sessions before it earns a place on the shelf."
          />
          <Reveal delay={200}>
            <div className="clip-card card-shell relative mt-8 p-6">
              <Corners tone="gold" />
              <p className="font-display text-3xl tracking-[0.1em] text-frost">TRUSTED ACROSS <span className="glow-gold text-gold">NIGERIA</span></p>
              <div className="mt-5 grid grid-cols-3 gap-4">
                <div className="border-l-2 border-royal/70 pl-3">
                  <p className="font-display text-4xl text-neon"><CountUp to={36} /></p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.26em] text-frost/45">STATES SERVED</p>
                </div>
                <div className="border-l-2 border-royal/70 pl-3">
                  <p className="font-display text-4xl text-neon"><CountUp to={2500} suffix="+" /></p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.26em] text-frost/45">ORDERS SHIPPED</p>
                </div>
                <div className="border-l-2 border-gold/70 pl-3">
                  <p className="font-display text-4xl text-neon">4.8<span className="text-gold">★</span></p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.26em] text-frost/45">AVG RATING</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <ol className="space-y-4">
          {WHY_DUKES.map((w, i) => {
            const Icon = CONTENT_ICONS[w.icon];
            return (
              <Reveal key={w.title} delay={i * 80} as="li">
                <div className="clip-card card-shell sheen group flex gap-5 p-5 hover:-translate-y-1 sm:p-6">
                  <span className="font-display mt-1 text-4xl text-frost/15 transition-colors duration-300 group-hover:text-gold sm:text-5xl">0{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-neon transition-colors duration-300 group-hover:text-gold">{Icon && <Icon className="h-6 w-6" />}</span>
                      <h3 className="font-display text-2xl tracking-[0.08em] text-frost">{w.title.toUpperCase()}</h3>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-frost/55 sm:text-base">{w.text}</p>
                  </div>
                  <span className="hidden h-full w-0.5 self-stretch bg-gradient-to-b from-transparent via-royal to-transparent transition-colors duration-300 group-hover:via-neon sm:block" aria-hidden="true" />
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  return (
    <section className="relative border-y border-royal/40 bg-abyss/60 py-20 lg:py-24">
      <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          align="center"
          index="04"
          eyebrow="Squad voices"
          title={<>GAMERS <span className="glow-gold text-gold">TALK</span></>}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="clip-card card-shell sheen group relative h-full p-6 hover:-translate-y-1.5">
                <span className="font-display absolute -top-3 left-4 text-8xl text-neon/15 transition-colors duration-300 group-hover:text-gold/25" aria-hidden="true">"</span>
                <Stars rating={5} className="h-4 w-4" />
                <blockquote className="relative mt-4 text-[15px] font-medium leading-relaxed text-frost/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-royal/40 pt-4">
                  <span className="clip-tag flex h-11 w-11 items-center justify-center border border-neon/40 bg-royal/40 font-display text-xl text-neon transition-colors duration-300 group-hover:border-gold/60 group-hover:text-gold">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold tracking-wide text-frost">{t.name}</span>
                    <span className="block text-[11px] font-bold tracking-[0.2em] text-gold">{t.game.toUpperCase()}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= WHATSAPP CTA ================= */
function WhatsAppCtaBand() {
  return (
    <section className="scanlines relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0" aria-hidden="true">
        <Img src={SCENE_IMAGES.lounge} alt="" className="h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(16,61,128,0.55),transparent_70%)]" />
      </div>
      <span className="gold-hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <Particles count={12} goldEvery={3} />

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <Reveal>
          <span className="clip-tag mx-auto flex h-16 w-16 items-center justify-center border border-wa/50 bg-wa/10 text-wa shadow-[0_0_30px_rgba(37,211,102,0.25)]">
            <IconWhatsApp className="h-8 w-8" />
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-5 text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.92] tracking-[0.03em] text-frost">
            ORDER IN <span className="glow-gold text-gold">SECONDS</span> ON WHATSAPP
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-3 max-w-xl text-base font-medium text-frost/55 sm:text-lg">
            No stress, no wahala. Send us your order on WhatsApp and we handle the rest — from Ikotun to your door, anywhere in Nigeria.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink("Hello DUKES GAMING GADGET! I want to order gaming gear.")}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-wa w-full px-9 py-4 text-xl sm:w-auto"
            >
              <IconWhatsApp className="h-6 w-6" /> CHAT WITH US
            </a>
            <Link to="/cart" className="btn btn-neon w-full px-9 py-4 text-xl sm:w-auto">
              ORDER FROM CART
            </Link>
          </div>
        </Reveal>
        <Reveal delay={340}>
          <p className="font-display glow-neon mt-7 text-4xl tracking-[0.14em] text-neon sm:text-5xl">08111235862</p>
          <p className="mt-1 text-[10px] font-bold tracking-[0.4em] text-frost/40">GAME BETTER. WIN MORE. BE A DUKE.</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <CategoriesShowcase />
      <FeaturedProducts />
      <PromoBanner />
      <WhyDukes />
      <Testimonials />
      <WhatsAppCtaBand />
    </>
  );
}
