// singleton object
// object . created using object constructor


// *****************object literal*************
const mySym = Symbol("key1") 
const jsUser = {
    name: "sakshi",
    "full name": "sakshi saini",
  [  mySym]: "mykey1",
    age: 21,
    location: "Uk",
    email: "sakshi@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}
    
// console.log(jsUser.email)
// // console.log(jsUser.full name) not rigt way to access
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser)
// console.log(jsUser[mySym])// to access symbol key value


// object accessing by dot notation and bracket notation
// and change by both notations

jsUser.email = "sakshi@chatgpt.com"
// Object.freeze(jsUser) // to make object immutable
jsUser.email = "Sakshi@microsoft.com"
// console.log(jsUser.email);


jsUser.greeting = function(){
    console.log("Hello, welcome to JavaScript!")
}

jsUser.greetingTwo = function(){
    console.log(`Hello, welcome to JavaScript!, ${this.name}`)//``string interpolation
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
//***jb bhi value access karni ho to . ka use karein */
//but kbhi kbhi only dynamic access krna ho to [] ka use karein
