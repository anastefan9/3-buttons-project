var countButton1 = 0;
var countNextButton = 0;
function button1Function() {
	document.getElementById('loserButton2').style.display = 'none';
	document.getElementById('loserButton3').style.display = 'none';
	document.getElementById('winnerButton').style.display = 'block';
	++countButton1;
	if (countButton1 > 0 && document.getElementById('roundMessage').innerHTML != 'Runda 3') {
		document.getElementById('nextRoundButton').style.display = 'block';
	}
	if (document.getElementById('roundMessage').innerHTML == 'Runda 3') {
		document.getElementById('lastText').style.display = 'block';
	}
}
function button2Function() {
	document.getElementById('loserButton2').style.display = 'block';
	document.getElementById('loserButton3').style.display = 'none';
	document.getElementById('winnerButton').style.display = 'none';
}
function button3Function() {
	document.getElementById('loserButton3').style.display = 'block';
	document.getElementById('loserButton2').style.display = 'none';
	document.getElementById('winnerButton').style.display = 'none';
}

function nextButtonFunction() {
	document.getElementById('roundMessage').innerHTML = 'Runda 2';
	document.getElementById('loserButton3').innerHTML = 'Butonul 1 nu este castigator';
	document.getElementById('loserButton2').style.display = 'none';
	document.getElementById('loserButton3').style.display = 'none';
	document.getElementById('winnerButton').style.display = 'none';
	document.getElementById('Button3').onclick = function() {button1Function();};
	document.getElementById('Button1').onclick = function() {button3Function();};
	document.getElementById('nextRoundButton').style.display = 'none';
	++countNextButton;
	if (countNextButton > 1) {
		document.getElementById('roundMessage').innerHTML = 'Runda 3';
		document.getElementById('Button2').onclick = function() {button1Function();};
		document.getElementById('Button3').onclick = function() {button2Function();};
		document.getElementById('loserButton2').innerHTML = 'Butonul 3 nu este castigator';
	}
}
