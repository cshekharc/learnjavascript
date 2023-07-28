// child.js
import Parent from './01_parent.js';

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  sayAge() {
    console.log(`I am ${this.age} years old`);
  }
}

export default Child;
