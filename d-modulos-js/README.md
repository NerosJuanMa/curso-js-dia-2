# Cuadernillo de Prácticas - JavaScript Avanzado e Ionic

## 📋 PRÁCTICA D: JavaScript ES Modules

# OBJETIVO
Practicar import y export para separar el código JavaScript en varios archivos.
Crear una pequeña aplicación web que muestre frases aleatorias usando módulos
ES. Al terminar, entenderás por qué los módulos son fundamentales en proyectos
reales.

#### EJERCCIOS:

### 1. ¿Para qué sirve export? ¿Qué pasa si no lo pones?
`export` se utiliza para marcar funciones, variables, objetos o clases dentro de un módulo para que estén expuestos y disponibles para otros archivos del proyecto. Si no se incluye la palabra clave `export`, el elemento permanecerá estrictamente privado dentro de su propio archivo y cualquier intento de importarlo desde otro módulo lanzará un error de ejecución.

### 2. ¿Para qué sirve import? ¿Cómo se indica la ruta del archivo?
`import` permite traer y utilizar funciones o datos que han sido explícitamente expuestos por otro módulo. La ruta del archivo origen se debe especificar de forma relativa exacta empezando por `./` (mismo directorio) o `../` (directorio superior) e incluyendo obligatoriamente la extensión `.js` al final (ejemplo: `import { frases } from "./data/frases.js";`).

### 3. ¿Por qué usamos type="module" en el HTML?
Se añade el atributo `type="module"` en la etiqueta `<script>` para indicarle explícitamente al navegador web que el archivo JavaScript en cuestión utiliza la sintaxis moderna de módulos (ES Modules). Sin este atributo, el navegador procesará el archivo como un script clásico de JavaScript, desconociendo las palabras clave `import`/`export` y rompiendo la aplicación.

### 4. ¿Qué ventaja tiene separar el código en varios archivos en un proyecto real?
Dividir el código bajo el principio de responsabilidad única (Modularización) mejora drásticamente la escalabilidad y mantenibilidad del proyecto. Permite aislar errores de forma sencilla, facilita la reutilización de funciones y utilidades en diferentes partes de la app, limpia la lectura del código evitando archivos kilométricos y permite que varios desarrolladores trabajen en distintas funcionalidades de forma simultánea sin generar conflictos constantes en Git.

