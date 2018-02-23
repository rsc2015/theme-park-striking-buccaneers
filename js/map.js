"use strict";

let {dataArea, grabArea} = require('./fire');

    console.log("hello from map.js");

// INSTRUCTIONS

//var myImage = new Image();
//myImage.src = 'images/map_PiratesCove.jpg';
//document.body.appendChild(myImage);

let instructions = document.getElementById("instructions");
let mapAreas = document.getElementsByClassName("map_class");
let emptyCells = document.getElementById("empty");
let defaultInstructionText = "<h3>Welcome to the Pirate's Cove Interactive Map!</h3><br><h4>Instructions on how to use this map:</h4><br><ul><li>Click on a section of the map with a number to see that area of Pirate's Cove</li><li>View and read about all of the attractions and areas to visit in that area of the park.</li><li>To view another area of the park, click on another number on the Pirate's Cove Map</li><li>Have fun!</li>";



//AREA DISPLAYS
function displayArea(e) {
        console.log("Hello", e.target.id);  
        return dataArea(e.target.id);
        // instructions.innerHTML = defaultInstructionText;
        // e.stopPropagation(); // stop any other listeners from hearing this event
   
//   let block = `<section id="card--${index}" class="card-wrapper" style="border: 2px solid black">
//   <h4><a href="#">${attraction.name}</a>  (${attraction_type.name})</h4>
//   <p class="card-copy">${attraction.description}</p></section>`;
//   return block;

}

function setdefaultInstructionsText() {
        // if area 9 is selected (empty), then print defaultInstructionText
        // create a button that says "see instructions" which will print defaultInstructionText
    }


    for (let i = 0; i < mapAreas.length; i++){
        mapAreas[i].addEventListener("click", displayArea);
    }

// for loop for the empty cells to add event listener to change content to default instructions

    console.log("mapAreas", mapAreas);
// module.exports = {testing};


// use an overlay with a grid, each cell would have its own class name or id
// string manipulation: each cell that links to something (attractions), will have a class name
// add event listener to those classes, to call the function

// first part of function will be to know which cell was clicked
// second - ask firebase for the information, which is where the promise comes from
// third - return what firebase information was called, and display

// add separate class name to any cells that are empty, which would call to the default instructions id

// create an empty div


// TO TEST - create one id for the entire map image, then break it out to the different cells
// for all of these cells, find the differences

