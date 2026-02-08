function processAssessment() {
    // 1. Core Data Inputs
    const employees = parseInt(document.getElementById('employees').value) || 1; // Default 1 to avoid div/0
    const devices = parseInt(document.getElementById('devices').value) || 0;
    const it_team = parseInt(document.getElementById('it_team').value) || 0;
    const ob_year = parseInt(document.getElementById('ob_year').value) || 0;
    
    // 2. Capture Granular Data (Required for PDF Text)
    const compliance = {
        nis2: document.getElementById('nis2').value === "2",
        iso: document.getElementById('iso').value === "2",
        soc2: document.getElementById('soc2').value === "2",
        hipaa: document.getElementById('hipaa').value === "2"
    };

    const isRemote = document.getElementById('remote').value === "2";
    const manualTicketing = document.getElementById('ticketing').value === "2";

    // Hardware Checkboxes
    const hwCheckboxes = document.querySelectorAll('.hw'); 
    const hardware = {
        laptop: hwCheckboxes[0].checked,
        phone: hwCheckboxes[1].checked,
        ipad: hwCheckboxes[2].checked
    };
    const mixedHW = Object.values(hardware).filter(v => v).length > 1;

    // OS Checkboxes
    const osCheckboxes = document.querySelectorAll('.os');
    const os = {
        windows: osCheckboxes[0].checked,
        ios: osCheckboxes[1].checked,
        linux: osCheckboxes[2].checked
    };
    const mixedOS = Object.values(os).filter(v => v).length > 1;

    // --- 3. SCENARIO A MATH IMPLEMENTATION ---
    
    // A. Qualitative Normalization (P_qual)
    // Risk Factors (Binary Indicators):
    // 1. Certification Frameworks (Any present)
    const riskCompliance = Object.values(compliance).some(v => v) ? 1 : 0;
    // 2. Operational Perimeter (Remote/Hybrid)
    const riskRemote = isRemote ? 1 : 0;
    // 3. Personnel Ratio (IT <= 2 OR High Onboarding)
    const riskPersonnel = (it_team <= 2 || ob_year > 12) ? 1 : 0;
    // 4. Asset Heterogeneity (Mixed HW OR Mixed OS)
    const riskHeterogeneity = (mixedHW || mixedOS) ? 1 : 0;
    // 5. Administrative Deficit (Manual Ticketing)
    const riskAdmin = manualTicketing ? 1 : 0;

    const totalRisks = riskCompliance + riskRemote + riskPersonnel + riskHeterogeneity + riskAdmin;
    
    // P_qual = 10 * x (where x is risk count). Max 50%.
    const p_qual = totalRisks * 10; 

    // B. Infrastructure Normalization (P_infra)
    // P_infra = (50 * n) / m 
    let p_infra = (50 * devices) / employees;
    if (p_infra > 100) p_infra = 100; // Cap saturation at 100%

    // C. Integrated Final Score (Phi)
    // Phi = (P_qual + P_infra) / 2
    const score = (p_qual + p_infra) / 2;

    // --- 4. Package Data ---
    const assessmentData = {
        employees,
        devices,
        it_team,
        ob_year,
        compliance,
        hardware,
        os,
        isRemote,
        mixedHW,
        mixedOS,
        manualTicketing
    };

    // --- 5. Generate PDF ---
    if (typeof generateStrategicPDF === "function") {
        generateStrategicPDF(score, assessmentData);
    } else {
        alert("PDF Generator script is not loaded.");
    }
}
