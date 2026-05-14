const fs = require('fs');

let dept = fs.readFileSync('src/views/DepartmentDetail.jsx', 'utf8');

const targetStr = `<div className="aspect-video bg-gray-100 overflow-hidden relative">
                                <img src={\`/portfolio/\${project.id}.webp\`} onError={(e) => { e.target.onerror = null; e.target.src = project.image; }} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                {/* Video Hover Layout */}
                                <video src={\`/portfolio/\${project.id}.mp4\`} muted loop playsInline preload="none" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" onError={(e) => { e.target.style.display = 'none'; }} />
                                
                                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#09102c]/90 via-[#09102c]/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                                    <span className="text-white font-bold tracking-wide text-sm drop-shadow-md">{project.title}</span>
                                </div>
                                <div className="absolute inset-0 bg-[#2f4ea1]/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]">`;

const replacementStr = `<div className="aspect-video bg-gray-100 overflow-hidden relative">
                                {/* Scrolling Image Layer */}
                                <div 
                                    className="absolute inset-0 w-full h-full bg-cover bg-top transition-all duration-[8000ms] ease-in-out group-hover:bg-bottom"
                                    style={{ backgroundImage: \`url('/portfolio/\${project.id}.webp'), url('\${project.image}')\` }}
                                ></div>
                                
                                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#09102c]/90 via-[#09102c]/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                                    <span className="text-white font-bold tracking-wide text-sm drop-shadow-md">{project.title}</span>
                                </div>
                                <div className="absolute inset-0 bg-[#2f4ea1]/95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]">`;

if(dept.includes(targetStr)) {
    dept = dept.replace(targetStr, replacementStr);
    fs.writeFileSync('src/views/DepartmentDetail.jsx', dept);
    console.log("Success");
} else {
    console.log("Target string not found");
}
