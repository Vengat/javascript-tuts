function sumUpNumbers(num1, num2, cb) {
    let summedValue;
    setTimeout(() => {
        summedValue = num1 + num2;
        cb(summedValue);
    }, 1000)
}

function logSummedValue(val) {
    console.log(`The summed total is: ${val}`);
}

sumUpNumbers(100, 150, logSummedValue);

//callback function
function sayWhenDone(loopCount) {
    console.log('Done! :D. Looped ${loopCount} times');
}

//parent function
function looper(number, cb) {
    let i = 0;
    for(i ; i < number; i++) {
        //console.log(i);
    }
    cb(i);
}


looper(6, sayWhenDone);

function loopCounter(loopCount) {
    console.log('Done! :D. Capitalized ${loopCount} names');
}

function arrayLooper(arr, cb) {
    let i = 0;
    for(i ; i < arr.length; i++) {
        //console.log(i);
        const name = arr[i];
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        arr[i] = capitalizedName;
    }
    cb(i);
}
const myNames = ["chris", "russell", "toby", "angela"];
arrayLooper(myNames, loopCounter);
