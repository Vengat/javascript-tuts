const myDiv = document.getElementById("main");
const myButton = myDiv.querySelector("button");
const fakeData = {
    text: "lorem ipsum doler set"
}

myButton.addEventListener("click", function() {
    console.log("clicked");
    requestData(populateDOM);
});

function requestData(cb) {
    //Fake server request and response
    setTimeout(() => {
        //Response from server
        const data = fakeData.text;
        cb(data);
    }, 2000);
}

function loadingRequestData(cb) {
    let data = "loading...";
    cb(data);
    //Fake server request and response
    setTimeout(() => {
        //Response from server
        data = fakeData.text;
        cb(data);
    }, 2000);
}

function populateDOM(data) {
    myDiv.innerHTML += `<p>${data}</p>`
}