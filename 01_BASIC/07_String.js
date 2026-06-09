const name = "sakshi"
const repoCount = 50
// string concatenation
// console.log(name + repoCount + "value"); //sakshi50
// string interpolation
console.log(`My name is ${name} and I have ${repoCount} repositories`); //My name is sakshi and I have 50 repositories  
const gameName = new String('sakshi_saini_com')
console.log(gameName[0]);
console.log(gameName.__proto__);
//use of object
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('a'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.at(-8,4)
console.log(anotherString);
const newStringOne = "   sakshi   "
console.log(newStringOne);
console.log(newStringOne.trim());//refer js mdn
const url = "https://sakshi.com%20saini"
console.log(url.replace('%20' , '_'))
console.log(url.includes('sakshi'))
console.log(url.includes('hitesh'))
console.log(gameName.split('-'));
//string by mdn and browser string function