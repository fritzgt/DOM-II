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

//6.Resize when resizing the window the second img will be change with another pic
window.addEventListener("resize", function(event) {
  let adventureImg = document.querySelector(".img-content img");
  adventureImg.setAttribute("src", "img/2img.jpg");
});

//7. Scroll when srolling the bottom content with the title of "Island Getaway" the text will change color
const scrollText = document.querySelector("#scroll-event");
scrollText.addEventListener("scroll", function(event) {
  event.target.style.color = "purple";
});

//8. Select
searchField.addEventListener("select", function(event) {
  alert(`You've selected some text!`);
});

//9. dblclick this will change the border Radius for the third photo
const secondImg = document.querySelectorAll(".img-content img");
let myPic = secondImg[1];
myPic.addEventListener("dblclick", function(event) {
  event.target.style.borderRadius = " 50%";
});

//10.  Drag will conosle a message if someone tries to drag the first btn in the bottom
const buttons = document.querySelectorAll(".btn");
buttons[0].addEventListener("drag", function(event) {
  console.log("You drag me!");
});
