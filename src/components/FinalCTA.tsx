import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-odoo via-odoo-dark to-bdr">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Preparat per transformar el teu negoci?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Descobreix com Odoo pot optimitzar els teus processos i augmentar la teva productivitat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contacto">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contacta'ns
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
