---
layout: post
title: "Introducing the CAPRI Framework: A Practical Approach to Identifying Enterprise Data Products"
date: 2026-07-06
categories: data-products transformation lakehouse analytics strategy
excerpt: "Most organizations know they need data products, but struggle to determine which ones to build. The CAPRI Framework provides a practical approach for identifying, prioritizing, and delivering enterprise data products that support analytics, self-service, and AI."
---

One of the biggest challenges organizations face during a data transformation effort is not selecting technology.

It is deciding what to build.

Most organizations embarking on a modernization initiative understand the destination.

They want to retire a legacy data warehouse.

They want to move to a modern lakehouse architecture.

They want to enable self-service analytics.

They want to prepare for AI.

The problem is that many teams immediately begin rebuilding reports, migrating ETL jobs, or recreating legacy warehouse structures without first answering a more important question:

> **What data products should we actually be building?**

This is where many transformations begin to lose momentum.

Teams become overwhelmed by thousands of reports, hundreds of tables, dozens of source systems, and years of accumulated business logic.

Everything feels important.

Everything feels interconnected.

As a result, organizations often default to simply recreating the existing environment in a new platform.

The technology changes.

The complexity remains.

The **CAPRI Framework** was designed to solve that problem.

Rather than organizing transformation efforts around reports, databases, or source systems, CAPRI provides a practical approach for identifying and prioritizing enterprise data products that deliver measurable business value.

---

# Why Traditional Migration Approaches Often Fail

When organizations begin modernizing their analytics ecosystem, work is frequently organized around one of three approaches.

## Approach 1: Migrate Reports

The team inventories every report and dashboard.

Then they begin rebuilding them one at a time.

The challenge is that reports are often symptoms of business needs rather than the business need itself.

Hundreds of reports may rely on the same underlying information.

Rebuilding each report independently creates duplication and slows delivery.

## Approach 2: Migrate Source Systems

Some organizations organize work around operational systems.

- Claims
- Policy
- CRM
- Billing
- ERP

While this approach may simplify ingestion planning, it does little to help identify reusable business capabilities.

Source systems are technical constructs.

Business capabilities are organizational assets.

## Approach 3: Rebuild the Warehouse

Others attempt to recreate the legacy warehouse model in the cloud.

The tables move.

The technology changes.

But the architecture remains largely unchanged.

Unfortunately, legacy complexity often comes along for the ride.

In all three scenarios, organizations risk modernizing infrastructure without modernizing how information is delivered.

---

# Introducing CAPRI

CAPRI provides a structured framework for identifying the right data products to build while modernizing a data ecosystem.

The framework consists of five stages:

| Step | Description |
|-------|-------------|
| **C – Capabilities** | Identify the business capabilities that drive organizational value. |
| **A – Assets** | Inventory existing reports, dashboards, datasets, extracts, and analytical assets. |
| **P – Patterns** | Discover common business logic, shared metrics, and reusable domains. |
| **R – Rationalize** | Simplify, consolidate, and eliminate duplication. |
| **I – Implement** | Deliver prioritized data products incrementally through cross-functional teams. |

The result is a modernization effort focused on reusable business capabilities rather than technical artifacts.

---

# C — Capabilities

The first step is understanding the business.

Not the systems.

Not the technology.

The business.

Every organization operates through a collection of core capabilities.

For an insurance company, those capabilities might include:

- Customer Management
- Policy Administration
- Claims Management
- Billing
- Underwriting
- Provider Management
- Financial Management

For a healthcare organization:

- Member Management
- Provider Operations
- Care Management
- Claims Processing
- Revenue Cycle
- Customer Service

Capabilities tend to remain stable even as technology changes.

Applications may be replaced.

Platforms may evolve.

Capabilities remain.

This is why they provide such a strong foundation for identifying data products.

---

# A — Assets

Once capabilities are understood, the next step is inventorying existing assets.

This includes:

- Reports
- Dashboards
- Data Extracts
- Spreadsheets
- Regulatory Deliverables
- Data Models
- Semantic Layers
- Machine Learning Models
- AI Applications

The objective is not simply to count assets.

The objective is to understand how information is being consumed today.

For each asset, document:

- Business owner
- Consumers
- Purpose
- Source systems
- Critical metrics
- Business capability supported

This exercise often reveals something surprising.

Organizations frequently have hundreds of assets supporting only a handful of core business capabilities.

---

# P — Patterns

This is where potential data products begin to emerge.

Rather than examining reports individually, start looking for common patterns.

Questions to ask include:

- Which metrics appear repeatedly?
- Which dimensions are reused across departments?
- Which datasets power dozens of reports?
- Which business rules are recreated multiple times?
- Which data domains support multiple business functions?

For example:

Twenty dashboards may all rely on customer information.

Thirty reports may calculate claim duration.

Fifteen scorecards may depend on provider performance metrics.

The reports are different.

The underlying business capability is not.

These recurring patterns often indicate strong candidates for reusable enterprise data products.

---

# R — Rationalize

This is arguably the most important step in the framework.

And the step most organizations skip.

Modernization is not about moving everything.

It is about improving everything.

Rationalization challenges existing assumptions.

Questions include:

- Do we need all 400 reports?
- Why are there six versions of the same KPI?
- Can these datasets be consolidated?
- Can duplicate calculations be eliminated?
- Are multiple teams solving the same problem?

Many organizations discover that years of independent development have created significant duplication.

The goal is not simply to migrate.

The goal is to simplify.

Every report retired.

Every duplicate metric eliminated.

Every redundant dataset removed.

All reduce long-term complexity.

---

# I — Implement

Only after completing the previous steps should implementation begin.

At this stage, organizations can begin building reusable data products aligned to business capabilities.

Examples might include:

- Customer 360 Data Product
- Claims Performance Data Product
- Provider Performance Data Product
- Financial Metrics Data Product
- Operational Excellence Data Product

Each product becomes a trusted enterprise asset.

The product includes:

- Standardized business logic
- Quality controls
- Governance
- Documentation
- Lineage
- Reusable datasets
- Consumption models

Reports become consumers.

Dashboards become consumers.

AI becomes a consumer.

The product remains the foundation.

---

# A Practical Example

Imagine an insurance company beginning a lakehouse modernization effort.

The organization currently has:

- 250 reports
- 60 dashboards
- 40 recurring extracts
- 15 source systems

Leadership initially assumes all reporting assets must be rebuilt.

Using CAPRI, the team approaches the problem differently.

### Capabilities

The organization identifies:

- Claims Management
- Policy Management
- Billing
- Customer Management
- Finance

### Assets

All reports and dashboards are mapped to capabilities.

### Patterns

Analysis reveals:

- Most claims reporting relies on the same core datasets.
- Numerous executive dashboards use identical KPIs.
- Customer information is duplicated throughout the environment.

### Rationalize

The team consolidates:

- Duplicate metrics
- Overlapping dashboards
- Redundant datasets

### Implement

Instead of rebuilding 250 reports independently, the organization delivers:

- Claims Performance Data Product
- Customer 360 Data Product
- Financial Metrics Data Product
- Policy Analytics Data Product

The result is fewer assets, improved consistency, and a stronger foundation for future analytics and AI initiatives.

---

# Prioritizing Which Data Products to Build First

Not every data product should be implemented at once.

Prioritization matters.

I recommend evaluating opportunities across four dimensions.

| Dimension | Question |
|-----------|----------|
| **Business Impact** | How important is this capability to organizational success? |
| **Reusability** | How many teams, reports, or AI initiatives will leverage it? |
| **Complexity** | How difficult will it be to build? |
| **AI Enablement** | Will it accelerate future AI and machine learning initiatives? |

The highest-priority opportunities typically combine strong business impact with high reuse potential.

---

# How CAPRI Fits Into Modern Data Transformation

CAPRI is not a replacement for architecture.

It complements architecture.

CAPRI helps identify **what** should be built.

Medallion Architecture defines **how** it should be built.

Data Governance ensures it is trusted.

Cross-functional Product Teams deliver it.

Self-service analytics consumes it.

AI consumes it.

Together, these capabilities create a modern data ecosystem designed around business outcomes rather than technical assets.

---

# Final Thoughts

Many organizations begin modernization efforts by asking:

> Which reports should we rebuild first?

I believe that is the wrong question.

A better question is:

> Which business capabilities should we enable first?

The CAPRI Framework helps organizations answer that question.

By focusing on capabilities, assets, patterns, rationalization, and implementation, teams can identify reusable data products that support analytics, self-service, operational reporting, and AI.

Most importantly, CAPRI helps organizations avoid recreating the past.

Because successful modernization is not about moving reports to a new platform.

It is about creating a foundation that continuously delivers business value long after the migration is complete.
