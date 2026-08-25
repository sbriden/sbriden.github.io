---
layout: post
title: "Stop Measuring Data Transformation by Deliverables. Start Measuring Value."
date: 2026-08-13
categories: data analytics transformation strategy data-products ai
excerpt: "A successful data transformation isn't measured by how much technology you migrate. It's measured by the business value and organizational capabilities you create along the way."
---

<p align="center">
  <img
    src="{{ '/assets/images/transformation-value.PNG' | relative_url }}"
    alt="Transformation Value"
    width="800">
</p>

Data transformation programs can take years.

New platforms are implemented.

Legacy warehouses are retired.

Reports are migrated.

Data pipelines are rebuilt.

Data products are created.

New tools are introduced.

And eventually someone asks the most important question:

> "Is the transformation actually creating value?"

That question is surprisingly difficult to answer.

Not because organizations don't have metrics.

They usually have hundreds of them.

The problem is that many of those metrics measure activity rather than value.

How many reports were migrated?

How many data sources were onboarded?

How many pipelines were built?

How much data was moved?

How many dashboards were delivered?

These metrics tell us what the data team is doing.

They don't necessarily tell us whether the organization is better because of it.

And that's an important distinction.

A data transformation shouldn't be measured by how much technology was delivered.

It should be measured by what the organization can do better because of it.

# The Problem With Measuring Transformation Through Deliverables

<p align="center">
  <img
    src="{{ '/assets/images/transformation-value-problem.PNG' | relative_url }}"
    alt="Transformation Value Problem"
    width="800">
</p>

Imagine an organization is replacing a legacy data warehouse with a modern lakehouse.

The program establishes a goal of migrating 80% of the legacy workloads within 18 months.

Eighteen months later:

80% of the workloads have been migrated.

The program is declared successful.

But then the business starts asking questions.

Are analysts actually using the new platform?

Have manual processes been eliminated?

Are reports being retired?

Has data quality improved?

Can new analytics be delivered faster?

Are business users more self-sufficient?

Has the organization been able to launch new AI use cases?

If the answer to those questions is no, did the transformation really succeed?

Technically, perhaps.

Business-wise, probably not.

This is one of the biggest challenges with large-scale data transformations.

It is easy to measure implementation.

It is much harder to measure value.

# Start With a Baseline

Before measuring improvement, we need to understand where we're starting.

This sounds obvious.

But it is frequently overlooked.

For example, if an organization wants to improve analytics delivery, we should first understand:

- How long does it currently take to deliver a new data product?
- How many reports exist?
- How many are actively used?
- How much manual reporting exists?
- How many duplicate datasets exist?
- How many hours are spent maintaining legacy solutions?
- How long does it take to onboard a new data source?
- How often do data quality issues impact reporting?
- How much time do analysts spend preparing data?

Without a baseline, it becomes difficult to demonstrate improvement.

And without measurable improvement, transformation programs eventually become difficult to justify.

# Five Dimensions of Data Transformation Value

<p align="center">
  <img
    src="{{ '/assets/images/transformation-value-framework.PNG' | relative_url }}"
    alt="Transformation Value Framework"
    width="800">
</p>

I generally think about transformation value across five areas.

## 1. Business Value

This is ultimately the most important category.

Data exists to help the organization make better decisions and operate more effectively.

Business value might include:

- revenue growth
- cost reduction
- improved customer experience
- reduced operational effort
- faster decision-making
- improved risk management
- improved claims outcomes
- increased productivity

The exact metrics will vary by organization.

The important thing is connecting the data investment to a business outcome.

For example:

Instead of measuring the number of claims dashboards delivered, measure whether claims managers are able to identify and resolve operational issues faster.

Instead of measuring the number of finance datasets created, measure whether financial reporting cycles have been reduced.

Instead of measuring AI models deployed, measure whether those models improve a measurable business process.

The technology is the enabler.

The business outcome is the value.

# 2. Adoption and Consumption

A data product has no value if nobody uses it.

This seems obvious.

Yet organizations often celebrate the delivery of dashboards and datasets without measuring whether anyone actually consumes them.

Adoption metrics can include:

- active users
- frequency of use
- data product consumption
- self-service adoption
- API usage
- AI application usage
- report retirement
- reduction in spreadsheet-based reporting

Consider two dashboards.

Dashboard A has been available for two years and has three active users.

Dashboard B was launched six months ago and is used by 500 employees every week.

Both are technically successful deployments.

But they clearly aren't generating the same value.

Adoption provides an important signal.

If nobody is using something, we need to ask why.

Maybe it doesn't solve the right problem.

Maybe the user experience is poor.

Maybe the data isn't trusted.

Maybe the business process changed.

Or maybe the product shouldn't exist at all.

That's valuable information.

# 3. Delivery and Engineering Efficiency

One of the biggest opportunities created by modern data platforms is reducing the amount of effort required to deliver analytics.

This is where organizations can measure things like:

- time to deliver a new data product
- time to onboard a new data source
- development effort per solution
- pipeline reuse
- percentage of reusable data assets
- reduction in duplicate development
- reduction in manual reporting effort

For example, imagine it previously took three months to onboard a new source system.

After implementing standardized ingestion patterns and reusable data products, it takes three weeks.

That's transformation value.

The platform isn't simply newer.

The organization can now move faster.

# 4. Data Quality and Trust

Speed doesn't matter if nobody trusts the answer.

As organizations modernize their data platforms, they should also measure whether trust is improving.

Metrics might include:

- critical data element quality
- data quality incidents
- failed data pipelines
- SLA compliance
- reconciliation issues
- conflicting KPI definitions
- data issue resolution time
- documented data assets

One particularly useful metric is the number of business-critical metrics with a clearly defined and trusted source.

If Finance, Operations, and Executive Leadership all use different definitions for the same KPI, the organization has a trust problem.

A modern data platform doesn't automatically solve that.

The organization needs to create trusted data products and establish consistent definitions around them.

# 5. Strategic Enablement

This is one of the most important dimensions of transformation value.

What can the organization do today that it couldn't do before?

Maybe a new data platform enables:

- real-time analytics
- predictive modeling
- machine learning
- generative AI
- intelligent automation
- customer 360
- new digital products
- operational optimization

These capabilities are difficult to measure using traditional delivery metrics.

But they may represent some of the largest returns from the transformation.

For example:

A data platform migration may not directly generate revenue.

But if it reduces the time required to develop an AI application from six months to six weeks, the platform has created significant strategic value.

The value isn't necessarily in the platform itself.

It's in what the platform makes possible.

# Don't Confuse Platform Metrics With Transformation Metrics

<p align="center">
  <img
    src="{{ '/assets/images/transformation-value-metrics.PNG' | relative_url }}"
    alt="Transformation Value Metrics"
    width="800">
</p>

This distinction is worth emphasizing.

Consider a typical modernization program.

A platform team might report:

> "We migrated 80% of our workloads."

That's a useful platform metric.

But it doesn't tell us whether the organization has improved.

A transformation metric might be:

> "Time to deliver new analytics decreased by 50%."

That's better.

A business metric might be:

> "Operations reduced manual reporting effort by 30%."

That's better still.

The progression looks something like this:

Platform Metric

80% of workloads migrated

↓

Transformation Metric

50% faster analytics delivery

↓

Business Metric

30% reduction in manual reporting effort

↓

Business Outcome

More time spent managing the business

Each layer provides additional context.

The goal isn't to eliminate platform metrics.

We need them.

The goal is to connect them to the outcomes they are intended to enable.

#Measure Value Throughout the Transformation

<p align="center">
  <img
    src="{{ '/assets/images/transformation-value-evolution.PNG' | relative_url }}"
    alt="Transformation Value Evolution"
    width="800">
</p>

Another mistake is waiting until the end of the transformation to measure value.

Large data transformations can take years.

We shouldn't have to wait two years to determine whether we're creating value.

Value should be measured continuously.

For example:

##Early Stage

Focus on foundational improvements.

platform adoption
data source onboarding
pipeline reliability
data quality
reusable architecture

##Middle Stage

Focus on productivity and adoption.

self-service analytics
data product adoption
report retirement
reduced manual processes
faster delivery

##Mature Stage

Focus on business and strategic outcomes.

operational improvements
revenue impact
cost reduction
AI adoption
automation
customer outcomes

The metrics should evolve as the transformation evolves.

Early in the program, technical metrics are appropriate.

Later, business outcomes should dominate.

#Retirement Is a Value Metric Too

One of the easiest things to overlook during modernization is what gets removed.

Organizations often celebrate what they build.

They should also celebrate what they retire.

If a new data product replaces 25 legacy reports, that's value.

If a modern semantic model eliminates five duplicate datasets, that's value.

If self-service analytics eliminates a recurring manual spreadsheet process, that's value.

If a legacy warehouse workload can finally be decommissioned, that's value.

Modernization isn't just about creating new capabilities.

It's also about eliminating unnecessary complexity.

A successful transformation should make the environment simpler over time.

Not more complicated.

#Data Products Make Value Easier to Measure

This is one of the reasons I believe data product thinking is so important.

A report is difficult to measure beyond usage.

A data product can have a much broader value story.

Consider a Claims Performance Data Product.

It might support:

executive reporting
operational dashboards
analyst self-service
predictive analytics
AI applications
automated workflows

Now we can measure value across multiple consumers.

Instead of asking:

"Did we build the dashboard?"

We can ask:

"What business capabilities does this product enable?"

That is a much more meaningful question.

#Connecting Value to the Transformation Roadmap

Ultimately, every major initiative in a data transformation should have a value hypothesis.

Before starting the work, we should be able to explain:

What problem are we solving?

Who benefits?

What capability are we creating?

How will we measure adoption?

What business outcome are we targeting?

How will we know whether the investment worked?

This doesn't mean every data initiative needs a perfect ROI calculation.

Some investments are foundational.

Some reduce risk.

Some create future capabilities.

Some improve developer productivity.

The important thing is being explicit about what value the investment is expected to create.

#A Simple Value Framework

<p align="center">
  <img
    src="{{ '/assets/images/transformation-value-chain.PNG' | relative_url }}"
    alt="Transformation Value Chain"
    width="800">
</p>

A practical way to think about the transformation is:

Investment
    ↓
Capability
    ↓
Adoption
    ↓
Business Outcome
    ↓
Strategic Value

For example:

Lakehouse Investment
    ↓
Reusable Data Products
    ↓
Increased Self-Service Adoption
    ↓
Faster Business Decisions
    ↓
Greater Organizational Agility

The further we can connect the dots, the stronger the transformation story becomes.

#The Ultimate Measure

At the beginning of a transformation, the organization may ask:

How much data can we migrate?

Eventually, the question should become:

How much more value can we create with our data?

That is the real shift.

A modern data platform isn't valuable because it runs on newer technology.

A data product isn't valuable because it exists.

A dashboard isn't valuable because it was delivered.

AI isn't valuable because a model was deployed.

They are valuable because they improve something that matters to the organization.

#Final Thoughts

Data transformation programs are often measured by what gets delivered.

Platforms implemented.

Reports migrated.

Pipelines built.

Data products created.

Those things matter.

But they are only part of the story.

The real measure of transformation is what changes because of those investments.

Are people making better decisions?

Are teams moving faster?

Are manual processes disappearing?

Is trust in data increasing?

Are new capabilities becoming possible?

Is the organization better positioned to leverage AI?

Those are the questions that matter.

Because at the end of the day, the goal of a data transformation isn't to build a better data platform.

It's to build a more capable organization.

And the best transformations are the ones where you can clearly demonstrate that value every step of the way.
