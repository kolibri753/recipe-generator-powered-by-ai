import React, { useEffect, useState } from "react";
import styles from "./avatarAppIntro.module.css";
import Image from "next/image";

import avatar from "/public/images/avocado.png";

const AvatarAppIntro = () => {
	// State to control the typing animation
	const [typedText, setTypedText] = useState("");
	const introText =
		"Welcome to FoodieMate AI! I'm your friendly kitchen companion here to help you explore a world of delightful recipes. Let's embark on a delicious journey together!";

	useEffect(() => {
		const typeText = () => {
			const delay = 100;
			let currentIndex = 0;

			const typingInterval = setInterval(() => {
				if (currentIndex < introText.length) {
					setTypedText(introText.slice(0, currentIndex + 1));
					currentIndex++;
				} else {
					clearInterval(typingInterval);
				}
			}, delay);
		};

		typeText();

		return () => {
			// Cleanup if needed
		};
	}, []);

	return (
		<div className={styles.avatar}>
			<div
				className={[styles.avatar__textContainer, styles.avatar__thinking].join("")}
			>
				<p className={styles.avatar__text}>{typedText}</p>
			</div>
			<div className={styles.avatar__imageContainer}>
				<Image
					className={[styles.avatar__image, "non-draggable-img"].join(" ")}
					src={avatar}
					alt="Cool Avocado"
					width={437.5}
					height={500}
				/>
			</div>
		</div>
	);
};

export default AvatarAppIntro;
