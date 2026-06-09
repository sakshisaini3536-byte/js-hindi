// Stack and heap memory
//stack (primitive), heap(non-primitive)
//in stack jo bhi humne variable declare kara hain uska ek copy milta h
// and jb bhi memory heap k anandar define hoti h to original value ka reference milta h 
//example of stack and stack
let myYoutubename = "everything_you_need_to_live"
let anothername = myYoutubename
anothername = "young_intellects"
console.log(myYoutubename)
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@upy"
}

let userTwo = userOne 
userTwo.email = "sakshi@google.com"
console.log(userOne.email);
console.log(userTwo.email);