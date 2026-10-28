"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Inter, Comforter } from 'next/font/google';
import { X, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

// MADBRAND's fonts (the "jungle" script is Comforter, as on madbrand.co.il)
const inter = Inter({ subsets: ['latin'], weight: ['800', '900'], display: 'swap' });
const comforter = Comforter({ subsets: ['latin'], weight: '400', display: 'swap' });

const DELAY_MS = 5000;
const MADBRAND_URL = 'https://www.madbrand.co.il/?utm_source=sepros&utm_medium=popup&utm_campaign=new_site';

const SEEN_KEY = 'madbrand_popup_seen';

// Popup announcing the new MADBRAND site (Ofir's request). Opens 5 seconds
// after the home page loads, once per browser session (sessionStorage, so it
// comes back on every new visit), and can be closed with the X, Esc or a
// click outside it.
const MadbrandPopup = () => {
    const [open, setOpen] = useState(false);
    const closeRef = useRef(null);
    const lastFocus = useRef(null);

    useEffect(() => {
        try {
            if (sessionStorage.getItem(SEEN_KEY)) return;
        } catch { /* storage blocked: show it anyway */ }
        const timer = setTimeout(() => {
            try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* ignore */ }
            lastFocus.current = document.activeElement;
            setOpen(true);
            trackEvent('madbrand_popup_shown');
        }, DELAY_MS);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!open) return;
        closeRef.current?.focus();
        const onKey = (e) => { if (e.key === 'Escape') close(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    const close = () => {
        setOpen(false);
        lastFocus.current?.focus?.();
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4"
            onClick={close}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="madbrand-popup-title"
                dir="ltr"
                lang="en"
                className={`${inter.className} relative w-full max-w-[480px] md:max-w-[min(640px,85vh)] aspect-square overflow-hidden bg-black shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src="/images/madbrand-jaguar.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 767px) 100vw, 640px"
                    className="object-cover object-[78%_50%] [mask-image:linear-gradient(to_bottom,black_62%,transparent_76%)]"
                    loading="eager"
                />

                <button
                    ref={closeRef}
                    type="button"
                    onClick={close}
                    aria-label="סגור"
                    lang="he"
                    className="absolute top-3 right-3 z-10 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                    <X size={20} />
                </button>

                <div className="absolute inset-x-0 bottom-[18%] px-[7%]">
                    <p id="madbrand-popup-title" className="text-white font-black tracking-tight leading-none text-[clamp(26px,7.5vw,38px)] md:text-[clamp(38px,5.5vh,52px)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                        New site. Wild ideas.
                    </p>
                    <a
                        href={MADBRAND_URL}
                        target="_blank"
                        rel="noopener"
                        onClick={() => trackEvent('madbrand_popup_click')}
                        className="mt-[4%] flex w-full items-center justify-center gap-3 border border-white/60 bg-[#ff5a14] px-4 py-[4.5%] text-white font-black tracking-tight text-[clamp(18px,5.4vw,27px)] md:text-[clamp(27px,3.9vh,36px)] hover:bg-[#e84e0c] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                    >
                        <span>
                            Step into the MAD <span className={`${comforter.className} font-normal text-[1.25em] align-[-0.1em]`}>jungle</span>
                        </span>
                        <ArrowRight aria-hidden="true" strokeWidth={2.5} className="h-[1.1em] w-[1.1em]" />
                        <span className="sr-only" lang="he"> (נפתח בלשונית חדשה)</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MadbrandPopup;
