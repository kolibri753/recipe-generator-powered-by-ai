"use client";

import React, { useState } from "react";
import AvatarAppIntro from "./components/avatarAppIntro/avatarAppIntro";
import Recipe from "./components/recipe/recipe";
import SearchBar from "./components/searchBar/searchBar";
import { generateText } from "./ai-api/huggingface";
import { suggestions } from "./utils/suggestions";

import styles from "./page.module.css";

interface IngredientOption {
	label: string;
	value: string;
}

export default function Home() {
	const [ingredients, setIngredients] = useState<IngredientOption[]>([]);
	const [initialRecipe, setInitialRecipe] = useState<string>("");
	const [continueRecipe, setContinueRecipe] = useState<string>("");
	const [isLoading, setIsLoading] = useState(false);
	const [showInitialRecipe, setShowInitialRecipe] = useState(true);

	const handleSearch = async () => {
		setIsLoading(true);

		if (ingredients.length) {
			const ingredientsList = ingredients
				.map((ingredient) => ingredient.value)
				.join(", ");
			const response = await generateText(ingredientsList);
			if (response?.generated_text) {
				setInitialRecipe(response.generated_text);
			}
		}
		setIsLoading(false);
	};

	const handleContinue = async () => {
		if (initialRecipe) {
			const ingredientsList = ingredients
				.map((ingredient) => ingredient.value)
				.join(", ");
			const response = await generateText(ingredientsList, initialRecipe);
			if (response?.generated_text) {
				setContinueRecipe(response.generated_text);
				setShowInitialRecipe(false);
			}
		}
	};

	const handleReturn = () => {
		setShowInitialRecipe(true);
	};

	return (
		<main className={styles.main}>
			<SearchBar
				ingredients={ingredients}
				setIngredients={setIngredients}
				onSearch={handleSearch}
				suggestions={suggestions}
			/>
			<section className={styles.middle}>
				<AvatarAppIntro />
				<Recipe
					recipeText={showInitialRecipe ? initialRecipe : continueRecipe}
					isLoading={isLoading}
					onContinue={handleContinue}
					onReturn={handleReturn}
				/>
			</section>
		</main>
	);
}
