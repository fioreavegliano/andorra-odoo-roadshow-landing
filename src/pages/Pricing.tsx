import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const packs = [
    {
      name: "Starter",
      users: 10,
      price: "Consultar",
      description: "Perfecto para pequeñas empresas que comienzan",
      features: [
        "10 usuarios incluidos",
        "Módulos básicos de CRM y Ventas",
        "Gestión de inventario",
        "Facturación electrónica",
        "Soporte estándar por email",
        "1 sesión de formación"
      ],
      recommended: false
    },
    {
      name: "Professional",
      users: 15,
      price: "Consultar",
      description: "Para empresas en crecimiento",
      features: [
        "15 usuarios incluidos",
        "Todos los módulos Starter",
        "Contabilidad completa",
        "Gestión de proyectos",
        "Portal de clientes",
        "Soporte prioritario",
        "3 sesiones de formación",
        "Personalización básica"
      ],
      recommended: true
    },
    {
      name: "Business",
      users: 20,
      price: "Consultar",
      description: "Solución completa para empresas establecidas",
      features: [
        "20 usuarios incluidos",
        "Todos los módulos Professional",
        "Gestión de fabricación",
        "MRP (Planificación de recursos)",
        "Gestión de almacenes múltiples",
        "Integraciones avanzadas",
        "Soporte premium 24/7",
        "5 sesiones de formación",
        "Personalización avanzada"
      ],
      recommended: false
    },
    {
      name: "Enterprise",
      users: 25,
      price: "Consultar",
      description: "Para grandes organizaciones",
      features: [
        "25 usuarios incluidos",
        "Todos los módulos Business",
        "Módulos personalizados",
        "Integración completa con sistemas existentes",
        "Gestor de cuenta dedicado",
        "SLA garantizado",
        "Formación ilimitada",
        "Desarrollo a medida",
        "Consultoría estratégica"
      ],
      recommended: false
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
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Planes y Precios Transparentes
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades de tu empresa. 
              Todos nuestros packs incluyen infraestructura, soporte y actualizaciones.
            </p>
          </div>
        </section>

        {/* Comparison with Odoo.com */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">¿Por qué elegir BDR Informática?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Además de los precios competitivos de Odoo, obtienes valor adicional:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Soporte Local</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Equipo técnico en Andorra que habla tu idioma y entiende tu negocio.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Personalización</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Adaptamos Odoo a tus procesos específicos, no al revés.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Formación Incluida</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Tus equipos estarán preparados desde el día uno.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Consulta los precios oficiales de Odoo en{" "}
                <a 
                  href="https://www.odoo.com/es/pricing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-odoo hover:underline"
                >
                  odoo.com/es/pricing
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packs.map((pack, index) => (
                <Card 
                  key={index} 
                  className={`relative ${pack.recommended ? "border-odoo border-2 shadow-xl" : ""}`}
                >
                  {pack.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-odoo text-white px-4 py-1">
                        <Star className="h-3 w-3 mr-1 inline" />
                        Recomendado
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{pack.name}</CardTitle>
                    <CardDescription>{pack.description}</CardDescription>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-odoo">{pack.price}</div>
                      <p className="text-sm text-muted-foreground mt-1">{pack.users} usuarios</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-odoo mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={scrollToContact}
                      className={`w-full ${
                        pack.recommended 
                          ? "bg-odoo hover:bg-odoo-dark" 
                          : "bg-gray-800 hover:bg-gray-700"
                      }`}
                    >
                      Solicitar información
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Plan */}
        <section className="py-16 bg-gradient-to-r from-odoo-dark to-odoo text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">¿Necesitas algo diferente?</h2>
              <p className="text-xl mb-8">
                Ofrecemos planes completamente personalizados para empresas con 
                necesidades específicas. Más de 25 usuarios, módulos especiales, 
                o integraciones complejas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="bg-white text-odoo hover:bg-gray-100 transition-colors"
                >
                  Solicitar plan personalizado
                </Button>
                <Button 
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a 
                    href="https://bdrinformatica.com/solicitar-cita" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Agendar cita con experto
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">¿Qué incluyen los precios?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Todos nuestros packs incluyen licencias de Odoo, infraestructura de hosting, 
                      backups, actualizaciones, soporte técnico y formación inicial según el plan elegido.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">¿Puedo cambiar de plan más adelante?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sí, puedes actualizar o cambiar tu plan en cualquier momento según las 
                      necesidades de tu empresa vayan evolucionando.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">¿Hay costes adicionales?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Los precios base incluyen todo lo necesario. Solo podrían haber costes 
                      adicionales por desarrollos muy específicos o integraciones complejas 
                      que se cotizarían previamente.
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

export default Pricing;
