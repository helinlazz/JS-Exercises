const user = {
  id: 1,
  name: "John",
  age: 25,
};

function store(user) {
  const userJson = JSON.stringify(user);
  localStorage.setItem("user", userJson);
}

store(user);

function getStore() {
  const userJson = localStorage.getItem("user");
  if (userJson) {
    try {
      const user = JSON.parse(userJson);
      return user;
    } catch (error) {
      console.log(error);
    }
  } else console.log("error! user not found");
}

console.log(getStore());
