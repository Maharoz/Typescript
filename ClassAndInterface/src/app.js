//Creating a class inn type script
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting);
