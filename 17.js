const employees = [
  { name: "Eljay", position: "Frontend Developer", salary: 25000 },
  { name: "John", position: "Backend Developer", salary: 30000 },
  { name: "Anna", position: "UI Designer", salary: 28000 },
  { name: "Mark", position: "QA Tester", salary: 22000 }
];

function processEmployees(array, callback) {
  let newValue = [];

  for (let i = 0; i < array.length; i++) {
    const result  = callback(array[i]);

    newValue.push(result);
  }

  return newValue;
}

function getName(employee) {
  return employee.name;
}

console.log(processEmployees(employees, getName));