function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    // Force a clean memory-render context for the PDF engine
    element.style.width = '750px';
    element.style.background = '#ffffff'; 
    element.style.fontFamily = "'Inter', sans-serif";
    element.style.color = '#111';

    let html = `
        <div style="text-align:center; padding: 0px 40px 10px 40px; margin-top: 0;">
            <h1 style="font-size: 38px; font-weight: 800; line-height: 1.1; margin-top: 0; margin-bottom: 15px; color: #111;">
                IT operations in <span style="color:#ff585d;">autopilot</span> &<br>
                enterprise-grade <span style="color:#ff585d;">security</span><br>
                connected to <span style="color:#ff585d;">HR data</span>
            </h1>
            <div style="margin-top: 0;">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" style="width:160px;" crossorigin="anonymous">
            </div>
        </div>

        <div style="padding: 0 50px 40px 50px;">
            <p style="font-weight: 700; color: #444; border-bottom: 2px solid #74f9d4; padding-bottom: 12px; margin-bottom: 25px; font-size: 16px;">
                Automation in your IT Operating System – Powered by HR Data
            </p>

            <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 30px;">
                Factorial IT is engineered to bridge the operational gap between People and Technology. By integrating directly with your employee data as a single source of truth, we automate the technology lifecycle of hardware and software, from procurement to offboarding.
            </p>

            <div style="background: #f4fdfa; padding: 30px; border-radius: 12px; border-left: 8px solid #74f9d4; margin-bottom: 35px; page-break-inside: avoid;">
                <h2 style="margin: 0 0 10px 0; font-size: 26px; font-weight: 800;">${score.toFixed(1)}%</h2>
                <p style="margin: 0; font-size: 15px; line-height: 1.5; font-weight: 500; color: #333;">
                    ${getStrategicSummary(score)}
                </p>
            </div>

            <h3 style="color: #ff585d; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 800; margin-bottom: 20px;">
                Business Case & Justification
            </h3>
    `;

    // Tailored Justification Blocks
    if (data.n > 0) {
        html += addBlock("Scalable Infrastructure", `Managing ${data.n} devices for ${data.m} employees creates a scaling ratio of ${(data.n/data.m).toFixed(1)}. Factorial IT automates this lifecycle to prevent administrative burnout.`);
    }
    if (data.activeCompliance && data.activeCompliance.length > 0) {
        html += addBlock("Regulatory Frameworks", `Navigating ${data.activeCompliance.join(', ')} requires auditable proof of control. We act as your automated evidence locker.`);
    }

    // Pillars Image: Break Guards and Clearance Fixes
    html += `
            <div style="margin: 40px 0; text-align: center; page-break-inside: avoid; clear: both; display: block;">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" 
                     style="width: 100%; max-width: 650px; display: inline-block;" 
                     crossorigin="anonymous">
            </div>

            <div style="background: #fafafa; padding: 30px; border-radius: 14px; border: 1px solid #eee; margin-top: 20px; page-break-inside: avoid;">
                <h4 style="color: #ff585d; margin-top: 0; font-size: 18px; font-weight: 800;">Plan for your future</h4>
                <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                    <strong>Scenario Recap:</strong> You currently manage ${data.n} devices across ${data.selectedOS ? data.selectedOS.join('/') : 'multiple'} environments. This organizational profile demonstrates a ${score.toFixed(0)}% requirement for automated lifecycle management.
                    <br><br>
                    <strong>The Solution:</strong> Factorial IT decouples growth from manual workload. By automating the ${data.riskFactorCount} specific risk factors identified in this audit, we ensure IT operations remain on autopilot.
                </p>
                <div style="text-align: left;">
                    <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" style="display: inline-block; background: #ff585d; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 800; font-size: 15px;">
                        Book Strategic Consultation
                    </a>
                </div>
            </div>
            
            <div style="margin-top: 50px; text-align: right; color: #ff585d; font-weight: 600; font-size: 10px; letter-spacing: 1px;">
                CONFIDENTIAL STRATEGIC AUDIT 2026
            </div>
        </div>
    `;

    element.innerHTML = html;

    const opt = {
        margin: [5, 0, 10, 0], // Minimal top margin for print safety
        filename: 'Factorial_IT_Assessment.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2.5, // Prevents memory artifacts and black bars
            useCORS: true, 
            letterRendering: true,
            scrollX: 0,
            scrollY: 0,
            backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
}

function addBlock(title, text) {
    return `<div style="margin-bottom: 25px; page-break-inside: avoid;">
        <strong style="display: block; font-size: 15px; color: #ff585d; margin-bottom: 6px;">• ${title}</strong>
        <p style="font-size: 13px; color: #444; margin: 0; line-height: 1.5; font-weight: 400;">${text}</p>
    </div>`;
}

function getStrategicSummary(score) {
    if (score > 60) return "Strategic Assessment: High Fit. Your organization exhibits a 'perfect storm' of operational friction. Continuing with manual processes presents a significant risk of burnout and compliance failure.";
    if (score >= 30) return "Strategic Assessment: Moderate Fit. Manual processes are becoming a bottleneck. Implementing automation now prevents technical debt.";
    return "Strategic Assessment: Early Maturity. Foundations established now prevent chaotic scale-up friction.";
}
