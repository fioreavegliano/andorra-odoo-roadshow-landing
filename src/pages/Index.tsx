import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Savings from "@/components/Savings";
import IndustriesPreview from "@/components/IndustriesPreview";
import Testimonial from "@/components/Testimonial";
import Roadshow from "@/components/Roadshow";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import OdooSavingsSimulator from "@/components/OdooSavingsSimulator";
import PricingPacks from "@/components/PricingPacks";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Controlar la visibilidad del botón para volver arriba
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para volver al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />
      <Hero />
      <main>
        <Benefits />
        <PricingPacks />
        <IndustriesPreview />
        <Testimonial />
        <PartnersSection />
        <OdooSavingsSimulator />

        <FinalCTA />
      </main>
      <Footer />

      {/* Botón para volver arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-odoo hover:bg-odoo-dark text-white p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      <FloatingCTA />
    </div>
  );
};

export default Index;
