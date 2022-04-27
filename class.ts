class Department {
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployees(employee: string) {
    this.employees.push(employee)
  }
}

class ITDepartment extends Department {
  admins: string[]

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  addEmployees(employee: string) {
    if (employee === 'Max') return
    this.employees.push(employee)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport() {
    if (!this.lastReport) {
      throw new Error ('No Report Found.')
    }
    
    return this.lastReport
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error ('Please pass in a valid value!')
    }
    
    this.addReport(value)
  }

  constructor(id: string, reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  addEmployees(employee: string) {
    if (employee === 'Max') return
    this.employees.push(employee)
  }

  addReport(text: string) {
    this.lastReport = text
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance
    }

    this.instance = new AccountingDepartment('Test', [])
    return this.instance
  }
}

const it = new ITDepartment('IT123', ['Admin']);
it.describe();
it.addEmployees('Luc')
it.addEmployees('Max')
console.log(it)

const account = AccountingDepartment.getInstance();
account.mostRecentReport = "Something..."
console.log(account)

// type addFn = (a: number, b: number) => number;
interface addFn {
  (a: number, b: number): number
}
const add: addFn = (n1: number, n2: number) => {
  return n1 + n2
}

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void
}

class People implements Greetable {
  name: string = 'adasdasd'

  greet(phrase: string) {
    console.log(phrase)
  }

  // constructor(n: string) {
  //   this.name = n
  // }
}
