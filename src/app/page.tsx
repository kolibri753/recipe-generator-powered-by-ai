"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { generateText } from "./ai-api/huggingface";


import Header from "./components/header/header";
import AvatarAppIntro from "./components/avatarAppIntro/avatarAppIntro";

export default function Home() {
	const [ingredients, setIngredients] = useState("");
	const [generatedText, setGeneratedText] = useState("");
	const [continuation, setContinuation] = useState("");
	const [showContinueButton, setShowContinueButton] = useState(true);
	const [isLoading, setIsLoading] = useState(false); // Add loading state

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setIsLoading(true); // Set loading to true when submitting
		if (ingredients) {
			// Log the input to the AI
			console.log("Input to AI:", ingredients);

			const response = await generateText(ingredients, continuation);
			if (response && response.generated_text) {
				// Extract only the generated portion (excluding initial input)
				const generatedRecipe = response.generated_text.replace(
					`Generate a recipe using the following ingredients: ${ingredients}`,
					""
				);
				setGeneratedText(generatedText + generatedRecipe.trim()); // Append the new text
				// Log the generated text
				console.log("Generated Text:", generatedText + generatedRecipe.trim());
				setShowContinueButton(true); // Show the "Continue" button after generating
			}
			setIsLoading(false); // Set loading to false after generating
		} else {
			setIsLoading(false); // Set loading to false if no ingredients are entered
		}
	};

	const handleContinue = async () => {
		if (generatedText) {
			// Append the current generated text to the continuation
			const newContinuation = `${continuation}\n${generatedText}`;
			setContinuation(newContinuation);
			// Hide the "Continue" button
			setShowContinueButton(false);

			// Log the input to the AI for the continuation
			console.log("Input to AI (Continuation):", newContinuation);

			// Generate a new response using ingredients + the first generated part
			const response = await generateText(ingredients, newContinuation);
			if (response && response.generated_text) {
				// Extract only the new generated portion
				const newGeneratedRecipe = response.generated_text.replace(
					newContinuation,
					""
				);
				setGeneratedText(generatedText + newGeneratedRecipe.trim()); // Append the new text
				// Log the new generated text
				console.log("Continue:", generatedText + newGeneratedRecipe.trim());
				setShowContinueButton(true); // Show the "Continue" button again
			}
		}
	};

	return (
		<main>
			<Header />
			<h1>Recipe Generator Powered by AI</h1>
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
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{generatedText && (
						<div>
							<p>Generated Text: {generatedText}</p>
							{showContinueButton && (
								<button onClick={handleContinue}>Continue</button>
							)}
						</div>
					)}
				</>
			)}
			<AvatarAppIntro />
		</main>
	);
}
