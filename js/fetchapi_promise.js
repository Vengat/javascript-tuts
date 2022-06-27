//fetch API 
//returns a Promise

const planetDiv = document.getElementById("planet");
//const myButton = planetDiv.querySelector("button");
const singlePlanetButton = document.getElementById("single");
const multiPlanetsButton = document.getElementById("multiple");
singlePlanetButton.addEventListener("click", getPlanet);
multiPlanetsButton.addEventListener("click", getPlanets);
function getPlanet() {
    fetch("https://swapi.dev/api/planets/1/")
    .then(data => console.log(data))
    .then(d => populatePlanet(d.json))
    .catch(err => console.log(err.message));
}

function getPlanets() {
    fetch("https://swapi.dev/api/planets/")
    .then(data => data.json())
    .then(planets => populatePlanets(planets.results))
    .catch(err => console.log(err.message));
}

function populatePlanets(planetsArray) {
    for(const [index, prop] of planetsArray.entries()) {
        populatePlanet_New(planet, index);
    }
}

function populatePlanet(planetObj) {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = planetObj.name;
    planetDiv.appendChild(newParagraph);
}

function populatePlanet_New(planetObj, index) {
    const {name, climate, terrain, population, orbital_period} = planetObj;
    let pop;
    if(population > 0 && population <= 1000000) {
        pop = "low";
    } else if(population > 1000000 && population <= 1000000000 ) {
        pop = "medium";
    } else if (population > 1000000000) {
        pop = "high";
    } else {
        pop = "unknown";
    }

    const planetDiv = `
    <div class="planet" data-planetID=${index} data-population=${pop}>
        <h1>${name}</h1>
        <p>
            ${name} has a climate that is ${climate}. The terrain is
            ${terrain}, with a population of ${population}. The orbital period is ${orbital_period}
        </p>
    <div>
    `
    //planetDiv.innerHTML += planetDiv;
    planetDiv.insertAdjacentHTML("beforeend", planetDiv);
}

const highlighter = document.getElementById("highlighter");
function showUnpopulated() {
    const allPlanetDivs = document.querySelectorAll(".planet");
    for(const prop of allPlanetDivs) {
        if(prop.dataset.population === "unknown") {
            prop.style.backgroundColor = "yellow";
        }
    }
}

const selector = document.getElementById("selector");
selector.addEventListener("change", highlight);

const allPlanetDivs = document.getElementsByClassName("planet");
function highlight(e) {
    console.log(e.target.value());
    const {value} = e.target;
    for(const prop of allPlanetDivs) {
        prop.style.background = "white";
        if (prop.dataset.population === value) {
            prop.style.background = "teal";
        }
    }

}