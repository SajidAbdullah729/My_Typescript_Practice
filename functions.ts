// Function Declaration

// A simple function declaration to define a function. It is the most common way to define functions.

function fun(name: string): string {
  return `Hello, ${name}!`;
}

console.log(fun('Alice')); // Output: Hello, Alice!

// Function Expression


// A function defined as part of an expression, assigned to a variable. Useful for anonymous functions or when passing functions as arguments.

const fun = function(name: string): string {
  return `Hello, ${name}!`;
};

console.log(fun('Bob')); // Output: Hello, Bob!

// Arrow Function (Fat Arrow)


// A shorthand syntax for writing functions. It also captures the `this` context from the surrounding code.

const fun = (name: string): string => `Hello, ${name}!`;

console.log(fun('Charlie')); // Output: Hello, Charlie!

// Anonymous Function

// A function without a name. It is typically used when passing functions as arguments (e.g., in callbacks).

setTimeout(function() {
  console.log('Time’s up!');
}, 1000);

// Anonymous Arrow Function

// A shorthand version of anonymous functions using the arrow syntax.

setTimeout(() => {
  console.log('Time’s up!');
}, 1000);

// Rest Parameters
// Allows passing a variable number of arguments into a function as an array. Useful for handling flexible numbers of parameters.
function fun(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(fun(1, 2, 3, 4)); // Output: 10

// Optional Parameters

// Allows parameters to be optional, so the function can be called with fewer arguments.

function fun(name: string, age?: number): string {
  return age ? `${name} is ${age} years old.` : `Hello, ${name}!`;
}

console.log(fun('Alice')); // Output: Hello, Alice!
console.log(fun('Bob', 25)); // Output: Bob is 25 years old.

// Default Parameters

// Allows setting default values for parameters if they are not provided.

function fun(name: string, age: number = 30): string {
  return `${name} is ${age} years old.`;
}

console.log(fun('Alice')); // Output: Alice is 30 years old.
console.log(fun('Bob', 25)); // Output: Bob is 25 years old.

// Function Overloading

// Allows multiple function signatures for the same function name, providing different behaviors based on the parameters passed.

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

// TypeScript allows you to define the function's type explicitly, ensuring type safety when using functions.

let fun: (name: string) => string;

fun = (name: string) => `Hello, ${name}!`;

console.log(fun('Charlie')); // Output: Hello, Charlie!

// Methods Inside Classes

// Functions inside a class. Methods are used to define behaviors related to the class.

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
// Special methods to get and set properties in a class. They help control access to private fields.
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

// Used to handle asynchronous code in a more readable way. The async function always returns a promise.

async function fun(url: string): Promise<string> {
  const response = await fetch(url);
  const data = await response.json();
  return data.message;
}

fun('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Generator Functions

// Allows a function to return multiple values sequentially using `yield`. It can be paused and resumed.

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

// Immediately Invoked Function Expression (IIFE)
// A function that is immediately invoked after it is defined. Typically used for initializing or containing logic in a local scope.
(function() {
  console.log('This function is immediately invoked!');
})(); // Output: This function is immediately invoked!

// Callback Function
// A function passed as an argument to another function, typically for asynchronous operations or handling events.
function processUserData(id: number, callback: (data: string) => void) {
  // Simulating data fetching
  setTimeout(() => {
    const data = `User data for ID: ${id}`;
    callback(data);
  }, 1000);
}

processUserData(1, (data) => {
  console.log(data); // Output: User data for ID: 1
});

// Higher-Order Function
// A function that takes another function as an argument or returns a function. It is commonly used in functional programming.
function add(x: number, y: number): number {
  return x + y;
}

function operateOnNumbers(a: number, b: number, operation: (x: number, y: number) => number): number {
  return operation(a, b);
}

console.log(operateOnNumbers(2, 3, add)); // Output: 5

// Function with `this` keyword
// The `this` keyword refers to the current object within the function. It’s used to access properties and methods of that object.
const person2 = {
  name: 'John',
  greet: function(this: { name: string }) {
    return `Hello, ${this.name}`;
  },
};

console.log(person2.greet()); // Output: Hello, John

// Setters and Getters for Properties
// Getters and setters help to manage private properties in a class. They are useful for data validation or transforming values.
class Rectangle {
  private _width: number = 0;
  private _height: number = 0;

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log('Width must be greater than zero');
    }
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    if (value > 0) {
      this._height = value;
    } else {
      console.log('Height must be greater than zero');
    }
  }
}

const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log(`Area: ${rect.width * rect.height}`); // Output: Area: 50

// Function with Multiple Return Types (using Union Types)
// A function that returns multiple types of values based on conditions. It’s useful when the return type can vary.
function fun(value: string | number): string {
  if (typeof value === 'string') {
    return `String: ${value}`;
  } else {
    return `Number: ${value}`;
  }
}

console.log(fun('Hello')); // Output: String: Hello
console.log(fun(123)); // Output: Number: 123

// Chaining Functions
// A pattern where functions return the object itself, allowing for multiple method calls in a single statement.
class Calculator {
  private result: number = 0;

  add(value: number): Calculator {
    this.result += value;
    return this;
  }

  subtract(value: number): Calculator {
    this.result -= value;
    return this;
  }

  multiply(value: number): Calculator {
    this.result *= value;
    return this;
  }

  getResult(): number {
    return this.result;
  }
}

const calc = new Calculator();
console.log(calc.add(10).subtract(5).multiply(2).getResult()); // Output: 10

// Partial Function Application
// A technique where a function is pre-filled with some arguments, returning a new function.
function greet(greeting: string, name: string): string {
  return `${greeting}, ${name}!`;
}

const greetHello = greet.bind(null, 'Hello');
console.log(greetHello('Alice')); // Output: Hello, Alice!

// Currying Function
// A pattern where a function returns other functions to handle multiple arguments. Each function takes one argument at a time.
function multiply(a: number) {
  return function(b: number) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(3)); // Output: 6

// Throttling Function
// Limits the rate at which a function can be called. Useful for preventing performance issues during frequent events (e.g., scroll or resize).
function throttle(func: Function, limit: number) {
  let lastCall = 0;
  return function(this: any, ...args: any[]) {
    const now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      return func.apply(this, args);
    }
  };
}

const logMessage = throttle((msg: string) => console.log(msg), 2000);
logMessage('First'); // Output: First
logMessage('Second'); // (Will be ignored due to throttling)
setTimeout(() => logMessage('Third'), 2500); // Output: Third

// Debouncing Function
// Ensures that a function is only called after a specified delay, useful for reducing the number of calls (e.g., search input).
function debounce(func: Function, delay: number) {
  let timeout: NodeJS.Timeout;
  return function(this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const search = debounce((query: string) => console.log(query), 500);
search('Hello'); // Output: Hello (after 500ms)
search('World'); // (Previous query is canceled)
