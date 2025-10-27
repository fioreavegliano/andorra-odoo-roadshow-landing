import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import {
  Check,
  Star,
  ShieldCheck,
  Settings2,
  Users2,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React from "react";

const CALENDLY_URL = "https://bdrinformatica.com/solicitar-cita"; // tu enlace

const packsHome = [
  {
    id: "pack-10",
    title: "Pack 10",
    users: 10,
    cta: "/contacto?pack=10",
    featured: false,
    tilt: "-rotate-[0.6deg]",
  },
  {
    id: "pack-15",
    title: "Pack 15",
    users: 15,
    cta: "/contacto?pack=15",
    featured: false,
    tilt: "-rotate-[0.4deg]",
  },
  {
    id: "pack-20",
    title: "Pack 20",
    users: 20,
    cta: "/contacto?pack=20",
    featured: true,
  },
  {
    id: "pack-25",
    title: "Pack 25",
    users: 25,
    cta: "/contacto?pack=25",
    featured: false,
    tilt: "rotate-[0.4deg]",
  },
  {
    id: "custom",
    title: "Custom",
    users: undefined,
    cta: CALENDLY_URL,
    featured: false,
    tilt: "rotate-[0.6deg]",
  },
];

const featuresBase = [
  "Implementación guiada por BDR",
  "Soporte y actualizaciones",
  "Integraciones esenciales",
  "Formación inicial",
];

const faqs = [
  {
    q: "¿Qué incluyen los precios?",
    a: "Licencias de Odoo, infraestructura de hosting, backups, actualizaciones, soporte técnico y formación inicial según el plan.",
  },
  {
    q: "¿Puedo cambiar de plan más adelante?",
    a: "Sí. Puedes escalar o ajustar tu plan cuando lo necesites, sin perder tus datos ni configuraciones.",
  },
  {
    q: "¿Hay costes adicionales?",
    a: "Solo en casos de desarrollos a medida o integraciones muy específicas. Siempre se cotiza previamente y con transparencia.",
  },
];

const Pricing = () => {
  const scrollToContact = () => (window.location.href = "/#contacto");

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />

      <main className="pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-r from-odoo-dark to-odoo py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Planes y Precios Transparentes
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Elige el plan que mejor se adapta a tu empresa. Todos los packs
              incluyen infraestructura, soporte y actualizaciones.
            </p>
          </div>
        </section>

        {/* POR QUÉ ELEGIR */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Por qué elegir BDR Informática?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Más allá del precio, sumamos experiencia, cercanía y calidad en
                la ejecución.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-b from-white to-odoo/5 border-odoo/20">
                  <CardHeader className="space-y-2">
                    <div className="h-10 w-10 rounded-full bg-odoo/15 text-odoo flex items-center justify-center mx-auto">
                      <Users2 className="h-5 w-5" />
                    </div>
                    <CardTitle>Soporte Local</CardTitle>
                    <CardDescription>
                      Equipo en Andorra, cercano a tu negocio.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-gradient-to-b from-white to-odoo/5 border-odoo/20">
                  <CardHeader className="space-y-2">
                    <div className="h-10 w-10 rounded-full bg-odoo/15 text-odoo flex items-center justify-center mx-auto">
                      <Settings2 className="h-5 w-5" />
                    </div>
                    <CardTitle>Personalización</CardTitle>
                    <CardDescription>
                      Adaptamos Odoo a tus procesos, no al revés.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-gradient-to-b from-white to-odoo/5 border-odoo/20">
                  <CardHeader className="space-y-2">
                    <div className="h-10 w-10 rounded-full bg-odoo/15 text-odoo flex items-center justify-center mx-auto">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <CardTitle>Formación & Éxito</CardTitle>
                    <CardDescription>
                      Equipos listos desde el primer día.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                Consulta precios oficiales de Odoo en{" "}
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

        {/* PLANES (mismo diseño que la home, con info de packsHome) */}
        <section className="relative py-16 overflow-hidden">
          {/* fondo de puntitos violeta sutil */}
          <div
            aria-hidden
            className="pointer-events-none absolute -z-10 left-1/2 top-10 -translate-x-1/2"
          >
            <div
              className="rounded-full opacity-60"
              style={{
                width: "1100px",
                height: "520px",
                backgroundImage:
                  "radial-gradient(rgba(124,58,237,0.25) 1px, transparent 1.5px)",
                backgroundSize: "14px 14px",
                backgroundPosition: "center",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)",
                maskImage:
                  "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)",
              }}
            />
          </div>

          <div className="container mx-auto px-4">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch
                         [perspective:1000px]"
            >
              {packsHome.map((p) => {
                const isFeatured = !!p.featured;
                const isCustom = p.id === "custom";
                return (
                  <Card
                    key={p.id}
                    className={[
                      "relative group h-full flex flex-col transition-all duration-300",
                      "border-neutral-200 min-h-[500px] bg-white",
                      p.tilt ? `hover:${p.tilt}` : "",
                      isFeatured
                        ? "border-violet-600 shadow-xl shadow-violet-200/40 lg:-translate-y-2 lg:scale-[1.02]"
                        : "hover:shadow-md",
                    ].join(" ")}
                  >
                    <CardHeader className="pt-6 pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold">
                          {p.title}
                        </CardTitle>
                        {isFeatured && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-violet-600 text-white px-2 py-1 text-xs font-semibold">
                            <Star className="h-3.5 w-3.5" /> Más popular
                          </span>
                        )}
                      </div>
                      <CardDescription className="text-sm text-neutral-600">
                        {isCustom
                          ? "A medida para tu empresa"
                          : `Hasta ${p.users} usuarios`}
                      </CardDescription>
                    </CardHeader>

                    {/* 👇 hace que el contenido crezca y el CTA baje */}
                    <CardContent className="pb-6 flex flex-col grow">
                      <ul className="space-y-2 mb-6">
                        {featuresBase.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check className="h-4 w-4 mt-0.5 text-bdr" />
                            <span className="text-neutral-700">{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA al final */}
                      <div className="mt-auto">
                        {isCustom ? (
                          <Button
                            asChild
                            className="w-full relative bg-violet-700 hover:bg-violet-700/90 text-white
                     before:absolute before:inset-0 before:rounded-lg
                     before:bg-violet-500/30 before:blur-xl before:opacity-70
                     hover:before:opacity-90 transition"
                          >
                            <a
                              href={p.cta}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Sparkles className="mr-2 h-4 w-4" />
                              Agenda una demo
                            </a>
                          </Button>
                        ) : (
                          <Button
                            asChild
                            className="w-full bg-bdr hover:bg-bdr/90 text-white"
                          >
                            <a href={p.cta}>Consultar {p.title}</a>
                          </Button>
                        )}

                        {p.users && (
                          <p className="text-xs text-neutral-500 text-center mt-2">
                            {p.users} usuarios incluidos · ampliable
                          </p>
                        )}
                      </div>
                    </CardContent>

                    <span
                      className={[
                        "pointer-events-none absolute inset-0 rounded-xl transition-opacity",
                        isFeatured
                          ? "ring-1 ring-violet-600/40"
                          : "group-hover:ring-1 group-hover:ring-violet-400/40",
                      ].join(" ")}
                    />
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CUSTOM PLAN (conservado, por si quieres mantener el bloque comercial) */}
        <section className="py-16 bg-gradient-to-r from-odoo-dark to-odoo text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                ¿Necesitas algo diferente?
              </h2>
              <p className="text-xl mb-8">
                Planes personalizados para más de 25 usuarios, módulos
                especiales o integraciones complejas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  className="bg-white text-odoo hover:bg-gray-100"
                >
                  Solicitar plan personalizado
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <a
                    href={CALENDLY_URL}
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

        {/* FAQ en acordeón */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Preguntas Frecuentes
              </h3>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border rounded-lg mb-3 px-4"
                  >
                    <AccordionTrigger className="text-left py-4 text-base text-gray-800">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
