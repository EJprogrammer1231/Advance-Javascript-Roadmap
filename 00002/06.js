function createOperation(operation) {
  return function(value) {
    if (operation === "double") {
      const double2 = value * operation;
      const finalDouble = value + double2;
    }

    if (operation === "triple") {
      const triple3 = value * operation;
      const finalTriple = value + triple3;
    }

    if (operation === "square") {
      const square = value * operation;
      const finalSquare = value + square;
    }

    return {
      finalDouble,
      finalTriple,
      finalSquare
    }
  }
}

const double = createOperation("double");
const triple = createOperation("triple");
const square = createOperation("square");

console.log(double(5));   // 10
console.log(triple(5));   // 15
console.log(square(5));   // 25