// ARRAYS
// shallow copy(same refernce point mean jo bhi change krenge vo original array m bhi hoga) and deep copy( do not share the same reference)
const myArr = [0, 1, 2, 3, 4, 5 ]
const myHeros = ["shaktiman", "nagaraj"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr2[3]);
// //prototype
// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// const newArr = myArr.join()//convert data into string and also bind the data
// console.log(newArr);
// console.log(myArr);     
// console.log(typeof newArr);
// console.log(typeof newArr);
 
// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B" , myArr);


const myn2 = myArr.splice(1, 3)
console.log("c" , myArr);
console.log(myn2);
//  diff b/w slice and splice 
// slice does not modify the original array, it returns a new array
// splice modifies the original array, it returns the removed elements
// not just  diff about range 