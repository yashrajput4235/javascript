// arrays in js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

// adding new element
fruits.push("Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]

// modifying existing element
fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Date"]

// removing last element
fruits.pop();
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

// iterating over array elements
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
/* Output:
Apple
Blueberry
Cherry
*/
// map function
// array methods
let numbers = [1, 2, 3, 4, 5];