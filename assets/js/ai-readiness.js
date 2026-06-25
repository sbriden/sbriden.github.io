function getValues() {
    const form = document.getElementById("assessmentForm");
    const data = new FormData(form);

    let values = [];
    for (let i = 1; i <= 19; i++) {
        values.push(parseInt(data.get("q" + i)));
    }
    return values;
}

function avg(arr) {
    return arr.reduce((a,b) => a + b, 0) / arr.length;
}

function scoreGroup(values, indices) {
    return Math.round((avg(indices.map(i => values[i])) / 5) * 100);
}

function calculateScore() {

    const v = getValues();

    const dataScore = scoreGroup(v, [0,1,2,3]);
    const govScore = scoreGroup(v, [4,5,6,7]);
    const analyticsScore = scoreGroup(v, [8,9,10,11]);
    const techScore = scoreGroup(v, [12,13,14,15]);
    const opsScore = scoreGroup(v, [16,17,18]);

    const overall = Math.round(avg([dataScore, govScore, analyticsScore, techScore, opsScore]));

    let level = "";
    let summary = "";

    if (overall < 40) {
        level = "Emerging";
        summary = "Significant foundational gaps exist across data, governance, and operating model maturity.";
    } else if (overall < 70) {
        level = "Developing";
        summary = "Core capabilities exist but require modernization and stronger governance.";
    } else if (overall < 85) {
        level = "AI Ready";
        summary = "Strong foundation for scaling AI initiatives across the organization.";
    } else {
        level = "AI Enabled";
        summary = "Advanced maturity with strong readiness for AI-driven transformation.";
    }

    const scores = [dataScore, govScore, analyticsScore, techScore, opsScore];

    document.getElementById("results").style.display = "block";

    document.getElementById("scoreText").innerText =
        `AI Readiness: ${overall}/100 (${level})`;

    document.getElementById("summaryText").innerText = summary;

    const questionLabels = [
    "Critical business data is accessible and centralized",
    "Data quality is trusted across the organization",
    "Data definitions are standardized across teams",
    "Data is easily discoverable and documented",
    "Clearly defined data ownership",
    "Data quality is actively monitored",
    "Sensitive data is properly governed",
    "Compliance and security controls are well-defined",
    "Business leaders trust reporting outputs",
    "KPIs are consistently defined",
    "Teams can self-serve analytics",
    "Insights are embedded in decision making",
    "Our data platform is modern and scalable",
    "We can easily onboard new data sources",
    "Integration between systems is efficient",
    "We support batch and real-time workloads",
    "Leadership actively supports data initiatives",
    "Roles and responsibilities are clearly defined",
    "Business and technical teams collaborate effectively"
    ];
    
    let details = `
    OVERALL SCORE
    ${overall}
    
    READINESS LEVEL
    ${level}
    
    DIMENSION SCORES
    
    Data Foundations: ${dataScore}%
    Governance & Trust: ${govScore}%
    Analytics Maturity: ${analyticsScore}%
    Technology & Infrastructure: ${techScore}%
    Operating Model: ${opsScore}%
    
    QUESTION RESPONSES
    
    `;
    
    for (let i = 0; i < questionLabels.length; i++) {
        details += `
    Q${i+1}: ${questionLabels[i]}
    Score: ${v[i]}
    `;
    }

    // Fill hidden fields
    document.getElementById("overall_score").value = overall;
    document.getElementById("data_score").value = dataScore;
    document.getElementById("governance_score").value = govScore;
    document.getElementById("analytics_score").value = analyticsScore;
    document.getElementById("tech_score").value = techScore;
    document.getElementById("ops_score").value = opsScore;
    document.getElementById("readiness_level").value = level;
    document.getElementById("assessment_details").value = details;
    
    // Strengths & gaps
    const labels = [
        "Data Foundations",
        "Governance",
        "Analytics",
        "Technology",
        "Operating Model"
    ];

    let paired = labels.map((l,i) => ({label:l, score:scores[i]}));
    paired.sort((a,b) => b.score - a.score);

    document.getElementById("strengths").innerHTML =
        paired.slice(0,2).map(x => `<li>${x.label} (${x.score}%)</li>`).join("");

    document.getElementById("gaps").innerHTML =
        paired.slice(-2).map(x => `<li>${x.label} (${x.score}%)</li>`).join("");

    document.getElementById("gaps_field").value =
        paired.slice(-2).map(x => x.label).join(", ");

    document.getElementById("recommendations_field").value = `
    Recommended Focus Areas:
    
    ${paired.slice(-2).map(x => x.label).join(", ")}
    `;

    renderChart(scores);
}

function renderChart(scores) {
    const ctx = document.getElementById('radarChart');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                "Data",
                "Governance",
                "Analytics",
                "Technology",
                "Operating Model"
            ],
            datasets: [{
                label: "Maturity Score",
                data: scores
            }]
        },
        options: {
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}
