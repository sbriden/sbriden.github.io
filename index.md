---
layout: default
title: Home
---

<section class="hero-section">

  <div class="hero-left">

    <h1>Modern Data & Analytics Strategy</h1>

    <p class="hero-text">
     Helping organizations modernize data and analytics capabilities through scalable architecture, trusted governance, and business-aligned operating models.
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
      src="{{ '/assets/headshot.png' | relative_url }}"
      alt="Scott Briden"
      class="headshot"
    >
  
    <div class="credibility-panel">
  
      <div class="credibility-item">
        <span class="credibility-number">10+ Years</span>
        <span class="credibility-label">
          Enterprise Analytics Experience
        </span>
      </div>
  
      <div class="credibility-item">
        <span class="credibility-number">Lakehouse Architecture</span>
        <span class="credibility-label">
           & Modernization Focus
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

### Areas of Focus

- Enterprise Data Strategy
- Data Lakehouse Architecture
- Analytics Modernization
- Business Intelligence & Reporting
- Data Governance
- Analytics Operating Models
- KPI Standardization
- AI Enablement Through Data

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

<section class="featured-insights">

  <h2>Latest Thinking</h2>

  <div class="insight-grid">

    <div class="insight-card">
      <h3>
        <a href="/your-medallion-post-url/">
          Understanding Medallion Architecture
        </a>
      </h3>

      <p>
        A practical guide to structuring bronze, silver, and gold layers in a modern lakehouse architecture.
      </p>
    </div>

    <div class="insight-card">
      <h3>
        <a href="/your-ai-post-url/">
          Enabling AI Through Data
        </a>
      </h3>

      <p>
        Why successful AI initiatives begin with trusted, governed, and accessible enterprise data.
      </p>
    </div>

    <div class="insight-card">
      <h3>
        <a href="/your-modernization-post-url/">
          A Practical Guide to Data Modernization
        </a>
      </h3>

      <p>
        A framework for modernizing enterprise reporting, analytics, and data platforms.
      </p>
    </div>

  </div>

</section>

## Featured Insights

{% for post in site.posts limit:3 %}

### [{{ post.title }}]({{ post.url }})

{{ post.content | strip_html | remove: post.title | truncate: 200 }}.

{% endfor %}

---

<h2>Work With Me</h2>

<p>
Interested in data strategy, lakehouse architecture, analytics modernization, or organizational design?
</p>

<a class="cta-button" href="{{ '/contact/' | relative_url }}">
  Get In Touch
</a>
