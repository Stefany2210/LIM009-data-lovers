// const dataPok = POKEMON.pokemon
// const arrValues = Object.values(dataPok)
// const result = document.getElementById('result');
// const addPokemon = (pokemon) => {
//   for (let i = 0; i < pokemon.length; i++) {
//     result.innerHTML += `
//     <div>
//       <p>Nombre: ${pokemon[i].name}</p>
//       <p>Tipo: ${pokemon[i].type}</p>
//       <figure>
//         <img src="${pokemon[i].img}" alt="perfil">
//       </figure>
//     </div>
//   `;
//   }
// }
// addPokemon(arrValues);

const result = document.getElementById('result');
const addPokemon = (pokemon) => {
//  console.log(pokemon)
  for (let i = 0; i < pokemon.length; i++) {
    result.innerHTML += `
    <div>
      <p>Nombre: ${pokemon[i].name}</p>
      <img src="${pokemon[i].img}" alt="perfil">
      </div>
  `;
  }
}
addPokemon(order(POKEMON.pokemon, []));
