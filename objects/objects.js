// objects in js are simply the key value pairs
let person = {
    name: "John",
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};
console.log(person.name); // John
console.log(person.age); // 25
person.greet(); // Hello, my name is John and I am 25 years old.

// adding new property
person.city = "New York";
console.log(person.city); // New York

// modifying existing property
person.age = 26;
console.log(person.age); // 26

// deleting a property
delete person.city;
console.log(person.city); // undefined

// iterating over object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
/* Output:
name: John
age: 26
greet: function() { ... }
*/

// nested objects
let student = {
    name: "Alice",
    age: 22,
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        zip: "90001"
    }
};
console.log(student.address.city); // Los Angeles

// object methods
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2

// object destructuring
let { name, age } = person;
console.log(name); // John
console.log(age); // 26

// spread operator with objects
let person2 = { ...person, gender: "male" };
console.log(person2);
/* Output:
{
  name: 'John',
  age: 26,
  greet: [Function: greet],
  gender: 'male'
}
*/

// desttruction object
const person3 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    city: 'San Francisco'
};
// destructuring assignment
const { firstName, lastName, age: personAge, city } = person3;
console.log(firstName); // Jane
console.log(lastName);  // Doe
console.log(personAge); // 30
console.log(city);      // San Francisco