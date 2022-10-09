const switcher = document.querySelector(".theme-switcher input");

switcher.addEventListener("change", (e) => {
	if (e.target.checked) {
		document.body.setAttribute("data-theme", "dark");
	} else {
		document.body.setAttribute("data-theme", "light");
	}
});
