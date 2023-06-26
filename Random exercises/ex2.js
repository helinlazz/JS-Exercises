/* ---SCRIVI UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI NUMERI E RESTITUISCE LA SOMMA DI TUTTI GLI ELEMENTI -----*/

function sommaNumeri(arrayDiNumeri) {
  let somma = arrayDiNumeri[0];

  for (i = 0; i < arrayDiNumeri.length; i++) {
    somma = somma + arrayDiNumeri[i];
  }
  return somma;
}

let numeri = [12, 45, 3, 2, 55];
let risultato = sommaNumeri(numeri);
console.log(risultato);

/* ----SCRIVI UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI NUMERI E RESTITUISCE IL NUMERO PIÙ GRANDE PRESENTE NELL'ARRAY.---- */

function trovaNumeroPiuGrande(arrayDiNumeri) {
  let numeroPiuGrande = arrayDiNumeri[0];

  for (let i = 0; i < arrayDiNumeri.length; i++) {
    let numeroCorrente = arrayDiNumeri[i];

    if (numeroCorrente > numeroPiuGrande) {
      numeroPiuGrande = numeroCorrente;
    }
  }
  return numeroPiuGrande;
}

let numeri1 = [12, 45, 3, 23, 76];

let risultato1 = trovaNumeroPiuGrande(numeri1);
console.log(risultato1);

/* -----SCRIVI UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI STRINGHE E RESTITUISCE IL NUMERO DI ELEMENTI PRESENTI NELL'ARRAY.----- */

function trovaNumeroStringhe(arrayDiStringhe) {
  let numeroStringhe = 0;

  for (let i = 0; i < arrayDiStringhe.length; i++) {
    numeroStringhe++;
  }
  return numeroStringhe;
}

let stringhe = ["ciao", "hola", "bye"];
let risultato2 = trovaNumeroStringhe(stringhe);
console.log(risultato2);

function trovaNumerodeiNumeri(arrayDiNumeri) {
  let numeroNumeri = 0;

  for (i = 0; i < arrayDiNumeri.length; i++) {
    numeroNumeri++;
  }
  return numeroNumeri;
}

let numeri3 = [1, 2, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3];
let risultato3 = trovaNumerodeiNumeri(numeri3);
console.log(risultato3);

/* -----SCRIVI UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI NUMERI E RESTITUISCE UN NUOVO ARRAY CONTENENTE SOLO I NUMERI PARI PRESENTI NELL'ARRAY DI INPUT.------ */

function trovaNumeriPari(arrayDiNumeri) {
  let numeriPari = [];

  for (let i = 0; i < arrayDiNumeri.length; i++) {
    let numeroCorrente = arrayDiNumeri[i];

    if (numeroCorrente % 2 === 0) {
      numeriPari.push(numeroCorrente);
    }
  }
  return numeriPari;
}

let numeri4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let risultato4 = trovaNumeriPari(numeri4);
console.log(risultato4);

/* -----SCRIVI UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI STRINGHE E RESTITUISCE UN NUOVO ARRAY CONTENENTE LE STESSE STRINGHE IN ORDINE INVERSO.----- */

function cambiaOrdineStringhe(arrayDiStringhe) {
  let stringheInverse = [];

  for (let i = arrayDiStringhe.length - 1; i >= 0; i--) {
    stringheInverse.push(arrayDiStringhe[i]);
  }
  return stringheInverse;
}

let stringhe2 = ["ciao", "hello", "bye"];
let result = cambiaOrdineStringhe(stringhe2);
console.log(result);

/* ------SCRIVI UNA FUNZIONE CHE PRENDE IN INPUT UN ARRAY DI NUMERI E RESTITUISCE LA MEDIA DEI NUMERI PRESENTI NELL'ARRAY.----- */
function calcolamedia(arrayDiNumeri) {
  let somma = arrayDiNumeri.reduce((a, b) => a + b);
  let media = somma / arrayDiNumeri.length;
  return media;
}

let numeri5 = [9, 10, 4, 7, 6, 6, 10];
let risultato5 = calcolamedia(numeri5);
console.log(risultato5);

/* -----Crea un oggetto "person" con le seguenti proprietà: nome, cognome, età. Stampa le proprietà dell'oggetto utilizzando la console.----- */

let person1 = {
  nome: "Mirka",
  cognome: "Medaglini",
  eta: 25,
};

console.log(person1);

/* -----Aggiungi un metodo "saluta" all'oggetto "person" che stampi un messaggio di saluto utilizzando il nome e il cognome dell'oggetto. Chiama il metodo e verifica se funziona correttamente.----- */

let person = {
  nome: "Mirka",
  cognome: "Medaglini",
  eta: 25,
};

let saluta = "Ciao, mi chiamo ";
console.log(saluta + person.nome + " " + person.cognome);

/* -----Crea un oggetto "car" con le seguenti proprietà: marca, modello, anno. Aggiungi un metodo "descrizione" all'oggetto che restituisca una stringa formattata che descriva la macchina (ad esempio, "Marca: Toyota, Modello: Corolla, Anno: 2020").----- */

let car1 = {
  marca: " ",
  modello: " ",
  anno: 0,
  descrizione: function () {
    return (
      "Marca: " + this.marca + "Modello: " + this.modello + "Anno: " + this.anno
    );
  },
};

(this.marca = "Nissan"), (this.modello = "Pixo"), (this.anno = 2009);

console.log(car1.descrizione());

/* Aggiungi una nuova proprietà "colore" all'oggetto "car" e assegna un valore. Modifica il metodo "descrizione" in modo che includa anche il colore nella stringa di descrizione. */

let car = {
  marca: " ",
  modello: " ",
  anno: 0,
  colore: " ",
  descrizione: function () {
    return;
    "Marca: " +
      this.marca +
      "Modello: " +
      this.modello +
      "Anno: " +
      this.anno +
      "Colore: " +
      this.colore;
  },
};

(this.marca = "Nissan"),
  (this.modello = "Pixo"),
  (this.anno = 2009),
  (this.colore = "blu");

console.log(car.descrizione());
