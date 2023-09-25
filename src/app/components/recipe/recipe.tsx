import React, { useState } from "react";
import styles from "./recipe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
		console.log("return button pressed");
	};

	const handleContinueClick = () => {
		onContinue();
		setIsReturnDisabled(false);
		console.log("continue button pressed");
	};

	return (
		<div className={styles.recipe}>
			<h3 className={styles.recipe__title}>Recipe</h3>
			{recipeText ? (
				<p className={styles.recipe__desc}>
					{isLoading ? "Generating recipe..." : recipeText}
				</p>
			) : (
				<p className={styles.recipe__desc} style={{ fontSize: "20px" }}>
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
					Continue
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</div>
	);
};

export default Recipe;
