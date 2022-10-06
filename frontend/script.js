const select = document.getElementById("all");
const translate = document.getElementById("translate");

for (let i = 0; i < countries.length; i++) {
  let option = document.createElement("option");
  option.innerText = countries[i].name.common;
  option.id = i;
  select.append(option);
}

select.addEventListener("change", () => {
  document.getElementById("translate").style.visibility = "visible";
  document.getElementById("population").style.visibility = "visible";
  document.getElementById("area").style.visibility = "visible";
  document.getElementById("flag").style.visibility = "visible";
  document.getElementById("select-incentive").style.visibility = "hidden";
  document.getElementById("max-population").style.visibility = "hidden";
  let value = select.options[select.selectedIndex].id;
  document.getElementById("flag").src = countries[value].flags.png;
  document.getElementById("common-name").innerText = countries[value].name.common;
  document.getElementById("region").innerText = countries[value].region;
  document.getElementById("subregion").innerText = countries[value].subregion;
  document.getElementById("capital").innerText = countries[value].capital;
});

const population = document.querySelector("#population");

population.addEventListener("click", () => {
  let countryId = select.options[select.selectedIndex].id;
  let borders = countries[countryId].borders;

  if (borders == undefined || borders.length == 0) {
    document.getElementById("max-Area").style.visibility = "visible";
    document.getElementById("max-Area").innerText = "The country doesn't have any neighbours";
  }

  let bordersPopulation = [];

  for (let i = 0; i < borders.length; i++) {
    for (let j = 0; j < countries.length; j++) {
      if (countries[j].cca3 == borders[i]) {
        bordersPopulation[i] = countries[j].population;
        break;
      }
    }
  }

  let max = Math.max(...bordersPopulation);
  let borderMaxIndex = bordersPopulation.indexOf(max);

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].cca3 == borders[borderMaxIndex]) {
      historic.push(i + 1);
      document.getElementById("all").selectedIndex = i + 1;
      document.getElementById("population").style.visibility = "visible";
      document.getElementById("area").style.visibility = "visible";
      document.getElementById("flag").style.visibility = "visible";
      document.getElementById("select-incentive").style.visibility = "hidden";
      document.getElementById("max-population").style.visibility = "hidden";
      let value = select.options[i + 1].id;
      document.getElementById("flag").src = countries[value].flags.png;
      document.getElementById("common-name").innerText = countries[value].name.common;
      document.getElementById("region").innerText = countries[value].region;
      document.getElementById("subregion").innerText = countries[value].subregion;
      document.getElementById("capital").innerText = countries[value].capital;
      break;
    }
  }
})

const area = document.querySelector("#area");

area.addEventListener("click", () => {

  let countryId = select.options[select.selectedIndex].id;
  let borders = countries[countryId].borders;

  if (borders == undefined || borders.length == 0) {
    document.getElementById("max-Area").style.visibility = "visible";
    document.getElementById("max-Area").innerText =
      "The country doesn't have any neighbours";
  }

  let bordersArea = [];

  for (let i = 0; i < borders.length; i++) {
    for (let j = 0; j < countries.length; j++) {
      if (countries[j].cca3 == borders[i]) {
        bordersArea[i] = countries[j].area;
      }
    }
  }

  let max = Math.max(...bordersArea);
  let borderMaxIndex = bordersArea.indexOf(max);

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].cca3 == borders[borderMaxIndex]) {
      historic.push(i + 1);
      document.getElementById("all").selectedIndex = i + 1;
      document.getElementById("population").style.visibility = "visible";
      document.getElementById("area").style.visibility = "visible";
      document.getElementById("flag").style.visibility = "visible";
      document.getElementById("select-incentive").style.visibility = "hidden";
      document.getElementById("max-population").style.visibility = "hidden";
      document.getElementById("flag").src = countries[i].flags.png;
      document.getElementById("common-name").innerText = countries[i].name.common;
      document.getElementById("region").innerText = countries[i].region;
      document.getElementById("subregion").innerText = countries[i].subregion;
      document.getElementById("capital").innerText = countries[i].capital;
      break;
    }
  }
});

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let historic = [];
let historyPrevCounter = 0;

select.addEventListener("change", () => {
  historic.push(select.selectedIndex);
  if (historic.length > 1) {
    prev.style.visibility = "visible";
  }
});

prev.addEventListener("click", () => {
  historyPrevCounter++;
  if (historic.length - 1 == historyPrevCounter) {
    prev.style.visibility = "hidden";
  }
  if (historyPrevCounter >= 1) {
    next.style.visibility = "visible";
  }
  document.getElementById("population").style.visibility = "visible";
  document.getElementById("area").style.visibility = "visible";
  document.getElementById("flag").style.visibility = "visible";
  document.getElementById("select-incentive").style.visibility = "hidden";
  document.getElementById("max-population").style.visibility = "hidden";
  document.getElementById("all").selectedIndex = historic[historic.length - 1 - historyPrevCounter];
  document.getElementById("flag").src = countries[historic[historic.length - 1 - historyPrevCounter] - 1].flags.png;
  document.getElementById("common-name").innerText = countries[historic[historic.length - 1 - historyPrevCounter] - 1].name.common;
  document.getElementById("region").innerText = countries[historic[historic.length - 1 - historyPrevCounter] - 1].region;
  document.getElementById("subregion").innerText = countries[historic[historic.length - 1 - historyPrevCounter] - 1].subregion;
  document.getElementById("capital").innerText = countries[historic[historic.length - 1 - historyPrevCounter] - 1].capital;
});


next.addEventListener("click", () => {
  document.getElementById("population").style.visibility = "visible";
  document.getElementById("area").style.visibility = "visible";
  document.getElementById("flag").style.visibility = "visible";
  document.getElementById("select-incentive").style.visibility = "hidden";
  document.getElementById("max-population").style.visibility = "hidden";
  document.getElementById("all").selectedIndex = historic[historic.length - historyPrevCounter];
  document.getElementById("flag").src = countries[historic[historic.length - historyPrevCounter] - 1].flags.png;
  document.getElementById("common-name").innerText = countries[historic[historic.length - historyPrevCounter] - 1].name.common;
  document.getElementById("region").innerText = countries[historic[historic.length - historyPrevCounter] - 1].region;
  document.getElementById("subregion").innerText = countries[historic[historic.length - historyPrevCounter] - 1].subregion;
  document.getElementById("capital").innerText = countries[historic[historic.length - historyPrevCounter] - 1].capital;
  historyPrevCounter--;
  if (historic.length - 1 > historyPrevCounter) {
    prev.style.visibility = "visible";
  }
  if (historyPrevCounter == 0) {
    next.style.visibility = "hidden";
  }
});

translate.addEventListener("change", () => {
  let value = select.options[select.selectedIndex].id;
  switch (translate.value) {
    case "english":
      document.getElementById("common-name").innerText = countries[value].name.common;
      break;
    case "german":
      document.getElementById("common-name").innerText = countries[value].translations.deu.official;
      break;
    case "arabic":
      document.getElementById("common-name").innerText = countries[value].translations.ara.official;
      break;
    case "french":
      document.getElementById("common-name").innerText = countries[value].translations.fra.official;
      break;
  }
});