const toSecondPage = document.getElementById('secondPage');
// const secondView = document.getElementById('second');
// const thirdView = document.getElementById('third');
const toThirdPage = document.getElementById('thirdPage');

toSecondPage.addEventListener('click', functionA);
function functionA() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('second').style.display = 'block';
  showPokemons.innerHTML = '';
}

toThirdPage.addEventListener('click', functionB);
function functionB() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('third').style.display = 'block';
  showTypePokemons.innerHTML = '';
}

const listPokemon = document.getElementById('list-Pokemon');
const dataPoke = POKEMON.pokemon;
const showAllPokemons = document.getElementById('boxAllPokemon');


// toFourthPage.addEventListener('click', functionC);
// function functionC() {
//     document.getElementById("first").style.display = "none";
//     document.getElementById("fourth").style.display = "block";
//     calcular.innerHTML = "";
// }


// Muestra a todos los pokemons

listPokemon.addEventListener('click', () => {
  for (let i = 0; i < dataPoke.length; i++) {
    showAllPokemons.innerHTML += `
        <div class="card">
            <figure>
             <img src="${dataPoke[i].img}" alt="perfil">
            </figure>
        <div class="container"> 
         <p>Nombre: ${dataPoke[i].name}</p>
         <p>Tipo: ${dataPoke[i].type}</p>
         <p>Egg: ${dataPoke[i].egg}</p>
         <p>Candy: ${dataPoke[i].candy_count}</p>
        </div>
        </div>
        `;
  }
});


// const orderAZ = document.getElementById("AZ");
// const orderZA = document.getElementById("ZA");
const showPokemons = document.getElementById('boxPokemons');

// Muestra a los pokemons por orden alfabético

const boxOrderPokemons = (dataPoke) => {
  for (let i = 0; i < dataPoke.length; i++) {
    showPokemons.innerHTML += `
       <div class="card">
       <figure>
       <img src= "${dataPoke[i].img}">
       </figure>
       <div class="container">
       <p>Número: ${dataPoke[i].num}</p> 
       <p>Nombre: ${dataPoke[i].name}</p>
       </div>
       </div>
      ` ;
  }
};

boxOrderPokemons(dataPoke);
const orderPokemons = document.getElementById('selector');
orderPokemons.addEventListener('change', () => {
  showPokemons.innerHTML = '';
  const orderPoke = pokemon.sortData(dataPoke, orderPokemons.value);
  console.log(orderPoke);
  boxOrderPokemons(orderPoke);
});

toSecondPage.addEventListener('click', boxOrderPokemons);

// Ordenar desde la A hacia la Z

/* AZ.addEventListener("click", function () {
    showPokemons.innerHTML = '';
    boxOrderPokemons(dataPoke.sort(orderData));
});

// Ordenar desde la Z hacia la A

ZA.addEventListener("click", function () {
    showPokemons.innerHTML = '';
    boxOrderPokemons(dataPoke.sort(orderData).reverse());
});*/

// Muestra a los pokemons por tipo

const boxFilterPokemons = (dataPoke) => {
  for (let i = 0; i < dataPoke.length; i++) {
    showTypePokemons.innerHTML += `
       <div class="card">
       <figure>
       <img src= "${dataPoke[i].img}">
       </figure>
       <div class="container"> 
       <p>Nombre: ${dataPoke[i].name}</p>
       </div>
       </div>
      ` ;
  }
};
boxFilterPokemons(dataPoke);

// Pokemons por tipo 

const typePokemons = document.getElementById('typePokemon');
const showTypePokemons = document.getElementById('showTypePokemons');

typePokemons.addEventListener('change', () => {
  showTypePokemons.innerHTML = '';
  boxFilterPokemons(window.pokemon.filterData(dataPoke, typePokemons.value));
});

// muestra el calculo matemático

/* const calculatePoke = document.getElementById("CalculatePokemonGo");
const resulteCalculate = document.getElementById("calculatePk");

calculatePoke.addEventListener("click", (calculatePokemon) => {
    calculatePokemon.innerHTML = '';
    resulteCalculate(calculate(dataPoke, user))
});*/


