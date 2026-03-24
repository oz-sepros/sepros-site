import DraggableMarquee from './DraggableMarquee';
import { platformsData } from '../assets/platformLogos';

const PlatformsMarquee = () => {
    return (
        <div className="py-8 bg-white border-y border-gray-100 overflow-hidden flex flex-col items-center relative dir-ltr">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <p className="text-[#2f4ea1] uppercase tracking-[0.4em] text-[10px] mb-8 z-20 font-black">שותפי פרסום</p>

            <DraggableMarquee speed={35} direction="ltr">
                {platformsData.map((plat, i) => (
                    <div key={i} title={plat.name} className="group w-[140px] md:w-[180px] h-10 md:h-14 cursor-grab active:cursor-grabbing shrink-0 flex items-center justify-center mx-4 md:mx-6">
                        <img src={plat.logo} alt={`שותף פרסום של ספרוס - ${plat.name}`} className="max-w-full max-h-full object-contain pointer-events-none select-none drop-shadow-sm grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300" draggable="false" />
                    </div>
                ))}
            </DraggableMarquee>
        </div>
    );
};

export default PlatformsMarquee;
