import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, SendHorizonal } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    interes: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interes: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert([formState]);
      if (error) throw error;

      toast({
        title: "Gràcies pel teu missatge!",
        description: "Ens posarem en contacte amb tu aviat.",
      });

      setFormState({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        interes: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "Hi ha hagut un error en enviar el formulari. Si us plau, torna-ho a intentar.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacte" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Porta la gestió de la teva empresa al següent nivell amb Odoo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descobreix com una plataforma única pot ajudar-te a treballar millor, créixer més ràpidament i prendre decisions més intel·ligents.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto bg-card rounded-xl overflow-hidden shadow-xl border border-border">
          <div className="lg:w-2/5 bg-odoo p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Contacta amb nosaltres</h3>
            <p className="mb-8">
              Estem aquí per resoldre tots els teus dubtes sobre Odoo i ajudar-te a implementar la solució que millor s'adapti al teu negoci.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-4" />
                <div>
                  <p className="font-medium">Correu electrònic</p>
                  <p>odooleads@bdrinformatica.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-4" />
                <div>
                  <p className="font-medium">Telèfon</p>
                  <p>+376 862 762</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-4 mt-0.5" />
                <div>
                  <p className="font-medium">Oficina</p>
                  <p className="text-sm">Passeig de l'Arnaldeta de Caboet, 11</p>
                  <p className="text-sm">AD700 Escaldes-Engordany</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium">
                    Nom complet *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formState.nombre}
                    onChange={handleChange}
                    required
                    placeholder="El teu nom i cognoms"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="empresa" className="text-sm font-medium">
                    Empresa *
                  </label>
                  <Input
                    id="empresa"
                    name="empresa"
                    value={formState.empresa}
                    onChange={handleChange}
                    required
                    placeholder="Nom de la teva empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correu electrònic *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium">
                    Telèfon
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formState.telefono}
                    onChange={handleChange}
                    placeholder="+376 XXX XXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interes" className="text-sm font-medium">
                  Què t'interessa? *
                </label>
                <Select
                  onValueChange={handleSelectChange}
                  defaultValue={formState.interes}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opció" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Informació sobre Odoo</SelectItem>
                    <SelectItem value="demo">Sol·licitar un demo</SelectItem>
                    <SelectItem value="implementacion">Implementar Odoo en la meva empresa</SelectItem>
                    <SelectItem value="migracion">Migrar des d'un altre sistema</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium">
                  Missatge
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formState.mensaje}
                  onChange={handleChange}
                  placeholder="Explica'ns més sobre les teves necessitats o qualsevol pregunta que tinguis"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-bdr hover:bg-bdr-light"
                disabled={isSubmitting}
              >
                <SendHorizonal className="h-4 w-4 mr-2" />
                {isSubmitting ? "Enviant..." : "Sol·licitar contacte"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En enviar aquest formulari, acceptes la nostra política de privadesa i el tractament de les teves dades per contactar-te.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
