function calculateDNILetter() {
    const dni = document.getElementById('dni').value;
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    if (/^\d{7,8}$/.test(dni)) {
        const letter = letters.charAt(dni % 23);
        document.getElementById('dniResult').innerHTML = `La letra de tu DNI es: ${letter}`;
    } else {
        document.getElementById('dniResult').innerHTML = 'Introduce un número de DNI válido.';
    }
}
