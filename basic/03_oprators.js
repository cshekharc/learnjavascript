// operators

// let a = 10;
// let b = 20;
// let sum = a + b; // addtion operator 
// console.log(sum)

// let c = 10;
// let d = 20;
// let sub = d - c; // substraction operator 
// console.log(sub)

// let ab = a * b // multiplication 
// console.log(ab);

// //division
// let cd = d/c;
// console.log(cd) 

// // increment  ++ and --

// let inc = 20;
// // inc++;
// ++inc
// console.log(inc);
// --inc
// //inc--;
// console.log(inc)

// // comaparision operatos == and === 

// console.log("5" == 5) // comaparing the values of data type only 
// console.log(5 === 5) // comaparing the values along with data types

// let a = "5"+5;
// console.log(a)

// ternary operator
// const age = 5;
// const isAdult = age >= 18 ? "able to vote" : "not able to vote";
// console.log(`you are ${age} and ${isAdult}`); // Output: true

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
  
  const person1 = new Person('John', 30);
  person1.sayHello(); // Output: "Hello, my name is John and I am 30 years old."
  


