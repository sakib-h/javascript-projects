const displayKey = document.querySelector(".key h2");
const displayKeyCode = document.querySelector(".keyCode h2");
const keyCodeDiv = document.querySelector(".keyCode");
const overlay = document.querySelector(".overlay");
window.addEventListener("keydown", (e) => {
	overlay.style.display = "none";
	displayKey.innerText = e.key;
	displayKeyCode.innerText = e.keyCode;
	if (e.keyCode === 32) {
		displayKey.innerText = "Space";
	}
});
keyCodeDiv.addEventListener("click", (e) => {
	navigator.clipboard.writeText(displayKeyCode.innerText);
	keyCodeDiv.querySelector("p").innerText = "Copied!";
	setTimeout(() => {
		keyCodeDiv.querySelector("p").innerText = "Click To Copy";
	}, 1000);
});
