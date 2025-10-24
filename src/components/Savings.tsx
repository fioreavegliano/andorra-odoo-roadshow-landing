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

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Comparativa de Costes</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Concepto</th>
                  <th className="text-center py-3 px-4">Múltiples Sistemas</th>
                  <th className="text-center py-3 px-4 text-odoo">Odoo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Software (mensual)</td>
                  <td className="text-center py-3 px-4">500€ - 2000€</td>
                  <td className="text-center py-3 px-4 text-odoo font-semibold">Consultar</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Integraciones</td>
                  <td className="text-center py-3 px-4">200€ - 800€</td>
                  <td className="text-center py-3 px-4 text-odoo font-semibold">Incluido</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Soporte técnico</td>
                  <td className="text-center py-3 px-4">100€ - 500€</td>
                  <td className="text-center py-3 px-4 text-odoo font-semibold">Incluido</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Formación</td>
                  <td className="text-center py-3 px-4">1000€+</td>
                  <td className="text-center py-3 px-4 text-odoo font-semibold">Incluido</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-3 px-4">Total estimado</td>
                  <td className="text-center py-3 px-4">1800€ - 4300€/mes</td>
                  <td className="text-center py-3 px-4 text-odoo">Desde 300€/mes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            * Precios orientativos. Contacta con nosotros para una cotización personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Savings;
