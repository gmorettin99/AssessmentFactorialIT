function processAssessment() {
    const btn = document.querySelector('.submit-btn');
    const originalContent = btn.innerHTML;
    
    // Loading State UX
    btn.innerHTML = '<span class="spinner"></span> Generating Strategic Audit...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    try {
        const n = parseInt(document.getElementById('devices').value) || 0; 
        const m = parseInt(document.getElementById('employees').value) || 1; 
        const it_team = parseInt(document.getElementById('it_team').value) || 0;
        const ob_year = parseInt(document.getElementById('ob_year').value) || 0;

        // Formula: P_infra = 50n / m
        let p_infra = (50 * n) / m;
        if (p_infra > 100) p_infra = 100; 

        const selectedHW = Array.from(document.querySelectorAll('.hw:checked')).map(el => el.parentElement.textContent.trim());
        const selectedOS = Array.from(document.querySelectorAll('.os:checked')).map(el => el.parentElement.textContent.trim());
        
        const complianceMap = {
            nis2: document.getElementById('nis2').value === "1",
            iso: document.getElementById('iso').value === "1",
            hipaa: document.getElementById('hipaa').value === "1",
            soc2: document.getElementById('soc2').value === "1"
        };
        const activeCompliance = Object.keys(complianceMap).filter(k => complianceMap[k]).map(k => k.toUpperCase().replace('ISO', 'ISO 27001'));

        let x = 0; 
        if (activeCompliance.length > 0) x++; 
        if (document.getElementById('remote').value === "2") x++; 
        if (it_team <= 2 || ob_year > 12) x++; 
        if (selectedHW.length > 1 || selectedOS.length > 1) x++; 
        if (document.getElementById('ticketing').value === "2") x++; 

        let p_qual = x * 20; 
        const finalScore = (p_qual + p_infra) / 2;

        const assessmentData = {
            n, m, it_team, ob_year,
            activeCompliance,
            selectedHW,
            selectedOS,
            riskFactorCount: x,
            isRemote: document.getElementById('remote').value === "2",
            manualTicketing: document.getElementById('ticketing').value === "2"
        };

        generateStrategicPDF(finalScore, assessmentData);

    } catch (error) {
        console.error("Audit Generation Error:", error);
        alert("Error generating PDF. Please verify your inputs.");
    } finally {
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }, 2500);
    }
}
