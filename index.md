---
layout: default
title: Home
---

<section class="hero-section">

  <div class="hero-left">

    <h1>Modern Data & Analytics Strategy</h1>

    <p class="hero-text">
      Helping organizations modernize data platforms,
      align analytics with business outcomes,
      and design scalable lakehouse ecosystems.
    </p>

    <div class="positioning-bar">
      Data Strategy • Lakehouse Architecture • BI Modernization • Analytics Operating Models
    </div>

    <div class="hero-buttons">
      <a class="primary-button" href="{{ '/services/' | relative_url }}">
        Explore Services
      </a>

      <a class="secondary-button" href="{{ '/blog/' | relative_url }}">
        Read Insights
      </a>
    </div>

  </div>

  <div class="hero-right">

    <img
      src="{{ '/assets/headshot.jpg' | relative_url }}"
      alt="Scott Briden"
      class="headshot"
    >

  </div>

</section>

## What I Do

### Data Lakehouse Architecture
Designing modern data platforms using medallion architecture principles that support enterprise reporting, analytics, governance, and AI readiness.

### Analytics & BI Strategy
Modernizing reporting ecosystems, improving KPI consistency, and building trusted enterprise business intelligence.

### Data Organization & Operating Models
Aligning data engineering, analytics, governance, and business teams into scalable operating models.

---

## Why This Matters

Most data programs fail not because of technology — but because of misalignment between architecture, governance, and business outcomes.

Successful organizations treat data as a product, not a pipeline.

---

## Featured Insights

{% for post in site.posts limit:3 %}

### [{{ post.title }}]({{ post.url }})

{{ post.content | strip_html | remove: post.title | truncate: 200 }}.

{% endfor %}

---

## Work With Me

Interested in data strategy, lakehouse architecture, or analytics modernization?

👉 [Get in touch]({{ '/contact/' | relative_url }})
