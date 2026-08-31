const employees = [
  { name: "Eljay", salary: 25000 },
  { name: "John", salary: 30000 },
  { name: "Anna", salary: 28000 }
];

function myMap(array, callback) {
  let stored = [];

  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i]);

    stored.push(result);
  }

  return stored;
}

function getNames(employee) {
  return employee.name;
}

console.log(myMap(employees, getNames));