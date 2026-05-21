# Cuadernillo de Prácticas - JavaScript Avanzado e Ionic


## 📋 PRÁCTICA OPCIONAL: Express con ES Modules

#### EJERCCIOS:

### 1. ¿Qué diferencia hay entre un servidor Express y Apache?
*   **Apache (HTTP Server):** Es un servidor de contenido estático o pre-renderizado (HTML, CSS, imágenes). Lee archivos directamente de una carpeta del disco duro y los envía al navegador sin procesar lógica compleja de backend.
*   **Express (Node.js):** Es un framework de backend dinámico. No solo sirve archivos; es una aplicación que ejecuta código JavaScript en el servidor para resolver rutas HTTP personalizadas, realizar consultas complejas a bases de datos (como MySQL), gestionar autenticación de usuarios y devolver respuestas dinámicas o APIs en formato JSON.

### 2. ¿Por qué añadimos "type": "module" al package.json?
Node.js utiliza históricamente el sistema de módulos CommonJS (`const express = require('express')`). Para poder utilizar la sintaxis moderna de ES Modules basada en `import`/`export` en el entorno de ejecución de Node.js en el backend, es obligatorio declarar `"type": "module"` en el archivo de configuración del proyecto.

### 3. ¿Qué ventaja tiene tener el servidor en un contenedor Docker?
Garantiza que la aplicación backend funcione de forma idéntica en cualquier máquina del mundo ("funciona en mi ordenador y funciona en producción"). Empaqueta la versión exacta de Node.js, Express y sus dependencias aislándolas de las configuraciones globales de la máquina del desarrollador, lo que elimina por completo los problemas de compatibilidad y facilita enormemente el despliegue automático en servicios en la nube.
