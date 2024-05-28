function calculateGCD() {
    let a = parseInt(document.getElementById('number1').value);
    let b = parseInt(document.getElementById('number2').value);

    if (a <= 0 || b <= 0) {
        document.getElementById('gcdResult').innerHTML = 'Introduce números enteros positivos.';
        return;
    }

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    document.getElementById('gcdResult').innerHTML = `El MCD es: ${a}`;
}
