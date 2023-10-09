import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>&copy; {new Date().getFullYear()} FoodieMate AI. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
