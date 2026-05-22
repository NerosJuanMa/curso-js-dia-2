import express from 'express';
import { frases } from './data/frases.js';
import { elegirAleatorio } from './utils/random.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const frase = elegirAleatorio(frases);
  
  res.send(`
    <!DOCTYPE html>
    <html lang='es'>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Frases del Día</title>
      <style>
        :root {
          --bg-principal: #0f172a;      
          --bg-tarjeta: #1e293b;         
          --texto-claro: #f8fafc;        
          --texto-mutado: #94a3b8;       
          --color-primario: #38bdf8;     
          --color-primario-hover: #0ea5e9;
          --fuente: 'Segoe UI', Roboto, system-ui, sans-serif;
          --sombra: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: var(--fuente);
          background-color: var(--bg-principal);
          color: var(--texto-claro);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .cabecera {
          text-align: center;
          padding: 3rem 1.5rem 1.5rem 1.5rem;
        }

        .cabecera h1 {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .cabecera p {
          color: var(--texto-mutado);
          font-size: 1.1rem;
        }

        main {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .contenedor-frase {
          background-color: var(--bg-tarjeta);
          border: 1px solid #334155;
          border-radius: 20px;
          padding: 3.5rem 2.5rem 2.5rem 2.5rem;
          width: 100%;
          max-width: 600px;
          text-align: center;
          box-shadow: var(--sombra);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        #frase {
          font-size: 1.35rem;
          font-style: italic;
          line-height: 1.7;
          color: #e2e8f0;
          position: relative;
        }

        #frase::before {
          content: "“";
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 6rem;
          color: rgba(56, 189, 248, 0.1);
          font-family: Georgia, serif;
        }

        #boton-frase {
          background-color: var(--color-primario);
          color: #0f172a;
          border: none;
          padding: 0.85rem 1.75rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          align-self: center;
          text-decoration: none; /* Elimina la línea de enlace */
          transition: background-color 0.2s ease, transform 0.1s ease;
        }

        #boton-frase:hover {
          background-color: var(--color-primario-hover);
          transform: translateY(-2px);
        }

        #boton-frase:active {
          transform: translateY(0) scale(0.98);
        }

        footer {
          text-align: center;
          padding: 2rem;
        }

        footer p {
          color: var(--texto-mutado);
          font-size: 0.875rem;
        }
      </style>
    </head>
    <body>

      <header class="cabecera">
        <h1>Frases Inspiradoras</h1>
        <p>Tu dosis diaria de motivación y código</p>
      </header>

      <main>
        <section class="contenedor-frase">
          <p id="frase">${frase}</p>
          <!-- Usamos una etiqueta <a> con id de botón para recargar la ruta raíz -->
          <a href="/" id="boton-frase">Siguiente frase</a>
        </section>
      </main>

      <footer>
        <p>Curso de JavaScript - Día 2</p>
      </footer>

    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
