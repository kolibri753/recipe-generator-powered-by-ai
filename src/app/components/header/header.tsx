import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import ThemeChangerBtn from "../themeChangerBtn/themeChangerBtn";

import logo from "/public/images/logo.png";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image
					src={logo}
					width={80}
					height={80}
					alt="Logo"
					className="non-draggable-img"
					style={{ objectFit: "contain" }}
				/>
				<span className={styles.logo__text}>FoodieMate AI</span>
			</div>
			<ThemeChangerBtn />
		</header>
	);
};

export default Header;
