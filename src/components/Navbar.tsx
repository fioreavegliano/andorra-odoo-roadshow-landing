import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Infraestructura", path: "/infraestructura" },
    { name: "Industrias", path: "/industrias" },
    { name: "Precios", path: "/precios" },
    { name: "Contacto", path: "/#contacto" },
  ];

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#contacto";
    } else {
      const contactSection = document.getElementById("contacto");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-4">
            <div className="bg-odoo-dark p-2 rounded-md">
              <span className="text-white font-bold text-lg">BDR</span>
            </div>
            <div className="bg-odoo p-2 rounded-md">
              <span className="text-white font-bold text-lg">odoo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.path === "/#contacto" ? (
                <button
                  key={item.name}
                  onClick={scrollToContact}
                  className="text-gray-700 hover:text-odoo transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-odoo transition-colors ${
                    location.pathname === item.path ? "text-odoo font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button className="bg-bdr hover:bg-bdr-light transition-colors">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              item.path === "/#contacto" ? (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToContact();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-odoo transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-gray-700 hover:text-odoo transition-colors ${
                    location.pathname === item.path ? "text-odoo font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button className="w-full mt-4 bg-bdr hover:bg-bdr-light transition-colors">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
