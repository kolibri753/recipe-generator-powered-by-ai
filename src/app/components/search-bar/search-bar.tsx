"use client";

import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { useRecipeStore } from "@/app/providers/recipe-store/recipe-store.provider";
import { generateText } from "@/app/libs/api/huggingface/generate-text";
import { getSuggestions } from "@/app/helpers/helpers";
import { customTheme } from "./theme-config";

import styles from "./styles.module.css";

interface IngredientOption {
	label: string;
	value: string;
}

const SearchBar: React.FC = () => {
	const setRecipe = useRecipeStore((state) => state.setRecipe);
	const setLoading = useRecipeStore((state) => state.setLoading);
	const isLoading = useRecipeStore((state) => state.isLoading);
	const { resolvedTheme } = useTheme();
	const [ingredients, setIngredients] = useState<IngredientOption[]>([]);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const themeMode: "light" | "dark" =
		resolvedTheme === "dark" ? "dark" : "light";

	const handleGenerate = async () => {
		setLoading(true);
		if (ingredients.length) {
			const ingredientsList = ingredients.map((ing) => ing.value).join(", ");
			const response = await generateText(ingredientsList);
			if (response?.generated_text) {
				setRecipe(response.generated_text);
			}
		}
		setLoading(false);
	};

	return (
		<div className={styles.searchBar}>
			{mounted && (
				<CreatableSelect
					isMulti
					value={ingredients}
					onChange={(newIngredients) =>
						setIngredients(newIngredients as IngredientOption[])
					}
					options={getSuggestions}
					placeholder="Enter or choose ingredients..."
					className="basic-multi-select"
					classNamePrefix="select"
					aria-label="Ingredients selection"
					theme={(theme) => customTheme(theme, themeMode)}
				/>
			)}
			<button
				onClick={handleGenerate}
				className={styles.searchBar__button}
				disabled={isLoading || ingredients.length === 0}
			>
				<span>Generate Recipe</span>
				<FontAwesomeIcon icon={faReceipt} size="2x" />
			</button>
		</div>
	);
};

export default SearchBar;
