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

const company = createCompany();

company.addCompany("Eljay", "SF" , 25000);
company.addCompany("JE", "JR SF" , 20000);

console.log(company.findEmployee("JE"));
