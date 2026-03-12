import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const departments = [
        { id: 'ppc', label: 'PPC וביצועים' },
        { id: 'social', label: 'סושיאל וקריאייטיב' },
        { id: 'design', label: 'סטודיו ומיתוג' },
        { id: 'tech', label: 'פיתוח אתרים' },
        { id: 'seo', label: 'קידום אורגני (SEO)' },
        { id: 'analytics', label: 'אנליטיקס ודאטה' },
    ];

    const handleDeptSelect = (id) => {
        navigate(`/department/${id}`);
        setIsDropdownOpen(false);
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-6 md:py-8'}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center cursor-pointer group hover:opacity-80 transition-opacity">
                    <img src="/src/assets/logo.png" alt="Sepros Logo" className="h-8 md:h-10 object-contain" />
                </Link>

                <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                    <Link to="/" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">בית</Link>

                    <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                        <button className="flex items-center gap-1 text-sm font-bold text-gray-300 group-hover:text-white transition-colors">
                            שירותים <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`absolute top-full right-0 w-64 pt-6 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                            <div className="bg-[#0a0a0a] border border-white/10 p-2 shadow-2xl rounded-sm">
                                {departments.map((dept) => (
                                    <button key={dept.id} onClick={() => handleDeptSelect(dept.id)} className="w-full text-right px-6 py-4 text-xs font-bold text-gray-400 hover:bg-[#4e77fc] hover:text-white transition-all border-b border-white/5 last:border-0">
                                        {dept.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/articles" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">מאמרים</Link>
                    <Link to="/about" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">אודות</Link>
                    <Link to="/careers" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">דרושים</Link>
                    <Link to="/contact" id="nav_contact_us_btn" className="bg-[#4e77fc] text-white px-8 py-2.5 font-bold text-sm hover:bg-white hover:text-black transition-all inline-block">בואו נדבר</Link>
                </div>

                <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black z-[150] p-8 flex flex-col justify-center gap-8 lg:hidden animate-in fade-in duration-500 overflow-y-auto">
                    <button className="absolute top-6 left-6 text-white" onClick={() => setIsOpen(false)}><X size={32} /></button>
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-4xl font-black text-white text-right">בית</Link>
                    <div className="space-y-4">
                        <p className="text-[#4e77fc] font-bold text-sm">שירותים</p>
                        {departments.map((dept) => (
                            <button key={dept.id} onClick={() => handleDeptSelect(dept.id)} className="block w-full text-right text-2xl font-bold text-gray-400 hover:text-white py-1">
                                {dept.label}
                            </button>
                        ))}
                    </div>
                    <Link to="/articles" onClick={() => setIsOpen(false)} className="text-4xl font-black text-white text-right">מאמרים</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="text-4xl font-black text-white text-right">אודות</Link>
                    <Link to="/careers" onClick={() => setIsOpen(false)} className="text-4xl font-black text-white text-right">דרושים</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-4xl font-black text-[#4e77fc] text-right">צור קשר</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
