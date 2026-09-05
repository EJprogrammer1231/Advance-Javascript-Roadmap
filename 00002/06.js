function createOperation(operation) {
  return function(value) {
    if (operation === "double") {
      const double2 = value * 2;

      return double2;
    }

    if (operation === "triple") {
      const triple3 = value * 3;

      return triple3;
    }

    if (operation === "square") {
      const square = value * 5;

      return square;
    }
  }
}

const double = createOperation("double");
const triple = createOperation("triple");
const square = createOperation("square");

console.log(double(5));   // 10
console.log(triple(5));   // 15
console.log(square(5));   // 25