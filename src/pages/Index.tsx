import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import OdooSavingsSimulator from "@/components/OdooSavingsSimulator";
import SolutionsSection from "@/components/SolutionsSection";
import FAQSection from "@/components/FAQSection";
import PDEBanner from "@/components/PDEBanner";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />
      <Hero />
      <main>
        <Benefits />
        <SolutionsSection />
        <PDEBanner />
        <OdooSavingsSimulator />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-odoo hover:bg-odoo-dark text-white p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Tornar a dalt"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Index;
