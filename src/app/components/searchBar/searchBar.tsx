"use client";

import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { useRecipeStore } from "@/app/store";
import { generateText } from "@/app/ai-api/huggingface";
import { suggestions } from "@/app/utils/suggestions";
import { customTheme } from "./themeConfig";

import styles from "./searchBar.module.css";

interface IngredientOption {
	label: string;
	value: string;
}

const SearchBar: React.FC = () => {
	const { setRecipe, setLoading, isLoading } = useRecipeStore();
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
					options={suggestions}
					placeholder="Enter or choose ingredients..."
					className="basic-multi-select"
					classNamePrefix="select"
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
