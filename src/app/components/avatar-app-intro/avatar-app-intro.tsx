import React from "react";
import Image from "next/image";
import avatar from "/public/images/avocado.avif";
import TypewriterWrapper from "./typewriter-wrapper";

import styles from "./styles.module.css";

const AvatarAppIntro = () => {
	const introText = [
		"Welcome to FoodieMate AI! I'm your friendly kitchen companion here to help you explore a world of delightful recipes.",
		"Step 1: Write your ingredients. Suggestions will appear as you type, and you can press 'Tab' to add them quickly.",
		"Step 2: Press the 'Generate Recipe' button.",
		"Step 3: Now it's my time to work! Sit back, relax, and watch the magic happen. Your delicious recipe will be ready in an instant!",
	];

	return (
		<div className={styles.avatar}>
			<div className={styles.avatar__textContainer}>
				<TypewriterWrapper text={introText} className={styles.avatar__text} />
			</div>
			<div className={styles.avatar__imageContainer}>
				<Image
					className={[styles.avatar__image, "non-draggable-img"].join(" ")}
					src={avatar}
					alt="Cool Avocado"
					fill
					sizes="(max-width: 425px) 280px, (max-width: 1024px) 440px, (max-width: 1440px) 500px, 100vw"
					priority
					quality={75}
				/>
			</div>
		</div>
	);
};

export default AvatarAppIntro;
