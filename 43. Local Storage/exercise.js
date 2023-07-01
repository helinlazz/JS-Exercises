const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveToLocalStorage(user) {
  const userJson = JSON.stringify(user);
  localStorage.setItem("user", userJson);
}

saveToLocalStorage(user);
