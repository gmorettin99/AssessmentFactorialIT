function generateStrategicPDF(score, data) {
    const element = document.createElement('div');
    element.style.width = '750px';
    element.style.background = 'white';
    element.style.fontFamily = "'Inter', sans-serif";
    element.style.color = '#111';

    let html = `
        <div style="text-align:center; padding: 40px 40px 20px 40px;">
            <h1 style="font-size: 36px; font-weight: 800; line-height: 1.1; margin-bottom: 10px;">
                IT operations in <span style="color:#ff585d;">autopilot</span> &<br>
                enterprise-grade <span style="color:#ff585d;">security</span><br>
                connected to <span style="color:#ff585d;">HR data</span>
            </h1>
        </div>

        <div style="padding: 0 50px 40px 50px;">
            <p style="font-weight: 700; color: #444; border-bottom: 1px solid #74f9d4; padding-bottom: 10px; margin-bottom: 20px;">
                Automation in your IT Operating System – Powered by HR Data
            </p>

            <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 30px;">
                Factorial IT is engineered to bridge the operational gap between People and Technology. By integrating directly with your employee data as a single source of truth, we automate the technology lifecycle of hardware and software, from procurement to offboarding.
            </p>

            <div style="background: #f4fdfa; padding: 30px; border-radius: 12px; border-left: 8px solid #74f9d4; margin-bottom: 35px;">
                <h2 style="margin: 0 0 15px 0; font-size: 24px; font-weight: 800;"> ${score.toFixed(1)}%</h2>
                <p style="margin: 0; font-size: 15px; line-height: 1.5; font-weight: 500; color: #333;">
                    ${getStrategicSummary(score)}
                </p>
            </div>

            <h3 style="color: #ff585d; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 800; margin-bottom: 20px;">
                Business Case & Justification
            </h3>
    `;

    // Tailored Justification Blocks
    if (data.n > 0) {
        html += addBlock("Scalable Infrastructure", `Managing ${data.n} devices for ${data.m} employees creates a scaling ratio of ${(data.n/data.m).toFixed(1)}. Factorial IT automates this lifecycle to prevent administrative burnout.`);
    }
    if (data.activeCompliance.length > 0) {
        html += addBlock("Regulatory Frameworks", `Navigating ${data.activeCompliance.join(', ')} requires auditable proof of control. We act as your automated evidence locker.`);
    }

    // Pillars Image
    html += `
            <div style="margin: 40px 0; text-align: center; page-break-inside: avoid;">
                <img src="https://gmorettin99.github.io/AssessmentFactorialIT/pillars.jpg" style="width: 100%; max-width: 600px;" crossorigin="anonymous">
            </div>

            <div style="background: #fafafa; padding: 25px; border-radius: 12px; border: 1px solid #eee; margin-top: 20px; page-break-inside: avoid;">
                <h4 style="color: #ff585d; margin-top: 0; font-size: 16px; font-weight: 800;">Plan for your future</h4>
                <p style="font-size: 13px; line-height: 1.6; color: #333;">
                    <strong>Scenario Recap:</strong> You currently manage ${data.n} devices across ${data.selectedOS.join('/')} environments. This organizational profile demonstrates a ${score.toFixed(0)}% requirement for automated lifecycle management.
                    <br><br>
                    <strong>The Solution:</strong> Factorial IT decouples growth from manual workload. By automating the ${data.riskFactorCount} specific risk factors identified in this audit, we ensure IT operations remain on autopilot.
                </p>
                <div style="margin-top: 15px;">
                    <a href="https://meetings-eu1.hubspot.com/giorgia-morettin/itfactorial" style="display: inline-block; background: #ff585d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 800; font-size: 14px;">
                        Book Strategic Consultation
                    </a>
                </div>
            </div>
        </div>
    `;

    element.innerHTML = html;
    const opt = {
        margin: 0,
        filename: 'Factorial_IT_Assessment.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

function addBlock(title, text) {
    return `<div style="margin-bottom: 20px; page-break-inside: avoid;">
        <strong style="display: block; font-size: 14px; color: #ff585d; margin-bottom: 5px;">• ${title}</strong>
        <p style="font-size: 12px; color: #444; margin: 0; line-height: 1.5;">${text}</p>
    </div>`;
}

function getStrategicSummary(score) {
    if (score > 60) return "Strategic Assessment: High Fit. Your organization exhibits a 'perfect storm' of operational friction. Continuing with manual processes presents a significant risk of burnout and compliance failure.";
    if (score >= 30) return "Strategic Assessment: Moderate Fit. Manual processes are becoming a bottleneck. Implementing automation now prevents technical debt.";
    return "Strategic Assessment: Early Maturity. Foundations established now prevent chaotic scale-up friction.";
}
