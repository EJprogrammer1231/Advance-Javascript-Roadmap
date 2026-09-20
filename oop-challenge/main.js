function Employee(name, position, department, salary, status) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
    this.status = status;

    this.introduce = function() {
        return `Hi, I'm ${this.name} and I'm a ${this.position}.`;
    }

    this.increaseSalary = function(amount) {
        this.salary = this.salary + amount;

        return this.salary;
    }

    this.changeStatus = function(newStatus) {
        this.status = newStatus;

        return this.status;
    }

    // For getting the updated object
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

const employee1 = new Employee("Eljay", "Frontend Developer", "IT", 25000, "active");
const employee2 = new Employee("Gon", "Backend Developer", "IT", 35000, "active");
const employee3 = new Employee("Maria", "HR Specialist", "HR", 22000, "inactive");
const employee4 = new Employee("David", "Accountant", "Finance", 28000, "active");
const employee5 = new Employee("Sarah", "UI Designer", "Design", 30000, "active");

console.log(employee1.introduce());
console.log(employee1.increaseSalary(2500));
console.log(employee1.changeStatus("inactive"));

const employeeManager = {
    employees: [
        employee1,
        employee2,
        employee3,
        employee4,
        employee5
    ]
};

console.log(employeeManager.employees);