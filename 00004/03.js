const employees = [
  {
    id: 1,
    name: "Eljay",
    position: "Frontend Developer",
    salary: 25000
  },
  {
    id: 2,
    name: "Gon",
    position: "Backend Developer",
    salary: 30000
  },
  {
    id: 3,
    name: "Ging",
    position: "Project Manager",
    salary: 40000
  }
];

const updateEmployees = employees.map((employee) => {
  if (employee.id === 2) {
    return {
      ...employee,
      salary: 35000
    }
  } else {
    return {
      ...employee
    }
  }
});

console.log(updateEmployees);