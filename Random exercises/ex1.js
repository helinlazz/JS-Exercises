/* Scrivi una funzione che prende in input un array di numeri e restituisce la somma di tutti gli elementi. */

function calcolaSomma(arrayDiNumeri) {
  let somma1 = 0;
  for (i = 0; i < arrayDiNumeri.length; i++) {
    somma1 = somma1 + arrayDiNumeri[i];
  }
  return somma1;
}
let numeri1 = [1, 2, 3, 4, 5, 6];
let risultato1 = calcolaSomma(numeri1);
console.log(risultato1);

/* Scrivi una funzione che prende in input un array di stringhe e restituisce la stringa più lunga presente nell'array. */

function trovaStringaPiuLunga(arrayDiStringhe) {
  let stringaPiuLunga = "";

  for (i = 0; i < arrayDiStringhe.length; i++) {
    let stringaCorrente = arrayDiStringhe[i];

    if (stringaCorrente.length > stringaPiuLunga.length) {
      stringaPiuLunga = stringaCorrente;
    }
  }
  return stringaPiuLunga;
}

let stringhe1 = [
  "ciao",
  "buongiorno",
  "arrivederci",
  "SJNSNJSJNSFNFSJNSFJNSFJNSFJN",
];
let risultato2 = trovaStringaPiuLunga(stringhe1);
console.log(risultato2);

/* Scrivi una funzione che prende in input un array di numeri e restituisce un nuovo array contenente solo i numeri pari presenti nell'array di input. */

function trovaNumeriPari(arrayDiNumeri) {
  let numeriPari = [];

  for (i = 0; i < arrayDiNumeri.length; i++) {
    let numeri2 = arrayDiNumeri[i];

    if (numeri2 % 2 === 0) {
      numeriPari.push(numeri2);
    }
  }
  return numeriPari;
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let risultato3 = trovaNumeriPari(numbers);
console.log(risultato3);

/* /* Scrivi una funzione che prende in input un array di numeri e restituisce la somma di tutti gli elementi. */

function calcolaSomma(arrayDiNumeri) {
  let somma = 0;
  for (i = 0; i < arrayDiNumeri.length; i++) {
    somma = somma + arrayDiNumeri[i];
  }
  return somma;
}

let numeri3 = [12, 2, 6, 4, 8];
let result = calcolaSomma(numeri3);
console.log(result);

/* /* Scrivi una funzione che prende in input un array di stringhe e restituisce la stringa più lunga presente nell'array. */

function trovaStringaPiuLunga(arrayDiStringhe) {
  let stringaPiuLunga = "";
  for (i = 0; i < arrayDiStringhe.length; i++) {
    let stringaCorrente = arrayDiStringhe[i];

    if (stringaCorrente.length > arrayDiStringhe.length) {
      stringaPiuLunga = stringaCorrente;
    }
  }
  return stringaPiuLunga;
}

let stringhe = ["mi", "piaci", "lolololol"];
let restituisci = trovaStringaPiuLunga(stringhe);
console.log(restituisci);
