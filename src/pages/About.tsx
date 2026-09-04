import { Link } from "../lib/router";
import { waLink } from "../lib/store";
import { IconArrowRight, IconCrown, IconPin, IconTarget, IconWhatsApp } from "../components/Icons";
import { Corners, CountUp, Particles, Reveal, SectionHeading } from "../components/ui";

const VALUES = [
  { icon: IconTarget, title: "PRECISION FIRST", text: "If it doesn't sharpen your aim, speed or comfort — we don't stock it. Every SKU earns its slot through real ranked testing." },
  { icon: IconCrown, title: "BE A DUKE", text: "Our customers aren't just buyers, they're the squad. Duke members get drop alerts, restock pings and wholesale tiers." },
  { icon: IconPin, title: "LAGOS ROOTED", text: "Proudly based in Ikotun, Lagos — shipping to all 36 states. Local pickup available same-day for Lagos gamers." },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-ink pt-24 lg:pt-32">
      <div className="bg-grid absolute inset-x-0 top-0 h-96 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-royal/25 blur-[120px]" aria-hidden="true" />

      {/* intro: sticky two-column */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="text-[11px] font-bold tracking-[0.4em] text-neon">HOME / <span className="text-gold">ABOUT US</span></p>
              <h1 className="font-display mt-3 text-6xl leading-[0.88] text-frost sm:text-7xl xl:text-8xl">
                BUILT BY<br />
                <span className="text-stroke">GAMERS,</span><br />
                FOR <span className="text-gold">GAMERS.</span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-display mt-5 text-2xl tracking-[0.18em] text-electric">GAME BETTER. WIN MORE!</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="clip-card relative mt-8 border border-royal/60 bg-navy/40 p-6">
                <Corners />
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-display text-5xl text-neon"><CountUp to={2019} /></p>
                    <p className="mt-1 text-[10px] font-bold tracking-[0.28em] text-frost/45">FOUNDED IN LAGOS</p>
                  </div>
                  <div>
                    <p className="font-display text-5xl text-neon"><CountUp to={2500} suffix="+" /></p>
                    <p className="mt-1 text-[10px] font-bold tracking-[0.28em] text-frost/45">ORDERS DELIVERED</p>
                  </div>
                  <div>
                    <p className="font-display text-5xl text-gold"><CountUp to={17} /></p>
                    <p className="mt-1 text-[10px] font-bold tracking-[0.28em] text-frost/45">GEAR CATEGORIES</p>
                  </div>
                  <div>
                    <p className="font-display text-5xl text-gold"><CountUp to={98} suffix="%" /></p>
                    <p className="mt-1 text-[10px] font-bold tracking-[0.28em] text-frost/45">REPEAT GAMERS</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal>
              <p className="text-lg font-medium leading-relaxed text-frost/70">
                <span className="font-display text-3xl tracking-wide text-gold">DUKES GAMING GADGET</span> started the way most good things in Lagos do —
                with a group of friends arguing about whose setup was costing them the match. Sweaty thumbs, dead batteries,
                throttling phones and two-thumb controls were ending ranked runs long before the enemy squad did.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-base font-medium leading-relaxed text-frost/55">
                So we did what any squad leader would: we fixed it. We hunted down the exact finger sleeves, triggers and coolers
                that pro mobile players swear by, tested every single piece in our own ranked grind, and started supplying
                gamers across Nigeria — first from a backpack, now from our base in <span className="text-frost">Ikotun, Lagos</span>.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-base font-medium leading-relaxed text-frost/55">
                Today we supply CODM grinders, FIFA sweats, console players and full PC battlestations. Retail or wholesale —
                one sleeve or a hundred. If it makes you play better, it's in the armory. If it doesn't, it never makes the shelf.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <blockquote className="clip-card relative border-l-4 border-gold bg-navy/40 p-6">
                <p className="font-display text-2xl leading-snug tracking-[0.06em] text-frost">
                  "YOUR RANK ISN'T THE PROBLEM. YOUR <span className="text-neon">GEAR</span> IS. LET'S FIX IT."
                </p>
                <footer className="mt-3 text-[11px] font-bold tracking-[0.3em] text-gold">— THE DUKE SQUAD, FOUNDERS</footer>
              </blockquote>
            </Reveal>

            {/* values */}
            <div className="space-y-4 pt-4">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="clip-card group flex gap-5 border border-royal/60 bg-gradient-to-r from-navy/50 to-ink p-5 transition-all duration-300 hover:border-neon/60 hover:shadow-neon">
                    <span className="clip-tag flex h-12 w-12 shrink-0 items-center justify-center border border-electric/60 bg-royal/30 text-neon transition-colors group-hover:text-gold">
                      <v.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl tracking-[0.1em] text-frost">{v.title}</h3>
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-frost/55">{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CODM band */}
      <div className="relative mt-16 overflow-hidden border-y border-royal/40 bg-abyss/70">
        <Particles count={12} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <Reveal>
            <p className="text-[11px] font-bold tracking-[0.42em] text-gold">SPECIALIZED FOR</p>
            <h2 className="font-display mt-2 text-5xl leading-[0.9] text-frost sm:text-7xl">
              CALL OF DUTY: <span className="text-neon">MOBILE</span>
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-frost/55">
              From 2-thumb to full claw. Our trigger + sleeve + cooler combo is the exact loadout used by Legendary-rank
              players we supply across Nigeria. Ask us for the "Ranked Bundle" on WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="clip-card relative border border-royal/60 bg-navy/40 p-6">
              <Corners tone="gold" />
              <p className="font-display text-2xl tracking-[0.14em] text-frost">THE RANKED BUNDLE</p>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-frost/65">
                <li className="flex justify-between"><span>Pro Finger Sleeves</span><span className="text-gold">₦2,500</span></li>
                <li className="flex justify-between"><span>Mobile Triggers</span><span className="text-gold">₦4,500</span></li>
                <li className="flex justify-between"><span>Turbo Phone Cooler</span><span className="text-gold">₦8,500</span></li>
                <li className="mt-2 flex justify-between border-t border-royal/50 pt-2 font-display text-xl text-frost"><span>BUNDLE PRICE</span><span className="text-gold">₦13,500</span></li>
              </ul>
              <a
                href={waLink("Hello DUKES! I want the RANKED BUNDLE (sleeves + triggers + cooler) for ₦13,500.")}
                target="_blank"
                rel="noopener noreferrer"
                className="clip-btn mt-5 flex w-full items-center justify-center gap-2 bg-gold py-3 font-display text-lg tracking-[0.16em] text-ink transition hover:brightness-110"
              >
                <IconWhatsApp className="h-5 w-5" /> CLAIM BUNDLE ON WHATSAPP
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-5xl text-frost sm:text-6xl">READY TO <span className="text-gold">GEAR UP?</span></h2>
          <p className="mx-auto mt-3 max-w-md text-frost/55">Gear up. Stay ahead. Be a Duke.</p>
          <Link to="/shop" className="clip-btn group mt-7 inline-flex items-center gap-3 bg-gold px-10 py-4 font-display text-xl tracking-[0.16em] text-ink shadow-gold transition-all hover:brightness-110 active:scale-[0.97]">
            ENTER THE ARMORY <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
