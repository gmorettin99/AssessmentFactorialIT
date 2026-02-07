function generateStrategicPDF(score, data) {
    const element = document.getElementById('pdf-template');
    
    document.getElementById('finalScore').innerText = score;
    document.getElementById('recapArea').innerHTML = `
        <div style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Managed Assets:</strong> ${data.devices}</div>
        <div style="padding: 10px; border-bottom: 1px solid #eee;"><strong>IT Team Size:</strong> ${data.it_team}</div>
        <div style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Annual Onboarding:</strong> ${data.ob_year}</div>
        <div style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Operational Model:</strong> ${data.remoteText}</div>
    `;

    const opt = {
        margin: 0.5,
        filename: 'FactorialIT_FitAssessment.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    element.style.display = 'block';
    html2pdf().set(opt).from(element).toPdf().get('pdf').then(() => {
        element.style.display = 'none';
    }).save();
}
