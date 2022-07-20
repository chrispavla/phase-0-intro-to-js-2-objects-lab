const employee = {
  name: "Kristina",
  streetAddress: "E South Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newObj = { ...employee };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newEmp = { ...employee };
  delete newEmp[key];
  return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// function updateEmployeeWithKeyAndValue(employee, key, value) {

//     const newEmp = { ...employee };
//     newEmp[key] = value;

//     return newEmp;
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

//     employee[key] = value;

//     return employee;
// }

// function deleteFromEmployeeByKey(employee, key) {

//     const newEmployee = { ...employee};
//     delete newEmployee[key];

//     return newEmployee;

// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];

//     return employee;

// }
