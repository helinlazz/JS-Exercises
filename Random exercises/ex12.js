function trovaNumeroGrande(numeri) {
  let numeroPiuGrande = 0;
  for (let i = 0; i < numeri.length; i++) {
    let numero = numeri[i];
    if (numero > numeroPiuGrande) {
      numeroPiuGrande = numero;
    }
  }
  return numeroPiuGrande;
}

let numbers = [1, 23, 45, 12, 4, 78, 1];
let result = trovaNumeroGrande(numbers);
console.log(result);
