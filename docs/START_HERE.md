# SEO + GEO Workflow

This folder is the working system for SEO + GEO tasks performed with the coding agent.

## Files

- `docs/SEO_GEO_RULES.md` — permanent rules and safety boundaries.
- `docs/SEO_GEO_TESTS.md` — what to audit.
- `docs/SEO_GEO_AUDIT.md` — the working dashboard showing what needs attention.
- `docs/SEO_GEO_CONTENT.md` — optional exact copy that has been approved.
- `docs/SEO_GEO_CHANGES.md` — record of what was actually changed and what to verify.

## Important

You do not need to prepare all titles, descriptions, ALT text, or page copy in advance.

The normal workflow is:

1. Audit.
2. Review findings.
3. Approve or provide copy where needed.
4. Implement approved changes.
5. Re-test.
6. Record changes and manual checks.

Clear ALT fixes may be handled automatically according to `docs/SEO_GEO_RULES.md`.

## First Audit Prompt

Give the agent:

```text
Read /docs/SEO_GEO_RULES.md and /docs/SEO_GEO_TESTS.md carefully.

Perform a complete SEO + GEO audit of the local website repository.

Do not modify any website code.

Update /docs/SEO_GEO_AUDIT.md with your findings.

Separate traditional SEO findings from GEO / AI Search findings for each important page.

I want to review what needs improvement before approving changes.
```

## Example: Ask for Suggestions Without Editing

```text
Read /docs/SEO_GEO_RULES.md.

Using the current SEO_GEO_AUDIT.md, show me the pages with missing, weak, or duplicate SEO titles.

Suggest options for each page.

Do not modify website code yet.
```

## Example: Approve a Specific Change

```text
Read /docs/SEO_GEO_RULES.md.

For /example, implement only the SEO title and meta description I approved.

Do not make any other visible-content, design, layout, routing, or functionality changes.

Run the relevant tests, review git diff, update SEO_GEO_AUDIT.md, and record the work in SEO_GEO_CHANGES.md.

Tell me exactly what I should manually verify.
```

## Example: ALT Cleanup

```text
Read /docs/SEO_GEO_RULES.md and the ALT findings in /docs/SEO_GEO_AUDIT.md.

Fix missing or poor ALT text only where the image meaning is clear.

Describe what is visible and relevant naturally. Do not keyword-stuff.

If an image is decorative, preserve/use an appropriate empty ALT.

If you are unsure what an image represents, do not guess; leave it for REVIEW.

Do not change anything else.

Then run the relevant tests, review git diff, update the audit, and record the changes.
```
