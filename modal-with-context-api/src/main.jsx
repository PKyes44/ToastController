import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./contexts/modal.context.jsx";
import { ThemeProvider } from "./contexts/theme.context.jsx";

createRoot(document.getElementById("root")).render(
	<ModalProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</ModalProvider>
);
