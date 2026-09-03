const numbers = [10, 20, 30, 40];

function myReduce(array, callback, initialValue) {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }

  return initialValue;
}

function add(total, number) {
  return total + number;
}

console.log(myReduce(numbers, add, 0));