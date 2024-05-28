function checkString() {
    const inputString = document.getElementById('inputString').value;
    if (inputString === inputString.toUpperCase()) {
        document.getElementById('stringResult').innerHTML = 'La cadena está en mayúsculas.';
    } else if (inputString === inputString.toLowerCase()) {
        document.getElementById('stringResult').innerHTML = 'La cadena está en minúsculas.';
    } else {
        document.getElementById('stringResult').innerHTML = 'La cadena contiene una combinación de mayúsculas y minúsculas.';
    }
}
