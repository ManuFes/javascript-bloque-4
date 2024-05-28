function euclideanDivision() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    if (number1 <= 0 || number2 <= 0) {
        document.getElementById('euclideanResult').innerHTML = 'Introduce números enteros positivos.';
        return;
    }

    const quotient = Math.floor(number1 / number2);
    const remainder = number1 % number2;

    document.getElementById('euclideanResult').innerHTML = `Cociente: ${quotient}, Resto: ${remainder}`;
}
