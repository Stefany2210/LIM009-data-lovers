/*funcion para ordenar en forma ascendente*/
const dataPk= POKEMON.pokemon
function order(a,b){
  if(a.name > b.name)
    return 1;
  else if(a.name < b.name)
    return -1;
  else if (a === b)
  return 0;
};
return data.sort(order)

const arrValues = Object.values(dataPokes)
const filterPok = arrValues.filter(function(type) {
  return (type.type[0] === "hielo")
});

console.log();














/*const order = (dataPok, alphabet) => {
  //console.log(dataPok)
  for (let x = 0; x < dataPok.length; x++) {
    alphabet.push(dataPok[x].name);
  }
  //console.log(alphabet)
  const result = alphabet.sort();
  //console.log(dataPok[x].name);
  return result;
}*/




/*const sortData = (data, sortOrder,sortBY) => {
    //if (sortBY === "name" && sortOrder === "asc") {
      //let az= data.sort(ascendente);
      data.sort (a,b) {
        a= a.name()
        b = b.name()
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1
        }else if (a === b) {
          return 0;
        }

      }
      console.log(sort);
      
    }//
}//

    function ascendente (a,b) {
      if (sortOrder === "asc") {
       let az= data.sort(ascendente);
        return az;
      }
      
    }
    
    window.sortData = sortData;*/


    
  
  
  

  
  const dataPokes = POKEMON.pokemon

  




































/*const filter = () => {
  for (let x = 0; x < dataPok.length; x++) {
    alphabet.push(dataPok[x].type);
  } 
}
console.log(dataPok[x]);*/

//window.order = order;*/
