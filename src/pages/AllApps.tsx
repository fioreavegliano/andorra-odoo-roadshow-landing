import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Calendar } from "lucide-react";

type AppItem = { name: string; desc: string; icon: string; img?: string };
type Category = { title: string; apps: AppItem[] };

const CATEGORIES: Category[] = [
  {
    title: "Lloc web",
    apps: [
      { name: "Lloc web", desc: "Creador de llocs web empresarials", icon: "🌐" },
      { name: "Comerç electrònic", desc: "Ven els teus productes en línia", icon: "🛒" },
      { name: "Blog", desc: "Publica articles, anuncis i notícies", icon: "📝" },
      { name: "Fòrum", desc: "Gestiona un fòrum de preguntes freqüents", icon: "💬" },
      { name: "eLearning", desc: "Gestiona i publica els teus cursos", icon: "🎓" },
      { name: "Xat en viu", desc: "Xateja amb els visitants del teu lloc web", icon: "💭" },
    ],
  },
  {
    title: "Vendes",
    apps: [
      { name: "CRM", desc: "Gestiona els teus leads i tanca oportunitats", icon: "🎯" },
      { name: "Vendes", desc: "De pressupostos a factures", icon: "📊" },
      { name: "Punt de venda", desc: "Interfície per a botigues i restaurants", icon: "🏪" },
      { name: "Subscripcions", desc: "Factures recurrents i renovacions", icon: "🔄" },
      { name: "Lloguer", desc: "Gestiona contractes, entregues i devolucions", icon: "📋" },
    ],
  },
  {
    title: "Finances",
    apps: [
      { name: "Comptabilitat", desc: "Gestiona la teva comptabilitat financera i analítica", icon: "📒" },
      { name: "Facturació", desc: "Factures i pagaments", icon: "🧾" },
      { name: "Despeses", desc: "Gestiona les despeses dels teus empleats", icon: "💳" },
      { name: "Documents", desc: "Gestió de documents", icon: "📁" },
      { name: "Fulls de càlcul", desc: "Documents i fulls de càlcul", icon: "📈" },
      { name: "Signatura electrònica", desc: "Signa documents en línia", icon: "✍️" },
    ],
  },
  {
    title: "Inventari i fabricació",
    apps: [
      { name: "Inventari", desc: "Gestiona el teu inventari i activitats de logística", icon: "📦" },
      { name: "Manufactura", desc: "Ordres de fabricació i llistes de materials", icon: "🏭" },
      { name: "PLM", desc: "Gestió del cicle de vida del producte", icon: "🔧" },
      { name: "Compres", desc: "Ordres de compra, licitacions i contractes", icon: "🛍️" },
      { name: "Manteniment", desc: "Monitoritza equips i gestiona sol·licituds", icon: "🔩" },
      { name: "Qualitat", desc: "Controla la qualitat dels teus productes", icon: "✅" },
    ],
  },
  {
    title: "Recursos humans",
    apps: [
      { name: "Empleats", desc: "Centralitza la informació dels teus empleats", icon: "👥" },
      { name: "Reclutament", desc: "Monitoritza el flux de reclutament", icon: "🔍" },
      { name: "Vacances", desc: "Assigna i fes seguiment de les absències", icon: "🏖️" },
      { name: "Avaluacions", desc: "Avalua els teus empleats", icon: "⭐" },
      { name: "Referències", desc: "Comparteix llocs de treball", icon: "🤝" },
      { name: "Flota", desc: "Gestiona la teva flota de vehicles", icon: "🚗" },
    ],
  },
  {
    title: "Màrqueting",
    apps: [
      { name: "Automatització de màrqueting", desc: "Campanyes de correu automatitzades", icon: "🤖" },
      { name: "Email màrqueting", desc: "Dissenya, envia i monitoritza correus", icon: "📧" },
      { name: "SMS màrqueting", desc: "Dissenya, envia i monitoritza SMS", icon: "📱" },
      { name: "Xarxes socials", desc: "Gestiona les teves xarxes socials", icon: "📣" },
      { name: "Esdeveniments", desc: "Publica esdeveniments i ven entrades", icon: "🎪" },
      { name: "Enquestes", desc: "Envia enquestes o comparteix-les en directe", icon: "📋" },
    ],
  },
  {
    title: "Serveis",
    apps: [
      { name: "Projectes", desc: "Organitza i planifica els teus projectes", icon: "📐" },
      { name: "Registre d'hores", desc: "Monitoritza el temps invertit en tasques", icon: "⏱️" },
      { name: "Servei extern", desc: "Programa i monitoritza operacions externes", icon: "🔧" },
      { name: "Suport al client", desc: "Monitoritza i soluciona tickets", icon: "🎧" },
      { name: "Planificació", desc: "Gestiona l'horari dels teus empleats", icon: "📅" },
      { name: "Cites", desc: "Permet que altres agendin reunions amb tu", icon: "🗓️" },
    ],
  },
  {
    title: "Productivitat",
    apps: [
      { name: "Converses", desc: "Xat, passarel·la de correus i canals privats", icon: "💬" },
      { name: "Aprovacions", desc: "Crea i valida sol·licituds d'aprovació", icon: "✔️" },
      { name: "IoT", desc: "Models bàsics i assistents per a IoT", icon: "📡" },
      { name: "VOIP", desc: "Fes i rep trucades", icon: "📞" },
      { name: "Articles", desc: "Gestiona la teva biblioteca d'informació", icon: "📚" },
    ],
  },
  {
    title: "Personalització",
    apps: [
      { name: "Studio", desc: "Crea i personalitza les teves pròpies aplicacions", icon: "🎨" },
    ],
  },
];

const CALENDLY_URL = "https://bdrinformatica.com/solicitar-cita";

export default function AllApps() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Totes les aplicacions Odoo | BDR Informàtica</title>
        <meta name="description" content="Descobreix totes les aplicacions Odoo disponibles: CRM, comptabilitat, inventari, RRHH, eCommerce i molt més." />
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Una aplicació per a cada necessitat
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Odoo ofereix +80 mòduls integrats perquè puguis gestionar tot el teu negoci des d'una sola plataforma.
            </p>
          </div>

          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="mb-14">
              <h2 className="text-2xl font-bold mb-6 border-b border-border pb-3">
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.apps.map((app) => (
                  <div
                    key={app.name}
                    className="group bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-accent transition-all duration-200"
                  >
                    <span className="text-3xl mb-3 block">{app.icon}</span>
                    <h3 className="font-semibold text-base mb-1">{app.name}</h3>
                    <p className="text-sm text-muted-foreground">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Final CTA */}
          <div className="text-center mt-10 py-16 bg-accent/10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Vols veure-ho en acció?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Agenda una demo personalitzada i descobreix com Odoo pot transformar el teu negoci.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <Calendar className="h-5 w-5" />
              Vull veure una demo
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
