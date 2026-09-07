const employee = {
  name: "Michael",
  position: "Backend Developer",
  salary: 50000
};

function createEmployeeMessage(greeting) {
  return function(company) {
    console.log(greeting);
    console.log(`My name is ${this.name}`);
    console.log(`I am a ${this.position}`);
    console.log(`My salary is ${this.salary}`);
    console.log(`I work at ${company}`);
  };
}

const introduceEmployee = createEmployeeMessage.bind("Hello!");
introduceEmployee("Microdoft");
introduceEmployee("Google");
introduceEmployee("Amazon");