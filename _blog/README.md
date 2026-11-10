# Blog entries

This collection works like `_publications` and `_teaching`: one Markdown file per entry. The listing page is `_pages/blog.md`; it displays entries newest first. The home page and blog archives also use this collection.

## Add or edit a post

Create `_blog/YYYY-MM-DD-short-title.md` using this front matter, then write the article below it:

```yaml
---
title: "Post title"
date: 2026-11-10
permalink: /blog/2026/short-title/
excerpt: "A short summary for the listing."
tags:
  - topic
---
```

Keep existing `permalink` and `redirect_from` values when editing or renaming a file so shared links keep working. Images live in `/images/`; embed links and media can stay in the Markdown body.

Use `published: false` for a draft. Collection entries do not use the native `_posts` date scheduling rules; do not rely on a future date to hide a draft. The old unpublished theme examples remain in `_posts` and are not part of this collection.

## Google Docs editing

Editable copy: https://docs.google.com/document/d/1jBfD7VNFXDXSbwnl4cTI-jgeskxMTL2i5JeKwEEgsb4

Keep one tab per post, including its website URL. Edit the prose in Docs and ask Codex to apply the named tabs to the matching files here. Docs changes do not publish automatically. Preserve media embeds unless the requested edits replace them.

The collection feed is `/blog/feed.xml`.
