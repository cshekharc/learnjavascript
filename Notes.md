Javascript Variables declaration 
There are some rules while declaring a JavaScript variable (also known as identifiers).
Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
After the first letter we can use digits (0 to 9), for example value1.
JavaScript variables are case sensitive, for example x and X are different variables.
Variable in javascript is a name of storage location.
JavaScript has two types of data-types

Primitive data-types:
Number: used for numeric values, can be integers or floating-point numbers
String: used for textual data
Boolean: used for true/false values
Symbol: a new data type introduced in ECMAScript 6, used for unique identifiers
null and undefined: special values used to indicate that a variable has no value
It also has special objects like

Non-Primitive data-types:
Object: used for storing collections of key-value pairs
Array: used for storing ordered collections of values
Function: used for defining a block of code that can be executed on demand

// Premitive data-types
console.log('Hello world')




// number // int, float, long short double
let num = 55.90 // let var and const
console.log(num)
console.log(typeof (num)) // will print datatype


String
let myName= 'shekhar'
console.log(myName)
console.log(typeof (myName))


boolean
var active = true
console.log(active)
console.log(typeof (active))




undefined
let lastName // we have not assign anything to lastname
console.log(lastName)
console.log(typeof(lastName))


null
let abc = null
console.log(abc)
console.log(typeof(abc))


// number
let a = 10 // var let and const
console.log(typeof a)
console.log(a)


// string
{
    let a = 'shekhar' // reassignmnet  // scope {}
    console.log(typeof a)
    console.log(a)
}


// boolean
a = false
console.log(typeof a)
console.log(a)


// undefined
a = undefined
console.log(typeof a)
console.log(a)


// null
a = null
console.log(typeof a) // arr[] = {1, 2, 3, null}
console.log(a)
// nonprimitive datatype
// array declaration
let num = [10, 20, 30, 40, 'shekhar', false]
console.log(typeof num)
console.log(num)
console.log(num[3])
console.log(num[4])
console.log(num[6])
console.log(num.length)
num.push(20)
num.push('abc')
console.log(num)
num.unshift(200)
console.log(num)
console.log(num.length)
num.pop()
console.log(num)
num.shift()
console.log(num)


num.splice(1,4)
// console.log(num)


let num1 = [1, 2, 3, 'shekhar', false]
let num2 = ['java', 'js', 'python']
num1.push(num2)
console.log(num1) // object
console.log(num1[5][0])


for(let i= 0; i<num1.length; i++){ // index+1
    console.log(num[i])
}
var, let, and const Variable Declaration in JavaScript
With the use of var, let and const keywords we can declare variables in javascript. The differences between var, let, and const variable declaration in JavaScript include: 
Variables declared with var and const are scoped to the immediate function body. 
Variables declared with the var keyword are hoisted. Hoisting means that the variable can be accessed in their enclosing scope even before they are declared. 
Variables declared with the let keyword are block-scoped, which means the variables will have scope to the immediate enclosing block.
var, let, and const are used for declaring variables, but they have some important differences in terms of scope, hoisting, and reassignment capabilities. Here's a brief overview of each:

var:

Function-scoped: Variables declared with var are function-scoped, meaning they are accessible within the function where they are defined.
Hoisting: Variables declared with var are hoisted to the top of their scope, which means they are moved to the top of their function or global scope during the compilation phase. However, only the declaration is hoisted, not the initialization.
Reassignment: Variables declared with var can be reassigned new values.
Example:

function exampleFunction() {
  var x = 10;
  if (true) {
    var x = 20; // The same 'x' variable is updated
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20, as 'x' is function-scoped
}
let:

Block-scoped: Variables declared with let are block-scoped, meaning they are only accessible within the block (enclosed by curly braces) where they are defined.
Hoisting: Like var, let is also hoisted, but the variable remains uninitialized (temporal dead zone) until the point of declaration.
Reassignment: Variables declared with let can be reassigned new values.
Example:

function exampleFunction() {
  let y = 10;
  if (true) {
    let y = 20; // A different 'y' variable is created in this block
    console.log(y); // Output: 20
  }
  console.log(y); // Output: 10, as 'y' is block-scoped
}
const:

Block-scoped: Variables declared with const are block-scoped, just like let.
Hoisting: const is also hoisted, but like let, the variable remains uninitialized until the point of declaration.
Reassignment: Variables declared with const cannot be reassigned once they are initialized. However, the data within complex types (arrays, objects) can still be modified.
Example:

function exampleFunction() {
  const z = 10;
  if (true) {
    const z = 20; // A different 'z' variable is created in this block
    console.log(z); // Output: 20
  }
  console.log(z); // Output: 10, as 'z' is block-scoped and cannot be reassigned
}
In modern JavaScript, it is generally recommended to use let and const over var. Use let when you need to reassign a variable, and use const when you want to create a variable with an unchangeable value. This helps prevent unintentional reassignments and can lead to more robust code.
Javascript Functions
Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

We can declare function as following:
The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, { /* … */ }.
// Functions
function hello(){
    console.log("Hello everyone")
}
hello() // calling non returnig function


function add(a, b){
    return "Additon is :", a+b
}
console.log(add(200, 50))


function fullName(fname, lname){
    return fname+" "+lname // instade of console.log we can use return
}
console.log(fullName('Shekhar', 'Choudhari'))


let sum = function add(a, b){
    return a+b
}
// add(3,4)
console.log(sum(100, 300)) // calling returnig funciton


let difference = function diff(c, d){
    return d-c
}
console.log(difference(100, 300))
Constructor in Javascript
The constructor method is a special method of a class for creating and initializing an object instance of that class.
Syntax
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* … ,*/ argumentN) { /* … */ }
For Example: 


function Katraj(course, lang){
    this.course = course
    this.lang = lang
}


let kar1 = new Katraj("testing", "java")
let kar2 = new Katraj("data science", "python")
let kar3 = new Katraj("react", "js")


console.log(kar1)
console.log(kar2)
console.log(kar3)








function Velocity(testing, tech){
    this.testing = testing
    this.tech = tech
}


let vel1 = new Velocity("Selenium", "Cypress")
let vel2 = new Velocity("Manual", "DB")
let vel3 = new Velocity("All type of testing", "every tech")


console.log(vel1)
console.log(vel2)
console.log(vel3)




function Circle(radius){


    this.radius = radius
    this.draw = function(){
        console.log('draw a circle')
    }
}


const circle1 = new Circle(5)
const circle2 = new Circle(10)
const circle3 = new Circle(50)


console.log(circle1)
circle1.draw()
console.log(circle2)
console.log(circle3)


Javascript Classes
Classes are in fact "special functions", and just as you can define function expressions and function declarations
class velocity{


    admitted(){
        return 'Started cypress'
    }


    selenium(){
        return 'Have basic knowledge'
    }
}


let course = new velocity()
console.log(course.admitted())
console.log(course.selenium())