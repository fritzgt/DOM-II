// Your code goes here

//1.Mouseover this will Chage the color and font Weight of the "Fun Bus" text on the nav
const busIcon = document.querySelector(".logo-heading");
busIcon.addEventListener("mouseover", function(event) {
  this.style.color = "red";
  this.style.fontWeight = "bold";
});

//2.keydown by entering text in the inputfield this text will replace the "Home" anchor in the nav bar
const searchField = document.querySelector(".nav-container input");
let inputKey = [];
searchField.addEventListener("keydown", function(event) {
  let Keys = event.key;
  inputKey.push(Keys);
  inputKey.toString();
  let name = document.querySelector(".nav-link");
  name.textContent = inputKey.join("");
});

//3.Wheel this will swap the mainimg to a duplicates img with a flip bus
const mainWheel = document.querySelector("body");
mainWheel.addEventListener("wheel", function(event) {
  let mainImg = document.querySelector(".intro img");
  mainImg.setAttribute("src", "img/fun-bus-flip.jpg");
});

//4. Load this will show an alert with a message
window.addEventListener("load", function(event) {
  // alert("Page is fully loaded!"); // commented out during project
});

//5.Focus use to change the background color of the input field on focus
searchField.addEventListener("focus", function(event) {
  event.target.style.background = "pink";
});

// Drag and drop
// const buttons = document.querySelectorAll(".btn");
// buttons.addEventListener("drag", function(event) {});
