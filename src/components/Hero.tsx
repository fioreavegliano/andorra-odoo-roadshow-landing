import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative bg-gradient-to-r from-odoo-dark to-odoo py-16 md:py-20 text-white overflow-hidden mt-16">
      <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/a4506746-0054-4859-97f2-f76de8bfb875.png')] bg-center bg-cover"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center md:text-left mt-10 md:w-3/4 lg:w-2/3 mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Transforma Tu Negocio con Odoo
          </h1>
          <p className="text-lg md:text-xl mb-8">
            BDR Informática, partner oficial de Odoo en Andorra, te ofrece el ERP más completo 
            del mercado. Gestiona todas las áreas de tu empresa desde una única plataforma: 
            ventas, inventario, contabilidad, proyectos y mucho más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              onClick={scrollToContact}
              className="bg-white text-odoo-dark hover:bg-gray-100 transition-colors text-base"
            >
              Solicita información
            </Button>
            <Button 
              className="bg-bdr hover:bg-bdr-light transition-colors text-base"
              asChild
            >
              <a href="https://bdrinformatica.com/solicitar-cita" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Agenda tu demo gratuita
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
