function createDiscount(tenDiscount) {
  return function(valueOne) {
    const dis1 = valueOne * tenDiscount;

    const dis2 = valueOne - dis1;

    return dis2;
  }
}

const tenPercent = createDiscount(0.10);
const twentyPercent = createDiscount(0.20);

console.log(tenPercent(1000));
console.log(twentyPercent(1000));

// createDiscount = tenDiscount
// createDiscount = twentyDiscount

// then : 0.10 = tenDiscount
// then : 0.20 = twentyDiscount


//tenPercent = valueOne
// twentyPercent = valueTwo

// then : valueOne = 1000 / valueTwo : 1000