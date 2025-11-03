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
      title: "Modular y Personalizable",
      description: "Adapta Odoo a tu negocio con módulos específicos. Solo implementa lo que necesitas."
    },
    {
      icon: Shield,
      title: "Open Source",
      description: "Tecnología abierta, transparente y con una comunidad activa de desarrolladores."
    },
    {
      icon: TrendingUp,
      title: "Evolución constante",
      description: "Odoo se renueva cada año con mejoras en rendimiento, diseño y funcionalidades para seguir liderando la gestión empresarial."
    },
    {
      icon: Users,
      title: "Soluciones por Industria",
      description: "Odoo combina flexibilidad y tecnología para ofrecer soluciones adaptadas a cada sector, optimizando la gestión y el rendimiento empresarial."
    },
    {
      icon: Zap,
      title: "Interfaz intuitiva",
      description: "Fácil de usar para todos los empleados, reduciendo la curva de aprendizaje."
    },
    {
      icon: Check,
      title: "Todo integrado",
      description: "CRM, inventario, contabilidad, ventas, compras, recursos humanos y más en una sola plataforma."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">¿Por qué Odoo?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre por qué Odoo es el ERP más completo y adecuado para empresas andorranas de todos los tamaños y sectores.
          </p>
        </div>
        
        {/* Circular Layout with Odoo Logo in Center */}
        <div className="relative max-w-5xl mx-auto">
          {/* Benefits grid */}
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