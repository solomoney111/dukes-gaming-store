export type ArtName =
  | "cable" | "stand" | "mic" | "strip" | "grip" | "earbuds" | "chair";

export interface Product {
  id: string;
  name: string;
  categories: string[];
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: "BEST SELLER" | "HOT DEAL" | "NEW" | "PRO PICK";
  image?: string;
  art?: ArtName;
  short: string;
  description: string;
  features: string[];
  featured?: boolean;
  addedAt: number;
}

export interface Category {
  id: string;
  name: string;
  blurb: string;
  image?: string;
  art?: ArtName;
  icon: string;
}

const IMG = {
  fingerSleeves: "https://image.qwenlm.ai/generated-images/4d2b85d8-0f54-4e78-8558-56d24e40bd43/_result.png",
  thumbSleeves: "https://image.qwenlm.ai/generated-images/8910903d-1a86-49dd-9052-4248a0bbc029/_result.png",
  triggers: "https://image.qwenlm.ai/generated-images/6773506a-c759-445e-bf57-6e19a87bb7e0/_result.png",
  controller: "https://image.qwenlm.ai/generated-images/d1b5aa2c-0e5b-4fe9-9846-2277580a9ce9/_result.png",
  headset: "https://image.qwenlm.ai/generated-images/3d31ad95-cb00-41b9-abd7-0d6ab0c06021/_result.png",
  keyboard: "https://image.qwenlm.ai/generated-images/1300935f-f813-4bef-8a59-83c2228bd6d1/_result.png",
  mouse: "https://image.qwenlm.ai/generated-images/16d30155-c1a8-4c93-bfe6-b597cbdcad5e/_result.png",
  cooler: "https://image.qwenlm.ai/generated-images/7e519289-9c05-4657-8be5-17d557fc208d/_result.png",
  powerbank: "https://image.qwenlm.ai/generated-images/ea2c7557-a8a8-4f1a-a7c7-ae68d9a3671a/_result.png",
  mobilepad: "https://image.qwenlm.ai/generated-images/f695e67a-614a-48f7-bd59-89a0fdae511d/_result.png",
};

export const HERO_IMAGES = {
  controller: IMG.controller,
  headset: IMG.headset,
  cooler: IMG.cooler,
  triggers: IMG.triggers,
};

export const CATEGORIES: Category[] = [
  { id: "finger-sleeves", name: "Gaming Finger Sleeves", blurb: "Anti-sweat carbon fiber sleeves for zero-friction aim.", image: IMG.fingerSleeves, icon: "sleeve" },
  { id: "thumb-sleeves", name: "Gaming Thumb Sleeves", blurb: "Ultra-thin knit for buttery-smooth movement control.", image: IMG.thumbSleeves, icon: "thumb" },
  { id: "triggers", name: "Mobile Gaming Triggers", blurb: "L1/R1 shoulder triggers for a 4-finger claw setup.", image: IMG.triggers, icon: "trigger" },
  { id: "controllers", name: "Game Controllers", blurb: "Wireless pads with turbo, macros and low latency.", image: IMG.controller, icon: "gamepad" },
  { id: "headsets", name: "Gaming Headsets", blurb: "Surround sound and clear comms for squad play.", image: IMG.headset, icon: "headset" },
  { id: "keyboards", name: "Gaming Keyboards", blurb: "Mechanical switches with full RGB battle lighting.", image: IMG.keyboard, icon: "keyboard" },
  { id: "mice", name: "Gaming Mice", blurb: "High-DPI sensors tuned for flicks and tracking.", image: IMG.mouse, icon: "mouse" },
  { id: "coolers", name: "Phone Coolers", blurb: "Kill thermal throttling. Hold max FPS all match.", image: IMG.cooler, icon: "fan" },
  { id: "power-banks", name: "Power Banks", blurb: "Fast-charge banks that keep you in the lobby longer.", image: IMG.powerbank, icon: "battery" },
  { id: "cables", name: "Charging Cables", blurb: "Braided fast-charge cables built for gaming bends.", art: "cable", icon: "cable" },
  { id: "stands", name: "Phone Stands", blurb: "Stable angles for streaming, comms and clutch plays.", art: "stand", icon: "stand" },
  { id: "gamepads", name: "Joysticks & Gamepads", blurb: "Telescopic controllers that turn phones into consoles.", image: IMG.mobilepad, icon: "joystick" },
  { id: "microphones", name: "Gaming Microphones", blurb: "Crisp callouts for ranked squads and streaming.", art: "mic", icon: "mic" },
  { id: "rgb", name: "RGB Accessories", blurb: "Light strips and ambience for a full battlestation.", art: "strip", icon: "rgb" },
  { id: "grips", name: "Controller Grips & Skins", blurb: "Sweat-proof grips and skins for total control.", art: "grip", icon: "grip" },
  { id: "earphones", name: "Earphones", blurb: "Low-latency earbuds with punchy positional audio.", art: "earbuds", icon: "earbuds" },
  { id: "chairs", name: "Gaming Chairs", blurb: "Ergonomic thrones for long ranked grinding sessions.", art: "chair", icon: "chair" },
];

// Cables / stands / mics etc. that render as holographic SVG art
const ART_MAP: Record<string, ArtName> = {
  cables: "cable",
  stands: "stand",
  microphones: "mic",
  rgb: "strip",
  grips: "grip",
  earphones: "earbuds",
  chairs: "chair",
};

export const PRODUCTS: Product[] = [
  {
    id: "pro-finger-sleeves",
    name: "Pro Gaming Finger Sleeves",
    categories: ["finger-sleeves"],
    price: 2500, oldPrice: 3500,
    rating: 4.9, reviews: 214, badge: "BEST SELLER",
    image: IMG.fingerSleeves, featured: true, addedAt: 12,
    short: "Silver carbon-fiber knit sleeves for friction-free swipes.",
    description: "The #1 upgrade for CODM snipers. These conductive carbon-fiber sleeves eliminate sweat and friction so every flick, drag and slide lands exactly where you aim. Used by ranked Legendary players across Lagos.",
    features: ["0.3mm ultra-thin carbon fiber knit", "Anti-sweat & anti-fingerprint", "High-sensitivity touch conduction", "Washable — lasts 100+ sessions", "Fits index, middle & thumb"],
  },
  {
    id: "precision-thumb-sleeves",
    name: "Precision Thumb Sleeves",
    categories: ["thumb-sleeves"],
    price: 2000,
    rating: 4.8, reviews: 158,
    image: IMG.thumbSleeves, featured: true, addedAt: 11,
    short: "Black compression-fit thumb sleeves with blue stitching.",
    description: "Compression-fit thumb sleeves that stay locked during intense 1v4 clutches. The silver-plated fiber weave keeps your movement thumb gliding at tournament speed without screen drag.",
    features: ["Silver-plated fiber weave", "Compression fit — never slips", "Breathable moisture-wicking knit", "Universal sizing (S–L)", "2 pairs per pack"],
  },
  {
    id: "mobile-triggers",
    name: "Mobile Gaming Triggers",
    categories: ["triggers"],
    price: 4500, oldPrice: 6000,
    rating: 4.7, reviews: 342, badge: "HOT DEAL",
    image: IMG.triggers, featured: true, addedAt: 10,
    short: "Clip-on L1/R1 shoulder triggers for full claw control.",
    description: "Turn any phone into a 4-finger weapon. Capacitive L1/R1 triggers with hair-trigger response, silicone-padded clamps and zero screen damage. The fastest way from 2-thumb casual to claw sweat.",
    features: ["Capacitive mapping — no apps needed", "Hair-trigger 0.03s response", "Soft silicone clamps, zero scratches", "Fits phones 6–12mm thick", "360° adjustable angle"],
  },
  {
    id: "wireless-controller",
    name: "Wireless Gaming Controller",
    categories: ["controllers", "gamepads"],
    price: 18500, oldPrice: 22000,
    rating: 4.9, reviews: 187, badge: "PRO PICK",
    image: IMG.controller, featured: true, addedAt: 9,
    short: "Bluetooth pad with turbo, hall triggers & neon accents.",
    description: "A pro-grade wireless controller for mobile, PC and console. Hall-effect triggers, remappable back paddles, 3-level turbo and a 20-hour battery — wrapped in matte black with electric blue accents.",
    features: ["Hall-effect triggers & sticks", "Bluetooth 5.3 + 2.4G dongle", "3-level turbo + macro remap", "20-hour battery, USB-C fast charge", "Android / iOS / PC / Switch"],
  },
  {
    id: "rgb-headset",
    name: "RGB Gaming Headset",
    categories: ["headsets"],
    price: 15000,
    rating: 4.8, reviews: 129,
    image: IMG.headset, featured: true, addedAt: 8,
    short: "7.1 surround over-ears with glow rings & noise-cancel mic.",
    description: "Hear footsteps before they hear you. 50mm neodymium drivers with virtual 7.1 surround, memory-foam earcups and a detachable noise-canceling mic for crystal callouts.",
    features: ["50mm neodymium drivers", "Virtual 7.1 surround sound", "Detachable noise-canceling mic", "RGB glow rings, 16.8M colors", "Memory foam + steel headband"],
  },
  {
    id: "mech-keyboard",
    name: "RGB Mechanical Gaming Keyboard",
    categories: ["keyboards"],
    price: 28000,
    rating: 4.9, reviews: 96,
    image: IMG.keyboard, featured: true, addedAt: 7,
    short: "Hot-swap mechanical board with blue-lit RGB modes.",
    description: "A compact 75% mechanical keyboard with hot-swappable switches, double-shot PBT keycaps and 18 lighting modes. Aluminum top plate keeps it planted through every rage moment.",
    features: ["Hot-swappable mechanical switches", "Double-shot PBT keycaps", "18 RGB modes + full custom", "Gasket-mounted aluminum body", "USB-C detachable cable"],
  },
  {
    id: "strike-mouse",
    name: "Strike RGB Gaming Mouse",
    categories: ["mice"],
    price: 9500,
    rating: 4.7, reviews: 173,
    image: IMG.mouse, addedAt: 6,
    short: "26K DPI optical sensor at a featherweight 59g.",
    description: "Built for flicks. A 26,000 DPI optical sensor, 59g ultralight shell and 1000Hz polling deliver pixel-perfect tracking. PTFE skates glide like it's cheating.",
    features: ["26,000 DPI optical sensor", "59g ultralight chassis", "1000Hz polling rate", "6 programmable buttons", "Braided paracord cable"],
  },
  {
    id: "turbo-cooler",
    name: "Turbo Phone Cooler",
    categories: ["coolers"],
    price: 8500, oldPrice: 11000,
    rating: 4.8, reviews: 261, badge: "HOT DEAL",
    image: IMG.cooler, featured: true, addedAt: 5,
    short: "Semiconductor cooling fan — drops phone temp by 20°C.",
    description: "Thermal throttling is a silent rank-killer. This semiconductor cooler drops surface temperature up to 20°C in minutes, holding max FPS and max brightness through back-to-back ranked matches.",
    features: ["Semiconductor rapid cooling", "Up to 20°C temperature drop", "7-blade silent turbo fan", "RGB halo ring lighting", "Expandable clamp fits all phones"],
  },
  {
    id: "hyper-powerbank",
    name: "Hyper 20,000mAh Power Bank",
    categories: ["power-banks"],
    price: 14000,
    rating: 4.6, reviews: 118,
    image: IMG.powerbank, addedAt: 4,
    short: "22.5W fast-charge bank with digital % display.",
    description: "Marathon sessions need marathon fuel. 20,000mAh with 22.5W two-way fast charging charges your phone to 60% in 30 minutes — and the LED display tells you exactly how much ammo is left.",
    features: ["20,000mAh real capacity", "22.5W super fast charge", "Digital percentage display", "Charges 2 devices at once", "Flight-safe certified cells"],
  },
  {
    id: "braid-cable",
    name: "Premium 100W Charging Cable",
    categories: ["cables"],
    price: 3500,
    rating: 4.7, reviews: 204,
    art: "cable", addedAt: 3,
    short: "Braided USB-C cable with 90° gaming elbow.",
    description: "The 90° elbow keeps the cable out of your grip while you charge and play. Double-braided nylon, reinforced joints and 100W PD fast charge rated for 20,000 bends.",
    features: ["90° gaming elbow connector", "100W PD fast charging", "Double-braided nylon jacket", "Rated for 20,000+ bends", "1.5m length"],
  },
  {
    id: "vantage-stand",
    name: "Vantage Adjustable Phone Stand",
    categories: ["stands"],
    price: 4000,
    rating: 4.6, reviews: 87,
    art: "stand", badge: "NEW", addedAt: 16,
    short: "Weighted aluminum stand with cooling airflow channel.",
    description: "A weighted aluminum stand with 270° tilt and an open-back airflow channel so your phone stays cool during streamed scrims. Foldable enough for LANs and tournaments.",
    features: ["CNC aluminum build", "270° tilt + height adjust", "Open-back cooling channel", "Anti-slip silicone pads", "Foldable & portable"],
  },
  {
    id: "mobile-controller",
    name: "Mobile Gaming Controller",
    categories: ["gamepads", "controllers"],
    price: 12500,
    rating: 4.8, reviews: 142, badge: "NEW",
    image: IMG.mobilepad, featured: true, addedAt: 15,
    short: "Telescopic pad — your phone becomes a console.",
    description: "Clamp your phone between console-grade sticks and triggers. Zero-latency direct connection, pass-through charging and hall-effect sticks make this the definitive CODM controller.",
    features: ["Zero-latency direct mount", "Hall-effect sticks & triggers", "Pass-through USB-C charging", "Fits phones up to 215mm", "iOS & Android native support"],
  },
  {
    id: "sentry-mic",
    name: "Sentry Streaming Microphone",
    categories: ["microphones"],
    price: 16500,
    rating: 4.7, reviews: 64,
    art: "mic", addedAt: 2,
    short: "USB-C condenser mic with one-tap mute & RGB ring.",
    description: "Broadcast-grade 24-bit/96kHz capture in a plug-and-play USB-C body. One-tap mute, gain knob and shock mount included — your callouts will never get lost in gunfire again.",
    features: ["24-bit / 96kHz condenser capsule", "One-tap mute with LED", "Zero-latency headphone monitor", "Shock mount + stand included", "USB-C plug & play"],
  },
  {
    id: "halo-strip",
    name: "Halo RGB Light Strip 3M",
    categories: ["rgb"],
    price: 6500,
    rating: 4.5, reviews: 71,
    art: "strip", badge: "NEW", addedAt: 14,
    short: "App-controlled 3M RGB strip with music sync.",
    description: "Wrap your battlestation in electric blue — or any of 16M colors. Music-sync mode pulses with your soundtrack, and scene presets like 'Ranked Night' set the mood in one tap.",
    features: ["3M length, cuttable every 10cm", "16M colors + scene presets", "Music sync mode", "App + remote control", "Strong 3M adhesive backing"],
  },
  {
    id: "duke-grip",
    name: "Duke Controller Grip Kit",
    categories: ["grips", "controllers"],
    price: 3000,
    rating: 4.6, reviews: 93,
    art: "grip", addedAt: 1,
    short: "Sweat-proof textured grip skins for any pad.",
    description: "Laser-cut textured skins that add serious traction to any controller. Sweat-proof, residue-free adhesive and a matte black finish with the Duke crown detail.",
    features: ["Laser-cut precision fit", "Sweat-proof micro texture", "Residue-free adhesive", "Universal pad templates", "Matte stealth black finish"],
  },
  {
    id: "echo-earbuds",
    name: "Echo Low-Latency Earphones",
    categories: ["earphones"],
    price: 5500,
    rating: 4.5, reviews: 132,
    art: "earbuds", addedAt: 13,
    short: "45ms game-mode earbuds with dual drivers.",
    description: "Bluetooth 5.3 earbuds with a dedicated 45ms game mode — gunshot direction comes through clean, not three steps late. Dual drivers push deep bass and sharp highs for positional awareness.",
    features: ["45ms ultra-low game mode", "Dual 10mm + 6mm drivers", "Bluetooth 5.3 stable link", "32-hour total battery", "IPX5 sweat resistance"],
  },
  {
    id: "throne-chair",
    name: "Duke Throne Gaming Chair",
    categories: ["chairs"],
    price: 85000,
    rating: 4.9, reviews: 38, badge: "PRO PICK",
    art: "chair", addedAt: 17,
    short: "Ergonomic racing chair with lumbar support & 4D arms.",
    description: "The command seat. Cold-cure foam, a steel frame rated to 150kg, 4D armrests and magnetic lumbar support keep your posture sharp from first lobby to last clutch.",
    features: ["Cold-cure memory foam", "Steel frame — 150kg rated", "4D armrests + 135° recline", "Magnetic lumbar + head pillow", "PU leather, breathable weave"],
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function relatedProducts(product: Product, count = 4): Product[] {
  const score = (p: Product) =>
    p.id === product.id ? -1 : p.categories.filter((c) => product.categories.includes(c)).length * 10 + (p.featured ? 2 : 0) + p.rating;
  return [...PRODUCTS].filter((p) => p.id !== product.id).sort((a, b) => score(b) - score(a)).slice(0, count);
}

export function categoryName(id: string): string {
  return CATEGORIES.find((c) => c.id === id)?.name ?? id;
}

export function categoryImage(cat: Category): string | undefined {
  if (cat.image) return cat.image;
  const p = PRODUCTS.find((x) => x.categories.includes(cat.id) && x.image);
  return p?.image;
}

export function categoryArt(cat: Category): ArtName | undefined {
  if (ART_MAP[cat.id]) return ART_MAP[cat.id];
  const p = PRODUCTS.find((x) => x.categories.includes(cat.id));
  return p?.art;
}

export function categoryCount(catId: string): number {
  return PRODUCTS.filter((p) => p.categories.includes(catId)).length;
}

export const BENEFITS = [
  { icon: "shield", title: "PREMIUM QUALITY", text: "High-quality gaming accessories, hand-tested before they hit the shelf." },
  { icon: "durable", title: "DURABLE & RELIABLE", text: "Products designed for consistent gaming, session after session." },
  { icon: "boost", title: "BOOST PERFORMANCE", text: "Gear engineered to sharpen aim, speed and reaction time." },
  { icon: "tag", title: "AFFORDABLE PRICES", text: "Premium gaming without unnecessary prices. Fair ₦, always." },
];

export const WHY_DUKES = [
  { icon: "crown", title: "Premium Products", text: "Every item is sourced from trusted manufacturers and stress-tested by our own squad before listing." },
  { icon: "truck", title: "Fast & Safe Delivery", text: "Same-day dispatch within Lagos and tracked nationwide shipping across all 36 states." },
  { icon: "squad", title: "Trusted by Gamers", text: "Hundreds of CODM, FIFA and FPS players across Nigeria gear up with Dukes every week." },
  { icon: "crate", title: "Wholesale & Retail", text: "Buying one sleeve or stocking a shop? We run honest wholesale tiers for resellers." },
  { icon: "tag", title: "Affordable Prices", text: "Direct import relationships mean you pay for the gear — not the middlemen." },
  { icon: "support", title: "Gaming-Focused Support", text: "Real gamers answer our line. Setup help, compatibility checks, honest advice — 7 days a week." },
];

export const TESTIMONIALS = [
  { name: "Tobi 'HeadshotKing' A.", game: "CODM — Legendary", quote: "The triggers + finger sleeves combo took me from Pro to Legendary in two seasons. My claw finally works." },
  { name: "Chioma N.", game: "Mobile Gamer — Abuja", quote: "Ordered the cooler on Tuesday, it landed Wednesday. My phone no longer drops frames in ranked. Dukes is legit." },
  { name: "Emeka 'DukeE' O.", game: "Console + PC", quote: "Bought the controller and headset wholesale for my gaming lounge. Quality is premium, prices are fair." },
];

export const NIGERIAN_STATES = [
  "Lagos", "Abuja (FCT)", "Rivers", "Oyo", "Kano", "Enugu", "Anambra", "Delta",
  "Edo", "Ogun", "Kaduna", "Imo", "Abia", "Akwa Ibom", "Ondo", "Plateau",
  "Borno", "Kwara", "Osun", "Ekiti", "Bayelsa", "Cross River", "Other",
];
