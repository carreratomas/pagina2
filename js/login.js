"use strict"

document.addEventListener("DOMContentLoaded", function(e) { //para evitar variables globales
    inicio();
})

function inicio() {


    //PARA EL CAPTCHA
    window.onload = generarcaptcha;
    let recargarcaptcha = document.querySelector("#reload");
    reload.addEventListener("click", generarcaptcha);

    function generarcaptcha() {
        let contenedordedigitos = "1234567890ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijqmnopqrstuvwxyz";
        let selectordedigito = contenedordedigitos[Math.floor(Math.random() * contenedordedigitos.length)];
        for (var i = 0; i < 4; i++) {
            selectordedigito = selectordedigito + contenedordedigitos[Math.floor(Math.random() * contenedordedigitos.length)];
        }
        formulariologin.textcaptcha.value = selectordedigito;
    }

    //PARA EL INICIO 
    let iniciarsesion = document.querySelector("#botoninicio");
    botoninicio.addEventListener("click", verificar);

    function verificar() {
        let nombre = document.querySelector("#nombredeusuario").value;
        let contrasena = document.querySelector("#contrasena").value;
        let textcaptcha = document.querySelector("#textcaptcha").value;
        let introducircaptcha = document.querySelector("#introducircaptcha").value;
        if ((textcaptcha === introducircaptcha) && (nombre.length >= 5) && (contrasena.length >= 5)) {
            window.open("cartelera.html")
        } else {
            alert("Todos los campos son obligatorio y con captcha introducido correctamente. Recuerda que el minimo de caracteres es 5! ")
        }
    }
}