/* Crea una classe person che ha prop: name, age e hobby. metodi: add hobby, remove hobby, get hobbies */

class Person {
  constructor(name, age, hobbies) {
    (this.name = name), (this.age = age), (this.hobbies = hobbies);
  }

  add(hobby) {
    this.hobbies.push(hobby);
  }

  /* remove(hobby) {
    let filtered = this.hobbies.filter((element) => {
      if (hobby !== element) {
        return element;
      }
    });
    this.hobbies = filtered;
  } */

  remove(hobby) {
    const index = this.hobbies.indexOf(hobby);
    if (index !== -1) {
      this.hobbies.splice(index, 1);
    }
  }

  get() {
    return this.hobbies;
  }
}

const newPerson = new Person("Mario", 24, ["football", "golf", "sing"]);

newPerson.add("basket");

newPerson.remove("football");

console.log(newPerson.get());
