// ⚠️ IMPORTANTE: En navegadores siempre debes incluir la extensión .js al final de la ruta
import { frases } from "./data/frases.js";
import { elegirAleatorio } from "./utils/random.js";
const parrafoFrase = document.querySelector("#frase");
const botonFrase = document.querySelector("#boton-frase");
function mostrarFrase() {
const frase = elegirAleatorio(frases);
parrafoFrase.textContent = frase;
}
botonFrase.addEventListener("click", mostrarFrase);
mostrarFrase(); // Mostrar una al cargar la página

/*
// ⚠️ IMPORTANTE: En navegadores siempre debes incluir la extensión .js al final de la ruta
import { listaFrases } from './data/frases.js';
import { obtenerElementoAleatorio } from './utils/random.js';

// Selección de elementos del DOM
const textoElemento = document.getElementById('texto-frase');
const autorElemento = document.getElementById('autor-frase');
const botonCambiar = document.getElementById('btn-cambiar');

// Función encargada de actualizar la interfaz visual
function mostrarNuevaFrase() {
  const fraseSeleccionada = obtenerElementoAleatorio(listaFrases);
  
  textoElemento.textContent = `"${fraseSeleccionada.texto}"`;
  autorElemento.textContent = `— ${fraseSeleccionada.autor}`;
}

// Asignación del evento al botón
botonCambiar.addEventListener('click', mostrarNuevaFrase);
*/