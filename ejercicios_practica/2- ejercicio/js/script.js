"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener cada uno de los botones,
luego a cada uno agregar la clase "agua"

*/
const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");

boton1.textContent = "PEGAR";
boton2.textContent = "COPIAR";
boton3.textContent = "CORTAR";

boton1.classList.add('agua');
boton2.classList.add('agua');
boton3.classList.add('agua');
