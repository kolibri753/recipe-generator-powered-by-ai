// SearchBar.tsx
import React from "react";
import styles from "./searchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
	ingredients: string;
	onIngredientsChange: (value: string) => void;
	onSearch: () => void;
}

function SearchBar({
	ingredients,
	onIngredientsChange,
	onSearch,
}: SearchBarProps) {
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
					value={ingredients}
					size={100}
					placeholder="Write what you have in the fridge here..."
					onChange={(e) => onIngredientsChange(e.target.value)}
				/>
			</label>
			<button type="submit" className={styles.searchBar__button}>
				<span className={styles.button__text}>Generate Recipe</span>
				<FontAwesomeIcon className={styles.button__icon} icon={faReceipt} />
			</button>
		</form>
	);
}

export default SearchBar;
