import { render } from "react-dom";
import pages from "./pages";

const container = document.getElementById("application");

render(pages, container, () => {
	container.classList.replace("is_loading", "is_loaded");
});

if (IS_DEVELOPMENT) {
	// enable HMR (Hot Module Replacement)
	module.hot && module.hot.accept();
}
