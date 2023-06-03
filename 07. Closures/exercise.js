function printName(helloName) {
  helloName = "Hello John";
  function inner() {
    console.log(helloName);
  }
  return inner();
}
setTimeout(printName, 1000);
