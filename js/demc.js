window.addEventListener("load", async () => {
	let target = document.getElementById("didomi-host");

	if (target) {
		target.remove();
		document.getElementsByTagName("html")[0].style.overflow = "scroll";
	}
});
