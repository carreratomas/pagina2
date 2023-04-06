"use strict"
document.addEventListener("DOMContentLoaded", inicio)

function inicio() {
    //para hamburguesa----------------------------------------------------------------------------------------------------
    let botonimgdesplegable = document.querySelector(".imagendesplegable");
    botonimgdesplegable.addEventListener("click", mostrarmenu);
    let desplegable = document.querySelector(".desplegable");

    function mostrarmenu() {
        desplegable.classList.toggle("show");
    }

    //para boton cartelera------------------------------------------------------------------------------------------------
    let botondeultimolanzamiento = document.querySelector("#botondeultimolanzamiento");
    if (botondeultimolanzamiento != null) {
        botondeultimolanzamiento.addEventListener("click", function(event) {
            event.preventDefault();
            window.open("https://www.ubisoft.com/es-mx/game/rainbow-six/siege");
        });
    }
    //para formulario------------------------------------------------------------------------------------------------------
    let form = document.querySelector("#formulariousuarios");
    if (form != null) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            agregardatos();
        });

        //establecemos en una varialbe el tbody de la tabla
        let datosjugadores = document.querySelector("#ingresardatos");

        //arreglo de objetos donde se agregara 1+ cada vez que se llama a agregar tabla
        let usuarios = [{ //0
                "nombre": "Matias",
                "usuario": "Rustico",
                "juego": "CS:GO",
                "horas": "1560"
            },
            { //1
                "nombre": "Tomas",
                "usuario": "Tompik04",
                "juego": "League of Legends",
                "horas": "900"
            },
            { //2
                "nombre": "Juan",
                "usuario": "JuanjoTurroXD",
                "juego": "Terraria",
                "horas": "4603"
            },
            { //3
                "nombre": "Joaco",
                "usuario": "NigthFallDema",
                "juego": "RFactor",
                "horas": "940"
            }
        ];

        for (let i = 0; i < usuarios.length; i++) {
            agregartabla(usuarios[i].nombre, usuarios[i].usuario, usuarios[i].juego, usuarios[i].horas);
        }

        //funcion que toma los datos de los imput y los almacena en un objeto
        function agregardatos() {
            usuarios.push({
                "nombre": null,
                "usuario": null,
                "juego": null,
                "horas": null,
            }, );
            //establecemos una variable que indica el ultimo indice (donde se creo el ultimo objeto)
            let ultimoindice = usuarios.length - 1;
            //guardamos las partes del imput en variables
            let nombre = document.querySelector("#nombre").value;
            let usuario = document.querySelector("#usuario").value;
            let juego = document.querySelector("#juego").value;
            let horas = document.querySelector("#horas").value;
            if ((nombre != "") || (usuario != "") || (juego != "") || (horas != "")) {
                //guardamos las varialbes en el respectivo objeto
                usuarios[ultimoindice].nombre = nombre;
                usuarios[ultimoindice].usuario = usuario;
                usuarios[ultimoindice].juego = juego;
                usuarios[ultimoindice].horas = horas;
                agregartabla(usuarios[ultimoindice].nombre, usuarios[ultimoindice].usuario, usuarios[ultimoindice].juego, usuarios[ultimoindice].horas);
            } else {
                alert("no has completado todos los campos")
            }
        }
        //funcion para clasificar lo que agregemos en la tabla y mostrarlo
        function agregartabla(nombre, usuario, juego, horas) {
            if (horas < 1000) {
                datosjugadores.innerHTML = datosjugadores.innerHTML + "<tr> <td>" + nombre + "</td> <td>" + usuario + "</td> <td>" + juego + "</td> <td>" + horas + " hs" + "</td> </tr>";
            } else {
                datosjugadores.innerHTML = datosjugadores.innerHTML + "<tr class=logrohoras> <td >" + " » " + nombre + "</td> <td>" + usuario + "</td> <td>" + juego + "</td> <td>" + horas + " hs" + "</td> </tr>";
            }
        }

        //For: agrega automaticamente a la tabla los objetos predefinidos

        //boton para borrar todo objeto de la tabla
        let borrar = document.querySelector("#borrarusuarios");
        borrar.addEventListener("click", borrarusuarios);

        function borrarusuarios(event) {
            event.preventDefault();
            ingresardatos.innerHTML = null;
        }

        //boton para agregar 3 objetos de 1
        let agregarx3 = document.querySelector("#agregarx3");
        agregarx3.addEventListener("click", agregartres);

        function agregartres(event) {
            event.preventDefault();
            for (let i = 0; i < 3; i++) {
                agregardatos()
            }
        }
    }
}