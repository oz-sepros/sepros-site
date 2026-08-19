# SEO + GEO Test Suite

This document defines what the agent should inspect.

During an audit, do not modify website code. Findings belong in `SEO_GEO_AUDIT.md`.

Use:
- `PASS` — appears correct;
- `FAIL` — clear issue;
- `REVIEW` — may need improvement or human judgment;
- `N/A` — does not apply.

Severity:
- `CRITICAL`
- `HIGH`
- `MEDIUM`
- `LOW`
- `INFO`

## 1. Site Discovery

Before auditing individual pages:

- Identify the framework.
- Identify the routing system.
- Identify shared layouts/templates.
- Identify shared SEO/metadata components.
- Identify how metadata is generated.
- Build an inventory of indexable routes that can be determined from the repository.
- Distinguish indexable pages from utility/auth/admin/error pages where possible.
- Record the number of pages/routes analyzed.

# Traditional SEO Tests

## 2. SEO Titles

For every indexable page check:

- title exists;
- title is not empty;
- title is unique across indexable pages;
- title describes the page;
- title is not obviously generic;
- title is not unnecessarily duplicated.

Titles below approximately 30 characters or above approximately 60 characters should normally be `REVIEW`, not automatic failures.

Length is a guideline, not a hard rule.

Do not automatically rewrite titles.

## 3. Meta Descriptions

Check:

- description exists;
- description is not empty;
- description is unique where appropriate;
- description reflects page content;
- description is not obviously generic.

Use approximately 120-160 characters as a review guideline only.

Do not automatically write or replace descriptions without approval.

## 4. H1 and Headings

Check:

- H1 exists;
- H1 is not empty;
- no unintended multiple H1s;
- H1 represents the page topic;
- heading hierarchy is reasonable;
- headings meaningfully describe their sections.

Do not change heading levels automatically.

## 5. Image ALT

For meaningful images check:

- `alt` exists;
- ALT is descriptive;
- ALT is not a filename;
- ALT is not generic;
- ALT is not keyword-stuffed;
- repeated ALT is appropriate to context.

Decorative images with `alt=""` are not errors.

When the image is understandable, safe automatic ALT fixes are allowed according to `SEO_GEO_RULES.md`.

If uncertain, mark `REVIEW`.

## 6. Internal Links

Check:

- links point to valid known internal routes where detectable;
- anchor text is meaningful;
- requested page-to-page links exist;
- distinguish global/template links from page-specific links;
- identify obvious contextual internal-link opportunities.

Internal-link opportunities are normally `REVIEW`; do not add automatically.

For a requested link test report:
- source URL;
- target URL;
- found YES/NO;
- anchor text;
- source file/component;
- global/template or page-specific.

## 7. Canonicals

Check:

- canonical implementation exists where expected;
- canonical points to the expected URL;
- no conflicting/multiple canonicals;
- canonical does not unexpectedly point elsewhere.

Do not modify canonical strategy automatically.

## 8. Indexability

Inspect where applicable:

- meta robots;
- `noindex`;
- `nofollow`;
- robots.txt;
- sitemap configuration;
- framework-specific indexing configuration.

Highlight apparently unintended non-indexability.

Never change indexability automatically.

## 9. Duplicate Metadata

Across indexable pages identify duplicate:

- titles;
- meta descriptions;
- suspicious H1s;
- canonicals.

Group affected URLs together.

## 10. Social Metadata

Where already relevant to the site, check:

- Open Graph title;
- Open Graph description;
- Open Graph image;
- Twitter/X metadata.

Report missing or inconsistent values when relevant.

## 11. Structured Data

Where structured data already exists, check:

- markup appears relevant to the page;
- obvious duplication/conflicts;
- values correspond to the page where reasonably possible.

Do not add or materially change schema automatically.

# GEO / AI Search Tests

## 12. Entity Clarity

For important pages ask:

- Is it clear who the company/brand is?
- Is it clear what product/service/topic the page is about?
- Is the relationship between the brand and the product/service explicit?
- Are important named products, services, categories, and concepts described consistently?

Flag ambiguity or contradictions as `REVIEW`.

## 13. Direct Answer Quality

Check whether important questions answered by the page have clear answers that can be understood without reconstructing several vague marketing paragraphs.

Look for:

- direct definitions;
- concise explanations;
- clear answers to important user questions;
- clear descriptions of how a service/product works when relevant.

Do not force every page into a question-and-answer format.

## 14. Extractability

Check whether important information is reasonably easy to extract and understand.

Review:

- headings that accurately describe sections;
- concise explanatory passages;
- lists or comparisons where they naturally fit;
- FAQs only where genuinely useful;
- whether key facts are scattered or buried in vague copy.

A lack of lists or FAQs is not automatically a problem.

## 15. Trust / Evidence Context

Where the page makes factual, performance, expertise, or experience claims, check whether appropriate supporting context exists.

Do not invent:
- statistics;
- evidence;
- customers;
- case studies;
- credentials;
- citations;
- authors;
- dates.

If support appears missing, mark `REVIEW`.

## 16. Authorship / Dates / Entity Information

Where relevant to the content type, check whether authorship, dates, or company/entity information are clear.

Do not require these elements on every page.

## 17. Cross-Page Consistency

Check important related pages for contradictions or inconsistent descriptions of:

- products;
- services;
- company/entity information;
- factual claims.

Report conflicts for review.

## 18. Structured Data for GEO Context

Review existing structured data as part of entity/content clarity.

Relevant schema may include Organization, Product, Service, Article, FAQ, or other types depending on actual page content.

Do not recommend or add schema merely to "optimize for AI." It must accurately represent content that exists on the page.

# Project-Specific Tests

Add specific route requirements below over time.

Example:

```md
## `/seo`

Must link to:
- `/contact`
- `/technical-seo`

Check:
- unique title;
- meta description;
- H1;
- canonical;
- meaningful image ALT;
- entity clarity;
- direct explanation of the service.
```

<!-- Add project-specific route requirements below this line. -->

# Audit Output

Update `SEO_GEO_AUDIT.md`.

For each important page, separate:

1. Traditional SEO
2. GEO / AI Search

Use actionable findings such as:

| URL | Type | Area | Status | Severity | Current | Finding | Suggested Action | File |
|---|---|---|---|---|---|---|---|---|

Do not make the audit unreadable with routine PASS rows. Summarize passes and provide detail primarily for `FAIL` and `REVIEW`.
