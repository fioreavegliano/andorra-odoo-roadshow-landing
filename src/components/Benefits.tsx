
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
    <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
      <div className="h-12 w-12 bg-odoo/10 text-odoo rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
      icon: TrendingUp,
      title: "Escalable",
      description: "Crece con tu empresa. Añade funcionalidades a medida que tu negocio se expande."
    },
    {
      icon: Shield,
      title: "Open Source",
      description: "Tecnología abierta, transparente y con una comunidad activa de desarrolladores."
    },
    {
      icon: Users,
      title: "Ideal para PYMES andorranas",
      description: "Diseñado específicamente para satisfacer las necesidades de las empresas locales."
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
    <section className="py-16 bg-gray-50" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Beneficios de Odoo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre por qué Odoo es el ERP más completo y adecuado para empresas andorranas de todos los tamaños y sectores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
