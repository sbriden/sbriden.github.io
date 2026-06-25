---
layout: page
title: AI Readiness Assessment
permalink: /ai-readiness-assessment/
---

<link rel="stylesheet" href="{{ '/assets/css/ai-readiness.css' | relative_url }}">

<p>
Evaluate your organization’s readiness to successfully adopt and scale AI initiatives.
This assessment measures maturity across data, governance, analytics, technology, and operating model dimensions.
</p>

<hr>

<div class="assessment-container">

<form id="assessmentForm">

<!-- DATA FOUNDATIONS -->
<h2>Data Foundations</h2>

<label>Critical business data is accessible and centralized.</label>
<input type="range" min="1" max="5" name="q1" value="3">

<label>Data quality is trusted across the organization.</label>
<input type="range" min="1" max="5" name="q2" value="3">

<label>Data definitions are standardized across teams.</label>
<input type="range" min="1" max="5" name="q3" value="3">

<label>Data is easily discoverable and well-documented.</label>
<input type="range" min="1" max="5" name="q4" value="3">

<!-- GOVERNANCE -->
<h2>Governance & Trust</h2>

<label>We have clearly defined data ownership.</label>
<input type="range" min="1" max="5" name="q5" value="3">

<label>Data quality is actively monitored.</label>
<input type="range" min="1" max="5" name="q6" value="3">

<label>Sensitive data is properly governed.</label>
<input type="range" min="1" max="5" name="q7" value="3">

<label>Compliance and security controls are well-defined.</label>
<input type="range" min="1" max="5" name="q8" value="3">

<!-- ANALYTICS -->
<h2>Analytics Maturity</h2>

<label>Business leaders trust reporting outputs.</label>
<input type="range" min="1" max="5" name="q9" value="3">

<label>KPIs are consistently defined across teams.</label>
<input type="range" min="1" max="5" name="q10" value="3">

<label>Teams can self-serve analytics without IT dependency.</label>
<input type="range" min="1" max="5" name="q11" value="3">

<label>Insights are embedded into decision-making processes.</label>
<input type="range" min="1" max="5" name="q12" value="3">

<!-- TECHNOLOGY -->
<h2>Technology & Infrastructure</h2>

<label>Our data platform is modern and scalable.</label>
<input type="range" min="1" max="5" name="q13" value="3">

<label>We can easily onboard new data sources.</label>
<input type="range" min="1" max="5" name="q14" value="3">

<label>Integration between systems is efficient.</label>
<input type="range" min="1" max="5" name="q15" value="3">

<label>We support both batch and real-time workloads.</label>
<input type="range" min="1" max="5" name="q16" value="3">

<!-- OPERATING MODEL -->
<h2>Operating Model</h2>

<label>Leadership actively supports data initiatives.</label>
<input type="range" min="1" max="5" name="q17" value="3">

<label>Roles and responsibilities are clearly defined.</label>
<input type="range" min="1" max="5" name="q18" value="3">

<label>Business and technical teams collaborate effectively.</label>
<input type="range" min="1" max="5" name="q19" value="3">

<br><br>

<button type="button" class="cta-button" onclick="calculateScore()">
  Calculate My AI Readiness Score
</button>

</form>

</div>

<hr>

<div id="results" class="results" style="display:none;">

<h2>Your AI Readiness Results</h2>

<div class="executive-summary">

  <h3 id="scoreText"></h3>

  <p id="summaryText"></p>

</div>


<h3>Dimension Breakdown</h3>

<div class="chart-container">
    <canvas id="radarChart"></canvas>
</div>

<div class="score-grid">

  <div class="score-card">
      <h4>Top Strengths</h4>
      <ul id="strengths"></ul>
  </div>

  <div class="score-card">
      <h4>Improvement Areas</h4>
      <ul id="gaps"></ul>
  </div>

</div>

<hr>

<div class="report-cta">

  <h3>Email My Detailed Assessment</h3>

  <p>
      Receive a detailed breakdown of your results, dimension scores,
      identified gaps, and recommended next steps.
  </p>

<form action="https://formspree.io/f/mvzjzbdv" method="POST" class="lead-form">

  <input type="email" name="email" placeholder="Business Email Address" required>

  <input type="text" name="name" placeholder="Full Name">

  <input type="text" name="company" placeholder="Company">

  <input type="text" name="role" placeholder="Role / Title">

  <input type="text" name="industry" placeholder="Industry">

  <input type="hidden" name="overall_score" id="overall_score">
  <input type="hidden" name="data_score" id="data_score">
  <input type="hidden" name="governance_score" id="governance_score">
  <input type="hidden" name="analytics_score" id="analytics_score">
  <input type="hidden" name="tech_score" id="tech_score">
  <input type="hidden" name="ops_score" id="ops_score">
  <input type="hidden" name="assessment_details" id="assessment_details">
  <input type="hidden" name="strengths" id="strengths_field">
  <input type="hidden" name="gaps" id="gaps_field">
  <input type="hidden" name="readiness_level" id="readiness_level">
  <input type="hidden" name="recommendations" id="recommendations_field">

   <button type="submit" class="cta-button">
       Email My Results
   </button>

</form>

</div>

<hr>

<a class="cta-button" href="/contact/">
  Request a Complimentary Consultation
</a>

</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="{{ '/assets/js/ai-readiness.js' | relative_url }}"></script>
