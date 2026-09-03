function createSalaryIncrease(percent) {
  return function(value) {
    const salary = value * percent;
    const finalSalary = value + salary

    return finalSalary;
  } 
}

const tenPercentIncrease = createSalaryIncrease(0.10);
const twentyPercentIncrease = createSalaryIncrease(0.20);

console.log(tenPercentIncrease(25000));
console.log(twentyPercentIncrease(25000));