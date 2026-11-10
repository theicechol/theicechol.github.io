---
layout: single
title: Thai SynBio Forum
date: '2026-11-10'
permalink: /blog/2026/thai-synbio-forum/
excerpt: A forum for conversations about synthetic biology in Thailand.
author_profile: true
tags:
- synthetic biology
- Thailand
- community
videos:
- id: W7mPxTlcZcs
  title: Thai SynBio Forum — Episode 1
- id: 44DBQQ3CwBE
  title: Thai SynBio Forum — Episode 2
- id: cLTG6Sn-HKo
  title: Thai SynBio Forum — Episode 3
---

Thai SynBio Forum brings researchers and practitioners together for conversations about synthetic biology and its place in Thailand’s bioeconomy. I moderate the series with the team behind Get Rich with SynBio, connecting research with the opportunities and challenges of putting it into practice.

Discussions explore international policy and collaboration, bioenergy and the circular economy, and biomaterials and biochemicals. The format makes room for both technical perspectives and the experiences of people working across the field.

[Read the Biomaterials and Biochemicals episode recap](https://www.th-synbioconsortium.com/%E0%B8%9A%E0%B8%97%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1/synbio12-2568/).

[Explore the Thai SynBio video playlist](https://www.youtube.com/playlist?list=PLj2XTFiEzMIObDneup3HGTlMOzkWYj8u4).

## Watch the episodes

{% for video in page.videos %}
### {{ video.title }}

{% include youtube-video.html video_id=video.id title=video.title %}

[Watch on YouTube](https://www.youtube.com/watch?v={{ video.id }})
{% endfor %}
