//Elementos del DOM

const botonSiguiente = document.getElementById("boton-siguiente");
const pantallaBienvenida = document.getElementById("pantalla-bienvenida");

const pantallaUsuario = document.getElementById("pantalla-usuario");
const formularioUsuario = document.getElementById("formulario-usuario");
const inputNombreJugador = document.getElementById("nombre-jugador");

const pantallaReglas = document.getElementById("pantalla-reglas");
const botonReglasSiguiente = document.getElementById("boton-reglas-siguiente");

const pantallaPreparados = document.getElementById("pantalla-preparados");
const botonEmpezar = document.getElementById("boton-empezar");

const pantallaJuego = document.getElementById("pantalla-juego");

const textoPregunta = document.getElementById("texto-pregunta");
const botonesRespuesta = document.querySelectorAll(".respuesta");
const botonSiguientePregunta = document.getElementById("boton-siguiente-pregunta");

const pantallaResultado = document.getElementById("pantalla-resultado");
const resultadoAciertos = document.getElementById("resultado-aciertos");
const textoVeredicto = document.getElementById("veredicto");

const pantallaRanking = document.getElementById("pantalla-ranking");
const botonRanking = document.getElementById("boton-ranking");

const rankingNombre = document.getElementById("ranking-nombre");
const rankingNivel = document.getElementById("ranking-nivel");
const rankingAciertos = document.getElementById("ranking-aciertos");
const rankingPartidas = document.getElementById("ranking-partidas");

const listaRanking = document.getElementById("lista-ranking");

const contadorPreguntas = document.getElementById("contador-preguntas");
const jugadorNombreActual = document.getElementById("jugador-nombre-actual");
const cronometro = document.getElementById("cronometro");

const botonVolverJugar = document.getElementById("boton-volver-jugar");

//VARIABLES 
let nombreJugador = ""
let nivelSeleccionado = ""
let indicePreguntas=0; /*es el indice de cada objeto completo con sus propiedades*/
let aciertos = 0;
let fallos = 0;
let jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];
let preguntasNivel = [];
let tiempoRestante = 0;
let intervaloCronometro;

/*Juego*/

const preguntasFaciles = [
    {
        pregunta:"¿De qué país es originaria la pizza?",
        opciones: ["España", "Portugal", "Francia", "Italia"],
        respuesta: "Italia"
    },
    {
        pregunta:"¿Cuántos días tiene una semana?",
        opciones: ["Siete", "Ocho", "Cinco", "Treinta"],
        respuesta: "Siete"
    },
    {
        pregunta:"¿Cuál es el país más grande en extensión del mundo?",
        opciones: ["China", "Europa", "Rusia", "Brasil"],
        respuesta: "Rusia"
    },
    {
        pregunta:"¿Qué animal es mamífero y puede volar?",
        opciones: ["Ornitorrinco", "Murciélago", "Pelícano", "Gorrión"],
        respuesta: "Murciélago"
    },
    {
        pregunta: "¿En qué época histórica se desarrolló la bombilla eléctrica?",
        opciones: ["Edad de Bronce", "Edad Media", "Edad Moderna", "Edad Contemporánea"],
        respuesta: "Edad Contemporánea"
    }

];

const preguntasMedio = [
    {
        pregunta :"¿Cuál es el río mas largo de Europa?",
        opciones : ["Ebro", "Sena", "Volga", "Danubio"],
        respuesta : "Volga"
    },
    {
        pregunta :"¿Cuál es el elemento químico más abundante en el universo?",
        opciones : ["Hidrógeno", "Oro", "Plata", "H2o"],
        respuesta : "Hidrógeno"
    },
    {
        pregunta :"¿Quién escribió la novela Cien años de soledad?",
        opciones : ["Isabel Allende", "Cervantes", "Gabriel García Marquez", "Anónimo"],
        respuesta : "Gabriel García Marquez"
    },
    {
        pregunta :"¿Dónde se encuentra el hueso más pequeño del cuerpo humano?",
        opciones : ["Oído", "Dedos", "Nariz", "Boca"],
        respuesta : "Oído"
    },
    {
        pregunta :"¿Cómo se llama el hueso más pequeño del cuerpo humano?",
        opciones : ["Tibia", "Fémur", "Estribo", "Martillo"],
        respuesta : "Estribo"
    },
    {
        pregunta :"¿Cuál es el país con mayor superficie del continente africano?",
        opciones : ["Congo", "Argelia", "Angola", "Burkina Faso"],
        respuesta : "Argelia"
    },
     {
        pregunta :"¿En qué país se originaron los Juegos Olímpicos modernos, cuya primera edición se celebró en 1896?",
        opciones : ["Roma", "Grecia", "España", "Rusia"],
        respuesta : "Grecia"
    },
     {
        pregunta:"¿Qué famoso científico formuló las leyes del movimiento y la gravitación universal en su obra Philosophiæ Naturalis Principia Mathematica, publicada en 1687?",
        opciones: ["Isaac Newton", "Darwin", "Santiago Ramón y Cajal", "Marie Curie"],
        respuesta: "Isaac Newton"
    }

];

const preguntasDificiles = [
    {
        pregunta :"¿En qué año cayó el Muro de Berlín, marcando un hito fundamental en la reunificación alemana?",
        opciones : ["1989", "1900", "1993", "2010"],
        respuesta : "1989"
    },
    {
        pregunta :"¿Dónde se encuentra expuesta de forma permanente la famosa escultura del David de Miguel Ángel?",
        opciones : ["Venecia", "Florencia", "Berlin", "Londres"],
        respuesta : "Florencia,Italia"
    },
    {
        pregunta :"En la mitología griega, ¿quién era el dios del inframundo y del mundo de los muertos?",
        opciones : ["Hades", "Poseidon", "Zeus", "Júpiter"],
        respuesta : "Hades"
    },
    {
        pregunta :"¿Cuál es la capital de Australia?",
        opciones : ["Sindey", "Melbourne", "Canberra", "Sanberra"],
        respuesta : "Canberra"
    },
    {
        pregunta :"¿Qué autor escribió la célebre tragedia Hamlet?",
        opciones : ["William Shakespeare", "Quevedo", "George Orwel", "Charles Dickens"],
        respuesta : "William Shakespeare"
    },
    {
        pregunta :"¿Cuál es el símbolo químico del oro en la tabla periódica?",
        opciones : ["H2o", "Pb", "Au", "Zn"],
        respuesta : "Au"
    },
    {
        pregunta :"¿Qué director es el responsable de películas icónicas como Pulp Fiction, Kill Bill y Django sin cadenas?",
        opciones : ["Steven Spielberg ", "Alfred Hitchcock", "Quentin Tarantino", "Francis Ford Coppola"],
        respuesta : "Quentin Tarantino"
    },
    {
        pregunta :"¿Cuál es el órgano más grande del cuerpo humano?",
        opciones : ["Cerebro ", "Piel", "Corazón", "Intestino delgado"],
        respuesta : "Piel"
    },
    {
        pregunta :"¿Cuál es el planeta más grande de nuestro sistema solar?",
        opciones : ["Tierra ", "Venus", "Saturno", "Júpiter"],
        respuesta : "Júpiter"
    },
    {
        pregunta :"¿Cómo se denominan las regiones de ADN no codificante ubicadas en los extremos de los cromosomas, cuyo acortamiento progresivo está estrechamente relacionado con el envejecimiento celular?",
        opciones : ["Mitocondria ", "Telómero", "Núcleo", "Glóbulos Blancos"],
        respuesta : "Telómero"
    },
];


//FUNCIONES

function mostrarPregunta(){
    textoPregunta.textContent=preguntasNivel[indicePreguntas].pregunta;

    botonesRespuesta.forEach(function(boton, indice){   /*pone respuestas en pantalla*/
    boton.textContent=preguntasNivel[indicePreguntas].opciones[indice];
});
 contadorPreguntas.textContent = "Preguntas: " + (indicePreguntas + 1 ) + " / " + preguntasNivel.length;
 
}

function finalizarJuego (){

    clearInterval(intervaloCronometro);

    pantallaJuego.classList.add("oculta");
    pantallaResultado.classList.remove("oculta");

    resultadoAciertos.textContent =  "Aciertos: " + aciertos + "/" + preguntasNivel.length;


        // VEREDICTO

        const preguntasSinResponder = preguntasNivel.length - (aciertos + fallos);
        const fallosTotales = fallos + preguntasSinResponder;


        if (aciertos > fallosTotales) {

            textoVeredicto.textContent = "¡Enhorabuena, has ganado!";

        } else if (aciertos === fallosTotales) {

            textoVeredicto.textContent =
                "¡Empate! Vuelve a intentarlo y mejora tu resultado.";

        } else {

            textoVeredicto.textContent = "Has perdido.";
        }


        // BUSCAR JUGADOR

        const jugadorExistente = jugadores.find(function(jugador) {
            return jugador.nombre === nombreJugador;
        });


        // ACTUALIZAR O CREAR JUGADOR

        if (jugadorExistente) {

            jugadorExistente[nivelSeleccionado].partidas++;

            if (
                aciertos >
                jugadorExistente[nivelSeleccionado].mejorPuntuacion
            ) {
                jugadorExistente[nivelSeleccionado].mejorPuntuacion = aciertos;
            }

        } else {

            const nuevoJugador = {
                nombre: nombreJugador,

                facil: {
                    partidas: 0,
                    mejorPuntuacion: 0
                },

                medio: {
                    partidas: 0,
                    mejorPuntuacion: 0
                },

                dificil: {
                    partidas: 0,
                    mejorPuntuacion: 0
                }
            };

            nuevoJugador[nivelSeleccionado].partidas++;
            nuevoJugador[nivelSeleccionado].mejorPuntuacion = aciertos;

            jugadores.push(nuevoJugador);
        }


        // GUARDAR EN LOCALSTORAGE

        localStorage.setItem(
            "jugadores",
            JSON.stringify(jugadores)
        );

}

//Formulario. EVENTO
formularioUsuario.addEventListener("submit", function(event){
    event.preventDefault();

   nombreJugador = inputNombreJugador.value.trim();

    const inputNivelSeleccionado =
        document.querySelector('input[name="nivel"]:checked');

    nivelSeleccionado = inputNivelSeleccionado.value;
    if (nivelSeleccionado === "facil") {
    preguntasNivel = preguntasFaciles;
    tiempoRestante = 30;

    } else if (nivelSeleccionado === "medio") {
    preguntasNivel = preguntasMedio;
    tiempoRestante=50;

    } else if (nivelSeleccionado === "dificil") {
    preguntasNivel = preguntasDificiles;
    tiempoRestante=60;
    }
    
    pantallaUsuario.classList.add("oculta");
    pantallaReglas.classList.remove("oculta");

});

//Botones. EVENTO 
botonSiguiente.addEventListener("click" , function(){
    pantallaBienvenida.classList.add("oculta");

    pantallaUsuario.classList.remove("oculta");

   
});

botonReglasSiguiente.addEventListener("click", function(){
    pantallaReglas.classList.add("oculta");
    
    pantallaPreparados.classList.remove("oculta");

});

botonEmpezar.addEventListener("click", function(){
    pantallaPreparados.classList.add("oculta");
    pantallaJuego.classList.remove("oculta");

    if (nivelSeleccionado === "facil"){
        document.body.classList.add("fondo-facil");
        pantallaJuego.classList.add("juego-facil");
        
    }else if (nivelSeleccionado === "medio"){
        document.body.classList.add("fondo-medio");
        pantallaJuego.classList.add("juego-medio");

    } else if (nivelSeleccionado === "dificil"){
        document.body.classList.add("fondo-dificil");
        pantallaJuego.classList.add("juego-dificil");
    }

    jugadorNombreActual.textContent = "Jugador: " + nombreJugador;

    cronometro.textContent = "Tiempo: " + tiempoRestante;

    mostrarPregunta();

    intervaloCronometro = setInterval(function() {
        tiempoRestante--;

        cronometro.textContent = "Tiempo: " + tiempoRestante;

        if (tiempoRestante === 0) {
        finalizarJuego();
        }
    }, 1000); 



});

botonesRespuesta.forEach(function(boton){
    boton.addEventListener("click", function(){  /*escucha los click y comprueba la respuesta*/
        if(boton.textContent=== preguntasNivel[indicePreguntas].respuesta) {
            boton.classList.add("correcta");
            aciertos++;
        }
        else {
            boton.classList.add("incorrecta");
            fallos++;
        }

        botonesRespuesta.forEach(function(botonRespuesta) {
            botonRespuesta.disabled = true;
        });

        botonSiguientePregunta.disabled = false;

    });
});

botonSiguientePregunta.addEventListener("click", function() {

    if (indicePreguntas < preguntasNivel.length - 1) {

        indicePreguntas++;

        botonesRespuesta.forEach(function(boton) {
            boton.disabled = false;
            boton.classList.remove("correcta");
            boton.classList.remove("incorrecta");
        });

        botonSiguientePregunta.disabled = true;

        mostrarPregunta();

    } else {
        finalizarJuego();
    } 
});


botonRanking.addEventListener("click", function() {

    pantallaResultado.classList.add("oculta");
    pantallaRanking.classList.remove("oculta");

    const jugadorActual = jugadores.find(function(jugador) {
        return jugador.nombre === nombreJugador;
    });

    const copiaJugadores = [...jugadores]; //hace copia del array jugadores

    copiaJugadores.sort(function(a,b){
        return b[nivelSeleccionado].mejorPuntuacion - a[nivelSeleccionado].mejorPuntuacion;

    });

    rankingNombre.textContent = jugadorActual.nombre;

    rankingNivel.textContent = nivelSeleccionado;

    rankingAciertos.textContent = jugadorActual[nivelSeleccionado].mejorPuntuacion;

    rankingPartidas.textContent = jugadorActual[nivelSeleccionado].partidas;

    listaRanking.innerHTML = "";

    copiaJugadores.forEach(function(jugador){
        const elementoRanking = document.createElement("li");

        elementoRanking.textContent = jugador.nombre + " -- " + jugador[nivelSeleccionado].mejorPuntuacion + " puntos.";

        listaRanking.appendChild(elementoRanking);

    });
});

botonVolverJugar.addEventListener("click", function(){
    pantallaRanking.classList.add("oculta");
    pantallaUsuario.classList.remove("oculta");

    //Reiniciar datos del juego
    indicePreguntas = 0;
    aciertos = 0;
    fallos = 0;

    //Limpiar formulario
    inputNombreJugador.value = "";
    
    const niveles = document.querySelectorAll('input[name="nivel"]');

    niveles.forEach(function(nivel) {
        nivel.checked = false;
    });

    //Limpiar botones de respuesta
    botonesRespuesta.forEach(function(botones){
        botones.disabled = false;
        botones.classList.remove("correcta");
        botones.classList.remove("incorrecta");
    });

    //Quitar colores de nivel anterior
    document.body.classList.remove(
        "fondo-facil",
        "fondo-medio",
        "fondo-dificil"

    );

    pantallaJuego.classList.remove(
        "juego-facil",
        "juego-medio",
        "juego-dificil"
    );

    

});


