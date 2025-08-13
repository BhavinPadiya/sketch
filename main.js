function creatediv() {
    const div = document.createElement("div");
    div.style.width = "16px";
    div.style.height = "16px";
    div.style.backgroundColor = "#c0c0c0";
    div.style.border = "1px solid red";
    div.style.flexShrink = 0;
    div.addEventListener("mouseenter", () => {div.style.backgroundColor = "red"});
    div.addEventListener("mouseleave", () => {div.style.backgroundColor = "#c0c0c0"});
    return div;
}

let containerdiv = document.createElement("div");
containerdiv.setAttribute("class","container");
document.body.appendChild(containerdiv);
containerdiv.style.border = "5px solid yellow";
containerdiv.style.display = "inline-flex";
containerdiv.style.width = "288px";
containerdiv.style.flexWrap = "wrap"


for (let box = 1; box < 257; box++) {
    containerdiv.appendChild(creatediv());
}