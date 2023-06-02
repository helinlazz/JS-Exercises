const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon"
console.log(person1);
console.log(person2);


/* RISULTATO:
 { firstName: 'Simon', lastName: 'Doe', age: 25 }
{ firstName: 'Simon', lastName: 'Doe', age: 25 } */

/* Quando modifichiamo la proprietà di un oggetto di due variabili che fanno riferimento allo stesso oggetto, la proprietà risulterà uguale all'ultima che è stata cambiata, perché si riflettono ed è come se fossero due nomi diversi che si riferiscono allo stesso oggetto  */