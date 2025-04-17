
import { Helmet } from "react-helmet-async";

const SEO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Odoo Roadshow Andorra",
    "description": "Descubre el ERP más completo en el evento tecnológico del año en Andorra con BDR Informatica, partner oficial de Odoo.",
    "startDate": "2025-05-01T09:00",
    "endDate": "2025-05-01T18:00",
    "location": {
      "@type": "Place",
      "name": "Andorra la Vella",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Andorra la Vella",
        "addressRegion": "Andorra",
        "addressCountry": "AD"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "BDR Informatica",
      "url": "https://www.bdr.ad"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "performer": {
      "@type": "Organization",
      "name": "Odoo"
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BDR Informatica",
    "description": "Partner oficial de Odoo en Andorra. Especialistas en implementación y desarrollo de soluciones ERP para empresas andorranas.",
    "url": "https://www.bdr.ad",
    "telephone": "+376XXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Andorra la Vella",
      "addressCountry": "AD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.5063",
      "longitude": "1.5218"
    }
  };

  return (
    <Helmet>
      <link rel="canonical" href="https://odoo.ad" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
