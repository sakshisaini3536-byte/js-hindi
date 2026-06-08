"user strict"; // treat all js code as newer version

// alert(3 + 4);  we are using nodejs not browser, so alert is not defined, we will use console.log instead

console.log(
    3 + 4); // not a good practice  because code radability is high   

console.log("sakshi");

let name = "sakshi";
let age = 21;
let isLoggedIn = false;
let state; // undefined

// we have 7 primitives  data types in js, string, number, boolean, null, undefined, symbol and object//
// number => 2 to power of 53 
// bigint => more than 2 to power of 53
// string => sequence of characters
// boolean => true or false
// null => empty value stand alone value
// undefined => value is not assigned
// symbol => unique identifier

// we can use typeof operator to check the data type of a variable
console.log(typeof null);// object
console.log(typeof undefined);// undefined
console.log(typeof 123);