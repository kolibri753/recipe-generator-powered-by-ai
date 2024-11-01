"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useRecipeStore } from "@/app/store";
import { shareRecipe } from "@/app/utils/shareUtils";
import Background from "./background";

import styles from "./recipe.module.css";

const Recipe: React.FC = () => {
	const { recipe, isLoading } = useRecipeStore();
	const handleShareClick = () => shareRecipe(recipe);

	return (
		<div className={styles.recipe}>
			<Background />
			<div className={styles.recipe__header}>
				<h3 className={styles.recipe__title}>Recipe</h3>
				<button
					onClick={handleShareClick}
					className={styles.recipe__btn}
					disabled={!recipe}
				>
					Share <FontAwesomeIcon icon={faShare} />
				</button>
			</div>
			<p className={styles.recipe__desc}>
				{isLoading
					? "Generating recipe..."
					: recipe ||
					  "Write down your favorite ingredients and click the Generate button, and like magic, your custom recipe will appear right here! 🍳🧁✨"}
			</p>
		</div>
	);
};

export default Recipe;
