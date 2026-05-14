import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import { MapPin, Clock, Users } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 md:pt-32 pb-10 bg-white min-h-screen">
            <div className="mb-16">
                <ContactForm isMainSection={true} />
            </div>

            {/* Contact Info Cards */}
            <div className="max-w-[1200px] mx-auto px-6 mb-20 md:mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Reveal delay={0.1} className="bg-gray-50 rounded-[2rem] p-8 md:p-10 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center group">
                         <div className="w-16 h-16 bg-[#2f4ea1]/5 text-[#2f4ea1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                             <MapPin size={32} />
                         </div>
                         <h2 className="text-xl font-bold text-[#0b1638] mb-2">המשרדים שלנו</h2>
                         <p className="text-gray-500 mb-4">קפה מעולה וחניה חופשית</p>
                         <span className="text-[#2f4ea1] font-black text-lg">עתיר ידע 16, כפר סבא</span>
                    </Reveal>

                    <Reveal delay={0.2} className="bg-gray-50 rounded-[2rem] p-8 md:p-10 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center group border-b-4 border-b-[#2f4ea1]">
                         <div className="w-16 h-16 bg-[#2f4ea1]/5 text-[#2f4ea1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2f4ea1] group-hover:text-white transition-all">
                             <Clock size={32} />
                         </div>
                         <h2 className="text-xl font-bold text-[#0b1638] mb-2">שעות פעילות</h2>
                         <p className="text-gray-500 mb-4">ימים א'-ה'</p>
                         <span className="text-[#2f4ea1] font-black text-lg dir-ltr">09:30-18:00</span>
                    </Reveal>

                    <Reveal delay={0.3} className="bg-gray-50 rounded-[2rem] p-8 md:p-10 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center group">
                         <div className="w-16 h-16 bg-[#2f4ea1]/5 text-[#2f4ea1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2f4ea1] group-hover:text-white transition-all">
                             <Users size={32} />
                         </div>
                         <h2 className="text-xl font-bold text-[#0b1638] mb-2">קהילה</h2>
                         <p className="text-gray-500 mb-4">הישארו מעודכנים בחדשות שלנו</p>
                         <span className="text-[#2f4ea1] font-black text-lg">@sepros_digital</span>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;
