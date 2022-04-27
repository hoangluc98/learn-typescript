"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    addEmployees(employee) {
        if (employee === 'Max')
            return;
        this.employees.push(employee);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "IT");
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (!this.lastReport) {
            throw new Error('No Report Found.');
        }
        return this.lastReport;
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    addEmployees(employee) {
        if (employee === 'Max')
            return;
        this.employees.push(employee);
    }
    addReport(text) {
        this.lastReport = text;
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('Test', []);
        return this.instance;
    }
}
const it = new ITDepartment('IT123', ['Admin']);
it.describe();
it.addEmployees('Luc');
it.addEmployees('Max');
console.log(it);
const account = AccountingDepartment.getInstance();
account.mostRecentReport = "Something...";
console.log(account);
const add = (n1, n2) => {
    return n1 + n2;
};
class People {
    constructor() {
        this.name = 'adasdasd';
        // constructor(n: string) {
        //   this.name = n
        // }
    }
    greet(phrase) {
        console.log(phrase);
    }
}
