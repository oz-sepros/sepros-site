"use client";
import AboutSection from '../components/AboutSection';
import StatsCounter from '../components/StatsCounter';
import ContactForm from '../components/ContactForm';

const About = () => {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sepros Digital",
        "url": "https://www.sepros.co.il",
        "logo": "https://www.sepros.co.il/logo.png",
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

    return (
        <div className="pt-4 md:pt-8">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            <AboutSection isMainHeading={true} />
            <StatsCounter />
            <ContactForm />
        </div>
    );
};

export default About;

