let employees = JSON.parse(localStorage.getItem("employees")) || [];

function saveData() {
  localStorage.setItem("employees", JSON.stringify(employees));
}

function loadData() {
  return employees;
}

export { employees, saveData, loadData };