import DraggableMarquee from './DraggableMarquee';

const ClientsMarquee = () => {
    const clients = [
        { name: "Colman", file: "Colman.svg" },
        { name: "Dimri", file: "DIMRI_דמרי צבעוני.svg" },
        { name: "Azorim", file: "azorim_אזורים צבעוני.svg" },
        { name: "Israel Canada", file: "israel canda_ישראל קנדה צבעוני.svg" },
        { name: "Oron", file: "oron_אורון צבעוני.svg" }
    ];

    return (
        <div className="bg-transparent flex flex-col items-center relative dir-ltr w-full">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            <DraggableMarquee speed={30} direction="ltr">
                {clients.map((client, i) => (
                    <div key={i} className="cursor-grab active:cursor-grabbing px-6 md:px-12 flex items-center justify-center">
                        <img 
                            src={`/clients/${client.file}`} 
                            alt={client.name} 
                            className="h-10 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none"
                            draggable="false"
                        />
                    </div>
                ))}
            </DraggableMarquee>
        </div>
    );
};

export default ClientsMarquee;
