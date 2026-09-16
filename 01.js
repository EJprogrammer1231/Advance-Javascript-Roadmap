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

    employeeSummary(id) {
      const employeeId = employees.find(empId => empId.id === id);

      const {name,position,department,salary} = employeeId;

      return {
        name,
        position,
        department,
        salary
      }
    },

    updateEmployeeDepartment(id, newDepartment) {
      const employeeId = employees.find(empid => empid.id === id);

      const newEmployee = {...employeeId};

      return {
        ...newEmployee,
        department: newDepartment
      }
    },

    createSalaryCalculator(rate) {
      return function(salary) {
        return salary * rate;
      }
    },

    employeeIntroduction() {
      const names = this.getEmployees().map((employee) => {
        return employee.name;
      });

      return names;
    },

    getEmployees() {
      return employees;
    } 
  }
}

// Reusable function
function introduceEmployee(role) {

}

// Function return methods : Closure
const create = createNewEmployees();

// Create new Employee List
create.employee(1, "Eljay", "Software Engineer", "IT", 25000, "Active");
create.employee(2, "Gon", "Software Engineer", "IT", 20000, "Inactive");
create.employee(3, "JE", "QA", "HR", 15000, "Active");

// Test
console.log(create.employeeIntroduction());

// Calling the methods actions
//console.log(create.employeeReport());

// callback : High Order Funtions
create.processEmployees(employee => {
  return employee.name;
});