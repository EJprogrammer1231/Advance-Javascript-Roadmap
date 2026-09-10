// function calculateTotal(...values) {
//   const total_numbers = values.reduce((total,number) => {
//     return total + number;
//   }, 0);

//   console.log(total_numbers);
// }

// calculateTotal(100,200,300);
// calculateTotal(500,1000);
// calculateTotal(50,75,125,250);

function calculateEmployeeSalary(name,...salary) {
  const totalSalaryEmployee = salary.reduce((total,slry) => {
    return total + slry;
  }, 0);

  console.log(`${name} - ${totalSalaryEmployee}`);
}

calculateEmployeeSalary("Eljay", 20000);
calculateEmployeeSalary("Gon", 19000);
calculateEmployeeSalary("Gin", 30000);