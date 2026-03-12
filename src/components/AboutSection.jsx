import Reveal from './Reveal';

const AboutSection = () => (
    <section className="py-20 md:py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <Reveal className="text-right">
                <h2 className="text-[#4e77fc] font-black tracking-widest text-sm mb-4">על ספרוס</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white italic mb-10 leading-tight">בוטיק של תוצאות <br /> <span className="outline-text">בעולם של דאטה.</span></h3>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
                    ספרוס הוקמה מתוך מטרה אחת: לגשר על הפער שבין קריאייטיב מרהיב למספרים בשורה התחתונה. אנחנו מאמינים שבעידן הנוכחי, שיווק דיגיטלי חייב להיות מבוסס נתונים אך מונע על ידי רגש.
                </p>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-12">
                    הצוות שלנו מורכב ממומחי PPC, אסטרטגים, מעצבי UX ומתכנתים שעובדים בסנכרון מלא. אנחנו לא ספק חיצוני, אנחנו השותפים שלכם לצמיחה.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div>
                        <div className="text-3xl font-black text-[#4e77fc] mb-1">100%</div>
                        <div className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">מיקוד ב-ROI</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black text-white mb-1">24/7</div>
                        <div className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">ניטור דאטה</div>
                    </div>
                </div>
            </Reveal>
            <Reveal className="relative aspect-video lg:aspect-square">
                <div className="absolute inset-0 bg-[#4e77fc]/10 animate-pulse"></div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="צוות ספרוס" loading="lazy" className="w-full h-full object-cover grayscale opacity-50" />
                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-40 h-40 md:w-56 md:h-56 bg-[#4e77fc] flex items-center justify-center p-6 hidden sm:flex">
                    <p className="text-black font-black text-lg md:text-xl italic leading-none">בונים את העתיד של הדיגיטל</p>
                </div>
            </Reveal>
        </div>
    </section>
);

export default AboutSection;
