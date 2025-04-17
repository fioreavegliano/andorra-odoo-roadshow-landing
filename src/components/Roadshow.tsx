
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const Roadshow = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Odoo Roadshow Andorra</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un evento exclusivo donde descubrirás todas las funcionalidades de Odoo y cómo puede transformar tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-odoo/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-odoo-dark">Detalles del evento</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-odoo text-white p-2 rounded-full mr-4 mt-1">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">Fecha</p>
                  <p className="text-gray-600">8 de Abril de 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-odoo text-white p-2 rounded-full mr-4 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">Ubicación</p>
                  <p className="text-gray-600">Hotels Hesperia Andorra S.A.</p>
                  <p className="text-gray-600">Carrer Prat Gran 3, 5</p>
                  <p className="text-gray-600">AD700 Andorra, Andorra</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-odoo text-white p-2 rounded-full mr-4 mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">Horario</p>
                  <p className="text-gray-600">17:30 - 21:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-odoo text-white p-2 rounded-full mr-4 mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold">Dirigido a</p>
                  <p className="text-gray-600">Empresarios, directivos, responsables de IT y profesionales interesados en mejorar la gestión de su empresa.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-odoo hover:bg-odoo-dark transition-colors w-full">
                Inscríbete al evento
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">¿Qué aprenderás?</h3>
            
            <ul className="space-y-4">
              {[
                "Cómo Odoo puede adaptarse a las necesidades específicas de tu empresa",
                "Demostraciones en vivo de los módulos más utilizados",
                "Casos de éxito de empresas andorranas que ya utilizan Odoo",
                "Comparativa con otros sistemas ERP del mercado",
                "Proceso de implementación y migración desde otros sistemas",
                "Novedades y actualizaciones de la última versión"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-bdr text-white p-1.5 rounded-full mr-3 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <h4 className="font-bold text-lg mb-2">¿No puedes asistir?</h4>
              <p className="text-gray-600 mb-4">
                Si no puedes asistir al evento, podemos organizar una demo personalizada en tu empresa o de forma virtual.
              </p>
              <Button variant="outline" className="border-bdr text-bdr hover:bg-bdr hover:text-white transition-colors">
                Solicita una demo privada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Roadshow;
