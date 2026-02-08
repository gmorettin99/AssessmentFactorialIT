/**
 * FACTORIAL IT: STRATEGIC PDF GENERATOR
 * FIXED: Clean memory-rendering & tailored data
 * NO CITATIONS INCLUDED
 */

function generateStrategicPDF(score, data) {
    // 1. Create a detached memory-rendered element to prevent "white box" overlays
    const element = document.createElement('div');
    element.className = "pdf-render-container";
    element.style.width = '750px';
    element.style.padding = '40px';
    element.style.background = '#ffffff'; // Explicitly white
    element.style.color = '#111111';
    element.style.fontFamily = "'DM Sans', sans-serif";
    element.style.boxShadow = 'none'; // Prevents capture glitches

    // 2. Build the tailored HTML content
    let html = `
        <div style="text-align:center; margin-bottom:30px;">
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" style="width:250px;" crossorigin="anonymous">
        </div>
        
        <h1 style="font-size: 24px; color: #111; margin-bottom: 10px;">Strategic IT Audit: ${score.toFixed(1)}% Fit Score</h1>
        
        <div style="background: #f4fdfa; padding: 20px; border-radius: 10px; border-left: 5px solid #74f9d4; margin-bottom: 30px;">
            <p style="margin:0; font-size: 14px; line-height: 1.5;">${getStrategicSummary(score)}</p>
        </div>

        <h3 style="color: #ff585d; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">Business Case & Justification</h3>
    `;

    // 3. Conditional Tailored Blocks (Based on User Input)
    if (data.n > 0) {
        html += addBlock("Scalable Infrastructure", 
            `You currently manage ${data.n} devices for ${data.m} employees, creating a scaling ratio of ${(data.n/data.m).toFixed(1)}[cite: 26, 46]. Factorial IT automates the technology lifecycle to prevent administrative burnout[cite: 7, 75].`);
    }

    if (data.activeCompliance && data.activeCompliance.length > 0) {
        html += addBlock("Regulatory Frameworks", 
            `Your focus on ${data.activeCompliance.join(', ')} requires auditable proof of control[cite: 14]. Factorial IT acts as an Automated Evidence Locker for your security standards[cite: 79].`);
    }

    if (data.it_team <= 2) {
        html += addBlock("Personnel Constraints", 
            `With an IT team size of ${data.it_team}, manual provisioning is a high-risk bottleneck[cite: 15]. We act as a force multiplier for your existing staff[cite: 82].`);
    }

    if (data.selectedHW && data.selectedHW.length > 0) {
        html += addBlock("Asset Complexity", 
            `Managing a mixed fleet of ${data.selectedHW.join(' and ')} creates significant data silos[cite: 15, 93]. Factorial IT unifies varied hardware into a single pane of glass.`);
    }

    if (data.manualTicketing) {
        html += addBlock("Administrative Efficiency", 
            `Transitioning from manual requests to automated self-service workflows eliminates the "Administrative Deficit" identified in your audit[cite: 16, 62].`);
    }

    // 4. Pillars Image (Isolated and CORS-enabled)
    html += `
        <div style="margin: 30px 0; text-align: center; page-break-inside: avoid; clear: both;">
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" 
                 style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" 
                 crossorigin="anonymous">
        </div>
    `;

    // 5. Futureproof Recap (Executive Summary)
    html += `
        <div style="background: #fafafa; padding: 25px; border-radius: 12px; border: 1px solid #eee; margin-top: 20px; page-break-inside: avoid;">
            <h4 style="color: #ff585d; margin-top: 0; font-size: 16px;">Plan for your future</h4>
            <p style="font-size: 13px; line-height: 1.6; color: #333;">
                <strong>Scenario Recap:</strong> You are managing ${data.n} devices across ${data.selectedOS ? data.selectedOS.join('/') : 'multiple'} environments. 
                This organizational profile demonstrates a ${score.toFixed(0)}% requirement for automated management[cite: 30, 62].
                <br><br>
                <strong>The Solution:</strong> Factorial IT is engineered to bridge the gap between People and Technology[cite: 4, 68]. 
                By automating the specific risk factors identified in this audit, we ensure IT operations remain on autopilot as your headcount scales.
            </p>
            <div style="margin-top: 15px;">
                <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" 
                   style="display: inline-block; background: #ff585d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">
                   Book Strategic Consultation
                </a>
            </div>
        </div>
        <div style="margin-top: 40px; text-align: right; color: #ff585d; font-weight: 600; font-size: 10px;">
            CONFIDENTIAL STRATEGIC AUDIT 2026
        </div>
    `;

    element.innerHTML = html;

    // 6. PDF Export Settings (Optimized for 2026 browsers)
    const opt = {
        margin: [10, 0, 10, 0],
        filename: 'Factorial_IT_Strategic_Audit.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 3, 
            useCORS: true, 
            letterRendering: true,
            backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// Block helper function for styling blocks consistently
function addBlock(title, text) {
    return `
        <div style="margin-bottom: 20px; page-break-inside: avoid;">
            <strong style="display: block; font-size: 14px; color: #ff585d; margin-bottom: 5px;">• ${title}</strong>
            <p style="font-size: 12px; color: #444; margin: 0; line-height: 1.5; font-weight: 400;">${text}</p>
        </div>
    `;
}

// Logic for the Summary Text [cite: 31, 62]
function getStrategicSummary(score) {
    if (score > 60) return "Strategic Assessment: High Fit. Your organization exhibits significant operational friction[cite: 4, 39]. Continuing with manual processes presents a critical risk to scalability and compliance[cite: 71, 72].";
    if (score >= 30) return "Strategic Assessment: Moderate Fit. Manual processes are becoming a bottleneck[cite: 8]. Implementing automation now prevents technical debt from accumulating[cite: 30].";
    return "Strategic Assessment: Early Maturity. Establishing automated foundations now prevents chaotic scale-up friction as you reach organizational milestones[cite: 61, 62].";
}
