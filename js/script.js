const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?offset=200&limit=100';

const mostrarTarjeta = (pokemon) => {
    const listaPokemon = document.getElementById("listaPokemon");
    const li = document.createElement('li');
    li.addEventListener('click', () => {
        mostrarDetalle(pokemon.name);
    });

    const imagen = document.createElement('img');
    imagen.src = pokemon.sprites.front_default; // Establecer la URL de la imagen
    imagen.alt = pokemon.name; // Establecer el texto alternativo de la imagen
    li.appendChild(imagen); // Agregar la imagen al elemento de la lista

    const titulo = document.createElement('h2');
    titulo.innerText = pokemon.name;
    li.appendChild(titulo);

    const link = document.createElement('a');
    link.innerText = 'Ver Pokemon';
    li.appendChild(link);

    listaPokemon.appendChild(li);
};

const mostrarDetalle = (nombre) => {
    window.location.href = `detalle.html?nombre=${nombre}`;
};

fetch(URL_ENDPOINT)
    .then(data => data.json())
    .then(result => {
        const results = result.results.slice(0, 100);
        results.forEach(element => {
            fetch(element.url) // Obtener los detalles de cada Pokémon
                .then(response => response.json())
                .then(pokemon => {
                    mostrarTarjeta(pokemon);
                })
        });
    })