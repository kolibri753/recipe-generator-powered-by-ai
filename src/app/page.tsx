"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "./components/header/header";
import AvatarAppIntro from "./components/avatarAppIntro/avatarAppIntro";
import Recipe from "./components/recipe/recipe";

import { generateText } from "./ai-api/huggingface";

export default function Home() {
	const [ingredients, setIngredients] = useState("");
	const [initialRecipe, setInitialRecipe] = useState<string>("");
	const [continueRecipe, setContinueRecipe] = useState<string>("");
	const [isLoading, setIsLoading] = useState(false);
	const [showInitialRecipe, setShowInitialRecipe] = useState(true);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setIsLoading(true);

		if (ingredients) {
			console.log("Submitting ingredients:", ingredients);
			const response = await generateText(ingredients);

			if (response && response.generated_text) {
				setInitialRecipe(response.generated_text);
				console.log("Generated Recipe Text:", response.generated_text);
			}

			setIsLoading(false);
		} else {
			setIsLoading(false);
		}
	};

	const handleContinue = async () => {
		if (initialRecipe) {
			console.log("Continuing with generated text:", initialRecipe);
			const response = await generateText(ingredients, initialRecipe);

			if (response && response.generated_text) {
				setContinueRecipe(response.generated_text);
				console.log("New Generated Recipe Text:", response.generated_text);
				setShowInitialRecipe(false);
			}
		}
	};

	const handleReturn = () => {
		if (!showInitialRecipe) {
			setShowInitialRecipe(true);
			console.log("return is pressed");
		}
	};

	return (
		<main>
			<Header />
			<form onSubmit={handleSubmit}>
				<label>
					Enter Ingredients:
					<input
						type="text"
						value={ingredients}
						onChange={(e) => setIngredients(e.target.value)}
					/>
				</label>
				<button type="submit">Generate Recipe</button>
			</form>
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
