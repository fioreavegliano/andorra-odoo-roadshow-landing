import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
