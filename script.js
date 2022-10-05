const lengthSlider = document.querySelector(".pass-length input");
const generateButton = document.querySelector(".generate-button");
const options = document.querySelectorAll(".options input");
const passwordInput = document.querySelector(".input-box input");
const passwordIndicator = document.querySelector(".pass-indicator");
const copyIcon = document.querySelector(".input-box span");

const characters = {
	// Object containing all the characters
	lowercase: "abcdefghijklmnopqrstuvwxyz",
	uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	numbers: "0123456789",
	symbols: "^!$%&|/(){}[]:;.,*+-#@~=?_<>\\",
};

const generatePassword = () => {
	let staticPassword = "";
	let randomPassword = "";
	let excludeDuplicates = false;
	let passLength = lengthSlider.value;
	options.forEach((option) => {
		// Looping through the options and adding the checked ones to the static password
		if (option.checked) {
			//if checkbox is checked
			if (
				option.id !== "exclude-duplicate" &&
				option.id !== "include-spaces"
			) {
				// adding particular characters to the static password
				staticPassword += characters[option.id];
			} else if (option.id === "include-spaces") {
				staticPassword += ` ${staticPassword} `;
			} else {
				excludeDuplicates = true;
			}
		}
	});

	for (let i = 0; i < passLength; i++) {
		let randomChar =
			staticPassword[Math.floor(Math.random() * staticPassword.length)];
		if (excludeDuplicates) {
			!randomPassword.includes(randomChar) || randomChar === " "
				? (randomPassword += randomChar)
				: i--;
		} else {
			randomPassword += randomChar;
		}
	}

	passwordInput.value = randomPassword;
};
const updateSliderIndicator = () => {
	passwordIndicator.id =
		lengthSlider.value <= 8
			? "weak"
			: lengthSlider.value <= 16
			? "medium"
			: "strong";
};

const updateSlider = () => {
	// Passing the value of the slider to the span
	document.querySelector(".pass-length span").innerText = lengthSlider.value;
	generatePassword();
	updateSliderIndicator();
};
const copyPassword = () => {
	navigator.clipboard.writeText(passwordInput.value);
	copyIcon.innerText = "check";
	setTimeout(() => {
		copyIcon.innerText = "copy_all";
	}, 1500);
};

updateSlider();
copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateButton.addEventListener("click", generatePassword);
