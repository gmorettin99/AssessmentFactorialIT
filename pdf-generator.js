/**
 * FACTORIAL IT: STRATEGIC PDF GENERATOR
 * FINAL CORPORATE VERSION: NO LOGO, 10PX MARGIN, SAVINGS HIGHLIGHT, CALENDAR BUTTON
 */

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    element.style.width = '750px';
    element.style.height = 'auto'; 
    element.style.background = '#ffffff';
    element.style.fontFamily = "'Inter', sans-serif";
    element.style.color = '#111';

    let html = `
        <div style="text-align:center; padding: 10px 40px 10px 40px; margin: 0;">
            <h1 style="font-size: 38px; font-weight: 800; line-height: 1.1; margin: 0; color: #111;">
                IT operations in <span style="color:#ff585d;">autopilot</span> &<br>
                enterprise-grade <span style="color:#ff585d;">security</span><br>
                connected to <span style="color:#ff585d;">HR data</span>
            </h1>
        </div>

        <div style="padding: 20px 50px 40px 50px;">
            <p style="font-weight: 700; color: #444; border-bottom: 2px solid #74f9d4; padding-bottom: 12px; margin-bottom: 25px; font-size: 16px;">
                Automation in your IT Operating System – Powered by HR Data
            </p>

            <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 30px;">
                Factorial IT is engineered to bridge the operational gap between People and Technology. By integrating directly with your employee data as a single source of truth, we automate the technology lifecycle.
            </p>

            <div style="background: #f4fdfa; padding: 30px; border-radius: 12px; border-left: 8px solid #74f9d4; margin-bottom: 40px; page-break-inside: avoid;">
                <h2 style="margin: 0 0 10px 0; font-size: 26px; font-weight: 800;">${score.toFixed(1)}%</h2>
                <p style="margin: 0; font-size: 15px; line-height: 1.5; font-weight: 500; color: #333;">
                    ${getStrategicSummary(score)}
                </p>
            </div>
    `;

    // --- REBRANDED CORPORATE TECH PILLARS ---
    if (data.n > 0) {
        html += addBlock("Asset Density & Scalability", 
            `Your infrastructure supports ${data.n} endpoints across ${data.m} seats. Factorial IT decouples asset growth from administrative headcount, preventing linear scaling of operational debt.`);
    }

    if (data.activeCompliance.length > 0) {
        html += addBlock("Automated Compliance Evidence", 
            `With ${data.activeCompliance.join(' and ')} requirements, audit readiness is critical. Factorial IT serves as a real-time evidence locker, automating logs required for regulatory framework adherence.`);
    }

    if (data.it_team <= 2 || data.ob_year > 12) {
        html += addBlock("Resource Optimization", 
            `Operating with ${data.it_team <= 2 ? 'minimal IT personnel' : ''} during high-velocity growth cycles creates high risk. We act as an autonomous team member, absorbing repetitive tasks.`);
    }

    if (data.selectedHW.length > 1 || data.selectedOS.length > 1) {
        html += addBlock("Heterogeneous Asset Management", 
            `A fleet consisting of ${data.selectedHW.join('/')} running ${data.selectedOS.join('/')} manually creates data silos. We unify this heterogeneity into a single pane of glass.`);
    }

    if (data.manualTicketing) {
        html += addBlock("Operational Excellence", 
            `Manual ticketing workflows represent a significant administrative deficit. Transitioning to ticket-based automation restores full accountability to your operations.`);
    }

    html += `
            <div style="page-break-before: always; margin: 40px 0; text-align: center; page-break-inside: avoid; clear: both; display: block;">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" 
                     style="width: 100%; max-width: 650px; display: inline-block;" 
                     crossorigin="anonymous">
            </div>

            <div style="background: #fafafa; padding: 30px; border-radius: 14px; border: 1px solid #eee; margin-top: 20px; page-break-inside: avoid;">
                <h4 style="color: #ff585d; margin-top: 0; font-size: 18px; font-weight: 800;">Plan for your future</h4>
                <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                    Your organizational profile currently maintains ${data.n} assets. This organizational profile demonstrates a <strong>${score.toFixed(0)}% requirement</strong> for automated lifecycle management.
                    <br><br>
                    <strong>Strategic Savings Spotlight:</strong> Based on your architecture, the highest impact is in <strong>${data.bestOutcome.label}</strong>, projecting a reclamation of <strong>${data.bestOutcome.hours.toFixed(0)} technical hours</strong> annually through ${data.bestOutcome.desc}.
                </p>
                <div style="text-align: left;">
                    <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" style="display: inline-block; background: #ff585d; color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 800; font-size: 15px;">
                        Book Strategic Consultation
                    </a>
                </div>
            </div>

            <div style="text-align: center; margin-top: 30px; page-break-inside: avoid;">
                <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" style="text-decoration: none;">
                    <div style="display: inline-flex; align-items: center; background: #ffffff; border: 2px solid #ff585d; border-radius: 50%; width: 60px; height: 60px; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#ff585d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 2V6" stroke="#ff585d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 2V6" stroke="#ff585d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 10H21" stroke="#ff585d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p style="color: #ff585d; font-size: 12px; font-weight: 700; margin-top: 8px;">SCHEDULE MEETING</p>
                </a>
            </div>
            
            <div style="margin-top: 40px; text-align: right; color: #ff585d; font-weight: 600; font-size: 10px; letter-spacing: 1px;">
                CONFIDENTIAL STRATEGIC AUDIT 2026
            </div>
        </div>
    `;

    element.innerHTML = html;

    const opt = {
        margin: 0, 
        filename: 'Factorial_IT_Audit_Report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            letterRendering: true,
            scrollX: 0,
            scrollY: 0,
            backgroundColor: '#ffffff'
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
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
    if (score > 60) return "Strategic Assessment: High Fit. Your organization exhibits significant operational friction. Manual processes present a critical risk to scalability.";
    if (score >= 30) return "Strategic Assessment: Moderate Fit. Manual processes are becoming a bottleneck. Implementing automation now prevents technical debt.";
    return "Strategic Assessment: Early Maturity. Foundations established now prevent chaotic scale-up friction.";
}
