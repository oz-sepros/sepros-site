"use client";
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <div key={pathname} className="page-transition fadeIn">
            {children}
        </div>
    );
};

export default PageTransition;
