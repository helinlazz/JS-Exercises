/* Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

l’età della persona

quanti anni sono necessari per raggiungere i 100

Esempio:

Input: anno corrente = 2021, anno di nascita = 1996
Output: età = 25, anni mancanti = 75 */

/* const prompt = require("prompt-sync")();

let year = prompt("anno attuale ");
let birthYear = prompt("anno di nascita");

let age = year - birthYear;

let cento = 100 - age;

console.log(age, cento); */

function calcAge(year, birthYear) {
  let age = year - birthYear;
  let cento = 100 - age;
  let obj = {
    age,
    cento,
  };
  return obj;
}
console.log(calcAge(2023, 2000).age);

let result = calcAge(2023, 1995);
console.log(result.cento);
