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

    // 2. MODULAR BLOCKS (Section 2 of KB: Justification Logic)
    
    if (data.devices > 50) {
        html += addBlock("Scalable Infrastructure", "As your fleet grows past 50 devices, manual management creates a 'linear drag'. Factorial IT transforms linear work into scalable workflows, allowing you to push updates to your entire fleet as easily as to a single laptop.");
    }

    if (data.compliance.iso || data.compliance.soc2 || data.compliance.nis2) {
        html += addBlock("Regulatory Frameworks (ISO/SOC2/NIS2)", "Compliance requires auditable proof of control. Factorial IT acts as an Automated Evidence Locker, continuously logging encryption status and access changes for instant, headache-free audit exports.");
    }

    if (data.compliance.hipaa) {
        html += addBlock("Healthcare Compliance (HIPAA)", "A lost laptop containing PHI is a major reportable breach. Our Remote Wipe & Lock capability ensures that data is neutralized the moment a device is reported missing, drastically reducing liability.");
    }

    if (data.isRemote) {
        html += addBlock("Global Logistics & Remote Ops", "Managing hardware for distributed teams is a logistical bottleneck. We handle procurement, storage, and customs for 60+ countries, delivering ready-to-use devices in under 5 business days.");
    }

    if (data.it_team > 0 && data.it_team <= 2) {
        html += addBlock("Capacity Liberation", "Small IT teams are often buried under 'ticket fatigue'. By automating low-level provisioning tasks, Factorial IT effectively acts as a 'Third Team Member', freeing up ~30% of your weekly capacity.");
    }

    if (data.ob_year > 12) {
        html += addBlock("High Onboarding Velocity", "Rapid growth creates repetitive strain and human error. Our HR-to-IT Sync ensures that when a candidate is hired in HR, their laptop is ordered and SaaS accounts are pre-provisioned automatically based on role.");
    }

    if (data.mixedOS) {
        html += addBlock("Unified Security Posture (Mixed OS)", "Mixed ecosystems fracture visibility. Factorial IT provides a Single Pane of Glass to enforce consistent security policies (passwords, encryption, updates) across macOS, Windows, and Linux simultaneously.");
    }

    if (data.manualTicketing) {
        html += addBlock("Administrative Efficiency", "Without a structured system, requests are lost in Slack or Email. Our self-service workflows bring structure and accountability without the complexity of traditional enterprise service desks.");
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
