const employee = {
  name: "Eljay",
  position: "Frontend Developer"
};

function introduceEmployee() {
  console.log(
    `My name is ${this.name} and I am a ${this.position}.`
  );
}

function introduceEmployees() {
  console.log(
    `My name is ${this.name} and I am a ${this.position}`
  );
}

const introduce = introduceEmployees.bind(employee);

introduce();