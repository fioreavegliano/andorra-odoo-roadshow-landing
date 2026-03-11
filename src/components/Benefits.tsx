import { Check, Shield, Zap, Layers, Users, TrendingUp } from "lucide-react";

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
    <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-105 h-full flex flex-col">
      <div className="h-12 w-12 bg-gradient-to-br from-[#7e57c5] to-[#e81f76] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center flex-grow">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: Layers,
      title: "Modular i personalitzable",
      description: "Adapta Odoo al teu negoci amb mòduls específics. Només implementa el que necessites."
    },
    {
      icon: Shield,
      title: "Open Source",
      description: "Tecnologia oberta, transparent i amb una comunitat activa de desenvolupadors."
    },
    {
      icon: TrendingUp,
      title: "Evolució constant",
      description: "Odoo es renova cada any amb millores en rendiment, disseny i funcionalitats per seguir liderant la gestió empresarial."
    },
    {
      icon: Users,
      title: "Solucions per indústria",
      description: "Odoo combina flexibilitat i tecnologia per oferir solucions adaptades a cada sector, optimitzant la gestió i el rendiment empresarial."
    },
    {
      icon: Zap,
      title: "Interfície intuïtiva",
      description: "Fàcil d'usar per a tots els empleats, reduint la corba d'aprenentatge."
    },
    {
      icon: Check,
      title: "Tot integrat",
      description: "CRM, inventari, comptabilitat, vendes, compres, recursos humans i més en una sola plataforma."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Per què Odoo?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descobreix per què Odoo és l'ERP més complet i adequat per a empreses andorranes de totes les mides i sectors.
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
