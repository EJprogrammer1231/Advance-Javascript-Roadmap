const main_form = document.getElementById("main-form");
const input_name = document.getElementById("input-name");
const input_position = document.getElementById("input-position");
const input_department = document.getElementById("input-department");
const input_salary = document.getElementById("input-salary");
const select_status = document.getElementById("status");

main_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input_name_val = input_name.value.trim();
  const input_position_val = input_position.value.trim();
  const input_department_val = input_department.value.trim();
  const input_salary_val = Number(input_salary.value.trim());
  const select_status_val = select_status.value;

  const objEmployee = {
    name: input_name_val,
    position: input_position_val,
    department: input_department_val,
    salary: input_salary_val,
    status: select_status_val
  }

  usersList.createEmployees(objEmployee);
  main_form.reset();
});