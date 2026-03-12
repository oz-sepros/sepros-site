import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Reveal from './Reveal';

const ContactForm = () => {
    const [formData, setFormData] = useState({ fullName: '', company: '', email: '', msg: '' });
    const [status, setStatus] = useState('idle');
    const location = useLocation();

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
        <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden" id="contact">
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#4e77fc]/50 to-transparent"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="text-right flex flex-col order-2 lg:order-1">
                        <Reveal>
                            <h2 className="text-[#4e77fc] font-black tracking-widest text-sm mb-4">יצירת קשר</h2>
                            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-16 italic leading-[0.85]">מוכנים <br /> <span className="text-[#4e77fc]">לגדול?</span></h3>
                        </Reveal>

                        <Reveal className="space-y-8">
                            <div className="group cursor-pointer">
                                <p className="text-gray-500 text-[10px] font-black tracking-widest mb-1">דברו איתנו</p>
                                <p className="text-white text-2xl md:text-3xl font-black group-hover:text-[#4e77fc] transition-colors dir-ltr text-right">03-6253333</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-gray-500 text-[10px] font-black tracking-widest mb-1">שלחו מייל</p>
                                <p className="text-white text-2xl md:text-3xl font-black group-hover:text-[#4e77fc] transition-colors italic">HELLO@SEPROS.CO.IL</p>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal className="bg-[#0a0a0a] p-6 md:p-10 border border-white/5 relative shadow-2xl rounded-sm order-1 lg:order-2">
                        <form className="space-y-5 text-right" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1">
                                    <label className="text-gray-500 text-[10px] font-black tracking-widest">שם מלא</label>
                                    <input required type="text" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors" placeholder="ישראל ישראלי" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-gray-500 text-[10px] font-black tracking-widest">חברה</label>
                                    <input type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors" placeholder="שם העסק" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1">
                                    <label className="text-gray-500 text-[10px] font-black tracking-widest">טלפון</label>
                                    <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors dir-ltr text-right" placeholder="050-0000000" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-gray-500 text-[10px] font-black tracking-widest">אימייל עבודה</label>
                                    <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors" placeholder="email@company.com" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-gray-500 text-[10px] font-black tracking-widest">איך נוכל לעזור?</label>
                                <textarea required rows="3" value={formData.msg} onChange={e => setFormData({ ...formData, msg: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors" placeholder="ספרו לנו על הפרויקט שלכם..."></textarea>
                            </div>
                            <button type="submit" id="submit_lead_form" disabled={status === 'loading' || status === 'success'} className={`w-full text-white font-black py-4 tracking-widest text-sm transition-all ${status === 'success' ? 'bg-green-500' : status === 'error' ? 'bg-red-500' : 'bg-[#4e77fc] hover:bg-white hover:text-black'}`}>
                                {status === 'loading' ? 'שולח...' : status === 'success' ? 'הפנייה נשלחה בהצלחה!' : status === 'error' ? 'שגיאה בשליחה' : 'שליחת פנייה'}
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
