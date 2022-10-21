//Creating a class inn type script
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("department" + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.printEmployeeInformation();
var accountingCopy = { name: "s", describe: accounting.describe };
//accountingCopy.describe();
