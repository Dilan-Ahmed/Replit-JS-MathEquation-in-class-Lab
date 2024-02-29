function mathEquation(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide" && b !== 0) {
    return a / b;
  } else if (b === 0 && operation === "divide") {
    return `Error, cannot divide by zero.`;
  } else { return "Give us a number and operation we calculate it for you" }
}


mathEquation(2, 3, "add");
mathEquation(5, 10, "subtract");
mathEquation(10, 10, "divide");
mathEquation(3, 3, "multiply");
mathEquation(10, 0, "divide");

console.log(mathEquation(2, 3, "add"));
console.log(mathEquation(5, 10, "subtract"));
console.log(mathEquation(10, 10, "divide"));
console.log(mathEquation(3, 3, "multiply"));
console.log(mathEquation(10, 0, "divide"));
console.log(mathEquation("d", "df", "helli"));