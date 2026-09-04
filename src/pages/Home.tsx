import { Link } from "../lib/router";
import { waLink } from "../lib/store";
import { BENEFITS, CATEGORIES, HERO_IMAGES, PRODUCTS, TESTIMONIALS, WHY_DUKES, categoryArt, categoryCount, categoryImage } from "../data/products";
import { CONTENT_ICONS, IconArrowRight, IconBolt, IconCrown, IconWhatsApp } from "../components/Icons";
import ProductCard from "../components/ProductCard";
import { Corners, CountUp, Particles, Reveal, SectionHeading } from "../components/ui";
import { ProductArt } from "../components/ProductArt";

const TICKER = ["GAME BETTER", "WIN MORE", "GEAR UP", "STAY AHEAD", "BE A DUKE", "CODM READY", "LAGOS → NATIONWIDE"];

function Hero() {
  return (
    <section className="scanlines relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-28 lg:pt-36">
      {/* ambient layers */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_38%,black,transparent)]" aria-hidden="true" />
      <div className="absolute -left-48 top-24 h-[560px] w-[560px] rounded-full bg-royal/35 blur-[150px]" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-neon/12 blur-[130px]" aria-hidden="true" />
      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-electric/10 blur-[100px]" aria-hidden="true" />
      <div className="scanline-bar" aria-hidden="true" />
      <span className="light-streak" style={{ top: "22%" }} aria-hidden="true" />
      <span className="light-streak" style={{ top: "64%", animationDelay: "3.4s" }} aria-hidden="true" />
      <Particles count={18} />

      {/* HUD frame */}
      <div className="pointer-events-none absolute inset-x-6 bottom-6 top-24 hidden text-neon/40 md:block lg:inset-x-10" aria-hidden="true">
        <Corners />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-4 lg:grid-cols-12 lg:px-8">
        {/* left — copy */}
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal>
            <p className="inline-flex items-center gap-3 border border-royal/70 bg-navy/50 px-4 py-2 text-[11px] font-bold tracking-[0.4em] text-neon">
              <span className="inline-block h-1.5 w-1.5 animate-pulse bg-gold" />
              PREMIUM GAMING GEAR — IKOTUN, LAGOS
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display mt-6 text-[clamp(3.6rem,14vw,7.6rem)] leading-[0.86] tracking-[0.01em] text-frost">
              GAME BETTER.
              <span className="text-stroke block">
                WIN MORE<span className="text-gold" style={{ WebkitTextStroke: "0px" }}>!</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="font-display mt-5 flex items-center gap-3 text-xl tracking-[0.22em] text-electric sm:text-2xl">
              <IconBolt className="h-5 w-5 text-gold" />
              PREMIUM GADGETS FOR CODM &amp; ALL GAMERS
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-frost/55 sm:text-lg">
              Level up your gaming experience with premium gaming accessories built for
              <span className="text-frost"> speed</span>, <span className="text-frost">precision</span> and{" "}
              <span className="text-frost">performance</span>.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="clip-btn group inline-flex items-center gap-3 bg-gold px-8 py-4 font-display text-xl tracking-[0.16em] text-ink shadow-gold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_44px_rgba(230,196,37,0.45)] active:scale-[0.97]"
              >
                SHOP GAMING GEAR
                <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={waLink("Hello DUKES GAMING GADGET! I want to level up my setup.")}
                target="_blank"
                rel="noopener noreferrer"
                className="clip-btn inline-flex items-center gap-3 border border-neon/60 px-8 py-4 font-display text-xl tracking-[0.16em] text-neon transition-all duration-300 hover:bg-neon/10 hover:shadow-neon active:scale-[0.97]"
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
              ].map((x) => (
                <div key={x.l}>
                  <dt className="sr-only">{x.l}</dt>
                  <dd className="font-display text-3xl text-frost sm:text-4xl">
                    <CountUp to={x.v} suffix={x.s} />
                  </dd>
                  <dd className="mt-1 text-[10px] font-bold tracking-[0.3em] text-electric">{x.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* right — floating gear */}
        <div className="relative hidden h-[620px] lg:col-span-6 lg:block">
          {/* rotating HUD rings */}
          <div className="anim-ring absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neon/25" aria-hidden="true">
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-gold" />
          </div>
          <div className="anim-ring-rev absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-royal/60" aria-hidden="true">
            <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-neon shadow-neon" />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-3xl" aria-hidden="true" />

          {/* main controller */}
          <Link to="/product/wireless-controller" className="anim-float group absolute left-1/2 top-1/2 block w-[340px] -translate-x-1/2 -translate-y-1/2">
            <img src={HERO_IMAGES.controller} alt="Wireless gaming controller" className="blend-glow w-full drop-shadow-[0_0_45px_rgba(0,168,255,0.35)] transition-transform duration-500 group-hover:scale-[1.04]" draggable={false} />
            <span className="clip-tag absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap border border-neon/40 bg-abyss/90 px-3 py-1.5 text-[11px] font-bold tracking-[0.24em] text-neon opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              PRO CONTROLLER — ₦18,500
            </span>
          </Link>

          {/* headset */}
          <Link to="/product/rgb-headset" className="anim-float-sm group absolute left-0 top-6 block w-44 xl:w-52" style={{ animationDelay: "0.8s" }}>
            <img src={HERO_IMAGES.headset} alt="RGB gaming headset" className="blend-glow w-full drop-shadow-[0_0_35px_rgba(46,132,211,0.4)] transition-transform duration-500 group-hover:scale-[1.05]" draggable={false} />
            <span className="absolute -right-2 top-1/2 hidden h-px w-10 bg-neon/50 xl:block" aria-hidden="true" />
          </Link>

          {/* cooler */}
          <Link to="/product/turbo-cooler" className="anim-float-sm group absolute bottom-10 left-6 block w-36 xl:w-40" style={{ animationDelay: "1.6s" }}>
            <img src={HERO_IMAGES.cooler} alt="Turbo phone cooler" className="blend-glow w-full drop-shadow-[0_0_30px_rgba(0,168,255,0.4)] transition-transform duration-500 group-hover:scale-[1.05]" draggable={false} />
          </Link>

          {/* triggers */}
          <Link to="/product/mobile-triggers" className="anim-float-sm group absolute right-0 top-40 block w-40 xl:w-44" style={{ animationDelay: "2.2s" }}>
            <img src={HERO_IMAGES.triggers} alt="Mobile gaming triggers" className="blend-glow w-full drop-shadow-[0_0_30px_rgba(46,132,211,0.4)] transition-transform duration-500 group-hover:scale-[1.05]" draggable={false} />
          </Link>

          {/* HUD tags */}
          <div className="absolute right-2 bottom-24 hidden flex-col items-end gap-2 xl:flex" aria-hidden="true">
            <span className="clip-tag border border-gold/50 bg-abyss/85 px-3 py-1 text-[11px] font-bold tracking-[0.26em] text-gold">TARGET: LEGENDARY</span>
            <span className="clip-tag border border-neon/40 bg-abyss/85 px-3 py-1 text-[11px] font-bold tracking-[0.26em] text-neon">PING 12MS • FPS 90</span>
          </div>
        </div>
      </div>

      {/* ticker */}
      <div className="relative mt-10 border-y border-royal/60 bg-abyss/80 py-3">
        <div className="ticker-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {TICKER.map((t) => (
                <span key={`${dup}-${t}`} className="font-display flex items-center gap-6 pr-6 text-2xl tracking-[0.24em] text-frost/45">
                  {t}
                  <IconCrown className="h-4 w-4 text-gold/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="relative border-b border-royal/40 bg-gradient-to-b from-abyss to-ink py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {BENEFITS.map((b, i) => {
          const Icon = CONTENT_ICONS[b.icon];
          return (
            <Reveal key={b.title} delay={i * 100}>
              <div className="clip-card group relative h-full border border-royal/60 bg-navy/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/60 hover:bg-navy/70 hover:shadow-neon">
                <span className="font-display absolute right-4 top-3 text-3xl text-frost/[0.07] transition-colors group-hover:text-neon/15">0{i + 1}</span>
                <span className="clip-tag flex h-14 w-14 items-center justify-center border border-electric/60 bg-royal/30 text-neon transition-all duration-300 group-hover:border-neon group-hover:text-gold group-hover:shadow-gold">
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

function CategoriesShowcase() {
  const featuredCats = CATEGORIES.slice(0, 8);
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-royal/20 blur-[110px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Select your loadout"
            title={<>CHOOSE YOUR <span className="text-neon">CATEGORY</span></>}
            sub="Seventeen battle-ready categories. Every piece of gear a ranked grinder needs — from sleeves to thrones."
          />
          <Reveal delay={150}>
            <Link to="/categories" className="clip-btn group inline-flex items-center gap-3 border border-gold/60 px-6 py-3 font-display text-lg tracking-[0.18em] text-gold transition-all hover:bg-gold hover:text-ink hover:shadow-gold">
              ALL 17 CATEGORIES <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featuredCats.map((c, i) => {
            const img = categoryImage(c);
            const art = categoryArt(c);
            return (
              <Reveal key={c.id} delay={(i % 4) * 90}>
                <Link
                  to={`/shop?cat=${c.id}`}
                  className="clip-card group relative block h-52 overflow-hidden border border-royal/60 bg-gradient-to-b from-navy/60 to-ink transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/70 hover:shadow-[0_16px_46px_rgba(0,168,255,0.2)] sm:h-60"
                >
                  {img ? (
                    <img src={img} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70" draggable={false} />
                  ) : art ? (
                    <div className="absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-110 p-6">
                      <ProductArt art={art} className="h-full w-full" />
                    </div>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-xl leading-tight tracking-[0.06em] text-frost transition-colors group-hover:text-neon sm:text-2xl">{c.name.toUpperCase()}</p>
                    <p className="mt-1.5 flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-electric">
                      {categoryCount(c.id)} PRODUCTS
                      <span className="inline-flex translate-x-0 items-center gap-1 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        VIEW <IconArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </p>
                  </div>
                  <span className="absolute left-0 top-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);
  return (
    <section className="relative border-y border-royal/40 bg-gradient-to-b from-ink via-abyss to-ink py-16 lg:py-24">
      <div className="bg-grid-fine absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Top-tier loot"
            title={<>FEATURED <span className="text-gold">GEAR</span></>}
            sub="The equipment our squad reaches for first — proven in ranked, vetted by Dukes."
          />
          <Reveal delay={150}>
            <Link to="/shop" className="clip-btn group inline-flex items-center gap-3 border border-neon/60 px-6 py-3 font-display text-lg tracking-[0.18em] text-neon transition-all hover:bg-neon/10 hover:shadow-neon">
              VIEW ALL PRODUCTS <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

function PromoBanner() {
  return (
    <section className="scanlines relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(16,61,128,0.55),transparent_65%)]" aria-hidden="true" />
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-neon/10 blur-[110px]" aria-hidden="true" />
      <Particles count={10} goldEvery={4} />
      <span className="light-streak" style={{ top: "30%" }} aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.42em] text-gold">
              <span className="hazard-stripes inline-block h-2.5 w-14" /> LIMITED-TIME DROP
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display mt-4 text-7xl leading-[0.88] tracking-wide text-frost sm:text-8xl lg:text-[7rem]">
              LEVEL UP<br />
              <span className="text-stroke-neon">YOUR</span> <span className="text-gold">GAME!</span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-frost/60 sm:text-lg">
              Free delivery on orders above <span className="font-bold text-gold">₦50,000</span> — anywhere in Nigeria. Same-day dispatch within Lagos.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <Link
              to="/shop"
              className="clip-btn group mt-8 inline-flex items-center gap-3 bg-gold px-10 py-4 font-display text-2xl tracking-[0.18em] text-ink shadow-gold transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_50px_rgba(230,196,37,0.5)] active:scale-[0.97]"
            >
              SHOP NOW <IconArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative hidden lg:block">
          <div className="anim-ring absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/30" aria-hidden="true" />
          <img
            src={HERO_IMAGES.controller}
            alt="Gaming controller with neon lighting"
            className="anim-float blend-glow relative z-10 mx-auto w-[430px] drop-shadow-[0_0_60px_rgba(0,168,255,0.45)]"
            draggable={false}
          />
          <img
            src={HERO_IMAGES.headset}
            alt="RGB gaming headset"
            className="anim-float-sm blend-glow absolute -bottom-6 left-0 w-48 drop-shadow-[0_0_35px_rgba(46,132,211,0.5)]"
            style={{ animationDelay: "1.2s" }}
            draggable={false}
          />
        </Reveal>
      </div>
    </section>
  );
}

function WhyDukes() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why gamers choose us"
            title={<>WHY CHOOSE <span className="text-neon">DUKES</span>?</>}
            sub="We're gamers first, sellers second. Everything we stock has survived our own ranked sessions before it earns a place on the shelf."
          />
          <Reveal delay={200}>
            <div className="clip-card relative mt-8 border border-royal/60 bg-navy/40 p-6">
              <Corners />
              <p className="font-display text-3xl tracking-[0.1em] text-frost">TRUSTED ACROSS <span className="text-gold">NIGERIA</span></p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-display text-4xl text-neon"><CountUp to={36} /></p>
                  <p className="text-[10px] font-bold tracking-[0.26em] text-frost/45">STATES SERVED</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-neon"><CountUp to={2500} suffix="+" /></p>
                  <p className="text-[10px] font-bold tracking-[0.26em] text-frost/45">ORDERS SHIPPED</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-neon">4.8<span className="text-gold">★</span></p>
                  <p className="text-[10px] font-bold tracking-[0.26em] text-frost/45">AVG RATING</p>
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
                <div className="clip-card group flex gap-5 border border-royal/60 bg-gradient-to-r from-navy/50 to-ink p-5 transition-all duration-300 hover:border-neon/60 hover:bg-navy/60 hover:shadow-neon sm:p-6">
                  <span className="font-display mt-1 text-4xl text-frost/15 transition-colors group-hover:text-gold sm:text-5xl">0{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-neon transition-colors group-hover:text-gold">{Icon && <Icon className="h-6 w-6" />}</span>
                      <h3 className="font-display text-2xl tracking-[0.08em] text-frost">{w.title.toUpperCase()}</h3>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-frost/55 sm:text-base">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative border-y border-royal/40 bg-abyss/60 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Squad voices"
          title={<>GAMERS <span className="text-gold">TALK</span></>}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="clip-card group relative h-full border border-royal/60 bg-navy/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/60 hover:shadow-neon">
                <span className="font-display absolute -top-2 left-4 text-7xl text-neon/15" aria-hidden="true">"</span>
                <blockquote className="relative pt-6 text-[15px] font-medium leading-relaxed text-frost/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-royal/40 pt-4">
                  <span className="clip-tag flex h-10 w-10 items-center justify-center bg-royal/50 font-display text-lg text-neon">
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

function WhatsAppCtaBand() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(16,61,128,0.5),transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <Reveal>
          <span className="clip-tag mx-auto flex h-16 w-16 items-center justify-center border border-wa/50 bg-wa/10 text-wa shadow-[0_0_30px_rgba(37,211,102,0.25)]">
            <IconWhatsApp className="h-8 w-8" />
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-5 text-5xl tracking-[0.04em] text-frost sm:text-6xl">
            ORDER IN <span className="text-gold">SECONDS</span> ON WHATSAPP
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
              target="_blank"
              rel="noopener noreferrer"
              className="clip-btn inline-flex w-full items-center justify-center gap-3 bg-wa px-9 py-4 font-display text-xl tracking-[0.16em] text-ink transition-all hover:brightness-110 hover:shadow-[0_0_44px_rgba(37,211,102,0.45)] active:scale-[0.97] sm:w-auto"
            >
              <IconWhatsApp className="h-6 w-6" /> CHAT WITH US
            </a>
            <Link
              to="/cart"
              className="clip-btn inline-flex w-full items-center justify-center gap-3 border border-neon/60 px-9 py-4 font-display text-xl tracking-[0.16em] text-neon transition-all hover:bg-neon/10 hover:shadow-neon active:scale-[0.97] sm:w-auto"
            >
              ORDER VIA WHATSAPP FROM CART
            </Link>
          </div>
        </Reveal>
        <Reveal delay={340}>
          <p className="font-display mt-6 text-3xl tracking-[0.14em] text-neon">08111235862</p>
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
