function Employee(name, position, salary, status) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.status = status;
}

const employee1 = new Employee("Eljay", "Frontend Developer", 25000, "active");
const employee2 = new Employee("Gon", "Backend Developer", 35000, "active");
const employee3 = new Employee("Maria", "HR Specialist", 22000, "inactive");

const employeeManager = {
    employees: [
        employee1,
        employee2,
        employee3
    ],

    getActiveEmployees() {
        const activeEmployees = this.employees.filter(active => {
            return active.status === "active";
        });

        return activeEmployees;
    },

    getEmployeeNames(){
        const namesEmployee = this.employees.map(employee => {
            return employee.name;
        });

        return namesEmployee;
    },

    getTotalPayroll() {
        const totalPayroll = this.employees.reduce((total, employee) => {
            return total += employee.salary;
        }, 0);

        return totalPayroll;
    },

    findEmployee(name) {
        const findName = this.employees.find(employee => {
            return employee.name === name;
        });

        return findName;
    }
}

console.log(employeeManager.getActiveEmployees());
console.log(employeeManager.getEmployeeNames());
console.log(employeeManager.getTotalPayroll());
console.log(employeeManager.findEmployee("Gon"));