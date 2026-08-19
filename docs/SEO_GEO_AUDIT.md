# SEO + GEO Audit & Working Dashboard

> This is the active SEO/GEO optimization dashboard. It outlines the scope, metadata reviews, page-by-page audits, and active working queues.
>
> **Last Updated**: 2026-08-19 (Articles dynamic metadata and H1 updates implemented and verified; moving to working site-wide review)

---

## 1. Scope and Status Summary

### Scope Counts
* **Total Discovered Routes/Page Instances in Repository**: 26
* **Active SEO/GEO Pages (Included in active optimization)**: 19
* **Deferred/Noindex Pages (Excluded from active optimization)**: 7

### Active Scope Breakdown (19 Pages/Routes)
1. **Homepage**: `/`
2. **About Page**: `/about`
3. **Services Hub**: `/service`
4. **PPC Department**: `/service/ppc`
5. **Social Department**: `/service/social`
6. **Design Department**: `/service/design`
7. **Tech Department**: `/service/tech`
8. **SEO Department**: `/service/seo`
9. **Strategy Department**: `/service/strategy`
10. **Analytics Department**: `/service/analytics`
11. **Articles Hub**: `/articles`
12. **Article 1**: `/articles/technical-seo-2026`
13. **Article 2**: `/articles/double-your-roas`
14. **Article 3**: `/articles/tiktok-or-instagram`
15. **Article 4**: `/articles/ux-color-psychology`
16. **Careers**: `/careers`
17. **Contact**: `/contact`
18. **Privacy Policy**: `/privacy`
19. **Accessibility Statement**: `/accessibility`

### Deferred/Noindex Scope Breakdown (7 Pages/Routes)
* **Case Studies Hub** (`/casestudies`): Hidden from navigation and sitemap. `noindex` applied.
* **Case Study Pages** (`/casestudies/[slug]`): 6 dynamic project placeholder paths (`demo-project-0` through `demo-project-5`). `noindex` applied.

### Overall Status (For 19 Active Pages)

| Area | PASS | FAIL | REVIEW |
|---|---:|---:|---:|
| Titles | 19 | 0 | 0 |
| Meta Descriptions | 18 | 0 | 1 |
| H1 / Headings | 19 | 0 | 0 |
| Image ALT | 18 | 0 | 1 |
| Internal Links | 19 | 0 | 0 |
| Canonicals | 19 | 0 | 0 |
| Indexability | 19 | 0 | 0 |
| Social Metadata | 18 | 1 | 0 |
| Structured Data | 19 | 0 | 0 |

---

## 2. Priority Issues (Unresolved Work Only)

The following priority table lists active critical/high/medium issues that are currently unresolved in the codebase.

| URL | Type | Area | Status | Severity | Current | Finding | Suggested Action | File |
|---|---|---|---|---|---|---|---|---|
| `/accessibility` | SEO | Social Metadata | FAIL | MEDIUM | Missing OG tags | Accessibility page has no OpenGraph tags declared. | Add social metadata config once statement is ready. | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/accessibility/page.jsx) |

---

## 3. Site-Wide Metadata Review

The following table evaluates metadata for all active pages in the SEO scope. Titles and descriptions that are already strong are marked as `PASS` with `KEEP CURRENT`.

| URL | Title | Chars | Title Status | Suggested Title | Meta Description | Chars | Meta Status | Suggested Meta Description | Canonical URL | Canonical Status |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | `ספרוס - סוכנות דיגיטל | Sepros Digital` | 38 | `PASS` | `KEEP CURRENT` | `סוכנות דיגיטל 360 המעניקה פתרונות שיווק מקיפים: קידום אורגני (SEO), ניהול מדיה ו-PPC, סושיאל ו-UGC...` | 154 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/` | `PASS` |
| `/about` | `אודות | ספרוס` | 12 | `PASS` | `KEEP CURRENT` | `הכירו את ספרוס, סוכנות הדיגיטל המובילה שמתמחה בבניית אסטרטגיות שיווקיות מנצחות, פיתוח אתרים וניהול מדיה...` | 140 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/about` | `PASS` |
| `/service` | `שירותי דיגיטל | ספרוס` | 21 | `PASS` | `KEEP CURRENT` | `מגוון שירותי הדיגיטל של ספרוס: קמפיינים ממומנים, SEO, סושיאל וויראלי, מיתוג, אסטרטגיה ופיתוח אתרים...` | 138 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/service` | `PASS` |
| `/service/ppc` | `PPC וביצועים - התוצאות שלכם, המספרים שלנו | ספרוס` | 48 | `PASS` | `KEEP CURRENT` | `ניהול תקציבי פרסום באופטימיזציה מקסימלית: גוגל, מטא, טיקטוק ועוד. ניתוח קהלים ושיפור יחס המרה להחזר השקעה (ROAS) מנצח.` | 120 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/service/ppc` | `PASS` |
| `/service/social` | `סושיאל דומיננטי וקריאייטיב - הפקות שוברות רשת | ספרוס` | 52 | `PASS` | `KEEP CURRENT` | `הפקת סרטונים ויראליים, שורטס וטיקטוק למותגים. שפה ויזואלית ייחודית ואסטרטגיית סושיאל שעוצרת את הגלילה ומייצרת לידים.` | 120 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/service/social` | `PASS` |
| `/service/design` | `סטודיו וקריאייטיב פרימיום למותגים | ספרוס` | 40 | `PASS` | `KEEP CURRENT` | `עיצוב שפה חזותית, קונספט, זהות ומיתוג תאגידי. בניית ספרי מותג ויצירת מסרים שמרגישים טבעיים ומייצרים אמון.` | 110 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/service/design` | `PASS` |
| `/service/tech` | `פיתוח אתרים ואפליקציות - טכנולוגיה מתקדמת | ספרוס` | 48 | `PASS` | `KEEP CURRENT` | `בניית אתרים מהירים ומתקדמים ב-React/Next.js. איקומרס מתקדם, פיתוח מערכות וחיבורי API לביצועי שיא וקידום אורגני מעולה.` | 122 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/service/tech` | `PASS` |
| `/service/seo` | `קידום אורגני (SEO) - להיות בראש בגוגל | ספרוס` | 44 | `PASS` | `KEEP CURRENT` | `קידום אתרים אורגני טכני עמוק בשילוב אסטרטגיית תוכן לבניית סמכות מול גוגל. מחקר מילים, בניית קישורים והובלת תוצאות החיפוש.` | 123 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/service/seo` | `PASS` |
| `/service/strategy` | `אסטרטגיה שיווקית - הנוסחה להצלחה בדיגיטל | ספרוס` | 47 | `PASS` | `KEEP CURRENT` | `פיתוח אסטרטגיה שיווקית ומסעות לקוח מנצחים. מחקר שוק עמוק כדי לייצר מנוע צמיחה ממוקד שמנצח את האלגוריתם והמתחרים.` | 119 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/service/strategy` | `PASS` |
| `/service/analytics` | `אנליטיקס ודאטה - מדידה שמובילה לרווחים | ספרוס` | 45 | `PASS` | `KEEP CURRENT` | `הטמעת מערכות מדידה (GA4, GTM), מעקב המרות ודאשבורדים בזמן אמת. ניתוח דאטה שיעזור לכם לייעל תקציבים ולהבין מאין מגיעים הלקוחות.` | 127 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/service/analytics` | `PASS` |
| `/articles` | `מאמרים | ספרוס` | 14 | `PASS` | `KEEP CURRENT` | `הבלוג של ספרוס - חדשות, עדכונים, מדריכים מקצועיים וטיפים מתקדמים בשיווק דיגיטלי, קידום אורגני, PPC ופיתוח.` | 108 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/articles` | `PASS` |
| `/articles/technical-seo-2026` | `SEO טכני ב-2026: 3 עמודי התווך שחשוב להכיר | ספרוס` | 51 | `PASS` | `KEEP CURRENT` | `מה חשוב לדעת על SEO טכני ב-2026? הכירו 3 תחומים מרכזיים שמשפיעים על סריקת האתר, חוויית המשתמש וההתאמה לעידן החיפוש מבוסס AI.` | 134 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/articles/technical-seo-2026` | `PASS` |
| `/articles/double-your-roas` | `איך לשפר ROAS בקמפיינים בגוגל | ספרוס` | 41 | `PASS` | `KEEP CURRENT` | `רוצים לשפר את ה-ROAS בקמפיינים בגוגל? הכירו 3 נקודות שכדאי לבדוק: אסטרטגיית הבידינג, חלוקת הקמפיינים ואופטימיזציה של דפי הנחיתה.` | 137 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/articles/double-your-roas` | `PASS` |
| `/articles/tiktok-or-instagram` | `טיקטוק או אינסטגרם: מה מתאים לעסק שלכם? | ספרוס` | 49 | `PASS` | `KEEP CURRENT` | `טיקטוק או אינסטגרם – מה מתאים יותר לעסק שלכם? הכירו את ההבדלים בקהל, בחשיפה ובסוג התוכן, ואיך לשלב בין שתי הפלטפורמות בצורה נכונה.` | 144 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/articles/tiktok-or-instagram` | `PASS` |
| `/articles/ux-color-psychology` | `עיצוב UX שמניע לפעולה: עקרונות חשובים | ספרוס` | 46 | `PASS` | `KEEP CURRENT` | `איך עיצוב UX יכול לעזור להניע משתמשים לפעולה? הכירו עקרונות של צבע וקונטרסט, מיקום וגודל כפתורים וצמצום עומס קוגניטיבי בממשק.` | 138 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/articles/ux-color-psychology` | `PASS` |
| `/careers` | `דרושים | ספרוס` | 14 | `PASS` | `KEEP CURRENT` | `הצטרפו לצוות המנצח של ספרוס! מחפשים כישרונות בניהול קמפיינים, SEO, קריאייטיב ופיתוח לבוא לצמוח איתנו בסביבה טכנולוגית מתקדמת.` | 131 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/careers` | `PASS` |
| `/contact` | `צור קשר | ספרוס` | 15 | `PASS` | `KEEP CURRENT` | `מוכנים להזניק את העסק שלכם? צרו קשר deadlines ספרוס עוד היום לפגישת ייעוץ ובניית אסטרטגיה שיווקית שתעיף את המותג שלכם קדימה.` | 116 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/contact` | `PASS` |
| `/privacy` | `מדיניות פרטיות | ספרוס` | 22 | `PASS` | `KEEP CURRENT` | `מדיניות הפרטיות של ספרוס: מידע על איסוף ושימוש בנתונים, עוגיות, כלי אנליטיקה, שמירת מידע וזכויות המשתמשים באתר.` | 114 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/privacy` | `PASS` |
| `/accessibility` | `הצהרת נגישות | Sepros Digital Group` | 37 | `PASS` | `KEEP CURRENT` | `הצהרת הנגישות של ספרוס דיגיטל. אנו פועלים להנגשת האתר עבור כלל המשתמשים.` | 74 | `REVIEW` | `הצהרת הנגישות והתאמות הנגישות שבוצעו באתר ספרוס דיגיטל. אנו פועלים כל העת כדי לאפשר חוויית גלישה נוחה, שוויונית ונגישה לכלל המשתמשים.` | `https://www.sepros.co.il/accessibility` | `PASS` |

---

## 4. Page-by-Page SEO Review

Detailed evaluation of heading hierarchy, ALTs, internal links, and technical indicators for all active pages.

### 1. Homepage (`/`)
* **H1 / Headings**: `PASS` (H1: `שיווק דיגיטלי שמביא תוצאות.`). Heading hierarchy is logical and outlines service categories as H2s.
* **Images / ALT**: `PASS` (No meaningful images lacking descriptive ALTs).
* **Internal Linking**: Good. Links out to services hub and individual services.
* **Technical**: Canonical alternates configured. Indexability verified. Organization schema is present.

### 2. About Page (`/about`)
* **H1 / Headings**: `PASS` (H1: `בוטיק של תוצאות בעולם של דאטה.`). 
* **Images / ALT**: `PASS` (Team image contains appropriate Hebrew descriptive ALT).
* **Internal Linking**: Points contextually to `/contact`.
* **Technical**: Canonical alternates configured. Organization schema is present.

### 3. Services Hub (`/service`)
* **H1 / Headings**: `PASS` (H1: `השירותים שלנו`).
* **Images / ALT**: `PASS` (No layout images missing ALTs).
* **Internal Linking**: Links to all 7 departments.
* **Technical**: Canonical alternates configured.

### 4. Individual Service Pages (`/service/[id]`) — PPC, Social, Design, Tech, SEO, Strategy, Analytics
* **H1 / Headings**: `PASS` (Resolved: Implemented a single off-screen semantic `<h1>` tag with `sr-only` class to establish the document heading outline, converting responsive titles to visually visible `aria-hidden` elements to preserve the layout exactly and prevent duplication).
* **Images / ALT**:
  - `/service/social`: `REVIEW` (YouTube video cover image uses generic `alt="שורטס - דוגמה"`).
  - `/service/design`: `PASS` (Brand book illustration uses `alt="AI Generated Brand Book"`, which accurately describes the visual content).
* **Internal Linking**: `REVIEW`. High-relevance link opportunities:
  - `/service/seo` $\rightarrow$ `/articles/technical-seo-2026` (Resolved: Linked `"מדדי ה-Core Web Vitals"`)
  - `/service/ppc` $\rightarrow$ `/articles/double-your-roas` (Resolved: Linked `"ROAS Model"`)
  - `/service/tech` $\rightarrow$ `/articles/ux-color-psychology` (Resolved: Linked `"עיצוב דפי נחיתה וממשקים"`)
  - `/service/social` $\rightarrow$ `/articles/tiktok-or-instagram` (SKIP / FUTURE CONTENT OPPORTUNITY)
* **Technical**: Canonical alternate configured for all pages (`/service/${id}`). Service schema is properly generated.

### 5. Articles Hub (`/articles`)
* **H1 / Headings**: `PASS` (H1: `בלוג ומאמרים`).
* **Images / ALT**: `PASS` (Article cards use `alt={art.title}` which dynamically populates descriptive Hebrew text).
* **Internal Linking**: Links to all active articles.
* **Technical**: Canonical configured. Blog schema is correct (URL path generation bug resolved to plural `/articles/`).

### 6. Individual Articles (`/articles/[slug]`)
* **H1 / Headings**: `PASS` (H1 correctly displays the specific approved article title).
* **Images / ALT**: `PASS` (Resolved: Implemented descriptive ALT text using a dedicated `imageAlt` field for each article).
* **Internal Linking**: Standard navigation and breadcrumbs are in place.
* **Technical**: `PASS` (Alternates canonical set Dynamically to match `/articles/[slug]`).

### 7. Careers Page (`/careers`)
* **H1 / Headings**: `PASS` (H1: `דרושים בספרוס`).
* **Images / ALT**: `PASS`
* **Internal Linking**: Links to contact forms.
* **Technical**: Canonical alternates configured.

### 8. Contact Page (`/contact`)
* **H1 / Headings**: `PASS` (H1: `מוכנים לגדול?`).
* **Images / ALT**: `PASS`
* **Internal Linking**: Global buttons point directly to the contact form.
* **Technical**: Canonical alternates configured.

### 9. Privacy Policy (`/privacy`)
* **H1 / Headings**: `PASS` (H1: `מדיניות פרטיות`).
* **Images / ALT**: `PASS` (Purely text page).
* **Technical**: Canonical alternates configured.

### 10. Accessibility Statement (`/accessibility`)
* **H1 / Headings**: `PASS` (H1: `הצהרת נגישות`).
* **Images / ALT**: `PASS`
* **Accessibility / Widget**: `PASS` (Resolved: Removed the Enable Accessibility Widget to eliminate programmatic and semantic accessibility errors. The native page score is now 100/100, though this does not constitute full WCAG legal compliance certification. CookieYes banner remains active and is handled separately).
* **Technical**: Canonical alternates configured.

---

## 5. Page-by-Page GEO Review

Audited based on predefined criteria from `docs/SEO_GEO_TESTS.md`:

### 1. Entity Clarity
* **Active Pages**: `PASS`. Consistent identification of the brand "ספרוס" (Sepros Digital) and its structured offering (PPC, Social, Design, Tech, SEO, Strategy, Analytics). Logical JSON-LD schemas explicitly associate these relationships.

### 2. Direct Answer Quality
* **Active Pages**: `PASS`. High-quality FAQ sections and concise introductory summaries explicitly define service operations and answer user search intents directly.

### 3. Extractability
* **Active Pages**: `PASS`. Good visual hierarchies, bullet points, process timelines, and structural headings allow crawlers to easily parse the key takeaways of the content.

### 4. Trust / Evidence Context
* **About Page**: `REVIEW`. Lacks specific professional profiles of key agency leadership. Adding professional backgrounds may provide additional context about the team's expertise. (*Human input required* for bios).
* **Individual Service Pages**: `REVIEW`. Currently lack inline client project summaries. Adding concrete results or project summaries (once real content is ready) may provide additional evidence of expertise. (*Human input required*).
* **Individual Article Pages**: `REVIEW`. Articles are published anonymously. Adding clear authorship (e.g., "Written by [Author Name]") may provide additional context about who created the content and their source expertise. (*Human input required*).
* **Accessibility Statement**: `REVIEW`. Uses placeholder text "הצהרת הנגישות בבנייה" which lacks compliance details. (*Human input required* for compliance text).

### 5. Cross-Page Consistency
* **Active Pages**: `PASS`. Terminology and service descriptions are consistent throughout the active scope. No concrete contradictions or naming conflicts exist.

---

## 6. Article Content Review Items

* **All Active Articles**: `PASS` (Resolved: Approved dynamic article copy changes have been fully implemented).

---

## 7. Deferred Portfolio Content (Case Studies)

* **Status**: `DEFERRED / NOINDEX`
* **Routes Affected**: `/casestudies`, `/casestudies/[slug]`
* **Audit Notes**: These pages are intentionally hidden from live site navigation and the sitemap. They are protected from search indexation via Next.js metadata `robots: { index: false, follow: false }` directives. They contain placeholder layout structures and duplicate client descriptions.
* **Working Rule**: Exclude from active metadata, ALT, internal linking, and content writing optimization cycles until real client data and copy are prepared.

---

## 8. Active Optimization Queue

This queue groups unresolved work requiring future review, copywriting, or technical implementation. **None of these items are approved for implementation yet.**

### Metadata
| URL | Issue | Current State | Suggested Action | Priority | Approval Required |
|---|---|---|---|---|---|
| `/accessibility` | Meta description too short | 74-character description | Apply suggested descriptive meta description (deferred until final statement is ready). | **LOW** | **YES** |

### Image ALT
| URL | Issue | Current State | Suggested Action | Priority | Approval Required |
|---|---|---|---|---|---|
| `/service/social` | Generic ALT on YouTube thumbnail | `alt="שורטס - דוגמה"` | Improve to: `alt="סרטון שורטס ויראלי לדוגמה של לקוח ספרוס"` (enhances context) | **LOW** | **YES** |
| `/articles/[slug]` | ALT text inherits title | Resolved: Implemented `imageAlt` field with unique descriptive text for each article. | - | **LOW** | **NO** |

### Internal Linking
| Source URL | Target URL | Existing Context | Suggested Anchor | Priority | Approval Required |
|---|---|---|---|---|---|
| `/service/social` | `/articles/tiktok-or-instagram` | In FAQ 1 | SKIP / FUTURE CONTENT OPPORTUNITY | **MEDIUM** | **NO** |

### Technical SEO
| URL | Issue | Current State | Suggested Action | Priority | Approval Required |
|---|---|---|---|---|---|
| `/service/[id]` | CSS-hidden mobile H1 | Resolved: Implemented a single off-screen `<h1 className="sr-only">` and converted visual titles to `aria-hidden` divs. | - | **MEDIUM** | **NO** |

### GEO / Content (Copywriting & Trust Context)
| URL | Issue | Current State | Suggested Action | Priority | Approval Required |
|---|---|---|---|---|---|
| `/accessibility` | Placeholder statement | "הצהרת הנגישות בבנייה" | Gather and apply final Hebrew accessibility statement copy. | **HIGH** | **YES** |
| `/articles/[slug]` | Anonymous authorship | Published under Brand Organization | Add author field with writer name/profile for additional source context. | **MEDIUM** | **YES** |
| `/about` | Leadership credentials missing | General agency profile | Add professional bios of founders/key leaders to establish expert context. | **LOW** | **YES** |
| `/service/[id]` | Missing project proof | No client case study summaries | Add brief, bulleted summaries of real results once portfolio data is available. | **LOW** | **YES** |
