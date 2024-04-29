const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=100';

const mostrarTarjeta = (ubicacion) => {
    const listaPokemon = document.getElementById("listaPokemon")
    const li = document.createElement('li');
    li.addEventListener('click', () => {
        mostrarDetalle(ubicacion.id)
    })

    const titulo = document.createElement('h3');
    titulo.innerText = ubicacion.name;
    li.appendChild(titulo);

    const descripcion = document.createElement('p');
    descripcion.innerText = ubicacion.dimension;
    li.appendChild(descripcion);

    listaPokemon.appendChild(li);
}

fetch(apiURL)
    .then(data => data.json())
    .then(result => {
        const results = result.results.slice(0, 15);
        results.forEach(element => {
            mostrarTarjeta(element);
        });
    })