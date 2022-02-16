// // Index JS
import { handleNavBar } from "../../../../main/js/handle-nav-bar.js";
import { handleTabs } from "./vertical-tabs.js";
import { handleInput } from "./input.js";
import { handleModal } from "./modals.js";

// runs all the js files
const runScripts = () => {
	handleNavBar();
	handleInput();
	handleModal();
	handleTabs("vertical", "vertical");
};
runScripts();
