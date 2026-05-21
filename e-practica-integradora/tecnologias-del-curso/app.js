// ⚠️ Verifica que las rutas a tus archivos .js sean exactamente estas:
import { frases } from "./data/frases.js";
import { elegirAleatorio } from "./utils/random.js";

// Usamos getElementById que es más seguro y directo para el ID "frase"
const parrafoFrase = document.getElementById("frase");
const botonFrase = document.getElementById("boton-frase");

function mostrarFrase() {
  // Verificación de seguridad para evitar el error de 'null'
  if (!parrafoFrase) {
    console.error("No se encontró el elemento con ID '#frase' en el HTML.");
    return;
  }
  
  const frase = elegirAleatorio(frases);
  parrafoFrase.textContent = frase;
}

// Escuchamos el clic en el botón
if (botonFrase) {
  botonFrase.addEventListener("click", mostrarFrase);
}

// Ejecutamos una vez al cargar la página
document.addEventListener("DOMContentLoaded", mostrarFrase);
