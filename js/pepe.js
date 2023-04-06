"use strict"

let botonimgdesplegable = document.querySelector(".imagendesplegable");
botonimgdesplegable.addEventListener("click", mostrarmenu);
let desplegable = document.querySelector(".desplegable");

function mostrarmenu() {
    desplegable.classList.toggle("show");
}

let botondeultimolanzamiento = document.querySelector("#botondeultimolanzamiento");
botondeultimolanzamiento.addEventListener("click", llevarapaginaul);

function llevarapaginaul() {
    window.open("https://www.ubisoft.com/es-mx/game/rainbow-six/siege");
}