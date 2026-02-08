function processAssessment() {
    // 1. Inputs
    const n = parseInt(document.getElementById('devices').value) || 0; 
    const m = parseInt(document.getElementById('employees').value) || 1; 
    const it_team = parseInt(document.getElementById('it_team').value) || 0;
    const ob_year = parseInt(document.getElementById('ob_year').value) || 0;

    // 2. Quantitative Component (P_infra)
    // Formula: (50 * n) / m [cite: 26]
    let p_infra = (50 * n) / m;
    if (p_infra > 100) p_infra = 100; 

    // 3. Qualitative Component (P_qual)
    // Capture specific strings for the PDF
    const selectedHW = Array.from(document.querySelectorAll('.hw:checked')).map(el => el.parentElement.textContent.trim());
    const selectedOS = Array.from(document.querySelectorAll('.os:checked')).map(el => el.parentElement.textContent.trim());
    
    const complianceMap = {
        nis2: document.getElementById('nis2').value === "1",
        iso: document.getElementById('iso').value === "1",
        hipaa: document.getElementById('hipaa').value === "1",
        soc2: document.getElementById('soc2').value === "1"
    };
    const activeCompliance = Object.keys(complianceMap).filter(k => complianceMap[k]).map(k => k.toUpperCase().replace('ISO', 'ISO 27001'));

    let riskFactorCount = 0;
    if (activeCompliance.length > 0) riskFactorCount++; // [cite: 14]
    if (document.getElementById('remote').value === "2") riskFactorCount++; // [cite: 14]
    if (it_team <= 2 || ob_year > 12) riskFactorCount++; // [cite: 15]
    if (selectedHW.length > 1 || selectedOS.length > 1) riskFactorCount++; // [cite: 15]
    if (document.getElementById('ticketing').value === "2") riskFactorCount++; // [cite: 16]

    // P_qual = 20 points per risk factor (5 factors max) [cite: 18, 44]
    let p_qual = riskFactorCount * 20;

    // 4. Final Integrated Score (phi) [cite: 33]
    const finalScore = (p_qual + p_infra) / 2;

    const assessmentData = {
        n, m, it_team, ob_year,
        activeCompliance,
        selectedHW,
        selectedOS,
        isRemote: document.getElementById('remote').value === "2",
        manualTicketing: document.getElementById('ticketing').value === "2"
    };

    generateStrategicPDF(finalScore, assessmentData);
}
