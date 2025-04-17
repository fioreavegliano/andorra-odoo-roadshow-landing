
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">BDR Informatica</h3>
            <p className="text-gray-400 mb-4">
              Partner oficial de Odoo en Andorra. Especialistas en implementación y desarrollo de soluciones ERP para empresas andorranas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-bdr shrink-0 mt-0.5" />
                <span className="text-gray-400">Andorra la Vella, Principat d'Andorra</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-bdr shrink-0" />
                <span className="text-gray-400">+376 XXX XXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-bdr shrink-0" />
                <span className="text-gray-400">info@bdr.ad</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Beneficios de Odoo</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
              </li>
              <li>
                <a href="https://www.bdr.ad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Web de BDR</a>
              </li>
              <li>
                <a href="https://www.odoo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Web de Odoo</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir información sobre eventos y novedades de Odoo.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-bdr" 
              />
              <Button className="bg-bdr hover:bg-bdr-light rounded-l-none">
                Enviar
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BDR Informatica. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos y condiciones</a>
              <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
