function createValidator(type) {
  return function(value) {
    if (type === "number") {
      const check = typeof(value);

      return check;
    }
  }
}

const isNumber = createValidator("number");
const isString = createValidator("string");
// const isPositive = createValidator("positive");

console.log(isNumber(10));      // true
console.log(isNumber("10"));    // false

// console.log(isString("Eljay")); // true
// console.log(isString(100));     // false

// console.log(isPositive(50));    // true
// console.log(isPositive(-10));   // false