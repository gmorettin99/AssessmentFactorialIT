/**
 * FACTORIAL IT: STRATEGIC PDF GENERATOR
 * Updates:
 * 1. LAYOUT: Moved Pillars graph to the bottom (after text).
 * 2. CONTENT: Removed Main Title, updated Subtitle.
 * 3. FORMAT: Multi-page enabled (height: auto).
 */

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    
    // Base container settings for multi-page support
    element.style.padding = '0'; 
    element.style.fontFamily = "'DM Sans', sans-serif";
    element.style.color = '#111';
    element.style.background = 'white';
    element.style.width = '100%';
    element.style.height = 'auto'; 

    let html = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap');
            
            /* RESET PDF PAGE */
            .pdf-page {
                width: 100%;
                position: relative;
                box-sizing: border-box;
                background: white;
                /* Allow content to flow to next page */
                height: auto; 
                overflow: visible;
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

            /* Subtitle Styling */
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
            }

            /* GRAPH IMAGE STYLES */
            .graph-img-container {
                width: 100%;
                margin-top: 30px; /* Space above graph */
                margin-bottom: 30px;
                text-align: center;
                page-break-inside: avoid; /* Try to keep graph whole */
            }
            
            .graph-img {
                width: 100%;
                max-width: 650px; 
                height: auto;
                display: inline-block;
            }

            .no-break {
                page-break-inside: avoid;
                margin-bottom: 15px;
            }
        </style>

        <div class="pdf-page">
            <div class="header-img-container">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" class="header-img" crossorigin="anonymous">
            </div>
            
            <div class="content-padding">
                <p class="subtitle-text">
                    Automation in your IT Operating System - Powered by HR Data
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

    // --- 3. MOVED PILLARS GRAPH TO THE BOTTOM ---
    html += `
                <div class="graph-img-container">
                    <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" class="graph-img" crossorigin="anonymous">
                </div>

            <div style="margin-top: 40px; text-align: right; color: #ff585d; font-weight: 600; font-size: 10px;">
                CONFIDENTIAL STRATEGIC AUDIT 2026
            </div>
            </div> </div>
    `;

    element.innerHTML = html;

    // PDF EXPORT SETTINGS
    const opt = {
        margin: [0, 0, 0, 0], 
        filename: `Factorial_IT_Assessment.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        // Enables auto-paging
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }, 
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            scrollY: 0 
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

function addBlock(title, text) {
    return `
        <div class="no-break">
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
