const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log (window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// getBGColor(pink);
// console.log(getBGColor(pink));

// var color = getBGColor(red);
// red.addEventListener("mouseenter", () => {
//     center.style.background = color;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener("click", () => {
        center.style.background = color;
    });
};
magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));