
var timesClicked = 0;

function turnOff() {
	timesClicked++;

	if (timesClicked % 2 == 1) { 
		document.getElementById("inner").style.opacity = "0"; 
		document.getElementById("iphone").style.backgroundImage = "none";   
		document.getElementById("iphone").style.backgroundColor = "#000"; 
		document.getElementById("inner").style.cursor = "pointer"; 
	} else {
		document.getElementById("inner").style.opacity = "1"; 
		document.getElementById("iphone").style.backgroundColor = "transparent"; 
		document.getElementById("iphone").style.backgroundImage = "url('Images/Backgrounds/lockscreen.jpeg')";   
		document.getElementById("inner").style.cursor = "auto"; 
	}

	document.getElementById("iphone").addEventListener("click", () => {
		document.getElementById("inner").style.opacity = "1"; 
		document.getElementById("iphone").style.backgroundColor = "transparent"; 
		document.getElementById("iphone").style.backgroundImage = "url('Images/Backgrounds/lockscreen.jpeg')";   
	});
}

function turnOffLock() {
	timesClicked++;

	if (timesClicked % 2 == 1) { 
		document.getElementById("inner").style.opacity = "0"; 
		document.getElementById("iphone").style.backgroundImage = "none";   
		document.getElementById("iphone").style.backgroundColor = "#000"; 
		document.getElementById("inner").style.cursor = "pointer"; 
	} else {
		window.location.href = "./index.html";	
	}

	document.getElementById("iphone").addEventListener("click", () => {
		window.location.href = "./index.html";			
	});
}

function changeColorTorch() {
	timesClicked++;

	if (timesClicked % 2 == 1) {
	document.getElementById("torchBtn").style.backgroundColor = "#ffffff";
	document.getElementById("torchImg").src = "Images/Icons/torchDark.png";
	} else {
		document.getElementById("torchBtn").style.backgroundColor = "#1d2145";
		document.getElementById("torchImg").src = "Images/Icons/torch.png";
	}
}

var passcodeCount = 0;

function addFilledDot() {
	passcodeCount++;

	document.getElementById("dot" + passcodeCount).style.backgroundColor = "#fff";

	if (passcodeCount == 6) {
		setTimeout(function(){
			window.location.href = "./home.html";	

			var all = document.getElementsByClassName("dot");
			for (var i = 0; i < all.length; i++) {
				all[i].style.backgroundColor = "transparent";
			}					
		}, 500);
	}
}

//--current time--//
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes()
document.getElementById("datetime").innerHTML = time;

//--current day--//
const d = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day;

//--current date--//
var today = new Date();
var date = today.getDate();
document.getElementById("date").innerHTML = date;

//--current month--//

const m = new Date();

const monthname = new Array(12);
monthname[0] = "January";
monthname[1] = "February";
monthname[2] = "March";
monthname[3] = "April";
monthname[4] = "May";
monthname[5] = "June";
monthname[6] = "July";
monthname[7] = "August";
monthname[8] = "September";
monthname[9] = "October";
monthname[10] = "November";
monthname[11] = "December";

let month = monthname[d.getMonth()];
document.getElementById("month").innerHTML = month;
