---
layout: archive
title: "Blogs"
permalink: /blog/
author_profile: true
---

Stories, conversations, and resources from my work and interests—exploring synthetic biology, teaching and learning, community projects, politics, and life beyond the lab. Browse articles, podcasts, videos, and reflections from the communities I’m part of.

{% include base_path %}

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
    {% include archive-single.html show_first_media=true %}
  {% endfor %}
{% else %}
  <p>Posts are coming soon.</p>
{% endif %}
