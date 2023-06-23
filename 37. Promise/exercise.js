const number = 15;

const myPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(new Error("This number is not greater than 10"));
  }
});

myPromise.then((val) => console.log(val)).catch((error) => console.log(error));
