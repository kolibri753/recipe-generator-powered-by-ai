import React from "react";
import styles from "./avatarAppIntro.module.css";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import avatar from "/public/images/avocado.png";

const AvatarAppIntro = () => {
	const introText =
		"Welcome to FoodieMate AI! I'm your friendly kitchen companion here to help you explore a world of delightful recipes. Let's embark on a delicious journey together!";

	return (
		<div className={styles.avatar}>
			<div className={styles.avatar__textContainer}>
				<Typewriter
					options={{
						strings: [introText],
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
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
					quality={75}
					placeholder="empty"
				/>
			</div>
		</div>
	);
};

export default AvatarAppIntro;
