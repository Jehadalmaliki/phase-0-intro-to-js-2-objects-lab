// Write your solution in this file!
const employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // make a copy of the original employee object to avoid modifying it directly
  let updatedEmployee = {...employee };
  // add the new key value pair to the copy of the object
  updatedEmployee[key] = value;
  // return the copy of the object with the new key value pair
  return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // directly update the original object with the new key value pair
  employee[key] = value;
  // return the updated object
  return employee;
}
function  deleteFromEmployeeByKey(employee, key){
   // Create a new object that is a copy of the original employee object
  // but with the specified key deleted
  const employeeCopy = Object.assign({}, employee);
  delete employeeCopy[key];

  // Return the modified copy
  return employeeCopy;
}
function    destructivelyDeleteFromEmployeeByKey(employee, key){
 // Delete the specified key from the employee object
 delete employee[key];

 // Return the modified employee object
 return employee;

}
