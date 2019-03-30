// Función para ordenar de la A-Z y de la Z-A

function orderData (a, b) {
      a = a.name;
      b = b.name;
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    }
  };
  window.orderData = orderData;

// Función filtrar por tipo 

const filterData = (dataPoke, typePokemon) => {
  const newArrType = [];
  for (let i = 0; i < dataPoke.length; i++) {
    for (let x = 0; x < dataPoke[i].type.length; x++) {
      if (dataPoke[i].type[x] === typePokemon) {
        newArrType.push(dataPoke[i])
      }
    }
  }
  return newArrType;
};
window.filterData = filterData;