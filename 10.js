const numbers = [1,2,3,4,5];

function myMap(array,callback) {
  let newValue = [];

  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i]);

    newValue.push(result);
  }

  return newValue;
};

function double(number) {
  return number * 2;
};

console.log(myMap(numbers, double));