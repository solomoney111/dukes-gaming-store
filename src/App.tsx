import { useEffect } from "react";
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

export default function App() {
  return (
    <StoreProvider>
      <div className="relative min-h-screen bg-ink text-frost antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>
          <PageRouter />
        </main>
        <Footer />
        <WhatsAppFloat />
        <ToastHost />
      </div>
    </StoreProvider>
  );
}
