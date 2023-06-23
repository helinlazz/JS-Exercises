function repeatHello(printHello) {
  setInterval(() => {
    printHello("Hello!");
  }, 1000);
}

repeatHello(() => console.log("Hello!"));

/* Ha una sintassi semplice, corta e veloce */
