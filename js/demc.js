window.addEventListener("load", async () => {
	let target = document.getElementById("didomi-host");

	if (target) {
		target.remove();
		ledocument.getElementsByTagName("html")[0].style.overflow = "scroll";
	}
});
