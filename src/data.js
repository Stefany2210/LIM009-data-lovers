// Función para ordenar de la A-Z y de la Z-A

const sortData = (data, sortOrder) => {
  const order = data.sort((ab, bc) => { 
    if (ab.name > bc.name) {
      return 1;
    } else if (ab.name < bc.name) {
      return -1;
    }  
  });
  if (sortOrder === 'Asc') {
    return order;
  } else if (sortOrder === 'Desc') {
    return order.reverse();
  }
};

// window.orderData = orderData

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


const calculate = (dataPoke, user) => {
  return dataPoke.length - user;
};
window.calculate = calculate;

window.pokemon = { 
  filterData: filterData,
  sortData: sortData,
  calculate: calculate
};
