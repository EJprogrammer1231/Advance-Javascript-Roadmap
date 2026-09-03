const numbers = [1, 2, 3, 4, 5, 6];

function myFilter(array,callback) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {

    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(myFilter(numbers, isEven));