/* Il conta cifre
Scrivi un programma che dato un numero conti da quante cifre è formato.

Esempio

Input: numero: 245
Output: numero cifre: 3 */

function contaCifre(number) {
  return number.toString().length;
}

let cifra = contaCifre(1234);
