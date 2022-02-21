// // Index JS
import { handleNavBar } from "../../../../main/js/handle-nav-bar.js";
import { handleRangeSlider } from "./range-slider.js";
// runs all the js files
const runScripts = () => {
	handleNavBar();
	handleRangeSlider("price-slider", "100");
	handleRangeSlider("rating-slider", "1");
};
runScripts();
