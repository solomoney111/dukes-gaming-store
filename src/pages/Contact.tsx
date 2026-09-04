import { useState } from "react";
import { useStore, waLink, PHONE_DISPLAY } from "../lib/store";
import { IconChevronDown, IconClock, IconPhone, IconPin, IconWhatsApp } from "../components/Icons";
import { Corners, Particles, Reveal, SectionHeading } from "../components/ui";

const FAQS = [
  { q: "How fast is delivery?", a: "Within Lagos we dispatch same-day (often delivered within 24 hours). Nationwide delivery takes 2–4 working days via tracked courier." },
  { q: "Do you offer pay on delivery?", a: "Yes — pay on delivery is available for all Lagos orders. Outside Lagos we confirm orders via bank transfer or WhatsApp payment link." },
  { q: "Can I buy in bulk / wholesale?", a: "Absolutely. We supply resellers and gaming lounges. Message us on WhatsApp with the items and quantities you need and we'll quote a wholesale tier." },
  { q: "What if a product has a fault?", a: "Every item is tested before dispatch and covered by a 7-day replacement guarantee. If anything arrives faulty, we replace it — no long stories." },
];

function HudMap() {
  return (
    <div className="clip-card scanlines relative overflow-hidden border border-royal/70 bg-navy/40">
      <Corners className="m-3" />
      <div className="bg-grid relative h-64 sm:h-80">
        {/* stylized roads */}
        <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M0 180 C 90 160, 140 210, 230 185 S 360 130, 400 150" stroke="#103D80" strokeWidth="3" fill="none" opacity="0.8" />
          <path d="M60 0 C 70 80, 40 150, 90 260" stroke="#103D80" strokeWidth="2.4" fill="none" opacity="0.7" />
          <path d="M250 0 C 240 70, 290 130, 260 260" stroke="#103D80" strokeWidth="2.4" fill="none" opacity="0.7" />
          <path d="M0 70 C 120 90, 260 50, 400 80" stroke="#103D80" strokeWidth="1.8" fill="none" opacity="0.5" />
          <path d="M0 180 C 90 160, 140 210, 230 185 S 360 130, 400 150" stroke="#00A8FF" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="6 6" />
        </svg>
        {/* pin */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="relative mx-auto block h-16 w-16">
            <span className="absolute inset-0 animate-ping rounded-full bg-neon/25" />
            <span className="absolute inset-3 rounded-full border border-neon/60" />
            <span className="absolute inset-6 rounded-full bg-gold shadow-gold" />
          </span>
          <p className="clip-tag mt-2 inline-block border border-gold/60 bg-abyss/90 px-3 py-1.5 font-display text-lg tracking-[0.2em] text-gold">
            IKOTUN, LAGOS
          </p>
        </div>
        <p className="absolute left-4 top-3 font-display text-[11px] tracking-[0.3em] text-neon/60">SECTOR: IKOTUN • 6.6024°N, 3.2313°E</p>
        <p className="absolute bottom-3 right-4 font-display text-[11px] tracking-[0.3em] text-neon/60">SIGNAL: STRONG</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const { showToast } = useStore();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    window.open(
      waLink(`*ENQUIRY — DUKES GAMING GADGET*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone || "-"}\n\n${form.message}`),
      "_blank"
    );
    showToast("Opening WhatsApp with your message…", "gold");
  };

  const cards = [
    { icon: IconPhone, title: "CALL US", value: PHONE_DISPLAY, sub: "Mon – Sat, 9AM – 8PM", href: `tel:${PHONE_DISPLAY}` },
    { icon: IconWhatsApp, title: "WHATSAPP", value: PHONE_DISPLAY, sub: "Fastest response — usually < 5 mins", href: waLink("Hello DUKES GAMING GADGET!") },
    { icon: IconPin, title: "LOCATION", value: "Ikotun, Lagos", sub: "Pickup available • Nationwide delivery", href: undefined },
    { icon: IconClock, title: "HOURS", value: "9AM – 8PM", sub: "Open 6 days a week", href: undefined },
  ];

  return (
    <div className="relative min-h-screen bg-ink pt-24 lg:pt-32">
      <div className="bg-grid absolute inset-x-0 top-0 h-80 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-royal/25 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <SectionHeading
          eyebrow="Open comms channel"
          title={<>CONTACT <span className="text-neon">HQ</span></>}
          sub="Questions, bulk orders, bundle deals or just setup advice — the squad is one message away."
        />

        {/* contact cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const inner = (
              <div className="clip-card group h-full border border-royal/60 bg-navy/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neon/60 hover:shadow-neon">
                <span className="clip-tag flex h-12 w-12 items-center justify-center border border-electric/60 bg-royal/30 text-neon transition-colors group-hover:text-gold">
                  <c.icon className="h-6 w-6" />
                </span>
                <p className="font-display mt-3 text-xl tracking-[0.14em] text-frost">{c.title}</p>
                <p className="font-display text-2xl text-gold">{c.value}</p>
                <p className="mt-1 text-xs font-semibold text-frost/45">{c.sub}</p>
              </div>
            );
            return (
              <Reveal key={c.title} delay={i * 90}>
                {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block h-full">{inner}</a> : inner}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* form */}
          <Reveal>
            <div className="clip-card relative border border-royal/60 bg-navy/30 p-6 sm:p-8">
              <Corners />
              <h2 className="font-display text-3xl tracking-[0.08em] text-frost">SEND A <span className="text-gold">MESSAGE</span></h2>
              <p className="mt-1 text-sm font-medium text-frost/50">Your message opens directly in WhatsApp — no forms lost in the void.</p>
              <form onSubmit={sendToWhatsApp} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold tracking-[0.3em] text-electric">FULL NAME *</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Adewale Johnson" className="field" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold tracking-[0.3em] text-electric">PHONE NUMBER</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="e.g. 0801 234 5678" className="field" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold tracking-[0.3em] text-electric">MESSAGE *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what gear you need…" className="field resize-none" />
                </div>
                <button type="submit" className="clip-btn flex w-full items-center justify-center gap-2 bg-wa py-3.5 font-display text-xl tracking-[0.16em] text-ink transition hover:brightness-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] active:scale-[0.98]">
                  <IconWhatsApp className="h-5 w-5" /> SEND VIA WHATSAPP
                </button>
              </form>
            </div>
          </Reveal>

          {/* map */}
          <div className="space-y-8">
            <Reveal delay={120}><HudMap /></Reveal>
            <Reveal delay={200}>
              <div>
                <h3 className="font-display text-3xl tracking-[0.08em] text-frost">INTEL / <span className="text-neon">FAQ</span></h3>
                <div className="mt-4 space-y-2.5">
                  {FAQS.map((f, i) => (
                    <div key={f.q} className={`clip-tag border transition-all duration-300 ${openFaq === i ? "border-neon/60 bg-navy/50" : "border-royal/60 bg-navy/25"}`}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left"
                        aria-expanded={openFaq === i}
                      >
                        <span className={`font-display text-lg tracking-[0.08em] ${openFaq === i ? "text-gold" : "text-frost/85"}`}>{f.q.toUpperCase()}</span>
                        <IconChevronDown className={`h-5 w-5 shrink-0 text-neon transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                        <p className="px-4 pb-4 text-sm font-medium leading-relaxed text-frost/55">{f.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* bottom band */}
      <div className="relative overflow-hidden border-t border-royal/40 bg-abyss/70 py-14">
        <Particles count={10} />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <p className="font-display text-4xl text-frost sm:text-5xl">PREFER TO TALK? <span className="text-gold">DIAL IN.</span></p>
            <a href={waLink("Hello DUKES GAMING GADGET! I have an enquiry.")} target="_blank" rel="noopener noreferrer" className="font-display mt-4 inline-block text-5xl tracking-[0.1em] text-neon transition hover:text-frost sm:text-6xl">
              {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
