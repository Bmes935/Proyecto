"use strict"


function devolverLocal(valorLoc) {
    return devolverObjeto(locales, "logLocal", valorLoc);
}
function devolverPersona(valorPer) {
    return devolverObjeto(personas, "peUsuario", valorPer);
}


/// Registro Login///
function devolverObjeto(lista, atributo, valor) {
    let objetoADevolver = null;
    let indice = 0;

    while (indice < lista.length && objetoADevolver === null) {
        if (lista[indice][atributo].toLowerCase() === valor.toLowerCase()) {
            objetoADevolver = lista[indice];
        }
        else {
            indice++;
        }
    }
    return objetoADevolver;
}
/// Registro Login///

/////Aqui abajo esta la validacion de contrasena para los usuarios que se registren en perfil persona ///

function validar(rContrasena) {
    let Mayus = 0;
    let Minus = 0;
    let Nros = 0;
    let esValida = false;

    if (rContrasena.length < 6) {
        esValida = false;
    } else {
        for (let x = 0; x < rContrasena.length; x++) {
            let letra = rContrasena[x];
            if (letra >= "A" && letra <= "Z") {
                Mayus++;
            }
            if (letra >= "a" && letra <= "z") {
                Minus++;
            }
            if (letra >= "0" && letra <= "9") {
                Nros++;
            }
        }
        if (Mayus >= 1 && Minus >= 1 && Nros >= 1) {
            esValida = true;
        }
    }
    return esValida;
}




function deshabilitar() {
    usuarioLogueado.habilitado = false;
    document.querySelector("#mostrarTabla").innerHTML = usuarioLogueado.mostrar();
    document.querySelector("#btnDeshabilitar").addEventListener("click", deshabilitar);
    document.querySelector("#btnHabilitar").addEventListener("click", habilitar);
    document.querySelector("#btnIncrementar").addEventListener("click", aumentar);
    document.querySelector("#btnDisminuir").addEventListener("click", disminuir);

}
function habilitar() {
    usuarioLogueado.habilitado = true;
    document.querySelector("#mostrarTabla").innerHTML = usuarioLogueado.mostrar();
    document.querySelector("#btnDeshabilitar").addEventListener("click", deshabilitar);
    document.querySelector("#btnHabilitar").addEventListener("click", habilitar);
    document.querySelector("#btnIncrementar").addEventListener("click", aumentar);
    document.querySelector("#btnDisminuir").addEventListener("click", disminuir);
}

function aumentar() {
    usuarioLogueado.cupoMaxLocal++;
    document.querySelector("#mostrarTabla").innerHTML = usuarioLogueado.mostrar();
    document.querySelector("#btnIncrementar").addEventListener("click", aumentar);
    document.querySelector("#btnDisminuir").addEventListener("click", disminuir);
    document.querySelector("#btnDeshabilitar").addEventListener("click", deshabilitar);
    document.querySelector("#btnHabilitar").addEventListener("click", habilitar);
}
function disminuir() {
    usuarioLogueado.cupoMaxLocal--;
    document.querySelector("#mostrarTabla").innerHTML = usuarioLogueado.mostrar();
    document.querySelector("#btnIncrementar").addEventListener("click", aumentar);
    document.querySelector("#btnDisminuir").addEventListener("click", disminuir);
    document.querySelector("#btnDeshabilitar").addEventListener("click", deshabilitar);
    document.querySelector("#btnHabilitar").addEventListener("click", habilitar);
}

///DE ACA PARA ARRIBA FUNCIONA TODO /// 



function manejarLinks() {
    let comando = this.innerHTML;
    switch (comando) {
        case ("Menu"):
            opcion1();
            break;
        case ("Estado de reservas"):
            opcion2();
            break;
        case ("Informacion estadistica"):
            opcion3();
            break;
        case ("Logout"):
            opcion4();
            break;
        default:
            break;
    }
}


function ocultarTodoDiv() {
    document.querySelectorAll("#mostrarTabla").forEach(function (e) { e.style.display = "none" })
}

function mostrarDiv(nombreDiv) {
    ocultarTodoDiv();
    document.querySelector("#" + nombreDiv).style.display = "block";
}

function opcion1() {
    ocultarTodoDiv();
    mostrarDiv("mostrarTabla");
}

function opcion2() {
    ocultarTodoDiv();
    mostrarDiv("contenido2");
}
function opcion3() {
    ocultarTodoDiv();
    mostrarDiv("contenido3");
}
function opcion4() {
    ocultarTodoDiv();
    mostrarDiv("contenido4");
}




