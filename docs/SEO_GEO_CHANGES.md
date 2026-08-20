# SEO + GEO Change Log

This file records changes actually made to the repository.

Suggestions do not belong here. Suggestions belong in `SEO_GEO_AUDIT.md`.

Do not delete previous entries.

# Change Entry Template

## YYYY-MM-DD — Short task name

### Request / Approval

Describe what was requested or approved.

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|

`Type` should normally be `SEO`, `GEO`, or `SEO + GEO`.

### Automatic Safe Fixes

List automatic changes allowed by `SEO_GEO_RULES.md`, such as clear ALT fixes.

- None

### Files Modified

- `path/to/file`

### Verification

- [ ] Relevant `SEO_GEO_TESTS.md` checks run
- [ ] `git diff` reviewed
- [ ] No unintended design changes
- [ ] No unintended layout changes
- [ ] No unintended functionality changes
- [ ] SEO/GEO implementation verified
- [ ] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
-

**Failed**
-

**Needs Review**
-

### Manual Verification

List exactly what should be checked manually and where.

Example:

- `/seo`
  - Confirm browser/page title.
  - Inspect meta description.
  - Confirm H1 still renders correctly.
  - Review approved visible GEO copy in context.
  - Confirm no visual/layout change.

### Intentionally Not Changed

List findings that were not authorized or were too risky to change.

- None

### Notes / Risks

- None

---

## 2026-08-18 — Initial Technical SEO Fixes and Deferred Case Studies Noindexing

### Request / Approval

Approved implementation of four technical SEO changes:
1. Fix Articles schema URLs path mismatch to use plural `/articles/` instead of `/article/`.
2. Add canonical alternate metadata to `/service` page.
3. Add canonical alternate metadata to `/accessibility` page.
4. Temporarily apply robots `noindex` / `nofollow` metadata to deferred Case Studies routes (`/casestudies` and `/casestudies/[slug]`).

All other recommendations (titles, descriptions, internal links, H1 changes, visible copy) were explicitly deferred/not approved in this batch.

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|
| `/articles` | SEO | Structured Data | BlogSchema references singular `/article/${slug}` | BlogSchema references plural `/articles/${slug}` | [Articles.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Articles.jsx#L29) |
| `/service` | SEO | Canonicals | Missing canonical alternate tag | Canonical set to `/service` | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/service/page.jsx) |
| `/accessibility` | SEO | Canonicals | Missing canonical alternate tag | Canonical set to `/accessibility` | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/accessibility/page.jsx) |
| `/casestudies` | SEO | Indexability | Accessible and indexable | robots noindex/nofollow applied | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/casestudies/page.jsx) |
| `/casestudies/[slug]` | SEO | Indexability | Accessible and indexable (client component fallback) | robots noindex/nofollow applied (server component wrapper) | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/casestudies/[slug]/page.jsx) |

### Automatic Safe Fixes

- None

### Files Modified

- `src/views/Articles.jsx`
- `src/app/service/page.jsx`
- `src/app/accessibility/page.jsx`
- `src/app/casestudies/page.jsx`
- `src/app/casestudies/[slug]/page.jsx`

### Verification

- [x] Relevant `SEO_GEO_TESTS.md` checks run
- [x] `git diff` reviewed
- [x] No unintended design changes
- [x] No unintended layout changes
- [x] No unintended functionality changes
- [x] SEO/GEO implementation verified
- [x] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
- Successful production build (`npm run build`) with no compilation/hydration errors.
- Verified dynamic metadata generation for `/casestudies/[slug]` by converting it to a Server Component wrapper.

**Failed**
- None

**Needs Review**
- None

### Manual Verification

- `/articles`
  - Verify that the rendered JSON-LD schema contains `https://www.sepros.co.il/articles/` URLs.
- `/service`
  - Verify that `<link rel="canonical" href="https://www.sepros.co.il/service" />` exists in page source.
- `/accessibility`
  - Verify that `<link rel="canonical" href="https://www.sepros.co.il/accessibility" />` exists in page source.
- `/casestudies`
  - Verify that `<meta name="robots" content="noindex,nofollow" />` exists in page source.
- `/casestudies/demo-project-0`
  - Verify that `<meta name="robots" content="noindex,nofollow" />` exists in page source.

### Intentionally Not Changed

All other recommendations from the first audit remain deferred/not changed:
- Article titles, descriptions, and canonical links.
- Visible SEO/GEO copy and internal links.
- ALT text adjustments.
- `/service/[id]` mobile H1 CSS-hidden implementation.

### Notes / Risks

- None

---

## 2026-08-19 — Dynamic Article Metadata and H1 Updates

### Request / Approval

Approved dynamic metadata and H1 adjustments for the four active articles:
1. `/articles/technical-seo-2026`
2. `/articles/double-your-roas`
3. `/articles/tiktok-or-instagram`
4. `/articles/ux-color-psychology`

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|
| `/articles/technical-seo-2026` | SEO | Headings | `המדריך המלא ל-SEO טכני ב-2026` | `SEO טכני ב-2026: שלושת עמודי התווך שחשוב להכיר` | [ArticlePage.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx#L13) |
| `/articles/technical-seo-2026` | SEO | Metadata | Fallback defaults | Approved Title, Description, and Canonical | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/articles/[slug]/page.jsx#L4) |
| `/articles/double-your-roas` | SEO | Headings | `איך להכפיל את ה-ROAS בקמפיינים בגוגל` | `שיפור ROAS בקמפיינים בגוגל: הדרכים שכדאי להכיר` | [ArticlePage.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx#L36) |
| `/articles/double-your-roas` | SEO | Metadata | Fallback defaults | Approved Title, Description, and Canonical | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/articles/[slug]/page.jsx#L9) |
| `/articles/tiktok-or-instagram` | SEO | Headings | `טיקטוק או אינסטגרם? איפה הקהל שלכם נמצא` | `KEEP CURRENT` | *None* |
| `/articles/tiktok-or-instagram` | SEO | Metadata | Fallback defaults | Approved Title, Description, and Canonical | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/articles/[slug]/page.jsx#L14) |
| `/articles/ux-color-psychology` | SEO | Headings | `עיצוב UX שמוכר: פסיכולוגיה של צבעים וממשק` | `עיצוב UX שמניע לפעולה: העקרונות שכדאי להכיר` | [ArticlePage.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx#L79) |
| `/articles/ux-color-psychology` | SEO | Metadata | Fallback defaults | Approved Title, Description, and Canonical | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/articles/[slug]/page.jsx#L19) |

### Automatic Safe Fixes

- None

### Files Modified

- `src/views/ArticlePage.jsx`
- `src/app/articles/[slug]/page.jsx`

### Verification

- [x] Relevant `SEO_GEO_TESTS.md` checks run
- [x] `git diff` reviewed
- [x] No unintended design changes
- [x] No unintended layout changes
- [x] No unintended functionality changes
- [x] SEO/GEO implementation verified
- [x] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
- Successful production build (`npm run build`) compiling `/articles/[slug]` as static pages (SSG).

**Failed**
- None

**Needs Review**
- None

### Manual Verification

- `/articles/technical-seo-2026`
  - Verify H1: `SEO טכני ב-2026: שלושת עמודי התווך שחשוב להכיר`
  - Verify Title: `SEO טכני ב-2026: 3 עמודי התווך שחשוב להכיר | ספרוס`
  - Verify Meta Description: `מה חשוב לדעת על SEO טכני ב-2026? הכירו 3 תחומים מרכזיים שמשפיעים על סריקת האתר, חוויית המשתמש וההתאמה לעידן החיפוש מבוסס AI.`
  - Verify Canonical: `https://www.sepros.co.il/articles/technical-seo-2026`
- `/articles/double-your-roas`
  - Verify H1: `שיפור ROAS בקמפיינים בגוגל: הדרכים שכדאי להכיר`
  - Verify Title: `איך לשפר ROAS בקמפיינים בגוגל | ספרוס`
  - Verify Meta Description: `רוצים לשפר את ה-ROAS בקמפיינים בגוגל? הכירו 3 נקודות שכדאי לבדוק: אסטרטגיית הבידינג, חלוקת הקמפיינים ואופטימיזציה של דפי הנחיתה.`
  - Verify Canonical: `https://www.sepros.co.il/articles/double-your-roas`
- `/articles/tiktok-or-instagram`
  - Verify H1: `טיקטוק או אינסטגרם? איפה הקהל שלכם נמצא`
  - Verify Title: `טיקטוק או אינסטגרם: מה מתאים לעסק שלכם? | ספרוס`
  - Verify Meta Description: `טיקטוק או אינסטגרם – מה מתאים יותר לעסק שלכם? הכירו את ההבדלים בקהל, בחשיפה ובסוג התוכן, ואיך לשלב בין שתי הפלטפורמות בצורה נכונה.`
  - Verify Canonical: `https://www.sepros.co.il/articles/tiktok-or-instagram`
- `/articles/ux-color-psychology`
  - Verify H1: `עיצוב UX שמניע לפעולה: העקרונות שכדאי להכיר`
  - Verify Title: `עיצוב UX שמניע לפעולה: עקרונות חשובים | ספרוס`
  - Verify Meta Description: `איך עיצוב UX יכול לעזור להניע משתמשים לפעולה? הכירו עקרונות של צבע וקונטרסט, מיקום וגודל כפתורים וצמצום עומס קוגניטיבי בממשק.`
  - Verify Canonical: `https://www.sepros.co.il/articles/ux-color-psychology`

### Intentionally Not Changed

- Article body copy.
- ALT text.
- Internal links.
- Service-page headings.
- Privacy and Accessibility page metadata (other than the canonicals fixed in Batch 1).

### Notes / Risks

- None

---

## 2026-08-19 — Articles Hub Title Synchronization

### Request / Approval

Approved synchronization of dynamic article titles in `/articles` hub to eliminate the stale title inconsistency with individual article H1s.

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|
| `/articles` | SEO | Structured Data & Hub UI | Old titles array | Synchronized approved titles array | [Articles.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Articles.jsx#L14) |

### Automatic Safe Fixes

- None

### Files Modified

- `src/views/Articles.jsx`

### Verification

- [x] Relevant `SEO_GEO_TESTS.md` checks run
- [x] `git diff` reviewed
- [x] No unintended design changes
- [x] No unintended layout changes
- [x] No unintended functionality changes
- [x] SEO/GEO implementation verified
- [x] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
- Successful production build (`npm run build`).

**Failed**
- None

**Needs Review**
- None

### Manual Verification

- `/articles`
  - Verify that the Blog JSON-LD schema now utilizes the updated article titles.
  - Verify that the visual cards on the blog hub display the updated article titles.

### Intentionally Not Changed

- Article excerpts/descriptions.
- Article body copy.
- Slugs, dates, images, or layout styling.

### Notes / Risks

- None

---

## 2026-08-19 — Privacy Page Meta Description Update

### Request / Approval

Approved metadata adjustment for `/privacy` only:
1. Update top-level meta description to the approved rich value.

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|
| `/privacy` | SEO | Metadata | `מדיניות הפרטיות של ספרוס.` | `מדיניות הפרטיות של ספרוס: מידע על איסוף ושימוש בנתונים, עוגיות, כלי אנליטיקה, שמירת מידע וזכויות המשתמשים באתר.` | [page.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/privacy/page.jsx#L5) |

### Automatic Safe Fixes

- None

### Files Modified

- `src/app/privacy/page.jsx`

### Verification

- [x] Relevant `SEO_GEO_TESTS.md` checks run
- [x] `git diff` reviewed
- [x] No unintended design changes
- [x] No unintended layout changes
- [x] No unintended functionality changes
- [x] SEO/GEO implementation verified
- [x] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
- Successful production build (`npm run build`).

**Failed**
- None

**Needs Review**
- None

### Manual Verification

- `/privacy`
  - Verify that the rendered page head contains the new `<meta name="description" content="..." />` tag.
  - Verify that OpenGraph properties remain unchanged.

### Intentionally Not Changed

- Privacy policy page visible copy, H1, title, and canonical properties.
- Accessibility metadata, content, and OpenGraph variables.
- Dynamic articles metadata, content, or styling.

### Notes / Risks

- None

---

## 2026-08-19 — Approved Internal Links Implementation

### Request / Approval

Approved implementation of three contextual internal links:
1. `/service/seo` $\rightarrow$ `/articles/technical-seo-2026` (Anchor: `מדדי ה-Core Web Vitals`)
2. `/service/ppc` $\rightarrow$ `/articles/double-your-roas` (Anchor: `ROAS Model`)
3. `/service/tech` $\rightarrow$ `/articles/ux-color-psychology` (Anchor: `עיצוב דפי נחיתה וממשקים`)

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|
| `/service/seo` | SEO | Internal Links | Plain text | Link wrapper around `"מדדי ה-Core Web Vitals"` | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx#L1574) |
| `/service/ppc` | SEO | Internal Links | Plain text | Link wrapper around `"ROAS Model"` | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx#L1489) |
| `/service/tech` | SEO | Internal Links | Plain text | Link wrapper around `"עיצוב דפי נחיתה וממשקים"` | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx#L1543) |

### Automatic Safe Fixes

- None

### Files Modified

- `src/views/DepartmentDetail.jsx`

### Verification

- [x] Relevant `SEO_GEO_TESTS.md` checks run
- [x] `git diff` reviewed
- [x] No unintended design changes
- [x] No unintended layout changes
- [x] No unintended functionality changes
- [x] SEO/GEO implementation verified
- [x] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
- Successful production build (`npm run build`).

**Failed**
- None

**Needs Review**
- None

### Manual Verification

- `/service/seo`
  - Verify that clicking "מדדי ה-Core Web Vitals" in the fifth FAQ redirects to `/articles/technical-seo-2026`.
- `/service/ppc`
  - Verify that clicking "ROAS Model" in the fourth FAQ redirects to `/articles/double-your-roas`.
- `/service/tech`
  - Verify that clicking "עיצוב דפי נחיתה וממשקים" in the first process step description redirects to `/articles/ux-color-psychology`.

### Intentionally Not Changed

- Surrounding wording for PPC, SEO, and Tech pages.
- Social page internal link (staying deferred).
- Metadata, H1, ALTs, sitemap, or schema patterns.

### Notes / Risks

- None

---

## 2026-08-19 — Runtime TypeError Fix and Article Image ALTs Implementation

### Request / Approval

1. Fix the runtime crash `TypeError: Cannot add property toJSON, object is not extensible` on `/service/[id]` pages. The approved PPC, SEO, and Tech links must remain functional.
2. Implement unique, approved ALT texts for the four active article images by introducing a dedicated `imageAlt` field in the articles data structures, decoupling image ALT from the dynamic page title/H1.

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|
| `/service/ppc`, `/service/seo` | SEO | Bug Fix / FAQs | `Object.assign` to decorate React elements with `toJSON` | Used `plainAnswer` key inside data structure to separate plain text from JSX | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |
| `/service/ppc`, `/service/seo` | SEO | Bug Fix / FAQs | `FAQ` schema text mapped directly to React element `item.a` | FAQ schema text maps to `item.plainAnswer` or fallback to string | [FAQ.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/components/FAQ.jsx) |
| `/articles`, `/articles/[slug]` | SEO / Accessibility | Image ALT | Hero/card images use `alt={article.title}` | Hero/card images use unique approved values via `alt={article.imageAlt}` | [Articles.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Articles.jsx), [ArticlePage.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx) |

### Automatic Safe Fixes

- None

### Files Modified

- `src/views/DepartmentDetail.jsx`
- `src/components/FAQ.jsx`
- `src/views/Articles.jsx`
- `src/views/ArticlePage.jsx`

### Verification

- [x] Relevant `SEO_GEO_TESTS.md` checks run
- [x] `git diff` reviewed
- [x] No unintended design changes
- [x] No unintended layout changes
- [x] No unintended functionality changes
- [x] SEO/GEO implementation verified
- [x] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
- Successful production build (`npm run build`) with static page generation.
- Verified `/service/social` renders without runtime crashes.
- Verified `/articles` and `/articles/[slug]` render with the exact approved ALT tags on all images.

**Failed**
- None

**Needs Review**
- None

### Manual Verification

- `/service/social`
  - Verify page loads successfully without type errors.
- `/articles`
  - Inspect HTML source to confirm cards use the approved Hebrew image ALT values.
- `/articles/technical-seo-2026`
  - Confirm hero image ALT is exactly `"לוח נתונים ותרשימים לאופטימיזציה טכנית של אתר"`.

### Intentionally Not Changed

- Social video carousel thumbnails ALT text (reported as `HUMAN INPUT REQUIRED`).
- Visible layout design, fonts, animations, and typography.
- Article metadata fields (title, description, canonicals, H1s).

### Notes / Risks

- None

---

## 2026-08-19 — Dynamic Service Page H1 Semantic and Accessibility Fix

### Request / Approval

Ensure each dynamic service page has exactly one semantic H1 element in the DOM while preserving the current mobile and desktop visual layout exactly, avoiding duplicate visible headings or accessibility heading issues.

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|
| `/service/[id]` (all 7 routes) | SEO + Accessibility | Headings | Responsive H1 headings (mobile H1 and desktop H1) | One off-screen `<h1 className="sr-only">` and two visible `aria-hidden` divs | [DepartmentDetail.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx) |

### Automatic Safe Fixes

- None

### Files Modified

- `src/views/DepartmentDetail.jsx`

### Verification

- [x] Relevant `SEO_GEO_TESTS.md` checks run
- [x] `git diff` reviewed
- [x] No unintended design changes
- [x] No unintended layout changes
- [x] No unintended functionality changes
- [x] SEO/GEO implementation verified
- [x] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
- Successful production build (`npm run build`) with static generation.
- Verified that exactly one `<h1>` exists in the DOM and Accessibility Tree per `/service/[id]` route.

**Failed**
- None

**Needs Review**
- None

### Manual Verification

- `/service/ppc` (or any other service page)
  - Verify that the DOM contains exactly one `<h1>` node containing the service title.
  - Verify that both visual titles are displayed correctly on mobile and desktop breakpoints with identical styling and spacing.

### Intentionally Not Changed

- Visible fonts, spacing, typography, colors, and layout positioning.

### Notes / Risks

- None

---

## 2026-08-19 — Dynamic Article Body Copy Updates

### Request / Approval

Approved dynamic article body-copy changes for the four active articles:
1. `/articles/technical-seo-2026`
2. `/articles/double-your-roas`
3. `/articles/tiktok-or-instagram`
4. `/articles/ux-color-psychology`

All other content, metadata, sitemaps, and images remain unchanged.

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|
| `/articles/technical-seo-2026` | SEO + GEO | Body Copy | Old claims and terminology (FID, zero-click schema, crawl budget) | Core Web Vitals (INP), crawl budget, and moderated AI Search Schema claims | [ArticlePage.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx) |
| `/articles/double-your-roas` | SEO + GEO | Body Copy | Unsupported ROAS ratios, "Secrets of big agencies", and value bidding claims | Fact-based performance marketing introductions and moderated value bidding / landing page claims | [ArticlePage.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx) |
| `/articles/tiktok-or-instagram` | SEO + GEO | Body Copy | Zero-follower views, brand archive characterizations, and rigid styling guidelines | Balanced organic reach, brand presence, and flexible cross-posting conclusions | [ArticlePage.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx) |
| `/articles/ux-color-psychology` | SEO + GEO | Body Copy | Behavioral psychologist and static color meanings claims | Modern UX principles, contextual color meanings, and contrast guidelines | [ArticlePage.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx) |

### Automatic Safe Fixes

- None

### Files Modified

- `src/views/ArticlePage.jsx`

### Verification

- [x] Relevant `SEO_GEO_TESTS.md` checks run
- [x] `git diff` reviewed
- [x] No unintended design changes
- [x] No unintended layout changes
- [x] No unintended functionality changes
- [x] SEO/GEO implementation verified
- [x] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
- Successful production build (`npm run build`) with static generation of all dynamic article pages.
- Verified exact approved copy replacements on the local site.

**Failed**
- None

**Needs Review**
- None

### Manual Verification

- `/articles/technical-seo-2026`
  - Verify that LCP/INP/CLS references are rendered instead of LCP/FID/CLS.
- `/articles/double-your-roas`
  - Confirm the intro paragraph does not reference the 1:2/1:3 ROAS ratios or agency secrets.
- `/articles/tiktok-or-instagram`
  - Verify that the conclusion header is `"שורה תחתונה: לא חייבים לבחור"`.
- `/articles/ux-color-psychology`
  - Verify that the Fitts's law section and concluding cognitive load paragraphs match the approved text.

### Intentionally Not Changed

- Headings/H1s, SEO Titles, Meta Descriptions, and Canonicals of all articles.
- Approved `imageAlt` values of all articles.

### Notes / Risks

- None

---

## 2026-08-19 — Enable Accessibility Widget Removal

### Request / Approval

Approved removal of the Enable Accessibility Widget integration (`cdn.enable.co.il` loaded in `src/app/layout.jsx`). The widget introduced numerous programmatic code violations, invalid/misspelled ARIA attributes, and incorrect role nesting. Disabling it resolves these issues, returning a native accessibility score of 100/100. CookieYes remains active and untouched.

### Changes Made

| URL | Type | Area | Before | After | File |
|---|---|---|---|---|---|
| Site-wide | Accessibility | Global Script | `<Script id="enable-accessibility" ... />` active | Enable script tag removed completely | [layout.jsx](file:///c:/Users/Sandra/Desktop/sepros-site/src/app/layout.jsx) |

### Automatic Safe Fixes

- None

### Files Modified

- `src/app/layout.jsx`

### Verification

- [x] Relevant `SEO_GEO_TESTS.md` checks run
- [x] `git diff` reviewed
- [x] No unintended design changes
- [x] No unintended layout changes
- [x] No unintended functionality changes
- [x] SEO/GEO implementation verified
- [x] `SEO_GEO_AUDIT.md` updated where applicable

### Test Results

**Passed**
- Successful production build (`npm run build`).
- Verified site-wide pages load cleanly without the Enable widget being injected.
- Native accessibility score is 100/100.

**Failed**
- None

**Needs Review**
- None

### Manual Verification

- `/`
  - Verify wheelchair logo is no longer loaded.
- `/service/tech`
  - Verify page loads successfully.
- `/accessibility`
  - Verify page content loads normally.

### Intentionally Not Changed

- CookieYes banner integration remains active and untouched in `src/app/layout.jsx`.
- All native page layouts, styles, dynamic sitemaps, internal links, H1 structure, and SEO metadata.

### Notes / Risks

- None

---

## Change Log - 2026-08-19 (Phase 2 Safe Implementation Batch)

### Approved Changes
1. **BreadcrumbList Structured Data**:
   - Added BreadcrumbList JSON-LD schema blocks to dynamic templates (`/service/[id]` and `/articles/[slug]`).
2. **Careers Accordion Accessibility**:
   - Restructured job listing cards to use native `<button>` accordion triggers with `aria-expanded` and `aria-controls` bindings, wrapped inside `<h2>` heading blocks, with all inner content converted to valid HTML phrasing `<span>` elements (removing invalid `<div>`/`<h2>` inside `<button>` nesting).
3. **Portfolio Native Anchors**:
   - Swapped clickable project card wrapper `div` blocks with semantic `<a>` anchor tags targeting external client sites with target/rel constraints.
4. **Design Contextual Link**:
   - Added contextual internal link to UX design article inside Design Process Step 3 description by wrapping `"עיצוב ה-UX"` in a `<Link>` component.
5. **Article Schema Image Paths & Semantic Attributes**:
   - Converted dynamic article image values in structured schema from relative paths (`/articles/...`) to absolute production URLs (`https://www.sepros.co.il/articles/...`).
   - Added recommended semantic attributes to JSON-LD block: `"mainEntityOfPage"` linking to dynamic canonical article URL and `"publisher"` referencing factual Sepros organization parameters and SVG logo.
6. **Social Video Carousel Accessibility & Authoritative Mapping**:
   - Mapped authoritative titles to all 10 YouTube Shorts items in the carousel, preserving existing IDs and array order.
   - Wrapped video triggers in keyboard-accessible cards with `role="button"`, focus styles, custom `onKeyDown` handlers (for Enter/Space playback triggers), and dynamic unique accessible names (`aria-label={`נגן סרטון: ${item.title}`}`).
   - Prevented keyboard traps and focus leaks on off-screen invisible cards by dynamically binding `tabIndex={isActive ? 0 : -1}`.
   - Cleared duplicate text readers announcements by setting video thumbnail images to decorative empty alt tags (`alt=""`).
   - Configured dynamic playing video iframe elements to receive the corresponding `title={item.title}` instead of a generic string.
   - Reordered DOM nesting of Right/Left Chevrons and map loops to establish a sequential, natural Tab ring progression (Right Chevron -> Active Card -> Left Chevron).

### Affected Pages
- `/service/[id]` (PPC, Social, Design, Tech, SEO, Strategy, Analytics detail pages)
- `/articles/[slug]` (All 4 dynamic articles)
- `/careers`

### Edited Files
- [`src/views/DepartmentDetail.jsx`](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/DepartmentDetail.jsx)
- [`src/views/ArticlePage.jsx`](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/ArticlePage.jsx)
- [`src/views/Careers.jsx`](file:///c:/Users/Sandra/Desktop/sepros-site/src/views/Careers.jsx)

### Test Results

**Passed**
- Successful production compilation (`npm.cmd run build`).
- Verified BreadcrumbList schema on `/service/tech` and `/articles/technical-seo-2026` via browser DOM script extraction.
- Verified dynamic Article schemas render absolute image paths, mainEntityOfPage canonical association, and publisher details correctly on all 4 articles using test script.
- Verified dynamic video carousel titles, unique aria-labels, empty thumbnail alts, playing iframe titles, and reordered natural Tab progression flow on `/service/social` via browser subagent.
- Keyboard navigation (Tab focus) and trigger selection (Space/Enter) verified on Careers job trigger buttons and portfolio card anchor elements.
- Expand/collapse toggle controls and form field inputs on Careers list items verified.
- Visual design, positioning, borders, spacing, and hover animations validated as fully preserved.

### Manual Verification
- `/careers`
  - Press `Tab` to navigate to job cards. Confirm visual focus outline and press `Space` or `Enter` to expand/collapse.
- `/service/tech`
  - Navigate to project cards. Press `Tab` to focus, press `Enter` to verify it launches link in a new tab.
- `/service/design`
  - Scroll to process step 3. Verify link "עיצוב ה-UX" is styled correctly and navigates to the UX article.
- `/articles/[slug]`
  - Inspect dynamic source code of the page, confirm absolute path in `"image"` JSON-LD matches `https://www.sepros.co.il/articles/...`.
- `/service/social`
  - Press `Tab` to focus Right Chevron, press `Tab` to focus active center video card (verify aria-label matches title), press `Tab` to focus Left Chevron. Press `Enter`/`Space` on focused active card to verify video plays inside iframe with matching title.

### Intentionally Not Changed
- Organization (homepage/about), Service, and FAQPage existing schemas (no duplicates or sameAs modifications).
- `/accessibility` layout, content, and metadata (OpenGraph tags are NOT implemented yet).
- General FAQ heading structure (h3 inside buttons kept to preserve outline accessibility).
- JobPosting schema (left for human input review).
- Authorship details and leadership bios.
- VideoObject schema blocks for Shorts videos (deferred/optional due to missing publishing date/description assets).





