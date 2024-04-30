const nombrePokemon = window.location.search.split('?nombre=')[1];
const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

const mostrarDetalle = (pokemon) => {
    const detallePokemon = document.getElementById("detallePokemon");

    const h2 = document.createElement('h2');
    h2.textContent = pokemon.name;
    detallePokemon.appendChild(h2);

    const img = document.createElement('img');
    img.src = pokemon.sprites.other.dream_world.front_default;
    img.alt = pokemon.name;

    const divCol = document.createElement('div');
    divCol.classList.add('col-12', 'col-sm-6');
    divCol.appendChild(img);

    const divDetalles = document.createElement('div');
    divDetalles.classList.add('col-12', 'col-sm-6', 'detalles');
    
    const h3Altura = document.createElement('h3');
    h3Altura.textContent = 'Altura:';
    divDetalles.appendChild(h3Altura);

    const pAltura = document.createElement('p');
    pAltura.textContent = pokemon.height;   
    divDetalles.appendChild(pAltura);

    const h3Peso = document.createElement('h3');
    h3Peso.textContent = 'Peso:';
    divDetalles.appendChild(h3Peso);

    const pPeso = document.createElement('p');
    pPeso.textContent = pokemon.weight;
    divDetalles.appendChild(pPeso);

    const h3Habilidades = document.createElement('h3');
    h3Habilidades.textContent = 'Habilidades:';
    divDetalles.appendChild(h3Habilidades);

    const ulHabilidades = document.createElement('ul');
    pokemon.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.textContent = ability.ability.name;
        ulHabilidades.appendChild(li);
    });
    divDetalles.appendChild(ulHabilidades);

    const h3Movimientos = document.createElement('h3');
    h3Movimientos.textContent = 'Movimientos:';
    divDetalles.appendChild(h3Movimientos);

    const ulMovimientos = document.createElement('ul');
    pokemon.moves.forEach(move => {
        const li = document.createElement('li');
        li.textContent = move.move.name;
        ulMovimientos.appendChild(li);
    });
    divDetalles.appendChild(ulMovimientos);

    detallePokemon.appendChild(document.createElement('div')); 
    detallePokemon.lastChild.classList.add('d-sm-flex'); 
    
    detallePokemon.lastChild.appendChild(divCol);
    detallePokemon.lastChild.appendChild(divDetalles);
};

fetch(url)
    .then(data => data.json())
    .then(results => {
        mostrarDetalle(results);
    });
