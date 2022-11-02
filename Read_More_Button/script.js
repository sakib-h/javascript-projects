const readMoreBtn = document.querySelector(".readMoreBtn");
const text = document.querySelector(".text");
readMoreBtn.addEventListener("click", (e) => {
	text.classList.toggle("showMore");
	if (readMoreBtn.innerText === "Read More") {
		readMoreBtn.innerText = "Read Less";
	} else {
		readMoreBtn.innerText = "Read More";
	}
});
