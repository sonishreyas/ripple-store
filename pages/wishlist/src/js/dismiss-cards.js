const handleDismissCard = () => {
	const dismissCardBtn = document.querySelectorAll(
		".dismiss-cards .card-dismiss-btn"
	);
	const card = document.querySelectorAll(".dismiss-cards .card");
	dismissCardBtn.forEach((item, index) => {
		item.addEventListener("click", () => {
			card[index].classList.add("inactive");
		});
	});
};

export { handleDismissCard };
