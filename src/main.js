const dataPok = POKEMON.pokemon
const arrValues = Object.values(dataPok)
const result = document.getElementById('result');
const addPokemon = (pokemon) => {
  //console.log(pokemon)
  for (let i = 0; i < pokemon.length; i++) {
    result.innerHTML += `
    <div>
      <figure>
      <img src="${pokemon[i].img}" alt="perfil">
      </figure>
      <p>Nombre: ${pokemon[i].name}</p>
      <p>Tipo: ${pokemon[i].type}</p>
      
    </div>
  `;
  }
}
addPokemon(arrValues)


//addPokemon(order(POKEMON.pokemon, []));
