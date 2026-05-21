# Cuadernillo de Prácticas - JavaScript Avanzado e Ionic
**Estudiante:** JuanMa
**Proyecto:** JavaScript Avanzado e IONIC (Backend / Frontend)

---
#### EJERCCIOS:

## 📋 PRÁCTICA A: Docker (Levantar servicios conocidos)

### 1. ¿Qué ha pasado al ejecutar hello-world? ¿Qué mensajes ha mostrado?
Al ejecutar el comando, Docker comprobó si la imagen existía localmente. Al no encontrarla, realizó una descarga automática (*pull*) desde el registro oficial (Docker Hub), creó una instancia y la ejecutó. Mostró en la terminal el mensaje **«Hello from Docker!»** junto a una explicación de los pasos internos completados, tras lo cual el contenedor se detuvo de forma automática.

### 2. ¿Qué diferencia hay entre una imagen y un contenedor?
*   **Imagen:** Es un elemento estático que actúa como plantilla, molde o plano de lectura. Contiene el sistema de archivos, código y dependencias necesarias para que la aplicación funcione.
*   **Contenedor:** Es el elemento dinámico. Es la instancia viva, aislada y en ejecución creada a partir de una imagen. Se pueden iniciar múltiples contenedores idénticos e independientes usando una única imagen de origen.

### 3. ¿Docker ha instalado Apache en tu sistema o lo ha ejecutado de forma aislada?
Lo ha ejecutado de forma **completamente aislada**. Apache funciona dentro de un contenedor estanco, lo que significa que no se ha modificado el sistema operativo nativo del ordenador ni se han instalado binarios directamente en la máquina host.

### 4. ¿Qué significa -p 8080:80? ¿Por qué tiene dos números?
Es un parámetro de **mapeo de puertos** que permite comunicar la máquina física con el contenedor aislado. Tiene dos números porque asocia dos entornos de red:
*   **8080 (Puerto Host):** El puerto exterior en mi ordenador local. Es el que se introduce en el navegador (`http://localhost:8080`).
*   **80 (Puerto Contenedor):** El puerto interno del contenedor donde el servidor Apache (httpd) escucha las peticiones web por defecto.

### 5. ¿Qué pasaría si modificas el index.html mientras el contenedor está corriendo?
Los cambios se reflejan **de forma inmediata en tiempo real** al recargar la página en el navegador. Esto es posible gracias al flag de volumen (`-v "$PWD":...`), que mapea el directorio local de trabajo con la carpeta de publicación de Apache dentro del contenedor, obligándolo a leer directamente los archivos del disco físico en lugar de una copia estática congelada.

---

## 📋 PRÁCTICA B: Git y GitHub

### 1. ¿Qué es un repositorio? ¿Para qué sirve?
Un repositorio es una estructura de almacenamiento (una carpeta gestionada por Git) que guarda todo el código de un proyecto junto con el historial completo de sus modificaciones. Sirve para llevar un control estricto de las versiones, mantener un registro cronológico de los cambios y coordinar el trabajo cuando colaboran varios desarrolladores.

### 2. ¿Qué es un commit? ¿Por qué son importantes los mensajes de commit?
Un commit es una "fotografía" o captura del estado exacto del código en un momento determinado del tiempo. Los mensajes de commit son cruciales porque explican de forma clara y semántica qué cambio o mejora introduce esa versión específica, facilitando la comprensión del historial y permitiendo revertir el código a estados anteriores exactos si algo falla.

### 3. ¿Qué diferencia hay entre Git y GitHub?
*   **Git:** Es el software de control de versiones de código abierto que se instala y ejecuta de forma local en el ordenador. No requiere conexión a internet para funcionar.
*   **GitHub:** Es una plataforma en la nube que aloja los repositorios de Git de manera remota. Ofrece una interfaz visual, herramientas de gestión de equipos y facilidades para compartir y sincronizar el código globalmente.

### 4. ¿Qué hace el comando git push? ¿Y git pull?
*   **`git push`:** Sube y sincroniza los commits guardados en el repositorio local hacia el repositorio remoto alojado en GitHub.
*   **`git pull`:** Descarga e incorpora los nuevos cambios y commits del repositorio remoto de GitHub hacia el entorno de trabajo local en el ordenador.

---

## 📋 PRÁCTICA C: HTML y CSS (Estructura Semántica)

### 1. ¿Por qué es fundamental usar HTML semántico?
El uso de etiquetas semánticas (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`) aporta significado real al contenido más allá de la mera maquetación visual. Es indispensable para mejorar la accesibilidad (permitiendo que lectores de pantalla para personas con discapacidad visual entiendan la página), optimizar el posicionamiento en buscadores (SEO) y mantener un código limpio y legible para otros desarrolladores.

### 2. ¿Para qué sirve el sistema de Layout Flexbox (`display: flex`)?
Flexbox es un modelo de diseño web unidimensional que permite alinear, distribuir y organizar el espacio entre los elementos de una interfaz, incluso cuando su tamaño es dinámico o desconocido. Facilita enormemente el posicionamiento en filas o columnas y la distribución uniforme de componentes como las tarjetas de productos.

---

## 📋 PRÁCTICA D: JavaScript ES Modules

### 1. ¿Para qué sirve export? ¿Qué pasa si no lo pones?
`export` se utiliza para marcar funciones, variables, objetos o clases dentro de un módulo para que estén expuestos y disponibles para otros archivos del proyecto. Si no se incluye la palabra clave `export`, el elemento permanecerá estrictamente privado dentro de su propio archivo y cualquier intento de importarlo desde otro módulo lanzará un error de ejecución.

### 2. ¿Para qué sirve import? ¿Cómo se indica la ruta del archivo?
`import` permite traer y utilizar funciones o datos que han sido explícitamente expuestos por otro módulo. La ruta del archivo origen se debe especificar de forma relativa exacta empezando por `./` (mismo directorio) o `../` (directorio superior) e incluyendo obligatoriamente la extensión `.js` al final (ejemplo: `import { frases } from "./data/frases.js";`).

### 3. ¿Por qué usamos type="module" en el HTML?
Se añade el atributo `type="module"` en la etiqueta `<script>` para indicarle explícitamente al navegador web que el archivo JavaScript en cuestión utiliza la sintaxis moderna de módulos (ES Modules). Sin este atributo, el navegador procesará el archivo como un script clásico de JavaScript, desconociendo las palabras clave `import`/`export` y rompiendo la aplicación.

### 4. ¿Qué ventaja tiene separar el código en varios archivos en un proyecto real?
Dividir el código bajo el principio de responsabilidad única (Modularización) mejora drásticamente la escalabilidad y mantenibilidad del proyecto. Permite aislar errores de forma sencilla, facilita la reutilización de funciones y utilidades en diferentes partes de la app, limpia la lectura del código evitando archivos kilométricos y permite que varios desarrolladores trabajen en distintas funcionalidades de forma simultánea sin generar conflictos constantes en Git.

---

## 📋 PRÁCTICA E: Práctica Integradora (Respuestas de Organización)

### 1. ¿Por qué separamos los datos, la lógica y el DOM en archivos distintos?
Esta separación sigue el patrón arquitectónico de desacoplamiento de código:
*   **Datos (`data/tecnologias.js`):** Actúan como una fuente única de verdad independiente del diseño. Si las tecnologías cambian, solo se modifica este fichero.
*   **DOM / Utilidades (`utils/dom.js`):** Es una función pura y reutilizable encargada de renderizar componentes visuales. No le importa qué datos recibe, solo sabe cómo fabricar la estructura HTML.
*   **Lógica principal (`app.js`):** Funciona como un director de orquesta que conecta los datos con el renderizador del DOM, manteniendo un flujo de datos limpio, escalable y muy fácil de testear o modificar en el futuro.

---

## 📋 PRÁCTICA OPCIONAL: Express con ES Modules

### 1. ¿Qué diferencia hay entre un servidor Express y Apache?
*   **Apache (HTTP Server):** Es un servidor de contenido estático o pre-renderizado (HTML, CSS, imágenes). Lee archivos directamente de una carpeta del disco duro y los envía al navegador sin procesar lógica compleja de backend.
*   **Express (Node.js):** Es un framework de backend dinámico. No solo sirve archivos; es una aplicación que ejecuta código JavaScript en el servidor para resolver rutas HTTP personalizadas, realizar consultas complejas a bases de datos (como MySQL), gestionar autenticación de usuarios y devolver respuestas dinámicas o APIs en formato JSON.

### 2. ¿Por qué añadimos "type": "module" al package.json?
Node.js utiliza históricamente el sistema de módulos CommonJS (`const express = require('express')`). Para poder utilizar la sintaxis moderna de ES Modules basada en `import`/`export` en el entorno de ejecución de Node.js en el backend, es obligatorio declarar `"type": "module"` en el archivo de configuración del proyecto.

### 3. ¿Qué ventaja tiene tener el servidor en un contenedor Docker?
Garantiza que la aplicación backend funcione de forma idéntica en cualquier máquina del mundo ("funciona en mi ordenador y funciona en producción"). Empaqueta la versión exacta de Node.js, Express y sus dependencias aislándolas de las configuraciones globales de la máquina del desarrollador, lo que elimina por completo los problemas de compatibilidad y facilita enormemente el despliegue automático en servicios en la nube.
