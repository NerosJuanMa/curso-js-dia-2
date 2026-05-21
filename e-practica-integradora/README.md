# Cuadernillo de Prácticas - JavaScript Avanzado e Ionic

## 📋 PRÁCTICA E: Práctica Integradora (Respuestas de Organización)

#### EJERCCIOS:

### 1. ¿Por qué separamos los datos, la lógica y el DOM en archivos distintos?
Esta separación sigue el patrón arquitectónico de desacoplamiento de código:
*   **Datos (`data/tecnologias.js`):** Actúan como una fuente única de verdad independiente del diseño. Si las tecnologías cambian, solo se modifica este fichero.
*   **DOM / Utilidades (`utils/dom.js`):** Es una función pura y reutilizable encargada de renderizar componentes visuales. No le importa qué datos recibe, solo sabe cómo fabricar la estructura HTML.
*   **Lógica principal (`app.js`):** Funciona como un director de orquesta que conecta los datos con el renderizador del DOM, manteniendo un flujo de datos limpio, escalable y muy fácil de testear o modificar en el futuro.

---
