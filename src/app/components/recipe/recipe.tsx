import React, { useState } from "react";
import styles from "./recipe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Recipe = ({ recipeText = "The recipe will appear here. Just write down the ingridients and press generate!" }) => {
	const [currentPage, setCurrentPage] = useState(0);

	const handleReturnClick = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleContinueClick = () => {
		// Add your logic here to check if there are more pages/steps
		// For example, you can compare currentPage with the total number of pages/steps
		// If there are more pages, increment currentPage
		// Example:
		// if (currentPage < totalPages - 1) {
		//   setCurrentPage(currentPage + 1);
		// }
	};

	return (
		<div className={styles.recipe}>
			<h3 className={styles.recipe__title}>Recipe</h3>
			<p className={styles.recipe__desc}>{recipeText}</p>
			<div className={styles.recipe__buttons}>
				<button
					className={styles.recipe__button}
					onClick={handleReturnClick}
					disabled={currentPage === 0}
				>
					<FontAwesomeIcon icon={faArrowLeft} />
					Return
				</button>
				<button className={styles.recipe__button} onClick={handleContinueClick}>
					Continue
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</div>
	);
};

export default Recipe;
