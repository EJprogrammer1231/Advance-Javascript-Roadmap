function createCompany() {
  let employees = [];

  return {
    addEmployee(name,role,salary) {
      employees.push({
        id: crypto.randomUUID(),
        name,
        role,
        salary
      })
    },
    findEmployee(id) {
      const employeeID = employees.find(empId => {
        return empId.id === id;
      });

      return employeeID;
    },
    showEmployee() {
      return employees;
    }
  };
}

const getEmployee = createCompany();

getEmployee.addEmployee("Eljay","FrontEnd Developer", 25000);
getEmployee.findEmployee( )
console.log(getEmployee.findEmployee(id));
