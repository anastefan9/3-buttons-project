var win_nr = getRandomNumber(1, 3);
var winVar = document.getElementById("winMessage");
var loseVar= document.getElementById("loseMessage");

function create3Buttons() {
	for (var i = 1; i <= 3; ++i) {
		var container = document.getElementById("box");
		var button = document.createElement("BUTTON");
		container.appendChild(button);
		button.innerHTML = "Buton" + " " + i;
		if (i == win_nr) {
			button.onclick = function() {getMessage(winVar, loseVar)};
		} else {
			button.onclick = function() {getMessage(loseVar, winVar)};
		}
	}
}
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getMessage(win, lose) {
	win.style.display = "block";
	lose.style.display = "none";
}