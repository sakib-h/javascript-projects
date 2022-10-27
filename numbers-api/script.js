const form = document.querySelector("form");
const numberFact = document.querySelector(".numberFact");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const number = e.target.querySelector(`input[type="number"]`).value;
	const loadingText = "Wait a little bit ⌛";
	numberFact.innerText = loadingText;
	fetch(
		` https://cors-anywhere.herokuapp.com/http://numbersapi.com/${number}`,
		{ method: "GET", headers: { "X-Requested-With": "XMLHttpRequest" } }
	)
		.then((res) => res.text())
		.then((data) => {
			numberFact.innerText = data;
			e.target.querySelector(`input[type="number"]`).value = " ";
		});
});
