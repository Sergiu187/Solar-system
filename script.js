// // let toggle = document.querySelector('.toggle');
// //     let menu = document.querySelector(".menu");
// //     toggle.onclick = function (){
// //          menu.classList.toggle('active');
// //     }

// // Get the toggle button element
// const toggleButton = document.querySelector('.toggle');

// // Get all the planet circles
// const planetCircles = document.querySelectorAll('.menu li');

// // Create the explore button
// const exploreButton = document.createElement('button');
// exploreButton.innerText = 'Explore';
// exploreButton.classList.add('explore-button');

// // Create the hide button
// const hideButton = document.createElement('button');
// hideButton.innerText = 'Hide';
// hideButton.classList.add('hide-button');

// // Function to show the planets and hide the explore button
// function showPlanets() {
//   planetCircles.forEach((planet, index) => {
//     planet.style.transform = `rotate(calc(360deg/8 * ${index}))`;
//   });
//   toggleButton.removeChild(exploreButton);
//   toggleButton.appendChild(hideButton);
// }

// // Function to hide the planets and show the explore button
// function hidePlanets() {
//   planetCircles.forEach((planet) => {
//     planet.style.transform = 'rotate(0deg) translateX(450px)';
//   });
//   toggleButton.removeChild(hideButton);
//   toggleButton.appendChild(exploreButton);
// }

// // Add event listener to the explore button
// exploreButton.addEventListener('click', showPlanets);

// // Add event listener to the hide button
// hideButton.addEventListener('click', hidePlanets);

// // Add the explore button to the toggle button initially
// toggleButton.appendChild(exploreButton);


// Get the toggle button element
const toggleButton = document.querySelector('.toggle');

// Get all the planet circles
const planetCircles = document.querySelectorAll('.menu li');

// Get the articles
const article1 = document.querySelector('.article1');
const article2 = document.querySelector('.article2');

// Create the explore button
const exploreButton = document.createElement('button');
exploreButton.innerText = 'Explore';
exploreButton.classList.add('explore-button');

// Create the hide button
const hideButton = document.createElement('button');
hideButton.innerText = 'Hide';
hideButton.classList.add('hide-button');

// Function to show the planets and hide the explore button
function showPlanets() {
  planetCircles.forEach((planet, index) => {
    planet.style.transform = `rotate(calc(360deg/8 * ${index}))`;
  });
  toggleButton.removeChild(exploreButton);
  toggleButton.appendChild(hideButton);
  article1.style.display = 'none';
  article2.style.display = 'none';
}

// Function to hide the planets and show the explore button
function hidePlanets() {
  planetCircles.forEach((planet) => {
    planet.style.transform = 'rotate(0deg) translateX(450px)';
  });
  toggleButton.removeChild(hideButton);
  toggleButton.appendChild(exploreButton);
  article1.style.display = 'block';
  article2.style.display = 'block';
}

// Add event listener to the explore button
exploreButton.addEventListener('click', showPlanets);

// Add event listener to the hide button
hideButton.addEventListener('click', hidePlanets);

// Add the explore button to the toggle button initially
toggleButton.appendChild(exploreButton);
// ==========================================
// Function to apply hover styles
function applyHoverStyles(event) {
  const planet = event.target;
  planet.style.transform = 'scale(1.1)'; 
  planet.style.transition = 'transform 0.5s ease-in-out';
}

// Function to remove hover styles
function removeHoverStyles(event) {
  const planet = event.target;
  planet.style.transform = ''; 
}

// Add event listeners for mouseover and mouseout events for planetCircles
planetCircles.forEach((planet) => {
  planet.addEventListener('mouseover', applyHoverStyles);
  planet.addEventListener('mouseout', removeHoverStyles);
});

