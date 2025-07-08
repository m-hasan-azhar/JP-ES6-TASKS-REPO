// ES6 JAVASCRIPT EXAMPLES

console.log("=== GLOBAL SCOPE EXAMPLES ===");

// Global Scope
var globalVar = "I am a var variable";
let globalLet = "I am a let variable";
const globalConst = "I am a const variable";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Are they accessible globally?
// Yes, all three are accessible in the global scope of this script.
// In browsers, only 'var' attaches to the window object, but all are accessible here.

console.log("\n=== FUNCTION SCOPE EXAMPLES ===");

// Function Scope
function testFunctionScope() {
    var functionVar = "I am a var inside function";
    let functionLet = "I am a let inside function";
    const functionConst = "I am a const inside function";
}

testFunctionScope();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);

// Observation:
// All three variables declared inside the function are NOT accessible outside the function.
// Attempting to log them results in ReferenceError.

console.log("\n=== BLOCK SCOPE EXAMPLES ===");

// Block Scope
if (true) {
    var blockVar = "I am a var inside block";
    let blockLet = "I am a let inside block";
    const blockConst = "I am a const inside block";
}

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);

// Observation:
// 'var' is function-scoped, so it is accessible outside the block.
// 'let' and 'const' are block-scoped, so they are NOT accessible outside the block.

console.log("\n=== HOISTING EXAMPLES ===");

// Hoisting with var
console.log(hoistedVar);
var hoistedVar = "I am hoisted";

// Observation:
// Logging a 'var' variable before declaration gives 'undefined' due to hoisting.
// The declaration is hoisted, but not the initialization.

// Hoisting with let and const
console.log(hoistedLet);
let hoistedLet = "I am let";

console.log(hoistedConst);
const hoistedConst = "I am const";

// Observation:
// Logging 'let' and 'const' variables before declaration results in ReferenceError.
// Unlike 'var', 'let' and 'const' are not hoisted.

console.log("\n=== RE-DECLARATION EXAMPLES ===");

// Re-declaration
var redeclareVar = "First var";
var redeclareVar = "Second var";

let redeclareLet = "First let";
// let redeclareLet = "Second let"; // Error: Cannot redeclare block-scoped variable

const redeclareConst = "First const";
// const redeclareConst = "Second const"; // Error: Cannot redeclare block-scoped variable

// Observation:
// 'var' allows re-declaration, but 'let' and 'const' do not.

console.log("\n=== RE-ASSIGNMENT EXAMPLES ===");

// Re-assignment
var reassignVar = "Original var";
reassignVar = "New var";

let reassignLet = "Original let";
reassignLet = "New let";

const reassignConst = "Original const";
reassignConst = "New const";

// Observation:
// 'var' and 'let' allow re-assignment, but 'const' does not.

console.log("\n=== TEMPORAL DEAD ZONE EXAMPLES ===");

// Temporal Dead Zone (TDZ)
{
    console.log(tdzLet);
    let tdzLet = "I am let in TDZ";
}

{
    console.log(tdzConst);
    const tdzConst = "I am const in TDZ";
}

// What error do you get? Why?
// ReferenceError: Cannot access variable before initialization
// This happens because let and const are hoisted but not initialized until the actual declaration line.
// The time between the start of the scope and the declaration is called the "Temporal Dead Zone".

console.log("\n=== WHEN TO USE VAR, LET, AND CONST ===");

// Good use case for var: Function-scoped variable that needs to be accessible throughout the function
function processData() {
    var result = 0;
    
    for (var i = 0; i < 5; i++) {
        result += i;
    }
    
    console.log("Final result:", result);
    console.log("Loop variable i:", i);
}

// Good use case for let: Block-scoped variable that changes value
function calculateScores() {
    let totalScore = 0;
    const scores = [85, 92, 78, 96];
    
    for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i];
    }
    
    console.log("Total score:", totalScore);
  
}

// Good use case for const: Values that should never change
const PI = 3.14159;
const API_BASE_URL = "https://api.example.com";
const CONFIG = {
    theme: "dark",
    language: "en"
};

// CONFIG.theme = "light"; // This works - const prevents reassignment, not mutation
// CONFIG = {}; // This would cause TypeError - cannot reassign const

processData();
calculateScores();
console.log("PI:", PI);
console.log("API URL:", API_BASE_URL);

console.log("\n=== TEMPLATE LITERALS EXAMPLES ===");

// String Interpolation
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log("Full name:", fullName);

// Multi-line Strings
const address = `
    John Doe
    123 Main Street
    New York, NY 10001
    United States
`;
console.log("Address:", address);

// Simple Expressions
const num1 = 10;
const num2 = 20;
const sumString = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(sumString);

// Function Calls
function multiply(a, b) {
    return a * b;
}
const productString = `The product of ${num1} and ${num2} is ${multiply(num1, num2)}`;
console.log(productString);

// Creating a Tagged Template
function simpleTag(strings, ...values) {
    console.log("Strings:", strings);
    console.log("Values:", values);
    return "Tagged template processed";
}
const taggedResult = simpleTag`Hello ${firstName}, you are ${25} years old`;
console.log(taggedResult);

// Formatting Tag Function
function uppercase(strings, ...values) {
    let result = "";
    strings.forEach((string, i) => {
        result += string;
        if (i < values.length) {
            result += values[i].toString().toUpperCase();
        }
    });
    return result;
}
const formattedString = uppercase`Hello ${firstName}, welcome to ${"javascript"}!`;
console.log(formattedString);

// Conditional Logic
const currentHour = new Date().getHours();
const timeMessage = `Good ${currentHour < 12 ? 'morning' : 'afternoon'}, ${firstName}!`;
console.log(timeMessage);

// Loops within Template Literals
const shoppingList = ["apples", "bananas", "milk", "bread"];
const htmlList = `
<ul>
    ${shoppingList.map(item => `<li>${item}</li>`).join('')}
</ul>
`;
console.log("HTML List:", htmlList);

// Escaping Backticks
const backtickString = `This string contains a \`backtick\` character`;
console.log(backtickString);

// Nested Template Literals
const user = { name: "Alice", age: 30 };
const nestedTemplate = `
<div class="user-card">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
    <div class="details">
        ${user.age >= 18 ? `<span class="adult">Adult</span>` : `<span class="minor">Minor</span>`}
    </div>
</div>
`;
console.log("Nested Template:", nestedTemplate);

console.log("\n=== TERNARY OPERATOR EXAMPLES ===");

// Simple Condition
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);

// Even or Odd
const number = 7;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(`${number} is ${evenOrOdd}`);

// Grade Evaluation
const score = 85;
const grade = score >= 90 ? "A" : 
             score >= 80 ? "B" : 
             score >= 70 ? "C" : 
             score >= 60 ? "D" : "F";
console.log(`Score ${score} = Grade ${grade}`);

// Login Status
const isLoggedIn = true;
const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

// Discount Eligibility
const isMember = true;
const purchaseAmount = 150;
const discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log(`Discount: $${discount}`);

// Determine Max Value
function maxValue(a, b) {
    return a > b ? a : b;
}
console.log("Max value:", maxValue(10, 20));

// Greeting Message
function greet(name) {
    return name && name.trim() !== "" ? `Hello, ${name}!` : "Hello, guest!";
}
console.log(greet("Alice"));
console.log(greet(""));
console.log(greet());

// Mapping Values
const numbers = [1, 2, 3, 4, 5];
const mappedNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
console.log("Mapped numbers:", mappedNumbers);

// Filtering Values
const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter(word => word.length > 3 ? true : false);
console.log("Long words:", longWords);

console.log("\n=== SPREAD OPERATOR EXAMPLES ===");

// Copying an Array
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];
console.log("Original array:", originalArray);
console.log("Copied array:", copiedArray);
console.log("Same reference?", originalArray === copiedArray);

// Merging Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Merged array:", mergedArray);

// Adding Elements to an Array
const numbersForSpread = [2, 3, 4];
const updatedNumbers = [1, ...numbersForSpread, 5];
console.log("Updated numbers:", updatedNumbers);

// Copying an Object
const originalObject = { name: "John", age: 30, city: "New York" };
const copiedObject = { ...originalObject };
console.log("Original object:", originalObject);
console.log("Copied object:", copiedObject);
console.log("Same reference?", originalObject === copiedObject);

// Merging Objects
const object1 = { name: "John", age: 30 };
const object2 = { city: "New York", country: "USA" };
const mergedObject = { ...object1, ...object2 };
console.log("Merged object:", mergedObject);

// Updating Object Properties
const userForSpread = { name: "Alice", age: 25, email: "alice@example.com" };
const updatedUser = { ...userForSpread, email: "alice.new@example.com", address: "123 Main St" };
console.log("Updated user:", updatedUser);

// Passing Array Elements as Arguments
function sum(a, b, c) {
    return a + b + c;
}
const numbersForSum = [10, 20, 30];
const result = sum(...numbersForSum);
console.log("Sum result:", result);

// Combining Multiple Arrays
function combineArrays(...arrays) {
    return [].concat(...arrays);
}
const combined = combineArrays([1, 2], [3, 4], [5, 6]);
console.log("Combined arrays:", combined);

// Rest Parameter with Spread Operator
function multiply(factor, ...numbers) {
    return numbers.map(num => num * factor);
}
const multiplied = multiply(2, 1, 2, 3, 4, 5);
console.log("Multiplied by 2:", multiplied);

// Spread Operator with Nested Structures
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const shallowCopy = [...nestedArray];
shallowCopy[0][0] = 999;
console.log("Original nested array:", nestedArray);
console.log("Shallow copy:", shallowCopy);
console.log("Note: Inner arrays are still referenced!");

console.log("\n=== REST OPERATOR EXAMPLES ===");

// Sum Function
function sumRest(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum of 1, 2, 3, 4, 5:", sumRest(1, 2, 3, 4, 5));
console.log("Sum of 10, 20:", sumRest(10, 20));

// Average Function
function average(...numbers) {
    return numbers.reduce((total, num) => total + num, 0) / numbers.length;
}
console.log("Average of 85, 92, 78:", average(85, 92, 78));
console.log("Average of 100, 95:", average(100, 95));

// First and Rest
const numbersForRest = [1, 2, 3, 4, 5];
const [first, ...rest] = numbersForRest;
console.log("First:", first);
console.log("Rest:", rest);

// Skip and Rest
const colorsForRest = ["red", "green", "blue", "yellow", "purple"];
const [, , ...remainingColors] = colorsForRest;
console.log("Remaining colors:", remainingColors);

// Basic Destructuring
const personForRest = { name: "John", age: 30, email: "john@example.com", address: "123 Main St" };
const { name: personName, email: personEmail, ...restObj } = personForRest;
console.log("Name:", personName);
console.log("Email:", personEmail);
console.log("Rest:", restObj);

// Nested Destructuring
const studentForRest = {
    id: 12345,
    name: "Alice",
    grades: [85, 92, 78],
    info: { age: 20, major: "Computer Science" }
};
const { id: studentId, name: studentName, info: { major }, ...restStudent } = studentForRest;
console.log("ID:", studentId);
console.log("Name:", studentName);
console.log("Major:", major);
console.log("Rest:", restStudent);

// Filter Even Numbers
function filterEven(...numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log("Even numbers from 1,2,3,4,5,6:", filterEven(1, 2, 3, 4, 5, 6));
console.log("Even numbers from 10,15,20,25:", filterEven(10, 15, 20, 25));

// Combine and Sort Arrays
function combineAndSort(...arrays) {
    return [].concat(...arrays).sort();
}
const resultSorted = combineAndSort([3, 1], [5, 2], [4, 6]);
console.log("Combined and sorted:", resultSorted);

console.log("\n=== DESTRUCTURING EXAMPLES ===");

// Basic Array Destructuring
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log("First fruit:", firstFruit);
console.log("Second fruit:", secondFruit);
console.log("Third fruit:", thirdFruit);

// Skipping Elements
const colorsForDestructuring = ["red", "green", "blue", "yellow"];
const [primaryColor, , tertiaryColor] = colorsForDestructuring;
console.log("Primary color:", primaryColor);
console.log("Tertiary color:", tertiaryColor);

// Rest Operator with Arrays
const numbersForDestructuring = [1, 2, 3, 4, 5];
const [firstNumber, ...remainingNumbers] = numbersForDestructuring;
console.log("First number:", firstNumber);
console.log("Remaining numbers:", remainingNumbers);

// Basic Object Destructuring
const personForDestructuring = { name: "John", age: 30, city: "New York" };
const { name: personName, age: personAge, city: personCity } = personForDestructuring;
console.log("Name:", personName);
console.log("Age:", personAge);
console.log("City:", personCity);

// Renaming Variables
const car = { make: "Toyota", model: "Camry", year: 2020 };
const { make: carMake, model: carModel, year: carYear } = car;
console.log("Car make:", carMake);
console.log("Car model:", carModel);
console.log("Car year:", carYear);

// Default Values
const settings = { theme: "dark" };
const { theme, language = "English" } = settings;
console.log("Theme:", theme);
console.log("Language:", language);

// Array of Arrays
const nestedArrayForDestructuring = [[1, 2], [3, 4], [5, 6]];
const [[a], [b], [c]] = nestedArrayForDestructuring;
console.log("A:", a);
console.log("B:", b);
console.log("C:", c);

// Object within an Object
const profile = {
    username: "alice123",
    details: {
        email: "alice@example.com",
        address: "123 Main St"
    }
};
const { username, details: { email, address } } = profile;
console.log("Username:", username);
console.log("Email:", email);
console.log("Address:", address);

// Mix of Arrays and Objects
const data = {
    id: 1,
    info: [
        { name: "Alice" },
        { age: 25 }
    ]
};
const { id: dataId, info: [{ name: dataName }, { age: dataAge }] } = data;
console.log("ID:", dataId);
console.log("Name:", dataName);
console.log("Age:", dataAge);

// Array Parameters
function printCoordinates([x, y]) {
    console.log(`Coordinates: (${x}, ${y})`);
}
printCoordinates([10, 20]);

// Object Parameters
function displayUser({ name, age }) {
    console.log(`User: ${name}, Age: ${age}`);
}
displayUser({ name: "Bob", age: 35 });

console.log("\n=== OBJECT METHODS EXAMPLES ===");

// List Property Names
const book = { title: "JavaScript Guide", author: "John Doe", year: 2023 };
const propertyNames = Object.keys(book);
console.log("Property names:", propertyNames);

// Count Properties
const studentForMethods = { name: "Alice", age: 20, grade: "A", school: "University" };
const propertyCount = Object.keys(studentForMethods).length;
console.log("Number of properties:", propertyCount);

// Iterate Over Keys
const product = { name: "Laptop", price: 999, category: "Electronics" };
Object.keys(product).forEach(key => {
    console.log(`${key}: ${product[key]}`);
});

// List Property Values
const movie = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
const propertyValues = Object.values(movie);
console.log("Property values:", propertyValues);

// Sum Values
const scores = { math: 85, science: 92, english: 78 };
const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log("Total score:", totalScore);

// Iterate Over Values
const userForMethods = { username: "john_doe", email: "john@example.com", location: "New York" };
Object.values(userForMethods).forEach(value => {
    console.log("Value:", value);
});

// List Entries
const carForMethods = { make: "Toyota", model: "Camry", year: 2020 };
const entries = Object.entries(carForMethods);
console.log("Entries:", entries);

// Convert Object to Array
const personForMethods = { firstName: "Jane", lastName: "Doe", age: 25 };
const personArray = Object.entries(personForMethods);
console.log("Person as array:", personArray);

// Iterate Over Entries
const settingsForMethods = { theme: "dark", notifications: true, privacy: "public" };
Object.entries(settingsForMethods).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Filter Keys
const inventory = { apples: 15, bananas: 8, oranges: 12, grapes: 5 };
const highStock = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log("High stock items:", highStock);

// Transform Values
const temperatures = { morning: 15, afternoon: 25, evening: 18 };
const fahrenheitTemps = Object.fromEntries(
    Object.entries(temperatures).map(([key, value]) => [
        key, 
        (value * 9/5) + 32
    ])
);
console.log("Temperatures in Fahrenheit:", fahrenheitTemps);

// Key-Value Swap
const roles = { admin: "John", editor: "Alice", viewer: "Bob" };
const swappedRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
);
console.log("Swapped roles:", swappedRoles);

console.log("\n=== HIGHER-ORDER FUNCTIONS EXAMPLES ===");

// Filter and Map
const numbersForHOF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterAndMap(array, filterFunc, mapFunc) {
    return array.filter(filterFunc).map(mapFunc);
}

const resultHOF = filterAndMap(
    numbersForHOF,
    num => num % 2 !== 0, // Filter out even numbers
    num => num * num      // Square the remaining numbers
);
console.log("Filtered and mapped:", resultHOF);

// Sort and Reduce
const wordsForHOF = ["apple", "banana", "cherry", "date"];

function sortAndReduce(array, sortFunc, reduceFunc) {
    return array.sort(sortFunc).reduce(reduceFunc);
}

const concatenated = sortAndReduce(
    wordsForHOF,
    (a, b) => a.localeCompare(b), // Sort alphabetically
    (acc, word) => acc + " " + word // Concatenate with spaces
);
console.log("Sorted and reduced:", concatenated);

// Simple Callback
function greetCallback(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}

function printGreeting(message) {
    console.log(message);
}

greetCallback("Alice", printGreeting);

// Asynchronous Callback
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "John Doe", email: "john@example.com" };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log("Received data:", data);
}

fetchData(displayData);

console.log("\n=== ARROW FUNCTIONS EXAMPLES ===");

// Simple Arrow Function
const add = (a, b) => a + b;
console.log("Arrow function result:", add(3, 5));

// Arrow Function with Array Methods
const numbersForArrow = [1, 2, 3, 4, 5];
const squaredNumbers = numbersForArrow.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);

// Variable Scope
function outer() {
    const x = 10;
    
    const inner = () => {
        console.log("Value of x from inner:", x);
    };
    
    inner();
}

outer();

// Closure with Arrow Function
function createCounter() {
    let count = 0;
    
    return () => {
        count++;
        console.log(`Counter: ${count}`);
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // Counter: 1
counter1(); // Counter: 2
counter2(); // Counter: 1
counter2(); // Counter: 2

// Arrow Functions with Multiple Parameters
const multiplyArrow = (a, b, c) => a * b * c;
console.log("Multiply result:", multiplyArrow(2, 3, 4));

// Arrow Function with Object Return
const createPerson = (name, age) => ({ name, age });
const personArrow = createPerson("Alice", 25);
console.log("Created person:", personArrow);

// Arrow Function with Conditional Logic
const getGreeting = (hour) => hour < 12 ? "Good morning" : "Good afternoon";
console.log("Greeting:", getGreeting(14));

// Arrow Function with Default Parameters
const greetArrow = (name = "Guest") => `Hello, ${name}!`;
console.log(greetArrow("John"));
console.log(greetArrow());

console.log("\n=== DEFAULT PARAMETERS EXAMPLES ===");

// Simple Default Parameters
function greetDefault(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greetDefault("Alice", "Good morning");
greetDefault("Bob"); // Uses default greeting

// Default Parameters with Other Arguments
function calculateArea(width = 10, height = 5) {
    return width * height;
}

console.log("Area with defaults:", calculateArea());
console.log("Area with custom width:", calculateArea(15));
console.log("Area with custom dimensions:", calculateArea(8, 12));

// Default Parameters with Objects
function createUser(name, options = {}) {
    const defaults = {
        age: 25,
        email: "user@example.com",
        isActive: true
    };
    
    const user = { name, ...defaults, ...options };
    console.log("Created user:", user);
}

createUser("John");
createUser("Alice", { age: 30, email: "alice@example.com" });

// Default Parameters with Arrays
function processItems(items = [], processor = item => item) {
    return items.map(processor);
}

console.log("Processed items:", processItems([1, 2, 3], item => item * 2));
console.log("Empty items:", processItems());

// Default Parameters with Functions
function executeWithDelay(fn = () => console.log("Default function"), delay = 1000) {
    setTimeout(fn, delay);
}

executeWithDelay(() => console.log("Custom function"), 500);
executeWithDelay();

console.log("\n=== ARRAY METHODS EXAMPLES ===");

// Square Numbers
const numbersForMap = [1, 2, 3, 4, 5];
const squaredNumbersMap = numbersForMap.map(num => num * num);
console.log("Squared numbers:", squaredNumbersMap);

// Convert to Uppercase
const wordsForMap = ["apple", "banana", "cherry"];
const uppercaseWords = wordsForMap.map(word => word.toUpperCase());
console.log("Uppercase words:", uppercaseWords);

// Filter Even Numbers
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = allNumbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Filter Long Words
const allWords = ["apple", "banana", "cherry", "date"];
const longWords = allWords.filter(word => word.length > 5);
console.log("Long words:", longWords);

// Log Numbers
const numbersToLog = [1, 2, 3, 4, 5];
numbersToLog.forEach(num => console.log("Number:", num));

// Log Word Lengths
const wordsToLog = ["apple", "banana", "cherry"];
wordsToLog.forEach(word => console.log("Word length:", word.length));

// Sum of Numbers
const numbersToSum = [1, 2, 3, 4, 5];
const sumReduce = numbersToSum.reduce((total, num) => total + num, 0);
console.log("Sum:", sumReduce);

// Concatenate Strings
const wordsToConcat = ["Hello", "world", "this", "is", "JavaScript"];
const concatenatedReduce = wordsToConcat.reduce((acc, word) => acc + " " + word);
console.log("Concatenated:", concatenatedReduce);

// Check for Even Number
const numbersToCheck = [1, 3, 5, 7, 8];
const hasEven = numbersToCheck.some(num => num % 2 === 0);
console.log("Has even number:", hasEven);

// Check for Long Word
const wordsToCheck = ["apple", "banana", "cherry", "date"];
const hasLongWord = wordsToCheck.some(word => word.length > 5);
console.log("Has long word:", hasLongWord);

// Check All Even Numbers
const allEvenNumbers = [2, 4, 6, 8, 10];
const allEven = allEvenNumbers.every(num => num % 2 === 0);
console.log("All even:", allEven);

// Check All Long Words
const allLongWords = ["elephant", "giraffe", "hippopotamus"];
const allLong = allLongWords.every(word => word.length > 5);
console.log("All long words:", allLong);

// Find First Even Number
const numbersToFind = [1, 3, 5, 7, 8];
const firstEven = numbersToFind.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

// Find Long Word
const wordsToFind = ["apple", "banana", "cherry", "date"];
const firstLongWord = wordsToFind.find(word => word.length > 5);
console.log("First long word:", firstLongWord);

// Find Index of First Even Number
const numbersToFindIndex = [1, 3, 5, 7, 8];
const firstEvenIndex = numbersToFindIndex.findIndex(num => num % 2 === 0);
console.log("First even number index:", firstEvenIndex);

// Find Index of Long Word
const wordsToFindIndex = ["apple", "banana", "cherry", "date"];
const firstLongWordIndex = wordsToFindIndex.findIndex(word => word.length > 5);
console.log("First long word index:", firstLongWordIndex);

console.log("\n=== PROMISES EXAMPLES ===");

// Simple Promise
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, ms);
    });
}

delay(2000).then(message => {
    console.log(message);
});

// Promise Chain
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "John Doe", email: "john@example.com" });
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log("Fetched data:", data);
        return data.name;
    })
    .then(name => {
        console.log("User name:", name);
    });

// Error Handling
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { name: "Alice", age: 25 };
            
            if (userData.age) {
                resolve(userData);
            } else {
                reject("User data is missing age property");
            }
        }, 1000);
    });
}

fetchUserData()
    .then(data => {
        console.log("User data:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Simulate Network Request
function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            
            if (random > 0.3) {
                resolve({ temperature: 22, condition: "Sunny" });
            } else {
                reject("Weather data unavailable");
            }
        }, 1000);
    });
}

getWeather()
    .then(weather => {
        console.log("Weather:", weather);
    })
    .catch(error => {
        console.log("Weather error:", error);
    });

// Simple async Function
async function sayHello() {
    const message = await delay(2000);
    console.log(message);
}

sayHello();

// Fetch Data with async/await
async function getUserData() {
    try {
        const data = await fetchUserData();
        console.log("User data (async):", data);
    } catch (error) {
        console.log("Error (async):", error);
    }
}

getUserData();

// Fetch and Process Data
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "Bob", age: 30 });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "First Post", userId },
                { id: 2, title: "Second Post", userId }
            ]);
        }, 500);
    });
}

async function getUserAndPosts() {
    try {
        const user = await fetchUser();
        console.log("User:", user);
        
        const posts = await fetchPosts(user.id);
        console.log("Posts:", posts);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUserAndPosts();

// Error Handling in async/await
function fetchUserWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            
            if (random > 0.5) {
                resolve({ id: 1, name: "Charlie", age: 28 });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

async function getUserInfo() {
    try {
        const user = await fetchUserWithError();
        console.log("User info:", user);
    } catch (error) {
        console.log("User error:", error);
    }
}

getUserInfo();

// Simulate API Calls
function apiCall() {
    return new Promise(resolve => {
        const delay = Math.random() * 2000 + 500; 
        setTimeout(() => {
            resolve({ data: `API response at ${new Date().toLocaleTimeString()}` });
        }, delay);
    });
}

async function getData() {
    try {
        console.log("Starting API calls...");
        
        const result1 = await apiCall();
        console.log("Result 1:", result1.data);
        
        const result2 = await apiCall();
        console.log("Result 2:", result2.data);
        
        const result3 = await apiCall();
        console.log("Result 3:", result3.data);
        
    } catch (error) {
        console.log("API error:", error);
    }
}

getData();

console.log("\n=== ES6 COMPREHENSIVE EXAMPLES COMPLETED ==="); 


