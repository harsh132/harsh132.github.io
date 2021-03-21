var nav = document.querySelector("nav");
var navSec = document.getElementById("nav-sec");
var menu = document.getElementById("menu");

function toggle() {
	navSec.classList.toggle("hidden");
	menu.classList.toggle("icon-cancel");
	menu.classList.toggle("icon-menu");
}

window.addEventListener("scroll", function () {
	if (window.scrollY > 0.9 * home.clientHeight) {
		nav.style.background = "#1596e3b0";
	} else {
		nav.style.background = "rgba(255, 255, 255, 0.3)";
	}
});
var imgs = document.querySelectorAll("img[data-src]").forEach(function (i) {
	i.src = i.dataset.src;
});
