const employees = [
  { name: "Eljay", position: "Frontend Developer", salary: 25000 },
  { name: "John", position: "Backend Developer", salary: 30000 },
  { name: "Anna", position: "UI Designer", salary: 28000 }
];

function createSalaryUpdater(percent) {
  let storedUpdatedEmployee = [];

  return function(value) {
    for (let i = 0; i < value.length; i++) {
      const result = value[i].salary * percent;
      const finalResult = value[i].salary + result

      const newObject = {
        name: value[i].name,
        position: value[i].position,
        salary: finalResult
      }

      storedUpdatedEmployee.push(newObject);
    }

    return storedUpdatedEmployee;
  }
}

const increase10 = createSalaryUpdater(0.10);

const updatedEmployees = increase10(employees);

console.log(updatedEmployees);