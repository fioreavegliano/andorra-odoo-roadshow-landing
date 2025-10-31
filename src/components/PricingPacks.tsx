// PricingPacks.tsx
import { Check, Sparkles, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pricingGrowth from "@/assets/pricing-growth.png";

import React from "react";
import { Link } from "react-router-dom";

const CALENDLY_URL = "https://bdrinformatica.com/solicitar-cita";

type Pack = {
  id: string;
  seats?: number; // undefined para Custom
  title: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel: string;
  featured?: boolean; // resalta el del medio
  hoverTilt?: string; // rotación/tilt opcional
};

const BASE_FEATURES = [
  "Implementación guiada por BDR",
  "Soporte y actualizaciones",
  "Integraciones esenciales",
  "Formación inicial",
];

const PACKS: Pack[] = [
  {
    id: "pack-10",
    seats: 10,
    title: "Pack 10",
    subtitle: "Hasta 10 usuarios",
    ctaHref: "/contacto?pack=10",
    ctaLabel: "Consultar Pack 10",
    hoverTilt: "-rotate-[0.6deg]",
  },
  {
    id: "pack-15",
    seats: 15,
    title: "Pack 15",
    subtitle: "Hasta 15 usuarios",
    ctaHref: "/contacto?pack=15",
    ctaLabel: "Consultar Pack 15",
    hoverTilt: "-rotate-[0.4deg]",
  },
  {
    id: "pack-20",
    seats: 20,
    title: "Pack 20",
    subtitle: "El más elegido",
    ctaHref: "/contacto?pack=20",
    ctaLabel: "Consultar Pack 20",
    featured: true,
  },
  {
    id: "pack-25",
    seats: 25,
    title: "Pack 25",
    subtitle: "Hasta 25 usuarios",
    ctaHref: "/contacto?pack=25",
    ctaLabel: "Consultar Pack 25",
    hoverTilt: "rotate-[0.4deg]",
  },
  {
    id: "custom",
    title: "Custom",
    subtitle: "A medida para tu empresa",
    ctaHref: CALENDLY_URL,
    ctaLabel: "Agenda una demo",
    hoverTilt: "rotate-[0.6deg]",
  },
];

export default function PricingPacks() {
  return (
    // Hacemos la sección relativa para poder poner el fondo de puntitos detrás
    <section className="relative py-16 overflow-hidden">
      {/* Fondo de puntitos violeta difuminados */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-1 left-1/2 top-8 -translate-x-1/2"
      >
        <div
          className="rounded-full opacity-60"
          style={{
            width: "1100px",
            height: "520px",
            // patrón de puntos
            backgroundImage:
              "radial-gradient(rgba(124,58,237,0.35) 1px, transparent 1.5px)",
            backgroundSize: "14px 14px",
            backgroundPosition: "center",
            // difuminado suave en los bordes
            WebkitMaskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Planes y Precios</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tu empresa. Todos incluyen infraestructura, soporte y actualizaciones.
          </p>
        </div>

        {/* Grid con “perspectiva” y carta central destacada */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch
                     [perspective:1000px]"
        >
          {PACKS.map((p) => {
            const isFeatured = !!p.featured;
            return (
                <Card
                key={p.id}
                className={[
                  "relative group h-full flex flex-col transition-all duration-300",
                  "border-neutral-200 min-h-[500px] bg-white",
                  p.hoverTilt ? `hover:${p.hoverTilt}` : "",
                  isFeatured
                    ? "border-[#7e57c5] shadow-xl shadow-[#7e57c5]/20 lg:-translate-y-2 lg:scale-[1.02]"
                    : "hover:shadow-md",
                ].join(" ")}
              >
                <CardHeader className="pt-6 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold">
                      {p.title}
                    </CardTitle>
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#7e57c5] to-[#e81f76] text-white px-2 py-1 text-xs font-semibold">
                        <Star className="h-3.5 w-3.5" /> Más popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-600">{p.subtitle}</p>
                </CardHeader>

                <CardContent className="pb-6">
                  {/* “Incluye” */}
                  <ul className="space-y-2 mb-6">
                    {BASE_FEATURES.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 mt-0.5 text-[#1EAEDB]" />
                        <span className="text-neutral-700">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    {p.id === "custom" ? (
                      <Button
                        asChild
                        className="w-full relative bg-gradient-to-r from-[#7e57c5] to-[#e81f76] hover:opacity-90 text-white
                     before:absolute before:inset-0 before:rounded-lg
                     before:bg-[#7e57c5]/30 before:blur-xl before:opacity-70
                     hover:before:opacity-90 transition"
                      >
                        <a
                          href={p.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Sparkles className="mr-2 h-4 w-4" />
                          {p.ctaLabel}
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        className="w-full bg-[#1EAEDB] hover:bg-[#33C3F0] text-white"
                      >
                        <Link to={p.ctaHref}>{p.ctaLabel}</Link>
                      </Button>
                    )}

                    {p.seats && (
                      <p className="text-xs text-neutral-500 text-center mt-2">
                        {p.seats} usuarios incluidos · ampliable
                      </p>
                    )}
                  </div>
                </CardContent>

                <span
                  className={[
                    "pointer-events-none absolute inset-0 rounded-xl transition-opacity",
                    isFeatured
                      ? "ring-1 ring-[#7e57c5]/40"
                      : "group-hover:ring-1 group-hover:ring-[#7e57c5]/40",
                  ].join(" ")}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
