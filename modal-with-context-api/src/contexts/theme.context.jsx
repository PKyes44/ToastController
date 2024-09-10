import { createContext, useContext, useState } from "react";
import React from "react";

const intialTheme = {
	theme: "light",
	toggleDarkTheme: () => {},
};
const ThemeContext = createContext(intialTheme);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	const toggleDarkTheme = () => {
		setTheme((prevIsDarkTheme) => {
			if (prevIsDarkTheme === "light") {
				return "dark";
			}
			return "light";
		});
	};

	const value = {
		theme,
		toggleDarkTheme,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}
