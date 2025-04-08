// Function Declaration
function fun(name: string): string {
  return `Hello, ${name}!`;
}

console.log(fun('Alice')); // Output: Hello, Alice!

// Function Expression
const fun = function(name: string): string {
  return `Hello, ${name}!`;
};

console.log(fun('Bob')); // Output: Hello, Bob!

// Arrow Function (Fat Arrow)
const fun = (name: string): string => `Hello, ${name}!`;

console.log(fun('Charlie')); // Output: Hello, Charlie!

// Anonymous Function
setTimeout(function() {
  console.log('Time’s up!');
}, 1000);

// Anonymous Arrow Function
setTimeout(() => {
  console.log('Time’s up!');
}, 1000);

// Rest Parameters
function fun(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(fun(1, 2, 3, 4)); // Output: 10

// Optional Parameters
function fun(name: string, age?: number): string {
  return age ? `${name} is ${age} years old.` : `Hello, ${name}!`;
}

console.log(fun('Alice')); // Output: Hello, Alice!
console.log(fun('Bob', 25)); // Output: Bob is 25 years old.

// Default Parameters
function fun(name: string, age: number = 30): string {
  return `${name} is ${age} years old.`;
}

console.log(fun('Alice')); // Output: Alice is 30 years old.
console.log(fun('Bob', 25)); // Output: Bob is 25 years old.

// Function Overloading
function fun(name: string): string;
function fun(name: string, age: number): string;
function fun(name: string, age?: number): string {
  if (age === undefined) {
    return `Hello, ${name}!`;
  } else {
    return `${name} is ${age} years old.`;
  }
}

console.log(fun('Alice')); // Output: Hello, Alice!
console.log(fun('Bob', 25)); // Output: Bob is 25 years old.

// Function as a Type
let fun: (name: string) => string;

fun = (name: string) => `Hello, ${name}!`;

console.log(fun('Charlie')); // Output: Hello, Charlie!

// Methods Inside Classes
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  fun(): string {
    return `Hello, ${this.name}!`;
  }
}

const person = new Person('David');
console.log(person.fun()); // Output: Hello, David!

// Getter and Setter Methods
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

const person = new Person('Edward');
console.log(person.name); // Output: Edward
person.name = 'Frank';
console.log(person.name); // Output: Frank

// Asynchronous Functions (async/await)
async function fun(url: string): Promise<string> {
  const response = await fetch(url);
  const data = await response.json();
  return data.message;
}

fun('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Generator Functions
function* fun(limit: number): Generator<number, void, unknown> {
  let count = 0;
  while (count < limit) {
    yield count;
    count++;
  }
}

const counter = fun(3);
console.log(counter.next().value); // Output: 0
console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2
console.log(counter.next().value); // Output: undefined
