const employees = [
  { name: "Eljay", salary: 25000 },
  { name: "JE", salary: 20000 },
  { name: "Anna", salary: 30000 },
  { name: "John", salary: 35000 }
];

function myFilter(array, callback) {
  let newValue = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newValue.push(array[i]);
    }
  }

  return newValue;
}

function highSalary(employee) {
  return employee.salary >= 25000;
}

console.log(myFilter(employees, highSalary));