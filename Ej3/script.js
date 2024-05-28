function classifyTriangle() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    let result;

    if (sideA === sideB && sideB === sideC) {
        result = "El triángulo es equilátero";
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        result = "El triángulo es isósceles";
    } else {
        result = "El triángulo es escaleno";
    }

    document.getElementById('triangleResult').innerHTML = result;
}
