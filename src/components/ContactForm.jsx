"use client";
import { useState } from 'react'; 
import { trackEvent } from '../utils/analytics';
import { usePathname } from 'next/navigation';
import Reveal from './Reveal';

const ContactForm = ({ isMainSection = false }) => {
    const [formData, setFormData] = useState({ fullName: '', company: '', phone: '', email: '', msg: '' });
    const [status, setStatus] = useState('idle');
    const [formError, setFormError] = useState('');
    const pathname = usePathname();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        // Name validation (at least two words)
        const nameParts = formData.fullName.trim().split(/\s+/);
        if (nameParts.length < 2) {
            setFormError('נא להזין שם מלא (שם פרטי ושם משפחה).');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormError('נא להזין כתובת אימייל תקינה.');
            return;
        }

        // Name validation (at least two words)
        const nameParts = formData.fullName.trim().split(/\s+/);
        if (nameParts.length < 2) {
            setFormError('נא להזין שם מלא (שם פרטי ושם משפחה).');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormError('נא להזין כתובת אימייל תקינה.');
            return;
        }

        // Israeli phone validation (allow spaces or hyphens, check prefixes)
        const cleanPhone = formData.phone ? formData.phone.replace(/[\s-]/g, '') : '';
        const phoneRegex = /^(05\d|0[23489]|07\d)\d{7}$/;
        if (!phoneRegex.test(cleanPhone)) {
            setFormError('נא להזין מספר טלפון ישראלי תקין (לדוגמה: 050-1234567)');
            return;
        }

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
            params.append('phone', cleanPhone);
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

            // -- OPTION 1: MAKE.COM WEBHOOK (For Monday.com integration) --
            // To connect to Monday:
            // 1. Create a Custom Webhook in Make.com
            // 2. Paste the URL here:
            // const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/YOUR_WEBHOOK_ID';
            // await fetch(MAKE_WEBHOOK_URL, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({
            //         firstName,
            //         lastName,
            //         fullName: formData.fullName,
            //         phone: cleanPhone,
            //         email: formData.email,
            //         company: formData.company,
            //         message: formData.msg,
            //         utm_source: searchParams.get('utm_source'),
            //         utm_medium: searchParams.get('utm_medium'),
            //         utm_campaign: searchParams.get('utm_campaign')
            //     })
            // });

            // -- OPTION 2: CURRENT LEAD.IM INTEGRATION --
            await fetch(`https://api.lead.im/v2/submit?${params.toString()}`, {
                method: 'GET',
                mode: 'no-cors'
            });

            setStatus('success');
            setFormData({ fullName: '', company: '', phone: '', email: '', msg: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section className={`${isMainSection ? 'pb-12 md:pb-20' : 'py-12 md:py-20 border-t border-gray-100'} bg-white relative overflow-hidden text-right`} id="contact">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="flex flex-col order-2 lg:order-1 dir-rtl">
                        <Reveal>
                            <div className="mb-6 flex items-center justify-start gap-2 dir-rtl">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#2f4ea1]"></div>
                                <span className="text-[#2f4ea1] font-extrabold text-base tracking-widest uppercase">שותפים לדרך</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2f4ea1] mb-12 leading-tight">מוכנים <br /> <span>לגדול?</span></h2>
                        </Reveal>

                        <Reveal className="space-y-8">
                            <div className="flex flex-col items-start">
                                <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-md">השאירו פרטים והצוות שלנו יחזור אליכם בהקדם האפשרי עם כל המידע הדרוש למהלך הבא שלכם.</p>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal className="bg-white p-8 md:p-12 border border-gray-100 relative shadow-[0_20px_50px_rgba(47,78,161,0.08)] rounded-[2rem] order-1 lg:order-2 dir-rtl">
                        <form className="space-y-6 text-right" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#09102c] text-sm font-bold tracking-wide">שם מלא <span className="text-red-500">*</span></label>
                                    <input required type="text" value={formData.fullName} onChange={e => {setFormData({ ...formData, fullName: e.target.value }); setFormError('');}} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="ישראל ישראלי" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#09102c] text-sm font-bold tracking-wide">חברה</label>
                                    <input type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="שם העסק" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[#09102c] text-sm font-bold tracking-wide">טלפון <span className="text-red-500">*</span></label>
                                    <input required type="tel" value={formData.phone} onChange={e => {setFormData({ ...formData, phone: e.target.value }); setFormError('');}} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all dir-ltr text-right" placeholder="050-1234567" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#09102c] text-sm font-bold tracking-wide">אימייל עבודה <span className="text-red-500">*</span></label>
                                    <input required type="email" value={formData.email} onChange={e => {setFormData({ ...formData, email: e.target.value }); setFormError('');}} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="email@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[#09102c] text-sm font-bold tracking-wide">איך נוכל לעזור? <span className="text-red-500">*</span></label>
                                <textarea required rows="4" value={formData.msg} onChange={e => {setFormData({ ...formData, msg: e.target.value }); setFormError('');}} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all resize-none" placeholder="ספרו לנו על הפרויקט שלכם..."></textarea>
                            </div>
                            
                            {formError && <p className="text-red-500 text-sm font-bold mt-2">{formError}</p>}
                            
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
