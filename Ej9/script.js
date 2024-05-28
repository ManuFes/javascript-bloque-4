function showMonthName() {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const monthIndex = document.getElementById('month').value;

    if (monthIndex) {
        document.getElementById('monthResult').innerHTML = `El mes seleccionado es: ${months[monthIndex - 1]}`;
    } else {
        document.getElementById('monthResult').innerHTML = 'Por favor, selecciona un mes.';
    }
}
