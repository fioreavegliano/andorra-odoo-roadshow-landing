import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative min-h-[500px] bg-gradient-to-br from-[#050b1a] via-[#4a2d7c] to-[#6b47a8] py-16 md:py-20 text-white overflow-hidden mt-16">
      <div className="absolute inset-0 opacity-30 bg-[url('/lovable-uploads/a4506746-0054-4859-97f2-f76de8bfb875.png')] bg-center bg-cover"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-left md:text-left mt-10 md:w-4/4 lg:w-3/3 mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Transforma Tu Negocio con Odoo
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-[950px]">
            BDR Informática, partner oficial de Odoo en Andorra, te ofrece el
            ERP más completo del mercado. <br /> Gestiona todas las áreas de tu
            empresa desde una única plataforma: ventas, inventario,
            contabilidad, proyectos y mucho más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start">
            <Link
              to=""
              onClick={(e) => {
                if (scrollToContact) {
                  e.preventDefault();
                  scrollToContact();
                }
              }}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md border bg-white text-odoo-dark hover:bg-gray-100 transition-colors text-base font-medium"
            >
              Solicita información
            </Link>

            <Link
              to=""
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-bdr hover:bg-bdr-light transition-colors text-base font-medium text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agenda tu demo gratuita
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
