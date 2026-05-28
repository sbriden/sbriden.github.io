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
  
    <div class="credibility-panel">
  
      <div class="credibility-item">
        <span class="credibility-number">10+</span>
        <span class="credibility-label">
          Years Enterprise Analytics Experience
        </span>
      </div>
  
      <div class="credibility-item">
        <span class="credibility-number">Lakehouse</span>
        <span class="credibility-label">
          Architecture & Modernization Focus
        </span>
      </div>
  
      <div class="credibility-item">
        <span class="credibility-number">Business + Technical</span>
        <span class="credibility-label">
          Strategy, Architecture, & Operating Models
        </span>
      </div>
  
    </div>
  
  </div>

</section>

---

## Experience & Focus

- Enterprise data and analytics leadership
- Data lakehouse architecture and modernization
- Business intelligence strategy
- KPI governance and reporting ecosystems
- Analytics operating model design
- Executive stakeholder alignment

### Industries

- Insurance
- Enterprise analytics
- Data modernization initiatives

---

## How I Work

### 1. Assess
Evaluate current-state architecture, reporting ecosystems, governance, and organizational alignment.

### 2. Design
Create scalable data platform strategies, operating models, and analytics roadmaps aligned to business priorities.

### 3. Modernize
Support modernization initiatives including lakehouse architecture, reporting transformation, and KPI standardization.

### 4. Enable
Help organizations establish sustainable analytics practices, governance models, and long-term scalability.

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
