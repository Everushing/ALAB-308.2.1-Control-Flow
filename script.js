// Declare a constant variable called myName and assign it your name
const myName = "Evette";

// Declare a variable called favoriteLanguage and assign it the value of Python
let favoriteLanguage = "Python";

// Declare a new variable called newFavoriteLanguage and assign it JavaScript
let newFavoriteLanguage = "JavaScript";

// Assign the value of newFavoriteLanguage to favoriteLanguage referencing each other
favoriteLanguage = newFavoriteLanguage;

// Log or print a message using a Literal String, make use of the variables myName and favoriteLanguage
console.log(`Hello, my name is ${myName} and my favorite programming language is ${favoriteLanguage}.`);


//B. Strings


// Create a variable called firstVariable
let firstVariable;

// Assign it the value of the string "Hello World"
firstVariable = "Hello World";

// Change the value of this variable to some number
firstVariable = 42;

// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// Change the value of secondVariable to any string
secondVariable = "Some string";

// Log the value of firstVariable
console.log("The value of firstVariable is:", firstVariable);

// Create a variable called yourName and set it equal to your name as a string
let yourName = "Evette";

// Write an expression that concatenates the string "Hello, my name is " and the variable yourName
let greeting = "Hello, my name is " + yourName;

// Log the concatenated string
console.log(greeting);


//C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b); // true
console.log(c > d); // true
console.log('Name' === 'Name'); // true
console.log(true || false); // true
console.log(false || false || false || false || false || true); // true
console.log(!false); // true
console.log(e === 'Kevin'); // true
console.log(a !== b && b !== c); // true
console.log(a === a && a !== d); // true
console.log(48 === '48'); // true

//D. The farm

// Declare a variable animal and set it to be either "cow" or something else
let animal = "cow";

// Write code that will print out "mooooo" if it is equal to "cow"
if (animal === "cow") {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
}

//E. Driver's Ed

// Declare a variable holding a person's age (semantically named)
let personAge = 18; // Example age, you can assign any age value here

// Write code that will print out appropriate messages based on the person's age
if (personAge >= 16) {
    console.log("Here are the keys!");
} else {
    console.log("Sorry, you're too young.");
}

/////////
///////
/////
///////
/////II. Loops
//A. The basics

//Loop that prints numbers from 0 to 10:
console.log("Numbers from 0 to 10:");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//Loop that prints numbers from 10 to 400:
console.log("Numbers from 10 to 400:");
for (let i = 10; i <= 400; i++) {
    console.log(i);
}

//Loop that prints every third number starting from 12 up to 4000:
console.log("Every third number starting from 12 up to 4000:");
for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
}

//B. Get even
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " is an even number");
    } else {
        console.log(i);
    }
}
 
//C. Give me Five
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("I found a " + i + ". High five! Three is a crowd");
    } else if (i % 3 === 0) {
        console.log("I found a " + i + ". Three is a crowd");
    } else if (i % 5 === 0) {
        console.log("I found a " + i + ". High five!");
    }
}


//D. Savings account

// Calculate the sum of numbers from 1 to 10
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
    bank_account += i;
}

// Check the result
console.log("Bank account balance for numbers 1-10:", bank_account); // Should print 55

// Double the pay each week and calculate the sum of numbers from 1 to 100
bank_account = 0;
for (let i = 1; i <= 100; i++) {
    bank_account += i * 2; // doubling each number
}

// Check the result
console.log("Bank account balance for numbers 1-100 (doubled):", bank_account); // Should print 10100

