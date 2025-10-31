import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import contactBanner from "@/assets/contact-banner.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-64 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img 
            src={contactBanner} 
            alt="Contacto BDR Informática" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#091633]/80 via-[#7e57c5]/60 to-[#e81f76]/60"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-xl">
              Estamos aquí para ayudarte a transformar tu negocio con Odoo
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
