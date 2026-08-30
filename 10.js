const numbers = [1,2,3,4,5];

function myMap(array,callback) {
  let newValue = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newValue.push(array[i]);
    }
  }

  return newValue;
};

function double(number) {
  return number * 2;
};

console.log(myMap(numbers, double));