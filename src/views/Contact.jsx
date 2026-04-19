import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 md:pt-32 pb-10 bg-[#FAFAFA] min-h-screen">
            {/* Page Header */}
            <div className="max-w-6xl mx-auto px-6 text-center mb-16 md:mb-24">
                 <Reveal>
                     <h1 className="text-5xl md:text-7xl font-black text-[#0b1638] mb-6">בואו נדבר.</h1>
                     <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto text-balance">מפרוייקטים טכנולוגיים מורכבים ועד בניית מותגים שמשנים שווקים – אנחנו כאן כדי להקשיב ולהפוך חזון למציאות.</p>
                 </Reveal>
            </div>

            {/* Contact Info Cards */}
            <div className="max-w-[1200px] mx-auto px-6 mb-20 md:mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Reveal delay={0.1} className="bg-white rounded-[2rem] p-8 md:p-10 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center group">
                         <div className="w-16 h-16 bg-[#2f4ea1]/5 text-[#2f4ea1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2f4ea1] group-hover:text-white transition-all">
                             <Mail size={32} />
                         </div>
                         <h4 className="text-xl font-bold text-[#0b1638] mb-2">שלחו מייל</h4>
                         <p className="text-gray-500 mb-4">מענה מהיר תוך 24 שעות</p>
                         <a href="mailto:hello@sepros.co.il" className="text-[#2f4ea1] font-black text-lg dir-ltr">hello@sepros.co.il</a>
                    </Reveal>

                    <Reveal delay={0.2} className="bg-white rounded-[2rem] p-8 md:p-10 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center group">
                         <div className="w-16 h-16 bg-[#2f4ea1]/5 text-[#2f4ea1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2f4ea1] group-hover:text-white transition-all">
                             <Phone size={32} />
                         </div>
                         <h4 className="text-xl font-bold text-[#0b1638] mb-2">דברו איתנו</h4>
                         <p className="text-gray-500 mb-4">ימים א'-ה', 09:30-18:00</p>
                         <a href="tel:098863644" className="text-[#2f4ea1] font-black text-lg dir-ltr">09-886-3644</a>
                    </Reveal>

                    <Reveal delay={0.3} className="bg-white rounded-[2rem] p-8 md:p-10 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center group border-b-4 border-b-[#2f4ea1]">
                         <div className="w-16 h-16 bg-[#2f4ea1]/10 text-[#2f4ea1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                             <MapPin size={32} />
                         </div>
                         <h4 className="text-xl font-bold text-[#0b1638] mb-2">המשרדים שלנו</h4>
                         <p className="text-gray-500 mb-4">קפה מעולה וחניה חופשית</p>
                         <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#2f4ea1] font-black text-lg hover:underline underline-offset-4">טשרניחובסקי 24, כפר סבא</a>
                    </Reveal>
                </div>
            </div>

            <div className="bg-white">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
