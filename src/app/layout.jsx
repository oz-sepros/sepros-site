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
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.className} min-h-screen bg-white text-gray-900 selection:bg-[#2f4ea1] selection:text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
