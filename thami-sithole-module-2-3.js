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

/******************************************************
*       Challenge 3 - Operators Masterclass           *
******************************************************/

// #1 Realistic example: Calculate how much time did two Junior developers spent working on a project for the period of 3 months.
// Developer A and Developer B spent 2041 and 1406 minutes respectively.
// declared and assigned each developer variable with their time in munites
const devAMinutes = 2041;
const devBMinutes = 1406;
// calculating the developer's time combine
const combinedMinutes = devAMinutes + devBMinutes;
// calculating hours variable of the time
const hours = Math.trunc(combinedMinutes / 60);
// calculating minutes variable of the time
const minutes = combinedMinutes % 60;

// logging the time spend workiing on a project in hours and  minutes
console.log(`The developers' time combined for 3 months: ${hours} hours ${minutes} minutes`);

// #2 Realistic example: Calculate an e-commerce cart total, if the user added items worth R1200. With 15% vat and 10% descount.
// declared and assigned cartTotal variable with 1200
let cartTotal = 1200;
// declared and assigned vatTax rate variable with 15%
let vatTax = 0.15;
// declared and assigned discount variable with 10%
let discounted = 0.10;

// calculating cartTotal - discount
cartTotal -= (cartTotal * (1 - discounted));

// calculating cartTotal + vat tax amount
cartTotal *= (1 + vatTax);

// logging the the total cart amount with tax included
console.log(`The cart total for your items is: R ${cartTotal.toFixed(2)}`);

// #3 Realistic example: Red's shopping cart has three items costing R150, R300, and R460. The store applies 5 % discount
// on a cart total over R500. Calculate a total of Red's cart and a checkout total.
// storing price value R150 to a variable name item1
let item1 = 150;
// storing price value R300 to a variable name item2
let item2 = 300;
// storing price value R460 to a variable name item3
let item3 = 460;
// storing discount rate 5% to a variable named discountFiveRate
let discountFiveRate = 0.05;
// adding items' total and storing the value to a variable called totalCart
let totalCart = item1 + item2 + item3;
// declared checkoutTotal and assigned it to cartTotal
let checkoutTotal = totalCart;

// comparing the totalCart amount if it meets the discount
if (totalCart > 500) {
  // recalculating the checkoutTotal should the discount merit be met
  checkoutTotal = totalCart - (1 - discountFiveRate);
}

// logging the results
console.log(`The total cart is: R ${totalCart.toFixed(2)}\nCheckout total: R ${checkoutTotal.toFixed(2)}`)

// #4 Realistic example: A user can be assigned to a Student Tier on a website IF they are at least 18 years or older AND
// registered on public higher institution OR registered on private institution.
// storing age value in a const variable age
const age = 18;
// storing a boolean value to a boolean variable
let isOnPublicInstitution = true;
// storing age value in a const variable age
let isOnPrivateInstitution = false;

// verifying if whether a user gets to be assigned to a student tier 
const studentTierVerification = age >= 18 && isOnPublicInstitution || isOnPrivateInstitution ? 'You have successfully got assigned to Student Tier' :
  'Verification fail! you do not meet all the of criteria requirements';

// logging the results of the verification
console.log(studentTierVerification);

// #5 Realistic example: Convert a string from an inputYearOfBirth from a form field on a Generation Identity site to a number causing
// unary + operator. the evaluate the converted input using a boolean flag !.

// storing a string value into a variable
let inputYearOfBirth = '1996';
// declaring a variable and assigning a conversion of a string to a number using unary + operator
let inputNumber = +inputYearOfBirth;

// evaluating the converted variable to toggle
if (!(inputNumber > 2000)) {
  console.log('isMillennial'); //logging the result should the condition be met
} else {
  console.log('Gen Z') //logging the alternative result should the condition fail
}

// #6 Realistic example: Display a player's skills level badge: 'Super Pro level' if a playerSkill is 'super pro' else 'Pro level' if 'pro',
// else 'Noob'.
// assigning a variable with a string pro for plaer's skill
skillsLevelBadge = 'pro';

// constant playSkill evaluates the value assigned to skillsLevelBadge to match it with the appropriate player skill
const playerSkill = skillsLevelBadge == 'super pro' ? 'Super Pro level' :
  skillsLevelBadge == 'pro' ? 'Pro level' : 'Noob';

// looging the result of the player skill
console.log(playerSkill);

// #7 Realistic example: Build a a game play summary with 'Hey Doomsday007, you have the best high score 147856XP.' once with +
// and once with template literal. Comment on which is better and why.
// declared and assigned variable with strings for template literal
const playerName = 'Doomsday007';
const highScore = '147856'
// declared and assigned variables with string for concatenation
let string1 = 'Hey Doomsday007';
let string2 = 'you have the best high score 147856XP';

// concatenation with +
result1 = string1 + ', ' + string2;
console.log(result1);

// concationation with template literal
console.log(`Hey ${playerName}, you have the best high score ${highScore}XP`);

/*

1. let x = 4
Prefix (++x): console.log(++x) // 5 (increments first, then returns 5)
Postfix (x++): console.log(x++) // 5 (returns 4 first, then increments to 5)

2. Unit conversion like I had used in my realistic example for converting hours into minutes.
   Another real-world use is cyclic indexing and wrapping - to allow values to loop within a fixed range. like for example
   wrapping array indices to create circular buffers. 
*/

/******************************************************
*       Challenge 4 - The Equality Deep Dive          *
******************************************************/

// Part A - Predict and verify

// #1: 0 == false     prediction: true
// one-liner: In boolean 0 is equal to false and 1 equals true, hence 0 == false(0) is true.
console.log(0 == false);   // true

// #2: 0 === false     prediction: false
// one-liner: strict equality checks not only the values but data types as well and number (0) is not the same as boolean (false).
console.log(0 === false);   // false

// #3: "" == 0     prediction: true
// one-liner: an empty string is regarded as a zeroed value and in eqality therefore, it is true.
console.log("" == 0);   // true

// #4: "" === 0     prediction: false
// one-liner: here we are evaluating a string and a number using strict equality which happens to check not only the values being compared
// but their data type and the two types for these values aren't the same.
console.log(0 === false);   // false

// #5: "0" == 0     prediction: true
// one-liner: a string zero is equal to number 0
console.log("0" == 0);   // true

// #6: "0" === 0     prediction: false
// one-liner: it is false because a string can never be equal to a number in strict equality.
console.log("0" === 0);   // false

// #7: null == undefined     prediction: true
// one-liner: it is true because null and undefined are considered as zeroed values hence true.
console.log(null == undefined);   // true

// #8: null === undefined     prediction: false
// one-liner: it is false because null is type object and undefined is type undefined hence under strict equality it is false.
console.log(null === undefined);   // false

// #9: null == 0     prediction: false
// one-liner: null is of type object and cannot be equal to 0, hence false.
console.log(null == 0);   // false

// #10: null >= 0     prediction: true
// one-liner: it is true because null is equal to 0 as they are both zeroed values. since the evaluation was based on the OR operator
// meaning one condition passes - the equal condition is the one that passes in this case.
console.log(null >= 0);   // true

// #11: null > 0     prediction: false
// one-liner: null is not greater than 0 as they're regarded equal, hence false.
console.log(null > 0);   // false

// #12: NaN == NaN    prediction: false
// one-liner: it false because we cannot tell if both the 'not a number' being evaluated could be of the same exact characters.
console.log(NaN == NaN); // false

// #13: NaN === NaN    prediction: false
// one-liner:
console.log(NaN === NaN); // false

// #14: Object.is(NaN, NaN)   prediction: true
console.log(Object.is(NaN, NaN)); // true

// #15: +0 === -0       // prediction: true
// one-liner: it is true because whether a zero is negative or positive make no difference it is still a zero, hence true.
console.log(+0 === -0); // true

// #16: Object.is(+0, -0)     // prediction: false
// one-liner: zeros aren't objects
console.log(Object.is(+0, -0)); // false

// #17: [1,2,3] == "1,2,3"   // prediction: true
console.log([1, 2, 3] == "1,2,3"); // true

// #18: [] == false   prediction: true
console.log([] == false);  // true

// #19: [] == 0     // prediction: true
console.log([] == 0); // true

// #20: [0] == false  prediction: true
console.log([0] == false);  // true

// Part B - Real-world form validator
const form = document.querySelector('form');
const currentEmail = document.querySelector('#current-email');
const confirmEmail = document.querySelector('#confirm-email');
const newPassword = document.querySelector('#new-password');
const confirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (newPassword.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }
  
  if (currentEmail.value !== confirmEmail.value) {
    alert('Email addresses do not match');
    return;
  }

  if (newPassword.value === currentEmail.value) {
    alert('New password cannot be the same as the current email');
    return;
  }

  if(newPassword.value.length < 8) {
    alert('Password must be at least 8 characters');
    return;
  }

  alert('Form submitted successfully');
});


// I used the strict equality (===) to compare the values of the password fields.
// Yes, my choice matters a lot specifically for the password comparison, because
// it ensures that the values are compared as strings, not as numbers or any other type.

/******************************************************
*       Challenge 5 - Operators Precedence            *
******************************************************/

// #1 prediction: 
// step 1: 2 + (3 * 4) - 1
// step 2: (2 + 12) - 1
// step 3: 14 - 1  
// step 4: 13
console.log(2 + 3 * 4 - 1);  // 13

// #2 prediction: 
// step 1: 5 * 3
// step 2: 15
console.log((2 + 3) * (4 - 1));  // 15

// #3 prediction:
// step 1: (10 - 4) - 2
// step 2: 6 - 2
// step 3: 4
console.log(10 - 4 - 2);   // 4

// #4 prediction:
// step 1: 2 ** (3 ** 2)
// step 2: 2 ** 9
// step 3: 512
console.log(2 ** 3 ** 2);   //512

// #5 prediction:
// step 1: (10 % 3) * 2 + 1
// step 2: (1 * 2) + 1
// step 3: 2 + 1
// step 4: 3
console.log(10 % 3 * 2 + 1);   // 3

// #6 prediction:
// step 1: (100 / 4) / 5
// step 2: (25 / 5)
// step 3: 5
console.log(100 / 4 / 5);   // 5

// #7 prediction:
// step 1: (5 + 2) > 6 && 3 < 4
// step 2: (7 > 6) && (3 < 4)
// step 3: true && true
// step 4: true
console.log(5 + 2 > 6 && 3 < 4); // true

// #8 prediction:
// step 1: (true && false) || (true && true)
// step 2: false || true
// step 3: true
console.log(true && false || true && true);  // true

// #9 prediction:
// step 1: (!false) && (!!0)
// step 2: true && (0)
// step 3: true && false
// step 4: false
console.log(!false && !!0);

// #10 prediction:
// step 1: 5 > 3 && 10 < 20 || !(2 === "2")
// step 2: (5 > 3) && (10 < 20) || !(false)
// step 3: (true && true) || true
// step 4: true || true
// step 5: true
console.log(5 > 3 && 10 < 20 || !(2 === "2"));  // true

// #11 prediction:
// step 1: (1000 * 1.15) * 0.9
// step 2: (1150 * 0.9)
// step 3: 1035
console.log(1000 * 1.15 * 0.9);   // 1035

// #12 prediction:
// step 1: typeof (5 + 1)
// step 2: typeof 6
// step 3: number
console.log(typeof (5 + 1))  // number

// #13 prediction:
// step 1: typeof (5 + 1)
// step 2: typeof 6
// step 3: number
console.log(typeof (5 + 1)); // number

// #14 prediction:
// step 1: "5" + (3 * 2)
// step 2: "5" + 6
// step 3: "56"
console.log("5" + 3 * 2);   // "56"

// #15 prediction:
// step 1: ("5" - 3) + 2
// step 2: 2 + 2
// step 3: 4
console.log("5" - 3 + 2);   // 4

// Interview answer: Parentheses can be added to an expression even when they are not needed to change the order of operations.
// Again, to aid with readability.


/******************************************************
*  Challenge 6 - Ternary and Short-Circuit Patterns   *
******************************************************/

// Part A - Ternary chain for grade conversion
// declaring percentages variables
percentage = 95;
// percentage = 82;
// percentage = 73;
// percentage = 65;
// percentage = 54;
// percentage = 42;
// percentage = 0;
// percentage = 100;

grade = percentage >= 90 ? 'A' :
  percentage >= 80 && percentage < 90 ? 'B' :
    percentage >= 70 && percentage < 80 ? 'C' :
      percentage >= 60 && percentage < 70 ? 'D' :
        percentage >= 50 && percentage < 60 ? 'E' : 'F';

// Testing
console.log(grade);
// 95 - 'A'
// 82 - "B"
// 73 - 'C'
// 65 - 'D'
// 54 - 'E'
// 42 - 'F'
// 0 - 'F'
// 100 - 'A'

// Part B - Short-circuit defaults

let userProfile = {
  displayName: "",
  theme: "",
  maxResults: null,
  lastLogin: null,
  notificationCount: 0

};

let displayName = userProfile.displayName || 'Guest User';
let theme = userProfile.theme || 'light';
let maxResults = userProfile.maxResults || 10;
let lastLogin = userProfile.lastLogin ?? 'Never';
let notificationCount = userProfile.notificationCount ?? 0;

console.log(userProfile);
// Nullish operator behaves differently because unlike OR operator if there are many operands,
// it returns one that is not nullish. whereas, with the OR operator, it looks from left to right and returns
// the right value if the left is null or undefined.

// Part C - Guard clauses with && and ?.

let user = {
  name: 'David',
  address: {
    street: '15 St',
    city: 'London'
  }
}

const userCity = user && user.address && user.address.city;
const city = user?.address.city;
const address = user?.address ?? 'Unknown city';

// Testing
console.log(userCity);
console.log(city);
console.log(address);

// Part D - Predict the output

null || undefined || 0 || "" || "finally"     // 'finally'
console.log(null || undefined || 0 || "" || "finally");

null ?? undefined ?? 0 ?? "" ?? "finally"     //  0
console.log(null ?? undefined ?? 0 ?? "" ?? "finally" );

0 || "first truthy"                           // 'first truthy'
console.log(0 || "first truthy"  );

0 ?? "first non-nullish"                      //  0
console.log(0 ?? "first non-nullish");

true && false && "never reached"              //  false
console.log(true && false && "never reached" );

"first" && "second" && "third"                //  'third'
console.log("first" && "second" && "third" );

false || (true && "yes")                      //  'yes'
console.log(false || (true && "yes"));

(false || true) && "yes"                      // 'yes
console.log((false || true) && "yes" );

1 && 2 && 3                                   //  3
console.log(1 && 2 && 3 );

null?.foo?.bar?.baz                           //  undefined
console.log(null?.foo?.bar?.baz);


/******************************************************
*       Challenge 7 - typeof, instaceofn delete       *
******************************************************/

// Part A - typeof masteery

typeof 42;                           // 'number'
typeof "hello";                      // 'string'
typeof true;                         // 'boolean'
typeof undefined;                    // 'undefined
typeof null(THE, famous, bug);         // SyntaxError
typeof {};                           // 'object'
typeof [](another, trap);             // SyntaxError
typeof function () {};              // 'function'
typeof NaN;                          // 'number'
typeof undeclaredVariable;           //  'undefined'

// one-liner: An array is an reference type 'object', same as other reference types.

// Part B - instanceof with real types

[] instanceof Array;                 // true
[] instanceof Object;                // true
Object instanceof {};                // true
"hello" instanceof String; //(false — why?) - it is because strings literals are primitive values, not objects
new String("hello") instanceof String;     // true
42 instanceof Number;                      // false
new Date() instanceof Date;                // true
/abc/ instanceof RegExp;                   // true

// comment: typeof is the right tool when checking for undefined variables is the case, instanceof is wrong,
// because typeof safely returns a string 'undefined' for undeclared variables, whereas, instance of throws
// a ReferenceError. instaceof is the right tool when checking for custom class instances,and typeof is wrong,
// because it always returns 'object' for any custom object, while instaceof correctly identifies if an
// object was created by a specific constructor.

// Part C - delete and its gotchas

// 1.
user = { name: 'Lerato', age: 25, role: 'student' }
delete user.role;
console.log(user)      //  before: { name: 'Lerato', age: 25, role: 'student' } after: { name: 'Lerato', age: 25 }

// 2.
let x = 5;
delete x;
console.log(x);
// the log returns 5, why - because delete operator cannot delete a variables, it removes properties from an
// object.

// 3.
const arr = [1, 2, 3, 4];
delete arr[1];
console.log(arr);           // [ 1, <1 empty item>, 3, 4 ]
console.log(arr.length);    // 4
console.log(arr[1]);        // 'undefined'
// comment: delete is dangerous on arrays because it deletes the value but never the index position itself.

// 4.
delete Math.PI;
console.log(Math.PI);   // 3.141592653589793
// comment: first of all is not an object and it is a read-only constant, hence it can never be deleted.

// Interview answer: I would not use delete because delete only removes the value by key and leaves an empty slot,
// instead i could use splice() - it removes the specified element on an array and automatically shifts all the
// the following elements to the left. for example: arr.splice(index, 1) - would remove element on index 1 and shift
// all elements following the removed index to close the empty slot.


/******************************************************
*       Challenge 8 - Bitwise Permission System       *
******************************************************/

const READ = 1;     // binary 0001
const WRITE = 2;    // binary 0010
const DELETE = 4;   // binary 0100
const ADMIN = 8;    // binary 1000

// #1
// binaray steps - to store permission as a single number using OR operator
// means that either one of the bits has to be 1 for the single nuumber to be 1.
//  (1): 0001
//  (2): 0010
//  (3): 0011
let user1 = READ | WRITE;
console.log(user1);    // (3) binary 0011

// #2
// binary         0001
// binary         0010
// binary         0100
// binary         1000
// single number: 1111  (15)
const admin = READ | WRITE | DELETE | ADMIN;
console.log(admin);   // (15)  binary 1111

// #3
let checkRead = user1 & 1 ? 'Yes' : 'No';
console.log(checkRead);       // 'Yes'

// #4
let checkDelete = user1 & 4 ? 'Yes' : 'No';
console.log(checkDelete);     // 'No'

//  #5
user1 |= DELETE;
// WRITE binary : 0001
// READ binary  : 0010
// DELETE binary: 0100
// single number: 0111   (7)
console.log(user1);    // (7) binary 0111

// #6
user1 &~ WRITE;
// READ binary  : 0001
// DELETE binary: 0100
// single number: 0101   (7)
console.log(user1);   // (7) binary 0101

// #7
user1 = READ | DELETE;
toggleAdminOn = user1 ^ ADMIN;
toggleAdminOff = user1 ^ ADMIN ^ ADMIN;
// READ binary  : 0001
// DELETE binary: 0100
// ADMIN binary : 1000    [toggle on]
// single number: 1101   (13)
console.log(toggleAdminOn);   // 13 binary 1101
// READ binary  : 0001
// DELETE binary: 0100
// ADMIN binary : 0000    [toggle off]
// single number: 0101    (5)
console.log(toggleAdminOff);  // 5 binary 0101

// #8
const SUPER_ADMIN = ADMIN << 1;
console.log(SUPER_ADMIN);    // 16 binary 10000

// Interview answers:
// #1: A team would opt to use bitwise flags for permissions instead of storing an array for the following reasons:
// - Performance efficiency: bitwise and checks operate on a single CPU instruction, which enables the program to run faster.
// - Memory and network efficiency: since permissions are stored as single integer they reduce payload size, saving memory.

// #2: The real-world downside of using bitwise permissions is that they are hard to debug, adding new permissions require careful bit
// management to avoid conflicts and a 64-bit integer restricts to unique permission.
// I would not use this pattern when I have less than 30 permissions (fewer).

// #3: The difference lies on evaluation behaviour and operand types.
// The double (&&, ||) operators are logical operators (evaluate operands as Booleans) and they support short-circuiting, meaning they stop evaluating as
// soon as the results are determined.
// The single (&, |) operators are bitwise operators that always evaluate both operands.
// Silent bug case using this challenge's scenario:
 user1 = 3; // Binary: 11 (has both read and write)

// Correct logical check
if (user1 & 1 && user1 & 2) {
  console.log("Has both"); // Works correctly
}

// Incorrect use of bitwise & in place of &&
if (user1 & 1 & user1 & 2) {
  console.log("Has both"); // Silent failure!
}


/************************************************************
*   Challenge 9 - Real-World Payroll + Banking Calculator   *
************************************************************/

// Scenario 1 - Payroll processor

let grossSalary = 45000;
let paye = 0.25;
let uif = 0.01;
const MEDICAL = 2500;
let pension = 0.075;
let totalDeduction = 0;
let netSalary = 0;

paye *= grossSalary;
uif *= grossSalary;
pension *= grossSalary;
totalDeduction += MEDICAL + uif + paye + pension;
netSalary = grossSalary - totalDeduction;


console.log(`PAYE: R ${paye}`);
console.log(`UIF: R ${uif}`);
console.log(`Medical aid: R ${MEDICAL}`)
console.log(`PENSION: R ${pension}`);
console.log(`Total Deductions: R ${totalDeduction}`);
console.log(`Net Salary: R ${netSalary}`);

// Simulation
let grossSalaryInput = Number('45000');
Number.isNaN(grossSalaryInput)


// Scenario 2 - Compound interest savings

let initialDeposit = 25000;
let annualInterest = 0.075;
let compoundedMonthly = 12;
let time = 3;
let totalBalance, totalInterestEarned, effectiveAnnualRate;

totalBalance = initialDeposit * (1 + annualInterest / compoundedMonthly) ** (compoundedMonthly * time);

totalInterestEarned = totalBalance - initialDeposit;

effectiveAnnualRate = ((1 + annualInterest / compoundedMonthly) ** compoundedMonthly) - 1;

console.log(`Total balance after 3 years: R ${totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
console.log(`Total interest earned: R ${totalInterestEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
console.log(`Annual interest rate: ${effectiveAnnualRate.toFixed(2)}%`);

// Test balances
let balance = 500;
//let balance = 1500;
//let balance = 10000;
//let balance = 50000;


// calculating annual fee on balance
let annualFee = balance * 12;

const bankCharges = balance >= 0 && balance < 1000 ? 'R 25' :
  balance >= 1000 && balance < 5000 ? 'R 50' :
    balance >= 5000 && balance < 25000 ? 'R 75' :
      'R 0 (fees waived)';

console.log(`Monthly bank charge fee for this month: ${bankCharges}`);
console.log(`Annual fee on the balance: R ${annualFee.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);


// Scenario 3 - Multi-currency transfer

// declaring and assigning variables
let bankCharge = 0.025;
let zarAmount = 15730.33;
let usdExchangeRate = 18.42;

// calculation
let commisonInZar = zarAmount * bankCharge;
let amountAfterCommission = zarAmount + commisonInZar;
let usdAmount = amountAfterCommission / usdExchangeRate;

// logging the results
console.log(`The commission in ZAR: R ${commisonInZar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
console.log(`The ZAR amount after commission: R ${amountAfterCommission.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
console.log(`The USD amount received: $ ${usdAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);

// Final question answer: Floating-point precision caused me potential problems on scenario 1 when calculating the total balance,
//what helped was rounding to Fixed decimal place (2).


/******************************************************
*       Challenge 11 - Bug Hunt                       *
******************************************************/

// Bugs:
// 1. var item1Price = "199.99"; - is bug because itemPrice variable is assigned to type string instead on a number.
// 2. var item2Price = "49.50"; - is bug because itemPrice variable is assigned to type string instead on a number.
// 3. var quantity = "2"; - is bug because itemPrice variable is assigned to type string instead on a number.
// 4. var isLoggedIn = "true"; - a boolean variable is assigned to a string type.
// 5. var subtotal = item1Price + item2Price + item3Price * quantity; - no parentheses for itemPrice addition
// 6. var discount = discountCode == "SAVE10" ? 0.1 : 0; - == equality is not a strict one and a discount is a discount.
// 7. var canCheckout = isLoggedIn && customerAge > 18; - condition passes even when they wrong instead applying a proper
// ternay chain it is a good fix
//
// Corrected Version:
// // === JUNIOR DEVELOPER'S CART SCRIPT (DO NOT TRUST ANY LINE) ===
var item1Price = 199.99;
var item2Price = 49.50;
var item3Price = 125;
var quantity = 2;
var discountCode = "SAVE10";
var isLoggedIn = false;
var customerAge = 18;
var subtotal = (item1Price + item2Price + item3Price) * quantity;
console.log("Subtotal:", subtotal);
var discount = discountCode === "SAVE10" ? 0.1 : 0;
var discountAmount = subtotal * discount;
var afterDiscount = subtotal - discountAmount;
var vat = afterDiscount * 0.15;
var total = afterDiscount + vat;
var canCheckout = isLoggedIn && (customerAge >= 18) ? true : false;
console.log("Can checkout?", canCheckout);
var seniorDiscount = customerAge >= 60 ? total * 0.05 : null;
var finalTotal = total - seniorDiscount;
console.log("Total: R" + finalTotal.toFixed(2));
// === END OF SCRIPT ===

/*****************************************************
*           Challenge 12  - Self Reflection          *
*****************************************************/

/*
1. Is that type systems are a very crucial fundamental to JavaScript that a JavaScript developer has to know. How JavaScript's type systems
   determines types at runtime or how it converts values between types to prevent errors. Variables are not bound to a specific type.

2. Strict equality operator is much safer because it evaluates operands not just by values but as well as their data types, where as loose equality operator
   when data types do not match it converts one operand to match the other blindly. Take the example we had of ("5" + 3): what it did it converted 3 to string
   then concatenated returning '53'.

3. Nullish coalescing I would prefer it when differentiating between explicitly null or undefined, and valid falsy values.
Example:
const adminLimit = 10;
const userLimit = 0;

// 0 is not null/undefined, so it is preserved
finalLimit = userLimit ?? adminLimit;       //Correct behaviour

console.log(finalLimit); // Output: 0

// 0 is falsy - the operator incorrectly swaps it for the default
finalLimit = userLimit || adminLimit;           // Incorrect behaviour

console.log(finalLimit); // Output: 10

4. typeof null returns 'object' because of the historical bug in Javascript's original implementation from 1995. Early Javascript
   engines stored values as 32-bit chunk where lower bits indicated the type tag - the tag for objects was 000 (binary),
   and null was all zeros (null pointer). Because the typeof operator lacked specific logic to distinguish null from objects,
   it incorrectly identified the zeroed type tag as an object. The behavior was preserved due to backward compatibility, as fixing it
   would break huge amount of existing web code.
   I would use strict equality rather than typeof to check if whether a variable is null without being tricked by the bug.

5. If a developer fails to cast a 32-bit or 64-bit integer to a wider type when performing arithmetic on elapsed time, the value 
   will silently wrap around to zero or a negative number after the counter exceeds its maximum limit, and that could take a great
   deal of time to notice the bug.

6. 0.1 and 0.2 are not represented accurately in binary and when added together they are slightly above 0.3, hence 0.1 + 0.2 is not equal 0.3.
   To handle such precision issues i think banks use rounding to a fixed decimal precision or use a small tolerance (Epsilon).

7. Single-characters operators are bitwise operators, meaning they treat operands as a sequence of zeros and ones and the always check both operands.
   Double-character operators are logical operators, meaning they are treated as booleans, and they stop evaluating as soon as the results are determined.

8. I had my fair share of struggle with typeof, instanceof - what helped was your advise for me to open Node REPL and type in the typeof or instanceof
   directly to check. and now since last week Wednesday it is normal for me to open my IDE and have a terminal window next to it to verify for myself.
   Thanks to you, I highly appreciate it.
*/