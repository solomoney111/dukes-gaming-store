import { useEffect, useState } from "react";
import { StoreProvider } from "./lib/store";
import { useRoute } from "./lib/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { ToastHost } from "./components/ui";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function PageRouter() {
  const route = useRoute();
  const page = route.segments[0] ?? "";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [route.path]);

  switch (page) {
    case "":
      return <Home />;
    case "shop":
      return <Shop />;
    case "product":
      return <ProductDetails id={route.segments[1] ?? ""} />;
    case "categories":
      return <Categories />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    case "cart":
      return <Cart />;
    case "checkout":
      return <Checkout />;
    default:
      return <Home />;
  }
}

/* Ambient layered backdrop that sits behind every page */
function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_48%_at_12%_-4%,rgba(16,61,128,0.32),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_46%_38%_at_94%_12%,rgba(0,168,255,0.09),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_46%_at_50%_112%,rgba(16,61,128,0.26),transparent_66%)]" />
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 190px rgba(2,6,13,0.92)" }} />
    </div>
  );
}

/* Thin neon → gold scroll progress beam */
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[95] h-[3px]" aria-hidden="true">
      <div
        className="h-full origin-left bg-gradient-to-r from-electric via-neon to-gold shadow-[0_0_14px_rgba(0,168,255,0.7)]"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <div className="relative min-h-screen bg-ink text-frost antialiased">
        <AmbientBackdrop />
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgress />
        <div className="relative z-10">
          <Navbar />
          <main>
            <PageRouter />
          </main>
          <Footer />
        </div>
        <WhatsAppFloat />
        <ToastHost />
      </div>
    </StoreProvider>
  );
}
