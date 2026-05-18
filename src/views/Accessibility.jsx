"use client";
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';

const Accessibility = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <div className="pt-32 pb-20 px-6 min-h-screen bg-[#F5F7FA]">
                <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#2f4ea1]/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 text-right">הצהרת נגישות</h1>

                    <div className="prose prose-lg max-w-none text-right font-light text-gray-600 space-y-6">
                        <div className="border-b border-gray-100 pb-6 mb-8">
                            <p className="font-bold text-gray-900">חברת ספרוס בע"מ</p>
                            <p className="text-[#2f4ea1] font-bold mt-2">הצהרת הנגישות בבנייה</p>
                        </div>

                        <div>
                            <p className="mb-4">
                                אנו בספרוס דיגיטל מייחסים חשיבות רבה להנגשת האתר שלנו לאנשים עם מוגבלויות, מתוך אמונה כי לכל אדם מגיעה הזכות לקבל שירות שוויוני, נגיש ומכבד.
                            </p>
                            <p className="mb-4">
                                בימים אלו אנו משלימים את כתיבתה של הצהרת הנגישות המלאה והתקנית (רמת AA), הכוללת את פרטי רכז הנגישות, מועד התאמה אחרון, ופירוט מלא של הסדרי הנגישות שלנו. ההצהרה תעלה לאוויר בקרוב.
                            </p>
                            <p>
                                במידה ונתקלתם בקושי כלשהו בגלישה באתר או בקבלת שירות, נשמח לעמוד לרשותכם ולסייע. ניתן לפנות אלינו באמצעות עמוד צור קשר.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Accessibility;
