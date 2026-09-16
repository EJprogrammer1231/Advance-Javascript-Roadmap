const total_employees = document.getElementById("total-employees");
const active_employees = document.getElementById("active-employees");
const inactive_employees = document.getElementById("inactive-employees");
const total_payroll = document.getElementById("total-payroll");

function statistics() {
  let employees = [];

  return {
    createEmployees(employee) {
      employees.push(employee);
      
      this.dashboards();
    },
    dashboards() {
      const totalEmployees = employees.length;
      total_employees.textContent = totalEmployees;

      const activeEmployees = employees
      .filter(active => active.status === "active")
      .reduce(countActive => countActive + 1, 0);

      active_employees.textContent = activeEmployees;

      const inactiveEmployees = employees
      .filter(inactive => inactive.status === "inactive")
      .reduce(countInactive => countInactive + 1, 0);

      inactive_employees.textContent = inactiveEmployees;

      const totalPayroll = employees.reduce((total,salary) => {
        return total += salary.salary;
      }, 0);

      total_payroll.textContent = totalPayroll;
    },
    getEmployees() {
      return employees;
    }
  }
}

// closure
const usersList = statistics();
usersList.dashboards();