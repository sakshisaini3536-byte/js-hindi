//*******singleton object*******/
// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "some@example.com",
    fullName: {
        userfullname: {
            firstname: "sakshi",
            lastname: "saini"
        }
    }
 }
 console.log(regularUser.fullName.userfullname.firstname);// to access nested object value
 //optional chaining by this ? Rather than if else
 console.log(regularUser.fullName?.userfullname?.     firstname);

 const obj1 = {1:"a", 2:"b"}
 const obj2 = {3:"c", 4:"d"}
//  const obj3 = { obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)// to merge two objects
 console.log(obj3);