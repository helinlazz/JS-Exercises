function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    console.log("result: " + value * number);
  }
  return inner;
}

multiplyByTwo(4)();
