const home = document.querySelector("#home");
const nav = document.querySelector("nav");
const navSec = document.getElementById("nav-sec");
const menu = document.getElementById("menu");

VANTA.WAVES({
	el: document.querySelector("#home"),
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.0,
	minWidth: 200.0,
	scale: 0.8,
	scaleMobile: 1.0,
});

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
