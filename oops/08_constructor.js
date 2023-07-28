// function circle(){

// }

// function Circle(radius){
//     this.radius = radius;
//     // console.log("it is having radius" +radius + " of circle" );
    
//     this.getCircle = function(){
//         console.log(`raius of ${this.radius} circle `)
//         // console.log(`radius of ${this.radius} "my fav circl"`)
//     }
    
// }

// let circle1 = new Circle(5)
// console.log(circle1)
// circle1.getCircle()

function Employee(name, age, department){
    this.name = name;
    this.age = age;
    this.department = department;

    this.newEemp = function(){
        console.log("this will be new emp entry")
    }
}

let emp1 = new Employee("shekhar", 30, "QA")
let emp2 = new Employee("Akash", 23, "Dev")
let emp3 = new Employee("rohan", 40, "support")

// console.log(emp1);
// console.log(emp2);
// emp3.newEemp()