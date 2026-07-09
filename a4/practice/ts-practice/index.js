"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => {
    return a + b;
};
const result = add(5, 10);
console.log(`The result of adding 5 and 10 is: ${result}`);
const greet = (person) => {
    const { name, age } = person;
    console.log(`Hello, ${name}! You are ${age} years old.`);
};
const user = { name: 'Felix', age: 18 };
greet(user);
// Example of using a class in TypeScript
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hello, ${this.name}! You are ${this.age} years old.`);
    }
}
const student = new Student('Alice', 20);
student.introduce();
//# sourceMappingURL=index.js.map