function calculateCircle() {
    const radius = document.getElementById('radius').value;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    document.getElementById('results').innerHTML = `
        <p>Longitud de la circunferencia: ${circumference.toFixed(2)}</p>
        <p>Área del círculo: ${area.toFixed(2)}</p>
        <p>Volumen de la esfera: ${volume.toFixed(2)}</p>
    `;
}
