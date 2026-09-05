import { calledAction } from "./employee.js";
const employees_list = document.getElementById("employees-list");

function renderEmployees() {
  employees_list.innerHTML = "";

  employees.forEach(employee => {
    const rowsTr = document.createElement("tr");
    const buttonTd = document.createElement("td");

    const edit = document.createElement("button");
    const deleteBtn = document.createElement("button");

    edit.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    rowsTr.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.position}</td>
      <td>${employee.salary}</td>
    `;

    edit.addEventListener("click", () => {
      calledAction.editEmployees(employee.id);
    });

    deleteBtn.addEventListener("click", () => {
      calledAction.editEmployees(employee.id);
    });

    buttonTd.appendChild(edit);
    buttonTd.appendChild(deleteBtn);

    rowsTr.appendChild(buttonTd);
    employees_list.appendChild(rowsTr);
  });
}