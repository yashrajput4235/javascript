/*promises in javscript is an object representing the eventuall result
(success/failure) of an asynchornous operation

states of promise:
1.pending
2.fulfilled
3.rejected
*/
/*Pending:initial state, neither fulfilled nor rejected
Fulfilled:the operation was completed successfully
Rejected:the operation failed*/ 

//syntax:
const promise=new Promise((resolve,reject)=>{
    //asynchronous operation
    //if successful call resolve()
    //if failed call reject()
});

//example:
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise fulfilled");
    },2000);
});

myPromise.then((result)=>{
    console.log(result);
});

//example 2:
const myPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise rejected");
    },2000);
});

myPromise2.catch((error)=>{
    console.log(error);
});
/*.then() and .catch() can be chained together
myPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});*/
// example 3:
const myPromise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise fulfilled");
    },2000);
});

myPromise3.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});
/* finally() method
The finally() method is used to execute a piece of code regardless of whether the promise was fulfilled or rejected.
myPromise.finally(()=>{
    console.log("Promise settled");
});*/














