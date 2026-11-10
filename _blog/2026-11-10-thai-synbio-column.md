---
layout: single
title: Thai SynBio Column
date: '2025-08-03'
permalink: /blog/2026/thai-synbio-column/
excerpt: A series exploring synthetic biology in the Thai context.
author_profile: true
tags:
- synthetic biology
- Thailand
- science communication
videos:
- id: j8YCNwrFTCs
  title: Thai SynBio Column — Episode 1
- id: xu6rg3XsmRQ
  title: Thai SynBio Column — Episode 2
- id: jUJT_H02Ksg
  title: Thai SynBio Column — Episode 3
date_precision: day
date_display: "August 3, 2025"
date_caption: "Latest recording"
date_source: https://docs.google.com/document/d/1OKMTBHZf5FML3jXz_Jo_qTLtS8GelRjhWZXAR5qiLrc
date_note: "Generative Genomics episode narration script explicitly records August 3, 2568 (2025); article publication was May 22, 2025. This is the recording date, not a verified YouTube upload date."
---

Thai SynBio Column is a Thai-language science communication series introducing synthetic biology through articles, illustrations, and videos. The articles are intended to be understandable to high-school readers, making the field approachable without requiring specialist training.

Topics include DNA as a medium for storing messages, generative genomics, and engineering plants. The articles and videos complement the conversations in Thai SynBio Forum.

[Explore articles from the Thailand Synthetic Biology Consortium](https://www.th-synbioconsortium.com/).

[Explore the Thai SynBio video playlist](https://www.youtube.com/playlist?list=PLj2XTFiEzMIObDneup3HGTlMOzkWYj8u4).

## Watch the episodes

{% for video in page.videos %}
### {{ video.title }}

{% include youtube-video.html video_id=video.id title=video.title %}

[Watch on YouTube](https://www.youtube.com/watch?v={{ video.id }})
{% endfor %}
