import React from "react";
import styles from "./avatarAppIntro.module.css";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import avatar from "/public/images/avocado.avif";

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
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString(introText[0])
							.pauseFor(5000)
							.deleteAll()
							.typeString(introText[1])
							.pauseFor(2000)
							.deleteAll()
							.typeString(introText[2])
							.pauseFor(2000)
							.deleteAll()
							.typeString(introText[3])
							.pauseFor(2000)
							.start();
					}}
					options={{
						autoStart: true,
						loop: true,
						delay: 75,
						wrapperClassName: styles.avatar__text,
					}}
				/>
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
