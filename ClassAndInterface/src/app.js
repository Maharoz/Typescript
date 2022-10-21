//Creating a class inn type script
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("department" + this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.describe();
