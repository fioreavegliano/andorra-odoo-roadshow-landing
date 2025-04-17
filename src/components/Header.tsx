
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-odoo-dark to-odoo py-16 md:py-20 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/a4506746-0054-4859-97f2-f76de8bfb875.png')] bg-center bg-cover"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="bg-white p-3 rounded-md shadow-lg">
              <h3 className="text-odoo-dark font-bold text-xl">BDR</h3>
            </div>
            <div className="bg-white p-3 rounded-md shadow-lg">
              <h3 className="text-odoo font-bold text-xl">odoo</h3>
            </div>
          </div>
          <Button className="bg-bdr hover:bg-bdr-light transition-colors">
            <Calendar className="w-4 h-4 mr-2" />
            Agenda tu demo gratuita
          </Button>
        </div>
        
        <div className="text-center md:text-left mt-10 md:w-3/4 lg:w-2/3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Descubre el ERP más completo en el evento tecnológico del año en Andorra
          </h1>
          <p className="text-lg md:text-xl mb-8">
            BDR Informatica, partner oficial de Odoo, te invita al Odoo Roadshow Andorra. 
            Descubre cómo impulsar tu negocio con el software de gestión empresarial líder en el mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-white text-odoo-dark hover:bg-gray-100 transition-colors text-base">
              Solicita información
            </Button>
            <Button className="bg-bdr hover:bg-bdr-light transition-colors text-base">
              Inscríbete al evento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
