const select = document.getElementById("all");

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.innerText = countries[i].name.common;
    option.id = i;
    select.append(option);
}

select.addEventListener("change", () => {
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
    document.getElementById("max-population").style.visibility = "visible";
    let countryId = select.options[select.selectedIndex].id;
    let borders = countries[countryId].borders;

    if (borders == undefined || borders.length == 0) {
        document.getElementById("max-population").innerText = "The country doesn't have any neighbours";
    }

    let bordersPopulation = [];
    
    for (let i = 0; i < borders.length; i++) {
        for (let j = 0; j < countries.length; j++) {
            if(countries[j].cca3 == borders[i]) {
                bordersPopulation[i] = countries[j].population;
            }
        }
    }

    let max = Math.max(...bordersPopulation);
    let borderMaxIndex = bordersPopulation.indexOf(max);
    
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].cca3 == borders[borderMaxIndex]) {
            document.getElementById("max-population").innerText = "Neighbour with largest population: " + countries[i].name.common;
            break;
        }
    }
})