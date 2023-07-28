import Parent from './01_parent.js';
import Child from './02_child.js';

const parent = new Parent('John');
parent.sayHello(); // Output: Hello, I'm John

const child = new Child('Alice', 5);
child.sayHello(); // Output: Hello, I'm Alice
child.sayAge();   // Output: I am 5 years old
