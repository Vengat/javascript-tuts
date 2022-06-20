function numAdder(n1, n2) {
    return new Promise((resolve, reject) => {
        // if(Math.random() > 0.5) {
        //     reject("nope @ numAdder");
        // }
        const addedNums = n1 + n2;
        setTimeout(() => {
            resolve(addedNums);
        }, 500);
    });
};

function numSquarer(num) {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            reject("nope @ numSquarer");
        }
        setTimeout(() => {
            resolve(num * num);
        }, 800);
    });
};

numAdder(10, 10).then((data) => {
    console.log(`Added total: ${data}`);
    return numSquarer(data);
}).then((moreData) => {
    console.log(moreData);
});

//More ES6 way of doing the above block
numAdder(10, 10)
    .then(data => numSquarer(data))
    .then(moreData => console.log(moreData))
    .catch(err => console.log(err));

Promise.resolve("this is another way")
    .then(data => console.log(data));

function alwaysResolves() {
    return Promise.resolve("I love resolving");
}