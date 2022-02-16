// // Index JS
import { handleNavBar } from "../../../../main/js/handle-nav-bar.js";
import { handleTabs } from "./tabs.js";
import { handleInput } from "./textbox.js";

// runs all the js files
const runScripts = () => {
	handleNavBar();
	handleTabs("authentication", "horizontal");
	handleInput();
};
runScripts();
