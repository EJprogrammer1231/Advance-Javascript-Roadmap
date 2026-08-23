const employee = {
    name: "Eljay",
    position: "Frontend Developer",
    salary: 25000,

    introduce() {
      console.log(`My name is ${this.name} and I am a ${this.position}.`);
    },

    getSalary() {
      console.log(`My salary is ${this.salary}`);
    },

    increaseSalary(amount) {
      this.salary += amount;
    }
};

employee.introduce();
employee.increaseSalary(5000);
employee.getSalary();