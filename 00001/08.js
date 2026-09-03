function processNumber(number,callback) {
  return callback(number);
}

function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

console.log(processNumber(10, double));
console.log(processNumber(10, square));