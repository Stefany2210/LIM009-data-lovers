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
      <p>Egg: ${dataPok[i].egg}</p>
      <p>Candy: ${dataPok[i].candy_count}</p>
    </div>
  `;
  }
});

//para ordenar los nombres en forma ascendente
/*const selectAz = document.getElementById("az");
const selectZa = document.getElementById("za");
const orderPokemon = document.getElementById("order-Pokemon");
selectAz.addEventListener("click",order)*/
 
  



 //console.log(sort(orderPokemon));
 
 /*const namePok = sortData(dataPok,"asc")

console.log(namePok[i].name);*/





//result.innerHTML = pintar(dataPok);
//addPokemon(order(POKEMON.pokemon, []));