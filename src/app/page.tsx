import AvatarAppIntro from "./components/avatar-app-intro/avatar-app-intro";
import Recipe from "./components/recipe/recipe";
import SearchBar from "./components/search-bar/search-bar";
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
