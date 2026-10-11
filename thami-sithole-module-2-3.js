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

/*
Comment answer: typeof null returns 'object' because of the historical bug in Javascript's original implementation from 1995. Early Javascript
engines stored values as 32-bit chunk where lower bits indicated the type tag - the tag for objects was 000 (binary),
and null was all zeros (null pointer). Then, null inherited the 0 type tag, causing typeof to incorrectly identify it as an object.

typeof NaN return 'number' because NaN is a special value defined by the IEEE 754 floating-point standard,
not a distinct data type. NaN is a valid bit pattern within that numeric format, the internal type check classifies it as Number, 
making typeof NaN return 'number'.
*/

/******************************************************
*       Challenge 2 - Type Conversion Workshop        *
******************************************************/

// Part A - Explicit conversion

// #1
console.log(Number('123'));                  // results: 123
console.log(typeof Number('123'));           // number

console.log(parseInt('123'));                // results: 123
console.log(typeof parseInt('123'));         // number

console.log(parseFloat('123'));              // rsults: 123  
console.log(typeof parseFloat('123'));       // undefined

console.log(Boolean('123'));                 // results: 123
console.log(typeof Boolean('123'));          // boolean

console.log(String('123'));                 // results: 123
console.log(typeof String('123'));          // string

// #2
console.log(Number('3.14'));                  // results: 3.14
console.log(typeof Number('3.14'));           // number

console.log(parseInt('3.14'));              // results: 3
console.log(typeof parseInt('3.14'));       // number

console.log(parseFloat('3.14'));         // results: 3.14 
console.log(typeof parseFloat('3.14'));     // number

console.log(Boolean('3.14'));               // results: true
console.log(typeof Boolean('3.14'));        // boolean

console.log(String('3.14'));              // results: '3.14'
console.log(typeof String('3.14'));       // string

// #3
console.log(Number("hello"));             // results: NaN
console.log(typeof Number("hello"));      // number`

console.log(parseInt("hello"));           // results: NaN
console.log(typeof parseInt("hello"));    // number

console.log(parseFloat("hello"));         // results: Nan
console.log(typeof parseFloat("hello"));  // number

console.log(Boolean("hello"));            // results: true
console.log(typeof Boolean("hello"));     // boolean

console.log(String("hello"));             // results: hello
console.log(typeof String("hello"));      // string

// #4
console.log(Number("42abc"));             // results: NaN
console.log(typeof Number("42abc"));      // number

console.log(parseInt("42abc"));           // results: 42
console.log(typeof parseInt("42abc"));    // number

console.log(parseFloat("42abc"));         // results: 42
console.log(typeof parseFloat("42abc"));  // number

console.log(Boolean("42abc"));            // results: true
console.log(typeof Boolean("42abc"));     // boolean

console.log(String("42abc"));             // results: 42abc
console.log(typeof String("42abc"));      // string

// #5
console.log(Number(""));              // results: 0
console.log(typeof Number(""));       // number

console.log(parseInt(""));            // results: NaN`
console.log(typeof parseInt(""));     // number

console.log(parseFloat(""));          // results: NaN
console.log(typeof parseFloat(""));   // number

console.log(Boolean(""));             // results: false
console.log(typeof Boolean(""));      // boolean

console.log(String(""));              // results: (empty string)
console.log(typeof String(""));       // string

// #6
console.log(Number(0));               // results: 0
console.log(typeof Number(0));        // number

console.log(parseInt(0));             // results: 0
console.log(typeof parseInt(0));      // number

console.log(parseFloat(0));           // results: 0
console.log(typeof parseFloat(0));    // number

console.log(Boolean(0));              // results: false
console.log(typeof Boolean(0));       // boolean

console.log(String(0));               // results: 0
console.log(typeof String(0));        // string

// #7
console.log(Number(null));              // results: 0
console.log(typeof Number(null));       // number

console.log(parseInt(null));            // results: NaN
console.log(typeof parseInt(null));     // number

console.log(parseFloat(null));          // results: NaN
console.log(typeof parseFloat(null));   // number

console.log(Boolean(null));             // results: false
console.log(typeof Boolean(null));      // boolean

console.log(String(null));              // results: null
console.log(typeof String(null));       // string

// #8
console.log(Number(undefined));             // results: NaN
console.log(typeof Number(undefined));      // number

console.log(parseInt(undefined));           // results: NaN
console.log(typeof parseInt(undefined));    // number

console.log(parseFloat(undefined));         // results: NaN
console.log(typeof parseFloat(undefined));  // number

console.log(Boolean(undefined));            // results: false
console.log(typeof Boolean(undefined));     // boolean

console.log(String(undefined));             // results: undefined
console.log(typeof String(undefined));      // string

// Part B - Implicit coercion

// #1
// output prediction: '53'
// resulting type: string
// explanation sentence: both operands were treated as string and were concatenated.
console.log("5" + 3);       // '53'
console.log(typeof "53");   // string

// #2
// output prediction: 2
// resulting type: number
// explanation sentence: operand "5" was converted to a number then applied subtraction (5 - 3).
console.log("5" - 3);     // 2
console.log(typeof 2);   // number

// #3
// output prediction: 10
// resulting type: number
// explanation sentence: both operands were converted to number, then applied multiplication (5 * 3).
console.log("5" * "2");    // 10
console.log(typeof 10);   // number

// #4
// output prediction: 2
// resulting type: number
// explaantion sentence: operands were treated as number - converting true to 1 then applied addition.
console.log(true + 1);    // 2
console.log(typeof 2);   // number

// #5
// output prediction: 'true1'
// resulting type: string
// explanation sentence: true was converted to string, then concatenated the strings to get 'true1'.
console.log(true + "1");    // true1
console.log(typeof 'true1');   // string

// #6
// output prediction: 0
// resulting type: number
// explanation sentence: both operands were treated as number, changing false to 0 and null to 0 then applied addition (0 + 0).
console.log(false + null);    // 0
console.log(typeof 0);   // number

// #7
// output prediction: NaN
// resulting type: number
// explanation sentence: null was coerced to 0 and undefined to NaN then applied the addition which results to NaN.
console.log(null + undefined);    // NaN
console.log(typeof NaN);   // number

// #8
// output prediction: 0.125
// resulting type: number
// explanation sentence: JavaScript applied division operator to 1 / 8 and return 0.125.
console.log(1 / 8);    // 0.125
console.log(typeof 0.125);   // number

// #9
// output prediction: NaN
// resulting type: zeros were coerced to boolean type - false hence they return NaN (false / false)
console.log(0 / 0);    // NaN
console.log(typeof NaN);   // number

// #10
// output prediction: NaN
// resulting type: operand 1 was coerced to a string then subtraction was applied to the operands ("abc" - "1")
console.log("abc" - 1);    // NaN
console.log(typeof NaN);   // number

// #11
// output prediction: ''
// resulting type: string
// explanation sentence: both operands were coerced to an empty string (''), then applied addition ('' + '') which equals ''.
console.log([] + []);    // ''
console.log(typeof '');  // string

// #12
// output prediction: '12'
// resulting type: string
// explanation sentence: both operands were converted to a string ("1" + "2") then concatenated to return '12'.
console.log([1] + [2]);    // '12'
console.log(typeof '12');  // string

// Part C - The three questions

// #1: Number('42abc') return value is NaN (not a number), and parseInt('42abc') return 42. The difference is the conversion,
// one is converting the string '42abc' to a number, and the other is converting the very same string to an integer 42.

// #2: I would reach for parseFloat instead of parseInt in real code when I want to convert an integer variable into a float type
// for money conversion. 
// Scenario: For calculating total interest paid to a client, in the calculation for interest, the interest rate value was used
// as an integer 12 instead of 0.12, meaning the final calculation will be wrong and that would cost money.

// #3: Number('') return 0, it is common because an empty string is regarded as 0.
