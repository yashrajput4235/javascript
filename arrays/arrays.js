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

/* map function
In JavaScript, the map() function is used to create a new array by 
transforming each element of an existing array.*/

let originalArray = [1, 2, 3, 4, 5];
let mappedArray=originalArray.map((element)=>element*2);
console.log(mappedArray); // [2, 4, 6, 8, 10]

/* Advance loops in arrays
for...of loop
The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, sets, etc.*/

let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}
/* Output:
Red
Green
Blue
*/

// forEach loop
colors.forEach((color) => {
    console.log(color);
});
/* Output:
Red
Green
Blue
*/

/* filter function
The filter() function in JavaScript creates a new array with all elements that pass the test implemented by the provided function.*/

let numbers = [10, 15, 20, 25, 30];
let filteredNumbers=numbers.filter((num)=>num>20);
console.log(filteredNumbers); // [25, 30]

/* reduce function
The reduce() function in JavaScript executes a reducer function on each element of the array, resulting in a single output value.*/

let sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum); // 100        
/* Output:10 + 15 + 20 + 25 + 30 = 100
*/  
/* find function
The find() function in JavaScript returns the value of the first element in the array that satisfies the provided testing function.*/

let foundNumber=numbers.find((num)=>num>18);
console.log(foundNumber); // 20 


