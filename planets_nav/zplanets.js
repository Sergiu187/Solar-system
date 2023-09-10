//   function that generates the navigation menu dynamically based on the planets array
// imported json object from json file

// import user from "../content/navPlanets.json" assert { type: 'json' };

async function getPlanets() {
  const response = await fetch("../content/navPlanets.json");
  const json = await response.json();
  return json;
}


  // Get the current Planet name
  // *retrieves the current file name from the URL. It uses the window.location.pathname property to
  //  get the path of the current URL, then splits it by the forward slash ("/") using the split('/') method.
  // The pop() method is used to extract the last element of the resulting array, 
  // which represents the file name. Finally, the .split('.html')[0] part is used to remove the ".html"
  //  extension from the file name.

  // Find the corresponding planet object based on the current file name
async function getCurrentPlanet() {
  const currentFileName = window.location.pathname
  .split("/")
  .pop()
  .split(".html")[0];

  const { planets } = await getPlanets();
  const resp = planets.find((planet) => planet.file === currentFileName);
  return resp;
}

async function generateMenu() {
  const menu = document.getElementById("menu");
  const ul = document.createElement("ul");

  const { planets } = await getPlanets();
  console.log(planets);

  planets.forEach((planet) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = planet.name;
    a.href = planet.file + ".html";
    li.appendChild(a);
    ul.appendChild(li);
  });

  menu.appendChild(ul);
}

async function generateImage() {
  const planetContainer = document.getElementById("planet-container");

  // Create an image element and set its source to the planet's image
  const planetImage = document.createElement("img");
  const currentPlanet = await getCurrentPlanet();
  planetImage.src = currentPlanet.image;
  planetImage.alt = currentPlanet.name;

  // Append the image element to the beginning of the planet-container
  planetContainer.insertBefore(planetImage, planetContainer.firstChild);
}

async function getPlanetDetails() {
  const currentPlanet = await getCurrentPlanet();

  const passFile = await fetch("../content/password.json");
  const passwords = await passFile.json();

  const url = `https://api.api-ninjas.com/v1/planets?name=${currentPlanet.name}`

  const getPlanetDetails = async () => await fetch(url, {
    headers: {
      "X-Api-Key": passwords.apiKeyNinja
    }
  });

  try {
    const plDetail = (await getPlanetDetails().then(data => data.json()))[0];
    console.log(plDetail)

    const planetContainer = document.getElementById("planet-container");

    // Create an image element and set its source to the planet's image
    const planetDescription = document.createElement("div");
    planetDescription.id = 'planet-description-container';

    const para1 = document.createElement('p');
    const node1 = document.createTextNode(`Mass: ${plDetail.mass}`);
    para1.appendChild(node1);

    planetDescription.appendChild(para1);

    const para2 = document.createElement('p');
    const node2 = document.createTextNode(`Temperature: ${plDetail.temperature}`);
    para2.appendChild(node2);

    planetDescription.appendChild(para2);

    const para3 = document.createElement('p');
    const node3 = document.createTextNode(`Distance Light Years: ${plDetail.distance_light_year}`);
    para3.appendChild(node3);

    planetDescription.appendChild(para3);

    planetContainer.appendChild(planetDescription)
  } catch {
    alert('Could not retrieve Planet Details')
  }
}

// Call the intialization functions function
window.addEventListener("load", generateMenu);
window.addEventListener("load", generateImage);
window.addEventListener("load", getPlanetDetails);
