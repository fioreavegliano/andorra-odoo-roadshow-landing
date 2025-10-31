import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Server, Shield, Zap, CloudCog, HeartHandshake, Trophy, Check, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import infrastructureHero from "@/assets/infrastructure-hero.jpg";

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

  const comparison = [
    {
      feature: "Hosting en Andorra",
      bdr: true,
      odooOnline: false,
      odooSh: false
    },
    {
      feature: "Soporte técnico local",
      bdr: true,
      odooOnline: false,
      odooSh: false
    },
    {
      feature: "Backups diarios",
      bdr: true,
      odooOnline: true,
      odooSh: true
    },
    {
      feature: "Personalizaciones ilimitadas",
      bdr: true,
      odooOnline: false,
      odooSh: true
    },
    {
      feature: "99.9% uptime garantizado",
      bdr: true,
      odooOnline: true,
      odooSh: true
    },
    {
      feature: "Precio competitivo",
      bdr: true,
      odooOnline: true,
      odooSh: false
    },
    {
      feature: "Control total de la infraestructura",
      bdr: true,
      odooOnline: false,
      odooSh: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section with Image */}
        <section className="relative bg-gradient-to-r from-[#091633] via-[#7e57c5] to-[#e81f76] py-20 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={infrastructureHero} 
              alt="Infraestructura moderna" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
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

        {/* Comparison Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comparativa de Infraestructuras</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Descubre por qué nuestra infraestructura on-premise es la mejor opción para tu empresa en Andorra
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#091633] to-[#7e57c5] text-white">
                    <th className="py-4 px-6 text-left">Características</th>
                    <th className="py-4 px-6 text-center">BDR On-Premise</th>
                    <th className="py-4 px-6 text-center">Odoo Online</th>
                    <th className="py-4 px-6 text-center">Odoo.sh</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#7e57c5]/5 transition-colors`}
                    >
                      <td className="py-4 px-6 font-medium">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {item.bdr ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {item.odooOnline ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {item.odooSh ? (
                          <Check className="h-6 w-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-[#7e57c5]">
                  <CardHeader>
                    <div className="h-12 w-12 bg-gradient-to-br from-[#7e57c5] to-[#e81f76] text-white rounded-full flex items-center justify-center mb-4">
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
