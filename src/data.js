// Función para ordenar de la A-Z y de la Z-A

const compareName = (letraA, letraB) => {
  if (letraA.name > letraB.name)
    return 1;
  if (letraA.name < letraB.name)
    return -1;
  return 0;
};
const sortData = (dataPoke, sortByOrder) => {
  let sortNewData = dataPoke.sort(compareName);
  if (sortByOrder === 'AZ') {
    return sortNewData;
  } else if (sortByOrder === 'ZA') {
    return sortNewData.reverse();
  }
  return dataPoke;
};
window.sortData = sortData;

// Función filtrar por tipo 

const filterData = (dataPoke, typePokemon) => {
  const newArrType = [];
  for (let i = 0; i < dataPoke.length; i++) {
    for (let x = 0; x < dataPoke[i].type.length; x++) {
      if (dataPoke[i].type[x] === typePokemon) {
        newArrType.push(dataPoke[i]);
      }
    }
  }
  return newArrType;
};

window.filterData = filterData;

// Función calculo matemático

const calculoPromedio = (dataPoke, pokeType) => {
  return (dataPoke.length / 100) * (pokeType.length);
};
window.calculoPromedio = calculoPromedio;
