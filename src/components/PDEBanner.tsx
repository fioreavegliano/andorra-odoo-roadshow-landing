import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const PDEBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-odoo via-odoo-dark to-bdr">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="flex justify-center mb-4">
          <Lightbulb className="h-10 w-10 text-yellow-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Sabies que el teu projecte pot estar subvencionat?
        </h2>
        <p className="text-lg text-white/90 mb-3">
          Som proveïdors acreditats del Programa de Digitalització d'Empreses (PDE) del Govern d'Andorra.
        </p>
        <p className="text-lg text-white/90 mb-8">
          Si vols implementar Odoo amb nosaltres, pots informar-te i optar a una subvenció de fins a 6.000 € per a cobrir els costos d'aquesta solució digital.
        </p>
        <a
          href="https://andorra-digital.com/pde/solucions-digitalitzacio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Informa't de les subvencions
          </Button>
        </a>
      </div>
    </section>
  );
};

export default PDEBanner;
