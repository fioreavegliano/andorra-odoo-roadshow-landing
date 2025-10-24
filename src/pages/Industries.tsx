import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Store, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Construcción",
      description: "Soluciones completas para empresas constructoras",
      features: [
        "Gestión de presupuestos y ofertas",
        "Control de obras y proyectos",
        "Seguimiento de materiales y subcontratas",
        "Facturación por fases de obra",
        "Control de costes en tiempo real",
        "Gestión de maquinaria y equipos"
      ],
      benefits: "Optimiza la gestión de tus proyectos de construcción desde la oferta inicial hasta la entrega final. Control total sobre márgenes, costes y plazos."
    },
    {
      icon: Store,
      title: "TPV y Comercio",
      description: "Punto de Venta integrado para comercios y hostelería",
      features: [
        "TPV táctil e intuitivo",
        "Gestión de inventario en tiempo real",
        "Control de mesas y comandas (hostelería)",
        "Programa de fidelización de clientes",
        "Múltiples métodos de pago",
        "Integración con tienda online"
      ],
      benefits: "Sistema de punto de venta completo que sincroniza ventas, inventario y contabilidad en tiempo real. Ideal para comercios, restaurantes y hoteles."
    },
    {
      icon: MoreHorizontal,
      title: "Más Industrias",
      description: "Odoo se adapta a cualquier sector",
      features: [
        "Fabricación y producción",
        "Servicios profesionales",
        "Distribución y logística",
        "Retail y e-commerce",
        "Sector inmobiliario",
        "Y muchos más..."
      ],
      benefits: "¿Tu sector no está listado? Odoo es completamente modular y puede adaptarse a cualquier tipo de negocio. Contacta con nosotros para una solución personalizada.",
      isCustom: true
    }
  ];

  const scrollToContact = () => {
    window.location.href = "/#contacto";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-odoo-dark to-odoo py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Soluciones Odoo por Industria
              </h1>
              <p className="text-xl mb-8">
                Descubre cómo Odoo puede transformar la gestión de tu empresa, 
                adaptándose a las necesidades específicas de tu sector.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {industries.map((industry, index) => (
                <div key={index} className={`${index % 2 === 1 ? "bg-gray-50" : ""} py-12 -mx-4 px-4 rounded-lg`}>
                  <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-shrink-0">
                        <div className="h-20 w-20 bg-odoo/10 text-odoo rounded-full flex items-center justify-center">
                          <industry.icon className="h-10 w-10" />
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h2 className="text-3xl font-bold mb-4">{industry.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                          {industry.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <Card>
                            <CardHeader>
                              <CardTitle>Funcionalidades Clave</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2">
                                {industry.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-odoo mr-2">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardHeader>
                              <CardTitle>Beneficios</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground">{industry.benefits}</p>
                            </CardContent>
                          </Card>
                        </div>

                        {industry.isCustom ? (
                          <Button 
                            onClick={scrollToContact}
                            className="bg-odoo hover:bg-odoo-dark transition-colors"
                          >
                            Consultar mi caso
                          </Button>
                        ) : (
                          <Button 
                            onClick={scrollToContact}
                            className="bg-odoo hover:bg-odoo-dark transition-colors"
                          >
                            Solicitar más información
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-odoo-dark to-odoo text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿No encuentras tu industria?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Odoo es extremadamente flexible y puede adaptarse a cualquier sector. 
              Contacta con nosotros para descubrir cómo podemos ayudarte.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-odoo hover:bg-gray-100 transition-colors"
            >
              Hablar con un experto
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
