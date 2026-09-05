const total_employee = document.getElementById("total-employee");
const total_salary = document.getElementById("total-salary");
const highest_salary = document.getElementById("highest-salary");
const average_salary = document.getElementById("average-salary");

function updateStatistics() {
  return {
    totalEmployee() {
      const totalEmployee = employees.length
      total_employee.textContent = totalEmployee;
    },
    totalSalary() {
      const totalSalary_ = employees.reduce((total,employee) => {
        return total += employee.salary;
      },0);

      total_salary.textContent = totalSalary_;
    },
    highestSalary() {
      const highSalary = employees.reduce((highest,employee) => {
        if (employee.salary > highest) {
          highest = employee.salary;
        }

        return highest;
      },0);

      highest_salary.textContent = highSalary;
    },
    averageSalary() {
      const average = employees.reduce((total,employee) => {
        return total += employee.salary;
      },0);

      const finalAverage = average / employees.length;

      average_salary.textContent = finalAverage;
    }
  }
}

const statistics = updateStatistics();
statistics.totalEmployee();
statistics.totalSalary();
statistics.highestSalary();
statistics.averageSalary();