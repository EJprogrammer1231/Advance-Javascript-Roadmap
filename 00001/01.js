function createCounter() {
  let count = 0;

  return function(){
    count++;
    return count;
  }
};

const countA = createCounter();
const countB = createCounter();

console.log(countA());
console.log(countA());
console.log(countA());

console.log(countB());
console.log(countB());