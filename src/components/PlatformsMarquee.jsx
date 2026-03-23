import DraggableMarquee from './DraggableMarquee';

import BingLogo from '../assets/Bing_Ads_2016_logo.svg';
import GoogleLogo from '../assets/Google_Ads_logo.svg';
import LinkedInLogo from '../assets/LinkedIn_Logo.svg';
import MetaLogo from '../assets/Meta_Platforms_Inc._logo.svg';
import OutbrainLogo from '../assets/Outbrain_logo.svg';
import TaboolaLogo from '../assets/Taboola_logo.svg';
import TelegramLogo from '../assets/Telegram_logo.svg';
import TikTokLogo from '../assets/TikTok_logo.svg';

const PlatformsMarquee = () => {
    const platforms = [
        { name: "Google Ads", logo: GoogleLogo },
        { name: "Meta", logo: MetaLogo },
        { name: "TikTok", logo: TikTokLogo },
        { name: "LinkedIn", logo: LinkedInLogo },
        { name: "Outbrain", logo: OutbrainLogo },
        { name: "Taboola", logo: TaboolaLogo },
        { name: "Bing Ads", logo: BingLogo },
        { name: "Telegram", logo: TelegramLogo }
    ];

    return (
        <div className="py-8 bg-white border-y border-gray-100 overflow-hidden flex flex-col items-center relative dir-ltr">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <p className="text-[#2f4ea1] uppercase tracking-[0.4em] text-[10px] mb-8 z-20 font-black">שותפי פרסום</p>

            <DraggableMarquee speed={35} direction="ltr">
                {platforms.map((plat, i) => (
                    <div key={i} title={plat.name} className="group w-[140px] md:w-[180px] h-10 md:h-14 cursor-grab active:cursor-grabbing shrink-0 flex items-center justify-center mx-4 md:mx-6">
                        <img
                            src={plat.logo}
                            alt={plat.name}
                            draggable="false"
                            className="max-w-full max-h-full object-contain pointer-events-none select-none drop-shadow-sm grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300"
                        />
                    </div>
                ))}
            </DraggableMarquee>
        </div>
    );
};

export default PlatformsMarquee;
