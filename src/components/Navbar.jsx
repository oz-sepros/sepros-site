import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    const isSolid = isScrolled || !isHomePage;

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
        <nav
            className={`fixed w-full z-[100] transition-all duration-500 ${isSolid
                    ? 'bg-white/90 backdrop-blur-xl py-3 border-b border-gray-200/50 shadow-sm'
                    : 'bg-transparent py-6 md:py-8'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center cursor-pointer group hover:opacity-80 transition-opacity"
                >
                    <img
                        src="/src/assets/Logo.svg"
                        alt="Sepros Logo"
                        className={`h-8 md:h-10 object-contain transition-all duration-300 ${isSolid ? '' : 'brightness-0 invert'
                            }`}
                    />
                </Link>

                <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                    <Link
                        to="/"
                        className={`text-sm font-bold transition-colors ${isSolid
                                ? 'text-gray-700 hover:text-[#2f4ea1]'
                                : 'text-white/90 hover:text-white'
                            }`}
                    >
                        בית
                    </Link>

                    <div
                        className="relative group"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 text-sm font-bold transition-colors ${isSolid
                                    ? 'text-gray-700 group-hover:text-[#2f4ea1]'
                                    : 'text-white/90 group-hover:text-white'
                                }`}
                        >
                            שירותים
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        <div
                            className={`absolute top-full right-0 w-64 pt-6 transition-all duration-300 ${isDropdownOpen
                                    ? 'opacity-100 visible translate-y-0'
                                    : 'opacity-0 invisible -translate-y-4'
                                }`}
                        >
                            <div className="bg-white border border-gray-100 p-2 shadow-xl rounded-lg">
                                {departments.map((dept) => (
                                    <button
                                        key={dept.id}
                                        onClick={() => handleDeptSelect(dept.id)}
                                        className="w-full text-right px-6 py-4 text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-[#2f4ea1] rounded-md transition-all border-b border-gray-100 last:border-0"
                                    >
                                        {dept.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/articles"
                        className={`text-sm font-bold transition-colors ${isSolid
                                ? 'text-gray-700 hover:text-[#2f4ea1]'
                                : 'text-white/90 hover:text-white'
                            }`}
                    >
                        מאמרים
                    </Link>

                    <Link
                        to="/about"
                        className={`text-sm font-bold transition-colors ${isSolid
                                ? 'text-gray-700 hover:text-[#2f4ea1]'
                                : 'text-white/90 hover:text-white'
                            }`}
                    >
                        אודות
                    </Link>

                    <Link
                        to="/careers"
                        className={`text-sm font-bold transition-colors ${isSolid
                                ? 'text-gray-700 hover:text-[#2f4ea1]'
                                : 'text-white/90 hover:text-white'
                            }`}
                    >
                        דרושים
                    </Link>

                    <Link
                        to="/contact"
                        id="nav_contact_us_btn"
                        className={`px-8 py-2.5 font-bold text-sm rounded-full transition-all inline-block shadow-sm ${isSolid
                                ? 'bg-[#2f4ea1] text-white hover:bg-[#1c3166]'
                                : 'bg-white text-[#0b1638] hover:bg-gray-100'
                            }`}
                    >
                        בואו נדבר
                    </Link>
                </div>

                <button
                    className={`lg:hidden ${isSolid ? 'text-gray-800' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[150] bg-black/40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        dir="rtl"
                        className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-row-reverse items-center justify-between mb-8">
                            <button
                                className="text-gray-800"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>

                            <img
                                src="/src/assets/Logo.svg"
                                alt="Sepros Logo"
                                className="h-8 object-contain"
                            />
                        </div>

                        <div className="flex flex-col items-end space-y-6">
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-right text-2xl font-extrabold text-gray-900 hover:text-[#2f4ea1] transition-colors"
                            >
                                בית
                            </Link>

                            <div className="w-full border-t border-gray-200 pt-6">
                                <p className="text-sm font-bold text-[#2f4ea1] mb-4 text-right">
                                    שירותים
                                </p>

                                <div className="flex flex-col items-end space-y-3">
                                    {departments.map((dept) => (
                                        <button
                                            key={dept.id}
                                            onClick={() => handleDeptSelect(dept.id)}
                                            className="w-full text-right text-lg font-bold text-gray-700 hover:text-[#2f4ea1] transition-colors"
                                        >
                                            {dept.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Link
                                to="/articles"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-right text-2xl font-extrabold text-gray-900 hover:text-[#2f4ea1] transition-colors"
                            >
                                מאמרים
                            </Link>

                            <Link
                                to="/about"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-right text-2xl font-extrabold text-gray-900 hover:text-[#2f4ea1] transition-colors"
                            >
                                אודות
                            </Link>

                            <Link
                                to="/careers"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-right text-2xl font-extrabold text-gray-900 hover:text-[#2f4ea1] transition-colors"
                            >
                                דרושים
                            </Link>

                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 w-full text-center bg-[#2f4ea1] text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-[#1c3166] transition-colors"
                            >
                                בואו נדבר
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;