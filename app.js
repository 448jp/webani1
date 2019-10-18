window.addEventListener("DOMContentLoaded", () => {
	const preloader = document.getElementById("preloader");

	const preloadAnimation = lottie.loadAnimation({
		container: preloader,
		renderer: "svg",
		loop: true,
		path: "data.json",
	});

	setTimeout(() => {
		preloadAnimation.destroy();
		preloader.style.display = "none";
		document.getElementById("contents").style.display = "block";
	}, 3000);
});
