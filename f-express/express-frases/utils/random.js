/**
 * Devuelve un elemento aleatorio de cualquier array que reciba
 * @param {Array} array 
 * @returns {*} Elemento aleatorio
 */

export function elegirAleatorio(lista) {
const indice = Math.floor(Math.random() * lista.length);
return lista[indice];
}
