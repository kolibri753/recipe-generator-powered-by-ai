import Image from "next/image";
import recipeBg from "/public/images/recipe-bg.png";

export default function Background() {
	return (
		<Image
			alt="Recipe"
			src={recipeBg}
			quality={50}
			fill
			priority
			sizes="100vw"
			style={{
				objectFit: "cover",
				opacity: "0.4",
			}}
		/>
	);
}
