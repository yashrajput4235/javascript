/* string in js */
let greeting = "Hello, World!";
console.log(greeting[0]); // H
console.log(greeting[7]); // W
console.log(greeting.length); // 13

// string methods
let phrase = "JavaScript is awesome!";
console.log(phrase.toUpperCase()); // "JAVASCRIPT IS AWESOME!"
console.log(phrase.toLowerCase()); // "javascript is awesome!"
console.log(phrase.indexOf("is")); // 11
console.log(phrase.slice(0, 10)); // "JavaScript"
console.log(phrase.replace("awesome", "great")); // "JavaScript is great!"

// template literals
let name = "John";
let age = 30;
let introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction); // "My name is John and I am 30 years old."

// multi-line strings
let multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);
/* Output:
This is line one.
This is line two.
This is line three.
*/

// string trimming
let spacedString = "   Hello, Trim!   ";
console.log(spacedString.trim()); // "Hello, Trim!"     
console.log(spacedString.trimStart()); // "Hello, Trim!   "
console.log(spacedString.trimEnd()); // "   Hello, Trim!"
// string splitting
let csv = "apple,banana,cherry";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]
// joining strings
let words = ["Hello", "world", "!"];
let sentence = words.join(" ");
console.log(sentence); // "Hello world !"
// checking substring
let text = "The quick brown fox";
console.log(text.includes("quick")); // true
console.log(text.startsWith("The")); // true
console.log(text.endsWith("fox")); // true  
// repeating strings
let laugh = "ha".repeat(3);
console.log(laugh); // "hahaha"
// charAt method
let sample = "Sample";
console.log(sample.charAt(2)); // "m"
// charCodeAt method
console.log(sample.charCodeAt(2)); // 109 (ASCII code for 'm')  
// string comparison
let str1 = "apple";
let str2 = "banana";
console.log(str1.localeCompare(str2)); // -1 (str1 comes before str2)
console.log(str2.localeCompare(str1)); // 1 (str2 comes after str1)
console.log(str1.localeCompare("apple")); // 0 (both are equal) 
// string normalization
let accented = "café";
let normalized = accented.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
console.log(normalized); // "cafe"