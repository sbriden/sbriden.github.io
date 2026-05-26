---
layout: page
title: Blog
permalink: /blog/
---

# Blog

Below are articles focused on enterprise data strategy, lakehouse architecture, analytics modernization, and business intelligence.

---

## Recent Posts

{% raw %}
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small> - {{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
{% endraw %}
