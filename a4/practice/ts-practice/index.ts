const add = (a: number, b: number): number => {
    return a + b;
}

const result: number = add(5, 10);
console.log(`The result of adding 5 and 10 is: ${result}`);

// Example of using an interface in TypeScript
interface Person {
    name: string;
    age: number;
}

const greet = (person: Person): void => {
    const {name, age} = person;
    console.log(`Hello, ${name}! You are ${age} years old.`)  ;
}

const user: Person = { name: 'Felix', age: 18 };
greet(user);

// Example of using a class in TypeScript
class Student {
     name: string;
     age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): void {
        console.log(`Hello, ${this.name}! You are ${this.age} years old.`);
    }
}

const student = new Student('Alice', 20);
student.introduce();