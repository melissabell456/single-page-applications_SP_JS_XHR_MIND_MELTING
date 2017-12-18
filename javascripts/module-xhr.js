"use strict";

const animal = require("./animal");

let carnivoreContainer = document.getElementById("carnivores");
let herbivoreContainer = document.getElementById("herbivores");

function showCarnivores(carnivores) {
  carnivores.forEach((animal) => {
    let carnivoreTxt = document.createElement("p");
    carnivoreTxt.innerText = animal;
    carnivoreContainer.appendChild(carnivoreTxt);
  });
}

function showHerbivores(herbivores) {
  herbivores.forEach((animal) => {
    let herbivoreTxt = document.createElement("p");
    herbivoreTxt.innerText = animal;
    herbivoreContainer.appendChild(herbivoreTxt);
  });
}



animal.loadCarnivores(showCarnivores);
animal.loadHerbivores(showHerbivores);