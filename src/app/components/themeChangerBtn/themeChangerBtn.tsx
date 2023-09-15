import React, { useEffect, useState } from "react";
import styles from "./themeChangerBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot, faCookie } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

const ThemeChangerBtn = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme(); // Use the useTheme hook to access theme

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const toggleTheme = () => {
		// Toggle between light and dark themes
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div
			className={`${styles.theme__switcher} ${
				theme === "dark" ? styles.darkMode : ""
			}`}
			onClick={toggleTheme}
		>
			<div className={styles.theme__slider}>
				<FontAwesomeIcon
					className={styles.theme__icon}
					icon={theme === "dark" ? faCookie : faCarrot}
				/>
			</div>
		</div>
	);
};

export default ThemeChangerBtn;
