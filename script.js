function processAssessment() {
    let score = 0;
    const n = parseInt(document.getElementById('devices').value) || 0;
    const it = parseInt(document.getElementById('it_team').value) || 0;
    const ob = parseInt(document.getElementById('ob_year').value) || 0;

    // I. Infrastructure Penalty: round to nearest 10, multiply units by 2
    score += Math.round(n / 10) * 2;

    // II. Compliance Points
    const complianceIds = ['nis2', 'iso', 'soc2', 'hipaa', 'remote', 'ticketing'];
    complianceIds.forEach(id => {
        score += parseInt(document.getElementById(id).value);
    });

    // III. Human Resources
    if (it > 0 && it <= 2) score += 2; // Personnel Constraints
    if (ob > 12) score += 2; // Onboarding Velocity

    // IV. Heterogeneity Multiplicity
    if (document.querySelectorAll('.hw:checked').length > 1) score += 2;
    if (document.querySelectorAll('.os:checked').length > 1) score += 2;

    // Update PDF values
    document.getElementById('finalScore').innerText = score;
    document.getElementById('recapArea').innerHTML = `
        <p>Devices: ${n}</p><p>IT Team: ${it}</p>
        <p>Onboarding: ${ob}</p><p>Remote: ${document.getElementById('remote').selectedOptions[0].text}</p>
    `;

    // PDF Export Logic
    const element = document.getElementById('pdf-template');
    element.style.display = 'block';
    
    html2pdf().from(element).set({
        margin: 0.5,
        filename: 'FactorialIT_Strategic_Audit.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).save().then(() => {
        element.style.display = 'none';
    });
}
