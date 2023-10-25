/*
=> Solve these questions.

Problem 1: Write a function to calculate the area of a triangle.

*/

function triangleArea(base, height) {
  return 0.5 * base * height;
}
/*

Problem 2: Write a function to convert degrees to radians.
*/

function degtoRad(degrees) {
  const pi = Math.PI;
  return degrees * (pi / 180);
}
/*
Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
*/

function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
}

/*
Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
*/

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
/*
Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
*/
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

/*
Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
*/

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 'This is a leap year';
  } else {
    return 'Not Leap year';
  }
}

/*

Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
*/

function removeDuplicates(array) {
  return [...new Set(array)];
}
/*
Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
*/

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

/*
Problem 9: Write a function to find the maximum of five numbers.

*/
function findMaxOfFive(a, b, c, d, e) {
  return Math.max(a, b, c, d, e);
}

/*
Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

*/
function evenOdd(str) {
  return str.length % 2 === 0 ? 'even' : 'odd';
}
/*
=> Questions and Answers:

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.
Answer: 
Use 'if...else' for complex conditions or when the conditions are not solely value-based comparisons.
Use 'switch' when comparing a single expression against multiple potential values for cleaner, more readable code.

2. What is JavaScript, and what is its primary purpose in web development?
Answer: 
JavaScript is a programming language that adds interactivity to websites. It is used to create dynamic and interactive web pages and web applications.

3. Explain the difference between var, let, and const when declaring variables in JavaScript.
Answer: 
var is a very old way to assign values to a variable. It is function scoped. It's hoisted to the top of its context and can be redefined and reassigned.
let and const are newer ways to declare variables. They are block-scoped. Both are hoisted but to their block context.
let can be reassigned but not redeclared.
const cannot be reassigned or redeclared.

4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
Answer: 
Global scope: Variables declared outside a function can be accessed anywhere in the program.
Local scope: Variables declared inside a function can only be accessed within that function.

5. What is the difference between "null" and "undefined" in JavaScript?
Answer: 
null is an intentional absence of any value or object.
undefined indicates that a variable has been declared but has not been assigned a value yet.

=> Assignment Details:
Each question is worth 5 marks.
Deadline: October 25, 2023, at 8:00 PM.
*/
