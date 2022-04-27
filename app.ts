const num1: number = 1;
const num2: number = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 1, AUTHOR };
enum Enum {
  A,
}
 
console.log("Enum", Enum)
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log("nameOfA", nameOfA)

console.log(addNumber(num1, num2));
function addNumber(a: number, b: number) {
  return a + b;
}

const userInputElement = document.querySelector("#user-name") as HTMLInputElement
if (userInputElement) {
  userInputElement.value = "test"
}

interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  name: 'Name is too long',
};

type Combinable = string | number
function addSth(a: number, b: number): number
function addSth(a: string, b: string): string
function addSth(a: number, b: string): string
function addSth(a: string, b: number): string
function addSth(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

console.log(addSth(1, 2))
console.log(addSth('Hoang', ' Luc'))

const names: Array<string | number> = []
names[0] = 'Hoang Luc'
names[2] = 333

names[0].split('')

type Tuple = <T, U>( a: T, b: U ) => [ T, U ]
let getTuple: Tuple = ( a, b ) => {
  return [ a, b ];
}

let stringArray = getTuple<string, string>( 'hello', 'world' );

let numberArray = getTuple( 1.25, 2.56 );

let mixedArray = getTuple( 1.25, 'world' );

function mergeObjs<U extends object, V extends object>(obj1: U, obj2: V) {
  return { ...obj1, ...obj2 }
}
const mergedObj = mergeObjs({ a: 1 }, { b: 2 })
console.log('mergedObj', mergedObj)

type Point = { x: number, y: number }
type P = keyof typeof errorBag

const bmw = { name: "BMW", power: "1000hp" }
type CarLiteralType = keyof typeof bmw

type Person = {
  name: string;
  age: number;
}
const person: Person = {
  name: 'Hoang Luc',
  age: 24,
}
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
const err = getProperty(person, 'name')
console.log('property', err)
