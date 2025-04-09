

// 1. Declare a simple array of numbers

let numbers: number[] = [1, 2, 3, 4, 5];

// Purpose: Storing a list of numeric values



// 2. Declare an array of strings

let fruits: string[] = ["apple", "banana", "cherry"];

// Purpose: Storing a list of fruit names

// 3. Using generics to define an array
let bools: Array<boolean> = [true, false, true];
// Purpose: Alternative way to declare array types

// 4. Access elements by index
console.log(fruits[0]); // "apple"
// Purpose: Accessing elements in an array

// 5. Update an element by index
fruits[1] = "mango";
console.log(fruits); // ["apple", "mango", "cherry"]
// Purpose: Modifying values in an array

// 6. Add a new element using push()
numbers.push(6);
// Purpose: Appending elements to the end

// 7. Remove the last element using pop()
numbers.pop();
// Purpose: Removing the last element

// 8. Add element at the start using unshift()
fruits.unshift("orange");
// Purpose: Adding element at the beginning

// 9. Remove first element using shift()
fruits.shift();
// Purpose: Removing element from the beginning

// 10. Iterate over an array using for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Number:", numbers[i]);
}
// Purpose: Looping through array elements

// 11. Iterate using for...of
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}
// Purpose: Clean iteration of arrays

// 12. Map an array to create a new one
let doubled = numbers.map(n => n * 2);
console.log(doubled);
// Purpose: Transforming each element

// 13. Filter elements based on condition
let even = numbers.filter(n => n % 2 === 0);
console.log(even);
// Purpose: Getting only elements that match a condition

// 14. Find the first element matching a condition
let firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven);
// Purpose: Find a specific item

// 15. Check if an array includes a value
console.log(fruits.includes("banana")); // false
// Purpose: Check for existence of an element

// 16. Concatenate two arrays
let moreNumbers = [6, 7, 8];
let allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers);
// Purpose: Combine two arrays

// 17. Slice a part of the array
let someFruits = fruits.slice(0, 2);
console.log(someFruits);
// Purpose: Get a sub-array without modifying the original

// 18. Splice to add/remove elements
fruits.splice(1, 1, "kiwi");
console.log(fruits);
// Purpose: Modify the array in place

// 19. Sort elements
let sortedNumbers = [3, 1, 4, 2].sort((a, b) => a - b);
console.log(sortedNumbers);
// Purpose: Sort numbers in ascending order

// 20. Reduce array to a single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);
// Purpose: Calculate total from array elements

