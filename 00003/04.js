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

// function createDiscountCalculator(discount) {
//   return function(value) {
//     const operation = value * discount / 100;
//     const resultt = value - operation;

//     return resultt;
//   }
// }

// const tenPercent = createDiscountCalculator(10);
// const twentyPercent = createDiscountCalculator(20);

// console.log(tenPercent(1000));
// console.log(tenPercent(500));

// console.log(twentyPercent(1000));
// console.log(twentyPercent(500));

// const employee = {
//   name: "John",
//   position: "Frontend Developer"
// };

// function introduce(greeting, company) {
//   console.log(greeting);
//   console.log(`My name is ${this.name}`);
//   console.log(`I am a ${this.position}`);
//   console.log(`I work at ${company}`);
// }

// introduce.apply(employee, ["Hello!","Tech corp"]);

// const employee = {
//   name: "Michael",
//   position: "Backend Developer"
// };

// function introduce(greeting, company) {
//   console.log(greeting);
//   console.log(`My name is ${this.name}`);
//   console.log(`I am a ${this.position}`);
//   console.log(`I work at ${company}`);
// }

// const bind = introduce.bind(employee);
// bind("Hi!","Google");