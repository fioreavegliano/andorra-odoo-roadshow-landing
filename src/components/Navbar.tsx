import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Beneficis", href: "#beneficis" },
    { name: "Solucions", href: "#solucions" },
    { name: "Estalvi", href: "#estalvi" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacte", href: "#contacte" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center min-w-[150px] sm:min-w-[150px] lg:min-w-[180px]"
          >
            <img
              src="/LOGOTIPO_BDR_ODOO_CORPORATIVO_POSITIVO.svg"
              alt="Logotipo BDR Odoo"
              className="block h-12 w-auto"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-gray-700 hover:text-odoo transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacte"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacte"); }}
              className="flex text-white text-sm font-semibold bg-bdr hover:bg-bdr-light transition-colors p-2 rounded-lg px-4 whitespace-nowrap"
            >
              Sol·licita informació
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="block py-2 text-gray-700 hover:text-odoo transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full mt-4 bg-bdr hover:bg-bdr-light transition-colors"
              onClick={() => handleNavClick("#contacte")}
            >
              Sol·licita informació
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
