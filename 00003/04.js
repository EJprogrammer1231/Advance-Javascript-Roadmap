// const product = {
//   name: "Laptop",
//   price: 45000,
//   category: "Electronics",
//   stock: 10
// };

// const {
//   name: productName,
//   price: productPrice,
//   stock: productStock
// } = product;

// console.log(productName);
// console.log(productPrice);
// console.log(productStock);

// const employees = [
//   "John",
//   "Sarah",
//   "Michael",
//   "David"
// ];

// const [first, , third, fourth] = employees;

// console.log(first);
// console.log(third);
// console.log(fourth);


// function createCounter(start) {
//   let count = start;

//   return {
//     increase() {
//       count++;
//     },

//     decrease() {
//       count--;
//     },

//     getCount() {
//       return count;
//     }
//   };
// }

// const counter = createCounter(10);

// counter.increase();
// counter.increase();
// counter.decrease();

// console.log(counter.getCount());

function createDiscountCalculator(discount) {
  return function(value) {
    const operation = value * discount / 100;
    const resultt = value - operation;

    return resultt;
  }
}

const tenPercent = createDiscountCalculator(10);

console.log(tenPercent(1000));