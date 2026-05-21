# Cuadernillo de Prácticas - JavaScript Avanzado e Ionic

## 📋 PRÁCTICA B: Git y GitHub

# Paso 1 — Cuenta de GitHub
Si no tienes cuenta, ve a https://github.com y regístrate. Elige un nombre de usuario
profesional: lo usarás en tu CV y en entrevistas de trabajo.
# Paso 2 — Crear el repositorio en GitHub
Desde la web de GitHub, crea un repositorio nuevo con el nombre curso-js-dia-2. Puedes
elegir si es público o privado (pregunta al profesor). No marques la opción de añadir README
por ahora, para evitar conflictos.
# Paso 3 — Inicializar Git en tu carpeta
Desde la terminal, navega a la carpeta de tu proyecto y ejecuta:
# Entrar en la carpeta del proyecto
cd mi-proyecto
# Inicializar Git
git init
# Ver el estado actual
git status
# Paso 4 — Primer commit
# Añadir todos los archivos al «área de preparación»
git add .
# Crear el commit con un mensaje descriptivo
git commit -m "Primera version de la practica"
# Paso 5 — Conectar y subir a GitHub
# Asegurarse de que la rama principal se llama 'main'
git branch -M main
# Conectar con tu repositorio remoto en GitHub
git remote add origin URL_DEL_REPOSITORIO
# Subir los cambios por primera vez (-u guarda la conexión)
git push -u origin main


#### EJERCCIOS:

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

