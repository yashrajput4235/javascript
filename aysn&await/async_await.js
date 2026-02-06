/*async and await in javascript
async and await is a way to write asynchronous code in a synchronous manner
async and await is a syntactic sugar over promises
async and await is a way to handle promises
*/
/*why we use await
What await does
await tells JavaScript:
🛑 "STOP here. Don’t go to the next line until this work is finished."
Like telling a waiter:
“Wait here until my food comes. Don’t leave.”
*/
/*syntax:
    async function myFunction() {
  let result = await somePromise;
}
*/
/*example:
    async function myFunction() {
  let result = await somePromise;
}
*/ 
/*error handling in async and await
    async function myFunction() {
  try {
    let result = await somePromise;
  } catch (error) {
    console.log(error);
  }
}
*/
async function fetchdata(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};

