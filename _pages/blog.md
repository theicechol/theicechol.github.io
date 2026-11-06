---
layout: archive
title: "Blog"
permalink: /blog/
author_profile: true
---

A space for Ice to share non-academic writing—from politics and lifestyle to trivia and everything in between.

{% include base_path %}

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
    {% include archive-single.html %}
  {% endfor %}
{% else %}
  <p>Posts are coming soon.</p>
{% endif %}
