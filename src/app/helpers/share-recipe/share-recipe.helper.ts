async function shareRecipe(recipeText: string) {
	if (recipeText) {
		// Check if the Web Share API is available
		if (navigator.share) {
			// If supported, create a shareable data object
			const shareData = {
				title: "Recipe",
				text: recipeText,
			};

			// Use the Web Share API to share the recipe
			try {
				await navigator.share(shareData);
				console.log("Recipe shared successfully");
			} catch (error) {
				console.error("Error sharing recipe:", error);

				// If sharing fails, fall back to copying to clipboard
				await navigator.clipboard.writeText(recipeText);
				alert("Recipe copied to clipboard!");
			}
		} else {
			// If the Web Share API is not available, copy to clipboard
			await navigator.clipboard.writeText(recipeText);
			alert("Recipe copied to clipboard!");
		}
	}
}

export { shareRecipe };
