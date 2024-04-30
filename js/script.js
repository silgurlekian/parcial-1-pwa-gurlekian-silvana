const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?offset=200&limit=100';

const mostrarTarjeta = (pokemon) => {
    const listaPokemon = document.getElementById("listaPokemon");
    const li = document.createElement('li');
    li.addEventListener('click', () => {
        mostrarDetalle(pokemon.name);
    });

    const imagen = document.createElement('img');
    imagen.src = pokemon.sprites.front_default;
    imagen.alt = pokemon.name;
    li.appendChild(imagen);

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

const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("listaPokemon");

const obtenerPokemones = () => {
    fetch(URL_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            searchResult.innerHTML = "";
            const results = data.results.slice(0, 100);
            results.forEach(result => {
                fetch(result.url)
                    .then(response => response.json())
                    .then(pokemon => {
                        if (pokemon.name.toLowerCase().includes(searchInput.value.trim().toLowerCase())) {
                            mostrarTarjeta(pokemon);
                        }
                    });
            });
        });
};

searchInput.addEventListener("input", obtenerPokemones);
obtenerPokemones();