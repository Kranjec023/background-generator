var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorButton = document.getElementById("color");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function changeColor() {
	var r = Math.floor(Math.random() * 256); // Random [0,255]
	var g = Math.floor(Math.random() * 256); // Random [0,255]
	var b = Math.floor(Math.random() * 256); // Random [0,255]

	color1.value = '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
	color2.value = '#' + componentToHex(b) + componentToHex(r) + componentToHex(g);
}

function componentToHex(c){
	var hex = c.toString(16);
	return hex.length == 1 ? '0' + hex : hex;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

colorButton.addEventListener("click", changeColor)

body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";