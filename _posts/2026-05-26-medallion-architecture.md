---
layout: post
title: "Understanding Medallion Architecture"
date: 2026-05-26
categories: architecture analytics data
---

<p align="center">
  <img
    src="{{ '/assets/images/medallion-architecture.png' | relative_url }}"
    alt="Medallion Architecture"
    width="800">
</p>

# A Practical Example – How Data Actually Flows Through the Medallion Architecture

Sometimes the Medallion Architecture can feel overly theoretical when shown in diagrams. We see arrows moving between Bronze, Silver, and Gold, but what does this actually look like in practice?

Let’s walk through a real-world example.

Imagine we work for a healthcare insurance company and leadership wants visibility into Claims Processing Performance.

More specifically, they want to answer questions like:
- How many claims are being processed each day?
- What is the average processing time?
- Which providers have the highest denial rates?
- Are claims getting stuck at specific stages in the workflow?
- Which regions are underperforming operationally?

Seems straightforward enough.

But once we begin looking under the hood, we quickly realize the data is coming from multiple systems:
- Claims Management System
- Provider Management System
- Member Eligibility Platform
- Workflow/Ticketing Application
- Call Center System

And every one of those systems structures information differently.

This is where the Medallion Architecture begins to shine.

# Bronze Layer Example – Capturing the Raw Operational Data

At the Bronze layer, we ingest raw data directly from all source systems.

This may include:
- Claim transaction tables
- Provider records
- Member eligibility snapshots
- Workflow status logs
- Call center interaction history

At this stage, we are not overly concerned with making the data “pretty.”

The focus is:
- ingest quickly
- preserve history
- maintain traceability
- avoid losing information

So our Bronze tables may look something like:
- `bronze.claim_transactions`
- `bronze.provider_master`
- `bronze.member_eligibility`
- `bronze.workflow_events`
- `bronze.call_logs`

These tables likely still contain:
- duplicate records
- inconsistent naming conventions
- null values
- cryptic operational codes
- inconsistent timestamps

And that is perfectly fine for Bronze.

For example:

The claims system may identify a provider using `Provider_ID`.
Another system may call it `Prov_Num`.
A third may use an entirely different identifier altogether.

We do not solve that problem yet.

Because the moment we start aggressively transforming data during ingestion, we increase the risk of losing important information needed later for troubleshooting or reprocessing.

Bronze is about preserving operational truth.

# Silver Layer Example – Standardizing and Integrating the Enterprise

Now the engineering and business alignment work begins.

In Silver, we start integrating and standardizing information across systems.

This is where we may:
- deduplicate providers
- standardize member identifiers
- align claim statuses
- cleanse invalid records
- apply business rules
- create conformed dimensions

For example, maybe different systems define claim statuses differently:
- “In Process”
- “Pending”
- “Open”
- “WIP”

Operationally, all four statuses may represent the same business state.

Silver is where we standardize that logic into a governed definition.

Now instead of every dashboard team building their own interpretation of claim statuses, the enterprise uses one standardized version.

We may create tables such as:
- `silver.claims`
- `silver.providers`
- `silver.members`
- `silver.claim_status_history`

This is also where relationships between systems begin to form.

For example:

We may match provider information from the provider platform with claim activity from the claims system and workflow activity from the ticketing application.

Now we can finally answer enterprise-level questions consistently.

One of the most valuable things Silver provides is reusability.

Without Silver, every analytics team would repeatedly:
- cleanse the same data
- create the same joins
- redefine the same metrics
- solve the same data quality issues

At scale, that becomes extremely inefficient.

Silver centralizes those efforts.

# Gold Layer Example – Delivering Business Outcomes

Now we move into consumption.

Executives do not want raw claim transactions.
Operations managers do not want to interpret workflow event logs.
Analysts should not need to join fifteen tables together every time they build a dashboard.

Gold exists to simplify all of that.

Here we may create:
- `gold.claims_operational_summary`
- `gold.provider_performance`
- `gold.claims_denial_metrics`
- `gold.executive_kpis`

These datasets are purpose-built for specific business use cases.

For example, the executive KPI table may already contain:
- daily claims processed
- average turnaround time
- denial percentages
- SLA compliance
- trending metrics by region

Optimized and ready for visualization tools like Tableau or Power BI.

Meanwhile, a Data Science team may consume a separate Gold dataset specifically structured for machine learning:
- historical claim patterns
- provider risk scores
- denial prediction features
- processing duration trends

Same underlying enterprise data.
Different business purpose.
Different Gold model.

And this is one of the most important concepts in the Medallion Architecture:

Gold is not one-size-fits-all.

Gold should be designed around consumption patterns.

# Where Organizations Often Struggle

Now here is where many implementations begin to break down.

Organizations often skip architectural discipline and start building directly from Bronze because it feels faster initially.

And honestly… at first, it usually is faster.

Until:
- Finance numbers don’t match Operations
- dashboards contradict each other
- KPI definitions drift
- business users lose trust
- every report becomes a custom integration effort

Suddenly the organization spends more time debating numbers than acting on insights.

The Medallion Architecture prevents this by creating clear ownership at each stage of the data lifecycle.

Bronze owns ingestion.
Silver owns standardization.
Gold owns business delivery.

That separation is what creates scalability.
