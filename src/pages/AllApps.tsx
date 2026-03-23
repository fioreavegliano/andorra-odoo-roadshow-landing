import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

type AppItem = { name: string; desc: string; icon: string; img?: string };
type Category = { title: string; apps: AppItem[] };

const CATEGORIES: Category[] = [
  {
    title: "Lloc web",
    apps: [
      { name: "Lloc web", desc: "Creador de llocs web empresarials", icon: "🌐" },
      { name: "Comerç electrònic", desc: "Ven els teus productes en línia", icon: "🛒", img: "/app-icons/comerc.svg" },
      { name: "Blog", desc: "Publica articles, anuncis i notícies", icon: "📝" },
      { name: "Fòrum", desc: "Gestiona un fòrum de preguntes freqüents", icon: "💬" },
      { name: "eLearning", desc: "Gestiona i publica els teus cursos", icon: "🎓" },
      { name: "Xat en viu", desc: "Xateja amb els visitants del teu lloc web", icon: "💭" },
    ],
  },
  {
    title: "Vendes",
    apps: [
      { name: "CRM", desc: "Gestiona els teus leads i tanca oportunitats", icon: "🎯", img: "/app-icons/crm.svg" },
      { name: "Vendes", desc: "De pressupostos a factures", icon: "📊" },
      { name: "Punt de venda", desc: "Interfície per a botigues i restaurants", icon: "🏪" },
      { name: "Subscripcions", desc: "Factures recurrents i renovacions", icon: "🔄" },
      { name: "Lloguer", desc: "Gestiona contractes, entregues i devolucions", icon: "📋" },
    ],
  },
  {
    title: "Finances",
    apps: [
      { name: "Comptabilitat", desc: "Gestiona la teva comptabilitat financera i analítica", icon: "📒", img: "/app-icons/comptabilitat.svg" },
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
      { name: "Inventari", desc: "Gestiona el teu inventari i activitats de logística", icon: "📦", img: "/app-icons/inventari.svg" },
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
      { name: "Reclutament", desc: "Monitoritza el flux de reclutament", icon: "🔍", img: "/app-icons/reclutament.svg" },
      { name: "Vacances", desc: "Assigna i fes seguiment de les absències", icon: "🏖️", img: "/app-icons/vacances.svg" },
      { name: "Avaluacions", desc: "Avalua els teus empleats", icon: "⭐" },
      { name: "Referències", desc: "Comparteix llocs de treball", icon: "🤝" },
      { name: "Flota", desc: "Gestiona la teva flota de vehicles", icon: "🚗" },
    ],
  },
  {
    title: "Màrqueting",
    apps: [
      { name: "Automatització de màrqueting", desc: "Campanyes de correu automatitzades", icon: "🤖", img: "/app-icons/automatitzacio-marqueting.svg" },
      { name: "Email màrqueting", desc: "Dissenya, envia i monitoritza correus", icon: "📧", img: "/app-icons/email-marqueting.svg" },
      { name: "SMS màrqueting", desc: "Dissenya, envia i monitoritza SMS", icon: "📱" },
      { name: "Xarxes socials", desc: "Gestiona les teves xarxes socials", icon: "📣", img: "/app-icons/xarxes-socials.svg" },
      { name: "Esdeveniments", desc: "Publica esdeveniments i ven entrades", icon: "🎪" },
      { name: "Enquestes", desc: "Envia enquestes o comparteix-les en directe", icon: "📋" },
    ],
  },
  {
    title: "Serveis",
    apps: [
      { name: "Projectes", desc: "Organitza i planifica els teus projectes", icon: "📐", img: "/app-icons/projectes.svg" },
      { name: "Registre d'hores", desc: "Monitoritza el temps invertit en tasques", icon: "⏱️", img: "/app-icons/registre-hores.svg" },
      { name: "Servei extern", desc: "Programa i monitoritza operacions externes", icon: "🔧" },
      { name: "Suport al client", desc: "Monitoritza i soluciona tickets", icon: "🎧", img: "/app-icons/suport-client.svg" },
      { name: "Planificació", desc: "Gestiona l'horari dels teus empleats", icon: "📅", img: "/app-icons/planificacio.svg" },
      { name: "Cites", desc: "Permet que altres agendin reunions amb tu", icon: "🗓️" },
    ],
  },
  {
    title: "Productivitat",
    apps: [
      { name: "Converses", desc: "Xat, passarel·la de correus i canals privats", icon: "💬", img: "/app-icons/converses.svg" },
      { name: "Aprovacions", desc: "Crea i valida sol·licituds d'aprovació", icon: "✔️" },
      { name: "IoT", desc: "Models bàsics i assistents per a IoT", icon: "📡" },
      { name: "VOIP", desc: "Fes i rep trucades", icon: "📞" },
      { name: "Articles", desc: "Gestiona la teva biblioteca d'informació", icon: "📚", img: "/app-icons/articles.svg" },
    ],
  },
  {
    title: "Personalització",
    apps: [
      { name: "Studio", desc: "Crea i personalitza les teves pròpies aplicacions", icon: "🎨", img: "/app-icons/studio.svg" },
    ],
  },
];

const CALENDLY_URL = "https://bdrinformatica.com/solicitar-cita";

function AppCard({ app, index }: { app: AppItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(16px)",
        transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${index * 60}ms, transform 500ms cubic-bezier(0.16,1,0.3,1) ${index * 60}ms`,
      }}
      className="group relative bg-card border border-border/60 rounded-2xl p-6 hover:shadow-lg hover:shadow-accent/8 hover:border-accent/40 transition-all duration-300 active:scale-[0.98]"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
          {app.img ? (
            <img src={app.img} alt={app.name} className="w-7 h-7" />
          ) : (
            <span className="text-xl leading-none">{app.icon}</span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-[0.95rem] text-foreground mb-0.5 leading-tight">{app.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{app.desc}</p>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ cat, catIndex }: { cat: Category; catIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${catIndex * 80}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${catIndex * 80}ms`,
      }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-7 rounded-full bg-accent" />
        <h2 className="text-xl font-bold text-foreground tracking-tight">
          {cat.title}
        </h2>
        <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
          {cat.apps.length} {cat.apps.length === 1 ? "app" : "apps"}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cat.apps.map((app, i) => (
          <AppCard key={app.name} app={app} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function AllApps() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Totes les aplicacions Odoo | BDR Informàtica</title>
        <meta name="description" content="Descobreix totes les aplicacions Odoo disponibles: CRM, comptabilitat, inventari, RRHH, eCommerce i molt més." />
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Hero header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1a0a3e] via-[#6610f2] to-[#8b4ef9] py-20 md:py-28 mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,78,249,0.3),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Tornar a l'inici
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-3xl" style={{ lineHeight: "1.1" }}>
              Una aplicació per a cada necessitat
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Odoo ofereix +80 mòduls integrats perquè puguis gestionar tot el teu negoci des d'una sola plataforma.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => {
                    const el = document.getElementById(`cat-${cat.title}`);
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/10"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 max-w-6xl">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.title} id={`cat-${cat.title}`} className="scroll-mt-24">
              <CategorySection cat={cat} catIndex={i} />
            </div>
          ))}

          {/* Final CTA */}
          <div className="relative overflow-hidden text-center mt-8 py-20 rounded-3xl bg-gradient-to-br from-[#1a0a3e] to-[#6610f2]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,78,249,0.4),transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Vols veure-ho en acció?</h2>
              <p className="text-white/75 mb-8 max-w-xl mx-auto text-lg">
                Agenda una demo personalitzada i descobreix com Odoo pot transformar el teu negoci.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-[#6610f2] hover:bg-white/90 font-semibold px-8 py-4 rounded-xl transition-all text-lg shadow-lg shadow-black/20 active:scale-[0.97]"
              >
                <Calendar className="h-5 w-5" />
                Vull veure una demo
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
