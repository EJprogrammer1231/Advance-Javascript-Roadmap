function Employee(name, position, department, salary, status) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
    this.status = status;

    this.introduction = function() {
        return `Hi! my name is ${this.name} and I a'm a ${this.position}.`;
    }

    this.increaseSalary = function(amount) {
        this.salary += amount;
        return this.salary;
    }

    this.changeStatus = function(newStatus) {
        this.status = newStatus;
        return this.status;
    }

    this.getInfo = function() {
        return {
            name: this.name,
            position: this.position,
            department: this.department,
            salary: this.salary,
            status: this.status
        }
    }
}

const employee1 = new Employee("Eljay", "Frontend Developer", "IT", 25000, "active")
const employee2 = new Employee("Gon", "Backend Developer", "IT", 35000, "active")
const employee3 = new Employee("Maria", "HR Specialist", "HR", 22000, "inactive")
const employee5 = new Employee("David", "Accountant", "Finace", 28000, "active")
const employee4 = new Employee("Sarah", "UI Designer", "Design", 30000, "active")

const employeeManager = {
    employees: [
        employee1,
        employee2,
        employee3,
        employee4,
        employee5
    ],

    getActiveEmployees() {
        const getActive = this.employees.filter(active => active.status === "active");
        return getActive;
    },

    getITEmployees() {
        const getIt = this.employees.filter(employee => employee.department === "IT");
        return getIt;
    },

    findEmployee(name) {
        const getName = this.employees.find(employee => employee.name === name);
        return getName;
    },

    getTotalPayroll() {
        const totalPayroll = this.employees.reduce((total, employee) => {
            return total += employee.salary;
        }, 0);
        return totalPayroll;
    },

    getAverageSalary() {
        const totalPayroll = this.getTotalPayroll();
        return totalPayroll / this.employees.length;
    },

    getEmployeeNames() {
        const getNames = this.employees.map(employeeNames => employeeNames.name);
        return getNames;
    },

    getEmployeeReport() {
        const employeeReport = this.employees.map(report => {
            return report;
        });

        return employeeReport;
    },

    updateSalary(name, amount) {
        const employee = this.employees.find(empName => empName.name === name);

        return employee.increaseSalary(amount);
    },

    changeEmployeeStatus(name, newStatus) {
        const employee = this.employees.find(empName => empName.name === name);

        return employee.changeStatus(newStatus);
    },

    getDepartmentCounts() {
        const countDepartment = this.employees.reduce((total, employee) => {
            if (!total[employee.department]) {
                total[employee.department] = 0;
            }

            total[employee.department]++;

            return total;
        }, {});

        return countDepartment;
    }
}

// Methods called for function constructor 
// console.log(employee1.introduction());
// console.log(employee1.increaseSalary(1000));
// console.log(employee1.changeStatus("inactive"));
// console.log(employee1.getInfo());

// Methods called of object method of employeeManager

console.log(employeeManager.getActiveEmployees());
console.log(employeeManager.getITEmployees());
console.log(employeeManager.findEmployee("Maria"));
console.log(employeeManager.getTotalPayroll());
console.log(employeeManager.getAverageSalary());
console.log(employeeManager.getEmployeeNames());
console.log(employeeManager.getEmployeeReport());
console.log(employeeManager.updateSalary("David", 400));
console.log(employeeManager.changeEmployeeStatus("Gon", "inactive"));
console.log(employeeManager.getDepartmentCounts());