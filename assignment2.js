//  Part A

//  1. Primitive data types 
// String Datatype: Series of charaters and they follow a syntax of quotes which can either be single or double quotes. 
// For example:
'This is an example of a string'    //  which means the same as   
"This is an example of a string"
// Numbers Datatype: These are digits which are taken in as a float that is they take in decimal places when stored. 
// for example 
let d = 20.0  // or 
let c =20
// Boolean Datatype: This type of data returns the values with 'true' or 'false'. 
//                     It returns true when the answer obeys the condition and false when the answer doesn't   obey the condition. 
// For example: 
let option1= 5 
let option2=7 
let option3= 7 
// (option2==option3)    // Returns true  
// (option1==option3)    // Returns False
// Bigint Datatype: This is a datatype that can be used to store numbers that are too big to be represented by a normal Javascript number.
//                      since a normal JavaScript number only stores in 64-bit floating-point format. 
// for example: 
let bigintExample=26367647234672364273n;
// Null Datatype: Is one that represents absence of an object.
// For example: 
let nullExample = null;
// Undefined Datatype: This is  a variable without a vlaue 
// for example: 
let car;


// 2. Difference between null and undefined
// Null represents the absence of an object value while Undefined is a variable without a value.
// for example: 
let x= null      // output: null
let y;           // output: indefined


// 3. Difference between primitive and reference data types
// Primitive Datatype is a basic data type that represents a single values likes numbers, strings boolean. It is simple immutable (Values can't be changed once passed)
// While
// Reference Datatype is a complex type that represents a reference to a value rather than the value its self. It is mutable (values can be canged) and it cab share multiple variables.

// 4. Typeof Operator
// typeof operator is used to find the type of JavaScript variable. This returns the variable type being used.
// For example: 
typeof'hello'   // output: string
typeof(3)       // output: number


// 5.  concept of type coercion in JavaScript with an example. 
// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This involves implict and explict coercion.
// example:
// converting a number to a string
let num = 5;
let str = "10";

let result = num + str;

console.log(result);  // Output: "510"

// converting a string to a number
let output = '5' - 3;  // Implicit coercion
console.log(output);  // Output: 2

// 6.  difference between == and === in JavaScript? 
// == (Loose Equality): Converts values to the same data type before comparing (type coercion).
// === (Strict Equality): Compares both value and data type, without converting types.
// example of loose equality
let s = "10"; // String
let n = 10;   // Number

console.log(s == n);    // output: true
// example of strict equality
let a = "20"; // String
let b = 20;   // Number

console.log(s === n);   // output: False

// 7. mutable and immutable data types.

// Mutable Data Types
// Mutable data types are those whose values can be changed after they are created. This means that the object can be modified without needing to create a new one.
// Example: Objects and Arrays are mutable
let mutableExample = [5,7,9,3,1];
mutableExample.push(4);  // We can modify the array by adding a new element
console.log(mutableExample);  // output: [5,7,9,3,1,4]

let anotherExample = ['hello this is an example'];
anotherExample.push('Also another');
console.log(anotherExample)

// Immutable Data Types
// Immutable data types are those whose values cannot be changed once they are created. 
// If you want to modify an immutable value, you must create a new instance with the new value.
// Example: Primitive types like Strings, Numbers, Booleans, Null, Undefined, and Symbols are immutable.
let immutableExample = "Hello";
immutableExample = immutableExample + " World";  // Creating a new string instead of modifying the old one
console.log(immutableExample);  // "Hello World"



// Part B
// Write a JavaScript function that takes a parameter and returns its data type using the typeof operator. 

function getDataType(hello){return typeof hello;}
console.log(getDataType('hello'));    // output: String       



// difference between null, undefined, and an empty string. 
// Null represents the absence of an object value.
let nullVal = null;
console.log(typeof nullVal);

// is a variable without a value.
let undefinedVal;
console.log(typeof undefinedVal);
 
//  emptystring
let emptyString ="";
console.log(typeof emptyString);


// variable using const and try to reassign it. 

const trial = 'This is an example';         // assigning the variable

trial = 'Another example';                  // reassigning the variable 
console.log(trial)
// When you try to reassign a const variable, JavaScript throws an error, and the program stops execution at that point.



//  update the third element to "Banana" 
let fruits = ["Apple", "Mango", "Orange"]; 
// Indexes are used to locate the elements in the array
fruits[2] = 'Banana'
fruits = fruits.toString();    // this converts the array to  a string  
console.log(fruits)


// a function that checks if a given variable is an object and not null. 

function isObject(value) {
    return value !== null && typeof value === 'object';
}
console.log(isObject({})); // true
console.log(isObject(null)); // false
console.log(isObject([])); // true (arrays are objects in JavaScript)
console.log(isObject('Hello')); // false (string is not an object)
console.log(isObject(123)); // false (number is not an object)


// BONUS QUESTION
// JavaScript function that takes two different data types and checks if they are strictly equal (===).
function differentDataTypes(dataType1, dataType2){
    return dataType1 === dataType2;
}

console.log(differentDataTypes(23, '23'))
// output: False. checks both the value and the type of the operands. 
// Comparing the fact that datatype1 is a number and dataype2 is a string hence the output is false.