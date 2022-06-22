//fetch API 
//returns a Promise

const planetDiv = document.getElementById("planet");
const myButton = planetDiv.querySelector("button");

myButton.addEventListener("click", getPlanet);

function getPlanet() {
    fetch("https://swapi.dev/api/planets/1/")
    .then(data => console.log(data))
    .then(d => populatePlanet(d.json))
    .catch(err => console.log(err.message));
}

function populatePlanet(planetObj) {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = planetObj.name;
    planetDiv.appendChild(newParagraph);
}

function populatePlanet_New(planetObj) {
    const {name, climate, terrain, population, orbital_period} = planetObj;
    const planetDiv = `
    <div>
        <h1>${name}</h1>
        <p>
            ${name} has a climate that is ${climate}. The terrain is
            ${terrain}, with a population of ${population}. The orbital period is ${orbital_period}
        </p>
    <div>
    `
    planetDiv.innerHTML += planetDiv;
}