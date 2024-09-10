import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./router";
import { AuthProvider } from "./contexts/auth.context";

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<Router />
	</AuthProvider>
);
