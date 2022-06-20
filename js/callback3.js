function logger(num1, num2, cb) {
    const squaredAndSummedNums = (num1 * num1) + (num1 * num2);
    console.log(squaredAndSummedNums);
    if(cb  && typeof(cb) === "function") {
        cb();
    }
}

logger(10, 50);

logger(10, 50, function() {
    console.log("Hey");
});