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
    
    // Core styling for the generation container
    element.style.width = '794px'; // Standard A4 width at 96 DPI
    element.style.background = 'white';

    let html = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');
            
            .pdf-page {
                width: 100%;
                height: 1120px; /* Approximate A4 height */
                padding: 40px;
                box-sizing: border-box;
                position: relative;
                page-break-after: always; /* Forces a new page in the PDF */
                display: flex;
                flex-direction: column;
            }

            .header-img {
                width: calc(100% + 80px); /* Extend to edges if needed */
                margin: -40px -40px 20px -40px;
            }

            .subtitle-text {
                font-weight: 600;
                border-bottom: 2px solid #74f9d4;
                padding-bottom: 15px;
                color: #444;
                font-size: 16px; 
            }

            .fit-score-box {
                background: #f4fdfa;
                padding: 25px;
                border-radius: 12px;
                margin-bottom: 25px;
                border-left: 6px solid #74f9d4;
            }

            .graph-img-container {
                text-align: center;
                margin: 20px 0;
            }
            
            .graph-img {
                width: 100%;
                max-width: 620px;
            }

            .future-plan-box {
                background: #f9f9f9;
                border-radius: 14px;
                padding: 25px;
                margin-top: auto; /* Pushes to bottom of page */
            }

            .footer-tag {
                text-align: right;
                color: #ff585d;
                font-weight: 600;
                font-size: 10px;
                margin-top: 10px;
            }
        </style>

        <div class="pdf-page">
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" class="header-img" crossorigin="anonymous">
            
            <p class="subtitle-text">Automation in your IT Operating System - Powered by HR Data</p>
            
            <div style="margin: 20px 0; line-height: 1.5; font-size: 13px; color: #333;">
                <p>Factorial IT is engineered to bridge the operational gap between People and Technology. By integrating directly with your employee data as a single source of truth, we automate the technology lifecycle of hardware and software.</p>
            </div>

            <div class="fit-score-box">
                <h2 style="margin:0; color: #111; font-size: 20px;">Fit Score: ${score.toFixed(1)}</h2>
                <p style="font-size: 14px; margin: 10px 0 0 0;">${getStrategicSummary(score)}</p>
            </div>

            <h3 style="color: #ff585d; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">Business Case & Justification</h3>
            
            <div class="blocks-container">
                ${addBlocks(data)} 
            </div>
            
            <div class="footer-tag">CONFIDENTIAL STRATEGIC AUDIT 2026 | PAGE 1</div>
        </div>

        <div class="pdf-page">
            <div class="graph-img-container">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" class="graph-img" crossorigin="anonymous">
            </div>

            <div class="future-plan-box">
                <h3 style="color: #ff585d; margin:0 0 10px 0;">Plan for your future</h3>
                <p style="font-size: 13px; color: #333; line-height: 1.5;">
                    You have told us that currently you manage <strong>${getInputRecap(data)}</strong>. 
                    Learn how you can automate, secure, and scale your operations with <strong>Factorial IT</strong>.
                </p>
                <div style="margin-top: 15px;">
                    <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" 
                       style="background: #ff585d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
                       Book a meeting
                    </a>
                </div>
            </div>
            
            <div class="footer-tag">CONFIDENTIAL STRATEGIC AUDIT 2026 | PAGE 2</div>
        </div>
    `;

    element.innerHTML = html;

    const opt = {
        margin: 0,
        filename: `Factorial_IT_Assessment.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

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
