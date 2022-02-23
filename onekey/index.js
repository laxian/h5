function setSeconds(seconds) {
	document.getElementsByClassName("word2")[0].innerHTML = seconds + "s";
}

function setTitle(value) {
	var ele = document.getElementById("title")
	ele.innerText = value
}

function setTitleColor(color) {
	var ele = document.getElementById("title")
	ele.style = "color:" + color
}

function setSubtitle(value) {
	var ele = document.getElementById("subtitle")
	ele.innerText = value
}

function setSubtitleColor(color) {
	var ele = document.getElementById("subtitle")
	ele.style = "color:" + color
}

function setButtonColor(color) {
	var ele = document.getElementById("submit")
	ele.style = "background:" + color
}

function setButtonText(value) {
	var ele = document.getElementById("btntext")
	ele.innerText = value
}

function setButtonTextColor(color) {
	var ele = document.getElementById("btntext")
	ele.style = "color:" + color
}

function setCancel(value) {
	var ele = document.getElementById("cancel")
	ele.innerText = value
}

function setCancelColor(color) {
	var ele = document.getElementById("cancel")
	ele.style = "color:" + color
}

function setImg() {}

function setLayoutData(jsonStr) {
	var config = JSON.parse(jsonStr)
	setTitle(config.title)
	setTitleColor(config.titleColor)
	setSubtitle(config.subtitle)
	setSubtitleColor(config.subtitleColor)
	setCancel(config.cancelText)
	setCancelColor(config.cancelTextColor)
}

function setExtConfig(jsonStr) {

}

var timer

function startTimer() {
	var timerEle = document.getElementById("timeout")
	var timeLeft = parseInt(timerEle.innerHTML.replace('s', ''))
	timer = setInterval(function () {
		timeLeft--
		timerEle.innerHTML = timeLeft + 's'
	}, 1000)
}

function stopTimer() {
	clearInterval(timer)
}