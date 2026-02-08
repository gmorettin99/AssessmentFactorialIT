function processAssessment() {
    let score = 0;
    
    // Core Data Inputs
    const devices = parseInt(document.getElementById('devices').value) || 0;
    const it_team = parseInt(document.getElementById('it_team').value) || 0;
    const ob_year = parseInt(document.getElementById('ob_year').value) || 0;
    
    // I. Scalable Infrastructure Logic (+2.0 per 10 devices)
    score += Math.round(devices / 10) * 2;

    // II. Compliance Logic (+2.0 per framework)
    // We capture specific booleans to trigger specific KB text blocks later
    const compliance = {
        nis2: document.getElementById('nis2').value === "2",
        iso: document.getElementById('iso').value === "2",
        soc2: document.getElementById('soc2').value === "2",
        hipaa: document.getElementById('hipaa').value === "2"
    };
    
    Object.values(compliance).forEach(val => { if(val) score += 2; });

    // III. Operational triggers
    const isRemote = document.getElementById('remote').value === "2";
    if (isRemote) score += 2;
    if (it_team > 0 && it_team <= 2) score += 2; 
    if (ob_year > 12) score += 2; 

    // IV. Heterogeneity multiplicity
    const mixedHW = document.querySelectorAll('.hw:checked').length > 1;
    const mixedOS = document.querySelectorAll('.os:checked').length > 1;
    if (mixedHW) score += 2;
    if (mixedOS) score += 2;

    // V. Automation gap
    const manualTicketing = document.getElementById('ticketing').value === "2";
    if (manualTicketing) score += 2;

    // Package the "Logic Map" for the PDF Generator
    const assessmentData = {
        devices,
        it_team,
        ob_year,
        compliance, // contains nis2, iso, soc2, hipaa booleans
        isRemote,
        mixedHW,
        mixedOS,
        manualTicketing,
        remoteText: document.getElementById('remote').options[document.getElementById('remote').selectedIndex].text
    };

    // Final call to your PDF generator
    generateStrategicPDF(score, assessmentData);
}
