import React from "react";
import CreatableSelect from "react-select/creatable";
import styles from "./searchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { customTheme } from "./themeConfig";

interface IngredientOption {
	label: string;
	value: string;
}

interface SearchBarProps {
	ingredients: IngredientOption[];
	setIngredients: React.Dispatch<React.SetStateAction<IngredientOption[]>>;
	onSearch: () => void;
	suggestions: IngredientOption[];
	themeMode: "light" | "dark";
}

const SearchBar: React.FC<SearchBarProps> = ({
	ingredients,
	setIngredients,
	onSearch,
	suggestions,
	themeMode,
}) => {
	return (
		<div className={styles.searchBar}>
			<CreatableSelect
				isMulti
				value={ingredients}
				onChange={(newValue) => setIngredients(newValue as IngredientOption[])}
				options={suggestions}
				placeholder="Enter ingredients..."
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
