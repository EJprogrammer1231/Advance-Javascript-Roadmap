import { employees, saveData, loadData } from "./storage.js";
import { calledAction } from "./employee.js";

const employees_submit = document.getElementById("employees-submit");
const input_name = document.getElementById("input-name");
const input_position = document.getElementById("input-position");
const input_salary = document.getElementById("input-salary");

let editTemporary = null;

loadData();
employees_submit.addEventListener("submit", (e) => {
  e.preventDefault();

  const input_name_val = input_name.value.trim();
  const input_position_val = input_position.value.trim();
  const input_salary_val = Number(input_salary.value);

  const validate = [
    input_name_val,
    input_position_val,
    input_salary_val
  ]

  if (validate.some(val => !val)) {
    alert("Please complete the fields!!");
    return;
  }

  const newEmployees = {
    id: crypto.randomUUID(),
    name: input_name_val,
    position: input_position_val,
    salary: input_salary_val
  }

  if (editTemporary === null) {
    employees.push(newEmployees);
  } else {
    const employeeEdit = employees.find(employeeId => employeeId.id === editTemporary);

    if (employeeEdit) {
      employeeEdit.name = input_name_val,
      employeeEdit.position = input_position_val,
      employeeEdit.salary = input_salary_val
    }

    editTemporary = null;
  }

  loadData();
  renderEmployees();
  employees_submit.reset();
});

function action() {
  return{
    editEmployees(id){
      const employeeToEdit = employees.find(emp => emp.id === id)

      if (!employeeToEdit) return;

      input_name.value = employeeToEdit.name;
      input_position.value = employeeToEdit.position;
      input_salary.value = employeeToEdit.salary;

      editTemporary = id;
    },
    deleteEmployees() {

    }
  }
}

const calledAction = action();

export default calledAction;
