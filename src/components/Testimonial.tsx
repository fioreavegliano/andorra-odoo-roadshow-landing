import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-odoo/10 to-bdr/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Casos de éxito en Andorra</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empresas andorranas que ya han transformado su negocio con Odoo.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto relative">
          <div className="absolute -top-6 left-8 bg-odoo text-white p-3 rounded-full">
            <Quote className="h-6 w-6" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-gray-200 rounded-lg h-48 w-full flex items-center justify-center">
                <p className="text-gray-500 font-medium">Logo empresa</p>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Implementar Odoo con BDR Informatica ha sido una de las mejores
                decisiones que hemos tomado. Hemos logrado automatizar procesos,
                centralizar la información y mejorar la productividad de nuestro
                equipo. El soporte local y personalizado ha sido clave para
                adaptar el sistema a nuestras necesidades específicas como
                empresa andorrana."
              </blockquote>

              <div className="flex items-center">
                <div className="bg-gray-200 h-12 w-12 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">María Rodríguez</p>
                  <p className="text-gray-600 text-sm">
                    Directora de Operaciones, Empresa Andorrana S.L.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Algunas empresas que confían en nosotros</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-white h-16 w-32 rounded-md shadow-md flex items-center justify-center">
                <p className="text-gray-400 text-sm">Cliente {item}</p>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Testimonial;
