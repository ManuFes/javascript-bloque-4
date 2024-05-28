/****************
 * JS de secuencial1.html
 * 
 * en este codigo implementaremos un algoritmo secuencial 
 *                 entrada - calculo - salida
 * 
 */

/* 1º version: los datos se asignan en la declaracion de variables*/
/*OJO: JS no obliga ni a declarar datos ni a especificar tipos, TypeScript si */

function sumar(){

    let numero1 = parseInt(prompt("dame un numero entero: "));
    let numero2 = parseInt(prompt("dame otro numero entero: "));
    
    let suma = numero1 + numero2; /* calculo */

document.getElementById("resultado").innerHTML = "El <b>resultado</b> de la suma entre" + numero1 + " y " + numero2 + " es: <span class = 'algo'>" + suma + "</span>";

}
/* el codigo js se ejecuta cuando el navegador carga la linea que enlaza el script si quiero tener el control de cuando se ejecuta el codigo, debo hacer uso de: 
    - eventos de usuario
    - funciones en el codigo JS: declaracion y ejecucion separadas */