import { Building2, Store, Truck, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IndustriesPreview = () => {
  const industries = [
    {
      icon: Building2,
      title: "Construcció",
      description: "Control total d'obres, pressupostos i subcontractes"
    },
    {
      icon: Store,
      title: "TPV i Comerç",
      description: "Punt de venda integrat amb gestió completa"
    },
    {
      icon: Truck,
      title: "Distribució",
      description: "Logística i gestió de magatzems optimitzada"
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Des de botiga física a e-commerce integrat"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Solucions per indústria</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Odoo s'adapta perfectament a les necessitats específiques del teu sector,
            oferint funcionalitats dissenyades per optimitzar el teu negoci.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {industries.map((industry, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 bg-odoo/10 text-odoo rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            I molt més...
          </p>
          <Button asChild className="bg-odoo hover:bg-odoo-dark">
            <Link to="/industrias">
              Veure totes les indústries
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreview;
