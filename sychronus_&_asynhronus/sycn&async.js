/*Synchronus functions are executed in sequence, one after the other, blocking the execution of subsequent code until the current function completes. 
Asynchronous functions, on the other hand, allow other code to run while waiting for a task to complete, enabling non-blocking behavior.*/

// synchronus function
function syncFunction(){
    console.log("Start of synchronous function");
    for(let i=0;i<5;i++){
        console.log(`Synchronous count: ${i}`);
    }
    console.log("End of synchronous function");
}
syncFunction();
console.log("This message is logged after the synchronous function completes.");

// asynchronous function using setTimeout
function asyncFunction(){
    console.log("Start of asynchronous function");
    setTimeout(()=>{
        for(let i=0;i<5;i++){
            console.log(`Asynchronous count: ${i}`);
        }
        console.log("End of asynchronous function");
    },2000); // 2 seconds delay
}
asyncFunction();
console.log("This message is logged immediately after calling the asynchronous function.");

/* Explanation:
1. The syncFunction() runs to completion before the next line of code executes, demonstrating synchronous behavior.
2. The asyncFunction() uses setTimeout to simulate an asynchronous operation. The code inside setTimeout runs after a 2-second delay, allowing the subsequent console.log to execute immediately.
3. This shows how asynchronous functions can perform tasks without blocking the main execution thread.
*/