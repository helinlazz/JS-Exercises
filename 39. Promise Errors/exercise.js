const isLogged = true;

function login(userData) {
  return new Promise((resolve, reject) => {
    if (userData) {
      resolve(Math.floor(Math.random()));
    } else {
      reject(new Error("First error"));
    }
  });
}

function userLogin(idNumber) {
  return new Promise((resolve, reject) => {
    if (idNumber > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Second error"));
    }
  });
}

login(isLogged)
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
  .finally(() => console.log("Correct"));
