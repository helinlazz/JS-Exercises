class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }
  set firstName(newFirstName) {
    this.#firstName = newFirstName;
  }

  set lastName(newLastName) {
    this.#lastName = newLastName;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get age() {
    return this.#age;
  }

  get fullName() {
    const fullName = this.#firstName + " " + this.#lastName;
    return fullName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
