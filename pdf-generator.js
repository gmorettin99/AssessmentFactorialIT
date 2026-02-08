/**
 * FACTORIAL IT: BESPOKE STRATEGIC PDF GENERATOR
 * Default Fonts: DM Sans (Regular & SemiBold)
 */

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    
    // Set base container styles with DM Sans
    element.style.padding = '40px';
    element.style.fontFamily = "'DM Sans', sans-serif";
    element.style.color = '#111';

    // 1. HEADER WITH LOGO & PRODUCT OVERVIEW
    let html = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;1,9..40,400&display=swap');
        </style>

        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" 
                 style="width: 180px; height: auto;">
            
            <div style="text-align: right; color: #ff585d; font-weight: 600; font-size: 10px;">
                CONFIDENTIAL STRATEGIC AUDIT 2026
            </div>
        </div>
        
        <h1 style="color: #ff585d; margin-bottom: 5px; font-size: 26px; font-weight: 600;">Factorial IT Strategic Audit</h1>
        <p style="font-weight: 600; border-bottom: 2px solid #74f9d4; padding-bottom: 15px; margin-top: 0; color: #444;">
            The Operating System for IT, Powered by HR Data
        </p>
        
        <div style="margin: 25px 0; line-height: 1.6; font-size: 13px; color: #333; font-weight: 400;">
            <p>Factorial IT is engineered to bridge the operational gap between People (HR) and Technology (IT). 
            By integrating directly with your employee source of truth, we automate the technology lifecycle 
            from procurement and onboarding to security and offboarding.</p>
        </div>

        <div style="background: #f4fdfa; padding: 25px; border-radius: 12px; margin-bottom: 35px; border-left: 6px solid #74f9d4;">
            <h2 style="margin-top:0; color: #111; font-size: 20px; font-weight: 600;">Fit Score: ${score.toFixed(1)}</h2>
            <p style="font-size: 14px; margin-bottom:0; line-height: 1.5; font-weight: 400;">${getStrategicSummary(score)}</p>
        </div>

        <h3 style="color: #ff585d; text-transform: uppercase; font-size: 12px; font-weight: 600; letter-spacing: 1px; margin-bottom: 20px;">Business Case & Justification</h3>
    `;

    // 2. DYNAMIC JUSTIFICATION BLOCKS (Reporting Exact Figures)
    
    if (data.devices > 50) {
        html += addBlock("Scalable Infrastructure", 
            `You currently manage ${data.devices} devices. As a fleet grows, the administrative overhead typically increases linearly. Factorial IT transforms this linear work into scalable workflows, allowing you to push security updates to all ${data.devices} assets as easily as to one.`);
    }

    if (data.compliance.iso || data.compliance.soc2 || data.compliance.nis2) {
        html += addBlock("Regulatory Frameworks", 
            `Since you are navigating regulatory frameworks like NIS2 or ISO 27001, compliance requires auditable proof of control. Factorial IT acts as an Automated Evidence Locker, continuously logging encryption status and access changes for instant, headache-free audit exports.`);
    }

    if (data.it_team > 0 && data.it_team <= 3) {
        html += addBlock("Personnel Constraints", 
            `With an IT team size of ${data.it_team} people, ticket fatigue is a significant risk. By automating low-level tasks like laptop provisioning, Factorial IT effectively acts as your third team member, freeing up roughly 30% of your current capacity for high-value projects.`);
    }

    if (data.ob_year > 12) {
        html += addBlock("High Onboarding Velocity", 
            `With ${data.ob_year} new hires per year, manual setup creates repetitive strain and human error. Our HR-to-IT Sync ensures that when a candidate is hired, their laptop is ordered and accounts are created automatically, standardizing the experience for all ${data.ob_year} annual joiners.`);
    }

    if (data.manualTicketing) {
        html += addBlock("Administrative Efficiency", 
            `Currently handling IT requests manually leads to lost accountability and shadow work. Our self-service workflows bring structure and accountability without the complexity of traditional enterprise service desks.`);
    }

    element.innerHTML = html;

    // 3. PDF EXPORT SETTINGS
    const opt = {
        margin: 15,
        filename: `Factorial_IT_Assessment.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

/**
 * HELPER FUNCTIONS
 */
function addBlock(title, text) {
    return `
        <div style="margin-bottom: 22px; page-break-inside: avoid;">
            <strong style="display: block; font-size: 14px; color: #ff585d; margin-bottom: 5px; font-weight: 600;">• ${title}</strong>
            <p style="font-size: 12px; color: #444; margin-top: 0; line-height: 1.6; font-weight: 400;">${text}</p>
        </div>
    `;
}

function getStrategicSummary(score) {
    if (score > 25) return "Strategic Assessment: High Fit. Your organization exhibits a 'perfect storm' of operational friction. Continuing with manual processes presents a significant risk of burnout and compliance failure.";
    if (score >= 15) return "Strategic Assessment: Moderate Fit. Manual processes are becoming a bottleneck. Implementing automation now will future-proof your operations before technical debt accumulates.";
    return "Strategic Assessment: Early Maturity. Implementing a foundational system now will prevent the chaotic inflection point as you scale toward the 50-employee threshold.";
}
