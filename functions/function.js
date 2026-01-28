// functions
function sum(a,b){
    return a+b;
}
console.log(sum(2,3)); // 5

// arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Hello, Alice!

// another way of writing arrow function
const greet2 = (name) => `Hello, ${name}!`;
console.log(greet2('Bob')); // Hello, Bob!

/* callback function: a function that you give to another function so that it called later
Simple way to think 🤔

Think of it like this:

“Do this work first, and when you’re done, call me back.”

That “call me back” part is the callback function.*/

// defining call abck function
const sayHello=(name)=>{
    console.log(`Hello, ${name}`);
}
// define a function that take callback
const greetUser=(userName,callback)=>{
    // some work done here
    callback(); // calling callback function with userName
};
// passing callback function
greetUser('Charlie',sayHello); // Hello, Charlie

/*✅ What makes it a callback?

Two things must happen:

You pass a function as an argument

The receiving function calls it later
*/
