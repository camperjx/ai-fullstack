/*
In this example, the variable `name` is declared using `var`, which has function scope. 
Therefore, when we reassign the value of `name` inside the `if` block, it affects the outer scope as well.
*/
// 作业 1：Let、Const 和 Var
var name = 'Alice'
if (true) {
    var name = 'Bob'
    console.log(name) // Output: Bob
}
console.log(name) // Output: Bob

/*
In this example, the variable `name2` is declared using `const`, which has block scope. 
Therefore, when we declare a new variable with the same name inside the `if` block, 
it does not affect the outer scope.
*/
// 作业 2：箭头函数
const name2 = 'Alice'
if (true) {
    const name2 = 'Bob'
    console.log(name2) // Output: Bob
}
console.log(name2) // Output: Alice

/*
In this example, 
functions are defined using both traditional function syntax and arrow function syntax.
*/
// A simple function that adds two numbers
// 作业 3：模板字面量
function add(a, b) {
    return a + b;
}
// An arrow function that adds two numbers
const add1 = (a, b) => {
    return a + b;
}
// A more concise arrow function that adds two numbers
const add2 = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
console.log(add1(2, 3)); // Output: 5
console.log(add2(2, 3)); // Output: 5

// functions defined using traditional function syntax have their own `this` context,
// while arrow functions do not have their own `this` context and instead inherit it from the surrounding scope.
/**
 * 
 * 
 * 箭头函数适合：
    1. 简单的函数体，只有一行代码
    2. 不需要自己的 this 上下文的函数
    3. 回调函数
        map
        filter
        reduce
    7. 如果对象方法中需要使用 this，通常更推荐使用普通函数。

 */
const user1 = {
    name: 'Alice',
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

user1.sayHello(); // Output: Hello, my name is Alice

const user2 = {
    name: 'Bob',
    sayHello: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

user2.sayHello(); // Output: Hello, my name is undefined

// template literals allow for easier string interpolation and multi-line strings.
// const name = 'Alice';
// const greeting = `Hello, ${name}!
// Welcome to the course.`;

// console.log(greeting);

// 
// 作业 4：解构赋值
const person = {
    name: 'Alice',
    age: 25,
    city: 'Sydney'
};
// traditional way of accessing object properties
// const name = person.name;
// const age = person.age;

// using destructuring assignment to extract properties from the object
// const { name2, age2} = person;

// console.log(name2);
// console.log(age2);

const introduce = ({ name3, age3 }) => {
    console.log(`My name is ${name3} and I am ${age3} years old.`);
}

introduce(person); // Output: My name is Alice and I am 25 years old.   

// default parameters allow you to specify default values for function parameters.
// function calculateArea(width, height) {
//     return width * height;
// }
// 作业 5：默认参数
function calculateArea(width = 1, height = 1) {
    return width * height;
}

console.log(calculateArea());

//rest / spread operators allow you to work with variable numbers of arguments and arrays.`
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); // Output: 5

// Using rest parameters to handle variable number of arguments
// 作业 6：Rest / Spread 运算符
function sumAll(...numbers) {
    // return numbers.reduce((total, num) => total + num, 0);
    let total = 0;
    for (let num of numbers) {
        // console.log(num);
        total += num;
    }   
    return total;
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// using spread operator to pass an array of numbers as individual arguments
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4]  