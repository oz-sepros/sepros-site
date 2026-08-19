# SEO + GEO Rules

These rules apply to every SEO and GEO task in this repository.

## 1. Primary Principle

**SEO + GEO ONLY.**

The goal is to improve:
- traditional on-page and technical SEO;
- AI-search discoverability;
- extractability of important answers;
- entity clarity;
- trustworthy, understandable content.

The website must remain visually and functionally the same except for explicitly approved visible SEO/GEO text or link changes.

GEO means Generative Engine Optimization / optimization for AI-powered search and answer systems.

Do not use speculative "AI ranking hacks." GEO recommendations must be grounded in making content clearer, more explicit, easier to understand and extract, and appropriately trustworthy.

## 2. Mandatory Workflow

Before every SEO/GEO task:

1. Read this file.
2. Read `SEO_GEO_TESTS.md`.
3. Check `git status`.
4. Do not overwrite unrelated uncommitted work.

### Audit task
When asked to audit:
- inspect the local repository;
- update `SEO_GEO_AUDIT.md`;
- do not modify website code unless explicitly authorized.

### Implementation task
When asked to implement approved work:
- change only what was approved, plus safe automatic ALT fixes allowed below;
- run the relevant checks from `SEO_GEO_TESTS.md`;
- review `git diff`;
- update `SEO_GEO_AUDIT.md` where issue status changed;
- update `SEO_GEO_CHANGES.md`;
- report exactly what changed and what should be manually checked.

## 3. Critical Safety Rule — Do Not Change Design or Site Structure

Never modify as part of normal SEO/GEO work:

- layout;
- CSS or styling;
- colors;
- fonts;
- spacing;
- responsive behavior;
- UI/component design;
- animations;
- JavaScript/application behavior;
- forms;
- buttons;
- routing or URL structure;
- navigation structure;
- image files, dimensions, positioning, or loading behavior;
- component architecture/refactoring.

Do not reorganize HTML/JSX or reformat unrelated code merely for code quality.

If an SEO/GEO recommendation would require a structural, design, routing, or functional change, report it for review instead of implementing it.

## 4. Changes Requiring Approval

Finding an issue does not authorize fixing it.

The following require explicit approval before changing:

- SEO titles;
- meta descriptions;
- H1-H6 text;
- visible copy;
- internal links;
- anchor text;
- canonical tags;
- robots/indexing directives;
- sitemap/robots.txt behavior;
- structured data/schema;
- Open Graph/Twitter metadata when adding or materially changing content.

If exact copy is provided by the user, use it exactly unless escaping or framework syntax requires a technical adjustment.

Do not creatively rewrite approved copy.

## 5. ALT Text Autonomy

The agent may automatically add or improve ALT text for meaningful images when the image purpose is clear.

Rules:

- Describe what is visible and relevant in context.
- Keep ALT text natural and concise.
- Do not keyword-stuff.
- Do not start with "Image of" or "Picture of".
- Decorative images should normally use `alt=""`.
- If the image meaning or purpose is unclear, mark it `REVIEW` instead of guessing.
- Never modify the image itself, its style, dimensions, position, or behavior.

Record every automatic ALT change in `SEO_GEO_CHANGES.md`.

## 6. GEO Boundaries

GEO findings are normally recommendations, not automatic edits.

The agent may audit whether:
- it is clear who the company/brand is and what it offers;
- a product/service/topic is described directly;
- important questions have clear, extractable answers;
- important entities and their relationships are explicit;
- factual claims have appropriate context or support where relevant;
- relevant experience/expertise/trust signals are present in the content;
- important information is buried in vague marketing language;
- headings help explain what each section is about;
- useful definitions, concise answers, comparisons, lists, or FAQs exist where genuinely appropriate;
- authorship, dates, company/entity information are clear where relevant;
- important pages contradict one another about the same product, service, or factual point.

Do not:
- add FAQs everywhere merely for GEO;
- manufacture claims, evidence, expertise, citations, statistics, authorship, or dates;
- keyword-stuff;
- rewrite content merely to sound "AI optimized";
- promise or claim that a change will make an AI system cite or rank the site;
- add schema merely because it exists as a schema type.

If GEO improvement requires visible copy, headings, links, or structure, report it and wait for approval.

## 7. Metadata and Framework Awareness

Account for the framework used by the repository.

Metadata may be:
- defined directly in a page;
- generated dynamically;
- inherited from layouts/templates;
- defined in shared SEO components;
- produced through framework-specific metadata APIs.

Do not report metadata as missing until the effective implementation has been investigated.

## 8. Git Safety

Before editing:

```bash
git status
```

After editing:

```bash
git diff
```

Review every changed file.

Never automatically:
- commit;
- push;
- force push;
- reset unrelated changes;
- delete unrelated files.

Keep diffs as small as possible.

## 9. Completion Requirement

An implementation task is not complete until:

1. Requested changes are implemented.
2. Relevant tests from `SEO_GEO_TESTS.md` are run.
3. `git diff` is reviewed.
4. `SEO_GEO_AUDIT.md` is updated where applicable.
5. `SEO_GEO_CHANGES.md` is updated.
6. A final report is provided.

The final report must state:
- what changed;
- URLs affected;
- files changed;
- tests passed;
- tests failed or requiring review;
- what should be manually verified;
- anything intentionally left unchanged.

## 10. When Unsure

**DO NOT GUESS.**

If a modification may affect design, functionality, routing, accessibility, shared components, or site-wide behavior, stop and report it for review.
