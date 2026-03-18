import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <img
              src="/LOGOTIPO_BDR_ODOO_CORPORATIVO_POSITIVO.svg"
              alt="BDR Group"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Odoo Andorra és una solució implementada per BDR Group, experts a acompanyar a les empreses en la seva digitalització mitjançant tecnologies que impulsen eficiència i creixement.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/bdr-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bdrgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enllaços</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#beneficis"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beneficis
                </a>
              </li>
              <li>
                <a
                  href="#solucions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Solucions
                </a>
              </li>
              <li>
                <a
                  href="#contacte"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacte
                </a>
              </li>
              <li>
                <a
                  href="https://www.odoo.com/es_es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web Odoo España
                </a>
              </li>
              <li>
                <a
                  href="https://www.bdrinformatica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web BDR Group
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacte</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-bdr shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Passeig de l'Arnaldeta de Caboet, 11<br />
                  AD700 Escaldes-Engordany, Andorra
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-bdr shrink-0" />
                <span className="text-gray-400">+376 862 762</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-bdr shrink-0" />
                <span className="text-gray-400">odooleads@bdrinformatica.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BDR Group. Tots els drets reservats.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Política de privadesa
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Avís legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
