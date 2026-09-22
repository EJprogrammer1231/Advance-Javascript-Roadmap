function Employee(name, position, department, salary, status) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
    this.status = status;
}

const employee1 = new Employee("Eljay", "Frontend Developer", "IT", 25000, "active")
const employee2 = new Employee("Gon", "Backend Developer", "IT", 35000, "active")
const employee3 = new Employee("Maria", "HR Specialist", "HR", 22000, "inactive")
const employee4 = new Employee("Sarah", "Accountant", "Finace", 28000, "active")
const employee5 = new Employee("David", "UI Designer", "Designer", 30000, "active")

const employeeManager = {
    employees: [
        employee1,
        employee2,
        employee3,
        employee4,
        employee5
    ],

    getActiveEmployees() {
        const activeEmployees = this.employees.filter(employee => {
            return employee.status === "active";
        });

        return activeEmployees;
    },

    getITEmployees() {
        const itEmployees = this.employees.filter(employee => {
            return employee.department === "IT";    
        });

        return itEmployees;
    },

    findEmployee(name) {
        const employeeName = this.employees.find(employee => {
            return employee.name === name;
        });

        return employeeName;
    },

    getTotalPayroll() {
        const totalPayroll = this.employees.reduce((total, employee) => {
            return total += employee.salary;
        }, 0);

        return totalPayroll;
    },

    getAverageSalary() {
         // Guard clause to prevent division by zero if array is empty
        if (this.employees.length === 0) return 0;
        
        // Correct fix: Call the method with () to get the number, then divide
        return this.getTotalPayroll() / this.employees.length;
    },

    getEmployeeNames() {
        const employeeNames = this.employees.map(employee => employee.name);
        return employeeNames;
    },

    getEmployeeReport() {
        const employeeReport = this.employees.map(report => report);
        return employeeReport;
    },

    updateSalary(name, amount) {
        const updateEmployee = this.employees.find(employee => employee.name === name);

        this.amount = amount;

        this.amount = this.amount - updateEmployee.salary

        return this.amount;
    },

    changeEmployeeStatus(name, newStatus) {

    },

    getDepartmentCounts() {

    }
}

console.log(employeeManager.getActiveEmployees());
console.log(employeeManager.getITEmployees());
console.log(employeeManager.findEmployee("Sarah"));
console.log(employeeManager.getTotalPayroll());
console.log(employeeManager.getAverageSalary());
console.log(employeeManager.getEmployeeNames());
console.log(employeeManager.getEmployeeReport());
console.log(employeeManager.updateSalary("Sarah", 18000));