import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => (
    <footer className="bg-gray-50 pt-16 md:pt-20 pb-8 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
                <div className="space-y-4 max-w-sm text-right">
                    <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                        <img src="/src/assets/logo.png" alt="Sepros Logo" className="h-8 md:h-10 object-contain filter invert opacity-90" />
                    </Link>
                    <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed pt-2">
                        ספרוס דיגיטל. <br /> לא רק עוקבים אחרי טרנדים. אנחנו מייצרים אותם.
                    </p>
                    <div className="flex gap-4">
                        <button className="w-8 h-8 border border-gray-300 text-gray-600 flex items-center justify-center rounded-full hover:bg-[#2f4ea1] hover:text-white transition-all"><Linkedin size={14} /></button>
                        <button className="w-8 h-8 border border-gray-300 text-gray-600 flex items-center justify-center rounded-full hover:bg-[#2f4ea1] hover:text-white transition-all"><Instagram size={14} /></button>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-right w-full lg:w-auto">
                    <div className="space-y-4">
                        <h4 className="text-gray-900 font-black tracking-widest text-[10px] border-b border-gray-200 pb-2 inline-block">מחלקות</h4>
                        <ul className="space-y-2 text-gray-600 font-bold text-xs md:text-sm">
                            <li><Link to="/department/ppc" className="hover:text-[#2f4ea1] transition-colors">PPC וביצועים</Link></li>
                            <li><Link to="/department/social" className="hover:text-[#2f4ea1] transition-colors">סושיאל וקריאייטיב</Link></li>
                            <li><Link to="/department/design" className="hover:text-[#2f4ea1] transition-colors">סטודיו ו-UX/UI</Link></li>
                            <li><Link to="/department/tech" className="hover:text-[#2f4ea1] transition-colors">פיתוח אתרים</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-gray-900 font-black tracking-widest text-[10px] border-b border-gray-200 pb-2 inline-block">חברה</h4>
                        <ul className="space-y-2 text-gray-600 font-bold text-xs md:text-sm">
                            <li><Link to="/about" className="hover:text-[#2f4ea1] transition-colors">אודות הסוכנות</Link></li>
                            <li><Link to="/articles" className="hover:text-[#2f4ea1] transition-colors">מאמרים</Link></li>
                            <li><Link to="/careers" className="hover:text-[#2f4ea1] transition-colors">קריירה (דרושים)</Link></li>
                            <li><Link to="/contact" className="hover:text-[#2f4ea1] transition-colors">צרו קשר</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-gray-900 font-black tracking-widest text-[10px] border-b border-gray-200 pb-2 inline-block">משפטי</h4>
                        <ul className="space-y-2 text-gray-600 font-bold text-xs md:text-sm">
                            <li><button className="hover:text-gray-900 transition-colors">תנאי שימוש</button></li>
                            <li><Link to="/privacy" className="hover:text-gray-900 transition-colors">מדיניות פרטיות</Link></li>
                            <li><button className="hover:text-gray-900 transition-colors">הצהרת נגישות</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-6 border-t border-gray-200 flex justify-center text-[8px] md:text-[10px] font-bold tracking-widest text-gray-400">
                <p dir="ltr">© 2026 SEPROS DIGITAL GROUP. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
