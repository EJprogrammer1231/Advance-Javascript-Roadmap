/*
const student = {
    name: "Eljay",
    course: "Computer Science",
    year: 3
};

const student2 = {
    name: "John",
    course: "Information Technology",
    year: 2
};

function introduceStudent() {
    console.log(
        `My name is ${this.name}, I study ${this.course}, and I am a ${this.year}rd year student.`
    );
}

introduceStudent.call(student);
introduceStudent.call(student2);
*/

const employee = {
    name: "Eljay",
    position: "Frontend Developer"
};

function introduceEmployee(greeting, message) {
    console.log(
        `${greeting} ${this.name}, you are a ${this.position}. ${message}`
    );
}

introduceEmployee.apply(employee,[employee.name,employee.position]);