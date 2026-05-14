import { Heebo } from 'next/font/google';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const heebo = Heebo({ subsets: ['hebrew', 'latin'], weight: ['300', '400', '500', '700', '900'] });

export const metadata = {
  title: 'Sepros Digital',
  description: 'שיווק דיגיטלי שמביא תוצאות',
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sepros Digital",
    "url": "https://www.sepros.co.il",
    "logo": "https://www.sepros.co.il/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+972-9-886-3644",
      "contactType": "customer service",
      "email": "hello@sepros.co.il",
      "availableLanguage": "Hebrew"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "טשרניחובסקי 24",
      "addressLocality": "כפר סבא",
      "addressCountry": "IL"
    }
  };

  return (
    <html lang="he" dir="rtl">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className={`${heebo.className} min-h-screen bg-white text-gray-900 selection:bg-[#2f4ea1] selection:text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
