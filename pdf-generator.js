/**
 * FACTORIAL IT: STRATEGIC PDF GENERATOR
 * FINAL VERSION: Multi-Page Support + Blank PDF Fix
 */

// --- HELPER 1: DYNAMIC LIST FORMATTER ---
const formatList = (obj, labels) => {
    if (!obj) return null;
    const active = Object.keys(obj)
        .filter(key => obj[key] === true)
        .map(key => labels[key] || key);

    if (active.length === 0) return null;
    if (active.length === 1) return active[0];
    return active.slice(0, -1).join(", ") + " and " + active.slice(-1);
};

// --- HELPER 2: STRATEGIC SUMMARY ---
function getStrategicSummary(score) {
    if (score >= 60) return "Strategic Assessment: High Fit. Your organization exhibits a 'perfect storm' of operational friction. Continuing with manual processes presents a significant risk of burnout and compliance failure.";
    if (score >= 35) return "Strategic Assessment: Moderate Fit. Manual processes are becoming a bottleneck. Implementing automation now will future-proof your operations before technical debt accumulates.";
    return "Strategic Assessment: Early Maturity. Implementing a foundational system now will prevent the chaotic inflection point as you scale toward the 50-employee threshold.";
}

// --- HELPER 3: RECAP STRING ---
function getInputRecap(data) {
    const points = [];
    if (data.employees) points.push(`${data.employees} employees`);
    if (data.devices) points.push(`${data.devices} managed devices`);
    if (data.it_team) points.push(`an IT team of ${data.it_team}`);
    
    const hwCount = Object.values(data.hardware || {}).filter(v => v).length;
    if (hwCount > 1) points.push(`a mixed hardware environment`);
    
    return points.length ? points.join(', ') : 'a growing IT environment';
}

// --- MAIN GENERATOR FUNCTION ---
function generateStrategicPDF(score, data) {
    // 1. Create the container
    const element = document.createElement('div');
    element.id = "temp-pdf-container";
    
    // 2. Prepare Dynamic Labels
    const complianceLabels = { nis2: "NIS2", iso: "ISO 27001", hipaa: "HIPAA", soc2: "SOC2" };
    const hwLabels = { laptop: "Laptops", phone: "Phones", ipad: "iPads" };
    const osLabels = { windows: "Windows", ios: "iOS", linux: "Linux" };

    const activeCompliance = formatList(data.compliance, complianceLabels);
    const activeHW = formatList(data.hardware, hwLabels);
    const activeOS = formatList(data.os, osLabels);

    // 3. Build HTML
    // Note: We use 'break-inside: avoid' to ensure blocks don't get cut in half across pages.
    let html = `
        <style>
            .pdf-container { 
                font-family: 'Helvetica', 'Arial', sans-serif; 
                color: #111; 
                padding: 40px; 
                background: white; 
                width: 794px; /* Standard A4 width (96 DPI) */
                box-sizing: border-box;
                margin: 0 auto;
            }
            .header-img { width: 100%; max-width: 600px; display: block; margin-bottom: 20px; }
            .subtitle-text { border-bottom: 2px solid #74f9d4; padding-bottom: 15px; margin-bottom: 20px; font-weight: 600; color: #444; font-size: 16px; }
            
            .fit-score-box { 
                background: #f4fdfa; 
                padding: 25px; 
                border-radius: 12px; 
                border-left: 6px solid #74f9d4; 
                margin-bottom: 25px; 
                page-break-inside: avoid; 
                break-inside: avoid;
            }
            
            .info-block { 
                margin-bottom: 15px; 
                page-break-inside: avoid; 
                break-inside: avoid;
            }
            .block-title { color: #ff585d; font-weight: 600; font-size: 14px; display: block; margin-bottom: 4px; }
            .block-text { font-size: 12px; color: #444; margin: 0; line-height: 1.5; }
            
            .graph-img { 
                width: 100%; 
                max-width: 550px; 
                display: block; 
                margin: 20px auto; 
                page-break-inside: avoid; 
                break-inside: avoid;
            }
            
            .future-plan-box { 
                background: #f9f9f9; 
                padding: 25px; 
                border-radius: 14px; 
                margin-top: 20px; 
                page-break-inside: avoid; 
                break-inside: avoid;
            }
            
            .cta-btn { 
                background: #ff585d; color: white !important; padding: 10px 20px; 
                text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 12px; 
                display: inline-block; margin-top: 15px; 
            }
        </style>

        <div class="pdf-container">
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/Framewhite.png" class="header-img" crossorigin="anonymous">
            
            <div class="subtitle-text">Automation in your IT Operating System - Powered by HR Data</div>
            
            <div style="font-size: 13px; color: #333; margin-bottom: 20px; line-height: 1.5;">
                Factorial IT is engineered to bridge the operational gap between People and Technology. 
                By integrating directly with your employee data as a single source of truth, we automate the technology lifecycle.
            </div>

            <div class="fit-score-box">
                <h2 style="margin:0; font-size: 20px;">Fit Score: ${score.toFixed(1)}%</h2>
                <p style="margin-top:10px; font-size: 14px; line-height: 1.4;">${getStrategicSummary(score)}</p>
            </div>

            <h3 style="color: #ff585d; text-transform: uppercase; font-size: 14px; margin-bottom: 15px;">Business Case & Justification</h3>
    `;

    // --- DYNAMIC BLOCKS ---
    if (data.devices > 50) {
        html += `<div class="info-block"><span class="block-title">• Scalable Infrastructure</span><p class="block-text">You currently manage ${data.devices} devices. As a fleet grows, overhead increases linearly. Factorial IT transforms this into scalable workflows.</p></div>`;
    }

    if (activeCompliance) {
        html += `<div class="info-block"><span class="block-title">• Regulatory Frameworks</span><p class="block-text">Since you are navigating ${activeCompliance}, compliance requires auditable proof of control. Factorial IT acts as an Automated Evidence Locker.</p></div>`;
    }

    if (data.it_team > 0 && data.it_team <= 3) {
        html += `<div class="info-block"><span class="block-title">• Personnel Constraints</span><p class="block-text">With an IT team size of ${data.it_team}, ticket fatigue is a risk. We automate low-level tasks to free up capacity.</p></div>`;
    }

    if (data.ob_year > 12) {
        html += `<div class="info-block"><span class="block-title">• High Onboarding Velocity</span><p class="block-text">With ${data.ob_year} new hires per year, manual setup creates strain. Our HR-to-IT Sync ensures zero-touch provisioning.</p></div>`;
    }

    if (data.manualTicketing) {
        html += `<div class="info-block"><span class="block-title">• Administrative Efficiency</span><p class="block-text">Manual ticketing leads to lost accountability. Our self-service workflows bring structure without complexity.</p></div>`;
    }

    if (data.isRemote) {
        html += `<div class="info-block"><span class="block-title">• Remote & Hybrid Security</span><p class="block-text">Operating a remote environment expands your security perimeter. We unify control regardless of physical location.</p></div>`;
    }

    if (activeHW && data.mixedHW) {
        html += `<div class="info-block"><span class="block-title">• Hardware Complexity</span><p class="block-text">Managing a diverse mix of ${activeHW} manually creates data silos. We centralize assets into a single pane of glass.</p></div>`;
    }

    if (activeOS && data.mixedOS) {
        html += `<div class="info-block"><span class="block-title">• Cross-OS Ecosystem</span><p class="block-text">Supporting ${activeOS} often requires specialized tools. Factorial IT consolidates this into one MDM solution.</p></div>`;
    }

    html += `
            <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" class="graph-img" crossorigin="anonymous">

            <div class="future-plan-box">
                <h3 style="color:#ff585d; margin-top:0;">Plan for your future</h3>
                <p style="font-size:13px; line-height: 1.5;">You told us you manage ${getInputRecap(data)}. Learn how to automate your operations with Factorial IT.</p>
                <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" class="cta-btn" target="_blank">Book a meeting</a>
            </div>
            
            <div style="text-align: right; color: #ff585d; font-size: 10px; margin-top: 30px; font-weight: bold;">CONFIDENTIAL STRATEGIC AUDIT 2026</div>
        </div>
    `;

    element.innerHTML = html;

    // --- OVERLAY FIX ---
    // Make visible on top of everything. (z-index 10000)
    element.style.position = 'fixed';
    element.style.left = '0';
    element.style.top = '0';
    element.style.zIndex = '10000'; 
    element.style.background = 'white'; 
    document.body.appendChild(element);

    // --- WAIT FOR IMAGES ---
    // Ensures images are loaded before generating PDF
    const images = element.querySelectorAll('img');
    const promises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve; 
        });
    });

    Promise.all(promises).then(() => {
        const opt = {
            margin: 0, 
            filename: 'Factorial_IT_Assessment.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true, 
                scrollY: 0,
                // Force window dimensions to capture full A4 width
                windowWidth: 1200, 
                windowHeight: document.documentElement.scrollHeight 
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save().then(() => {
            // Remove the temporary element after saving
            if (document.body.contains(element)) {
                document.body.removeChild(element);
            }
        }, (err) => {
            console.error("PDF Generation Error:", err);
            if (document.body.contains(element)) {
                document.body.removeChild(element);
            }
        });
    });
}
