// // function processData(value, callback) {
// //   return callback(value);
// // }

// // function double(number) {
// //   return number * 2;
// // }

// // function square(number) {
// //   return number * number;
// // }

// // function triple(number) {
// //   return number * 3;
// // }

// // console.log(processData(5, double));
// // console.log(processData(5, square));
// // console.log(processData(5, triple));

// const numbers = [1, 2, 3, 4, 5];

// function processArray(array, callback) {
//   let transformVal = [];

//   for (let i = 0; i < array.length; i++) {
//     const result = callback(array[i]);

//     transformVal.push(result);
//   }

//   return transformVal;
// }

// function double(number) {
//   return number * 2;
// }

// console.log(processArray(numbers, double));