const dataPoke = POKEMON.pokemon;
const toSecondPage = document.getElementById('secondPage');
const toThirdPage = document.getElementById('thirdPage');
const tofourthPage = document.getElementById('fourthPage');
const boxPokemons = document.getElementById('boxPokemons');
const boxTypePokemons = document.getElementById(' boxTypePokemons');
const listPokemon = document.getElementById('list-Pokemon');
const boxAllPokemon = document.getElementById('boxAllPokemon');
const Ascendente = document.getElementById('Ascendente');
const Descendente = document.getElementById('Descendente');
const typePokemons = document.getElementById('typePokemons');
const porcentaje = document.getElementById('porcentaje');

toSecondPage.addEventListener('click', functionA);
function functionA() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('bienvenidos').style.display = 'none';
  document.getElementById('second').style.display = 'block';
  boxPokemons.innerHTML = '';
}

toThirdPage.addEventListener('click', functionB);
function functionB() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('bienvenidos').style.display = 'none';
  document.getElementById('third').style.display = 'block';
}

tofourthPage.addEventListener('click', functionC);
function functionC() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('bienvenidos').style.display = 'none';
  document.getElementById('fourth').style.display = 'block';
}

// Muestra a todos los pokemons ordenados por evolución

listPokemon.addEventListener('click', () => {
  for (let i = 0; i < dataPoke.length; i++) {
    boxAllPokemon.innerHTML += `
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

// Muestra a los pokemons por orden alfabético

const boxOrderPokemons = (dataPoke) => {
  for (let i = 0; i < dataPoke.length; i++) {
    boxPokemons.innerHTML += `
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
boxOrderPokemons(dataPoke);

// Ordenar desde la A hacia la Z

Ascendente.addEventListener('click', function() {
  boxPokemons.innerHTML = '';
  boxOrderPokemons(sortData(dataPoke, 'AZ'));
});

// Ordenar desde la Z hacia la A

Descendente.addEventListener('click', function() {
  boxPokemons.innerHTML = '';
  boxOrderPokemons(sortData(dataPoke, 'ZA'));
});

// Muestra a los pokemons por tipo

const boxFilterPokemons = (dataPoke) => {
  for (let i = 0; i < dataPoke.length; i++) {
    boxTypePokemons.innerHTML += `
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

typePokemons.addEventListener('change', () => {
  boxTypePokemons.innerHTML = '';
  boxFilterPokemons(filterData(dataPoke, typePokemons.value));
});

// Calculo Matemático

const clikCalculo = () => {
  const nuevoPromedio = calculoPromedio(dataPoke, pokeType);
  return typePokemons.value = nuevoPromedio;
};

porcentaje.addEventListener('click', clikCalculo);