const timeHeading = document.querySelector("h1");
let timeSecond = 90;

const displayTime = (second) => {
	const min = Math.floor(second / 60);
	const sec = Math.floor(second % 60);
	timeHeading.innerHTML = `${min < 10 ? "0" : ""} ${min}: ${
		sec < 10 ? "0" : ""
	}${sec}`;
};

displayTime(timeSecond);

const countdown = setInterval(() => {
	timeSecond--;
	displayTime(timeSecond);

	if (timeSecond === 0) {
		clearInterval(countdown);
		timeHeading.innerHTML = "Time's up!";
	}
}, 1000);
