let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let checkColor = document.querySelector(".display-box");
let saveColor = document.querySelector(".btn");
let userSwatches = document.getElementById("user-swatches");
let colorName = document.getElementById("colorName");
let submit = document.getElementById("submit");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let clear1 = document.getElementById("clear1");
let clear2 = document.getElementById("clear2");
let clear3 = document.getElementById("clear3");
let clear4 = document.getElementById("clear4");
let clear5 = document.getElementById("clear5");
let colorName1 = document.getElementById("colorname1");
let colorName2 = document.getElementById("colorname2");
let colorName3 = document.getElementById("colorname3");
let colorName4 = document.getElementById("colorname4");
let colorName5 = document.getElementById("colorname5");
let r = 0;
let g = 0;
let b = 0;
let boxSavedColor = [first, second, third, fourth, fifth];
let savedColor = [false, false, false, false, false];
let colorSavedName = [
  colorName1,
  colorName2,
  colorName3,
  colorName4,
  colorName5,
];

red.addEventListener("input", () => colorDiv("red"));
green.addEventListener("input", () => colorDiv("green"));
blue.addEventListener("input", () => colorDiv("blue"));

const colorDiv = function (color) {
  let colorDef = document.getElementById([color]).value;

  if (color === "red") {
    r = colorDef;
  }
  if (color === "green") {
    g = colorDef;
  }
  if (color === "blue") {
    b = colorDef;
  }
  checkColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  outputValue(r, g, b);
};

const savingColor = function () {
  for (let i = 0; i < 5; i++) {
    console.log(savedColor[i]);
    if (savedColor[i] == false) {
      boxSavedColor[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      if (r < 100 || g < 100 || b < 100) {
        colorSavedName[i].style.color = "white";
        colorSavedName[i].innerHTML = colorName.value;
      } else {
        colorSavedName[i].style.color = "black";
        colorSavedName[i].innerHTML = colorName.value;
      }
      savedColor[i] = true;
      break;
    }
  }
};

let clear = function (i) {
  boxSavedColor[i].style.backgroundColor = "grey";
  savedColor[i] = false;
};
const outputValue = (r, g, b) => {
  let hex = document.querySelector(".hex");
  let rgb = document.querySelector(".rgb");
  rgb.textContent = `(${r},${g},${b})`;
  hex.textContent = rgbToHex(r, g, b);
};

submit.addEventListener("click", () => savingColor());

clear1.addEventListener("click", () => clear(0));
clear2.addEventListener("click", () => clear(1));
clear3.addEventListener("click", () => clear(2));
clear4.addEventListener("click", () => clear(3));
clear5.addEventListener("click", () => clear(4));
