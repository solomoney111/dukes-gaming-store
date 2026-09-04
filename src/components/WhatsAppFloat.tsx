import { useEffect, useState } from "react";
import { PHONE_DISPLAY, waLink } from "../lib/store";
import { IconWhatsApp, IconClose } from "./Icons";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setHint(true), 2400);
    const t2 = window.setTimeout(() => setHint(false), 9000);
    return () => { window.clearTimeout(t); window.clearTimeout(t2); };
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-[80] flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      {open && (
        <div className="anim-toast clip-card relative w-64 border border-wa/40 bg-navy/95 p-4 shadow-[0_0_40px_rgba(37,211,102,0.2)] backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-2 top-2 text-frost/40 transition hover:text-frost"
            aria-label="Close WhatsApp panel"
          >
            <IconClose className="h-4 w-4" />
          </button>
          <p className="font-display text-xl tracking-[0.12em] text-frost">DUKES SUPPORT</p>
          <p className="mt-1 text-sm font-semibold text-frost/55">Fastest replies on WhatsApp — usually under 5 minutes.</p>
          <a
            href={`tel:${PHONE_DISPLAY}`}
            className="font-display mt-3 block text-2xl tracking-[0.1em] text-neon transition hover:text-frost"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink("Hello DUKES GAMING GADGET! I want to make an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-btn mt-3 flex w-full items-center justify-center gap-2 bg-wa px-4 py-2.5 font-display text-base tracking-[0.16em] text-ink transition hover:brightness-110"
          >
            <IconWhatsApp className="h-5 w-5" /> CHAT WITH US
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="clip-btn relative flex items-center gap-3 bg-wa py-3 pl-4 pr-5 text-ink shadow-[0_0_34px_rgba(37,211,102,0.45)] transition-all duration-300 hover:brightness-110 active:scale-95"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute -left-1 -top-1 h-3 w-3">
          <span className="absolute inset-0 animate-ping bg-wa opacity-60" />
          <span className="absolute inset-0.5 bg-wa" />
        </span>
        <IconWhatsApp className="h-6 w-6" />
        <span className="text-left leading-none">
          <span className="font-display block text-lg tracking-[0.14em]">{open ? "CLOSE" : "CHAT WITH US"}</span>
          {!open && <span className="block text-[10px] font-bold tracking-[0.24em] text-ink/70">{PHONE_DISPLAY}</span>}
        </span>
      </button>

      {hint && !open && (
        <p className="anim-toast clip-tag border border-wa/40 bg-abyss/95 px-3 py-1.5 text-xs font-bold tracking-[0.18em] text-wa">
          ORDER VIA WHATSAPP →
        </p>
      )}
    </div>
  );
}
