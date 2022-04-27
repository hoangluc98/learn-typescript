var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var num1 = 1;
var num2 = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
console.log("Enum", Enum);
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
console.log("nameOfA", nameOfA);
console.log(addNumber(num1, num2));
function addNumber(a, b) {
    return a + b;
}
var userInputElement = document.querySelector("#user-name");
if (userInputElement) {
    userInputElement.value = "test";
}
var errorBag = {
    email: 'Not a valid email',
    name: 'Name is too long'
};
function addSth(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(addSth(1, 2));
console.log(addSth('Hoang', ' Luc'));
var names = [];
names[0] = 'Hoang Luc';
names[2] = 333;
names[0].split('');
var getTuple = function (a, b) {
    return [a, b];
};
var stringArray = getTuple('hello', 'world');
var numberArray = getTuple(1.25, 2.56);
var mixedArray = getTuple(1.25, 'world');
function mergeObjs(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var mergedObj = mergeObjs({ a: 1 }, { b: 2 });
console.log('mergedObj', mergedObj);
var bmw = { name: "BMW", power: "1000hp" };
var person = {
    name: 'Hoang Luc',
    age: 24
};
function getProperty(obj, key) {
    return obj[key];
}
var err = getProperty(person, 'name');
console.log('property', err);
