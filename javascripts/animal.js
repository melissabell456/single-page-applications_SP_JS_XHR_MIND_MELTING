"use strict";

let carnivores = [];
let herbivores = [];

let loadCarnivores = function(displayToDom) {
    const loader = new XMLHttpRequest();
    loader.addEventListener("load", function() {
        carnivores = JSON.parse(loader.responseText).carnivore;
        displayToDom(carnivores);
    });
    loader.open("GET", "../JSON/carnivores.json");
    loader.send();
};

let loadHerbivores = function(displayToDom) {
    const loader2 = new XMLHttpRequest();
    loader2.addEventListener("load", function() {
        herbivores = JSON.parse(loader2.responseText).herbivore;
        displayToDom(herbivores);
    });
    loader2.open("GET", "../JSON/herbivores.json");
    loader2.send();
};

module.exports = { loadCarnivores, loadHerbivores };