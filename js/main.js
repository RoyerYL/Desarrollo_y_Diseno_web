
//------------- DATOS -----------------
const pokemones = [
    {
        id: 1,
        nombre: "Bulbasaur",
        numero: "0001",
        tipo: [4, 8],
        descripcion: "Un pequeño Pokémon que lleva un bulbo sobre el lomo. A medida que crece y evoluciona, la planta de su espalda también se desarrolla.",
        evolucion: "Bulbasaur → Ivysaur → Venusaur",
        imagen: "img/bulbasaur.png"
    },
    {
        id: 3,
        nombre: "Venusaur",
        numero: "0003",
        tipo: [4, 8],
        descripcion: "Su flor ha florecido completamente y absorbe energía solar para fortalecerse.",
        evolucion: "Bulbasaur → Ivysaur → Venusaur",
        imagen: "img/venusaur.png"
    },
    {
        id: 4,
        nombre: "Charmander",
        numero: "0004",
        tipo: [2],
        descripcion: "Se reconoce por su cuerpo anaranjado y la llama que arde en la punta de su cola. Esa llama es una de sus características más distintivas.",
        evolucion: "Charmander → Charmeleon → Charizard",
        imagen: "img/charmander.png"
    },

    {
        id: 6,
        nombre: "Charizard",
        numero: "0006",
        tipo: [2, 10],
        descripcion: "Un poderoso Pokémon con alas que le permiten volar. Puede lanzar intensas llamaradas por su boca.",
        evolucion: "Charmander → Charmeleon → Charizard",
        imagen: "img/charizard.jfif"
    },
    {
        id: 7,
        nombre: "Squirtle",
        numero: "0007",
        tipo: [3],
        descripcion: "Un Pokémon de cuerpo celeste que utiliza su caparazón como protección. Su aspecto recuerda al de una pequeña tortuga.",
        evolucion: "Squirtle → Wartortle → Blastoise",
        imagen: "img/squirtle.png"
    },

    {
        id: 9,
        nombre: "Blastoise",
        numero: "0009",
        tipo: [3],
        descripcion: "Un Pokémon robusto que posee dos cañones de agua en su caparazón, capaces de lanzar potentes chorros.",
        evolucion: "Squirtle → Wartortle → Blastoise",
        imagen: "img/blastoise.png"
    },
    {
        id: 25,
        nombre: "Pikachu",
        numero: "0025",
        tipo: [5],
        descripcion: "Sus mejillas rojas almacenan electricidad. Tiene el cuerpo amarillo, orejas de puntas negras y una cola con forma de rayo.",
        evolucion: "Pikachu → Raichu",
        imagen: "img/pikachu.jfif"
    },
    {
        id: 26,
        nombre: "Raichu",
        numero: "0026",
        tipo: [5],
        descripcion: "La evolución de Pikachu. Almacena grandes cantidades de electricidad y utiliza su cola para descargarla.",
        evolucion: "Pikachu → Raichu",
        imagen: "img/raichu.png"
    },
    {
        id: 39,
        nombre: "Jigglypuff",
        numero: "0039",
        tipo: [1, 18],
        descripcion: "Un Pokémon rosado y redondo, conocido por su canto. Su melodía puede hacer que quienes lo escuchan se queden dormidos.",
        evolucion: "Jigglypuff → Wigglytuff",
        imagen: "img/jigglypuff.png"
    },
    {
        id: 94,
        nombre: "Gengar",
        numero: "0094",
        tipo: [14, 8],
        descripcion: "Gengar es un Pokémon de color violeta con una gran sonrisa. Se caracteriza por esconderse en las sombras y aparecer de forma inesperada.",
        evolucion: "Gastly → Haunter → Gengar",
        imagen: "img/gengar.png"
    }
];


const tipos = [
    {
        id: 1,
        nombre: "Normal",
        debilidades: [7]
    },
    {
        id: 2,
        nombre: "Fuego",
        debilidades: [3, 9, 13]
    },
    {
        id: 3,
        nombre: "Agua",
        debilidades: [5, 4]
    },
    {
        id: 4,
        nombre: "Planta",
        debilidades: [2, 6, 8, 10, 12]
    },
    {
        id: 5,
        nombre: "Eléctrico",
        debilidades: [9]
    },
    {
        id: 6,
        nombre: "Hielo",
        debilidades: [2, 7, 13, 17]
    },
    {
        id: 7,
        nombre: "Lucha",
        debilidades: [10, 11, 18]
    },
    {
        id: 8,
        nombre: "Veneno",
        debilidades: [9, 11]
    },
    {
        id: 9,
        nombre: "Tierra",
        debilidades: [3, 4, 6]
    },
    {
        id: 10,
        nombre: "Volador",
        debilidades: [5, 6, 13]
    },
    {
        id: 11,
        nombre: "Psíquico",
        debilidades: [12, 14, 16]
    },
    {
        id: 12,
        nombre: "Bicho",
        debilidades: [2, 10, 13]
    },
    {
        id: 13,
        nombre: "Roca",
        debilidades: [3, 4, 7, 9, 17]
    },
    {
        id: 14,
        nombre: "Fantasma",
        debilidades: [14, 16]
    },
    {
        id: 15,
        nombre: "Dragón",
        debilidades: [6, 15, 18]
    },
    {
        id: 16,
        nombre: "Siniestro",
        debilidades: [7, 12, 18]
    },
    {
        id: 17,
        nombre: "Acero",
        debilidades: [2, 7, 9]
    },
    {
        id: 18,
        nombre: "Hada",
        debilidades: [8, 17]
    }
];


//------------- ELEMENTOS DEL DOM -----------------

const contenedor = document.querySelector(".tarjetas");
const select = document.getElementById("tipos");

const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");


//------------- FUNCIONES -----------------

// Función para agregar o quitar un pokemon de los favoritos
function addFavorito(pokemonesFavorito, elemento) {
    const favoritos = getFavoritos();

    if (favoritos.includes(pokemonesFavorito)) {
        const index = favoritos.indexOf(pokemonesFavorito);
        favoritos.splice(index, 1);
        elemento.textContent = "🤍";
        elemento.setAttribute("aria-label", "Agregar a favoritos");
    } else {
        favoritos.push(pokemonesFavorito);
        elemento.textContent = "❤️";
        elemento.setAttribute("aria-label", "Quitar de favoritos");
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

//  Función para obtener los pokemones favoritos desde el localStorage
function getFavoritos() {
    const favoritos = localStorage.getItem("favoritos");
    return favoritos ? JSON.parse(favoritos) : [];
}

// Función para mostrar u ocultar el menú en pantallas pequeñas
function toggleMenu() {
    const menu = document.getElementById("menu");
    const oculto = menu.classList.toggle("oculto"); // devuelve true si quedó oculto
    btnMenu.setAttribute("aria-expanded", !oculto); // ahora el atributo sí se actualiza
}

// Renderizamos las tarjetas de los pokemones en el contenedor
function crearTarjetas(pokemones) {
    const favoritos = getFavoritos();
    for (const pokemon of pokemones) {
        // buscamos los tipos en la tabla tipos mediante id
        const nombresTipos = pokemon.tipo
            .map(id => tipos.find(tipo => tipo.id === id)?.nombre)
            .join(" / ");
            const isFavorito = favoritos.includes(pokemon.id);
            
            // validamos si el pokemon es favorito para mostrar el corazon lleno o vacio    
            
        contenedor.insertAdjacentHTML("beforeend", `
        <article class="tarjeta">
            <button class="favorito"
                data-id="${pokemon.id}"
                aria-label="${isFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}">
                ${isFavorito ? "❤️" : "🤍"}
            </button>
            <img src="${pokemon.imagen}" alt="Imagen de ${pokemon.nombre}">
            <h3>${pokemon.nombre}</h3>
            <p><strong>Número:</strong> #${pokemon.numero}</p>
            <p><strong>Tipo:</strong> ${nombresTipos}</p>
            <button class="btnDetalle">Ver más</button>
            <p class="descripcion oculto">${pokemon.descripcion}</p>
            <p><strong>Evoluciones:</strong> ${pokemon.evolucion}</p>
        </article>
    `);
    }
}

//-------------LLamadas a funciones y renderizado -----------------    

function init() {
// Renderizamos las tarjetas de los pokemones en el contenedor
crearTarjetas(pokemones);

// Agregamos un event listener al select para filtrar los pokemones por tipo
select.addEventListener("change", (event) => {
    const tipoSeleccionado = parseInt(event.target.value);

    contenedor.innerHTML = "";

    if (isNaN(tipoSeleccionado)) {
        crearTarjetas(pokemones);
    } else {
        const filtrados = pokemones.filter(pokemon => pokemon.tipo.includes(tipoSeleccionado));
        crearTarjetas(filtrados);
    }
})

// Función para crear las tarjetas de los pokemones filtrados
contenedor.addEventListener("click", (event) => {

    if (!event.target.classList.contains("btnDetalle")) {
        return;
    }

    const tarjeta = event.target.closest(".tarjeta");
    const descripcion = tarjeta.querySelector(".descripcion");

    descripcion.classList.toggle("oculto");

    event.target.textContent =
        descripcion.classList.contains("oculto")
            ? "Ver más"
            : "Ver menos";
});
// Evento para agregar o quitar pokemones de favoritos
contenedor.addEventListener("click", (event) => {

    if (!event.target.classList.contains("favorito")) {
        return;
    }

    const idPokemon = Number(event.target.dataset.id);

    addFavorito(idPokemon, event.target);

});
// Renderizamos las opciones del select con los tipos de pokemones
for (const tipo of tipos) {
    select.insertAdjacentHTML(
        "beforeend",
        `<option value="${tipo.id}">${tipo.nombre}</option>`)
}

// Agregamos un event listener al botón del menú para mostrar u ocultar el menú en pantallas pequeñas
btnMenu.addEventListener("click", toggleMenu);
}

init();