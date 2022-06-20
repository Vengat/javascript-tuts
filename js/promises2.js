//Promises - alternative way to do asynchronous
/*
- A promise is a proxy for a value not necessarily known when the 
prmoise is created - Mozilla Developer Network
- Promises similar to callbacks are used for async computations
- Think of promise as representing a value that may be available
now, later or never
- Can associate a handler with an async action
- A promise exists in these states:
    - Pending: initial state, not fulfilled
    - Fulfilled: OK! Got it
    - Rejected: failed
*/

const testPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        reject("promise no good! Rejected");
    }
    setTimeout(() => {
        resolve("promise OK!");
    }, 1000);
});

testPromise.then((resolveMessage) => {
    console.log(`Looks like: ${resolveMessage}`);
}).then(() => {
    console.log("I should run after the promise is resolved");
}).then(function() {
    console.log("Promises are awesome!");
}).catch((rejectMessage) => {
    console.log(`Error: ${rejectMessage}`);
});

