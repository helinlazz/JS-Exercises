/* Maggiore e minore
Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 

Esempio:

Input: a = 3, b = -1, c = 4, d = -2
Output: maggiore = 4, minore = 2 */

const prompt = require("prompt-sync")();

let numb = [];

for (let i = 0; i < 4; i++) {
  numb[i] = prompt("inserire un numero ");
}

numb.sort((a, b) => a - b);

console.log(numb[0], numb[numb.length - 1]);
