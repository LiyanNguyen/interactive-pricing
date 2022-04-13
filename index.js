let slider1 = document.querySelector(".slider-track-1");
let slider2 = document.querySelector(".slider-track-2");
let slider3 = document.querySelector(".slider-track-3");
let slider4 = document.querySelector(".slider-track-4");
let slider5 = document.querySelector(".slider-track-5");
let sliderButton = document.querySelector(".slider-button");
let pageViews = document.querySelector(".page-views");
let price = document.querySelector(".price h2");
let toggleButton = document.querySelector(".toggle-buton");
let whiteCircle = document.querySelector(".white-circle");
let isYearly = false;
let monthlyPrices = [8, 12, 16, 24, 36];
let yearlyPrices = [6, 9, 12, 18, 27];
let priceIndexor = 2; // 2 by default on pageload

let renderPrice = () => {
	if (isYearly == false) {
		price.innerText = `$${monthlyPrices[priceIndexor]}.00`;
	}

	else if (isYearly == true) {
		price.innerText = `$${yearlyPrices[priceIndexor]}.00`;
	}
}

toggleButton.onclick = () => {
	if (isYearly == false) {
		isYearly = true;
		toggleButton.style.setProperty("background-color", "var(--sliderBackground)");
		whiteCircle.classList.remove("animate-left");
		whiteCircle.classList.add("animate-right");
		renderPrice();
	}

	else if (isYearly == true) {
		isYearly = false;
		toggleButton.style.setProperty("background-color", "var(--toggleBackground)");
		whiteCircle.classList.remove("animate-right");
		whiteCircle.classList.add("animate-left");
		renderPrice();
	}
};

slider1.onclick = () => {
	slider1.style.setProperty("background-color", "var(--fullSliderBar)");
	slider2.style.setProperty("background-color", "var(--emptySliderBar)");
	slider3.style.setProperty("background-color", "var(--emptySliderBar)");
	slider4.style.setProperty("background-color", "var(--emptySliderBar)");
	slider5.style.setProperty("background-color", "var(--emptySliderBar)");
	sliderButton.style.left = "calc(20% - 2rem)";
	pageViews.innerText = `10k Pageviews`;
	priceIndexor = 0;
	renderPrice();
};

slider2.onclick = () => {
	slider1.style.setProperty("background-color", "var(--fullSliderBar)");
	slider2.style.setProperty("background-color", "var(--fullSliderBar)");
	slider3.style.setProperty("background-color", "var(--emptySliderBar)");
	slider4.style.setProperty("background-color", "var(--emptySliderBar)");
	slider5.style.setProperty("background-color", "var(--emptySliderBar)");
	sliderButton.style.left = "calc(40% - 2rem)";
	pageViews.innerText = `50k Pageviews`;
	priceIndexor = 1;
	renderPrice();
};

slider3.onclick = () => {
	slider1.style.setProperty("background-color", "var(--fullSliderBar)");
	slider2.style.setProperty("background-color", "var(--fullSliderBar)");
	slider3.style.setProperty("background-color", "var(--fullSliderBar)");
	slider4.style.setProperty("background-color", "var(--emptySliderBar)");
	slider5.style.setProperty("background-color", "var(--emptySliderBar)");
	sliderButton.style.left = "calc(60% - 2rem)";
	pageViews.innerText = `100k Pageviews`;
	priceIndexor = 2;
	renderPrice();
};

slider4.onclick = () => {
	slider1.style.setProperty("background-color", "var(--fullSliderBar)");
	slider2.style.setProperty("background-color", "var(--fullSliderBar)");
	slider3.style.setProperty("background-color", "var(--fullSliderBar)");
	slider4.style.setProperty("background-color", "var(--fullSliderBar)");
	slider5.style.setProperty("background-color", "var(--emptySliderBar)");
	sliderButton.style.left = "calc(80% - 2rem)";
	pageViews.innerText = `500k Pageviews`;
	priceIndexor = 3;
	renderPrice();
};

slider5.onclick = () => {
	slider1.style.setProperty("background-color", "var(--fullSliderBar)");
	slider2.style.setProperty("background-color", "var(--fullSliderBar)");
	slider3.style.setProperty("background-color", "var(--fullSliderBar)");
	slider4.style.setProperty("background-color", "var(--fullSliderBar)");
	slider5.style.setProperty("background-color", "var(--fullSliderBar)");
	sliderButton.style.left = "calc(100% - 2rem)";
	pageViews.innerText = `1m Pageviews`;
	priceIndexor = 4;
	renderPrice();
};