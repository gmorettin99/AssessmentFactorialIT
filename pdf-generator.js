/**
 * FACTORIAL IT: STRATEGIC PDF GENERATOR
 * FIXED: Reset header alignment & Citation Removal
 */

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    element.className = "pdf-render-container";
    element.style.width = '750px';
    element.style.background = '#ffffff';
    element.style.fontFamily = "'DM Sans', sans-serif";
    element.style.color = '#111111';

    let html = `
        <div style="width: 100%; line-height: 0; margin-bottom: 20px;">
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" 
                 style="width: 100%; height: auto; display: block;" 
                 crossorigin="anonymous">
        </div>
        
        <div style="padding: 0 40px 40px 40px;">
            <p style="font-weight: 600; border-bottom: 2px solid #74f9d4; padding-bottom: 15px; color: #444; font-size: 16px; margin-top: 0;">
                Automation in your IT Operating System - Powered by HR Data
            </p>

            <h1 style="font-size: 22px; color: #111; margin: 20px 0 10px 0;">Fit Score: ${score.toFixed(1)}%</h1>
            
            <div style="background: #f4fdfa; padding: 20px; border-radius: 12px; border-left: 6px solid #74f9d4; margin-bottom: 25px;">
                <p style="margin:0; font-size: 14px; line-height: 1.4;">${getStrategicSummary(score)}</p>
            </div>

            <h3 style="color: #ff585d; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; font-weight: 700;">
                Business Case & Justification
            </h3>
    `;

    // --- TAILORED DYNAMIC BLOCKS (NO CITATIONS) ---
    if (data.n > 0) {
        html += addBlock("Scalable Infrastructure", 
            `You manage ${data.n} devices for ${data.m} employees. As your fleet grows, Factorial IT transforms linear management work into scalable, automated workflows.`);
    }

    if (data.activeCompliance.length > 0) {
        html += addBlock("Regulatory Frameworks", 
            `Your organization navigates ${data.activeCompliance.join(', ')}. Factorial IT acts as an Automated Evidence Locker, ensuring auditable proof of control.`);
    }

    if (data.it_team <= 2) {
        html += addBlock("Personnel Constraints", 
            `With an IT team size of ${data.it_team}, manual provisioning is a high-risk bottleneck. We act as a force multiplier for your staff.`);
    }

    if (data.selectedHW.length > 0) {
        html += addBlock("Hardware Complexity", 
            `Supporting a mix of ${data.selectedHW.join(' and ')} fleet manually creates data silos. We centralize varied assets into a single pane of glass.`);
    }

    if (data.manualTicketing) {
        html += addBlock("Administrative Efficiency", 
            `Replacing manual requests with self-service workflows restores accountability and oversight to your IT operations.`);
    }

    // --- PILLARS IMAGE ---
    html += `
            <div style="margin: 30px 0; text-align: center; page-break-inside: avoid;">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" 
                     style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" 
                     crossorigin="anonymous">
            </div>

            <div style="background: #fafafa; padding: 25px; border-radius: 14px; border: 1px solid #eee; margin-top: 20px; page-break-inside: avoid;">
                <h4 style="color: #ff585d; margin-top: 0; font-size: 16px;">Plan for your future</h4>
                <p style="font-size: 13px; line-height: 1.6; color: #333;">
                    <strong>Scenario Recap:</strong> You manage ${data.n} devices across ${data.selectedOS.join('/')} environments. 
                    This profile indicates a ${score.toFixed(0)}% requirement for automated lifecycle management.
                    <br><br>
                    <strong>The Solution:</strong> Factorial IT decouples growth from manual workload. By automating the ${data.riskFactorCount} risk factors identified, we ensure operations remain on autopilot.
                </p>
                <div style="margin-top: 15px;">
                    <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" 
                       style="display: inline-block; background: #ff585d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px;">
                       Book Strategic Consultation
                    </a>
                </div>
            </div>

            <div style="margin-top: 40px; text-align: right; color: #ff585d; font-weight: 600; font-size: 10px;">
                CONFIDENTIAL STRATEGIC AUDIT 2026
            </div>
        </div> `;

    element.innerHTML = html;

    const opt = {
        margin: [10, 0, 10, 0],
        filename: 'Factorial_IT_Audit_Report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true, letterRendering: true, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

function addBlock(title, text) {
    return `
        <div style="margin-bottom: 18px; page-break-inside: avoid;">
            <strong style="display: block; font-size: 14px; color: #ff585d; margin-bottom: 5px;">• ${title}</strong>
            <p style="font-size: 12px; color: #444; margin: 0; line-height: 1.5;">${text}</p>
        </div>
    `;
}

function getStrategicSummary(score) {
    if (score > 60) return "Strategic Assessment: High Fit. Your organization exhibits significant operational friction. Manual processes present a critical risk to scalability.";
    if (score >= 30) return "Strategic Assessment: Moderate Fit. Manual processes are becoming a bottleneck. Implementing automation prevents technical debt.";
    return "Strategic Assessment: Early Maturity. Establishing automated foundations now prevents chaotic scale-up friction.";
}
