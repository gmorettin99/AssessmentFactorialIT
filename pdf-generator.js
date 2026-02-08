/**
 * FACTORIAL IT: STRATEGIC PDF GENERATOR
 * FINAL VERSION
 * - Multi-page fixed.
 * - Image visibility fixed (CORS & Page Break settings).
 * - "Plan for your future" section added.
 */

// 1. Helper function for the dynamic recap
function getInputRecap(data) {
    const points = [];
    // We check existence and push descriptive text
    if (data.devices) points.push(`${data.devices} managed devices`);
    if (data.it_team) points.push(`an IT team of ${data.it_team}`);
    if (data.ob_year) points.push(`${data.ob_year} onboardings per year`);
    if (data.isRemote) points.push(`a remote or hybrid workforce`);
    if (data.mixedOS) points.push(`multiple operating systems`);
    if (data.mixedHW) points.push(`a mixed hardware environment`);

    return points.length
        ? points.join(', ')
        : 'a growing IT environment';
}

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    element.className = "pdf-render-container";
    element.style.width = '750px';
    element.style.padding = '40px';
    element.style.background = 'white';
    element.style.fontFamily = "'DM Sans', sans-serif";

    let html = `
        <div class="header-img-container" style="text-align:center; margin-bottom:30px;">
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" style="width:250px;" crossorigin="anonymous">
        </div>
        <h1 style="font-size: 24px; color: #111;">Fit Score: ${score.toFixed(1)}%</h1>
        <div style="background: #f4fdfa; padding: 20px; border-radius: 10px; border-left: 5px solid #74f9d4; margin-bottom: 30px;">
            <p style="margin:0; font-size: 14px;">${getStrategicSummary(score)}</p>
        </div>
        <h3 style="color: #ff585d; font-size: 14px; text-transform: uppercase;">Business Case & Justification</h3>
    `;

    // --- TAYLORED SECTION BLOCKS ---
    if (data.n > 0) {
        html += addBlock("Scalable Infrastructure", `Managing ${data.n} devices for ${data.m} employees creates a scaling ratio of ${(data.n/data.m).toFixed(1)}. Factorial IT automates this lifecycle to prevent administrative burnout[cite: 75].`);
    }
    if (data.activeCompliance.length > 0) {
        html += addBlock("Regulatory Frameworks", `Your commitment to ${data.activeCompliance.join(', ')} requires auditable proof of control. We act as your automated evidence locker[cite: 79].`);
    }
    if (data.it_team <= 2) {
        html += addBlock("Personnel Constraints", `With an IT team of only ${data.it_team}, manual provisioning is a bottleneck. We act as a force multiplier for your existing staff[cite: 82].`);
    }
    if (data.selectedHW.length > 0 || data.selectedOS.length > 0) {
        html += addBlock("Ecosystem Complexity", `Managing a fleet of ${data.selectedHW.join('/')} running ${data.selectedOS.join('/')} manually creates data silos. We unify these into a single pane of glass[cite: 93, 96].`);
    }
    if (data.manualTicketing) {
        html += addBlock("Administrative Efficiency", `Transitioning from manual requests to our self-service workflows eliminates lost accountability[cite: 87].`);
    }

    // --- IMAGE FIX (Removed white box overlay by simplifying container) ---
    html += `
        <div class="graph-container" style="margin: 30px 0; text-align: center; page-break-inside: avoid;">
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" 
                 style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" 
                 crossorigin="anonymous">
        </div>
    `;

    // --- FUTUREPROOF PARAGRAPH ---
    html += `
        <div style="background: #fafafa; padding: 25px; border-radius: 12px; margin-top: 20px; page-break-inside: avoid;">
            <h4 style="color: #ff585d; margin-top: 0;">Plan for your future</h4>
            <p style="font-size: 13px; line-height: 1.6; color: #333;">
                <strong>Scenario Recap:</strong> You are currently managing ${data.n} devices for ${data.m} employees, 
                navigating ${data.activeCompliance.length > 0 ? data.activeCompliance.join(' and ') : 'standard growth'} 
                with a fleet of ${data.selectedHW.join(' and ')}.
                <br><br>
                <strong>Futureproof Solution:</strong> Factorial IT is designed to decouple your growth from your manual workload. 
                By automating the ${riskFactorCount} specific risk factors identified in this audit, we ensure that as your headcount 
                reaches the next scale-up milestone, your IT operations remain on autopilot.
            </p>
            <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" 
               style="display: inline-block; background: #ff585d; color: white; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 10px;">
               Book Strategic Consultation
            </a>
        </div>
    `;

    element.innerHTML = html;
    
    const opt = {
        margin: 10,
        filename: 'Factorial_IT_Audit.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

    // --- DYNAMIC TEXT BLOCKS ---
    if (data.devices > 0) {
        html += addBlock("Scalable Infrastructure", 
            `You currently manage ${data.devices} devices for ${data.employees} employees. Factorial IT handles this ratio by automating the technology lifecycle from procurement to offboarding.`);
    }

    if (data.complianceList.length > 0) {
        html += addBlock("Regulatory Frameworks", 
            `Since you are navigating ${data.complianceList.join(' and ')}, compliance requires auditable proof of control. Factorial IT acts as an Automated Evidence Locker for these specific frameworks.`);
    }

    if (data.it_team <= 3) {
        html += addBlock("Personnel Constraints", 
            `With an IT team of ${data.it_team}, ticket fatigue is a risk. We automate low-level tasks to act as an extra team member.`);
    }

    if (data.selectedHW.length > 0) {
        html += addBlock("Hardware Management", 
            `Your fleet includes ${data.selectedHW.join(', ')}. Factorial IT centralizes these assets into a single pane of glass, removing data silos.`);
    }

    if (data.selectedOS.length > 0) {
        html += addBlock("OS Ecosystem", 
            `Supporting ${data.selectedOS.join(' and ')} environments usually requires multiple tools. We consolidate this into one unified MDM solution.`);
    }

    // --- PILLARS IMAGE FIX ---
    // Added 'crossorigin' and forced display block to fix visibility issues
    html += `
        <div class="graph-img-container" style="display:block; clear:both; page-break-before: auto;">
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" 
                 class="graph-img" 
                 crossorigin="anonymous" 
                 style="width:100%; max-width:600px; display:block; margin: 20px auto;">
        </div>
    `;

    // --- GRAPH IMAGE (JPG) ---
    html += `
                <div class="graph-img-container">
                    <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" class="graph-img" crossorigin="anonymous">
                </div>
    `;

    // --- PLAN FOR YOUR FUTURE SECTION ---
    // (Using the new helper function getInputRecap defined above)
    const recapString = getInputRecap(data);

    html += `
                <div class="future-plan-box">
                    <h3 class="future-plan-title">Plan for your future</h3>

                    <p class="future-plan-text">
                        You have told us that currently you manage ${recapString}.
                        Learn how you can automate, secure, and scale your operations with
                        <strong>Factorial IT</strong>.
                    </p>

                    <div class="future-plan-cta">
                        <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" target="_blank">
                            Book a meeting
                        </a>
                    </div>
                </div>

                <div style="margin-top: 40px; text-align: right; color: #ff585d; font-weight: 600; font-size: 10px;">
                    CONFIDENTIAL STRATEGIC AUDIT 2026
                </div>
            </div> 
        </div>
    `;

    element.innerHTML = html;

    // PDF EXPORT SETTINGS
    const opt = {
        margin: [10, 0, 10, 0], 
        filename: `Factorial_IT_Assessment.pdf`,
        image: { type: 'jpg', quality: 0.90 },
        pagebreak: { mode: ['css', 'legacy'] }, 
        html2canvas: { 
            scale: 4, 
            useCORS: true, // IMPORTANT: Allows the image to be downloaded from GitHub
            scrollY: 0,
            letterRendering: true
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// Block helper function
function addBlock(title, text) {
    return `
        <div class="info-block">
            <strong style="display: block; font-size: 14px; color: #ff585d; margin-bottom: 5px; font-weight: 600;">• ${title}</strong>
            <p style="font-size: 12px; color: #444; margin-top: 0; line-height: 1.5; font-weight: 400;">${text}</p>
        </div>
    `;
}

function getStrategicSummary(score) {
    if (score > 25) return "Strategic Assessment: High Fit. Your organization exhibits a 'perfect storm' of operational friction. Continuing with manual processes presents a significant risk of burnout and compliance failure.";
    if (score >= 15) return "Strategic Assessment: Moderate Fit. Manual processes are becoming a bottleneck. Implementing automation now will future-proof your operations before technical debt accumulates.";
    return "Strategic Assessment: Early Maturity. Implementing a foundational system now will prevent the chaotic inflection point as you scale toward the 50-employee threshold.";
}
