let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function inciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador() {
  let dragon = document.getElementById("Dragon");
  let sirena = document.getElementById("Sirena");
  let zorro = document.getElementById("Zorro");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (dragon.checked) {
    spanMascotaJugador.innerHTML = "Dragon🔥";
  } else if (sirena.checked) {
    spanMascotaJugador.innerHTML = "Sirena💧";
  } else if (zorro.checked) {
    spanMascotaJugador.innerHTML = "Zorro🦊";
  } else {
    alert("No has elegido una mascota");
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Darked🦸🏻‍♂️";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Urano👨🏻‍✈️";
  } else {
    spanMascotaEnemigo.innerHTML = "Zoleth⚡";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }
  combate();

}



function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE 🏆");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE 🏆");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE 🏆");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE");
    console.log(ataqueEnemigo, ataqueJugador);
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
}

//RETRO ALIMENTAR LA MANIPULACION DEL "DOM" innerHTML creatElement AppendChild.
function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    ", la mascota del enemigo atacó con " +
    ataqueEnemigo + " " + 
    resultado;

  sectionMensajes.appendChild(parrafo);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", inciarJuego);
