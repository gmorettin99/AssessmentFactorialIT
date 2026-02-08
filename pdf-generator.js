/**
 * FACTORIAL IT: MODULAR PDF GENERATOR
 * Logic: Checks assessment inputs and pulls specific KB blocks.
 */

function generatePDF(score, inputs) {
    const { element } = preparePDFTemplate(score, inputs);

    const opt = {
        margin:       [10, 10],
        filename:     `Factorial_IT_Assessment_${new Date().getFullYear()}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate the PDF
    html2pdf().set(opt).from(element).save();
}

function preparePDFTemplate(score, inputs) {
    // Create a temporary container for the PDF content
    const container = document.createElement('div');
    container.className = 'pdf-report-wrapper';

    // 1. DEFAULT: Intro & Platform Overview
    let htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
            <h1 style="color: #ff585d;">Factorial IT: Strategic Audit</h1>
            <p style="font-size: 14px; font-weight: bold; border-bottom: 2px solid #74f9d4; padding-bottom: 10px;">
                THE OPERATING SYSTEM FOR IT, POWERED BY HR DATA
            </p>
            
            <section class="intro-block" style="margin-top: 20px;">
                <p>Factorial IT is the first platform engineered to bridge the operational gap between People (HR) and Technology (IT). Unlike traditional legacy tools that operate in silos, Factorial IT integrates directly with your employee source of truth.</p>
                <p><strong>Core Pillar: Unified Device Management (MDM)</strong> - We replace fragmented processes with a 'Three-Tier Device Control' framework: On-Demand Hardware, Cross-OS MDM, and Zero-Touch Deployment.</p>
            </section>

            <h2 style="color: #ff585d; font-size: 18px; margin-top: 30px;">Strategic Fit: ${score.toFixed(1)} Points</h2>
            <div style="background: #f4fdfa; padding: 15px; border-radius: 8px; margin-bottom: 30px;">
                ${getRecommendation(score)}
            </div>

            <h3 style="border-left: 4px solid #ff585d; padding-left: 10px;">Critical Business Cases Identified:</h3>
    `;

    // 2. CONDITIONAL: Add justifying blocks based on triggers
    
    // Category I: Infrastructure
    if (inputs.devices > 50) {
        htmlContent += addKBBlock("High Volume Managed Assets", 
            "As a fleet grows, manual setups create a 'linear drag'. Factorial IT transforms linear work into scalable workflows via Mass Policies, keeping IT headcount lean.");
    }

    // Category II: Compliance
    if (inputs.nis2 || inputs.iso || inputs.soc2) {
        htmlContent += addKBBlock("Active Regulatory Requirements", 
            "Factorial IT serves as an Automated Evidence Locker. It monitors fleet health and logs every access change, turning 'Audit Panic' into a simple export.");
    }
    if (inputs.hipaa) {
        htmlContent += addKBBlock("Healthcare Compliance (HIPAA)", 
            "A lost device with PHI is a reportable breach. Our 'Remote Wipe & Lock' ensures data never falls into the wrong hands, providing immediate liability reduction.");
    }

    // Category III: Operations
    if (inputs.remote) {
        htmlContent += addKBBlock("Remote/Hybrid Infrastructure", 
            "We provide Global Logistics as a Service. You manage the digital asset; we handle the procurement, storage, and shipping to over 60 countries.");
    }
    if (inputs.it_team <= 2) {
        htmlContent += addKBBlock("Personnel Constraints", 
            "Factorial IT acts as a 'Third Team Member' by automating low-level ticket noise (resetting passwords, provisioning), freeing up ~30% of team capacity.");
    }
    if (inputs.ob_year > 12) {
        htmlContent += addKBBlock("High Onboarding Velocity", 
            "Our HR-to-IT Sync ensures that when a candidate is hired, the laptop is ordered and SaaS accounts are pre-provisioned automatically based on their role.");
    }

    // Category IV: Heterogeneity
    if (inputs.mixedOS) {
        htmlContent += addKBBlock("Mixed OS Ecosystem", 
            "Consolidate 'Split Stack' complexity. Manage Windows, macOS, Linux, iOS, and Android from one unified 'Single Pane of Glass' dashboard.");
    }

    // Category V: Automation
    if (inputs.ticketing === "2") { // "No (Manual)" selected
        htmlContent += addKBBlock("Administrative Deficit", 
            "Move from reactive firefighting to proactive management. Our structured self-service workflows manage requests before they become a distraction.");
    }

    htmlContent += `</div>`; // Close wrapper
    container.innerHTML = htmlContent;

    return { element: container };
}

// Helper to format KB blocks in the PDF
function addKBBlock(title, body) {
    return `
        <div style="margin-bottom: 20px; page-break-inside: avoid;">
            <h4 style="margin-bottom: 5px; color: #333;">• ${title}</h4>
            <p style="font-size: 13px; color: #555; line-height: 1.4; margin-top: 0;">${body}</p>
        </div>
    `;
}

// Helper for final Recommendation
function getRecommendation(score) {
    if (score > 25) {
        return "<strong>High Strategic Fit:</strong> Your organization exhibits a 'perfect storm' for operational friction. Continuing with manual processes presents a significant risk of burnout and compliance failure.";
    } else if (score >= 15) {
        return "<strong>Moderate Strategic Fit:</strong> Manual processes are becoming a bottleneck. Implementing automation now will 'future-proof' your operations before technical debt accumulates.";
    } else {
        return "<strong>Early Maturity Phase:</strong> While full-scale automation isn't critical today, establishing a foundational system now prevents the chaos typical of crossing the 50-employee threshold.";
    }
}
