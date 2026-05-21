# Cuadernillo de Prácticas - JavaScript Avanzado e Ionic

---

## 📋 PRÁCTICA A: Docker (Levantar servicios conocidos)
## Parte 1 — Comprobar que Docker está instalado
docker --version
# o si usas Podman:
podman --version
## Parte 2 — El contenedor de prueba: hello-world
docker run hello-world
## Parte 3 — Levantar un servidor Apache
# Paso 1. Crea una carpeta para el proyecto
mkdir web-apache
cd web-apache
# Paso 2. Crea el archivo index.html con este contenido:
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Mi web en Apache</title>
</head>
<body>
<h1>Mi primera web servida con Docker</h1>
<p>Apache sirve esta página desde un contenedor.</p>
</body>
</html>

# Paso 3. Lanza el contenedor Apache:
docker run --rm -p 8080:80 \ -v "$PWD":/usr/local/apache2/htdocs:ro \ httpd:2.4
# desde la terminal del VScode:
docker run --rm -p 8080:80  -v "${pwd}:/usr/local/apache2/htdocs:ro"  httpd:2.4
# Paso 4. Abre el navegador y visita http://localhost:8080. Deberías ver tu página HTML


#### EJERCCIOS:

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
