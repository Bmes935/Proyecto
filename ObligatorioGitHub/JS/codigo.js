"use strict";

document.querySelector("#contenidoLocal").style.display = "none";
document.querySelector("#contenidoPersona").style.display = "none";
document.querySelector("#btnLogin").addEventListener("click", loguear);
document.querySelector("#btnLogoutLocal").addEventListener("click", logout);
document.querySelector("#btnLogoutPersona").addEventListener("click", logout);
document.querySelector("#btnRegistroUsuario").addEventListener("click", registroUsuario)
document.querySelector("#btnFiltrar").addEventListener("click", filtrarTabla);




/* Aqui solicitamos los datos para que una Persona se registre */
function registroUsuario() {
    let divRegistro = document.querySelector("#divRegistro");
    let rUsuario = document.querySelector("#txtRegistroUsuario").value;

    let rContrasena = document.querySelector("#txtRegistroPw").value;
    let rNombre = document.querySelector("#txtRegistroNombre").value;
    let validarregistro = validar(rContrasena); /* Aqui llamamos a la funcion creada Validar, para que el la contrasena sea validada correctamente */
    if (validarregistro) {
        personas.push(new Persona(rUsuario, rContrasena, rNombre));/* Si la contrasena cumple con la validacion, agregamos ese registro al Array creado para personas registradas */
        divRegistro.innerHTML = "Usuario registrado correctamente"
    }
    else {
        divRegistro.innerHTML = "Todos los datos son obligatorios"
    }
}

/* Aqui solicitamos los datos para que una Persona se registre */

function loguear() {
    let usuario = document.querySelector("#idUsr").value;
    let pwd = document.querySelector("#idPwd").value;
    /* Aqui nos logueamos con el Local ya precargado */
    usuarioLogueado = devolverLocal(usuario);
    if (usuarioLogueado !== null) {
        if (usuarioLogueado.locPass === pwd) {
            document.querySelector("#login").style.display = "none";
            document.querySelector("#registro").style.display = "none";
            document.querySelector("#contenidoLocal").style.display = "block";
            document.querySelector("#mostrarTabla").innerHTML = usuarioLogueado.mostrar();
            let anclas = document.querySelectorAll("a");
            for (let index = 0; index < anclas.length; index++) {
                anclas[index].addEventListener("click", manejarLinks)
            }
            ocultarTodoDiv();
            document.querySelector("#btnIncrementar").addEventListener("click", aumentar);
            document.querySelector("#btnDisminuir").addEventListener("click", disminuir);
            document.querySelector("#btnDeshabilitar").addEventListener("click", deshabilitar);
            document.querySelector("#btnHabilitar").addEventListener("click", habilitar);

        }
        else {
            document.querySelector("#divLogin").innerHTML = "Error al loguearse";
        }

    } else {
        document.querySelector("#divLogin").innerHTML = "Error al loguearse";
    }

    /* Aqui nos logueamos con la Persona Registrada */

    personaLogueado = devolverPersona(usuario);
    if (personaLogueado !== null) {
        if (personaLogueado.pePass === pwd) {
            document.querySelector("#login").style.display = "none";
            document.querySelector("#registro").style.display = "none";
            document.querySelector("#contenidoPersona").style.display = "block";

        }
        else {
            document.querySelector("#divLogin").innerHTML = "Error al loguearse";
        }

    } else {
        document.querySelector("#divLogin").innerHTML = "Error al loguearse";
    }
    /* Aqui nos logueamos con la Persona Registrada */
}


function filtrarTabla() {
    let valorSeleccionado = document.querySelector("#slcTipo").value;
    let tabla = `<table border="3"><tr><td>Nombre</td><td>Foto</td><td>Direccion</td><td>Tipo</td><td>Cupo Maximo de local</td><tr>`;
    for (let index = 0; index < locales.length; index++) {
        if (locales[index].tipoLocales === valorSeleccionado || valorSeleccionado === "B") {
            tabla += locales[index].crearFila();
        }
    }
    tabla += "</table>"
    document.querySelector("#tabla").innerHTML = tabla;
    let botones = document.querySelectorAll(".btnReserva");
    for (let index = 0; index < botones.length; index++) {
        botones[index].addEventListener("click", procesar);
    }
}

function procesar() {
    alert(this.dataset.idlocal);
    let valor = document.querySelector("#txtReservas" + this.dataset.idlocal).value;
    alert("Se reservan " + valor + " asientos para local con posicion en array = " + this.dataset.idlocal);
    reservas.push(new Reserva(personaLogueado, this.dataset.idlocal, valor))
}

function filtrarTablaReservas() {
    let valorSeleccionado = document.querySelector("#slcTipo").value;
    let tabla = `<table border="3"><tr><td>Nombre</td><td>Foto</td><td>Direccion</td><td>Tipo</td><td>Cupo Maximo de local</td><tr>`;
    for (let index = 0; index < locales.length; index++) {
        if (locales[index].tipoLocales === valorSeleccionado || valorSeleccionado === "B") {
            tabla += locales[index].crearFila();
        }
    }
    tabla += "</table>"
    document.querySelector("#tabla").innerHTML = tabla;
    let botones = document.querySelectorAll(".btnReserva");
    for (let index = 0; index < botones.length; index++) {
        botones[index].addEventListener("click", procesar);
    }
}





function logout() {
    document.querySelector("#divLogin").innerHTML = "";
    document.querySelector("#divRegistro").innerHTML = "";
    document.querySelector("#idUsr").value = "";
    document.querySelector("#idPwd").value = "";
    document.querySelector("#txtRegistroUsuario").value = "";
    document.querySelector("#txtRegistroPw").value = "";
    document.querySelector("#txtRegistroNombre").value = "";
    document.querySelector("#contenidoLocal").style.display = "none";
    document.querySelector("#contenidoPersona").style.display = "none";
    document.querySelector("#login").style.display = "block";
    document.querySelector("#registro").style.display = "block";
    usuarioLogueado = null;
}


/////////////////////DE ACA PARA ABAJO SOLO PRUEBAS////////////////////////////////

//PRUEBA DE PUSH RESERVA//


function reservar(local, cuposReserva) {
    let cupoReservas = parseInt(document.querySelector("#typeNumeros").value);
    if (local.habilitado = false) {
        alert("No es posible reservar")
    }
    else if (local.cupoMaxLocal < cuposReserva) {
        alert("No es posible reservas, supera el cupo disponible")
    }
    else {
        reservas.push(new Reserva(personaLogueado, usuarioLogueado, cuposReserva));
        local.cupoMaxLocal = local.cupoMaxLocal - cuposReserva;
        alert("Reserva completada");
    }
}
 //PRUEBA DE PUSH RESERVA
 //PRUEBA DE PUSH RESERVA
function reservar1() {
    document.querySelector("#mostrarTabla").innerHTML = usuarioLogueado.mostrar();
    document.querySelector("#btnpruebaReserva").addEventListener("click", reservar1);
    let pruebareservas = parseInt(document.querySelector("#txtpruebaReservas").value);
    if (local.habilitado = false) {
        alert("No es posible reservar")
    }
    else if (local.cupoMaxLocal < cupoReservas) {
        alert("No es posible reservas, supera el cupo disponible")
    }
    else {
        reservas.push(new Reserva(personaLogueado, usuarioLogueado, pruebareservas));
        local.cupoMaxLocal = local.cupoMaxLocal - cupoReservas;
        alert("Ta pusheado rey");
        console.log(locales);
    }
}
//PRUEBA DE PUSH RESERVA