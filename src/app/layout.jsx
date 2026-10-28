import { Heebo } from 'next/font/google';
import Script from 'next/script';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';

const heebo = Heebo({ subsets: ['hebrew', 'latin'], weight: ['300', '400', '500', '700', '900'], display: 'swap', preload: true });

export const metadata = {
  metadataBase: new URL('https://www.sepros.co.il'),
  title: 'Sepros Digital',
  description: 'שיווק דיגיטלי שמביא תוצאות',
  openGraph: {
        images: ['/opengraph-image.jpg'],},
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Start cookieyes banner */}
        <Script id="cookieyes" src="https://cdn-cookieyes.com/client_data/32e34cbf98bf807aa868f28abb4fd710/script.js" strategy="afterInteractive"></Script>
        {/* End cookieyes banner */}
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCHVLRHR');`}</Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${heebo.className} min-h-screen bg-white text-gray-900 selection:bg-[#2f4ea1] selection:text-white antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PCHVLRHR" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
