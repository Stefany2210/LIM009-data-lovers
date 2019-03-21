// const dataPok = POKEMON.pokemon
// const arrValues = Object.values(dataPok)
//  for(let x = 0; x < arrValues.length; x++) {
// console.log(arrValues[x].type);
// if(arrValues[x].type[0]==='Fire'){
//   console.log(arrValues[x]);
// }
// }

const order = (dataPok, alphabet) => {
  console.log(dataPok)
  for (let x = 0; x < dataPok.length; x++) {
    alphabet.push(dataPok[x].name);
  }
  const result = alphabet.sort();
  return result;
}

const filter = () => {
  
  for (let x = 0; x < dataPok.length; x++) {
    alphabet.push(dataPok[x].name);
  }
}
//console.log()
window.order = order;
