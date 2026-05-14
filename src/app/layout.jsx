import { Heebo } from 'next/font/google';
import Script from 'next/script';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const heebo = Heebo({ subsets: ['hebrew', 'latin'], weight: ['300', '400', '500', '700', '900'] });

export const metadata = {
  title: 'Sepros Digital',
  description: 'שיווק דיגיטלי שמביא תוצאות',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Start cookieyes banner */}
        <Script id="cookieyes" src="https://cdn-cookieyes.com/client_data/32e34cbf98bf807aa868f28abb4fd710/script.js" strategy="afterInteractive"></Script>
        {/* End cookieyes banner */}
      </head>
      <body className={`${heebo.className} min-h-screen bg-white text-gray-900 selection:bg-[#2f4ea1] selection:text-white antialiased`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
