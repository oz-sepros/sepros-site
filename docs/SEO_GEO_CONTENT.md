# Approved SEO + GEO Content

This file is optional.

You do **not** need to fill the site's titles, descriptions, ALT text, or copy before running an audit.

Use this file only when exact content has been approved and should be treated as the source of truth.

Suggestions belong in `SEO_GEO_AUDIT.md`.
Implemented work belongs in `SEO_GEO_CHANGES.md`.

Approved copy must not be creatively rewritten.

# Approved Page Metadata

Add only when needed.

## Example: `/example`

**SEO Title**
```text
Exact approved title
```

**Meta Description**
```text
Exact approved meta description
```

**H1**
```text
KEEP
```

`KEEP` means preserve the existing value.

A blank field does not mean delete.

# Approved ALT Text

Use only when you want to override or explicitly approve ALT copy.

| URL | Image / Identifier | Approved ALT |
|---|---|---|

The agent may still handle clear ALT fixes automatically under `SEO_GEO_RULES.md`.

# Approved Internal Links

| Source URL | Target URL | Approved Anchor Text | Notes |
|---|---|---|---|

# Approved Visible SEO / GEO Copy

Use for exact visible copy that has been approved.

## Example: `/example`

Location:
`Intro paragraph`

Replace with:

```text
Exact approved copy.
```

# Instructions to Agent

- Only treat content here as approved when the intended page/element is unambiguous.
- Do not infer approval from suggestions in `SEO_GEO_AUDIT.md`.
- New explicit instructions from the user override older entries here.
- If approved content conflicts with the current implementation or would require a risky structural/design change, report the conflict before changing it.
