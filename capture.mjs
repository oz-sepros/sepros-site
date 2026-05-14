import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const projects = [
    { id: "toronto", link: "https://lp.israel-canada.co.il/english/toronto_israel_canada/" },
    { id: "renovo", link: "https://lp.renovo.co.il/bialik_ramat_hasharon/" },
    { id: "madbrand", link: "https://madbrand.co.il/" },
    { id: "midtown", link: "https://lp.israel-canada.co.il/midtown_jerusalem/" },
    { id: "colmobil", link: "https://lp.colmobil-energy.co.il/haver_mevi_haver/" },
    { id: "azorim-melach", link: "https://lp.azorim.co.il/minisite_melach_haaretz/" },
    { id: "azorim-main", link: "https://www.azorim.co.il/" }
];

const outputDir = path.join(process.cwd(), 'public', 'portfolio');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function captureScreenshots() {
    console.log("Launching browser...");
    const browser = await puppeteer.launch({ headless: "new", defaultViewport: { width: 1440, height: 900 } });
    
    for (const project of projects) {
        console.log(`Navigating to ${project.title || project.id} at ${project.link}...`);
        try {
            const page = await browser.newPage();
            // Go to the URL and wait for network to be idle so images load
            await page.goto(project.link, { waitUntil: 'networkidle2', timeout: 30000 });
            
            // Hide common floating widgets (accessibility, chat, etc.)
            await page.evaluate(() => {
                const style = document.createElement('style');
                style.innerHTML = `
                    #nagish-li, .nagish-btn, #enable11, .accessBtn, #accessibility-widget, 
                    #pojo-a11y, #userway-accessibility-widget, [aria-label*="נגישות"], 
                    .wa-chat, #wp-chat, [id*="nagish"], [class*="nagish"], [id*="access"], 
                    [class*="access"], [id*="userway"], iframe[name*="userway"],
                    .nagish-widget, .enable-accessibility, .equalweb-widget, #INDmenu-btn
                    { display: none !important; opacity: 0 !important; visibility: hidden !important; z-index: -9999 !important; }
                `;
                document.head.appendChild(style);
            });

            // Scroll down and up to trigger lazy-loaded images
            await page.evaluate(async () => {
                await new Promise((resolve) => {
                    let totalHeight = 0;
                    const distance = 300;
                    const timer = setInterval(() => {
                        const scrollHeight = document.body.scrollHeight;
                        window.scrollBy(0, distance);
                        totalHeight += distance;
                        if(totalHeight >= scrollHeight){
                            clearInterval(timer);
                            window.scrollTo(0, 0);
                            resolve();
                        }
                    }, 100);
                });
            });

            // Wait a bit after scrolling
            await new Promise(r => setTimeout(r, 2000));

            const outputPath = path.join(outputDir, `${project.id}.webp`);
            await page.screenshot({ path: outputPath, type: 'webp', fullPage: true, quality: 80 });
            console.log(`Saved screenshot to ${outputPath}`);
            await page.close();
        } catch (e) {
            console.error(`Failed to capture ${project.id}: ${e.message}`);
        }
    }
    
    await browser.close();
    console.log("Finished all screenshots!");
}

captureScreenshots();
