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
| `/service/social` | `ניהול סושיאל ו-UGC למותגים | ספרוס` | 35 | `PASS` | `KEEP CURRENT` | `ניהול סושיאל ויצירת UGC למותגים, כולל Reels, TikTok, הפקות וידאו, ניהול עמודים, תוכן שוטף ואסטרטגיית סושיאל מבוססת דאטה.` | 126 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/service/social` | `PASS` |
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
| `/contact` | `צור קשר | ספרוס` | 15 | `PASS` | `KEEP CURRENT` | `מוכנים להזניק את העסק שלכם? צרו קשר עם ספרוס עוד היום לפגישת ייעוץ ובניית אסטרטגיה שיווקית שתעיף את המותג שלכם קדימה.` | 116 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/contact` | `PASS` |
| `/privacy` | `מדיניות פרטיות | ספרוס` | 22 | `PASS` | `KEEP CURRENT` | `מדיניות הפרטיות של ספרוס: מידע על איסוף ושימוש בנתונים, עוגיות, כלי אנליטיקה, שמירת מידע וזכויות המשתמשים באתר.` | 114 | `PASS` | `KEEP CURRENT` | `https://www.sepros.co.il/privacy` | `PASS` |
| `/accessibility` | `הצהרת נגישות | Sepros Digital Group` | 37 | `PASS` | `KEEP CURRENT` | `הצהרת הנגישות של ספרוס דיגיטל. אנו פועלים להנגשת האתר עבור כלל המשתמשים.` | 74 | `REVIEW` | `הצהרת הנגישות והתאמות הנגישות שבוצעו באתר ספרוס דיגיטל. אנו פועלים כל העת כדי לאפשר חוויית גלישה נוחה, שוויונית ונגישה לכלל המשתמשים.` | `https://www.sepros.co.il/accessibility` | `PASS` |

---

## 4. Page-by-Page SEO Review

Detailed evaluation of heading hierarchy, ALTs, internal links, and technical indicators for all active pages.

### 1. Homepage (`/`)
* **H1 / Headings**: `PASS` (H1: `שיווק דיגיטלי שמביא תוצאות.`). Heading hierarchy is logical and outlines service categories as H2s. FAQ trigger triggers normalized to valid HTML5 `<h3><button>...</button></h3>`.
* **Images / ALT**: `PASS` (No meaningful images lacking descriptive ALTs).
* **Internal Linking**: Good. Links out to services hub and individual services.
* **Technical**: Canonical alternates configured. Indexability verified. Organization schema is present (with canonical `@id` reference and corrected SVG logo URL), and WebSite schema is present.

### 2. About Page (`/about`)
* **H1 / Headings**: `PASS` (H1: `בוטיק של תוצאות בעולם של דאטה.`). 
* **Images / ALT**: `PASS` (Team image contains appropriate Hebrew descriptive ALT).
* **Internal Linking**: Points contextually to `/contact`.
* **Technical**: Canonical alternates configured. Organization schema is present (with canonical `@id` reference and corrected SVG logo URL), and AboutPage schema is present linking to the organization.

### 3. Services Hub (`/service`)
* **H1 / Headings**: `PASS` (H1: `השירותים שלנו`).
* **Images / ALT**: `PASS` (No layout images missing ALTs).
* **Internal Linking**: Links to all 7 departments.
* **Technical**: Canonical alternates configured. Service schema provider is connected to the canonical organization `@id`.

### 4. Individual Service Pages (`/service/[id]`) — PPC, Social, Design, Tech, SEO, Strategy, Analytics
* **H1 / Headings**: `PASS` (Resolved: Implemented a single off-screen semantic `<h1>` tag with `sr-only` class to establish the document heading outline, converting responsive titles to visually visible `aria-hidden` elements to preserve the layout exactly and prevent duplication).
* **Images / ALT**:
  - `/service/social`: `PASS` (Verified: YouTube cover images use empty `alt=""` and parent triggers contain descriptive `aria-label`).
  - `/service/design`: `PASS` (Brand book illustration uses `alt="AI Generated Brand Book"`, which accurately describes the visual content).
* **Internal Linking**: `REVIEW`. High-relevance link opportunities:
  - `/service/seo` $\rightarrow$ `/articles/technical-seo-2026` (Resolved: Linked `"מדדי ה-Core Web Vitals"`)
  - `/service/ppc` $\rightarrow$ `/articles/double-your-roas` (Resolved: Linked `"ROAS Model"`)
  - `/service/tech` $\rightarrow$ `/articles/ux-color-psychology` (Resolved: Linked `"עיצוב דפי נחיתה וממשקים"`)
  - `/service/social` $\rightarrow$ `/articles/tiktok-or-instagram` (SKIP / FUTURE CONTENT OPPORTUNITY)
* **Technical**: Canonical alternate configured for all pages (`/service/${id}`). Service schema is properly generated.

### 5. Articles Hub (`/articles`)
* **H1 / Headings**: `PASS` (H1: `בלוג ומאמרים`).
* **Images / ALT**: `PASS` (Article cards use `alt={art.imageAlt}` which dynamically populates descriptive Hebrew text).
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
| `/service/social` | Generic ALT on YouTube thumbnail | Resolved: Visual gallery elements use empty `alt=""` and parent triggers contain descriptive `aria-label`. | - | **PASS** | **NO** |
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

---

# Phase 2 — Comprehensive SEO/GEO Audit

## Executive Summary
This section presents a site-wide review of Sepros Digital across all 19 active pages, mapping traditional on-page/technical SEO, search intents, copywriting trust factors, internal linking networks, structured schema data, media assets, and GEO AI search engine discoverability. The native site has a baseline of solid layouts and optimized page speeds. The audit identifies specific code-level improvements for accessibility and HTML structures, and identifies trust-related gaps that require business information to resolve.

---

## Active Page Inventory
The audited active scope comprises 19 indexable page routes. All non-optimized dynamic project directories (/casestudies/*) are excluded.

| URL | Page Type | Indexability Status | Canonical URL | Page Purpose / Primary Topic |
|---|---|---|---|---|
| `/` | homepage | ACTIVE / INDEX | `https://www.sepros.co.il/` | Brand presence, agency overview, trust/stats, contact gateway. |
| `/about` | about | ACTIVE / INDEX | `https://www.sepros.co.il/about` | Story of Sepros, vision, values, stats, core team framework. |
| `/service` | service hub | ACTIVE / INDEX | `https://www.sepros.co.il/service` | Gate to the 7 specialized department landing pages. |
| `/service/ppc` | service detail | ACTIVE / INDEX | `https://www.sepros.co.il/service/ppc` | Paid media, Google/Meta campaign optimization, lead capture. |
| `/service/social` | service detail | ACTIVE / INDEX | `https://www.sepros.co.il/service/social` | Video production (Shorts, Reels), organic social, UGC. |
| `/service/design` | service detail | ACTIVE / INDEX | `https://www.sepros.co.il/service/design` | Branding, UI/UX conceptual design, creative studio assets. |
| `/service/tech` | service detail | ACTIVE / INDEX | `https://www.sepros.co.il/service/tech` | React/Next.js custom web development, e-commerce solutions. |
| `/service/seo` | service detail | ACTIVE / INDEX | `https://www.sepros.co.il/service/seo` | Technical SEO & GEO organic search marketing, link building. |
| `/service/strategy` | service detail | ACTIVE / INDEX | `https://www.sepros.co.il/service/strategy` | Digital strategy, competitive market analysis, funnel mapping. |
| `/service/analytics` | service detail | ACTIVE / INDEX | `https://www.sepros.co.il/service/analytics` | Tracking setup (GA4, GTM), data dashboards, BI reporting. |
| `/articles` | articles hub | ACTIVE / INDEX | `https://www.sepros.co.il/articles` | Listing portal for educational blog posts and updates. |
| `/articles/technical-seo-2026` | article | ACTIVE / INDEX | `https://www.sepros.co.il/articles/technical-seo-2026` | Informational guide on 2026 technical SEO and AI search. |
| `/articles/double-your-roas` | article | ACTIVE / INDEX | `https://www.sepros.co.il/articles/double-your-roas` | Informational guide on conversion rates and paid bidding options. |
| `/articles/tiktok-or-instagram` | article | ACTIVE / INDEX | `https://www.sepros.co.il/articles/tiktok-or-instagram` | Informational guide comparing social network reach and profiles. |
| `/articles/ux-color-psychology` | article | ACTIVE / INDEX | `https://www.sepros.co.il/articles/ux-color-psychology` | Informational guide on UX colors, contrast, and cognitive load. |
| `/careers` | careers | ACTIVE / INDEX | `https://www.sepros.co.il/careers` | Agency job opportunities list, description toggles, submission forms. |
| `/contact` | contact | ACTIVE / INDEX | `https://www.sepros.co.il/contact` | Address info, company hours, map, lead capture contact form. |
| `/privacy` | policy/utility | ACTIVE / INDEX | `https://www.sepros.co.il/privacy` | Legal disclosures, cookies policies, tracking guidelines. |
| `/accessibility` | policy/utility | ACTIVE / INDEX | `https://www.sepros.co.il/accessibility` | Accessibility regulations compliance statement (placeholder). |

---

## On-Page SEO

### SEO Title & Meta Description
All 19 active titles are distinct, unique, and describe the target page topic accurately. Descriptions are fully populated and relevant.
* **Violation (Meta Description)**: `/accessibility` meta description is too short (74 characters).
* **Articles Hub (Correction)**: `/articles` cards use `alt={art.imageAlt}` which dynamically populates unique, approved Hebrew alt text. The audit claim that it uses `alt={art.title}` is stale.

### H1 & Headings Hierarchy
Exactly one semantic H1 exists in the document layout of all active pages. Heading outlines (H2-H4) flow logically to separate concepts.
* **Semantic Nesting Evaluation (FAQ H3 inside Button)**:
  * *HTML Validity*: Under HTML5 standards, placing an `<h3>` heading inside a `<button>` is invalid because buttons only allow phrasing content.
  * *A11y/Outline Impact*: In modern screen readers, this nesting maintains valuable structural heading shortcuts (users can jump straight to questions), which would be lost if changed to generic spans/divs.
  * *Lighthouse Tools*: No accessibility errors are reported by Lighthouse for this nesting.
  * *Final recommendation*: **KEEP CURRENT** (changing to spans/divs introduces high risk of losing semantic heading outline navigation for screen readers).
* **Careers Job Items (Correction)**:
  * *Current Markup*: Clickable parent `div` containers (line 83) trigger job descriptions.
  * *Recommended Semantic Element*: **button** (restructured to wrap job header elements and act as the WAI-ARIA accordion trigger, leaving the body descriptions in a panel container outside the button).
* **Service Portfolio Cards (Correction)**:
  * *Current Markup*: `div` elements with background images and inline `window.open` handlers to navigate to project URLs.
  * *Recommended Semantic Element*: **`<a>` (anchor element)** wrapping the card or as the card container. Since these navigate to external URLs, an anchor element is semantically correct, makes it natively focusable, and allows search bots to crawl the URLs. Visual layout/regression risk is extremely low (can easily styled with `display: block`).

---

## Search Intent / Topic Mapping
All indexable pages serve unique search intents, divided cleanly between Commercial/Transactional landing pages and Informational article directories. 
* **Cannibalization language**: No obvious content/intent overlap is detected in the current repository code structure. However, real search-query cannibalization must be verified using live search performance data (Google Search Console) once the site is deployed.

---

## Content Quality
Landing page content is written in clear Hebrew. However, there are generic marketing claims ("100% ROI", "24/7 data tracking", "99.9% uptime") that lack client evidence or inline proof. 
* **Trust proofs**: Client project results and performance metrics are missing on dynamic `/service/[id]` pages (`HUMAN INPUT REQUIRED`).
* **Verified Dashboard Claim**: Factual business input confirmed that every PPC client receives an automatically updating dashboard. The phrase "בזמן אמת" was replaced with "מתעדכן באופן אוטומטי" since updates occur daily rather than in real-time.

---

## Internal Linking
The global header/footer navigation maps all pages, preventing orphans.
* **Design Link Candidate (APPROVE CANDIDATE)**: Link `/service/design` $\rightarrow$ `/articles/ux-color-psychology` (Anchor: `"עיצוב UI/UX"` inside FAQ 3 question: `"באיזה אופן מתבצע עיצוב UI/UX אצלכם?"`). Copy changes: **No**. User benefit: Connects branding and interface descriptions to practical color and cognitive load guidelines.
* **Analytics Link Candidate (SKIP)**: The proposed link from `/service/analytics` to `/articles/technical-seo-2026` via the anchor `"מקורות התנועה"` has a very weak semantic relationship. The Technical SEO article discusses core web vitals and crawl bots, which does not expand on traffic source metrics.

---

## Technical SEO
* **Robots.txt & Sitemap**: Configured correctly. Stale or deferred case study URLs are excluded.
* **URL consistency**: Trailing slash formats are off. Canonical tags are consistent. No redirect chains exist.

---

## Image / Media
* **Opportunity**: The social YouTube Shorts cover images use empty `alt=""` and parent triggers contain descriptive `aria-label` based on mapped video titles (`PASS`).

---

## Structured Data
Organization, Blog, and Service schemas are present with valid matching URLs and descriptions.
* **BreadcrumbList Schema (Correction)**:
  * *BreadcrumbList already present*: **NO** (not present in the codebase).
  * *Validation*: Neither `/articles/[slug]` nor `/service/[id]` templates contain BreadcrumbList schema in their JSON-LD output.
  * *Recommendation*: Implement schema for inner pages on **both** dynamic templates.
* **JobPosting Schema (Correction)**:
  * *Hiring organization*: Sepros Digital (known).
  * *Factual gaps*: The repository lacks the required publishing date (`datePosted`), expiration date (`validThrough`), and structured role-specific location data for active vacancies.
  * *Status*: **HUMAN INPUT REQUIRED** (do not invent mock values).

---

## GEO / AI Search
* **Entity Clarity**: Clear mapping of Sepros Digital and its service offerings.
* **Trust/Evidence Gaps**: Leadership biographies (`/about`) and dynamic client performance data (`/service/[id]`) are missing (`HUMAN INPUT REQUIRED`).

---

## Trust / Entity Signals
Authorship fields on `/articles/[slug]` are published under the brand name. Attributing them to specific human authors with bios will enhance authority (`HUMAN INPUT REQUIRED`).

---

## Social Metadata
All indexable pages have OpenGraph meta elements (`og:title`, `og:description`, `og:image`) configured in their export metadata blocks.
* **Violation**: `/accessibility` page has no OG meta tags.

---

## Performance
* **VERIFIED (in local production mode)**: `/service/tech` page shows excellent performance (~92-95 mobile score).
* **CODE-LEVEL REVIEW ONLY**: Homepage, articles hub, dynamic articles, about, and contact pages have not been performance-tested directly. Review of code reveals standard lightweight CSS/JS with low layout shift risks (`IGNORE / FRAMEWORK`).

---

## Indexation Strategy
* **ACTIVE / INDEX**: 19 Core pages.
* **DEFERRED / NOINDEX**: `/casestudies`, `/casestudies/[slug]` (dynamic project routes).

---

## Content Architecture / Gaps
Two topical gaps are identified in the current article cluster:
1. **Strategy Cluster Gap (Priority: MEDIUM)**: No article supports `/service/strategy`. Opportunity: `"כיצד לבנות אסטרטגיה שיווקית לעסק: מדריך מעשי"`.
2. **Analytics Cluster Gap (Priority: MEDIUM)**: No article supports `/service/analytics`. Opportunity: `"מעבר ל-GA4 וניטור צד שרת: מה שחשוב למותגים לדעת"`.

---

## Duplication / Cannibalization
No duplicate headers, titles, descriptions, or duplicate copy segments exist.

---

## Phase 2 Optimization Queue

This backlog groups new unresolved Phase 2 findings. **None of these items are approved for implementation yet.**

| URL | Area | Finding | Current State | Suggested Action | Status | Priority | Approval: Code | Input: Company | Source File / Component |
|---|---|---|---|---|---|---|---|---|---|
| `/accessibility` | Technical SEO | Missing OG tags | No `openGraph` block | Add OG properties matching page title/description | **FAIL** | **MEDIUM** | YES | NO | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/accessibility/page.jsx) |
| `/accessibility` | On-Page SEO | Short meta description | 74 chars description | Apply descriptive 140-char meta text | **REVIEW** | **LOW** | YES | YES | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/accessibility/page.jsx) |
| `/` | On-Page SEO / A11y | Invalid semantic heading nesting | `h3` inside `button` in FAQs | Normalize trigger to valid `<h3><button>...</button></h3>` nesting | **PASS** | **LOW** | YES | NO | [FAQ.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/components/FAQ.jsx) |
| `/careers` | On-Page SEO | Job item triggers use button elements | Accordion restructuring implemented | Native `<h2> <button> ... </button> </h2>` handles Enter/Space with clean phrasing spans inside | **PASS** | **LOW** | YES | NO | [Careers.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Careers.jsx) |
| `/service/[id]` | On-Page SEO | Portfolio cards converted to native anchors | Cards converted from div to `<a>` | Native focus and crawlable paths enabled | **PASS** | **LOW** | YES | NO | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/design` | Internal Links | Link opportunity | Linked "עיצוב ה-UX" inside Process step 3 | Links safely to `/articles/ux-color-psychology` | **PASS** | **MEDIUM** | YES | NO | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/analytics` | Internal Links | Link opportunity | proposed traffic source link is weak | Skip analytics $\rightarrow$ Tech SEO article link | **SKIP** | **MEDIUM** | NO | NO | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/social` | Image / Media | YouTube thumbnails alt optimization | Carousel controls accessible names added | Dynamic title aria-labels and decorative empty alts | **PASS** | **LOW** | YES | YES | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| Inner Pages | Structured Data | Breadcrumbs schema added | BreadcrumbList schemas rendered in dynamic templates | Fully verified dynamic title/URL outputs | **PASS** | **LOW** | YES | NO | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| Site-wide | Structured Data | Duplicate and 404 logo schema paths | Standalone disconnected Organization blocks | Unify Organization under canonical `@id`, correct logo URLs to validated SVG path, and add WebSite / AboutPage schemas | **PASS** | **MEDIUM** | YES | NO | Multiple View Files |
| `/` / `/about` | GEO / Content | Agency identity and team details missing in copy | Vague Hero and omitted SEO/Social specialties in team description | Add agency identity to Hero copy and expand team details in About section | **PASS** | **MEDIUM** | YES | NO | [Home.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Home.jsx), [AboutSection.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/components/AboutSection.jsx) |
| `/` | GEO / Content | FAQ campaign success dashboard claim | Claimed real-time "בזמן אמת" dashboard | Rephrase to specify automated updates matching daily refresh | **PASS** | **MEDIUM** | YES | NO | [Home.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Home.jsx) |
| `/` | On-Page / GEO | SEO card ranking guarantee | Card description "מביאה למקומות הראשונים" | Rephrase to "מגדילה חשיפה אורגנית" to avoid ranking guarantee | **PASS** | **MEDIUM** | YES | NO | [ServicesCarousel.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/components/ServicesCarousel.jsx) |
| `/` | GEO / Content | FAQ result timeline ranges | Stated PPC (30-90 days) and SEO (3-6 months) fixed ranges | Rephrase to conditional wording to avoid implying guaranteed timelines | **PASS** | **MEDIUM** | YES | NO | [Home.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Home.jsx) |
| `/` | GEO / Content | FAQ target client validation | Verify "האם אתם עובדים עם עסקים קטנים?" | Target profile (medium/large and scaleups) confirmed | **PASS** | **LOW** | NO | YES | [Home.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Home.jsx) |
| `/` | GEO / Content | FAQ boutique agency model | Verify "מה מייחד את ספרוס משאר הסוכנויות?" | Boutique model and direct client service confirmed | **PASS** | **LOW** | NO | YES | [Home.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Home.jsx) |
| `/about` | GEO / Content | Continuous monitoring claim | Badge "24/7 ניטור דאטה" | CRM and Analytics continuous tracking structure confirmed | **PASS** | **LOW** | NO | YES | [AboutSection.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/components/AboutSection.jsx) |
| `/careers` | Structured Data | Missing Job Posting schema | No `JobPosting` tag | Implement schema for active vacancies in jobs array | **HUMAN INPUT REQUIRED** | **LOW** | YES | YES | [Careers.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Careers.jsx) |
| `/accessibility` | GEO / Content | Accessibility statement placeholder | "הצהרת הנגישות בבנייה" | Gather and apply final accessibility statement text | **HUMAN INPUT REQUIRED** | **HIGH** | YES | YES | [Accessibility.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Accessibility.jsx) |
| `/articles/[slug]` | GEO / Content | Anonymous authorship | Published under brand | Add author profiles/writer details to articles data | **HUMAN INPUT REQUIRED** | **MEDIUM** | YES | YES | [ArticlePage.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx) |
| `/about` | GEO / Content | Leadership biographies missing | No leadership team bios | Gather professional bios of founders/key leaders | **HUMAN INPUT REQUIRED** | **LOW** | YES | YES | [AboutSection.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/components/AboutSection.jsx) |
| `/service/[id]` | GEO / Content | Project statistics missing | No client result proof | Gather case studies metrics and performance facts | **HUMAN INPUT REQUIRED** | **LOW** | YES | YES | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/social` | GEO / Content | YouTube Shorts titles mapped | Carousel baseItems loaded with authoritative titles | Mapped dynamic titles and play trigger aria-labels | **PASS** | **LOW** | YES | YES | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/social` | GEO / Content | Social Hero & Copy Cleanup | Hero description, process heading, FAQ 1/3/4/5, and metadata | Optimize metadata, soften Hero/FAQ/Process copy, and clean up virality language | **PASS** | **MEDIUM** | YES | NO | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/analytics` | GEO / Content | Analytics copy cleanup & typos | Real-time claims, weekly reviews, and grammar typos | Apply dashboard and weekly review phrasing, correct "פריסת" and "יפהפה" typos | **PASS** | **MEDIUM** | YES | NO | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/seo` | On-Page / SEO | SEO Cross-Zone typo | Typo "קרוס-זונג" in services card | Correct "קרוס-זונג" to "קרוס-זון" (surrounding copy remains pending review) | **PASS** | **MEDIUM** | YES | NO | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/analytics` | GEO / Content | BigQuery business integration | GA4 connection with BigQuery | Verify if BigQuery storage pipeline is set up for clients | **HUMAN INPUT REQUIRED** | **MEDIUM** | NO | YES | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/analytics` | GEO / Content | GTM Server-Side validation | Google Tag Manager Server-side capability | GTM server container setup confirmed as active service offering | **PASS** | **LOW** | NO | YES | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/seo` | On-Page / SEO | SEO FAQ 5 grammar correction | Typo "בדיקת מהירות שרתי" in technical FAQ 5 | Correct "בדיקת מהירות שרתי" to "בדיקת מהירות שרתים" | **PASS** | **LOW** | YES | NO | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/ppc` | GEO / Content | PPC Hero & Copy Cleanup | Hero PPC phrasing, ROAS scaling, ROI doubling guarantee, and Dashboard automatic updates | Rephrase Hero long description, Process Step 4, Graph text, and FAQ 4/5 answers | **PASS** | **MEDIUM** | YES | NO | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/ppc` | GEO / Content | PPC B2C/e-commerce validation | eCommerce campaign experience | Verify eCommerce/retail performance history for B2C clients | **HUMAN INPUT REQUIRED** | **MEDIUM** | NO | YES | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/ppc` | GEO / Content | PPC stats numeric verification | PPC stats (x4.5 ROAS, -45% CPL, +350% Sales, graph values) | Verify client performance stats for paid media metrics | **HUMAN INPUT REQUIRED** | **MEDIUM** | NO | YES | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/strategy` | Content Gaps | Missing strategy article | Strategy hub page only | Write strategic marketing cluster support post | **POTENTIAL OPPORTUNITY** | **MEDIUM** | YES | YES | [Articles.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Articles.jsx) |

| `/service/analytics` | Content Gaps | Missing analytics article | Analytics hub page only | Write data analytics cluster support post | **POTENTIAL OPPORTUNITY** | **MEDIUM** | YES | YES | [Articles.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Articles.jsx) |


---

# MASTER SEO/GEO COVERAGE CHECKLIST

## 1. Crawling & Indexation
* **Status**: **DONE** (At code level)
* **Code Verified**:
  * robots.txt correctly lists sitemap.xml location.
  * sitemap.xml exists and maps all 19 active indexable page instances.
  * Dynamic case studies (`/casestudies/*`) set to `noindex/nofollow` via Next.js metadata blocks and excluded from sitemap.xml.
  * Orphan-page risk is eliminated (all 19 pages are linked in footer/header navigation).
* **Search Console / Google Verification Required** (*External data dependencies*):
  * Monitor Google indexation coverage, crawling rates, and processing status of sitemap.xml.
  * Verify HTTP/HTTPS and www/non-www redirect handling on hosting provider (Vercel/Netlify).

## 2. URL & Canonical Architecture
* **Status**: **DONE** (At code level)
* **Code Verified**:
  * Every page template renders a self-referencing canonical tag.
  * Dynamic canonical generation implemented on `/service/[id]` and `/articles/[slug]`.
  * URL format is consistent without trailing slashes. Slugs are clean and optimized.

## 3. Titles & Meta Descriptions
* **Status**: **PARTIAL**
* **Code Verified**:
  * 18 of 19 pages have unique, optimized Hebrew Titles and Meta Descriptions (resolved contact description transcription typo).
  * Dynamic title/description output verified on service and article dynamic routes.
* **What Remains**:
  * `/accessibility` page placeholder statement lacks custom meta description and `openGraph` tags (will be resolved in a single deferred company-input batch).
  * Global X (Twitter) card metadata blocks are missing (**OPTIONAL / SOCIAL ENHANCEMENT** - does not constitute an SEO rank requirement).

## 4. Headings & Semantic HTML
* **Status**: **DONE**
* **Code Verified**:
  * Exactly one H1 exists on all active templates.
  * Service pages use a visually hidden H1 (`sr-only`) to avoid layout duplicates while maintaining hierarchy.
  * Accordion job card headers are wrapped in `<h2>` tags, nesting `<button>` triggers containing phrasing-content spans (fully valid HTML5).
  * FAQ accordion trigger nesting (H3 inside button) is intentionally preserved to maintain screen reader outline navigation (**KEEP CURRENT**).

## 5. Structured Data / Schema
* **Status**: **PARTIAL**
* **Code Verified**:
  * Organization, Blog, Service, BreadcrumbList, and FAQPage schemas exist.
* **Schema Violations / What Remains**:
  * **Relative Image URL (Article Schema)**: Resolved (absolute paths rendered: `https://www.sepros.co.il/articles/...`).
  * **Missing Article Schema Attributes**: Resolved (added `mainEntityOfPage` dynamic canonical association and `publisher` blocks).
  * **Missing schemas**: LocalBusiness is optional since Sepros serves national/global markets. Enriching the existing `Organization` schema with `address`, `contactPoint`, and `sameAs` (social profile links) is preferred.
  * **Required/Recommended Field Gaps**: Person (author profiles) and JobPosting (active vacancies) schemas require client input data.
* **Schema Matrix**:
  * Organization: `IMPLEMENTED` (requires enrichment / sameAs)
  * WebSite: `SHOULD ADD` (without sitelinks search box `SearchAction` - Google retired Sitelinks Search Box globally in November 2024, so search box actions are **REMOVE RECOMMENDATION**)
  * WebPage: `OPTIONAL`
  * Service: `IMPLEMENTED`
  * Article: `PASS` (dynamic absolute paths, mainEntityOfPage canonical association, and publisher blocks added and verified)
  * Blog: `IMPLEMENTED`
  * BreadcrumbList: `IMPLEMENTED`
  * FAQPage: `IMPLEMENTED`
  * JobPosting: `HUMAN INPUT REQUIRED` (defer implementation)
  * LocalBusiness / ProfessionalService: `OPTIONAL` / `HUMAN INPUT REQUIRED`
  * Person: `HUMAN INPUT REQUIRED`

## 6. Internal Linking
* **Status**: **CURRENT FOUNDATION COMPLETE / FUTURE DATA-DRIVEN REVIEW**
* **Code Verified**:
  * Zero orphan pages detected.
  * Batch 1 + 2 contextual links successfully implemented (`/service/seo` $\rightarrow$ `/articles/technical-seo-2026`, `/service/ppc` $\rightarrow$ `/articles/double-your-roas`, `/service/tech` $\rightarrow$ `/articles/ux-color-psychology`, and `/service/design` $\rightarrow$ `/articles/ux-color-psychology` inside process steps).
  * Obsolete/weak links (`/service/analytics` $\rightarrow$ SEO and `/service/social` $\rightarrow$ TikTok/Instagram Reels) are skipped/deferred. Future linking updates will be mapped based on Search Console queries.

## 7. Image SEO
* **Status**: **STATIC IMAGE SEO DONE / VIDEO THUMBNAILS DECORATIVE**
* **Code Verified**:
  * Article hero images use next/image with LCP optimization settings.
  * ALT tags are fully implemented for static illustrations and logos.
  * UGC Shorts video carousel thumbnails use empty alt tags (`alt=""`) because the parent interactive triggers expose unique, descriptive accessible names.

## 8. Video SEO
* **Status**: **PARTIAL**
* **Code Verified**:
  * Carousel baseItems are loaded with authoritative titles.
  * Play trigger button containers have `role="button"`, focus styles, and unique accessible names (`aria-label="נגן סרטון: [Exact Title]"`).
  * Inactive / off-screen cards have `tabIndex={-1}` and are skipped by keyboard focus, preventing focus trap. Tab order is reordered to go Right Chevron -> Active Card -> Left Chevron.
  * Active playing video iframe receives the exact video title dynamically.
* **What Remains**:
  * VideoObject schema blocks (deferred/optional).
* **Dependency**: VideoObject schema requires publication metadata (uploadDate, description, contentUrl) which is unavailable.

## 9. Content Quality & Search Intent
* **Status**: **PARTIAL**
* **Code Verified**:
  * High-conversion landing copy is aligned with transaction intents. Deep informational articles map research intent.
* **What Remains**:
  * `/accessibility` statement is a text placeholder.
  * Marketing copy contains unverified promotional claims.

## 10. Content Gaps / Topical Authority
* **Status**: **PARTIAL**
* **Code Verified**:
  * PPC, Social, Design, Tech, and SEO/GEO pages are supported by informational articles.
* **What Gaps Remain**:
  * Strategy Department (`/service/strategy`) and Analytics Department (`/service/analytics`) lack supporting articles in their clusters.

## 11. GEO / AI Search Readiness
* **Status**: **PARTIAL**
* **Code Verified**:
  * Clear entity profiles and direct explanations. FAQs provide direct extraction answers.
* **What Remains**:
  * Missing founder credentials, author bios, and measurable client results (`HUMAN INPUT REQUIRED`).

## 12. E-E-A-T / Trust
* **Status**: **HUMAN INPUT REQUIRED**
* **What Remains**:
  * Leadership backgrounds, professional writer profiles, client results metrics, and editorial policies are missing.

## 13. Local SEO
* **Status**: **NOT STARTED**
* **What Remains**:
  * LocalBusiness schema and GBP verification require phone numbers, operating hours, coordinates, and Google Business Profile credentials.

## 14. Technical Performance
* **Status**: **TECHNICAL PERFORMANCE / PRODUCTION VERIFIED (for `/service/tech`) / CODE-LEVEL REVIEW ONLY (for other templates)**
* **Code Verified**:
  * Turbopack built-in optimizations, lazy loading, and WebP compression are clean. CookieYes consent banner is active.
* **Verification Required**: Real-world Core Web Vitals field data monitoring (via Google PageSpeed Insights / Search Console).

## 15. Mobile SEO
* **Status**: **DONE** (At code layout level)
* **Code Verified**:
  * Viewport and tap target spacing are correct. Responsive header outlines prevent layouts shifts.
* **Verification Required**: Real-device physical screen verification (Android/iOS).

## 16. Accessibility as SEO Support
* **Status**: **DONE**
* **Code Verified**:
  * Enable widget removed successfully. Keyboard Tab focus, Space/Enter controls, and aria bindings are correct.

## 17. Search Console / Real Google Data
* **Status**: **EXTERNAL DATA REQUIRED**
* **What Remains**: Monitoring click rates, search queries CTR, position listings, canonical selections, and indexing errors via Google Search Console.

## 18. Keyword Research
* **Status**: **NOT STARTED** / **EXTERNAL DATA REQUIRED**
* **What Remains**: Complete structured keyword data analysis, search volumes, SERP volatility, and prioritization lists using third-party tools.

## 19. Competitor / SERP Analysis
* **Status**: **NOT STARTED**
* **What Remains**: Audit of top competing domains, backlink counts, SERP features, and ranking content layouts.

## 20. Off-Page SEO / Backlinks
* **Status**: **NOT STARTED** / **EXTERNAL DATA REQUIRED**
* **What Remains**: Analyze backlinks volume, DA, referral domains, and search PR gap.

## 21. Analytics & Measurement
* **Status**: **PARTIAL**
* **Code Verified**:
  * Vercel Web Analytics tracking logic and CookieYes consent block are loaded.
* **What Remains**:
  * Google Tag Manager (GTM) or GA4 tracking script integration is missing.
  * GA4/GTM script blocks are **HUMAN / COMPANY INPUT REQUIRED** to align on measurement IDs and CookieYes consent Mode mapping first to prevent duplication or consent mode failures.

---

## Master Coverage Matrix

| SEO Area | Status | What Is Complete | What Remains | Next Dependency | Priority |
|---|---|---|---|---|---|
| **1. Crawling & Indexation** | `DONE` | Robots.txt, dynamic sitemap, cases page noindex | Search Console index tracking | `EXTERNAL DATA` | HIGH |
| **2. URL & Canonical** | `DONE` | Alternates dynamic canonicals on all routes | None | None | LOW |
| **3. Titles & Descriptions** | `PARTIAL` | 18 of 19 pages optimized | `/accessibility` OG tags, global Twitter cards | `CODE WORK` | MEDIUM |
| **4. Headings & Semantics** | `DONE` | Visually hidden H1 layers, Careers accordion button heading wrappers | None | None | LOW |
| **5. Structured Data / Schema** | `PASS` | Article absolute image URLs, mainEntityOfPage canonicals, publisher blocks, Breadcrumbs, Blog, FAQ schemas | None (LocalBusiness, WebSite schemas are optional) | None | LOW |
| **6. Internal Linking** | `CURRENT FOUNDATION COMPLETE / FUTURE DATA-DRIVEN REVIEW` | 4 contextual links, navigation blocks | None | None | LOW |
| **7. Image SEO** | `STATIC IMAGE SEO DONE / VIDEO THUMBNAILS DECORATIVE` | Eager load LCP priority images, alt tags, empty video thumbnail alts | None | None | LOW |
| **8. Video SEO** | `PARTIAL` | Carousel baseItems loaded with dynamic titles, play triggers unique aria-labels, empty thumbnail alts, dynamic active iframe titles | VideoObject schema blocks (deferred/optional) | None | LOW |
| **9. Content Quality** | `PARTIAL` | Search intent mapping, FAQ content | Placeholders replacement, promo copy check | `HUMAN INPUT` | MEDIUM |
| **10. Content Gaps** | `PARTIAL` | 5 of 7 core clusters supported | Strategy and Analytics blog posts | `HUMAN INPUT` | MEDIUM |
| **11. GEO / AI Search** | `PARTIAL` | FAQ definition blocks, entity outlines | Leader bios, author names, case study numbers | `HUMAN INPUT` | HIGH |
| **12. E-E-A-T / Trust** | `HUMAN INPUT REQUIRED` | Basic brand contact info and policy rules | Founder credentials, writer bios, case metrics | `HUMAN INPUT` | HIGH |
| **13. Local SEO** | `NOT STARTED` | Kfar Saba address in footer | LocalBusiness schema, Google Business Profile | `HUMAN INPUT` / `EXTERNAL DATA` | HIGH |
| **14. Technical Performance**| `TECHNICAL PERFORMANCE / PRODUCTION VERIFIED (for /service/tech) / CODE-LEVEL REVIEW ONLY (for other templates)` | /service/tech verified (~92-95 mobile) | Real-world CWV field data tracking | `EXTERNAL DATA` | HIGH |
| **15. Mobile SEO** | `DONE` | Responsive viewport and layouts verified | Real-device physical screen verification | `EXTERNAL DATA` | LOW |
| **16. Accessibility** | `DONE` | Button triggers, anchor wrappers, Enable widget removed | None | None | LOW |
| **17. Search Console Data** | `EXTERNAL DATA REQUIRED` | None | Verify indexing states, CTR, search queries | `EXTERNAL DATA` | HIGH |
| **18. Keyword Research** | `NOT STARTED` | Basic page targeting | Volume and competition prioritization | `EXTERNAL DATA` | HIGH |
| **19. Competitor Analysis** | `NOT STARTED` | None | Competitive content depth and SERP gaps | `EXTERNAL DATA` | MEDIUM |
| **20. Off-Page / Backlinks** | `NOT STARTED` | None | Referring domains and PR backlinks gap | `EXTERNAL DATA` | MEDIUM |
| **21. Analytics / Tracking** | `PARTIAL` | Vercel Analytics tracking | GA4 / GTM script blocks | `HUMAN INPUT` | HIGH |

---

## PRE-COMMIT REMAINING WORK

This section lists exact actionable steps prior to committing our Phase 2 optimizations.

### A. SAFE TO COMPLETE NOW (Technical / On-Page)
* None (Article schema absolute paths and dynamic canonical attributes are fully implemented and verified).

### B. REQUIRES COMPANY INPUT
1. **Accessibility Metadata & Copy**: Compile and apply final Hebrew accessibility statement, optimized meta description, and `openGraph` block to [`src/app/accessibility/page.jsx`](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/accessibility/page.jsx).
2. **Leadership biographies**: Provide professional bios of founders/key managers for the `/about` team section in [`src/components/AboutSection.jsx`](file:///c:/Users/Sandra/Desktop/sepros-site/src/components/AboutSection.jsx).
3. **Case studies proof data**: Provide real statistics and metrics (ROAS, traffic percentages) to replace promotional guarantees on service pages in [`src/views/DepartmentDetail.jsx`](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx).
4. **Article authors names**: Provide professional profiles/credentials for article author slots in [`src/app/articles/[slug]/page.jsx`](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/articles/[slug]/page.jsx).
5. **Strategy and Analytics posts**: Provide content for the strategy and analytics cluster gap articles.
6. **GA4 / GTM Measurement IDs**: Provide active GA4 (G-XXXXXX) or GTM (GTM-XXXXXX) containers to set up script tags.
7. **LocalBusiness details**: Provide official company phone numbers, coordinates, and operating hours.
8. **Homepage statistics**: Confirm and verify the exact figures for active clients (150+), managed campaigns (1200+), and budgets (50M+) on the Homepage.

### C. REQUIRES EXTERNAL DATA
1. **Google Search Console Access**: Access search console account data to monitor canonical selection, CTR queries, and crawling issues.
2. **Google Business Profile Access**: Access GBP location registry to optimize local map listings.
3. **Keyword Database access**: Use keyword tools (Semrush/Ahrefs/Google Keyword Planner) to map Hebrew query demand and prioritization.
4. **Competitors & Backlinks Analysis**: Analyze referral profiles, domain authority, and digital PR link gaps using backlink checkers.
5. **Real-world Core Web Vitals monitoring**: Inspect field data from real-world visits.


## Recommended Next-Phase Work Batches

Based on our corrected classifications, we recommend executing the remaining work in the following order:

* **Batch 1: Technical Schema Fixes (Queue A: Items 1, 2, 3)**
  * *Focus*: Resolve Article schema warnings (relative image URLs, missing publisher and mainEntityOfPage attributes) and enrich Organization schema with Kfar Saba offices and social profile URLs.
  * *Reasoning*: High SEO value, zero visual risk, and relies only on verified repository data.
* **Batch 2: GSC Validation & Index Monitoring (Queue C: Item 1)**
  * *Focus*: Access Google Search Console to monitor page indexing states, sitemap processing, crawl health, and keyword positions.
  * *Reasoning*: Essential diagnostic baseline to verify current URL canonical indexing before executing new code modifications.
* **Batch 3: Company Trust & E-E-A-T Data Collection (Queue B: Items 1, 2, 3, 4)**
  * *Focus*: Compile final Hebrew accessibility copy to replace placeholder, add founder profiles, attribute article writers, and align real client project statistics.
  * *Reasoning*: Drives GEO/AI engine content extraction readiness and satisfies standard Google E-E-A-T requirements.
* **Batch 4: Keyword & Competitor Research (Queue C: Items 3, 4)**
  * *Focus*: Retrieve Hebrew search query volumes and competitor link profiles.
  * *Reasoning*: Identifies content gap opportunities to write the Strategy and Analytics blog clusters.
* **Batch 5: Analytics and Local SEO Strategy (Queue B: Items 5, 7, 8 + Queue D Items 1, 3, 4)**
  * *Focus*: Align GA4/GTM container IDs with CookieYes Consent Mode, optimize Google Business Profile registries, and determine local search priorities.
  * *Reasoning*: Implements measurement overlays and local listings once dependencies are met.


