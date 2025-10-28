import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-odoo via-odoo-dark to-bdr">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para transformar tu negocio?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Descubre cómo Odoo puede optimizar tus procesos y aumentar tu productividad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contacto">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Solicitar demo gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/pricing">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Ver precios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
