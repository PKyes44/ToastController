import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastProvider } from "./contexts/toast.context.jsx";

createRoot(document.getElementById("root")).render(
	<ToastProvider>
		<App />
	</ToastProvider>
);
