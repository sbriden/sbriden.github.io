---
layout: page
title: AI Readiness Assessment
permalink: /ai-readiness-assessment/
---

<p>
Evaluate how prepared your organization is to successfully adopt and scale AI initiatives.
This assessment measures readiness across data, governance, analytics, technology, and operating model maturity.
</p>

<hr>

<form id="assessmentForm">

<h2>Data Foundations</h2>

<label>Critical business data is accessible and centralized.</label>
<input type="range" min="1" max="5" name="q1"><br><br>

<label>Data quality is trusted across the organization.</label>
<input type="range" min="1" max="5" name="q2"><br><br>

<label>Data definitions are standardized across teams.</label>
<input type="range" min="1" max="5" name="q3"><br><br>

<h2>Governance & Trust</h2>

<label>We have clearly defined data ownership.</label>
<input type="range" min="1" max="5" name="q4"><br><br>

<label>Data quality is actively monitored.</label>
<input type="range" min="1" max="5" name="q5"><br><br>

<label>Sensitive data is properly governed.</label>
<input type="range" min="1" max="5" name="q6"><br><br>

<h2>Analytics Maturity</h2>

<label>Business leaders trust reporting outputs.</label>
<input type="range" min="1" max="5" name="q7"><br><br>

<label>KPIs are consistently defined.</label>
<input type="range" min="1" max="5" name="q8"><br><br>

<label>Teams can self-serve analytics without IT dependency.</label>
<input type="range" min="1" max="5" name="q9"><br><br>

<h2>Technology & Infrastructure</h2>

<label>Our data platform is scalable and modern.</label>
<input type="range" min="1" max="5" name="q10"><br><br>

<label>We can easily onboard new data sources.</label>
<input type="range" min="1" max="5" name="q11"><br><br>

<label>Integration between systems is efficient.</label>
<input type="range" min="1" max="5" name="q12"><br><br>

<h2>Operating Model</h2>

<label>Leadership actively supports data initiatives.</label>
<input type="range" min="1" max="5" name="q13"><br><br>

<label>Roles and responsibilities are clearly defined.</label>
<input type="range" min="1" max="5" name="q14"><br><br>

<label>Business and technical teams collaborate effectively.</label>
<input type="range" min="1" max="5" name="q15"><br><br>

<br>

<button type="button" onclick="calculateScore()" class="cta-button">
  Calculate My AI Readiness Score
</button>

</form>

<hr>

<div id="results" style="display:none;">

<h2>Your AI Readiness Results</h2>

<h3 id="scoreText"></h3>

<p id="summaryText"></p>

<h3>Recommendations</h3>
<ul id="recommendations"></ul>

<hr>

<h3>Get Your Full Report</h3>

<p>
Enter your email to receive a detailed breakdown of your AI readiness assessment.
</p>

<form action="https://formspree.io/f/mvzjzbdv" method="POST">
  <input type="email" name="email" placeholder="Your email address" required>
  <input type="hidden" name="score" id="hiddenScore">
  <button type="submit" class="cta-button">Send My Results</button>
</form>

</div>

<script>
function calculateScore() {
    const form = document.getElementById("assessmentForm");
    const data = new FormData(form);

    let total = 0;

    for (let value of data.values()) {
        total += parseInt(value);
    }

    const score = Math.round((total / 75) * 100);

    document.getElementById("results").style.display = "block";
    document.getElementById("hiddenScore").value = score;

    document.getElementById("scoreText").innerText =
        "AI Readiness Score: " + score + " / 100";

    let level = "";
    let summary = "";
    let recs = [];

    if (score < 40) {
        level = "Emerging";
        summary = "Your organization is in the early stages of data maturity. Strong foundational work is needed before scaling AI initiatives.";
        recs = [
            "Improve data quality and accessibility",
            "Establish data ownership and governance",
            "Standardize KPIs and reporting definitions"
        ];
    } else if (score < 70) {
        level = "Developing";
        summary = "You have foundational capabilities in place but need stronger governance and consistency before scaling AI.";
        recs = [
            "Strengthen data governance practices",
            "Modernize legacy data architecture",
            "Improve KPI standardization"
        ];
    } else if (score < 85) {
        level = "AI Ready";
        summary = "Your organization is well positioned for AI initiatives with solid data and governance foundations.";
        recs = [
            "Identify high-value AI use cases",
            "Scale analytics and experimentation",
            "Operationalize data products"
        ];
    } else {
        level = "AI Enabled";
        summary = "You have strong enterprise capabilities across data, governance, and analytics. Focus now shifts to optimization and innovation.";
        recs = [
            "Scale AI initiatives across business units",
            "Optimize data and model lifecycle management",
            "Institutionalize analytics best practices"
        ];
    }

    document.getElementById("summaryText").innerText =
        level + ": " + summary;

    const list = document.getElementById("recommendations");
    list.innerHTML = "";
    recs.forEach(r => {
        const li = document.createElement("li");
        li.innerText = r;
        list.appendChild(li);
    });
}
</script>
