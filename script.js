function processAssessment() {
    const n = parseInt(document.getElementById('devices').value) || 0; 
    const m = parseInt(document.getElementById('employees').value) || 1; 
    const it_team = parseInt(document.getElementById('it_team').value) || 0;
    const ob_year = parseInt(document.getElementById('ob_year').value) || 0;

    let p_infra = (50 * n) / m;
    if (p_infra > 100) p_infra = 100;

    // Capture specific Hardware and OS names
    const selectedHW = Array.from(document.querySelectorAll('.hw:checked')).map(el => el.parentElement.textContent.trim());
    const selectedOS = Array.from(document.querySelectorAll('.os:checked')).map(el => el.parentElement.textContent.trim());

    // Capture specific Compliance names
    const complianceList = [];
    if (document.getElementById('nis2').value === "1") complianceList.push("NIS2");
    if (document.getElementById('iso').value === "1") complianceList.push("ISO 27001");
    if (document.getElementById('hipaa').value === "1") complianceList.push("HIPAA");
    if (document.getElementById('soc2').value === "1") complianceList.push("SOC2");

    let x = 0;
    if (complianceList.length > 0) x++;
    if (it_team <= 2 || ob_year > 12) x++;
    if (selectedHW.length > 1 || selectedOS.length > 1) x++;
    if (document.getElementById('remote').value === "2") x++;
    if (document.getElementById('ticketing').value === "2") x++;

    let p_qual = x * 20;
    const finalScore = (p_qual + p_infra) / 2;

    const assessmentData = {
        devices: n,
        employees: m,
        it_team,
        ob_year,
        complianceList, // New array of strings
        selectedHW,     // New array of strings
        selectedOS,     // New array of strings
        isRemote: document.getElementById('remote').value === "2",
        manualTicketing: document.getElementById('ticketing').value === "2"
    };

    generateStrategicPDF(finalScore, assessmentData);
}
