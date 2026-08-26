"use client";
import AboutSection from '../components/AboutSection';
import StatsCounter from '../components/StatsCounter';
import ContactForm from '../components/ContactForm';

const About = () => {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.sepros.co.il/#organization",
        "name": "Sepros Digital",
        "url": "https://www.sepros.co.il",
        "logo": "https://www.sepros.co.il/logos/Logo.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "0528910085",
          "contactType": "customer service",
          "email": "ofir@sepros.co.il",
          "availableLanguage": "Hebrew"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "עתיר ידע 16",
          "addressLocality": "כפר סבא",
          "addressCountry": "IL"
        }
    };

    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://www.sepros.co.il/about/#webpage",
        "url": "https://www.sepros.co.il/about",
        "name": "אודות | ספרוס",
        "mainEntity": {
            "@id": "https://www.sepros.co.il/#organization"
        }
    };

    return (
        <div className="pt-4 md:pt-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
            <AboutSection isMainHeading={true} />
            <StatsCounter />
            <ContactForm />
        </div>
    );
};

export default About;

