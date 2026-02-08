/**
 * FACTORIAL IT: BESPOKE STRATEGIC PDF GENERATOR
 * Updates: 
 * 1. References external SVG variable (window.STRATEGIC_GRAPHS)
 * 2. Zero margins for flush header.
 * 3. Block-level image display to remove gaps.
 */

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    
    // Set base container styles
    element.style.padding = '0'; 
    element.style.margin = '0';
    element.style.fontFamily = "'DM Sans', sans-serif";
    element.style.color = '#111';
    element.style.position = 'relative';
    element.style.background = 'white';

    // 1. RETRIEVE GRAPH FROM GLOBAL STORE
    // This looks for the variable we created in svg-assets.js
    const svgContent = (window.STRATEGIC_GRAPHS && window.STRATEGIC_GRAPHS.pillars) 
        ? window.STRATEGIC_GRAPHS.pillars 
        : '<div style="padding:20px; text-align:center; color:#ccc;">Graph Asset Not Loaded</div>';

    let html = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');
            
            /* RESET PDF PAGE */
            .pdf-page {
                width: 100%;
                margin: 0;
                padding: 0; /* Zero padding ensures header hits the top edge */
                position: relative;
                box-sizing: border-box;
                min-height: 1123px; /* Standard A4 Height at 96 DPI approx */
                background: white;
                overflow: hidden;
            }

            /* INNER CONTENT PADDING */
            /* We apply padding here so the text doesn't touch the edges, 
               but the header image stays outside this to touch the top/sides */
            .content-padding {
                padding: 10px 40px 40px 40px; 
            }

            /* HEADER IMAGE FIXES */
            .header-img-container {
                width: 100%;
                line-height: 0;      /* Kills line-height gap */
                font-size: 0;        /* Kills font-size gap */
                margin-bottom: 25px; /* Space between header and title */
            }

            .header-img {
                width: 100%;
                height: auto;
                display: block;      /* Forces block to remove inline spacing issues */
            }

            /* FOOTER */
            .footer-notice {
                position: absolute;
                bottom: 30px;
                right: 40px;
                color: #ff585d;
                font-weight: 600;
                font-size: 10px;
                text-transform: uppercase;
            }

            /* SCORES */
            .fit-score-box {
                background: #f4fdfa;
                padding: 25px;
                border-radius: 12px;
                margin-bottom: 20px;
                border-left: 6px solid #74f9d4;
            }

            /* SVG CONTAINER */
            .svg-container {
                width: 100%;
                margin: 30px 0;
                display: flex;
                justify-content: center;
            }

            /* FORCE SVG SIZING */
            .svg-container svg {
                width: 100%;
                height: auto;
                max-height: 350px;
                display: block; /* Removes inline spacing gaps */
            }
        </style>

        <div class="pdf-page">
            <div class="header-img-container">
                <img src="Framewhite.png" class="header-img">
            </div>
            
            <div class="content-padding">
                <h1 style="color: #ff585d; margin-bottom: 5px; font-size: 26px; font-weight: 600; margin-top: 0;">Factorial IT Strategic Audit</h1>
                <p style="font-weight: 600; border-bottom: 2px solid #74f9d4; padding-bottom: 15px; margin-top: 0; color: #444;">
                    The Operating System for IT, Powered by HR Data
                </p>
                
                <div style="margin: 20px 0; line-height: 1.5; font-size: 13px; color: #333; font-weight: 400;">
                    <p>Factorial IT is engineered to bridge the operational gap between People (HR) and Technology (IT). 
                    By integrating directly with your employee source of truth, we automate the technology lifecycle 
                    from procurement to offboarding.</p>
                </div>

                <div class="fit-score-box">
                    <h2 style="margin-top:0; color: #111; font-size: 20px; font-weight: 600;">Fit Score: ${score.toFixed(1)}</h2>
                    <p style="font-size: 14px; margin-bottom:0; line-height: 1.4; font-weight: 400;">${getStrategicSummary(score)}</p>
                </div>

                <div class="svg-container">
                    ${svgContent}
                </div>

                <h3 style="color: #ff585d; text-transform: uppercase; font-size: 14px; font-weight: 600; letter-spacing: 1px; margin-bottom: 20px;">Business Case & Justification</h3>
    `;

    // 2. DYNAMIC BLOCKS
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

    // Confidentiality Notice
    html += `
            </div> <div class="footer-notice">CONFIDENTIAL STRATEGIC AUDIT 2026</div>
        </div> `;

    element.innerHTML = html;

    // 3. PDF EXPORT SETTINGS (CRITICAL FOR MARGINS)
    const opt = {
        margin: 0, // Forces zero margin on the PDF document itself
        filename: `Factorial_IT_Assessment.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            scrollY: 0 
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

/**
 * HELPER FUNCTIONS
 */
function addBlock(title, text) {
    return `
        <div style="margin-bottom: 15px; page-break-inside: avoid;">
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
