MI POKÉDEX — TRABAJO PRÁCTICO INTEGRADOR 2
Diseño y Desarrollo Web — UADE — 2026

DESCRIPCIÓN
Mi Pokédex es una página web que presenta información sobre distintos Pokémon: imagen, nombre, número, tipo, descripción y cadena evolutiva.

Esta segunda entrega incorpora JavaScript para cargar información desde arrays, generar contenido dinámicamente, interactuar con los elementos de la página y almacenar las preferencias del usuario mediante localStorage.

ESTRUCTURA DEL PROYECTO
- index.html: estructura semántica de la página y contenedores para las tarjetas.
- styles.css: estilos visuales y distribución de los elementos.
- js/main.js: arrays, generación dinámica, funciones y eventos de JavaScript.
- img/: imágenes utilizadas por la Pokédex.
- README.txt: descripción e instrucciones de prueba.
- integrantes.txt: nombres de integrantes.

1. Arrays de datos (IMPLEMENTADO)
pokemones: contiene seis Pokémon con nombre, número, tipos, descripción, evolución e imagen.

tipos: contiene los diferentes tipos de Pokémon y sus debilidades.

2. Generación dinámica del DOM (IMPLEMENTADO)
El archivo js/main.js busca el contenedor con la clase "tarjetas" usando document.querySelector(). Recorre el array "pokemones" con for...of e inserta las tarjetas HTML mediante insertAdjacentHTML("beforeend", ...). Por eso, las seis tarjetas principales no están escritas individualmente en index.html.

3. Interacciones con eventos
Se implementaron las siguientes funcionalidades:
- Filtro por tipo: permite seleccionar un tipo y visualizar únicamente los Pokémon correspondientes.
- Detalles: permite mostrar u ocultar la descripción de cada Pokémon.
- Favoritos: permite agregar o quitar Pokémon de una lista mediante un botón de corazón.
- Menú hamburguesa: permite mostrar u ocultar la navegación en pantallas pequeñas.
Las interacciones se gestionan mediante addEventListener().

4. Persistencia con localStorage
Se utiliza localStorage para almacenar los Pokémon favoritos del usuario.
- addFavorito()
- getFavoritos()

TECNOLOGÍAS UTILIZADAS
- HTML5
- CSS3
- Flexbox
- JavaScript
- DOM
- Eventos
- localStorage