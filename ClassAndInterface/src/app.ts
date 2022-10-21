//Creating a class inn type script
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("department" + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();
const accountingCopy = { name: "s", describe: accounting.describe };
accountingCopy.describe();
