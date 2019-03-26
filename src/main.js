const dataPok = POKEMON.pokemon
const arrValues = Object.values(dataPok)
const result = document.getElementById('result');
const addPokemon = (pokemon) => {
<<<<<<< HEAD
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
=======
//  console.log(pokemon)
  for (let i = 0; i < pokemon.length; i++) {
    result.innerHTML += `
    <div>
      <p>Nombre: ${pokemon[i].name}</p>
      <img src="${pokemon[i].img}" alt="perfil">
      </div>
>>>>>>> 991037d373872ed59783df8953db7a5cc3050981
  `;
  }
}
addPokemon(arrValues)


//addPokemon(order(POKEMON.pokemon, []));
