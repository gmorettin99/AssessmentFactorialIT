function processAssessment() {
    const btn = document.querySelector('.submit-btn');
    const originalContent = btn.innerHTML;
    
    // 1. Loading State UX
    btn.innerHTML = '<span class="spinner"></span> Generating Audit...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    try {
        // 2. Data Collection (Core Infrastructure)
        const n = parseInt(document.getElementById('devices').value) || 0; 
        const m = parseInt(document.getElementById('employees').value) || 1; 
        const it_team = parseInt(document.getElementById('it_team').value) || 0;
        const ob_year = parseInt(document.getElementById('ob_year').value) || 0;

        // 3. P_infra Calculation (Saturation at 2 devices per employee)
        let p_infra = (50 * n) / m; // [cite: 26]
        if (p_infra > 100) p_infra = 100; 

        // 4. P_qual Calculation (5 Risk Factors)
        const selectedHW = Array.from(document.querySelectorAll('.hw:checked')).map(el => el.parentElement.textContent.trim());
        const selectedOS = Array.from(document.querySelectorAll('.os:checked')).map(el => el.parentElement.textContent.trim());
        
        const complianceMap = {
            nis2: document.getElementById('nis2').value === "1",
            iso: document.getElementById('iso').value === "1",
            hipaa: document.getElementById('hipaa').value === "1",
            soc2: document.getElementById('soc2').value === "1"
        };
        const activeCompliance = Object.keys(complianceMap).filter(k => complianceMap[k]).map(k => k.toUpperCase().replace('ISO', 'ISO 27001'));

        let x = 0; // The indicator sum [cite: 13]
        if (activeCompliance.length > 0) x++; // Factor: Compliance [cite: 14]
        if (document.getElementById('remote').value === "2") x++; // Factor: Remote Perimeter [cite: 14]
        if (it_team <= 2 || ob_year > 12) x++; // Factor: Personnel Ratio [cite: 15]
        if (selectedHW.length > 1 || selectedOS.length > 1) x++; // Factor: Heterogeneity [cite: 15]
        if (document.getElementById('ticketing').value === "2") x++; // Factor: Admin Deficit [cite: 16]

        let p_qual = x * 20; // Normalization to 100% [cite: 18]

        // 5. Final Integrated Score (phi)
        const finalScore = (p_qual + p_infra) / 2; // 

        const assessmentData = {
            n, m, it_team, ob_year,
            activeCompliance,
            selectedHW,
            selectedOS,
            riskFactorCount: x,
            isRemote: document.getElementById('remote').value === "2",
            manualTicketing: document.getElementById('ticketing').value === "2"
        };

        // Trigger PDF
        generateStrategicPDF(finalScore, assessmentData);

    } catch (error) {
        console.error("Audit Generation Error:", error);
        alert("There was an error generating your PDF. Please check your inputs.");
    } finally {
        // Restore Button after short delay
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }, 2000);
    }
}
