// Spread syntax
/*
 - Can be used in places where (e.g.) functions expect multiple arguments
*/

function spreadFunction(...multipleArgs) {
    console.log(multipleArgs);
}

spreadFunction(1, 2, true, "hi");

const myArray = [1, 2, 3, 4];
console.log(...myArray);
const mySecondArray = [5, 6, 7, 8, 9];
const myThirdArray = [...myArray, ...mySecondArray, 11, 12];
console.log(myThirdArray);

function sayHello(x, y, z) {
    console.log(`Hello, ${x}, ${y}, ${z}`);
}

const helloArray = ["Bob", "Jane", "Peter"];
//function.prototype.apply
sayHello.apply(null, helloArray);
//Spread syntax
sayHello(...helloArray);