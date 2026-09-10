function createNewEmployees() {
  let employees = [];

  return {
    employee(id,name,position,department,salary,status) {
      employees.push({
      id: id,
      name: name,
      position: position,
      department: department,
      salary: salary,
      status: status
    });
    },
    findEmployee(id) {
      const empId = employees.find(find => find.id === id);
      return empId;
    },
    filterDepartment(department) {
      const filtered = employees.filter((depart) => {
        return depart.department === department;
      });
      return filtered;
    },
    searchEmployees(search) {
      const searchName = employees.filter((empName) => {
        return empName.name.toLowerCase() === search;
      });

      return searchName;
    },
    updateEmployees(id,newSalary) {
      const updateEmployee = employees.find(employeeId => employeeId.id === id);
      return {
        ...updateEmployee,
        salary: newSalary
      };
    },
    removeEmployee(id) {
      const updatedEmployees = employees.filter(employee => {
      return employee.id !== id;
    });
      employees = updatedEmployees;
      return employees;
    },
    employeeStatistics() {
      const totalEmployee = employees.length;

      // next
      return {
        totalEmployee
      };
    },
    getEmployees() {
      return employees;
    } 
  }
}

const create = createNewEmployees();
create.employee(1, "Eljay", "Software Engineer", "IT", 25000, "Active");
create.employee(2, "Gon", "Software Engineer", "IT", 20000, "Inactive");
create.employee(3, "JE", "QA", "HR", 15000, "Active");

console.log(create.employeeStatistics());