import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowRight,
	faShare,
} from "@fortawesome/free-solid-svg-icons";
import Background from "./background";
import { shareRecipe } from "../../utils/shareUtils";

import styles from "./recipe.module.css";

interface RecipeProps {
	recipeText: string;
	isLoading: boolean;
	onContinue: () => void;
	onReturn: () => void;
}

const Recipe: React.FC<RecipeProps> = ({
	recipeText,
	isLoading,
	onContinue,
	onReturn,
}) => {
	const [isReturnDisabled, setIsReturnDisabled] = useState(true);

	const handleReturnClick = () => {
		onReturn();
		setIsReturnDisabled(true);
	};

	const handleContinueClick = () => {
		onContinue();
		setIsReturnDisabled(false);
	};

	const handleShareClick = () => {
		shareRecipe(recipeText);
	};

	return (
		<div className={styles.recipe}>
			<Background />
			<div className={styles.recipe__header}>
				<h3 className={styles.recipe__title}>Recipe</h3>
				<button
					className={[styles.recipe__button, styles.btn__share].join(" ")}
					onClick={handleShareClick}
					disabled={isLoading}
				>
					Share
					<FontAwesomeIcon icon={faShare} />
				</button>
			</div>
			{recipeText ? (
				<p className={styles.recipe__desc} style={{ whiteSpace: "pre-line" }}>
					{isLoading ? "Generating recipe..." : recipeText}
				</p>
			) : (
				<p className={styles.recipe__desc}>
					Write down your favorite ingredients and click the Generate button, and
					like magic, your custom recipe will appear right here! 🍳🧁✨
				</p>
			)}
			<div className={styles.recipe__buttons}>
				<button
					className={styles.recipe__button}
					onClick={handleReturnClick}
					disabled={isLoading || isReturnDisabled}
				>
					<FontAwesomeIcon icon={faArrowLeft} />
					Return
				</button>
				<button
					className={styles.recipe__button}
					onClick={handleContinueClick}
					disabled={isLoading || !isReturnDisabled}
				>
					<FontAwesomeIcon icon={faArrowRight} />
					Continue
				</button>
			</div>
		</div>
	);
};

export default Recipe;
