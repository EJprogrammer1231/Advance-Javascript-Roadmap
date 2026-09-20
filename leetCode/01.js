const employees = [
  {
    id: 1,
    name: "Eljay",
    department: "IT",
    salary: 25000,
    status: "active"
  },
  {
    id: 2,
    name: "John",
    department: "HR",
    salary: 18000,
    status: "active"
  },
  {
    id: 3,
    name: "Maria",
    department: "IT",
    salary: 30000,
    status: "inactive"
  },
  {
    id: 4,
    name: "David",
    department: "Finance",
    salary: 22000,
    status: "active"
  },
  {
    id: 5,
    name: "Sarah",
    department: "IT",
    salary: 28000,
    status: "active"
  }
];

function analyzeEmployees(employees) {
    return {
        statistics() {

            // totalEmployees
            const totalEmployees = employees.length;

            // activeEmployees
            const activeEmployees = employees
                .filter(isActive => isActive.status === "active")
                .reduce((countActive) => countActive + 1, 0);

            // inactiveEmployees
            const inactiveEmployees = employees
                .filter(isInactive => isInactive.status === "inactive")
                .reduce((countInactive) => countInactive + 1, 0);

            // totalPayroll
            const totalPayroll = employees.reduce((totalPay, employee) => {
                return totalPay + employee.salary;
            }, 0);

            // averageSalary
            const averageSalary = employees.length === 0
                ? 0
                : totalPayroll / employees.length;

            // highestPaidEmployee
            const highestPaidEmployee = employees.length === 0
                ? null
                : employees.reduce((highest, employee) => {
                    if (employee.salary > highest.salary) {
                        highest = employee;
                    }

                    return highest;
                }, employees[0]);


            const departments = employees.reduce((departmentCount, employee) => {
                if (departmentCount[employee.department]) {
                    departmentCount[employee.department]++;
                } else {
                    departmentCount[employee.department] = 1;
                }

                return departmentCount;
            }, {});

            return {
                totalEmployees,
                activeEmployees,
                inactiveEmployees,
                totalPayroll,
                averageSalary,
                highestPaidEmployee,
                departments
            };
        }
    };
}

// closure
const getStatistics = analyzeEmployees(employees);

console.log(getStatistics.statistics());