import Reveal from './Reveal';

const AboutSection = () => (
    <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <Reveal className="text-right">
                <div className="mb-6 flex items-center justify-start gap-2 dir-rtl">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2f4ea1] opacity-90"></div>
                    <span className="text-[#2f4ea1] font-extrabold text-base tracking-widest uppercase">על ספרוס</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 leading-tight">בוטיק של תוצאות <br /> <span>בעולם של דאטה.</span></h3>
                <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-8">
                    ספרוס הוקמה מתוך מטרה אחת: לגשר על הפער שבין קריאייטיב מרהיב למספרים בשורה התחתונה. אנחנו מאמינים שבעידן הנוכחי, שיווק דיגיטלי חייב להיות מבוסס נתונים אך מונע על ידי רגש.
                </p>
                <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12">
                    הצוות שלנו מורכב ממומחי PPC, אסטרטגים, מעצבי UX ומתכנתים שעובדים בסנכרון מלא. דיוק, חדשנות, והתאמה אישית - זה מה שאנחנו מביאים לשולחן המשותף שלנו.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                    <div>
                        <div className="text-4xl font-black text-[#2f4ea1] mb-2">100%</div>
                        <div className="text-gray-500 font-bold uppercase text-[11px] tracking-widest">מיקוד ב-ROI</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
                        <div className="text-gray-500 font-bold uppercase text-[11px] tracking-widest">ניטור דאטה</div>
                    </div>
                </div>
            </Reveal>
            <Reveal className="relative aspect-[4/3] lg:aspect-square">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="צוות ספרוס שיווק דיגיטלי - משרד פרסום מקצועי" loading="lazy" className="w-full h-full object-cover grayscale opacity-90 rounded-[2rem] shadow-xl" />
                <div className="absolute inset-0 bg-[#09102c] opacity-10 rounded-[2rem]"></div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-56 md:h-56 bg-[#2f4ea1] rounded-[2rem] flex items-center justify-center p-8 hidden sm:flex shadow-[0_20px_50px_rgba(43,57,145,0.4)]">
                    <p className="text-white font-black text-xl md:text-2xl leading-tight text-center">בונים את העתיד של הדיגיטל</p>
                </div>
            </Reveal>
        </div>
    </section>
);

export default AboutSection;



