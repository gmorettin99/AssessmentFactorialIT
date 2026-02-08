/**
 * FACTORIAL IT: STRATEGIC PDF GENERATOR
 * FINAL CORPORATE VERSION - NO LOGO, NO SECTION TITLES, 10PX TOP MARGIN
 */

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    // Ensure height auto for multi-page flow
    element.style.width = '750px';
    element.style.height = 'auto'; 
    element.style.background = '#ffffff';
    element.style.fontFamily = "'Inter', sans-serif";
    element.style.color = '#111';

    let html = `
        <div style="text-align:center; padding: 10px 40px 10px 40px; margin: 0;">
            <h1 style="font-size: 38px; font-weight: 800; line-height: 1.1; margin: 0 0 15px 0; color: #111;">
                IT operations in <span style="color:#ff585d;">autopilot</span> &<br>
                enterprise-grade <span style="color:#ff585d;">security</span><br>
                connected to <span style="color:#ff585d;">HR data</span>
            </h1>
        </div>

        <div style="padding: 0 50px 40px 50px;">
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

    // --- CORPORATE TECH REBRANDED PILLARS ---
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
            `Operating with ${data.it_team <= 2 ? 'minimal IT personnel' : ''} during high-velocity onboarding cycles creates high risk. We act as an autonomous team member, absorbing repetitive tasks.`);
    }

    if (data.selectedHW.length > 1 || data.selectedOS.length > 1) {
        html += addBlock("Heterogeneous Asset Management", 
            `A fleet consisting of ${data.selectedHW.join('/')} running ${data.selectedOS.join('/')} environments manually creates data silos. We unify this heterogeneity into a single pane of glass.`);
    }

    if (data.isRemote) {
        html += addBlock("Perimeter-Less Security", 
            `Decentralized hybrid operations expand your threat surface. Factorial IT maintains zero-trust device posture regardless of physical location.`);
    }

    if (data.manualTicketing) {
        html += addBlock("Operational Excellence", 
            `Manual ticketing workflows represent a significant administrative deficit. Transitioning to HR-triggered automation restores full accountability to your operations.`);
    }

    // Pillars Image: Forced page-break-before to prevent "Black Bar" artifact
    html += `
            <div style="page-break-before: always; margin: 40px 0; text-align: center; page-break-inside: avoid; clear: both; display: block;">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" 
                     style="width: 100%; max-width: 650px; display: inline-block;" 
                     crossorigin="anonymous">
            </div>

            <div style="background: #fafafa; padding: 30px; border-radius: 14px; border: 1px solid #eee; margin-top: 20px; page-break-inside: avoid;">
                <h4 style="color: #ff585d; margin-top: 0; font-size: 18px; font-weight: 800;">Plan for your future</h4>
                <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 20px;">
                    <strong>Scenario Recap:</strong> Your organizational profile currently maintains ${data.n} assets. This indicates a <strong>${score.toFixed(0)}% requirement</strong> for automated IT operations.
                    <br><br>
                    <strong>Strategic ROI:</strong> Based on your current growth velocity, Factorial IT is projected to reclaim <strong>${data.projectedHoursSaved} hours</strong> of technical capacity annually by automating repetitive lifecycle events.
                </p>
                <div style="text-align: left;">
                    <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" style="display: inline-block; background: #ff585d; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 800; font-size: 15px;">
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
        margin: 0, 
        filename: 'Factorial_IT_Audit_Report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, // Scale 2 prevents memory artifacts and black bars on multi-page exports
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
