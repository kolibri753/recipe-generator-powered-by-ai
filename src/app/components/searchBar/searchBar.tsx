"use client";

import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { customTheme } from "./themeConfig";
import { useTheme } from "next-themes";

import styles from "./searchBar.module.css";

interface IngredientOption {
	label: string;
	value: string;
}

interface SearchBarProps {
	ingredients: IngredientOption[];
	setIngredients: React.Dispatch<React.SetStateAction<IngredientOption[]>>;
	onSearch: () => void;
	suggestions: IngredientOption[];
}

const SearchBar: React.FC<SearchBarProps> = ({
	ingredients,
	setIngredients,
	onSearch,
	suggestions,
}) => {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const themeMode: "light" | "dark" =
		resolvedTheme === "dark" ? "dark" : "light";

	return (
		<div className={styles.searchBar}>
			<CreatableSelect
				isMulti
				aria-label="Enter or choose ingredients"
				value={ingredients}
				onChange={(newValue) => setIngredients(newValue as IngredientOption[])}
				options={suggestions}
				placeholder="Enter or choose ingredients..."
				className="basic-multi-select"
				classNamePrefix="select"
				theme={(theme) => customTheme(theme, themeMode)}
			/>
			<button onClick={onSearch} className={styles.searchBar__button}>
				<span className={styles.button__text}>Generate Recipe</span>
				<FontAwesomeIcon icon={faReceipt} size="2x" />
			</button>
		</div>
	);
};

export default SearchBar;
