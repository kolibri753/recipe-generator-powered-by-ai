import React, { useState } from "react";
import styles from "./searchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
	ingredients: string;
	onIngredientsChange: (value: string) => void;
	onSearch: () => void;
	suggestions: string[];
}

function SearchBar({
	ingredients,
	onIngredientsChange,
	onSearch,
	suggestions,
}: SearchBarProps) {
	const [currentInput, setCurrentInput] = useState(ingredients);
	const [selectedSuggestion, setSelectedSuggestion] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setCurrentInput(value);

		const currentWord = value.split(",").pop()?.trim().toLowerCase() || "";

		if (currentWord.length > 0) {
			const matchingSuggestion = suggestions.find((suggestion) =>
				suggestion.toLowerCase().startsWith(currentWord)
			);
			setSelectedSuggestion(matchingSuggestion || "");
		} else {
			setSelectedSuggestion("");
		}

		onIngredientsChange(value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Tab" && selectedSuggestion) {
			e.preventDefault();

			const words = currentInput.split(",").map((word) => word.trim());

			words[words.length - 1] = selectedSuggestion;

			const updatedIngredients = words.join(", ") + ", ";

			setCurrentInput(updatedIngredients);
			onIngredientsChange(updatedIngredients);
			setSelectedSuggestion("");
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch();
	};

	return (
		<form onSubmit={handleSubmit} className={styles.searchBar}>
			<label className={styles.searchBar__label}>
				Enter Ingredients:
				<input
					className={styles.searchBar__input}
					type="search"
					value={currentInput}
					size={80}
					placeholder="Write what you have in the fridge here..."
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
				/>
				{selectedSuggestion && (
					<span className={styles.searchBar__suggestion}>{selectedSuggestion}</span>
				)}
			</label>
			<button type="submit" className={styles.searchBar__button}>
				<span className={styles.button__text}>Generate Recipe</span>
				<FontAwesomeIcon
					className={styles.button__icon}
					icon={faReceipt}
					size="2x"
				/>
			</button>
		</form>
	);
}

export default SearchBar;
