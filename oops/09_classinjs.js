class Person{
    constructor(fname, gender, age){
        this.fname = fname;
        this.gender = gender;
        this.age = age;
    }

    greet(){
        console.log("Hi evryone")
    }
}

let per1 = new Person("velocity", "male", 10);
let per2 = new Person("hema", "female", 20);
console.log(per1);
per1.greet()
console.log(per2)