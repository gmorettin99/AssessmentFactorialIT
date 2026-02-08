function processAssessment() {
    // 1. Raw Data Collection
    const n = parseInt(document.getElementById('devices').value) || 0; 
    const m = parseInt(document.getElementById('employees').value) || 1; // Avoid division by zero
    const it_team = parseInt(document.getElementById('it_team').value) || 0;
    const ob_year = parseInt(document.getElementById('ob_year').value) || 0;

    // 2. Infrastructure Normalization (P_infra) [cite: 26]
    // Formula: (50 * devices) / employees
    let p_infra = (50 * n) / m;
    if (p_infra > 100) p_infra = 100; // Cap at 100% saturation [cite: 24]

    // 3. Qualitative Normalization (P_qual) [cite: 13, 17]
    let x = 0; // The sum of binary indicators (max 5)

    // Factor 1: Certification Frameworks [cite: 14]
    if (document.getElementById('nis2').value === "1" || 
        document.getElementById('iso').value === "1" || 
        document.getElementById('hipaa').value === "1" || 
        document.getElementById('soc2').value === "1") x++;

    // Factor 2: Personnel Ratio and Scale (IT <= 2 or high onboarding) [cite: 15]
    if (it_team <= 2 || ob_year > 12) x++;

    // Factor 3: Asset Heterogeneity (Mixed HW or Mixed OS) [cite: 15]
    const mixedHW = document.querySelectorAll('.hw:checked').length > 1;
    const mixedOS = document.querySelectorAll('.os:checked').length > 1;
    if (mixedHW || mixedOS) x++;

    // Factor 4: Operational Perimeter (Remote/Hybrid) [cite: 14]
    if (document.getElementById('remote').value === "2") x++;

    // Factor 5: Administrative Deficit (Manual Ticketing) [cite: 16]
    if (document.getElementById('ticketing').value === "2") x++;

    // Rescale linearly: P_qual = 20 * x (Based on the 0-100 scale requirement) [cite: 11, 20]
    let p_qual = x * 20;

    // 4. Integrated Final Score (phi) [cite: 33]
    const finalScore = (p_qual + p_infra) / 2;

    // Package data for PDF
    const assessmentData = {
        devices: n,
        employees: m,
        it_team,
        ob_year,
        compliance: {
            nis2: document.getElementById('nis2').value === "1",
            iso: document.getElementById('iso').value === "1",
            soc2: document.getElementById('soc2').value === "1",
            hipaa: document.getElementById('hipaa').value === "1"
        },
        isRemote: document.getElementById('remote').value === "2",
        mixedHW,
        mixedOS,
        manualTicketing: document.getElementById('ticketing').value === "2"
    };

    // Trigger PDF generation with the normalized score
    generateStrategicPDF(finalScore, assessmentData);
}
