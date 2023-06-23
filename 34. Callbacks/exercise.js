function printAsyncName(printHello, name) {
  setInterval(() => {
    printHello("Hello");
  }, 1000);
  setInterval(() => {
    console.log(name);
  }, 2000);
}

function printHello(x) {
  console.log(x);
}
printAsyncName(printHello, "Mirka");
