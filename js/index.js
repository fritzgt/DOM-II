// Your code goes here

//1.Mouseover this will Chage the color of the "Fun Bus" text on the nav
const busIcon = document.querySelector(".logo-heading");
busIcon.addEventListener("mouseover", function(event) {
  this.style.color = "red";
});

//2.keydown this will log the key being press in the new input filed
const searchField = document.querySelector(".nav-container input");
let inputKey = [];
searchField.addEventListener("keydown", function(event) {
  let Keys = event.key;
  inputKey.push(Keys);
  inputKey.toString();
  console.log(inputKey.join(""));
});

//3.Wheel this will swap the mainimg to a duplicates img with a flip bus
const mainWheel = document.querySelector("body");
mainWheel.addEventListener("wheel", function(event) {
  let mainImg = document.querySelector(".intro img");
  mainImg.setAttribute("src", "img/fun-bus-flip.jpg");
});
