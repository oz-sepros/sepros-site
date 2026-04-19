"use client";
import { useState } from 'react'; 
import { trackEvent } from '../utils/analytics';
import { usePathname } from 'next/navigation';
import Reveal from './Reveal';

const ContactForm = () => {
    const [formData, setFormData] = useState({ fullName: '', company: '', email: '', msg: '' });
    const [status, setStatus] = useState('idle');
    const pathname = usePathname();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const searchParams = new URLSearchParams(location.search);

            const nameParts = formData.fullName.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            const params = new URLSearchParams();
            params.append('lm_form', '79215');
            params.append('lm_key', 'e674d603b1');
            params.append('lm_redirect', 'no');
            params.append('name', firstName);
            params.append('lname', lastName);
            params.append('email', formData.email);
            params.append('msg', formData.msg);
            params.append('fld_289978', formData.company);

            const trackingFields = [
                'device', 'network', 'adgroup_id', 'utm_source', 'utm_medium',
                'utm_campaign', 'utm_term', 'utm_content', 'creative', 'MediaTitle',
                'gclid', 'utm_platform', 'utm_campaignname', 'utm_campaignid',
                'utm_adgroupid', 'utm_adid', 'utm_device', 'utm_placement',
                'utm_network', 'utm_intrerest', 'utm_physical', 'utm_targetid',
                'utm_matchtype', 'utm_devicemodel', 'utm_keyword', 'utm_target',
                'fbclid', 'olid'
            ];

            trackingFields.forEach(field => {
                if (searchParams.has(field)) {
                    params.append(field, searchParams.get(field));
                }
            });

            await fetch(`https://api.lead.im/v2/submit?${params.toString()}`, {
                method: 'GET',
                mode: 'no-cors'
            });

            setStatus('success');
            setFormData({ fullName: '', company: '', email: '', msg: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden text-right border-t border-gray-100" id="contact">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="flex flex-col order-2 lg:order-1 dir-rtl">
                        <Reveal>
                            <div className="mb-6 flex items-center justify-start gap-2 dir-rtl">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#2f4ea1]"></div>
                                <span className="text-[#2f4ea1] font-extrabold text-base tracking-widest uppercase">שותפים לדרך</span>
                            </div>
                            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#09102c] mb-12 leading-tight">מוכנים <br /> <span className="text-[#2f4ea1]">לגדול?</span></h3>
                        </Reveal>

                        <Reveal className="space-y-10">
                            <div className="group cursor-pointer flex flex-col items-start w-3/4">
                                <p className="text-gray-500 text-sm font-bold tracking-widest mb-2 uppercase">שלחו מייל</p>
                                <p className="text-[#09102c] text-2xl md:text-3xl font-black group-hover:text-[#2f4ea1] transition-colors">HELLO@SEPROS.CO.IL</p>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal className="bg-white p-8 md:p-12 border border-gray-100 relative shadow-[0_20px_50px_rgba(47,78,161,0.08)] rounded-[2rem] order-1 lg:order-2 dir-rtl">
                        <form className="space-y-6 text-right" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#09102c] text-sm font-bold tracking-wide">שם מלא</label>
                                    <input required type="text" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="ישראל ישראלי" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#09102c] text-sm font-bold tracking-wide">חברה</label>
                                    <input type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="שם העסק" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#09102c] text-sm font-bold tracking-wide">טלפון</label>
                                    <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all dir-ltr text-right" placeholder="050-0000000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#09102c] text-sm font-bold tracking-wide">אימייל עבודה</label>
                                    <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="email@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[#09102c] text-sm font-bold tracking-wide">איך נוכל לעזור?</label>
                                <textarea required rows="4" value={formData.msg} onChange={e => setFormData({ ...formData, msg: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all resize-none" placeholder="ספרו לנו על הפרויקט שלכם..."></textarea>
                            </div>
                            <button type="submit" id="submit_lead_form" disabled={status === 'loading' || status === 'success'} className={`w-full mt-4 text-white font-black py-4 tracking-widest text-lg transition-all rounded-xl ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : status === 'error' ? 'bg-red-500 hover:bg-red-600' : 'bg-[#2f4ea1] hover:bg-[#1c3166] hover:-translate-y-1 shadow-lg hover:shadow-xl'}`}>
                                {status === 'loading' ? 'שולח...' : status === 'success' ? 'הפנייה נשלחה בהצלחה!' : status === 'error' ? 'שגיאה בשליחה' : 'בואו נדבר'}
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
