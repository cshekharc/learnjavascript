// non-primitive data types
//objects, arrays, functions these are non-primitive data types in JavaScript

// let student = {
//     rollNo : 30,
//     fname : "shekhar",
//     lname : "c",
//     funName : function (){
//         console.log("we are in object")
//     }
// }
// // console.log(typeof student);
// student.std = 7
// student.div = "E"
// student.lname = "choudhari"
// student.funName()
// delete student.rollNo
// delete student.lname
// console.log(student);

// function hello(){
//     console.log("Hello everyone!");
// }
// hello()

// let a = function add(a, b){
//     return a+b
// }
// console.log(a(30, 40))

let a1 = [1, 2, "shekhar", function sum(x, y){
    return x + y; 
}]
// console.log(a1.length)
// a1.push(30, "last")
// a1.push(30, "last")
// a1.push()
console.log(a1[3](3,5))

// console.log(add(2, 3));

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
  };
  
  for (const prop in person) {
    console.log(`${prop}: ${person[prop]}`);
  }