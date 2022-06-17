/*
- A callback function is a function that is passed
to another function as a parameter
- This inner function is called at some point during the
execution of the containing function
- In other words its "called back" at some specified point
inside the containing function's body
*/

function shouldGoFirst() {
    setTimeout(() => {
        console.log("I should always go first");
    }, 1000);
}

function shouldGoSecond() {
    console.log("I should always go second");
}

shouldGoFirst();
shouldGoSecond();