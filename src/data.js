// const dataPok = POKEMON.pokemon
// const arrValues = Object.values(dataPok)
//  for(let x = 0; x < arrValues.length; x++) {
// console.log(arrValues[x].type);
// if(arrValues[x].type[0]==='Fire'){
//   console.log(arrValues[x]);
// }
// }

// const order = (dataPok, alphabet) => {
//   console.log(dataPok)
//   for (let x = 0; x < dataPok.length; x++) {
//     alphabet.push(dataPok[x].name);
//   }
//   const result = alphabet.sort();
//   return result;
// }

// const filter = () => {

//   for (let x = 0; x < dataPok.length; x++) {
//     alphabet.push(dataPok[x].name);
//   }
// }
// //console.log()
// window.order = order;

const order = (dataPok, alphabet) => {
 
  for (let x = 0; x < dataPok.length; x++) {
    alphabet.push(dataPok[x].name);
  }
  console.log(alphabet)
  const result = alphabet.sort();
  return result;
}

const general = () => {
  const orderData = order(dataPOk, []);
  for (let x = 0; x < orderData.length; x++){
    for (let a = 0; a < dataPok.length; a++) {
      if (orderData[x] === dataPok[a].name) {
      //  console.log(dataPok[a]);
        const result1 = dataPok.sort();

        return result1;
      }
  }
  }
}
//console.log()
window.order = order;
