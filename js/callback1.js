function shouldGoFirst(callBack) {
    setTimeout(() => {
        console.log("I should always go first");
        callBack();
    }, 1000);
}

function shouldGoSecond() {
    console.log("I should always go second");
}

shouldGoFirst(shouldGoSecond);
