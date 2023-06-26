/* Esercizio di filtro (filter):
Crea un array di numeri interi.
Filtra l'array per ottenere solo i numeri pari.
Stampa il nuovo array risultante. */

function trovaNumeriPari(numeri) {
  let numeriPari = numeri.filter((numero) => numero % 2 === 0);
  return numeriPari;
}

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = trovaNumeriPari(numeri);
console.log(result);

/* Filtra gli studenti promossi:
Crea un array di oggetti, ognuno dei quali rappresenta uno studente con le proprietà "nome" e "voto".
Filtra l'array per ottenere solo gli studenti che hanno superato l'esame (con un voto maggiore o uguale a 60).
Stampa l'array risultante. */

function trovaPromossi(studenti) {
  let promossi = studenti.filter((studente) => studente.voto >= 60);
  return promossi;
}

let listaStudenti = [
  { nome: "Mario", voto: 60 },
  { nome: "Federica", voto: 30 },
  { nome: "Maria", voto: 85 },
  { nome: "Leo", voto: 14 },
];

let promossi = trovaPromossi(listaStudenti);
console.log(promossi);

/* Filtra le parole più lunghe di una determinata lunghezza:
Crea un array di stringhe.
Filtra l'array per ottenere solo le parole che hanno una lunghezza maggiore di un valore specifico.
Stampa l'array risultante. */

function trovaParoleLunghe(parole) {
  let paroleLunghe = parole.filter((parola) => parola.length >= 5);
  return paroleLunghe;
}

let listaParole = ["ciao", "buongiorno", "arrivederci", "ao", "bella"];
let paroleOk = trovaParoleLunghe(listaParole);
console.log(paroleOk);

/* Filtra i prodotti in saldo:
Crea un array di oggetti, ognuno dei quali rappresenta un prodotto con le proprietà "nome" e "prezzo".
Filtra l'array per ottenere solo i prodotti che sono in saldo (con un prezzo scontato).
Stampa l'array risultante. */

function trovaProdottiInSaldo(prodotti) {
  let prodottiInSaldo = prodotti.filter((prodotto) => prodotto.sconto > 0);
  return prodottiInSaldo;
}

let prodotti = [
  { prodotto: "deodorante", prezzo: 2.5, sconto: 0 },
  { prodotto: "tv", prezzo: 1500, sconto: 30 },
  { prodotto: "iphone", prezzo: 999, sconto: 20 },
];

let prodottiScontati = trovaProdottiInSaldo(prodotti);
console.log(prodottiScontati);

/* Filtra gli utenti attivi:
Crea un array di oggetti, ognuno dei quali rappresenta un utente con le proprietà "nome" e "attivo" (un valore booleano).
Filtra l'array per ottenere solo gli utenti attivi.
Stampa l'array risultante. */

function trovaUtentiAttivi(utenti) {
  let utentiAttivi = utenti.filter((nome) => nome.attivo === true);
  return utentiAttivi;
}

let listaUtenti = [
  { nome: "Marco", attivo: true },
  { nome: "Maria", attivo: false },
  { nome: "Leo", attivo: false },
  { nome: "Mia", attivo: true },
];

let attivi = trovaUtentiAttivi(listaUtenti);
console.log(attivi);

/* Filtra i libri di un determinato autore:
Crea un array di oggetti, ognuno dei quali rappresenta un libro con le proprietà "titolo" e "autore".
Filtra l'array per ottenere solo i libri scritti da un autore specifico.
Stampa l'array risultante. */

function trovaAutore(libri) {
  let libriTrovati = libri.filter((libro) => libro.autore === "Bulgakov");
  return libriTrovati;
}

listaLibri = [
  { titolo: "Il maestro e margherita", autore: "Bulgakov" },
  { titolo: "Guerra e pace", autore: "Tolstoj" },
  { titolo: "le uova fatali", autore: "Bulgakov" },
  { titolo: "Kafka sulla spiaggia", autore: "Murakami" },
  { titolo: "Cuore di cane", autore: "Bulgakov" },
];

let libriDiBulgakov = trovaAutore(listaLibri);
console.log(libriDiBulgakov);

/* Trasforma le stringhe in maiuscolo:
Crea un array di stringhe.
Utilizza il metodo map per trasformare ciascuna stringa in maiuscolo utilizzando il metodo toUpperCase().
Stampa il nuovo array risultante. */

function trasformaInMaiuscolo(stringhe) {
  let stringheInMaiuscolo = stringhe.map((stringa) => stringa.toUpperCase());
  return stringheInMaiuscolo;
}

let stringhe = ["ciao", "mi chiamo mirka", "come stai"];
let tuttoInMaiuscolo = trasformaInMaiuscolo(stringhe);
console.log(tuttoInMaiuscolo);

/* Calcola il doppio dei numeri:
Crea un array di numeri interi.
Utilizza il metodo map per ottenere un nuovo array in cui ciascun numero è il doppio del numero corrispondente nell'array originale.
Stampa il nuovo array risultante. */

function calcolaDoppioNumeri(numeri) {
  let numeriDoppi = numeri.map((numero) => numero * 2);
  return numeriDoppi;
}

let numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let risultato = calcolaDoppioNumeri(numeriInteri);
console.log(risultato);

/* Estrai solo il nome degli studenti:
Crea un array di oggetti, ognuno dei quali rappresenta uno studente con le proprietà "nome" e "età".
Utilizza il metodo map per ottenere un nuovo array che contenga solo i nomi degli studenti.
Stampa il nuovo array risultante. */

function estraiNomeStudenti(studenti) {
  let nomiEstratti = studenti.map((studente) => studente.nome);
  return nomiEstratti;
}

let listaStudenti1 = [
  { nome: "Leo", eta: 14 },
  { nome: "Mia", eta: 16 },
  { nome: "Mirka", eta: 25 },
  { nome: "Manfredi", eta: 25 },
];

let nomi = estraiNomeStudenti(listaStudenti1);
console.log(nomi);

/* Ordina un array di numeri in ordine crescente:
Crea un array di numeri.
Utilizza il metodo sort per ordinare l'array in ordine crescente.
Stampa l'array ordinato. */

function mettiInOrdineCrescente(numeri) {
  let ordineCrescente = numeri.sort(function (a, b) {
    return a - b;
  });
  return ordineCrescente;
}

let numeri1 = [4, 2, 5, 8, 1, 3];
let result1 = mettiInOrdineCrescente(numeri1);
console.log(result1);

/* Ordina un array di stringhe in ordine alfabetico:
Crea un array di stringhe.
Utilizza il metodo sort per ordinare l'array in ordine alfabetico.
Stampa l'array ordinato. */

function ordinaStringhe(stringhe) {
  let stringheOrdinate = stringhe.sort();
  return stringheOrdinate;
}

let listaStringhe = ["ciao", "ao", "voglia", "bella", "magia", "crudo"];
let result2 = ordinaStringhe(listaStringhe);
console.log(result2);

/* Stampare tutti gli elementi di un array:
Crea un array di numeri o stringhe.
Utilizza il metodo forEach per iterare su ciascun elemento dell'array.
All'interno della funzione di callback, stampa ogni elemento sulla console. */

function stampaElementi(array) {
  array.forEach(function (elemento) {
    console.log(elemento);
  });
}

const numeri3 = [1, 2, 3, 4, 5];
stampaElementi(numeri3);

/* Calcolare la somma di tutti gli elementi di un array:
Crea un array di numeri.
Inizializza una variabile somma a 0.
Utilizza il metodo forEach per iterare su ciascun elemento dell'array.
All'interno della funzione di callback, aggiungi l'elemento corrente alla variabile somma.
Alla fine della iterazione, stampa il valore della variabile somma. */

function calcolaSomma(array) {
  let somma = 0;
  array.forEach((element) => {
    somma += element;
  });
  return somma;
}

let numeri4 = [2, 6, 2, 6, 7, 4, 4];
let risultato4 = calcolaSomma(numeri4);
console.log(risultato4);

/* Modificare gli elementi di un array:
Crea un array di numeri.
Utilizza il metodo forEach per iterare su ciascun elemento dell'array.
All'interno della funzione di callback, modifica l'elemento corrente moltiplicandolo per 2. */

function modificaElementi(array) {
  array.forEach((element, index) => {
    array[index] = element * 2;
  });
  return array;
}

let numeri5 = [2, 3, 4, 5, 6, 7];
let risultato5 = modificaElementi(numeri);
console.log(risultato);

/* Creazione di una classe "Persona":
Crea una classe chiamata "Persona" con le proprietà "nome" e "età".
Aggiungi un metodo chiamato "saluta" che stampi un saluto con il nome della persona.
Crea un'istanza della classe "Persona" e chiama il metodo "saluta". */

class Persona {
  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }

  saluta() {
    console.log(`Ciao io sono ${this.nome}!`);
  }
}

const newPersona = new Persona("Mirka", 25);

newPersona.saluta();

/* Calcolo dell'età media di un gruppo di persone:
Crea una classe chiamata "Persona" con le proprietà "nome" e "età".
Crea un array di istanze della classe "Persona" rappresentanti diverse persone.
Utilizza un metodo della classe "Persona" per calcolare l'età media del gruppo di persone. */

class Persona {
  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }
}

let persona = new Persona[
  ("Mario", 24, "Jonna", 23, "Lucia", 45, "Mirka", 89)
]();

function calcolaEtaMedia(persone) {
  let media = persone.filter((persona) => ((a, b) => a + b) / persone.length);
  return media;
}

let persone = calcolaEtaMedia(persona);
console.log(persone);

/* Gestione di un carrello della spesa:
Crea una classe chiamata "Prodotto" con le proprietà "nome" e "prezzo".
Crea una classe chiamata "CarrelloSpesa" che contenga un array di prodotti.
Aggiungi metodi alla classe "CarrelloSpesa" per aggiungere un prodotto al carrello, rimuovere un prodotto e calcolare il totale della spesa. */

class Prodotto {
  constructor(nome, prezzo) {
    this.nome = nome;
    this.prezzo = prezzo;
  }
}

class CarrelloSpesa {
  constructor() {
    this.prodotti = [];
  }

  aggiungiProdotto(prodotto) {
    this.prodotto.push(prodotto);
  }

  rimuoviProdotto(nome) {
    this.prodotti = tishi.prodotti.filter((prodotto) => prodotto.nome !== nome);
  }

  calcolaTotaleSpesa() {
    let totale = 0;

    this.prodotti.forEach(function (prodotto) {
      totale += prodotto.prezzo;
    });
    return totale;
  }
}
