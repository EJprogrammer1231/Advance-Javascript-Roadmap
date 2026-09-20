function Employee(name, position, salary, status) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.status = status;

    this.introduce = function() {
        return `Hi, i'm ${this.name} and I'm a ${this.position}.`;
    }

    this.increaseSalary = function(amount) {
        this.salary = this.salary + amount;

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
        salary: this.salary,
        status: this.status
       }
    }
}

const getEmployee = new Employee("Eljay", "Frontend Developer", 25000, "active");

console.log(getEmployee.introduce());
console.log(getEmployee.increaseSalary(3050));
console.log(getEmployee.changeStatus("inactive"));
console.log(getEmployee.getInfo());
