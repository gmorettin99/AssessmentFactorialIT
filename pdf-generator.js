/**
 * FACTORIAL IT: BESPOKE STRATEGIC PDF GENERATOR
 * Requirements: Centered header, Bottom-right footer notice, Injected SVG graphic.
 */

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    
    // Set base container styles with DM Sans
    element.style.padding = '0'; // Padding moved to internal wrapper for better layout control
    element.style.fontFamily = "'DM Sans', sans-serif";
    element.style.color = '#111';
    element.style.position = 'relative';

    // 1. HEADER & PRODUCT OVERVIEW
    let html = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');
            .pdf-page {
                padding: 40px;
                position: relative;
                box-sizing: border-box;
                min-height: 1050px; /* Approximate A4 height to force footer position */
            }
            .header-img-container {
                width: 100%;
                text-align: center;
                margin-bottom: 30px;
            }
            .header-img {
                width: 100%; /* Fits to page width */
                height: auto;
            }
            .footer-notice {
                position: absolute;
                bottom: 20px;
                right: 40px;
                color: #ff585d;
                font-weight: 600;
                font-size: 10px;
                text-transform: uppercase;
            }
            .fit-score-box {
                background: #f4fdfa;
                padding: 25px;
                border-radius: 12px;
                margin-bottom: 20px;
                border-left: 6px solid #74f9d4;
            }
            .svg-graphic-container {
                width: 100%;
                margin: 20px 0 35px 0;
                text-align: center;
            }
            .business-case-title {
                color: #ff585d;
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 1px;
                margin-bottom: 20px;
            }
        </style>

        <div class="pdf-page">
            <div class="header-img-container">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" class="header-img">
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

            <div class="fit-score-box">
                <h2 style="margin-top:0; color: #111; font-size: 20px; font-weight: 600;">Fit Score: ${score.toFixed(1)}</h2>
                <p style="font-size: 14px; margin-bottom:0; line-height: 1.5; font-weight: 400;">${getStrategicSummary(score)}</p>
            </div>

            <div class="svg-graphic-container">
                <svg width="100%" height="auto" viewBox="0 0 1873 735" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter2_ddd_0_1)">
                    <rect x="56" y="38" width="543" height="563" rx="24.6557" fill="url(#paint2_linear_0_1)"/>
                    <rect x="665" y="40" width="543" height="560" rx="24.6557" fill="url(#paint1_linear_0_1)"/>
                    <rect x="1274" y="40" width="543" height="561.085" rx="24.6557" fill="url(#paint0_linear_0_1)"/>
                    ${svgPathsContent} 
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="1545.5" y1="40" x2="1545.5" y2="601.085" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"/><stop offset="1" stop-color="#A5FDE0"/></linearGradient>
                        <linearGradient id="paint1_linear_0_1" x1="936.5" y1="40" x2="936.5" y2="600" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"/><stop offset="1" stop-color="#A5FDE0"/></linearGradient>
                        <linearGradient id="paint2_linear_0_1" x1="327.5" y1="38" x2="327.5" y2="601" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"/><stop offset="1" stop-color="#A5FDE0"/></linearGradient>
                    </defs>
                </svg>
            </div>

            <h3 class="business-case-title">Business Case & Justification</h3>
    `;

    // 2. DYNAMIC JUSTIFICATION BLOCKS (Reporting Exact Figures)
    if (data.devices > 50) {
        html += addBlock("Scalable Infrastructure", 
            `You currently manage ${data.devices} devices. As a fleet grows, the administrative overhead typically increases linearly. Factorial IT transforms this linear work into scalable workflows, allowing you to push security updates to all ${data.devices} assets as easily as to one.`);
    }

    if (data.compliance.iso || data.compliance.soc2 || data.compliance.nis2) {
        html += addBlock("Regulatory Frameworks", 
            `Since you are navigating regulatory frameworks like NIS2 or ISO 27001, compliance requires auditable proof of control. Factorial IT acts as an Automated Evidence Locker, continuously logging encryption status and access changes for instant audit exports.`);
    }

    if (data.it_team > 0 && data.it_team <= 3) {
        html += addBlock("Personnel Constraints", 
            `With an IT team size of ${data.it_team} people, ticket fatigue is a significant risk. By automating low-level tasks like laptop provisioning, Factorial IT effectively acts as your third team member, freeing up roughly 30% of your current capacity.`);
    }

    if (data.ob_year > 12) {
        html += addBlock("High Onboarding Velocity", 
            `With ${data.ob_year} new hires per year, manual setup creates repetitive strain. Our HR-to-IT Sync ensures that when a candidate is hired, their laptop is ordered and accounts are created automatically for all ${data.ob_year} annual joiners.`);
    }

    if (data.manualTicketing) {
        html += addBlock("Administrative Efficiency", 
            `Currently handling IT requests manually leads to lost accountability. Our self-service workflows bring structure without the complexity of traditional enterprise service desks.`);
    }

    // Confidentiality Notice in Bottom Right
    html += `
            <div class="footer-notice">CONFIDENTIAL STRATEGIC AUDIT 2026</div>
        </div> `;

    element.innerHTML = html;

    // 3. PDF EXPORT SETTINGS
    const opt = {
        margin: 0, // Margin is handled internally by .pdf-page class
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
