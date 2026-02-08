function processAssessment() {
    // 1. Core Data Inputs
    const employees = parseInt(document.getElementById('employees').value) || 1;
    const devices = parseInt(document.getElementById('devices').value) || 0;
    const it_team = parseInt(document.getElementById('it_team').value) || 0;
    const ob_year = parseInt(document.getElementById('ob_year').value) || 0;
    
    // 2. Capture Granular Data
    const compliance = {
        nis2: document.getElementById('nis2') ? document.getElementById('nis2').value === "2" : false,
        iso: document.getElementById('iso') ? document.getElementById('iso').value === "2" : false,
        soc2: document.getElementById('soc2') ? document.getElementById('soc2').value === "2" : false,
        hipaa: document.getElementById('hipaa') ? document.getElementById('hipaa').value === "2" : false
    };

    const isRemote = document.getElementById('remote') ? document.getElementById('remote').value === "2" : false;
    const manualTicketing = document.getElementById('ticketing') ? document.getElementById('ticketing').value === "2" : false;

    // Hardware Checkboxes (Safety Check)
    const hwCheckboxes = document.querySelectorAll('.hw'); 
    const hardware = {
        laptop: hwCheckboxes[0] ? hwCheckboxes[0].checked : false,
        phone: hwCheckboxes[1] ? hwCheckboxes[1].checked : false,
        ipad: hwCheckboxes[2] ? hwCheckboxes[2].checked : false
    };
    const mixedHW = Object.values(hardware).filter(v => v).length > 1;

    // OS Checkboxes (Safety Check)
    const osCheckboxes = document.querySelectorAll('.os');
    const os = {
        windows: osCheckboxes[0] ? osCheckboxes[0].checked : false,
        ios: osCheckboxes[1] ? osCheckboxes[1].checked : false,
        linux: osCheckboxes[2] ? osCheckboxes[2].checked : false
    };
    const mixedOS = Object.values(os).filter(v => v).length > 1;

    // --- 3. SCENARIO A MATH ---
    const riskCompliance = Object.values(compliance).some(v => v) ? 1 : 0;
    const riskRemote = isRemote ? 1 : 0;
    const riskPersonnel = (it_team <= 2 || ob_year > 12) ? 1 : 0;
    const riskHeterogeneity = (mixedHW || mixedOS) ? 1 : 0;
    const riskAdmin = manualTicketing ? 1 : 0;

    const totalRisks = riskCompliance + riskRemote + riskPersonnel + riskHeterogeneity + riskAdmin;
    const p_qual = totalRisks * 10; 

    let p_infra = (50 * devices) / employees;
    if (p_infra > 100) p_infra = 100;

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
