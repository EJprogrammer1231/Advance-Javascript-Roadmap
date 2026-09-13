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
      // total employee
      const totalEmployee = employees.length;
      
      // active employee
      const activeEmployee = employees
      .filter(active => active.status === "Active")
      .reduce((total) => total + 1 , 0);

      // Inactive employee
      const inactiveEmployee = employees
      .filter(inactive => inactive.status === "Inactive")
      .reduce((total) => total + 1 , 0);
      
      const totalPayroll = employees.reduce((total,payroll) => {
        return total += payroll.salary;
      }, 0);

      const averageSalary = totalPayroll / employees.length;

      return {
        totalEmployee,
        activeEmployee,
        inactiveEmployee,
        totalPayroll,
        averageSalary
      };
    },
    employeeReport() {
      const reportEmployee = employees.map(list => {
        const reportDataList = {
          id: list.id,
          name: list.name,
          department:  list.department,
          salary: list.salary,
          status: list.status
        }

        return reportDataList;
      });

      return reportEmployee;
    },

    // High order
    processEmployees(callback) {
      let employeeNew = [];

      for (let i = 0; i < employees.length; i++) {
        employeeNew.push(callback(employees[i]));
      }

      return employeeNew;
    },

    calculateBonuses(...bonuses) {
      const calculateBonus = bonuses.reduce((total,bonus) => {
        return total + bonus;
      }, 0);

      return calculateBonus;
    },

    getEmployees() {
      return employees;
    } 
  }
}

// Function return methods : Closure
const create = createNewEmployees();

// Create new Employee List
create.employee(1, "Eljay", "Software Engineer", "IT", 25000, "Active");
create.employee(2, "Gon", "Software Engineer", "IT", 20000, "Inactive");
create.employee(3, "JE", "QA", "HR", 15000, "Active");

// Test rest parameters
console.log(create.calculateBonuses(1000, 2000, 3000));

// Calling the methods actions
//console.log(create.employeeReport());

// callback : High Order Funtions
create.processEmployees(employee => {
  return employee.name;
});