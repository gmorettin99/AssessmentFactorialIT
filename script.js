function processAssessment() {
    let score = 0;
    
    // Core Data
    const devices = parseInt(document.getElementById('devices').value) || 0;
    const it_team = parseInt(document.getElementById('it_team').value) || 0;
    const ob_year = parseInt(document.getElementById('ob_year').value) || 0;
    const remoteText = document.getElementById('remote').options[document.getElementById('remote').selectedIndex].text;

    // I. Scalable Infrastructure Penalty: +2.0 per unit of ten devices
    score += Math.round(devices / 10) * 2;

    // II. Compliance +2.0 per framework
    const complianceIds = ['nis2', 'iso', 'soc2', 'hipaa'];
    complianceIds.forEach(id => { score += parseInt(document.getElementById(id).value); });

    // III. Operational triggers
    score += parseInt(document.getElementById('remote').value);
    if (it_team > 0 && it_team <= 2) score += 2; 
    if (ob_year > 12) score += 2; 

    // IV. Heterogeneity multiplicity
    if (document.querySelectorAll('.hw:checked').length > 1) score += 2;
    if (document.querySelectorAll('.os:checked').length > 1) score += 2;

    // V. Automation gap
    score += parseInt(document.getElementById('ticketing').value);

    // Call PDF generator with data package
    const assessmentData = { devices, it_team, ob_year, remoteText };
    generateStrategicPDF(score, assessmentData);
}
