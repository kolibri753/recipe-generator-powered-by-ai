import AvatarAppIntro from "./components/avatarAppIntro/avatarAppIntro";
import Recipe from "./components/recipe/recipe";
import SearchBar from "./components/searchBar/searchBar";
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
