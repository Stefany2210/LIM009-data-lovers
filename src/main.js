//para mostrar el listado de Pokemons
const dataPok = POKEMON.pokemon
const result = document.getElementById('result');
const listPokemon = document.getElementById("list-Pokemon");
listPokemon.addEventListener("click",()=>{
  for (let i = 0; i <dataPok.length; i++) {
    result.innerHTML += `
    <div class="pokemon">
      <figure>
      <img src="${dataPok[i].img}" alt="perfil">
      </figure>
      <p>Nombre: ${dataPok[i].name}</p>
      <p>Tipo: ${dataPok[i].type}</p>
      
    </div>
  `;
  }
});

const orderPokemon = document.getElementById("order-Pokemon");
orderPokemon.addEventListener("click",() =>{
  

})

//addPokemon(order(POKEMON.pokemon, []));
