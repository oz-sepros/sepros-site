import { Heebo } from 'next/font/google';
import Script from 'next/script';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const heebo = Heebo({ subsets: ['hebrew', 'latin'], weight: ['300', '400', '500', '700', '900'] });

export const metadata = {
  metadataBase: new URL('https://www.sepros.co.il'),
  title: 'Sepros Digital',
  description: 'שיווק דיגיטלי שמביא תוצאות',
  openGraph: {
    images: ['/logos/Logo.svg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Start cookieyes banner */}
        <Script id="cookieyes" src="https://cdn-cookieyes.com/client_data/32e34cbf98bf807aa868f28abb4fd710/script.js" strategy="afterInteractive"></Script>
        {/* End cookieyes banner */}
        <Script id="enable-accessibility" src="https://cdn.enable.co.il/licenses/enable-L37957xifecoynq-0519-82197/init.js" strategy="afterInteractive"></Script>
      </head>
      <body className={`${heebo.className} min-h-screen bg-white text-gray-900 selection:bg-[#2f4ea1] selection:text-white antialiased`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
