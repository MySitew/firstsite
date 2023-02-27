const car = document.querySelector(".car");

function handleKeyDown(event) {
	if (event.code === "ArrowLeft") {
		moveCar("left");
	} else if (event.code === "ArrowRight") {
		moveCar("right");
	}
}

function moveCar(direction) {
	const currentLeft = car.offsetLeft;
	if (direction === "left" && currentLeft > 0) {
		car.style.left = currentLeft - 10 + "px";
	} else if (direction === "right" && currentLeft < 250) {
		car.style.left = currentLeft + 10 + "px";
	}
}

document.addEventListener("keydown", handleKeyDown);
