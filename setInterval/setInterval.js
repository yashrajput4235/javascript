/* setInterval() function
The setInterval() function in JavaScript is used to repeatedly execute a specified function 
or code snippet at fixed time intervals (in milliseconds) until it is explicitly stopped using clearInterval().*/

function greet() {
    console.log("Hello, World!");
}

// Call the greet function every 2 seconds (2000 milliseconds)
let intervalId = setInterval(greet, 2000);

// To stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared.");
}, 10000);  
/* Explanation:
1. We define a function greet() that logs "Hello, World!" to the console.
2. We use setInterval(greet, 2000) to call the greet function every 2000 milliseconds (2 seconds).
3. We store the interval ID returned by setInterval in the variable intervalId. This ID is used to reference the interval later.
4. We use setTimeout() to schedule a function that will clear the interval after 10 seconds using clearInterval(intervalId). This stops the repeated execution of the greet function.
5. Finally, we log "Interval cleared." to indicate that the interval has been stopped.
*/
