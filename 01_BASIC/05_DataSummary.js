// *********** DATA_TYPES *************
/* dat ko catagories  is base p kiya gya ki hum data kaise memory m store hota h or hum usko kaise access karte h  
 so, is base p data ko officially 2 type diye gye h  primitve and non primitive(reference type)*/

// PRIMITIVE | 7 | changes provide in copy not originally
/*
string, number, boolean, null, undefined, symbol(kisi bhi value ko unique banane k liye use karte h), bigInt
  */
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 34673263727255546453464533n
// NON PRIMITIVE
//Array, objects, functions 
// java script static or daynamic type ??

const heros = ["shaktiman", "nagaraj", "doga"]
 let myObj = {
    name: "sakshi",
    age: 22,
}

// we treat  function in js as a variable 
const myfunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp );
console.log(typeof scoreValue);
// non primitive data ka  return type object(function object) ata h     

