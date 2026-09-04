import type { JSX } from "react";

type P = { className?: string };
const S = (props: P & { children: React.ReactNode; filled?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={props.className ?? "w-5 h-5"}
    fill={props.filled ? "currentColor" : "none"}
    stroke={props.filled ? "none" : "currentColor"}
    strokeWidth={props.filled ? 0 : 1.7}
    strokeLinecap="square"
    strokeLinejoin="miter"
    aria-hidden="true"
  >
    {props.children}
  </svg>
);

/* ---------------- UI icons ---------------- */
export const IconSearch = (p: P) => (
  <S {...p}><circle cx="10.5" cy="10.5" r="6" /><path d="M15.2 15.2 21 21" /><path d="M10.5 7.5v3M9 9h3" /></S>
);
export const IconCart = (p: P) => (
  <S {...p}><path d="M3 4h2.4l2.2 11.2h10.9L21 7.6H6.2" /><path d="M9.5 20.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zM17 20.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" /></S>
);
export const IconHeart = (p: P & { filled?: boolean }) => (
  <S {...p}><path d="M12 20.2 4.8 13a4.9 4.9 0 0 1 0-7 4.7 4.7 0 0 1 6.8 0l.4.5.4-.5a4.7 4.7 0 0 1 6.8 0 4.9 4.9 0 0 1 0 7L12 20.2z" /></S>
);
export const IconStar = (p: P) => (
  <S {...p} filled><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.4l-5.8 3 1.1-6.4-4.7-4.6 6.5-.9L12 2.6z" /></S>
);
export const IconPhone = (p: P) => (
  <S {...p}><path d="M5 3.5h4l1.5 5-2.3 1.7a13.8 13.8 0 0 0 5.6 5.6l1.7-2.3 5 1.5v4a1.5 1.5 0 0 1-1.6 1.5C10.6 19.9 4.1 13.4 3.5 5.1A1.5 1.5 0 0 1 5 3.5z" /></S>
);
export const IconPin = (p: P) => (
  <S {...p}><path d="M12 21.5s7-6.1 7-11.5a7 7 0 1 0-14 0c0 5.4 7 11.5 7 11.5z" /><circle cx="12" cy="10" r="2.6" /></S>
);
export const IconClock = (p: P) => (
  <S {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5.4l3.6 2" /></S>
);
export const IconMenu = (p: P) => (
  <S {...p}><path d="M3 6h18M3 12h12M3 18h18" /></S>
);
export const IconClose = (p: P) => (
  <S {...p}><path d="M5 5l14 14M19 5L5 19" /></S>
);
export const IconChevronDown = (p: P) => (
  <S {...p}><path d="M5 9l7 7 7-7" /></S>
);
export const IconArrowRight = (p: P) => (
  <S {...p}><path d="M3.5 12h16M14 5.5l6.5 6.5-6.5 6.5" /></S>
);
export const IconCheck = (p: P) => (
  <S {...p}><path d="M4 12.5l5 5L20 6.5" /></S>
);
export const IconTrash = (p: P) => (
  <S {...p}><path d="M4 6.5h16M9 6.5V4h6v2.5M6.5 6.5 7.5 21h9l1-14.5M10 10.5v6M14 10.5v6" /></S>
);
export const IconPlus = (p: P) => (<S {...p}><path d="M12 5v14M5 12h14" /></S>);
export const IconMinus = (p: P) => (<S {...p}><path d="M5 12h14" /></S>);
export const IconFilter = (p: P) => (
  <S {...p}><path d="M3 5h18L14 13v6.5l-4-2V13L3 5z" /></S>
);
export const IconEye = (p: P) => (
  <S {...p}><path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></S>
);
export const IconTruck = (p: P) => (
  <S {...p}><path d="M2.5 6h11v10h-11zM13.5 9.5h4l3 3.4V16h-7" /><circle cx="6.5" cy="17.6" r="1.8" /><circle cx="16.8" cy="17.6" r="1.8" /></S>
);
export const IconBolt = (p: P) => (<S {...p} filled><path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" /></S>);
export const IconCrown = (p: P) => (
  <S {...p}><path d="M4 18.5h16M4 18.5 3 7.5l5 3.5 4-6 4 6 5-3.5-1 11z" /></S>
);
export const IconTarget = (p: P) => (
  <S {...p}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4" /><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" /></S>
);

/* ---------------- brand ---------------- */
export const BrandMark = ({ className = "w-10 h-10" }: P) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path d="M4 4h40v28L32 44H4V4z" fill="#041B40" stroke="#2E84D3" strokeWidth="1.6" />
    <path d="M4 4h40v6H4z" fill="#103D80" />
    <path d="M14 16l3-4 5 3 5-3 3 4-1.5 11h-13L14 16z" fill="#E6C425" />
    <path d="M17 21h11v2.6a5.5 5.5 0 0 1-11 0V21z" fill="#00A8FF" />
    <path d="M17.5 33h13" stroke="#00A8FF" strokeWidth="1.6" />
    <path d="M40 32 32 40" stroke="#041B40" strokeWidth="0" />
  </svg>
);

/* ---------------- WhatsApp & social ---------------- */
export const IconWhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" className={p.className ?? "w-5 h-5"} fill="currentColor" aria-hidden="true">
    <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.1 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3.4 4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.3-1.5-.7c-.2-.1-.4-.1-.5.1l-.7.9c-.2.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.5.1-.6l.6-.8c.1-.2.1-.4 0-.5L10.7 8.4c-.2-.4-.4-.6-.7-.6h-.4z" />
  </svg>
);
export const IconInstagram = (p: P) => (
  <S {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" /></S>
);
export const IconTikTok = (p: P) => (
  <svg viewBox="0 0 24 24" className={p.className ?? "w-5 h-5"} fill="currentColor" aria-hidden="true">
    <path d="M14.5 3h2.6c.3 1.9 1.5 3.4 3.9 3.6v2.8c-1.5 0-2.8-.5-3.9-1.3v6.4c0 3.6-2.5 6-6 6-3.2 0-5.8-2.4-5.8-5.7 0-3.5 3-5.9 6.6-5.6v2.9c-2-.4-3.7.8-3.7 2.6 0 1.7 1.2 2.9 2.9 2.9 1.9 0 3.4-1.3 3.4-3.5V3z" />
  </svg>
);
export const IconFacebook = (p: P) => (
  <svg viewBox="0 0 24 24" className={p.className ?? "w-5 h-5"} fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7h2.6l.5-3h-3.1V8.9c0-.9.3-1.6 1.7-1.6h1.5V4.6c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 3.9V11H8v3h2.6v7h2.9z" />
  </svg>
);

/* ---------------- benefit / why icons ---------------- */
export const IconShield = (p: P) => (
  <S {...p}><path d="M12 2.5 4.5 5.4v6c0 5 3.2 8.3 7.5 10.1 4.3-1.8 7.5-5.1 7.5-10.1v-6L12 2.5z" /><path d="M8.5 11.6l2.5 2.5 4.7-4.7" /></S>
);
export const IconDurable = (p: P) => (
  <S {...p}><path d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2z" /><path d="M12 7.5 8 12h3l-1 4.5 4-5.5h-3l1-3.5z" /></S>
);
export const IconBoost = (p: P) => (
  <S {...p}><path d="M4 19.5a9 9 0 1 1 16 0" /><path d="M12 13.5 16.5 8" /><circle cx="12" cy="14.5" r="1.6" /><path d="M2.5 19.5h4M17.5 19.5h4" /></S>
);
export const IconTag = (p: P) => (
  <S {...p}><path d="M3 3h8.5L21 12.5 12.5 21 3 11.5V3z" /><circle cx="8" cy="8" r="1.6" /></S>
);
export const IconSquad = (p: P) => (
  <S {...p}><circle cx="8" cy="8.5" r="3.2" /><circle cx="16.5" cy="9.5" r="2.6" /><path d="M2.8 20a5.2 5.2 0 0 1 10.4 0M13.8 20a4.6 4.6 0 0 1 7.4-3.6" /></S>
);
export const IconCrate = (p: P) => (
  <S {...p}><path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9z" /><path d="M3 7.5 12 12l9-4.5M12 12v9" /></S>
);
export const IconSupport = (p: P) => (
  <S {...p}><path d="M4.5 13v-2a7.5 7.5 0 0 1 15 0v2" /><path d="M4.5 13H7v5H4.5a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 4.5 13zM19.5 13H17v5h2.5a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z" /><path d="M17 18v.8a2.5 2.5 0 0 1-2.5 2.5H12" /></S>
);

/* ---------------- category icons ---------------- */
export const IconSleeve = (p: P) => (
  <S {...p}><path d="M8 3.5h8v10a4 4 0 0 1-8 0v-10z" /><path d="M8 7h8M8 10.5h8" /><path d="M10 17.5v3M14 17.5v3" /></S>
);
export const IconThumb = (p: P) => (
  <S {...p}><path d="M7 20.5V11l4-7 2 1v5.5h5.5a2 2 0 0 1 2 2.4l-1.3 6a2 2 0 0 1-2 1.6H7z" /><path d="M7 11H4.5v9.5H7" /></S>
);
export const IconTrigger = (p: P) => (
  <S {...p}><path d="M3.5 5h17v4.5h-17z" /><path d="M6 9.5v5a3.5 3.5 0 0 0 3.5 3.5H12M18 9.5v5a3.5 3.5 0 0 1-3.5 3.5H12" /><path d="M12 18v2.5" /></S>
);
export const IconGamepad = (p: P) => (
  <S {...p}><path d="M7 7h10a5 5 0 0 1 5 5.5l-.6 4A2.8 2.8 0 0 1 16.6 18L15 16H9l-1.6 2a2.8 2.8 0 0 1-4.8-1.5l-.6-4A5 5 0 0 1 7 7z" /><path d="M7.5 10.5h3M9 9v3M15 10h.01M17 12h.01" /></S>
);
export const IconHeadset = (p: P) => (
  <S {...p}><path d="M4 14v-2.5a8 8 0 0 1 16 0V14" /><rect x="3" y="13" width="4" height="6.5" /><rect x="17" y="13" width="4" height="6.5" /><path d="M19 19.5v.5a2.5 2.5 0 0 1-2.5 2.5H13" /></S>
);
export const IconKeyboard = (p: P) => (
  <S {...p}><rect x="2.5" y="7" width="19" height="10.5" /><path d="M5.5 10h1.6M9 10h1.6M12.5 10h1.6M16 10h1.6M5.5 13h1.6M16 13h1.6M8.5 13.8h7" strokeWidth="1.4" /></S>
);
export const IconMouse = (p: P) => (
  <S {...p}><path d="M12 3a5.5 5.5 0 0 1 5.5 5.5v7A5.5 5.5 0 0 1 12 21a5.5 5.5 0 0 1-5.5-5.5v-7A5.5 5.5 0 0 1 12 3z" /><path d="M12 3v6M6.7 9h10.6" /><path d="M12 12v3" /></S>
);
export const IconFan = (p: P) => (
  <S {...p}><circle cx="12" cy="12" r="2.4" /><path d="M12 9.6C12 5.8 10 4 7.5 4c0 3 1.4 5.6 4.5 5.6zM14.4 12c3.8 0 5.6-2 5.6-4.5-3 0-5.6 1.4-5.6 4.5zM12 14.4c0 3.8 2 5.6 4.5 5.6 0-3-1.4-5.6-4.5-5.6zM9.6 12c-3.8 0-5.6 2-5.6 4.5 3 0 5.6-1.4 5.6-4.5z" /></S>
);
export const IconBattery = (p: P) => (
  <S {...p}><rect x="2.5" y="7.5" width="17" height="9" /><path d="M21.5 10.5v3" /><path d="M10.8 9 8 12.2h2.4L9.6 15l3.4-3.4h-2.4l.4-2.6z" strokeWidth="1.3" /></S>
);
export const IconCable = (p: P) => (
  <S {...p}><path d="M4 20c6 0 4-7 9-7 3.5 0 3.5 3 7 3" /><path d="M4 17.5v5M6.5 17.5v5" strokeWidth="1.4" /><rect x="15" y="3.5" width="4.5" height="6.5" /><path d="M16.3 3.5V1.8M18.2 3.5V1.8" /></S>
);
export const IconStand = (p: P) => (
  <S {...p}><rect x="8" y="3.5" width="8" height="13" /><path d="M10.5 14.5h3" strokeWidth="1.4" /><path d="M12 16.5v4M7 20.5h10" /></S>
);
export const IconJoystick = (p: P) => (
  <S {...p}><circle cx="12" cy="6.5" r="3" /><path d="M12 9.5v6" /><path d="M5 19.5a7 7 0 0 1 14 0z" /><path d="M3.5 19.5h17" /></S>
);
export const IconMic = (p: P) => (
  <S {...p}><rect x="9" y="2.5" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v3M8.5 20.5h7" /></S>
);
export const IconRgb = (p: P) => (
  <S {...p}><path d="M3 16.5c3-6 6 3 9-3s6 3 9-3" /><path d="M3 12c3-6 6 3 9-3s6 3 9-3" opacity="0.55" /><path d="M5.5 20.5v-1.5M12 20.5v-1.5M18.5 20.5v-1.5" /></S>
);
export const IconGrip = (p: P) => (
  <S {...p}><path d="M7 3.5C4.8 6 4 9 4 12s.8 6 3 8.5M17 3.5c2.2 2.5 3 5.5 3 8.5s-.8 6-3 8.5" /><path d="M9 8h.01M12 10h.01M15 8h.01M9 13h.01M12 15h.01M15 13h.01M9 18h.01M12 20h.01M15 18h.01" strokeWidth="2.2" /></S>
);
export const IconEarbuds = (p: P) => (
  <S {...p}><path d="M8.5 4a3.5 3.5 0 0 1 3.5 3.5c0 2.5-2 3-2 5.5v4a1.5 1.5 0 0 1-3 0v-9A3.5 3.5 0 0 1 8.5 4z" /><path d="M15.5 4A3.5 3.5 0 0 0 12 7.5c0 2.5 2 3 2 5.5v4a1.5 1.5 0 0 0 3 0v-9A3.5 3.5 0 0 0 15.5 4z" opacity="0.6" /></S>
);
export const IconChair = (p: P) => (
  <S {...p}><path d="M8 3.5h8v9H8z" /><path d="M7 12.5h10l1 4H6l1-4z" /><path d="M12 16.5v3M8 21.5l4-2 4 2" /></S>
);

export const CATEGORY_ICONS: Record<string, (p: P) => JSX.Element> = {
  sleeve: IconSleeve,
  thumb: IconThumb,
  trigger: IconTrigger,
  gamepad: IconGamepad,
  headset: IconHeadset,
  keyboard: IconKeyboard,
  mouse: IconMouse,
  fan: IconFan,
  battery: IconBattery,
  cable: IconCable,
  stand: IconStand,
  joystick: IconJoystick,
  mic: IconMic,
  rgb: IconRgb,
  grip: IconGrip,
  earbuds: IconEarbuds,
  chair: IconChair,
};

export const CONTENT_ICONS: Record<string, (p: P) => JSX.Element> = {
  shield: IconShield,
  durable: IconDurable,
  boost: IconBoost,
  tag: IconTag,
  crown: IconCrown,
  truck: IconTruck,
  squad: IconSquad,
  crate: IconCrate,
  support: IconSupport,
};
