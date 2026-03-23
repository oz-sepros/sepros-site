import { useState, useEffect, useRef } from 'react';

export const StatItem = ({ end, label, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else { setCount(Math.floor(start)); }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
        <div ref={ref} className={`text-center p-6 bg-white reveal shadow-sm hover:shadow-md transition-shadow rounded-2xl border border-gray-100 ${isVisible ? 'active' : ''}`}>
            <div className="text-4xl md:text-5xl font-black text-[#2f4ea1] mb-2 flex justify-center items-center" dir="ltr">
                {count}{suffix}
            </div>
            <div className="text-gray-600 font-bold tracking-widest text-sm">{label}</div>
        </div>
    );
};

const StatsCounter = () => (
    <section className="py-10 md:py-12 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatItem end={150} label="לקוחות פעילים" suffix="+" />
                <StatItem end={1200} label="קמפיינים נוהלו" suffix="+" />
                <StatItem end={50} label="תקציבים (₪)" suffix="M+" />
            </div>
        </div>
    </section>
);

export default StatsCounter;



