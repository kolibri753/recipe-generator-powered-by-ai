import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Background from "./background";
import { shareRecipe } from "../../utils/shareUtils";

import styles from "./recipe.module.css";

interface RecipeProps {
	recipeText: string;
	isLoading: boolean;
}

const Recipe: React.FC<RecipeProps> = ({ recipeText, isLoading }) => {
	const handleShareClick = () => {
		shareRecipe(recipeText);
	};

	return (
		<div className={styles.recipe}>
			<Background />
			<div className={styles.recipe__header}>
				<h3 className={styles.recipe__title}>Recipe</h3>
				<button
					className={styles.recipe__btn}
					onClick={handleShareClick}
					disabled={isLoading}
				>
					Share
					<FontAwesomeIcon icon={faShare} />
				</button>
			</div>
			{recipeText ? (
				<p className={styles.recipe__desc}>
					{isLoading ? "Generating recipe..." : recipeText}
				</p>
			) : (
				<p className={styles.recipe__desc}>
					Write down your favorite ingredients and click the Generate button, and
					like magic, your custom recipe will appear right here! 🍳🧁✨
				</p>
			)}
		</div>
	);
};

export default Recipe;
