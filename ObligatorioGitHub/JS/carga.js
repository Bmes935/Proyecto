"use strict"

let usuarioLogueado = null;
let personaLogueado = null;
let personas = [];
let locales = [];
let reservas = [];


class Local {
    constructor(lLocal, lPassword, fLocal, nLocal, lDireccion, tLocales, lCupomax,) {
        this.logLocal = lLocal;
        this.locPass = lPassword;
        this.fotoLocal = fLocal;
        this.direccion = lDireccion;
        this.cupoMaxLocal = lCupomax;
        this.nomLocal = nLocal;
        this.tipoLocales = tLocales;
        this.tipo = "Local";
        this.id = locales.length + 1;
        this.habilitado = true;
    }

    mostrar() {
        let txtHTML = `<div>
              <h2>Bienvenido ${this.nomLocal}</h2>
              <img src="img/${this.fotoLocal}">
              <p>Tipo de local: ${this.tipoLocales}<p>
              <p>Cupo Maximo: ${this.cupoMaxLocal}</p>
              <p>Direccion: ${this.direccion}</p>
              <p>Estado del local: ${this.estado()}</p>
              <p>Este elemento es de tipo ${this.tipo}</p>
              <input type="button" value="Incrementar Cupo" id="btnIncrementar">
              <input type="button" value="Disminuir Cupo" id="btnDisminuir">
              <input type="button" value="Deshabilitar Local" id="btnDeshabilitar">
              <input type="button" value="Habilitar Local" id="btnHabilitar">
            </div>
            <hr></hr>`;
        return txtHTML;
    }
    crearFila() {
        let fila = `<tr><td>${this.nomLocal}</td><td><img src="img/${this.fotoLocal}"  title="${this.nomLocal}" onClick="this.style.height = '200px'; this.style.width = '200px';" ondblclick="this.style.height = '100px'; this.style.width = '100px';" ></td><td>${this.direccion}</td><td>${this.tipoLocales}</td><td>${this.cupoMaxLocal}</td><td><input type="number" placeholder="Personas a reservar"  id="txtReservas${this.id - 1}" value="" min="1" max="20" data-idlocal ="${this.id - 1}"></td>`;
        if (this.habilitado) {
            fila += `<td> <input type="button" value="Procesar" class="btnReserva" data-idlocal="${this.id - 1}"><p>Habilitado</p> </td></tr>`;
        }
        else {
            fila += `<td> <p>Deshabilitado</p> </td></tr>`;
        }
        return fila;
    }

    estado() {
        if (this.habilitado) {
            return "Habilitado"
        } else {
            return "Deshabilitado"
        }
    }
}

class Reserva {
    constructor(rObjetoPersona, rObjetoLocal, rCantidad) {
        this.id = reservas.length + 1;
        this.objetoPersona = rObjetoPersona;
        this.objetoLocal = rObjetoLocal;
        this.cantidad = rCantidad;
        this.estado = "Pendiente"
    }
    ///
    crearTablaReservas() {
        let fila = `<tr><td>${this.nomLocal}</td><td><img src="img/${this.fotoLocal}"  title="${this.nomLocal}" onClick="this.style.height = '200px'; this.style.width = '200px';" ondblclick="this.style.height = '100px'; this.style.width = '100px';" ></td><td>${this.direccion}</td><td>${this.tipoLocales}</td><td>${this.cupoMaxLocal}</td><td><input type="number" placeholder="Personas a reservar"  id="txtReservas${this.id - 1}" value="" min="1" max="20" data-idlocal ="${this.id - 1}"></td>`;
        if (this.habilitado) {
            fila += `<td> <input type="button" value="Procesar" class="btnReserva" data-idlocal="${this.id - 1}"><p>Habilitado</p> </td></tr>`;
        }
        else {
            fila += `<td> <p>Deshabilitado</p> </td></tr>`;
        }
        return fila;
    }
    
}


class Persona {
    constructor(pUsuario, pPass, pNombre) {
        this.peUsuario = pUsuario;
        this.pePass = pPass;
        this.peNombre = pNombre;
        this.tipo = "Persona"
        this.pId = personas.length + 1;
    }
}

class Reserva {
    constructor(rObjetoPersona, rObjetoLocal, rCantidad) {
        this.id = reservas.length + 1;
        this.objetoPersona = rObjetoPersona;
        this.objetoLocal = rObjetoLocal;
        this.cantidad = rCantidad;
        this.estado = "Pendiente"
    }
    crearTablaReservas() {
        let fila = `<tr><td>${this.nomLocal}</td><td><img src="img/${this.fotoLocal}"  title="${this.nomLocal}" onClick="this.style.height = '200px'; this.style.width = '200px';" ondblclick="this.style.height = '100px'; this.style.width = '100px';" ></td><td>${this.direccion}</td><td>${this.tipoLocales}</td><td>${this.cupoMaxLocal}</td><td><input type="number" placeholder="Personas a reservar"  id="txtReservas${this.id - 1}" value="" min="1" max="20" data-idlocal ="${this.id - 1}"></td>`;
        if (this.habilitado) {
            fila += `<td> <input type="button" value="Procesar" class="btnReserva" data-idlocal="${this.id - 1}"><p>Habilitado</p> </td></tr>`;
        }
        else {
            fila += `<td> <p>Deshabilitado</p> </td></tr>`;
        }
        return fila;
    }
    
}



// USUARIOS CREADOS //

personas.push(new Persona("Juan", "Juan2023!", "Jotape"));
personas.push(new Persona("Santiago", "San987!", "Santi"));
personas.push(new Persona("Abigail", "Ab2023!", "Abi"));
personas.push(new Persona("Ana", "a", "Pendiente", "Anita"));
personas.push(new Persona("Pedro", "Pedro123!", "Pepe"));
personas.push(new Persona("Sofia", "Sofia321!", "Sof"));
personas.push(new Persona("Francisca", "Fran0900", "Fran"));
personas.push(new Persona("Pepe", "Pep567!", "Pepe"));
personas.push(new Persona("Julieta", "Juli4321!", "Juli"));

console.log(personas);

// USUARIOS CREADOS //

// LOCALES PRECARGADOS //

locales.push(new Local("pizzaMeno", "p", "Pmeno.jpg", "Pizza Meno", "Rivadavia 1992", "Restaurante", 45));
locales.push(new Local("BigDonalds", "bigDonalds", "Bdonalds.jpg", "Big Donalds", "Avenida Hamburguesa 2023", "Restaurante", 25));
locales.push(new Local("restauranteVioleta", "RVioleta", "Rvioleta.jpg", "Restaurante Violeta", "Pablo Di Maria 987", "Restaurante", 15));
locales.push(new Local("museoDeHistoriaNatural", "MuseoHN", "Mnatural.jpg", "Museo de Historia Natural", "Benito Juarez 192", "Museo", 150));
locales.push(new Local("museoDeArteContemporaneo", "MArteC", "Mcontemporaneo.jpg", "Museo de Arte Contemporaneo", "Oslo 765", "Museo", 90));
locales.push(new Local("teatroSolis", "TSolis", "Tsolis.jpg", "Teatro Solis", "Madrid 1900", "Teatro", 56));
locales.push(new Local("teatroCastor", "TCastor", "Tcastor.jpg", "Teatro Castor", "Cervantes 1414", "Teatro", 78));

// LOCALES PRECARGADOS //

// RESERVAS CREADAS //

reservas.push(new Reserva(personas[0], locales[0], 0));
reservas.push(new Reserva(personas[1], locales[0], 0));
reservas.push(new Reserva(personas[2], locales[2], 3));
reservas.push(new Reserva(personas[3], locales[3], 5));
reservas.push(new Reserva(personas[4], locales[4], 2));
reservas.push(new Reserva(personas[5], locales[5], 6));
reservas.push(new Reserva(personas[6], locales[5], 4));
reservas.push(new Reserva(personas[7], locales[6], 8));
reservas.push(new Reserva(personas[8], locales[6], 14));

console.log(reservas);



