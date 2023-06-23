const isLogged = true;

function login(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.floor(Math.random()));
    } else {
      reject(new Error("First error"));
    }
  });
}

function numberLogin(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Second error"));
    }
  });
}

login(isLogged)
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
