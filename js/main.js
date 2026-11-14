
let pokemones = [
    {
        nombre: "Bulbasaur",
        numero: "0001",
        tipo: "Planta / Veneno",
        descripcion: "Un pequeño Pokémon que lleva un bulbo sobre el lomo. A medida que crece y evoluciona, la planta de su espalda también se desarrolla.",
        evolucion: "Bulbasaur → Ivysaur → Venusaur",
        imagen: "img/bulbasaur.png"
    },
    {
        nombre: "Charmander",
        numero: "0004",
        tipo: "Fuego",
        descripcion: "Se reconoce por su cuerpo anaranjado y la llama que arde en la punta de su cola. Esa llama es una de sus características más distintivas.",
        evolucion: "Charmander → Charmeleon → Charizard",
        imagen: "img/charmander.png"
    },
    {
        nombre: "Squirtle",
        numero: "0007",
        tipo: "Agua",
        descripcion: "Un Pokémon de cuerpo celeste que utiliza su caparazón como protección. Su aspecto recuerda al de una pequeña tortuga.",
        evolucion: "Squirtle → Wartortle → Blastoise",
        imagen: "img/squirtle.png"
    },
    {
        nombre: "Pikachu",
        numero: "0025",
        tipo: "Eléctrico",
        descripcion: "Sus mejillas rojas almacenan electricidad. Tiene el cuerpo amarillo, orejas de puntas negras y una cola con forma de rayo.",
        evolucion: "Pikachu → Raichu",
        imagen: "img/pikachu.jfif"
    },
    {
        nombre: "Jigglypuff",
        numero: "0039",
        tipo: "Normal/Hada",
        descripcion: "Un Pokémon rosado y redondo, conocido por su canto. Su melodía puede hacer que quienes lo escuchan se queden dormidos.",
        evolucion: "Jigglypuff → Wigglytuff",
        imagen: "img/jigglypuff.png"
    },
    {
        nombre: "Gengar",
        numero: "0094",
        tipo: "Fantasma/Veneno",
        descripcion: "Gengar es un Pokémon de color violeta con una gran sonrisa. Se caracteriza por esconderse en las sombras y aparecer de forma inesperada.",
        evolucion: "Gastly → Haunter → Gengar",
        imagen: "img/gengar.png"
    }
];

let evoluciones = [
    {
        nombre: "Venusaur",
        descripcion: "Una gran flor sobre el lomo.",
        imagen: "img/venusaur.png"
    },
    {
        nombre: "Charizard",
        descripcion: "Alas y una cola con fuego.",
        imagen: "img/charizard.jfif"
    },
    {
        nombre: "Blastoise",
        descripcion: "Un caparazón equipado con dos cañones.",
        imagen: "img/blastoise.png"
    },
    {
        nombre: "Raichu",
        descripcion: "La evolución de Pikachu.",
        imagen: "img/raichu.png"
    }
];


let contenedor = document.querySelector(".tarjetas");

for (let pokemon of pokemones) {
    contenedor.innerHTML += `
        <article class="tarjeta">
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
            <h3>${pokemon.nombre}</h3>
            <p><strong>Número:</strong> #${pokemon.numero}</p>
            <p><strong>Tipo:</strong> ${pokemon.tipo}</p>
            <p>${pokemon.descripcion}</p>
            <p><strong>Evoluciones:</strong> ${pokemon.evolucion}</p>
        </article>
    `;
}
