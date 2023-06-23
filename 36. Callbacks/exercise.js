function repeatHello(func) {
  const repeatFunction = setInterval(func, 1000);
  setTimeout(() => {
    clearInterval(repeatFunction);
  }, 5000);
}

const printHello = () => console.log("Hello!");

repeatHello(printHello);
