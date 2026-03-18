import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Què és Odoo i per què és diferent d'altres ERP?",
    a: "Odoo és un ERP de codi obert amb més de 80 mòduls integrats que cobreixen totes les àrees del teu negoci: vendes, comptabilitat, inventari, RRHH, eCommerce i molt més. A diferència d'altres ERP, Odoo és modular: només implementes el que necessites, sense pagar per funcionalitats que no fas servir.",
  },
  {
    q: "Odoo s'adapta a la normativa andorrana?",
    a: "Sí. BDR Informàtica, com a partner oficial d'Odoo a Andorra, configura i adapta el sistema perquè compleixi amb la normativa fiscal, comptable i laboral del Principat.",
  },
  {
    q: "Quant de temps triga una implementació?",
    a: "Depèn de la complexitat del projecte. Una implementació estàndard pot estar operativa en 4-8 setmanes. Projectes més complexos amb personalitzacions avançades poden trigar entre 2 i 4 mesos.",
  },
  {
    q: "Puc migrar les meves dades des d'un altre sistema?",
    a: "Absolutament. El nostre equip s'encarrega de la migració completa de dades des del teu sistema actual (Excel, Sage, SAP, Quickbooks, etc.) cap a Odoo, garantint la integritat de tota la informació.",
  },
  {
    q: "Quin suport ofereix BDR després de la implementació?",
    a: "Oferim suport tècnic continu, formació per al teu equip, actualitzacions del sistema i acompanyament personalitzat per assegurar que treus el màxim rendiment d'Odoo.",
  },
  {
    q: "Odoo funciona al núvol o en local?",
    a: "Les dues opcions. Pots triar entre Odoo al núvol (SaaS), allotjament en servidors propis o una solució híbrida. BDR gestiona la infraestructura perquè tu et centris en el teu negoci.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Preguntes freqüents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostes a les preguntes més habituals sobre Odoo i els nostres serveis a Andorra.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
