MI POKÉDEX — TRABAJO PRÁCTICO INTEGRADOR 2
Diseño y Desarrollo Web — UADE — 2026

DESCRIPCIÓN
Mi Pokédex es una página web que presenta información sobre distintos Pokémon: imagen, nombre, número, tipo, descripción y cadena evolutiva. Esta segunda entrega incorpora JavaScript para cargar los datos desde arrays, generar tarjetas automáticamente y permitir interacciones con el contenido.

ESTRUCTURA DEL PROYECTO
- index.html: estructura semántica de la página y contenedores para las tarjetas.
- styles.css: estilos visuales y distribución de los elementos.
- js/main.js: arrays, generación dinámica, funciones y eventos de JavaScript.
- img/: imágenes utilizadas por la Pokédex.
- README.txt: descripción e instrucciones de prueba.
- integrantes.txt: nombres de integrantes.

1. Arrays de datos (IMPLEMENTADO)
El array "pokemones" contiene seis objetos: Bulbasaur, Charmander, Squirtle, Pikachu, Jigglypuff y Gengar. Cada uno incluye nombre, número, tipo, descripción, evolución y ruta de imagen.
El array "evoluciones" contiene cuatro objetos: Venusaur, Charizard, Blastoise y Raichu, con nombre, descripción y ruta de imagen.

2. Generación dinámica del DOM (IMPLEMENTADO)
El archivo js/main.js busca el contenedor con la clase "tarjetas" usando document.querySelector(). Recorre el array "pokemones" con for...of e inserta las tarjetas HTML mediante insertAdjacentHTML("beforeend", ...). Por eso, las seis tarjetas principales no están escritas individualmente en index.html.
