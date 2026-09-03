function createMultiplier(number) {
  return function (value) {
    return number * value;
  }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const fiveTimes = createMultiplier(5);

console.log(double(10));
console.log(triple(10));
console.log(fiveTimes(10));