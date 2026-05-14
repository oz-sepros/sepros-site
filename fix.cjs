const fs = require('fs');

// 1. Contact.jsx
let contact = fs.readFileSync('src/views/Contact.jsx', 'utf8');
contact = contact.replace(/<h4/g, '<h2').replace(/<\/h4>/g, '</h2>');
fs.writeFileSync('src/views/Contact.jsx', contact);

// 2. ArticlePage.jsx
let article = fs.readFileSync('src/views/ArticlePage.jsx', 'utf8');
article = article.replace(/className="prose prose-lg max-w-none text-right font-light text-gray-600[\s\S]*?prose-strong:text-gray-900"/, 'className="max-w-none text-right font-light text-gray-600 text-lg [&>h2]:text-3xl [&>h2]:font-black [&>h2]:text-[#2f4ea1] [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-[#2f4ea1] [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:leading-relaxed [&>p]:mb-6 [&>a]:text-[#2f4ea1] [&>ul]:list-disc [&>ul]:pr-6 [&>ul>li]:mb-2 [&_strong]:text-gray-900"');
article = article.replace('<h2>פסיכולוגיה של צבע בכפתורי הנעה לפעולה (CTA)</h2>', '<h3>פסיכולוגיה של צבע בכפתורי הנעה לפעולה (CTA)</h3>');
article = article.replace('<h2>חוק פיטס (Fitts\'s Law): גודל וקרבה</h2>', '<h3>חוק פיטס (Fitts\'s Law): גודל וקרבה</h3>');
article = article.replace('<h2>ארכיטקטורת מידע וצמצום החיכוך המחשבתי</h2>', '<h3>ארכיטקטורת מידע וצמצום החיכוך המחשבתי</h3>');
article = article.replace('<h2>1. Core Web Vitals כיסוד להצלחה</h2>', '<h3>1. Core Web Vitals כיסוד להצלחה</h3>');
article = article.replace('<h2>2. חשיבות הסריקה והאינדוקס (Crawl Budget)</h2>', '<h3>2. חשיבות הסריקה והאינדוקס (Crawl Budget)</h3>');
article = article.replace('<h2>3. אופטימיזציה לחיפוש AI ומענה ישיר</h2>', '<h3>3. אופטימיזציה לחיפוש AI ומענה ישיר</h3>');
article = article.replace('<h2>בידינג מבוסס ערך (Value-Based Bidding)</h2>', '<h3>בידינג מבוסס ערך (Value-Based Bidding)</h3>');
article = article.replace('<h2>הפרד ומשול – קמפיינים חכמים וחלוקת תקציב מדויקת</h2>', '<h3>הפרד ומשול – קמפיינים חכמים וחלוקת תקציב מדויקת</h3>');
article = article.replace('<h2>אופטימיזציה של דפי הנחיתה והעגלות</h2>', '<h3>אופטימיזציה של דפי הנחיתה והעגלות</h3>');
article = article.replace('<h2>הגיל ואופי החשיפה</h2>', '<h3>הגיל ואופי החשיפה</h3>');
article = article.replace('<h2>איזה סוג תוכן עובד?</h2>', '<h3>איזה סוג תוכן עובד?</h3>');
const articleSchema = `    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "image": [article.image],
        "datePublished": article.date,
        "author": [{
            "@type": "Organization",
            "name": "Sepros Digital",
            "url": "https://www.sepros.co.il"
        }]
    };

    return (
        <PageTransition>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <article className="min-h-screen bg-[#F5F7FA] pt-32 md:pt-40 pb-20 px-6">`;
article = article.replace(/    return \(\s*<PageTransition>\s*<article className="min-h-screen bg-\[#F5F7FA\] pt-32 md:pt-40 pb-20 px-6">/, articleSchema);
fs.writeFileSync('src/views/ArticlePage.jsx', article);

// 3. DepartmentDetail.jsx
let dept = fs.readFileSync('src/views/DepartmentDetail.jsx', 'utf8');
const oldBaseItems = `    const baseItems = [
        { id: "8l4iphxZurc" }, 
        { id: "ABEaNtb2oeA" },
        { id: "uc110NcS9zc" },
        { id: "bggmFXyPUYE" },
        { id: "CUV3z0Ify9Y" },
        { id: "L0T-QWKvLqU" },
        { id: "i2D0NOb4IZ8" }
    ];`;
const newBaseItems = `    const baseItems = [
        { id: "ce4XWYqPApc" },
        { id: "SFHBRCBtvog" },
        { id: "8D6dfBAYmvY" },
        { id: "D8hOZ_PXC-4" },
        { id: "v1qFbJElfJ4" },
        { id: "pUF5lAJ85vg" },
        { id: "a5OyApZs98g" },
        { id: "5AVwndFocNU" },
        { id: "XE9emYNGeKo" },
        { id: "zRZstpNyqrk" }
    ];`;
dept = dept.replace(oldBaseItems, newBaseItems);
dept = dept.replace('<span className="font-bold text-gray-800 text-base md:text-lg">{s}</span>', '<h2 className="font-bold text-gray-800 text-base md:text-lg">{s}</h2>');
dept = dept.replace(/<h4/g, '<h2').replace(/<\/h4>/g, '</h2>');
dept = dept.replace(/<h5/g, '<h3').replace(/<\/h5>/g, '</h3>');
const serviceSchema = `    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": dept.title,
        "provider": {
            "@type": "Organization",
            "name": "Sepros Digital"
        },
        "description": dept.long
    };

    return (
        <PageTransition>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            {/* Minimalist Header with Abstract Glow */}`;
dept = dept.replace(/    return \(\s*<PageTransition>\s*\{\/\* Minimalist Header with Abstract Glow \*\/\}/, serviceSchema);

dept = dept.replace('<h1 className="lg:hidden text-4xl md:text-5xl font-black uppercase mb-8 text-[#2f4ea1] leading-tight flex flex-col-reverse relative z-10">{dept.title}</h1>', '<div className="lg:hidden text-4xl md:text-5xl font-black uppercase mb-8 text-[#2f4ea1] leading-tight flex flex-col-reverse relative z-10">{dept.title}</div>');

fs.writeFileSync('src/views/DepartmentDetail.jsx', dept);
console.log('Done');
