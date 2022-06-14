var getStyle = function (element, style) {
	return parseInt(window.getComputedStyle(element).getPropertyValue(style));
};

function rightSlide() {
	if (imageIndex >= numberOfImages - 1) {
		imageIndex = -1;
		for (let i = 0; i < numberOfImages; i++) {
			const animate = setInterval(() => {
				images[i].style.left = `${parseInt(getStyle(images[i], 'left')) + 10}px`;
				if (getStyle(images[i], 'left') >= i * 610) {
					clearInterval(animate);
				}
			}, 10);
		}
	}
	else {
		for (let i = 0; i < numberOfImages; i++) {
			const animate = setInterval(() => {
				images[i].style.left = `${parseInt(getStyle(images[i], 'left')) - 10}px`;
				if (getStyle(images[i], 'left') <= ((i - imageIndex) * 610)) {
					clearInterval(animate);
				}
			}, 10);
		}
	}
}

function leftSlide() {
	if (imageIndex <= 0) {
		imageIndex = numberOfImages;
		for (let i = 0; i < numberOfImages; i++) {
			const animate = setInterval(() => {
				images[i].style.left = `${parseInt(getStyle(images[i], 'left')) - 10}px`;
				if (getStyle(images[i], 'left') <= -(numberOfImages - i - 1) * 610) {
					clearInterval(animate);
				}
			}, 5);
		}
	}
	else {
		for (let i = 0; i < numberOfImages; i++) {
			const animate = setInterval(() => {
				images[i].style.left = `${parseInt(getStyle(images[i], 'left')) + 10}px`;
				if (getStyle(images[i], 'left') >= ((i - imageIndex) * 610)) {
					clearInterval(animate);
				}
			}, 5);
		}
	}
}

function slide(index) {
	if (imageIndex === index) return;
	for (let j = 0; j < numberOfImages; j++) {
		if (index < imageIndex) {
			const animate = setInterval(() => {
				images[j].style.left = `${parseInt(getStyle(images[j], 'left')) + 10}px`;
				if (getStyle(images[j], 'left') >= (j - index) * 610) {
					clearInterval(animate);
				}
			}, 10);
		} else {
			const animate = setInterval(() => {
				images[j].style.left = `${parseInt(getStyle(images[j], 'left')) - 10}px`;
				if (getStyle(images[j], 'left') <= (j - index) * 610) {
					clearInterval(animate);
				}
			}, 10);
		}
		if (index === j) {
			dots[j].classList.add('active');
		} else {
			dots[j].classList.remove('active');
		}
	}
}

function checkActive(imageIndex) {
	for (let i = 0; i < numberOfImages; i++) {
		if (imageIndex === i) {
			dots[i].classList.add('active');
		} else {
			dots[i].classList.remove('active');
		}
	}
}