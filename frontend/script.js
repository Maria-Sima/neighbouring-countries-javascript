let countries = require('./data').countries;
const select = document.querySelector("all");
let option = document.createElement("option");

let countriesNames = [];

for (let i = 0; i < countries.length; i++) {
countriesNames[i] = countries[i].name.common;
}

for (let i = 0; i < countriesNames.length; i++) {
    option.text = countriesNames[i];
    select.add(option, select[i]);
}