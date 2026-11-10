---
layout: archive
title: "Blogs"
permalink: /blog/
author_profile: true
---

A space for Ice to share non-academic writing—from politics and lifestyle to trivia and everything in between.

{% include base_path %}

{% assign blog_posts = site.blog | where_exp: "post", "post.published != false" | sort: "date" | reverse %}
{% if blog_posts.size > 0 %}
  {% for post in blog_posts %}
    {% include archive-single.html show_first_media=true %}
  {% endfor %}
{% else %}
  <p>Posts are coming soon.</p>
{% endif %}
