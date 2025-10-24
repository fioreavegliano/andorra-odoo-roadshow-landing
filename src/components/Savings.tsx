import { TrendingDown, DollarSign, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Savings = () => {
  const savings = [
    {
      icon: DollarSign,
      title: "Reduce Costes Operativos",
      description: "Hasta un 40% de ahorro en comparación con sistemas tradicionales o múltiples herramientas desconectadas."
    },
    {
      icon: Clock,
      title: "Ahorra Tiempo",
      description: "Automatiza procesos repetitivos y ahorra hasta 20 horas semanales en tareas administrativas."
    },
    {
      icon: Users,
      title: "Un Solo Sistema",
      description: "Elimina la necesidad de múltiples suscripciones y reduce costes de formación y mantenimiento."
    },
    {
      icon: TrendingDown,
      title: "Sin Costes Ocultos",
      description: "Precio transparente con todo incluido: actualizaciones, soporte y backups sin sorpresas."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-odoo/5 to-bdr/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lo Que Te Ahorras con Odoo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Odoo no solo es una solución completa, es una inversión inteligente que reduce 
            significativamente tus costes operativos y mejora la eficiencia de tu empresa.
          </p>
          <Button 
            variant="link" 
            className="text-odoo"
            asChild
          >
            <a 
              href="https://www.odoo.com/es/pricing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver precios oficiales de Odoo →
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {savings.map((saving, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-odoo/10 text-odoo rounded-full flex items-center justify-center mx-auto mb-4">
                  <saving.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{saving.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{saving.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-8 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Comparativa de Costes</h3>
          <p className="text-center text-gray-300 mb-8">
            Compara el coste real de mantener múltiples sistemas vs. una solución integrada con Odoo
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Múltiples Sistemas Card */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-2">Múltiples Sistemas</h4>
                <p className="text-gray-400 text-sm">Soluciones fragmentadas y desconectadas</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-red-400 mb-1">1.800€ - 4.300€</div>
                <div className="text-gray-400 text-sm">/mes estimado</div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Software</span>
                  <span className="text-white font-semibold">500€ - 2.000€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Integraciones</span>
                  <span className="text-white font-semibold">200€ - 800€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Soporte técnico</span>
                  <span className="text-white font-semibold">100€ - 500€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Formación</span>
                  <span className="text-white font-semibold">1.000€+</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Mantenimiento</span>
                  <span className="text-white font-semibold">Variable</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start text-sm text-gray-400">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Datos fragmentados en múltiples plataformas</span>
                </div>
                <div className="flex items-start text-sm text-gray-400">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Múltiples proveedores y contratos</span>
                </div>
                <div className="flex items-start text-sm text-gray-400">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Costes ocultos en integraciones</span>
                </div>
                <div className="flex items-start text-sm text-gray-400">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Formación continua necesaria</span>
                </div>
              </div>
            </div>

            {/* Odoo Card */}
            <div className="bg-gradient-to-br from-odoo/20 to-bdr/20 border-2 border-odoo rounded-lg p-6 backdrop-blur-sm relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-odoo text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recomendado
                </span>
              </div>
              
              <div className="mb-6 mt-2">
                <h4 className="text-xl font-bold text-white mb-2">Odoo con BDR</h4>
                <p className="text-gray-300 text-sm">Todo en uno, completamente integrado</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-bdr mb-1">Desde 300€</div>
                <div className="text-gray-300 text-sm">/mes todo incluido</div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-200">Software completo</span>
                  <span className="text-white font-semibold">✓ Incluido</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-200">Integraciones</span>
                  <span className="text-white font-semibold">✓ Incluido</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-200">Soporte técnico</span>
                  <span className="text-white font-semibold">✓ Incluido</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-200">Formación</span>
                  <span className="text-white font-semibold">✓ Incluido</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-200">Actualizaciones</span>
                  <span className="text-white font-semibold">✓ Incluido</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-start text-sm text-gray-200">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-bdr flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Todos los datos centralizados</span>
                </div>
                <div className="flex items-start text-sm text-gray-200">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-bdr flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Un único proveedor y contrato</span>
                </div>
                <div className="flex items-start text-sm text-gray-200">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-bdr flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sin costes ocultos</span>
                </div>
                <div className="flex items-start text-sm text-gray-200">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-bdr flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Soporte local en Andorra</span>
                </div>
              </div>

              <Button className="w-full bg-bdr hover:bg-bdr-light text-white">
                Solicitar presupuesto
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-lg px-6 py-3">
              <TrendingDown className="h-5 w-5 text-green-400" />
              <span className="text-white font-semibold">Ahorro estimado: hasta 85% anual</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              * Precios orientativos basados en una implementación estándar. Contacta con nosotros para una cotización personalizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
