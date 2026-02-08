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
    
    // Container settings for PDF generation
    element.style.width = '750px';
    element.style.minHeight = '1000px'; 
    element.style.height = 'auto'; 
    element.style.background = 'white';
    element.style.fontFamily = "'DM Sans', sans-serif";
    element.style.color = '#111';
    element.style.overflow = 'hidden'; 

    let html = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');
            
            .pdf-container {
                width: 100%;
                box-sizing: border-box;
                background: white;
            }

            .content-padding {
                padding: 0px 40px 40px 40px; 
            }

            .header-img-container {
                width: 100%;
                line-height: 0;
                margin-bottom: 20px;
            }

            .header-img {
                width: 100%;
                height: auto;
                display: block;
            }

            .subtitle-text {
                font-weight: 600;
                border-bottom: 2px solid #74f9d4;
                padding-bottom: 15px;
                margin-top: 0;
                color: #444;
                font-size: 16px; 
            }

            .fit-score-box {
                background: #f4fdfa;
                padding: 25px;
                border-radius: 12px;
                margin-bottom: 20px;
                border-left: 6px solid #74f9d4;
                page-break-inside: avoid; 
            }

            /* --- GRAPH IMAGE FIXES --- */
            .graph-img-container {
                width: 100%;
                margin-top: 30px;
                margin-bottom: 30px;
                text-align: center;
                display: block;
                page-break-inside: avoid; /* CRITICAL: Prevents image from vanishing if it hits a page break */
                break-inside: avoid;
            }
            
            .graph-img {
                width: 100%;
                max-width: 600px; /* Slight reduction to ensure fit */
                height: auto;
                display: inline-block;
            }

            /* --- NEW 'PLAN FOR YOUR FUTURE' CSS --- */
            .future-plan-box {
                background: #f9f9f9;
                border-radius: 14px;
                padding: 25px;
                margin-top: 30px;
                page-break-inside: avoid;
                break-inside: avoid;
            }

            .future-plan-title {
                color: #ff585d;
                font-size: 16px;
                font-weight: 700;
                margin-top: 0;
                margin-bottom: 10px;
            }

            .future-plan-text {
                font-size: 13px;
                color: #333;
                line-height: 1.5;
                margin-bottom: 20px;
            }

            .future-plan-cta {
                text-align: left;
            }

            .future-plan-cta a {
                display: inline-block;
                background: #ff585d;
                color: white !important; /* Force white text */
                text-decoration: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 600;
            }

            /* Block styling */
            .info-block {
                margin-bottom: 15px;
                page-break-inside: avoid; 
            }
        </style>

        <div class="pdf-container">
            <div class="header-img-container">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" class="header-img" crossorigin="anonymous">
            </div>
            
            <div class="content-padding">
                <p class="subtitle-text">
                    Automation in your IT Operating System - Powered by HR Data
                </p>
                
                <div style="margin: 20px 0; line-height: 1.5; font-size: 13px; color: #333; font-weight: 400;">
                    <p>Factorial IT is engineered to bridge the operational gap between People and Technology. 
                    By integrating directly with your employee data as a single source of truth, we automate the technology lifecycle of hardware and software, 
                    from procurement to offboarding.</p>
                </div>

                <div class="fit-score-box">
                    <h2 style="margin-top:0; color: #111; font-size: 20px; font-weight: 600;">Fit Score: ${score.toFixed(1)}</h2>
                    <p style="font-size: 14px; margin-bottom:0; line-height: 1.4; font-weight: 400;">${getStrategicSummary(score)}</p>
                </div>

                <h3 style="color: #ff585d; text-transform: uppercase; font-size: 14px; font-weight: 600; letter-spacing: 1px; margin-bottom: 20px;">Business Case & Justification</h3>
    `;

    // --- DYNAMIC TEXT BLOCKS ---
    if (data.devices > 50) {
        html += addBlock("Scalable Infrastructure", 
            `You currently manage ${data.devices} devices. As a fleet grows, the administrative overhead typically increases linearly. Factorial IT transforms this linear work into scalable workflows.`);
    }

    if (data.compliance.iso || data.compliance.soc2 || data.compliance.nis2 || data.compliance.hipaa) {
        html += addBlock("Regulatory Frameworks", 
            `Since you are navigating regulatory frameworks (NIS2, ISO 27001, etc.), compliance requires auditable proof of control. Factorial IT acts as an Automated Evidence Locker, continuously logging encryption status and access changes.`);
    }

    if (data.it_team > 0 && data.it_team <= 3) {
        html += addBlock("Personnel Constraints", 
            `With an IT team size of ${data.it_team}, ticket fatigue is a risk. By automating low-level tasks like laptop provisioning, Factorial IT acts as an extra team member, freeing up capacity.`);
    }

    if (data.ob_year > 12) {
        html += addBlock("High Onboarding Velocity", 
            `With ${data.ob_year} new hires per year, manual setup creates repetitive strain. Our HR-to-IT Sync ensures that when a candidate is hired, their laptop is ordered and accounts are created automatically.`);
    }

    if (data.manualTicketing) {
        html += addBlock("Administrative Efficiency", 
            `Currently handling IT requests manually leads to lost accountability. Our self-service workflows bring structure without the complexity of traditional enterprise service desks.`);
    }

    if (data.isRemote) {
        html += addBlock("Remote & Hybrid Security", 
            `Operating a remote or hybrid environment expands your security perimeter. Factorial IT unifies control regardless of physical location, ensuring compliant device states even when users are off the office network.`);
    }

    if (data.mixedHW) {
        html += addBlock("Hardware Complexity", 
            `Managing a diverse mix of hardware (Laptops, Phones, Tablets) manually often creates data silos. Factorial IT centralizes these varied assets into a single pane of glass for unified inventory management.`);
    }

    if (data.mixedOS) {
        html += addBlock("Cross-OS Ecosystem", 
            `Supporting multiple Operating Systems (Windows, iOS, Linux, etc.) often requires specialized tools for each. Factorial IT consolidates this into one MDM solution, reducing the tool-sprawl overhead.`);
    }

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
        margin: [0, 0, 0, 0], 
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
