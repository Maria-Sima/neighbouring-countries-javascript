const select = document.getElementById("all");

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.innerText = countries[i].name.common;
    option.id = i;
    select.append(option);
}

select.addEventListener("change", () => {
    let value = select.options[select.selectedIndex].id;
    document.getElementById("flag").src = countries[value].flags.png;
});
