const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise risolta");
  }, 2000);
});

console.log(
  mypromise
); /* non risolve, serve il then e il catch, il then restituisce i dati, come se fosse un return */

mypromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error); /* la promise si risolve dopo due secondi  */
  });
