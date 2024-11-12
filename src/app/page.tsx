import { AvatarAppIntro, Recipe, SearchBar } from "./components/components";

import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<SearchBar />
			<section className={styles.middle}>
				<AvatarAppIntro />
				<Recipe />
			</section>
		</main>
	);
}
