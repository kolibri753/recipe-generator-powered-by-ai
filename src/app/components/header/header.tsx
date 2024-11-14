import React from "react";
import Image from "next/image";
import ThemeChangerBtn from "../theme-changer-btn/theme-changer-btn";
import logo from "/public/images/logo.png";

import styles from "./styles.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<a className={styles.logo} href="/">
				<Image
					src={logo}
					width={80}
					height={80}
					alt="Logo"
					className="non-draggable-img"
					style={{ objectFit: "contain" }}
				/>
				<span className={styles.logo__text}>FoodieMate AI</span>
			</a>
			<ThemeChangerBtn />
		</header>
	);
};

export default Header;
