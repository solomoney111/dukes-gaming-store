import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProduct, PRODUCTS, type Product } from "../data/products";

export const PHONE_DISPLAY = "08111235862";
export const WHATSAPP_INTL = "2348111235862";

export const formatNaira = (n: number) => "₦" + n.toLocaleString("en-NG");

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(message)}`;

export function buildOrderMessage(items: CartLine[], total: number, customer?: { name?: string; phone?: string; address?: string; city?: string; state?: string; notes?: string }) {
  const lines = items
    .map((l, i) => `${i + 1}. ${l.product.name} x${l.qty} — ${formatNaira(l.product.price * l.qty)}`)
    .join("\n");
  const cust = customer
    ? `\n*Customer:* ${customer.name || "-"}\n*Phone:* ${customer.phone || "-"}\n*Address:* ${customer.address || "-"}\n*City:* ${customer.city || "-"}\n*State:* ${customer.state || "-"}${customer.notes ? `\n*Notes:* ${customer.notes}` : ""}`
    : "";
  return `*NEW ORDER — DUKES GAMING GADGET*\n━━━━━━━━━━━━━━━\n${lines}\n━━━━━━━━━━━━━━━\n*TOTAL: ${formatNaira(total)}*\n${cust}\n\nSent from dukesgaminggadget.com`;
}

export interface CartLine {
  product: Product;
  qty: number;
}

export const DELIVERY_FEE = 1500;
export const FREE_DELIVERY_THRESHOLD = 50000;

interface Toast {
  id: number;
  msg: string;
  tone: "gold" | "blue";
}

interface StoreState {
  cart: { id: string; qty: number }[];
  lines: CartLine[];
  cartCount: number;
  subtotal: number;
  delivery: number;
  total: number;
  addToCart: (id: string, qty?: number, silent?: boolean) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  toasts: Toast[];
  showToast: (msg: string, tone?: "gold" | "blue") => void;
}

const StoreContext = createContext<StoreState | null>(null);

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<{ id: string; qty: number }[]>(() => load("dukes-cart", []));
  const [wishlist, setWishlist] = useState<string[]>(() => load("dukes-wishlist", []));
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    try { localStorage.setItem("dukes-cart", JSON.stringify(cart)); } catch { /* ignore */ }
  }, [cart]);
  useEffect(() => {
    try { localStorage.setItem("dukes-wishlist", JSON.stringify(wishlist)); } catch { /* ignore */ }
  }, [wishlist]);

  const showToast = useCallback((msg: string, tone: "gold" | "blue" = "gold") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t.slice(-2), { id, msg, tone }]);
    window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  }, []);

  const addToCart = useCallback((id: string, qty = 1, silent = false) => {
    setCart((c) => {
      const found = c.find((x) => x.id === id);
      if (found) return c.map((x) => (x.id === id ? { ...x, qty: Math.min(99, x.qty + qty) } : x));
      return [...c, { id, qty }];
    });
    if (!silent) {
      const p = getProduct(id);
      showToast(`${p?.name ?? "Item"} added to cart`, "blue");
    }
  }, [showToast]);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((c) =>
      qty <= 0 ? c.filter((x) => x.id !== id) : c.map((x) => (x.id === id ? { ...x, qty: Math.min(99, qty) } : x))
    );
  }, []);

  const removeFromCart = useCallback((id: string) => setCart((c) => c.filter((x) => x.id !== id)), []);
  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((w) => {
      const has = w.includes(id);
      const p = getProduct(id);
      showToast(has ? `${p?.name ?? "Item"} removed from wishlist` : `${p?.name ?? "Item"} saved to wishlist`, has ? "blue" : "gold");
      return has ? w.filter((x) => x !== id) : [...w, id];
    });
  }, [showToast]);

  const lines = useMemo<CartLine[]>(
    () =>
      cart
        .map((c) => ({ product: getProduct(c.id), qty: c.qty }))
        .filter((l): l is CartLine => Boolean(l.product)),
    [cart]
  );

  const cartCount = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines]);
  const subtotal = useMemo(() => lines.reduce((s, l) => s + l.product.price * l.qty, 0), [lines]);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  const value: StoreState = {
    cart, lines, cartCount, subtotal, delivery, total,
    addToCart, setQty, removeFromCart, clearCart,
    wishlist, toggleWishlist, toasts, showToast,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreState {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

export function useWishlistProducts(): Product[] {
  const { wishlist } = useStore();
  return PRODUCTS.filter((p) => wishlist.includes(p.id));
}
