function timeLogger(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, time);
        if (typeof message !== "string" || typeof time !== "number") {
            reject();
        }
    });
}

timeLogger("first", 1000)
    .then(message => {
        console.log(message)
        return timeLogger("second", 800)
    })
    .then (message => {
        console.log(message);
    })
    .catch(err => console.log("incorrect input"));