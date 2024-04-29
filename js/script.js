const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?offset=200&limit=100';

const mostrarTarjeta = (pokemon) => {
    const listaPokemon = document.getElementById("listaPokemon");
    const a = document.createElement('a');
    a.addEventListener('click', () => {
        mostrarDetalle(pokemon.name);
    });

    const titulo = document.createElement('h2');
    titulo.innerText = pokemon.name;
    a.appendChild(titulo);

    listaPokemon.appendChild(a);
};

const mostrarDetalle = (nombre) => {
    window.location.href = `detalle.html?nombre=${nombre}`;
};

const id_ubicacion = +window.location.href.split('?id=')[1];

fetch(URL_ENDPOINT)
    .then(data => data.json())
    .then(result => {
        const results = result.results.slice(0, 100);
        results.forEach(element => {
            mostrarTarjeta(element);
        });
    });
