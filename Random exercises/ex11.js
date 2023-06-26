function myPromise(prom) {
  return new Promise((resolve, rejecte) => {
    if (prom === true) {
      resolve("Promise risolta");
    } else {
      rejecte("Promise rigettata");
    }
  });
}

myPromise(true)
  .then((val) => console.log(val))
  .catch((error) => console.log(error));
