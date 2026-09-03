const employee = {
  name: "Eljay",
  position: "Frontend Developer",
  salary: 25000
};

function createSalaryUpdater(percent) {
  return function(value) {
    const currentSalary = value.salary * percent;
    const finalSalary = value.salary + currentSalary;

    return {
      name: employee.name,
      position: employee.position,
      salary: finalSalary
    }
  }
}

const increase10 = createSalaryUpdater(0.10);

const updatedEmployee = increase10(employee);

console.log(updatedEmployee);