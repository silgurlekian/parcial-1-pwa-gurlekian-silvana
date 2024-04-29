const nombrePokemon = window.location.search.split('?nombre=')[1];
const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

const mostrarDetalle = (pokemon) => {
    const detallePokemon = document.getElementById("detallePokemon");
    detallePokemon.innerHTML = `
        <h2>${pokemon.name}</h2>
        <div class="d-flex">
            <div class="col-6">
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
            <div class="col-6 detalles">
                <h3>Altura:</h3> 
                <p>${pokemon.height}</p>
                <h3>Peso:</h3> 
                <p>${pokemon.weight}</p>
                <h3>Habilidades:</h3>
                <ul>
                    ${pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
                </ul>
                <h3>Movimientos:</h3>
                <ul>
                    ${pokemon.moves.map(move => `<li>${move.move.name}</li>`).join('')}
                </ul>
            </div>
        </div>       
    `;
};

fetch(url)
    .then(data => data.json())
    .then(results => {
        mostrarDetalle(results);
    })