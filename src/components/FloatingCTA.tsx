
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            nombre,
            email,
            empresa: 'No especificada',
            telefono: 'No especificado',
            interes: 'CTA Rápido',
            mensaje: 'Solicitud de información rápida'
          }
        ]);

      if (error) throw error;

      toast({
        title: "¡Gracias por tu interés!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      setIsOpen(false);
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-odoo p-4 text-white relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="font-bold text-lg">¿Interesado en Odoo?</h3>
        <p className="text-sm">Solicita información sin compromiso</p>
      </div>
      
      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Input 
              placeholder="Nombre" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-bdr hover:bg-bdr-light transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Solicitar información"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FloatingCTA;
