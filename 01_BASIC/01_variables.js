//js mastering by strong grip on objects & broser events
const accountId = 13141;
let accountEmail = "hey@example.com";
var accountPassword = "18293";
accountCity = "New York";
let accountState;

/*
never use var, because of the scope problem, it can be accessed outside of the block scope and it can be re-declared and updated, so it is not recommended to use var in modern JavaScript development, instead of var we can use let and const, let is used for variables that can be updated and const is used for variables that cannot be updated, so it is recommended to use const for variables that are not going to be updated and let for variables that are going to be updated
*/

// accountId = 18; // TypeError: Assignment to constant variable &we cant change the value of a constant variable   
accountEmail = "thats@example.com";
accountPassword = "45678";
accountCity = "Los Angeles";
accountState = "NY";
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
