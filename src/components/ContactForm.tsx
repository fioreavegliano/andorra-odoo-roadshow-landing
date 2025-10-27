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
import { CalendarDays, Mail, Phone, SendHorizonal } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
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
        title: "¡Gracias por tu mensaje!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      // Reset form
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
          "Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Completa el formulario y un consultor de BDR Informatica se pondrá
            en contacto contigo para ofrecerte una demo personalizada de Odoo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="lg:w-2/5 bg-odoo p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Contacta con nosotros</h3>
            <p className="mb-8">
              Estamos aquí para resolver todas tus dudas sobre Odoo y ayudarte a
              implementar la solución que mejor se adapte a tu negocio.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>odooleads@bdrinformatica.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-4" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p>+376 862 762</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-5 w-5 mr-4 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium">Oficina</p>
                  <p className="text-sm">
                    Passeig de l'Arnaldeta de Caboet, 11
                  </p>
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
                    Nombre completo *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formState.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre y apellidos"
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
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
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
                    Teléfono
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
                  ¿Qué te interesa? *
                </label>
                <Select
                  onValueChange={handleSelectChange}
                  defaultValue={formState.interes}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Información sobre Odoo</SelectItem>
                    <SelectItem value="demo">
                      Solicitar una demostración
                    </SelectItem>
                    <SelectItem value="roadshow">
                      Asistir al Roadshow
                    </SelectItem>
                    <SelectItem value="implementacion">
                      Implementar Odoo en mi empresa
                    </SelectItem>
                    <SelectItem value="migracion">
                      Migrar desde otro sistema
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formState.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos más sobre tus necesidades o cualquier pregunta que tengas"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-bdr hover:bg-bdr-light"
                disabled={isSubmitting}
              >
                <SendHorizonal className="h-4 w-4 mr-2" />
                {isSubmitting ? "Enviando..." : "Solicitar contacto"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, aceptas nuestra política de
                privacidad y el tratamiento de tus datos para contactarte.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
