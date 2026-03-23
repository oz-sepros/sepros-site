import DraggableMarquee from './DraggableMarquee';

const ClientsMarquee = () => {
    const clients = [
        "Wix", "Monday.com", "Fiverr", "Playtika", "IronSource",
        "Strauss", "Tnuva", "Bank Hapoalim", "Shufersal", "Clal Insurance"
    ];
    return (
        <div className="bg-transparent flex flex-col items-center relative dir-ltr w-full">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            <DraggableMarquee speed={30} direction="ltr">
                {clients.map((client, i) => (
                    <div key={i} className="text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300 uppercase tracking-wider cursor-grab active:cursor-grabbing px-6 md:px-12">
                        {client}
                    </div>
                ))}
            </DraggableMarquee>
        </div>
    );
};

export default ClientsMarquee;
