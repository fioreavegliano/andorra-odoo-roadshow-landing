import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Server, Shield, Zap, CloudCog, HeartHandshake, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Infrastructure = () => {
  const features = [
    {
      icon: Server,
      title: "Alta Disponibilidad",
      description: "Infraestructura redundante que garantiza el 99.9% de uptime para tu negocio."
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección de datos con encriptación, backups automáticos y protocolos de seguridad certificados."
    },
    {
      icon: Zap,
      title: "Rendimiento Optimizado",
      description: "Servidores de última generación optimizados específicamente para Odoo."
    },
    {
      icon: CloudCog,
      title: "Escalabilidad",
      description: "Crece sin límites. Nuestra infraestructura escala según tus necesidades."
    },
    {
      icon: HeartHandshake,
      title: "Soporte Local",
      description: "Equipo técnico en Andorra disponible para resolver cualquier incidencia."
    },
    {
      icon: Trophy,
      title: "Certificaciones",
      description: "Cumplimos con los estándares más exigentes de calidad y seguridad."
    }
  ];

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
                Infraestructura Robusta para tu Negocio
              </h1>
              <p className="text-xl mb-8">
                BDR Informática te ofrece una infraestructura de última generación, 
                diseñada específicamente para garantizar el máximo rendimiento y 
                seguridad de tu sistema Odoo.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Descripción Técnica</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nuestra infraestructura está construida sobre tecnología de vanguardia 
                para ofrecer el mejor servicio posible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 bg-odoo/10 text-odoo rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Beneficios de Nuestra Infraestructura
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Alojamiento en Andorra</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Tus datos se alojan en servidores ubicados en Andorra, garantizando 
                      el cumplimiento de las normativas locales de protección de datos y 
                      ofreciendo latencias mínimas para empresas andorranas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monitorización 24/7</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sistema de monitorización continua que detecta y previene problemas 
                      antes de que afecten a tu operativa. Nuestro equipo técnico está 
                      siempre alerta para garantizar el funcionamiento óptimo.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Backups Automáticos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Copias de seguridad automáticas diarias con retención de 30 días. 
                      Tus datos están siempre protegidos y pueden recuperarse en cualquier 
                      momento ante cualquier eventualidad.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Actualizaciones Sin Interrupciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mantenemos tu sistema Odoo actualizado con las últimas versiones 
                      y parches de seguridad, todo ello sin afectar la disponibilidad 
                      de tu servicio.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Infrastructure;
