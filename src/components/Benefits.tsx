import { Eye, Zap, BarChart3, TrendingUp, Smile, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent transition-all duration-300 h-full flex flex-col">
      <div className="h-12 w-12 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Control 360°",
      description: "Gestiona vendes, finances, clients, projectes i inventari des d'una sola pantalla."
    },
    {
      icon: Zap,
      title: "Automatització intel·ligent",
      description: "Elimina errors manuals i redueix temps en tasques repetitives."
    },
    {
      icon: BarChart3,
      title: "Dades en temps real",
      description: "Pren decisions estratègiques basades en informació actualitzada, no en suposicions."
    },
    {
      icon: TrendingUp,
      title: "Escalabilitat",
      description: "Comença amb el que necessites avui i afegeix funcionalitats a mesura que el teu negoci s'expandeix, sense canviar mai d'eina."
    },
    {
      icon: Smile,
      title: "Interfície intuïtiva",
      description: "Oblida els programes antics i grisos. Gaudeix d'una eina fàcil d'aprendre i d'utilitzar per a tot el teu equip."
    },
    {
      icon: Link2,
      title: "Integració total",
      description: "Connecta totes les àrees de la teva empresa. Quan alguna cosa passa en vendes, comptabilitat ja ho sap."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/40 to-background" id="beneficis">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Per què Odoo?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Molt més que un ERP: l'avantatge competitiu que la teva empresa necessita
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="relative"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <BenefitCard 
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/contacto">
              <Button size="lg" className="bg-bdr hover:bg-bdr-light text-lg px-8">
                Contacta amb nosaltres
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
