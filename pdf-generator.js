/**
 * FACTORIAL IT: BESPOKE STRATEGIC PDF GENERATOR
 * Updates:
 * 1. FIX: Removed "overflow: hidden" so content flows to Page 2.
 * 2. FIX: Reduced header margins to remove whitespace.
 * 3. FIX: Checks window.STRATEGIC_GRAPHS for the graph.
 */

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    
    // Set base container styles
    element.style.padding = '0'; 
    element.style.fontFamily = "'DM Sans', sans-serif";
    element.style.color = '#111';
    element.style.background = 'white';
    // We set a fixed width to simulate A4 paper on screen before print
    element.style.width = '100%'; 

    // 1. RETRIEVE GRAPH
    // We use a distinctive error message to prove this new code is running
    const svgContent = (window.STRATEGIC_GRAPHS && window.STRATEGIC_GRAPHS.pillars) 
        ? window.STRATEGIC_GRAPHS.pillars 
        : '<div style="padding:20px; text-align:center; color:red; border:2px solid red;">ERROR: Graph Data Not Found. Check svg-assets.js loading order.</div>';

    let html = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');
            
            /* RESET PDF PAGE */
            .pdf-page {
                width: 100%;
                /* CRITICAL FIX: Changed from fixed height to auto so it grows */
                height: auto; 
                min-height: 1000px;
                margin: 0;
                padding: 0; 
                position: relative;
                box-sizing: border-box;
                background: white;
                /* CRITICAL FIX: Removed overflow:hidden to stop cutting off text */
                overflow: visible; 
            }

            /* INNER CONTENT PADDING */
            .content-padding {
                /* Reduced top padding from 10px to 0px to pull text up */
                padding: 0px 40px 40px 40px; 
            }

            /* HEADER IMAGE FIXES */
            .header-img-container {
                width: 100%;
                line-height: 0;
                font-size: 0;
                /* Reduced margin from 25px to 10px to reduce whitespace */
                margin-bottom: 10px; 
            }

            .header-img {
                width: 100%;
                height: auto;
                display: block;
            }

            /* FOOTER - Will appear at the very end of the document */
            .footer-notice {
                margin-top: 50px;
                padding-bottom: 30px;
                text-align: right;
                margin-right: 40px;
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
                margin: 20px 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            /* FORCE SVG SIZING */
            .svg-container svg {
                width: 90% !important; 
                height: auto;
                max-height: 350px;
                display: block;
            }
        </style>

        <div class="pdf-page">
            <div class="header-img-container">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" class="header-img" crossorigin="anonymous">
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

    // Close the padding div, then add footer, then close page
    html += `
            <div class="footer-notice">CONFIDENTIAL STRATEGIC AUDIT 2026</div>
            </div> </div> `;

    element.innerHTML = html;

    // 3. PDF EXPORT SETTINGS
    const opt = {
        margin: 0, 
        filename: `Factorial_IT_Assessment.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            scrollY: 0 // Prevents top whitespace if you are scrolled down
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

/**
 * HELPER FUNCTIONS
 */
function addBlock(title, text) {
    // page-break-inside: avoid ensures a paragraph doesn't get cut in half at the bottom of a page
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
