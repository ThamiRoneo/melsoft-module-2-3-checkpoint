/******************************************************
* Challenge 1 - Variables, Types, and the typeof Trap *
******************************************************/

// Part A
// #1
// the variable is of primitive data type - string. the reason I chose 'const' it is because my full name will not be reassigned
// to any other value in this scope.
const fullName = 'Thami Roneo Sithole';

// #2: the variable is of primitive data type - Number. The reason I chose to declare my variable with 'const'
// it is because my age will not change or be redeclared to another value in this scope. 
const myAge = 30;

// #3: the variable is of primitive data type - Boolean. I chose to declare my variable with 'let' because it likely to be  redeclared
// to 'false' as soon as I find myself not enjoying JavaScript in this scope.
let isEnjoyingJavascript = true;

// #4: the variable is of primitive data type - Number. I chose to declare the variable with 'const' because my favourite temperature cannot be 
// redeclared with another value in this scope.
const favourateTemperature = 30.00;

// #5: the variable is of a primitive data type - Number. I declared the variable using 'let' because the variable
// can be reassigned to another NaN in this scope.
let number = Number('not a number');

// #6: the variable is of a a primitive data type - number. I declared the variable with 'let' because it can be reassigned
// to a different infinity value in this scope.
let valueInfinity = 1 / 0;

// #7: the variable is of a primitive data type - number, I declared the variable with keyword 'const' so that cannot be 
// reassigned and to alwways refer to the same value when called.
const number1 = Number.MAX_SAFE_INTEGER;

// #8: the variable is of complex data type - object. I declared the variable using the keyword 'const' it is not bound to be reassigned
// in this scope.
const n = null;

// #9: the variable is of primitive data type - undefined. I declared the variable with the keyword 'const' because it is assigned to a value and
// cannot be reassigned in this scope.
const known = undefined;

// #10:the variable is of primitive data type - string. I declared the variable using the keyword 'const' to prevent accidental reassignment in this scope.
const greeting = `Hello! my full name is ${fullName}, and I am ${myAge} years old.`;

// Part B

typeof fullName       // prediction: 'string'
typeof myAge          // prediction: 'number'
typeof isEnjoyingJavascript // prediction: ''boolean'
typeof number         // prediction: 'number'
typeof valueInfinity  // prediction: 'number'
typeof number1        // prediction: 'number'
typeof n              // prediction: 'object'
typeof known          // prediction: 'undefined'
typeof greeting       // prediction: 'string'
