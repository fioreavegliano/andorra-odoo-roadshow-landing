
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("CTA rápido enviado:", { nombre, email });
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
    setIsOpen(false);
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
          >
            Solicitar información
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FloatingCTA;
