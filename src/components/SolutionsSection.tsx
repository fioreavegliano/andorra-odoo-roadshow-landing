import { Briefcase, Calculator, Users, ShoppingCart, FolderKanban, UserCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SOLUTIONS = [
  {
    icon: Briefcase,
    title: "ERP / Gestió Integral",
    description: "Centralitza operacions, millora l'eficiència i aconsegueix una visió 360º del teu negoci.",
  },
  {
    icon: Calculator,
    title: "Comptabilitat",
    description: "Automatitza facturació, conciliacions i informes amb configuracions alineades amb la normativa del país.",
  },
  {
    icon: Users,
    title: "CRM – Gestió comercial",
    description: "Controla leads, oportunitats, clients i previsions de venda des d'un únic panell.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description: "Crea la teva botiga en línia totalment integrada amb l'inventari, vendes, logística i comptabilitat.",
  },
  {
    icon: FolderKanban,
    title: "Projectes i serveis",
    description: "Planifica, assigna recursos, registra temps i factura els teus serveis amb precisió absoluta.",
  },
  {
    icon: UserCheck,
    title: "Recursos Humans",
    description: "Gestiona treballadors, contractes i absències sota la normativa laboral andorrana des d'una plataforma eficient i fàcil d'utilitzar.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solucions" className="py-20 bg-gradient-to-b from-muted/40 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Una necessitat, un mòdul</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connecta tots els teus departaments en una sola plataforma i oblida't dels programes que no es parlen entre ells.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SOLUTIONS.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/aplicacions"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Descobreix-los tots
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
