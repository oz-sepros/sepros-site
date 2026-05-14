import DraggableMarquee from './DraggableMarquee';

const ClientsMarquee = () => {
    const clients = [
        { name: "Colman", file: "Colman.svg", className: "scale-150 md:scale-[1.7]" },
        { name: "Dimri", file: "DIMRI_דמרי צבעוני.svg", className: "scale-125 md:scale-[1.4]" },
        { name: "Azorim", file: "azorim_אזורים צבעוני.svg" },
        { name: "Israel Canada", file: "israel canda_ישראל קנדה צבעוני.svg", className: "scale-[1.3] md:scale-[1.4]" },
        { name: "Oron", file: "oron_אורון צבעוני.svg", className: "scale-90 md:scale-95" },
        { name: "Dona", file: "dona.svg", className: "scale-90 md:scale-95" },
        { name: "Shikun & Binui", file: "shikun.svg", className: "opacity-80 scale-110" }
    ];

    return (
        <div className="bg-transparent flex flex-col items-center relative dir-ltr w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <DraggableMarquee speed={30} direction="ltr">
                {clients.map((client, i) => (
                    <div key={i} className="group w-[140px] md:w-[180px] h-16 md:h-20 shrink-0 cursor-grab active:cursor-grabbing flex items-center justify-center mx-4 md:mx-8">
                        <img 
                            src={`/clients/${client.file}`} 
                            alt={client.name} 
                            className={`max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ${client.className || ''}`}
                            draggable="false"
                        />
                    </div>
                ))}
            </DraggableMarquee>
        </div>
    );
};

export default ClientsMarquee;
