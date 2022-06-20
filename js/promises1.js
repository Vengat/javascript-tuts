function counter() {
    setTimeout(() => {
        console.log("First");
        setTimeout(() => {
            console.log("Second");
            setTimeout(() => {
                console.log("Third");
                setTimeout(() => {
                    console.log("Fourth");
                }, 400)
            }, 600)
        }, 800)
    }, 1000)
}

counter();