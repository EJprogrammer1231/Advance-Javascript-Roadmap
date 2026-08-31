const employee1 = {
  name: "Eljay",
  position: "Frontend Developer",
  department: "IT"
};

const employee2 = {
  name: "John",
  position: "Backend Developer",
  department: "Engineering"
};

const employee3 = {
  name: "Anna",
  position: "UI Designer",
  department: "Design"
};

function sendMessage(message) {
  console.log(`Hi ${this.name}! You have a new message: ${message}`);
}

const eljayMessage = sendMessage.bind(employee1);

eljayMessage("Your meeting is at 3 PM.");