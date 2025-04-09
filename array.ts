

// Declare a simple array of numbers

let numbers: number[] = [1, 2, 3, 4, 5];
// Purpose: Storing a list of numeric values

// Declare an array of strings

let fruits: string[] = ["apple", "banana", "cherry"];
// Purpose: Storing a list of fruit names

// Using generics to define an array

let bools: Array<boolean> = [true, false, true];
// Purpose: Alternative way to declare array types

// Access elements by index

console.log(fruits[0]); // "apple"
// Purpose: Accessing elements in an array

// Update an element by index

fruits[1] = "mango";
console.log(fruits); // ["apple", "mango", "cherry"]
// Purpose: Modifying values in an array

// Add a new element using push()

numbers.push(6);
// Purpose: Appending elements to the end

// Remove the last element using pop()

numbers.pop();
// Purpose: Removing the last element

// Add element at the start using unshift()
fruits.unshift("orange");
// Purpose: Adding element at the beginning

// Remove first element using shift()
fruits.shift();
// Purpose: Removing element from the beginning

// Iterate over an array using for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Number:", numbers[i]);
}
// Purpose: Looping through array elements

// Iterate using for...of
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}
// Purpose: Clean iteration of arrays

// Map an array to create a new one
let doubled = numbers.map(n => n * 2);
console.log(doubled);
// Purpose: Transforming each element

// Filter elements based on condition
let even = numbers.filter(n => n % 2 === 0);
console.log(even);
// Purpose: Getting only elements that match a condition

// Find the first element matching a condition
let firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven);
// Purpose: Find a specific item

// Check if an array includes a value
console.log(fruits.includes("banana")); // false
// Purpose: Check for existence of an element

// Concatenate two arrays
let moreNumbers = [6, 7, 8];
let allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers);
// Purpose: Combine two arrays

// Slice a part of the array
let someFruits = fruits.slice(0, 2);
console.log(someFruits);
// Purpose: Get a sub-array without modifying the original

// Splice to add/remove elements
fruits.splice(1, 1, "kiwi");
console.log(fruits);
// Purpose: Modify the array in place

// Sort elements
let sortedNumbers = [3, 1, 4, 2].sort((a, b) => a - b);
console.log(sortedNumbers);
// Purpose: Sort numbers in ascending order

// Reduce array to a single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);
// Purpose: Calculate total from array elements

// Check if all elements meet a condition
let allPositive = numbers.every(n => n > 0);
console.log("All positive?", allPositive);
// Purpose: Validate every element

// Check if some elements meet a condition
let hasEven = numbers.some(n => n % 2 === 0);
console.log("Has even?", hasEven);
// Purpose: Check if at least one matches

// Create an array using Array constructor
let emptyArray = new Array(3);
console.log(emptyArray); // [empty × 3]
// Purpose: Predefine size

// Fill an array with a static value
let filledArray = new Array(5).fill(0);
console.log(filledArray); // [0, 0, 0, 0, 0]
// Purpose: Initialize with default values

// Reverse an array
let reversed = [...numbers].reverse(); // avoid mutating original
console.log(reversed);
// Purpose: Reversing the order of elements

// Flatten a nested array
let nested = [1, [2, 3], [4, [5]]];
let flat = nested.flat(2);
console.log(flat); // [1, 2, 3, 4, 5]
// Purpose: Convert nested arrays to a single array

// Destructure values from array
let [first, second] = fruits;
console.log(first, second);
// Purpose: Extract elements quickly

// Use array of objects
let users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
users.forEach(user => console.log(user.name));
// Purpose: Store structured data

// Combine map & filter
let highScores = [40, 60, 80, 90]
  .filter(score => score >= 70)
  .map(score => `Passed: ${score}`);
console.log(highScores);
// Purpose: Chain transformations

// Create a typed 2D array
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
console.log(matrix[1][0]); // 3
// Purpose: Represent grid-like structures (e.g., for games or tables)

// 2D Array with mixed data types
let mixedMatrix: (string | number)[][] = [
  [1, "apple", 3],
  [4, "banana", 6],
];
console.log(mixedMatrix[0][1]); // "apple"
// Purpose: Representing data with multiple data types in a 2D array

// 3D Array (a cube of numbers)
let cube: number[][][] = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(cube[1][1][0]); // 7
// Purpose: Representing 3-dimensional data

// Array with multiple data types in 3D
let complexCube: (string | number)[][][] = [
  [
    [1, "x"],
    ["y", 4],
  ],
  [
    ["a", 6],
    [7, "b"],
  ],
];
console.log(complexCube[0][1][1]); // 4
// Purpose: Complex 3D array with mixed data types

// Nested Array with different dimensions
let jaggedArray: (number | string)[][] = [
  [1, 2, 3],
  ["apple", "banana"],
  [10, 20],
];
console.log(jaggedArray[1][0]); // "apple"
// Purpose: Array with varying inner array sizes

// Convert a 2D array into a flat array using reduce
let flattenedArray = matrix.reduce((acc, row) => acc.concat(row), []);
console.log(flattenedArray);
// Purpose: Flattening a 2D array into a 1D array

// Create a 2D array dynamically
let rows = 3, cols = 4;
let dynamic2DArray: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));
console.log(dynamic2DArray);
// Purpose: Dynamically creating a 2D array with specified rows and columns

// Multi-dimensional array for representing a grid of game tiles
let gameBoard: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "X", "O"],
];
console.log(gameBoard[0][1]); // "O"
// Purpose: Representing a grid for a game like Tic-Tac-Toe

// Array of arrays with different data types and structure
let mixedArray: (string | number | boolean)[][] = [
  [1, "apple", true],
  [false, "banana", 3],
];
console.log(mixedArray[1][1]); // "banana"
// Purpose: Multi-type and multi-dimensional array

// 2D Array storing data for a table
let tableData: { id: number; name: string }[][] = [
  [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }],
  [{ id: 3, name: "Charlie" }, { id: 4, name: "David" }],
];
console.log(tableData[0][1].name); // "Bob"
// Purpose: Representing tabular data in a 2D array

// Create a multi-dimensional array with function values
let funcArray: ((x: number) => number)[][] = [
  [(x) => x * 2, (x) => x + 1],
  [(x) => x - 1, (x) => x / 2],
];
console.log(funcArray ); // 10
// Purpose: Storing functions inside arrays
