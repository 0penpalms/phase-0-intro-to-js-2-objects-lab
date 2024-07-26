// Write your solution in this file!
const employee = {};

function deleteFromEmployeeByKey(employee, key) {
    let copy = {
        ...employee
    };

    delete copy[key];

    return copy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    
    return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value;
     return employee;
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    }
};