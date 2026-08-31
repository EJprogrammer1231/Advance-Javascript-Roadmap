function createCompany() {
  let employees = [];

  return {

    addCompany(name, position, salary) {
      employees.push({
        name,
        position,
        salary
      });
    },

    calculateSalary() {
      const totalSalary = employees.reduce((total,employee) => {
        return total += employee.salary;
      }, 0);

      return totalSalary
    },

    findEmployee(name) {
      const findName = employees.find(empName => {
        return empName.name === name;
      });

      return findName;
    },

    filterEmployee(callback) {
      const allEmployee = employees.filter(employee => {
        return callback(employee);
      });

      return allEmployee;
    },

    showCompanies(employee = employees) {
      const findName = employee.map(emp => {
        return `
          Name: ${emp.name} and the position is ${emp.position} and the salary of ${emp.salary} a month.
        `;
      });

      return findName;
    }

  };
};

function highSalary(employee) {
  return employee.salary >= 25000;
}

const company = createCompany();

company.addCompany("Eljay", "SF" , 25000);
company.addCompany("JE", "JR SF" , 20000);
company.addCompany("Anna", "UI Designer", 30000);
company.addCompany("John", "Backend Developer", 35000);

console.log(company.filterEmployee(highSalary));