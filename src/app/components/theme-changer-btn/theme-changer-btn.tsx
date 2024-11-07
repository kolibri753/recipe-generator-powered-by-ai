"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot, faCookie } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

import styles from "./styles.module.css";

const ThemeChangerBtn = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const toggleTheme = () => {
		const newTheme = resolvedTheme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<div
			className={`${styles.theme__switcher} ${
				resolvedTheme === "dark" ? styles.darkMode : ""
			}`}
			onClick={toggleTheme}
		>
			<div className={styles.theme__slider}>
				<FontAwesomeIcon
					className={styles.theme__icon}
					icon={resolvedTheme === "dark" ? faCookie : faCarrot}
				/>
			</div>
		</div>
	);
};

export default ThemeChangerBtn;
