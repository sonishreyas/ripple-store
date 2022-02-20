const handleNavBar = () => {
	const hamburgerIcon = document.querySelector(".header .header-nav-icon");
	const closeIcon = document.querySelector(
		".nav .rui-drawer-header .close-drawer"
	);
	const brandName = document.querySelector(".header .brand-info");
	const navBar = document.querySelector(".nav");
	const drawerContent = document.querySelector(
		".nav .rui-drawer-content--list"
	);
	hamburgerIcon.addEventListener("click", () => {
		drawerContent.style.visibility = "visible";
		navBar.style.visibility = "visible";
		brandName.style.visibility = "hidden";
	});
	closeIcon.addEventListener("click", () => {
		drawerContent.style.visibility = "hidden";
		navBar.style.visibility = "hidden";
		brandName.style.visibility = "visible";
	});
	window.addEventListener("resize", function () {
		if (window.innerWidth >= 1180) {
			navBar.style.visibility = "visible";
			brandName.style.visibility = "visible";
			if (drawerContent.classList.contains("display-inactive") === false) {
				drawerContent.classList.add("display-inactive");
			}
		} else {
			if (drawerContent.classList.contains("display-inactive")) {
				drawerContent.classList.remove("display-inactive");
			}
			navBar.style.visibility = "hidden";
			drawerContent.style.visibility = "hidden";
			brandName.style.visibility = "visible";
		}
	});

	if (window.innerWidth < 1180) {
		if (drawerContent.classList.contains("display-inactive")) {
			drawerContent.classList.remove("display-inactive");
		}
	}
};

export { handleNavBar };
