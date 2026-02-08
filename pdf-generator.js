/**
 * FACTORIAL IT: STRATEGIC PDF GENERATOR
 * Powered by Modular Knowledge Base Logic
 */

function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    element.style.padding = '40px';
    element.style.fontFamily = 'Helvetica, Arial, sans-serif';
    element.style.color = '#111';

    // 1. DEFAULT HEADER & INTRO (Section 1 of KB)
    let html = `
        <div style="text-align: right; color: #ff585d; font-weight: bold; font-size: 10px; margin-bottom: 20px;">
            CONFIDENTIAL STRATEGIC AUDIT 2026
        </div>
        
        <h1 style="color: #ff585d; margin-bottom: 5px; font-size: 28px;">Factorial IT Strategic Audit</h1>
        <p style="font-weight: bold; border-bottom: 2px solid #74f9d4; padding-bottom: 15px; margin-top: 0; color: #444;">
            The Operating System for IT, Powered by HR Data
        </p>
        
        <div style="margin: 25px 0; line-height: 1.6; font-size: 13px; color: #333;">
            <p>Factorial IT is engineered to bridge the operational gap between People (HR) and Technology (IT). 
            By integrating directly with your employee source of truth, we automate the technology lifecycle 
            from procurement and onboarding to security and offboarding.</p>
        </div>

        <div style="background: #f4fdfa; padding: 25px; border-radius: 12px; margin-bottom: 35px; border-left: 6px solid #74f9d4;">
            <h2 style="margin-top:0; color: #111; font-size: 20px;">Fit Score: ${score.toFixed(1)}</h2>
            <p style="font-size: 14px; margin-bottom:0; line-height: 1.5;">${getStrategicSummary(score)}</p>
        </div>

        <h3 style="color: #ff585d; text-transform: uppercase; font-size: 14px; letter-spacing: 1px; margin-bottom: 20px;">Business Case & Justification</h3>
    `;


    // --- MODULAR BLOCKS WITH EXACT DATA INJECTION ---

    // Category I: Infrastructure
    if (data.devices > 50) {
        html += addBlock("Scalable Infrastructure", 
            `You currently manage **${data.devices} devices**.  As a fleet grows, the administrative overhead typically increases linearly.  Managing a fleet of this size via spreadsheets creates a chaotic support burden.  Factorial IT transforms this linear work into scalable workflows, allowing you to push security updates to all **${data.devices}** assets as easily as to one. [cite: 12]`);
    }

    // Category II: Compliance
    if (data.compliance.iso || data.compliance.soc2 || data.compliance.nis2) {
        html += addBlock("Regulatory Frameworks", 
            `Since you are currently navigating regulatory frameworks, the 'Evidence Trap' is a significant risk. [cite: 13, 14] Instead of manually collecting screenshots, Factorial IT serves as an Automated Evidence Locker, continuously logging the security state of your fleet for instant audit exports. [cite: 14]`);
    }

    // Category III: Operations
    if (data.it_team > 0 && data.it_team <= 3) { // Updated to match your screenshot threshold
        html += addBlock("Personnel Constraints", 
            `With an IT team size of **${data.it_team}**, 'Ticket Fatigue' is inevitable. [cite: 7, 8] By automating low-level tasks like laptop provisioning, Factorial IT effectively acts as your 'Third Team Member,' freeing up roughly 30% of your current capacity for high-value projects.`);
    }

    if (data.ob_year > 12) {
        html += addBlock("High Onboarding Velocity", 
            `With **${data.ob_year} new hires per year**, manual setup is a repetitive strain. [cite: 15, 16] Our HR-to-IT Sync ensures that when a candidate is hired in HR, their laptop is ordered and accounts are created automatically.  This standardizes the 'Day 1' experience for all **${data.ob_year}** annual joiners. `);
    }

    // Category V: Automation
    if (data.manualTicketing) {
        html += addBlock("Administrative Efficiency", 
            `Currently handling IT requests **manually** leads to 'Shadow Work' and lost accountability. [cite: 17, 18] We bring structure via self-service workflows, ensuring every request is tracked and resolved without the noise of Slack DMs or emails. [cite: 19]`);
    }

    
    // 3. INPUT RECAP (Section 3: Audit Data)
    html += `
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 11px; color: #888;">
            <p style="margin-bottom: 10px; font-weight: bold; color: #444;">AUDIT INPUT RECAP:</p>
            Managed Devices: ${data.devices} | IT Team: ${data.it_team} | Annual Onboarding: ${data.ob_year} | Remote: ${data.remoteText}
        </div>
    `;

    element.innerHTML = html;

    // PDF Export Settings
    const opt = {
        margin: 15,
        filename: `Factorial_IT_Report_${new Date().toISOString().slice(0,10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: false, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Execute save
    html2pdf().set(opt).from(element).save();
}

/**
 * HELPER FUNCTIONS
 */
function addBlock(title, text) {
    return `
        <div style="margin-bottom: 22px; page-break-inside: avoid;">
            <strong style="display: block; font-size: 14px; color: #111; margin-bottom: 5px;">• ${title}</strong>
            <p style="font-size: 12px; color: #555; margin-top: 0; line-height: 1.5;">${text}</p>
        </div>
    `;
}

function getStrategicSummary(score) {
    if (score > 25) return "<strong>Strategic Assessment: High Fit.</strong> Your organization exhibits a 'perfect storm' of operational friction. Continuing with manual processes presents a significant risk of burnout and compliance failure. Immediate automation is recommended.";
    if (score >= 15) return "<strong>Strategic Assessment: Moderate Fit.</strong> While current operations are stable, manual processes are becoming a bottleneck. Implementing automation now will 'future-proof' your IT operations before technical debt accumulates.";
    return "<strong>Strategic Assessment: Early Maturity.</strong> While immediate full-scale automation may not be critical today, implementing a foundational system for Asset Management now will prevent the chaotic 'inflection point' as you scale.";
}
