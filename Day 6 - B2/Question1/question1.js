let employees = [
  {
    name: "Abhisek",
    age: "27",
    city: "Bhubaneswar",
    salary: "28000",
  },
  {
    name: "Ashutosh",
    age: "25",
    city: "Noida Sec. 16",
    salary: "29000",
  },
  {
    name: "Saikiran",
    age: "29",
    city: "Saltlake City",
    salary: "60000",
  },
  {
    name: "Sourav",
    age: "24",
    city: "Medinipur",
    salary: "45000",
  },
  {
    name: "RohiniV",
    age: "25",
    city: "ITO",
    salary: "75000",
  },
];

function display(superarray) {
  let tabledata = "";
  superarray.forEach(function (employee, index) {
    let currentrow = `<tr>
    <td>${index + 1}</td>
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.city}</td>
    <td>${employee.salary}</td>
    <td><button onCLick = deleteEmployee(${index})>Delete</button></td>
    </tr>`;

    tabledata += currentrow;
  });
  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
display(employees);

function searchByName() {
  let searchValue = document.getElementById("searchName").value;

  let newdata = employees.filter(function (employee) {
    return employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });
  display(newdata);
}
searchByName();

function searchByCity() {
  let searchValue2 = document.getElementById("searchCity").value;
  let newdata = employees.filter(function (employee) {
    return (
      employee.city.toUpperCase().indexOf(searchValue2.toUpperCase()) != -1
    );
  });
  display(newdata);
}
searchByCity();

function deleteEmployee(index) {
  employees.splice(index, 1);
  display(employees);
}
